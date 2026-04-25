import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    visible && (
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-20 z-40 rounded-full bg-slate-900 p-3 text-white shadow-lg transition hover:scale-105 dark:bg-slate-100 dark:text-slate-900"
        aria-label="Scroll to top"
      >
        <HiArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
