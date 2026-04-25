import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const Experience = ({ items }) => (
  <AnimatedSection id="experience">
    <SectionTitle title="Experience" />
    <div className="relative mx-auto max-w-5xl border-l border-slate-300 pl-10 dark:border-slate-700">
      {items.map((item) => (
        <div key={item.role} className="relative mb-12">
          <span className="absolute -left-[53px] top-2 h-6 w-6 rounded-full border-[5px] border-white bg-brand-600 shadow dark:border-slate-950" />
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_35px_-20px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/60 md:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{item.role}</h3>
                <p className="mt-1 text-base text-slate-600 dark:text-slate-300">{item.company}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 sm:mt-1">{item.duration}</p>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.location}</p>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
            {item.certificateLink ? (
              <a
                href={item.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View Certificate →
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  </AnimatedSection>
);

export default Experience;
