import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { gamePortfolioIds, profile, projects } from "../data/portfolio";

const gameProjects = gamePortfolioIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);
const leadGame = projects.find((project) => project.id === "ocean-supremacy");

const systemAreas = [
  {
    title: "Player-facing systems",
    detail: "Movement, camera feel, HUD state, abilities, objectives, lobbies, and readable feedback.",
  },
  {
    title: "Simulation and world rules",
    detail: "Terrain, spawning, growth, survival pressure, bot behavior, and data-driven map state.",
  },
  {
    title: "Browser 3D delivery",
    detail: "Three.js/WebGL rendering, Vite builds, interaction safety, responsive UI, and performance-aware scenes.",
  },
];

function Games() {
  return (
    <main className="page-shell">
      <section className="lane-hero game-lane-hero">
        <div className="lane-hero-copy">
          <p className="eyebrow">Game development</p>
          <h1>Playable 3D systems, simulated worlds, and readable feedback.</h1>
          <p>
            I build movement, HUDs, simulation rules, generated battlefields, authored terrain,
            and multiplayer-ready flows, then verify the slice in the browser.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects/ocean-supremacy">
              View Tidefront case study
            </Link>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
          </div>
        </div>
        {leadGame ? (
          <Link className="lane-hero-image" to={`/projects/${leadGame.id}`}>
            <img src={leadGame.image} alt="Tidefront fish gameplay in the authored reef world" />
            <span>Gameplay / authored terrain / multiplayer flow</span>
            <strong>{leadGame.name}</strong>
          </Link>
        ) : null}
      </section>

      <section className="system-area-strip" aria-label="Game development focus">
        {systemAreas.map((area, index) => (
          <article key={area.title}>
            <span>0{index + 1}</span>
            <h2>{area.title}</h2>
            <p>{area.detail}</p>
          </article>
        ))}
      </section>

      <section className="section-heading lane-project-heading">
        <div>
          <p className="eyebrow">Game case studies</p>
          <h2>From playable worlds to live upstream collaboration.</h2>
        </div>
      </section>

      <section className="project-grid full">
        {gameProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 2} />
        ))}
      </section>

      <section className="lane-closing">
        <div>
          <p className="eyebrow">How I work</p>
          <h2>I learn fastest by shipping a focused loop, testing it, and improving the feel.</h2>
        </div>
        <Link className="button secondary" to="/about">
          More about my process
        </Link>
      </section>
    </main>
  );
}

export default Games;
