import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FloatingChatButton from "./components/FloatingChatButton";
import HomePage from "./pages/HomePage";
import { navLinks } from "./data/portfolioData";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.15 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar links={navLinks} activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ScrollToTopButton />
      <FloatingChatButton />
    </div>
  );
};

export default App;
