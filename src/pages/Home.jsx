import { Link } from "react-router-dom";
import ProjectFeature from "../components/ProjectFeature";
import {
  capabilityGroups,
  experiences,
  featuredProjectIds,
  profile,
  projects,
} from "../data/portfolio";

const featuredProjects = featuredProjectIds
  .slice(0, 3)
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);
const heroProject = projects.find((project) => project.id === "tidefront-terrain-studio");
const toolProofProjects = ["laser-saw", "tidefront-blender-workflow", "blender-tools-pipeline"]
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Game developer / Python + Blender tools</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">I build playable systems and the tools that make them easier to ship.</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              View selected work
            </Link>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
          </div>
          <p className="hero-availability">
            <span /> Open to junior game development, tools, and technical art support roles.
          </p>
        </div>

        {heroProject ? (
          <Link className="hero-stage" to={`/projects/${heroProject.id}`} aria-label={`Open ${heroProject.name} case study`}>
            <img src={heroProject.detailImage || heroProject.image} alt={`${heroProject.name} terrain authoring workspace`} />
            <div className="hero-stage-topline">
              <span>Featured build</span>
              <span>Three.js / terrain authoring / QA</span>
            </div>
            <div className="hero-stage-caption">
              <span>Ocean Drift toolchain</span>
              <strong>{heroProject.name}</strong>
              <p>Map generation, sculpting, architecture stamps, export, and playtest handoff.</p>
            </div>
          </Link>
        ) : null}
      </section>

      <section className="proof-strip" aria-label="Portfolio proof summary">
        {profile.proof.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section featured-work-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Three projects that show how I think and build.</h2>
          </div>
          <Link className="text-link" to="/projects">
            Browse all selected work
          </Link>
        </div>
        <div className="project-feature-list">
          {featuredProjects.map((project, index) => (
            <ProjectFeature key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="section tool-reel-section">
        <div className="tool-reel-copy">
          <p className="eyebrow">Blender tool work</p>
          <h2>Artist-facing add-ons, tested on real geometry.</h2>
          <p>
            The Blender work is presented as workflow evidence: generated terrain, capped mesh
            cuts, shared asset data, and repeatable validation captures.
          </p>
          <Link className="button secondary" to="/software">
            Explore Blender + tools
          </Link>
        </div>
        <div className="tool-reel-grid">
          {toolProofProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <img src={project.image} alt={`${project.name} Blender workflow proof`} />
              <span>{project.eyebrow}</span>
              <strong>{project.name}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Useful across gameplay, tools, and technical art support.</h2>
          </div>
        </div>
        <div className="capability-grid">
          {capabilityGroups.map((group, index) => (
            <article key={group.title} className="capability-panel">
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.slice(0, 5).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Independent production, collaboration, and hands-on problem solving.</h2>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article key={`${item.role}-${item.timeframe}`} className="timeline-item">
              <p>{item.timeframe}</p>
              <h3>{item.role}</h3>
              <span>{item.organization}</span>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <p className="eyebrow">Available for junior roles</p>
          <h2>Looking for a team where I can contribute, learn quickly, and ship useful game work.</h2>
        </div>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            Email Andrew
          </a>
          <Link className="button secondary" to="/contact">
            Contact details
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
