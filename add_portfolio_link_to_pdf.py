from __future__ import annotations

import argparse
from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas


def _make_overlay_pdf(page_width: float, page_height: float, *, x: float, y: float, url: str) -> BytesIO:
    packet = BytesIO()
    c = canvas.Canvas(packet, pagesize=(page_width, page_height))
    c.setFont("Helvetica", 10)
    text = f"Portfolio: {url}"
    c.drawString(x, y, text)

    # Make the URL clickable. Keep the link rectangle simple and slightly padded.
    text_width = c.stringWidth(text, "Helvetica", 10)
    c.linkURL(
        url,
        (x, y - 2, x + text_width + 2, y + 10),
        relative=0,
        thickness=0,
        color=None,
    )
    c.showPage()
    c.save()
    packet.seek(0)
    return packet


def add_portfolio_link(
    input_pdf: Path,
    output_pdf: Path,
    *,
    url: str,
    page_index: int = 0,
    x: float = 50,
    y: float = 743,
) -> None:
    reader = PdfReader(str(input_pdf))
    writer = PdfWriter()

    if page_index < 0 or page_index >= len(reader.pages):
        raise ValueError(f"page_index out of range: {page_index} (pages: {len(reader.pages)})")

    for i, page in enumerate(reader.pages):
        if i == page_index:
            mb = page.mediabox
            width = float(mb.width)
            height = float(mb.height)

            overlay = PdfReader(_make_overlay_pdf(width, height, x=x, y=y, url=url))
            page.merge_page(overlay.pages[0])
        writer.add_page(page)

    output_pdf.parent.mkdir(parents=True, exist_ok=True)
    with output_pdf.open("wb") as f:
        writer.write(f)


def main() -> None:
    parser = argparse.ArgumentParser(description="Overlay a clickable portfolio link onto a resume PDF.")
    parser.add_argument(
        "--input",
        default="public/assets/Satish-C-Resume.pdf",
        help="Input PDF path (default: public/assets/Satish-C-Resume.pdf)",
    )
    parser.add_argument(
        "--output",
        default="public/assets/Satish-C-Resume.pdf",
        help="Output PDF path (default: overwrite input)",
    )
    parser.add_argument(
        "--url",
        default="https://satish-portfolio-sepia.vercel.app",
        help="Portfolio URL to add",
    )
    parser.add_argument("--page", type=int, default=0, help="0-based page index (default: 0)")
    parser.add_argument("--x", type=float, default=50, help="X coordinate in points (default: 50)")
    parser.add_argument("--y", type=float, default=743, help="Y coordinate in points (default: 743)")
    args = parser.parse_args()

    add_portfolio_link(
        Path(args.input),
        Path(args.output),
        url=args.url,
        page_index=args.page,
        x=args.x,
        y=args.y,
    )


if __name__ == "__main__":
    main()
