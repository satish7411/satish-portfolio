import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = ({ data }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = data.roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting && text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else if (deleting && text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else if (!deleting && text.length === currentRole.length) {
          setDeleting(true);
        } else if (deleting && text.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % data.roles.length);
        }
      },
      deleting ? 45 : text.length === currentRole.length ? 1200 : 90
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, data.roles]);

  return (
    <section id="home" className="relative mx-auto flex min-h-[100vh] w-full max-w-7xl items-center px-5 pt-28 md:px-8">
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-[1.6rem] font-extrabold leading-[1.12] tracking-tight text-slate-900 dark:text-slate-100 md:text-[2rem] lg:text-[2.8rem]">
            Hi, I&apos;m <span className="text-brand-600">{data.name}</span>
          </h1>
          <h2 className="mt-5 min-h-12 text-2xl font-bold text-brand-600 md:text-3xl">
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{data.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/assets/Satish-C-Resume.pdf"
              download="Satish-C-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Download Resume
            </a>
            <a
              href="mailto:satishsatish8078@gmail.com"
              className="rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 shadow-md transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              Let's Connect
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5 text-xl text-slate-700 dark:text-slate-200">
            <a href="https://github.com/satish7411" target="_blank" rel="noreferrer" className="transition hover:text-brand-600">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/satish711" target="_blank" rel="noreferrer" className="transition hover:text-brand-600">
              <FaLinkedin />
            </a>
            <a href="mailto:satishsatish8078@gmail.com" className="transition hover:text-brand-600">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative flex items-center justify-center">
            <motion.img
              src="https://www.svgrepo.com/show/184143/java.svg"
              alt="Java logo"
              className="w-[280px] max-w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
