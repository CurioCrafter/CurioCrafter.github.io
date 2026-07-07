import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { blenderToolchain, projects } from "../data/portfolio";

const toolProjectIds = [
  "destimmer",
  "codex-3d-studio",
  "rts-builder",
  "song-deconstructor",
  "terrainforge",
  "blender-tools-pipeline",
  "ocean-drift-level-builder",
  "curiomesh",
  "codexforworkflow",
  "disk-space-inspector",
];
const toolProjects = toolProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);
const featuredTools = toolProjects.slice(0, 3);
const liveToolProjects = toolProjects.filter((project) => project.liveUrl);

const toolSignals = [
  {
    label: "Tool cases",
    value: `${toolProjects.length}`,
    detail: "Blender add-ons, editors, utilities, automation, audio, and WebGL tools.",
  },
  {
    label: "Blender workbench",
    value: `${blenderToolchain.length} tools`,
    detail: "Terrain, cutting, remeshing, generation, rigging, booleans, and AI studio surfaces.",
  },
  {
    label: "Public demos",
    value: `${liveToolProjects.length}`,
    detail: "Destimmer and Creature Lab prove browser-delivered interactive systems.",
  },
  {
    label: "Core lane",
    value: "Blender tools",
    detail: "Python add-ons, artist workflows, validation artifacts, and export-minded tooling.",
  },
];

const workflowLanes = [
  {
    title: "Artist-facing Blender tools",
    summary: "Turn repetitive content-production steps into add-ons with controls, QA artifacts, and export paths.",
    proof: ["TerrainForge", "CurioMesh", "Blender Tools Pipeline"],
  },
  {
    title: "Editors and production utilities",
    summary: "Build local-first tools with inspectors, catalogs, import/export, and practical operator workflows.",
    proof: ["RTS Builder", "Ocean Drift Level Builder", "Disk Space Inspector"],
  },
  {
    title: "Creative coding and automation",
    summary: "Ship interactive WebGL, audio-analysis, and AI workflow surfaces that are useful as well as visual.",
    proof: ["Destimmer", "SongDeconstructor", "CodexForWorkflow"],
  },
];

function Software() {
  return (
    <main className="page-shell">
      <section className="lane-hero tool-lane-hero">
        <div className="lane-hero-copy">
          <p className="eyebrow">Tools and software</p>
          <h1>Practical utilities for artists, operators, and developers.</h1>
          <p>
            This lane supports Python/Blender tools, technical art support, editor workflows,
            local-first utilities, creative coding, and safety-conscious automation roles.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects/blender-tools-pipeline">
              Blender pipeline proof
            </Link>
            <Link className="button secondary" to="/resume">
              Resume proof
            </Link>
          </div>
        </div>
        <div className="lane-hero-media" aria-label="Featured tool project screenshots">
          {featuredTools.map((project, index) => (
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

      <section className="lane-proof-strip" aria-label="Tools proof summary">
        {toolSignals.map((signal) => (
          <article key={signal.label}>
            <span>{signal.label}</span>
            <strong>{signal.value}</strong>
            <p>{signal.detail}</p>
          </article>
        ))}
      </section>

      <section className="lane-story-section" aria-label="Tools workflow lanes">
        <div>
          <p className="eyebrow">Tool role map</p>
          <h2>Frame the software work as production leverage.</h2>
          <p>
            These projects are strongest when presented as workflows that remove friction:
            create assets faster, inspect scenes clearly, automate safely, and export useful data.
          </p>
        </div>
        <div className="lane-story-list">
          {workflowLanes.map((lane, index) => (
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

      <section className="blender-feature">
        <div className="blender-feature-copy">
          <p className="eyebrow">Blender add-on workbench</p>
          <h2>More than one add-on: a small pipeline of artist tools.</h2>
          <p>
            I inspected the Blender project folders and pulled the strongest evidence into the
            portfolio: TerrainForge terrain export workflows, Laser Saw mesh cutting, remesh
            matrix artifacts, character-generation QA, rigging workflows, hard-surface boolean
            systems, and an in-Blender AI command surface.
          </p>
        </div>
        <img src="images/blender-tools-suite.png" alt="Blender tools pipeline proof sheet" />
      </section>

      <section className="toolchain-strip" aria-label="Blender toolchain projects">
        {blenderToolchain.map((tool) => (
          <article key={tool.name}>
            <p>{tool.role}</p>
            <h3>{tool.name}</h3>
            <span>{tool.proof}</span>
          </article>
        ))}
      </section>

      <section className="section-heading lane-project-heading">
        <div>
          <p className="eyebrow">Tools case studies</p>
          <h2>Project pages with proof points, screenshots, and workflow outcomes.</h2>
        </div>
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
