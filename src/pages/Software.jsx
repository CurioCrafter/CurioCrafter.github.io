import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { profile, projects, toolsPortfolioIds } from "../data/portfolio";

const toolProjects = toolsPortfolioIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);
const leadTool = projects.find((project) => project.id === "terrainforge");

const addonProofs = [
  {
    name: "Laser Saw",
    label: "Verified capped split",
    image: "images/laser-saw-production-cut-proof.webp",
    to: "/projects/laser-saw",
  },
  {
    name: "EasyTexture",
    label: "Base / Normal / ORM",
    image: "images/easytexture-game-prop-proof.webp",
    to: "/projects/blender-tools-pipeline",
  },
  {
    name: "AI Retopo Assist",
    label: "144 quads / clean report",
    image: "images/ai-retopo-authored-alien-surface-proof.webp",
    to: "/projects/blender-tools-pipeline",
  },
  {
    name: "Tidefront Asset Shelf",
    label: "Live panel + export record",
    image: "images/tidefront-asset-shelf-panel-proof.png",
    to: "/projects/tidefront-blender-workflow",
  },
];

const workflowSteps = [
  {
    title: "Build around an artist action",
    detail: "Start with the repeated terrain, mesh, material, or asset-management task that needs less friction.",
  },
  {
    title: "Make the result inspectable",
    detail: "Expose controls, preserve predictable output, and capture the before/action/result state on real geometry.",
  },
  {
    title: "Validate the handoff",
    detail: "Run add-on smoke checks, inspect output meshes or materials, and keep export or game-editor data in view.",
  },
];

function Software() {
  return (
    <main className="page-shell">
      <section className="lane-hero tool-lane-hero">
        <div className="lane-hero-copy">
          <p className="eyebrow">Python / Blender tools</p>
          <h1>Artist-facing tools with output you can inspect.</h1>
          <p>
            I build Blender add-ons, terrain and asset pipelines, and editor surfaces, then run
            them on production scenes and authored assets to verify the handoff.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects/terrainforge">
              View TerrainForge
            </Link>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
          </div>
        </div>
        {leadTool ? (
          <Link className="lane-hero-image tool-hero-image" to={`/projects/${leadTool.id}`}>
            <img src={leadTool.image} alt="TerrainForge tropical archipelago generated across four Blender terrain tiles" />
            <span>Four terrain tiles / Blender Python / export validation</span>
            <strong>{leadTool.name}</strong>
          </Link>
        ) : null}
      </section>

      <section className="section workflow-section">
        <div className="workflow-copy">
          <p className="eyebrow">Workflow mindset</p>
          <h2>From artist friction to tested output.</h2>
          <div className="workflow-step-list">
            {workflowSteps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="addon-proof-grid" aria-label="Blender add-on output captures">
          {addonProofs.map((proof) => (
            <Link key={proof.name} to={proof.to}>
              <img src={proof.image} alt={`${proof.name} ${proof.label}`} />
              <span>{proof.label}</span>
              <strong>{proof.name}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-heading lane-project-heading">
        <div>
          <p className="eyebrow">Tools case studies</p>
          <h2>Blender add-ons, game editors, and creative software.</h2>
        </div>
      </section>

      <section className="project-grid full">
        {toolProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 2} />
        ))}
      </section>

      <section className="lane-closing">
        <div>
          <p className="eyebrow">Tools role fit</p>
          <h2>Ready to support gameplay, tools, and technical art workflows on a game team.</h2>
        </div>
        <a className="button secondary" href={`mailto:${profile.email}`}>
          Discuss a tools role
        </a>
      </section>
    </main>
  );
}

export default Software;
