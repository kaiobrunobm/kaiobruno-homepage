"use client";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../projects";

interface project {
  id: number;
  name: string;
  description: string;
  logoUrl?: string;
  htmlUrl: string;
  repoUrl: string;
}

const Projects = () => {
  return (
    <div className="h-full flex flex-wrap justify-center items-center gap-5">
      {projects.map((project: project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          logoUrl={project?.logoUrl}
          htmlUrl={project.htmlUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
