"use client";

import ProjectCard from "@/components/ProjectCard";

import { projects } from "@/constants/data";

function Projects() {
  return (
    <div className="wrapper max-w-3xl space-y-6 pb-[var(--vertical-section-offset)]">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          link={project.link}
          bannerImg={project.bannerImg}
          name={project.name}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  );
}

export default Projects;
