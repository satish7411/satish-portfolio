import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { FaCertificate } from "react-icons/fa";

const CERT_LINKS_BY_NAME = {
  "Artificial Intelligence and Machine Learning":
    "https://drive.google.com/file/d/1LD7xUlxQp8lBGsvF-BHO3LHqM3SPTNj_/view",
  "SQL and SQL Server for Beginners":
    "https://drive.google.com/file/d/1CY2f6V9IbbwkZc2zPmYd5YsU0CKn1wyd/view",
  "HTML and CSS": "https://drive.google.com/file/d/1gPCXGuqjp_F8vpaBos5Glmc1W4ptcrI4/view",
  "Contextual Language Understanding with Transformer Models":
    "https://drive.google.com/file/d/1RQIgbGXcFAfRUoBrhUcUEFQp4O73ftPS/view",
};

const getCertificateLink = (item) => CERT_LINKS_BY_NAME[item?.name] ?? item?.link;

const Certifications = ({ items }) => (
  <AnimatedSection id="certifications">
    <SectionTitle title="Certifications" />
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {items.map((item) => {
        const link = getCertificateLink(item);
        return (
        <article
          key={link ?? item.name}
          onClick={() => window.open(link, "_blank")}
          className="cursor-pointer rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
        >
          <FaCertificate className="mb-3 text-3xl text-blue-500" />
          <p className="text-base font-bold text-gray-800 dark:text-slate-100">{item.name}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">{item.issuer}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-blue-500 dark:text-blue-400"
          >
            View Certificate →
          </a>
        </article>
        );
      })}
    </div>
  </AnimatedSection>
);

export default Certifications;
