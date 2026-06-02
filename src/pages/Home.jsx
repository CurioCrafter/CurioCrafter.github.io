import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import {
  capabilityGroups,
  experiences,
  featuredProjectIds,
  nextBuilds,
  profile,
  projects,
  roleFit,
} from "../data/portfolio";

const featuredProjects = featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);
const previewBuilds = nextBuilds.slice(0, 3);
const destimmerHeroUrl =
  "destimmer/index.html?trip=fastTrance&view3d=polytopeSwarm&pattern=plasma&images=false&ui=hidden&pointer=1&interaction=1.35&reactive=true";
const destimmerStudioUrl =
  "destimmer/index.html?trip=fastTrance&view3d=polytopeSwarm&pattern=plasma&images=false";
const creatureLabUrl = "creature-lab/index.html";

function Home() {
  return (
    <main>
      <section className="hero">
        <iframe
          className="hero-experience hero-experience-playable"
          src={destimmerHeroUrl}
          title="Playable Destimmer WebGL artwork"
          allow="autoplay; fullscreen"
        />
        <div className="hero-scrim" />
        <div className="hero-kinetic-field" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-interaction-cue" aria-hidden="true">
          <span className="cue-ring cue-ring-one" />
          <span className="cue-ring cue-ring-two" />
          <span className="cue-core" />
        </div>
        <div className="hero-signal-stack" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-content">
          <p className="eyebrow">{profile.handle} portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              View selected work
            </Link>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              Email Andrew
            </a>
            <a className="button ghost" href={profile.resume}>
              Resume
            </a>
            <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <aside className="hero-play-panel" aria-label="Playable homepage artwork">
          <span>Live Destimmer playground</span>
          <p>Drag the artwork or open full controls.</p>
          <div>
            <a href={destimmerStudioUrl}>Open studio</a>
            <Link to="/projects/destimmer">Case study</Link>
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Public proof">
        {profile.proof.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="destimmer-spotlight" aria-label="Playable Destimmer generative artwork">
        <div className="destimmer-copy">
          <p className="eyebrow">Creative coding proof</p>
          <h2>Play with Destimmer directly on this page.</h2>
          <p>
            WebGL geometry, canvas fallback, trip presets, studio controls, and a local
            generative music engine built into one self-contained artwork.
          </p>
          <div className="hero-actions">
            <a className="button secondary" href={destimmerStudioUrl}>
              Open full Destimmer
            </a>
            <Link className="button ghost" to="/projects/destimmer">
              View case study
            </Link>
          </div>
        </div>
        <div className="destimmer-frame-shell">
          <iframe
            src={destimmerStudioUrl}
            title="Playable Destimmer WebGL artwork"
            loading="lazy"
            allow="autoplay; fullscreen"
          />
        </div>
      </section>

      <section className="playable-lab-section" aria-label="Playable Creature Behavior Lab">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Playable systems demo</p>
            <h2>Try the Creature Behavior Lab without leaving the homepage.</h2>
          </div>
          <div className="hero-actions">
            <a className="button secondary" href={creatureLabUrl}>
              Open full lab
            </a>
            <Link className="button ghost" to="/projects/creature-behavior-lab">
              View case study
            </Link>
          </div>
        </div>
        <div className="playable-lab-frame-shell">
          <iframe
            src={creatureLabUrl}
            title="Playable Creature Behavior Lab simulation"
            loading="lazy"
            allow="fullscreen"
          />
        </div>
      </section>

      <section className="section intro-grid">
        <div>
          <p className="eyebrow">Employer signal</p>
          <h2>Practical game and tools work, not just screenshots.</h2>
        </div>
        <div className="intro-copy">
          <p>
            The portfolio is aimed at junior game development, Python tools, Blender pipeline,
            gameplay prototyping, and creative technology roles. It leads with visible shipped
            work, measurable audience proof, and specific engineering systems.
          </p>
          <div className="tag-row large">
            {profile.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section evidence-section">
        <div>
          <p className="eyebrow">Evidence trail</p>
          <h2>Proof is part of the portfolio, not an afterthought.</h2>
        </div>
        <div className="evidence-grid">
          {profile.evidence.map((item) => (
            <article key={item}>
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section role-ladder-section">
        <div>
          <p className="eyebrow">Hiring map</p>
          <h2>Four role lanes, each tied to visible work.</h2>
        </div>
        <div className="role-ladder-grid">
          {roleFit.map((fit) => (
            <article key={fit.role}>
              <h3>{fit.role}</h3>
              <p>{fit.pitch}</p>
              <span>{fit.proof.join(" / ")}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section next-preview-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Next project goals</p>
            <h2>Where I would push the portfolio next.</h2>
          </div>
          <Link className="text-link" to="/goals">
            Full roadmap
          </Link>
        </div>
        <div className="next-preview-grid">
          {previewBuilds.map((build, index) => (
            <article key={build.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{build.name}</h3>
              <strong>{build.priority}</strong>
              <p>{build.goal}</p>
              <small>{build.deliverable}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Case studies that map directly to hiring needs.</h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical focus</p>
            <h2>Built around the roles you are targeting.</h2>
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
