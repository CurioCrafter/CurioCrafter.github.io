import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

const gameProjects = projects.filter((project) =>
  ["ocean-supremacy", "organism-evolution", "brainsim-md-trainer"].includes(project.id),
);

function Games() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Game work</p>
        <h1>Playable systems, simulation thinking, and 3D interfaces.</h1>
        <p>
          This slice emphasizes gameplay prototypes, simulation architecture, rendering awareness,
          player HUDs, and acceptance-tested interactive experiences.
        </p>
      </section>

      <section className="project-grid full">
        {gameProjects.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </section>
    </main>
  );
}

export default Games;
