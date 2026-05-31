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
  "blender-alignment-suite",
  "codexforworkflow",
  "disk-space-inspector",
];
const toolProjects = toolProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);

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

      <section className="project-grid full">
        {toolProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 2} />
        ))}
      </section>
    </main>
  );
}

export default Software;
