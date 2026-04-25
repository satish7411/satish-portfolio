import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import TechScroll from "../components/TechScroll";
import Footer from "../components/Footer";
import {
  aboutText,
  certifications,
  contactData,
  education,
  experiences,
  heroData,
  projects,
  skills,
} from "../data/portfolioData";

const HomePage = () => (
  <>
    <Hero data={heroData} />
    <About aboutText={aboutText} image={heroData.image} />
    <Skills data={skills} />
    <Projects projects={projects} />
    <Experience items={experiences} />
    <Education items={education} />
    <Certifications items={certifications} />
    <TechScroll />
    <Footer contact={contactData} />
  </>
);

export default HomePage;
