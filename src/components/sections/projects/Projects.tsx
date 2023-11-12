import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { headingGradient } from "../hero/Hero";

const Projects = () => {
  return (
    <div id="projects" className="w-full max-w-screen-xl flex flex-col gap-6">
      <h2
        className={`w-full mt-10 scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-center ${headingGradient}`}
      >
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6 text-center md:text-start">
        {projects.map(({ title, summary, image, stack, links }, index) => (
          <ProjectCard
            title={title}
            summary={summary}
            image={image}
            stack={stack}
            links={links}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
