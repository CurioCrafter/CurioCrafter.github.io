import ProjectCard from "../components/ProjectCard";
import { inspectedProjects, projects } from "../data/portfolio";

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

      <section className="inventory-section" aria-label="Broader project inventory checked">
        <div>
          <p className="eyebrow">Broader inventory checked</p>
          <h2>Additional project folders reviewed for resume evidence.</h2>
        </div>
        <div className="inventory-grid">
          {inspectedProjects.map((project) => (
            <article key={project.name}>
              <p>{project.type}</p>
              <h3>{project.name}</h3>
              <span>{project.evidence}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
