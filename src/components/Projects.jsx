import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const ProjectCard = ({ project }) => {
  const liveDemo = project.liveDemo ?? project.live ?? project.demo ?? "#";
  const fallbackImage =
    project.title === "Farm2Market"
      ? "https://placehold.co/400x200/16a34a/ffffff?text=Farm2Market"
      : null;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardClick = () => {
    // Per requirement: card click opens Live Demo in new tab.
    openInNewTab(liveDemo);
  };

  const cardClassName =
    "group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60";

  const cardInner = (
    <>
      {project.image ? (
        <img
          src={project.image}
          alt=""
          className="h-48 w-full object-cover rounded-t-2xl"
          loading="lazy"
          onError={(e) => {
            if (!fallbackImage) return;
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImage;
          }}
        />
      ) : null}

      <h3 className="mt-3 px-4 text-lg font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
      <p className="truncate px-4 mt-1 text-sm text-gray-500 dark:text-slate-400">{project.description}</p>

      <div className="mt-auto px-4 pb-4 pt-4">
        <div className="text-right text-sm text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Project →
        </div>
      </div>
    </>
  );

  if (project.title === "Farm2Market") {
    return (
      <div
        onClick={() => window.open("https://farm2market-nu.vercel.app/", "_blank")}
        className={cardClassName}
      >
        {cardInner}
      </div>
    );
  }

  return (
    <article onClick={handleCardClick} className={cardClassName}>
      {cardInner}
    </article>
  );
};

const Projects = ({ projects }) => (
  <AnimatedSection id="projects">
    <SectionTitle title="Projects" />
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </AnimatedSection>
);

export default Projects;
