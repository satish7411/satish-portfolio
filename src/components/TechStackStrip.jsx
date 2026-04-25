import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { FaDocker, FaGitAlt, FaJava, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techItems = [
  { name: "Java", Icon: FaJava },
  { name: "React", Icon: FaReact },
  { name: "Python", Icon: FaPython },
  { name: "Docker", Icon: FaDocker },
  { name: "Git", Icon: FaGitAlt },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "MongoDB", Icon: SiMongodb },
];

const TechStackStrip = () => {
  const duplicated = [...techItems, ...techItems];

  return (
    <AnimatedSection id="tech-stack">
      <SectionTitle title="Tech Stack" />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white py-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {duplicated.map(({ name, Icon }, idx) => (
            <div key={`${name}-${idx}`} className="mx-6">
              <Icon className="text-4xl text-slate-700 dark:text-slate-200" title={name} />
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default TechStackStrip;
