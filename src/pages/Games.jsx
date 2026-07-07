import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { profile, projects } from "../data/portfolio";

const gameProjectIds = [
  "tidefront-terrain-studio",
  "ocean-supremacy",
  "claude-citizen",
  "tacops",
  "linear-drive",
  "procedural-ocean",
  "ant-colony",
];
const gameProjects = gameProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);
const featuredGames = gameProjects.slice(0, 3);
const publicGameProjects = gameProjects.filter((project) => project.liveUrl);

const gameSignals = [
  {
    label: "Playable proof",
    value: `${publicGameProjects.length} live demos`,
    detail: "Live demos plus captured runtime/workbench evidence reviewers can inspect quickly.",
  },
  {
    label: "Systems range",
    value: `${gameProjects.length} game cases`,
    detail: "Simulation, controls, HUD, survival pressure, lobbies, and rendering work.",
  },
  {
    label: "Best public start",
    value: "Tidefront Studio",
    detail: "The strongest finished surface for game tools, terrain authoring, QA, and playtest handoff.",
  },
  {
    label: "Core lane",
    value: "Gameplay systems",
    detail: "Readable behavior, 3D interfaces, survival loops, and prototype architecture.",
  },
];

const gameLanes = [
  {
    title: "Game tools and authoring systems",
    summary: "Lead with tools that make terrain, runtime state, QA evidence, and playtest handoff visible immediately.",
    proof: ["Tidefront Terrain Studio", "Ocean Drift"],
  },
  {
    title: "3D multiplayer-ready prototypes",
    summary: "Show rendering awareness, camera/HUD work, room flow, and authoritative-server planning.",
    proof: ["Ocean Drift", "TacOps", "Claude Citizen"],
  },
  {
    title: "Native and simulation depth",
    summary: "Use lower-level projects to show game-loop, survival, physics, and systems-programming thinking.",
    proof: ["Linear Drive", "Procedural Ocean", "Ant Colony Simulator"],
  },
];

function Games() {
  return (
    <main className="page-shell">
      <section className="lane-hero game-lane-hero">
        <div className="lane-hero-copy">
          <p className="eyebrow">Game work</p>
          <h1>Playable systems, simulation thinking, and 3D interfaces.</h1>
          <p>
            This lane is for junior game roles: demos first, then deeper case studies around
            controls, HUDs, AI/simulation rules, rendering, multiplayer flow, and native game loops.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects/tidefront-terrain-studio">
              Start with Terrain Studio
            </Link>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
          </div>
        </div>
        <div className="lane-hero-media" aria-label="Featured game project screenshots">
          {featuredGames.map((project, index) => (
            <Link
              key={project.id}
              className={index === 0 ? "lane-media-tile is-main" : "lane-media-tile"}
              to={`/projects/${project.id}`}
            >
              <img
                className={project.mediaFit === "contain" ? "contain-image" : undefined}
                src={project.image}
                alt={`${project.name} screenshot`}
              />
              <span>{project.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="lane-proof-strip" aria-label="Game proof summary">
        {gameSignals.map((signal) => (
          <article key={signal.label}>
            <span>{signal.label}</span>
            <strong>{signal.value}</strong>
            <p>{signal.detail}</p>
          </article>
        ))}
      </section>

      <section className="lane-story-section" aria-label="Game role lanes">
        <div>
          <p className="eyebrow">Game role map</p>
          <h2>Each game project has a specific application job.</h2>
          <p>
            The portfolio reads strongest when these are framed as focused proof lanes,
            not just a long list of prototypes.
          </p>
        </div>
        <div className="lane-story-list">
          {gameLanes.map((lane, index) => (
            <article key={lane.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{lane.title}</h3>
              <p>{lane.summary}</p>
              <div className="proof-points">
                {lane.proof.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-heading lane-project-heading">
        <div>
          <p className="eyebrow">Game case studies</p>
          <h2>Project pages with screenshots, proof points, and role signals.</h2>
        </div>
      </section>

      <section className="project-grid full">
        {gameProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 3} />
        ))}
      </section>
    </main>
  );
}

export default Games;
