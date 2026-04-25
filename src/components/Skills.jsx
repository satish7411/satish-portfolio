import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const iconMap = {
  "Programming Languages": FaCode,
  "Frameworks & Libraries": SiSpringboot,
  Databases: FaDatabase,
  "DevOps & Tools": FaTools,
};

const Skills = ({ data }) => (
  <AnimatedSection id="skills">
    <SectionTitle title="Skills" />
    <p className="-mt-5 mb-12 text-center text-base text-slate-500 dark:text-slate-400">
      A selection of my core skills and technologies, spanning full stack development, backend engineering, and AI/ML tools.
    </p>
    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
      {Object.entries(data).map(([category, items]) => (
        (() => {
          const Icon = iconMap[category] || FaCode;
          return (
        <div
          key={category}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_35px_-20px_rgba(15,23,42,0.35)] transition hover:-translate-y-2 hover:border-brand-500 hover:shadow-[0_24px_45px_-20px_rgba(37,99,235,0.4)] dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div className="mb-5 flex items-center justify-center gap-2 text-brand-600">
            <Icon className="text-xl" />
            <h3 className="text-center text-xl font-semibold text-slate-900 dark:text-slate-100">{category}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:bg-brand-600 hover:text-white dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
          );
        })()
      ))}
    </div>
  </AnimatedSection>
);

export default Skills;
