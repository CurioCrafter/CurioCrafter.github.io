import { Link } from "react-router-dom";
import ProjectFeature from "../components/ProjectFeature";
import {
  capabilityGroups,
  experiences,
  featuredProjectIds,
  profile,
  projects,
} from "../data/portfolio";
import { formatExperienceTimeframe } from "../utils/experience";

const featuredProjects = featuredProjectIds
  .slice(0, 3)
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);
const heroProject = projects.find((project) => project.id === "shipwreck-discovery");
const toolProofProjects = ["shipwreck-discovery", "terrainforge", "laser-saw"]
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Current VR production / Godot + OpenXR / Blender technical art</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">Game systems and production-ready 3D for Shipwreck Discovery.</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-signal-line" aria-label="Core technology">
            <span>Godot 4</span>
            <span>OpenXR</span>
            <span>GDScript</span>
            <span>Blender</span>
          </div>
          <div className="hero-actions">
            <Link className="button primary" to="/projects/shipwreck-discovery">
              View Shipwreck work
            </Link>
            <a className="button secondary" href={profile.resume}>
              Resume PDF
            </a>
          </div>
          <p className="hero-availability">
            <span /> Currently contributing to Shipwreck Discovery; open to junior game, tools,
            and technical art roles.
          </p>
        </div>

        {heroProject ? (
          <Link className="hero-stage" to={`/projects/${heroProject.id}`} aria-label={`Open ${heroProject.name} case study`}>
            <img
              src={heroProject.image}
              alt={heroProject.imageAlt}
            />
            <div className="hero-stage-topline">
              <span>Current professional VR work</span>
              <span>SteamVR + Meta Quest</span>
            </div>
            <div className="hero-stage-caption">
              <span>Shipwreck Discovery</span>
              <strong>Godot systems + coral asset pipeline</strong>
              <p>Gameplay integration, retopology, PBR delivery, and VR regression work.</p>
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
            <h2>Current VR production, independent worlds, and collaborative work.</h2>
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
          <p className="eyebrow">Blender / technical art</p>
          <h2>The Blender work is built, run, and captured.</h2>
          <p>
            Production coral retopology alongside verified add-ons on real geometry: TerrainForge
            terrain generation, Laser Saw mesh operations, PBR preparation, and runtime handoff.
          </p>
          <Link className="button secondary" to="/software">
            Explore Blender + tools
          </Link>
        </div>
        <div className="tool-reel-grid">
          {toolProofProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <img
                src={project.toolImage || project.image}
                alt={
                  project.id === "shipwreck-discovery"
                    ? "Shipwreck Discovery coral PBR result beside validated retopology"
                    : `${project.name} Blender workflow proof`
                }
              />
              <span>{project.eyebrow}</span>
              <strong>{project.name}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How I contribute</p>
            <h2>Useful across gameplay, tools, and the art-to-runtime handoff.</h2>
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
          <h2>Professional VR production backed by independent systems work.</h2>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article key={`${item.role}-${item.timeframe}`} className="timeline-item">
              <p>{formatExperienceTimeframe(item)}</p>
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
          <h2>Ready to help a game team build, test, and improve the next playable thing.</h2>
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
