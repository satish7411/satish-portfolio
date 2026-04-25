import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ contact }) => (
  <footer className="border-t border-slate-200 dark:border-slate-800">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="flex items-center justify-between px-8 py-6 text-sm text-gray-500 dark:text-slate-400">
        <p>© 2025 Satish C. All rights reserved.</p>
        <div className="flex items-center gap-5 text-xl text-gray-600 dark:text-slate-300">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={`mailto:${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
