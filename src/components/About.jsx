import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const About = ({ aboutText, image }) => (
  <AnimatedSection id="about">
    <SectionTitle title="About Me" />
    <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-slate-200/80 bg-white p-10 shadow-[0_20px_45px_-20px_rgba(37,99,235,0.35)] dark:border-slate-800 dark:bg-slate-900/60 md:p-12">
      <div className="grid items-center gap-10 lg:grid-cols-[300px_1fr]">
        <div className="mx-auto">
          <div className="rounded-full bg-white p-2.5 shadow-xl dark:bg-slate-950">
            <div className="rounded-full border-[6px] border-brand-600/90 p-1">
              <img src={image} alt="Satish C profile" className="h-56 w-56 rounded-full object-cover md:h-60 md:w-60" />
            </div>
          </div>
        </div>
        <div className="text-slate-600 dark:text-slate-300">
          <p className="whitespace-pre-line text-lg leading-9">{aboutText}</p>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default About;
