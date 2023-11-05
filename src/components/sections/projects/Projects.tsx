import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full max-w-screen-xl flex flex-col gap-6">
      <h2 className="w-full mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(({ title, summary, image, links }, index) => (
          <ProjectCard
            title={title}
            summary={summary}
            image={image}
            links={links}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
