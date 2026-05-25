import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

const toolProjects = projects.filter((project) =>
  [
    "ocean-drift-level-builder",
    "curiomesh",
    "blender-alignment-suite",
    "codexforworkflow",
    "disk-space-inspector",
  ].includes(project.id),
);

function Software() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Tools and software</p>
        <h1>Practical utilities for artists, operators, and developers.</h1>
        <p>
          This slice emphasizes Python/Blender tools, editor workflows, desktop utilities,
          local-first software, and safety-conscious automation.
        </p>
      </section>

      <section className="project-grid full">
        {toolProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 2} />
        ))}
      </section>
    </main>
  );
}

export default Software;
