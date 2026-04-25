import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

const toId = (label) => (label === "Home" ? "home" : label.toLowerCase());

const Navbar = ({ links, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseLink =
    "relative text-base font-semibold text-slate-700 transition hover:text-brand-600 dark:text-slate-200 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform";
  const activeLink = "text-brand-600 dark:text-brand-400 after:scale-x-100";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition ${
        scrolled
          ? "bg-white/80 shadow-md backdrop-blur-xl dark:bg-slate-950/70"
          : "bg-white/70 backdrop-blur-xl dark:bg-slate-950/50"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Satish <span className="text-brand-600">C</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const id = toId(link);
            return (
              <a
                key={link}
                href={`#${id}`}
                className={`${baseLink} ${activeSection === id ? activeLink : ""}`}
              >
                {link}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="text-2xl text-slate-900 dark:text-slate-100 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const id = toId(link);
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  className={`text-sm ${
                    activeSection === id ? "text-brand-600 dark:text-brand-400" : "text-slate-700 dark:text-slate-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
