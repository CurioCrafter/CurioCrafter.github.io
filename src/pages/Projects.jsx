import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

function Projects() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Selected work</p>
        <h1>Projects with evidence, systems, and hiring relevance.</h1>
        <p>
          These are the projects I would put in front of a hiring manager first:
          game prototypes, Blender tools, editor workflows, simulations, and practical desktop apps.
        </p>
      </section>

      <section className="project-grid full">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 2} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
