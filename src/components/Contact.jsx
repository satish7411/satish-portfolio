import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const Contact = ({ contact }) => (
  <AnimatedSection id="contact">
    <SectionTitle title="Contact" />
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-slate-700 hover:text-brand-600 dark:text-slate-200">
          <HiOutlineMail /> {contact.email}
        </a>
        <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-slate-700 hover:text-brand-600 dark:text-slate-200">
          <HiOutlinePhone /> {contact.phone}
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-slate-700 hover:text-brand-600 dark:text-slate-200"
        >
          <FaLinkedin /> linkedin.com/in/satish711
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-slate-700 hover:text-brand-600 dark:text-slate-200"
        >
          <FaGithub /> github.com/satish7411
        </a>
      </div>

      <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
        />
        <textarea
          rows="5"
          placeholder="Message"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
        />
        <button
          type="submit"
          className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </AnimatedSection>
);

export default Contact;
