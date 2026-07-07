import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import {
  capabilityGroups,
  evidenceScreenshots,
  experiences,
  featuredProjectIds,
  profile,
  projects,
} from "../data/portfolio";

const featuredProjects = featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);
const heroVisualProjects = ["tidefront-terrain-studio", "tidefront-blender-workflow", "claude-citizen"]
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);
const [primaryVisual, ...supportingVisuals] = heroVisualProjects;

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">{profile.handle} portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              View selected work
            </Link>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
            <a className="button ghost" href={`mailto:${profile.email}`}>
              Email Andrew
            </a>
          </div>
        </div>

        {primaryVisual ? (
          <div className="hero-visual" aria-label="Portfolio visual preview">
            <div className="hero-visual-frame">
              <img
                className={primaryVisual.mediaFit === "contain" ? "contain-image" : undefined}
                src={primaryVisual.image}
                alt={`${primaryVisual.name} proof screenshot`}
              />
              <div className="hero-visual-caption">
                <span>{primaryVisual.eyebrow}</span>
                <strong>{primaryVisual.name}</strong>
              </div>
            </div>
            <div className="hero-visual-rail" aria-label="Additional project previews">
              {supportingVisuals.map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                  <img
                    className={project.mediaFit === "contain" ? "contain-image" : undefined}
                    src={project.image}
                    alt={`${project.name} screenshot`}
                  />
                  <span>{project.name}</span>
                </Link>
              ))}
            </div>
            <div className="hero-visual-tags" aria-label="Core technical lanes">
              <span>Blender API</span>
              <span>WebGL</span>
              <span>Simulation</span>
            </div>
          </div>
        ) : null}
      </section>

      <section className="proof-strip" aria-label="Public proof">
        {profile.proof.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section screenshot-proof-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Screenshot proof</p>
            <h2>Recent captures from the tools and game work.</h2>
          </div>
          <Link className="text-link" to="/projects/tidefront-terrain-studio">
            Lead case study
          </Link>
        </div>
        <div className="screenshot-proof-grid">
          {evidenceScreenshots.map((shot) => (
            <Link key={`${shot.title}-${shot.image}`} className="screenshot-proof-tile" to={shot.to}>
              <img src={shot.image} alt={shot.alt} />
              <span>{shot.label}</span>
              <strong>{shot.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section selected-work-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Finished proof for game, tools, and technical art roles.</h2>
          </div>
          <Link className="text-link" to="/projects">
            All work
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="section intro-grid">
        <div>
          <p className="eyebrow">Role focus</p>
          <h2>Practical game systems backed by production-minded tools.</h2>
        </div>
        <div className="intro-copy">
          <p>
            The strongest thread is hands-on implementation: playable browser demos, Blender
            Python tools, 3D/editor workflows, simulation systems, and polished case studies that
            a reviewer can scan quickly.
          </p>
          <div className="tag-row large">
            {profile.focusAreas.slice(0, 5).map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical focus</p>
            <h2>Built around the work recruiters can inspect.</h2>
          </div>
        </div>
        <div className="capability-grid">
          {capabilityGroups.map((group) => (
            <article key={group.title} className="capability-panel">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
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
          <h2>Independent builder with real audience feedback loops.</h2>
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
          <p className="eyebrow">Open to junior roles</p>
          <h2>Game development, Blender tools, technical art support, and gameplay prototyping.</h2>
        </div>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            Contact Andrew
          </a>
          <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
