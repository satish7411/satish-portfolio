import { motion } from "framer-motion";

const AnimatedSection = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`mx-auto w-full max-w-7xl px-5 py-14 md:px-8 md:py-16 ${className}`}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
