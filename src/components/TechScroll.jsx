import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techIcons = [
  { icon: <FaJava />, name: "Java", color: "#f89820" },
  { icon: <FaReact />, name: "React", color: "#61DBFB" },
  { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <FaPython />, name: "Python", color: "#3776AB" },
  { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
  { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#4DB33D" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
];

const duplicated = [...techIcons, ...techIcons];

const TechScroll = () => {
  const controls = useAnimationControls();

  const startScroll = () =>
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });

  useEffect(() => {
    startScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="tech-scroll" className="overflow-hidden w-full py-8 bg-gray-50 dark:bg-gray-800">
      <motion.div
        className="flex gap-12 w-max"
        animate={controls}
        // Per requirement (kept), but Framer-driven transforms don't pause via CSS.
        whileHover={{ animationPlayState: "paused" }}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => startScroll()}
      >
        {duplicated.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div
              className="text-5xl transition-transform duration-300 group-hover:scale-125"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechScroll;

