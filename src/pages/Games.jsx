import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { gamePortfolioIds, profile, projects } from "../data/portfolio";

const gameProjects = gamePortfolioIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);
const leadGame = projects.find((project) => project.id === "shipwreck-discovery");

const systemAreas = [
  {
    title: "Player-facing systems",
    detail: "VR interaction, movement, camera feel, HUD state, abilities, objectives, and readable feedback.",
  },
  {
    title: "Simulation and world rules",
    detail: "Terrain, spawning, growth, survival pressure, bot behavior, and data-driven map state.",
  },
  {
    title: "Runtime delivery",
    detail: "Godot/OpenXR integration, SteamVR and Meta Quest targets, browser 3D, regression checks, and performance-aware scenes.",
  },
];

function Games() {
  return (
    <main className="page-shell">
      <section className="lane-hero game-lane-hero">
        <div className="lane-hero-copy">
          <p className="eyebrow">Game development</p>
          <h1>VR gameplay, simulated worlds, and readable interaction.</h1>
          <p>
            I currently contribute Godot/OpenXR gameplay and real-time coral assets to Shipwreck
            Discovery, while continuing to build independent 3D systems and authored worlds.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects/shipwreck-discovery">
              View Shipwreck case study
            </Link>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
          </div>
        </div>
        {leadGame ? (
          <Link className="lane-hero-image" to={`/projects/${leadGame.id}`}>
            <img src={leadGame.image} alt={leadGame.imageAlt} />
            <span>Current VR production / Godot / OpenXR</span>
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
          <h2>Current studio work, independent builds, and upstream collaboration.</h2>
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
