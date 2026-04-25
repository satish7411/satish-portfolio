const SectionTitle = ({ title }) => (
  <div className="mb-12 text-center">
    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">{title}</h2>
    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-500 shadow-sm" />
  </div>
);

export default SectionTitle;
