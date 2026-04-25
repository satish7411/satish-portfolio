import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { FaCertificate } from "react-icons/fa";

const Certifications = ({ items }) => (
  <AnimatedSection id="certifications">
    <SectionTitle title="Certifications" />
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.link}
          onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
          className="cursor-pointer rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
        >
          <FaCertificate className="mb-3 text-3xl text-blue-500" />
          <p className="text-base font-bold text-gray-800 dark:text-slate-100">{item.name}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">{item.issuer}</p>
          <p className="mt-3 text-sm font-medium text-blue-500 dark:text-blue-400">View Certificate →</p>
        </article>
      ))}
    </div>
  </AnimatedSection>
);

export default Certifications;
