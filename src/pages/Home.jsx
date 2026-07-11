import { Link } from "react-router-dom";
import ProjectFeature from "../components/ProjectFeature";
import StrandField from "../components/StrandField";
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
const heroProject = projects.find((project) => project.id === "ocean-supremacy");
const toolProofProjects = ["terrainforge", "laser-saw", "tidefront-blender-workflow"]
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

function Home() {
  return (
    <main>
      <section className="hero">
        <StrandField />
        <div className="hero-content">
          <p className="eyebrow">Game developer / Python + Blender tools / Dixon, Missouri</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">Gameplay systems with a toolmaker&apos;s eye.</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-signal-line" aria-label="Core technology">
            <span>Three.js</span>
            <span>TypeScript</span>
            <span>Python</span>
            <span>Blender</span>
          </div>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              Explore selected work
            </Link>
            <a className="button secondary" href={profile.resume}>
              Resume PDF
            </a>
          </div>
          <p className="hero-availability">
            <span /> Open to junior game development, tools, and technical art support roles.
          </p>
        </div>

        {heroProject ? (
          <Link className="hero-stage" to={`/projects/${heroProject.id}`} aria-label={`Open ${heroProject.name} case study`}>
            <img
              src="images/tidefront-blender-showcase.webp"
              alt="Tidefront underwater terrain and reef scene rendered from Andrew's Blender file"
            />
            <div className="hero-stage-topline">
              <span>Current environment build</span>
              <span>Blender 4.5 / Three.js</span>
            </div>
            <div className="hero-stage-caption">
              <span>Tidefront / Ocean Drift</span>
              <strong>Underwater worldbuilding pipeline</strong>
              <p>Authored terrain, coral placement, Blender scene work, and runtime handoff.</p>
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
            <h2>Playable worlds, production tools, and work that shipped upstream.</h2>
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
            Real add-ons on real geometry and production scenes: TerrainForge terrain, Laser Saw
            mesh operations, asset handoff, and the Tidefront underwater environment.
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
            <h2>One developer across runtime, editor, and asset workflow.</h2>
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
