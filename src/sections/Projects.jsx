import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import empty4 from "../assets/design/empty4.png";

const Projects = () => {
  return (
    <section id="projects" className="overflow-hidden">
      <div
        className="h-screen w-screen bg-cover bg-center flex justify-center items-center relative"
        style={{ 
          height: '80vh',
          backgroundImage: `url(${empty4})` 
        }}
      >
        {/* Project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              source={project.source}
              tools={project.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
