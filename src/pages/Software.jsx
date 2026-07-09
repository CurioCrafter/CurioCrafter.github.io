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
    label: "Capped mesh split",
    image: "images/laser-saw-capped-split-proof.png",
    to: "/projects/laser-saw",
  },
  {
    name: "EasyTexture",
    label: "Material workflow proof",
    image: "images/easytexture-addon-pbr-proof.png",
    to: "/projects/blender-tools-pipeline",
  },
  {
    name: "AI Retopo Assist",
    label: "Topology guide output",
    image: "images/ai-retopo-assist-proof.png",
    to: "/projects/blender-tools-pipeline",
  },
  {
    name: "Tidefront Asset Shelf",
    label: "Reusable scene assets",
    image: "images/tidefront-asset-shelf-addon-proof.png",
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
          <h1>Tools that turn repetitive 3D work into a clear workflow.</h1>
          <p>
            I build Blender add-ons, terrain and asset pipelines, editor surfaces, and local
            utilities with an emphasis on visible results and safe iteration.
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
            <img src={leadTool.image} alt="TerrainForge generated cliff terrain in Blender" />
            <span>Procedural terrain / Blender Python / validation</span>
            <strong>{leadTool.name}</strong>
          </Link>
        ) : null}
      </section>

      <section className="section workflow-section">
        <div className="workflow-copy">
          <p className="eyebrow">Workflow mindset</p>
          <h2>From repeated task to tested tool.</h2>
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
          <h2>Best suited to Blender tooling, technical art support, and editor workflow work.</h2>
        </div>
        <a className="button secondary" href={`mailto:${profile.email}`}>
          Discuss a tools role
        </a>
      </section>
    </main>
  );
}

export default Software;
