import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

const getEducationIcon = (degree) => {
  if (degree.includes("Bachelor")) return FaGraduationCap;
  if (degree.includes("PUC")) return FaSchool;
  return PiCertificateFill;
};

const Education = ({ items }) => (
  <AnimatedSection id="education">
    <SectionTitle title="Education" />
    <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        (() => {
          const Icon = getEducationIcon(item.degree);
          return (
            <article
              key={item.degree}
              className="min-h-[280px] rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_35px_-20px_rgba(15,23,42,0.35)] transition hover:-translate-y-1.5 hover:shadow-[0_24px_45px_-20px_rgba(37,99,235,0.35)] dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/10">
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{item.degree}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{item.institute}</p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{item.year}</p>
              <p className="mt-2 text-base font-semibold text-brand-600">{item.score}</p>
            </article>
          );
        })()
      ))}
    </div>
  </AnimatedSection>
);

export default Education;
