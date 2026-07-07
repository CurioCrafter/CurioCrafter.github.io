import { Link } from "react-router-dom";
import { capabilityGroups, experiences, profile, projects, resumeProofStack } from "../data/portfolio";

const workingPrinciples = [
  {
    title: "Ship proof, not claims",
    body: "Every major portfolio point should connect to a working demo, screenshot, capture, repo, or verification trail.",
  },
  {
    title: "Build useful vertical slices",
    body: "I reduce broad game and tools ideas into one playable loop, one visible workflow, or one reviewable artifact first.",
  },
  {
    title: "Bridge art and engineering",
    body: "The strongest work combines Blender, WebGL, Python, UI, and simulation so creative output becomes easier to produce.",
  },
  {
    title: "Keep learning visible",
    body: "Skill gaps turn into scoped prototypes, demo captures, short postmortems, and visible proof instead of vague plans.",
  },
];

const aboutProof = [
  {
    value: profile.proof[0].value,
    label: profile.proof[0].label,
    detail: "Audience-scale creative production with a real feedback loop.",
  },
  {
    value: `${projects.filter((project) => !project.isArchived).length}`,
    label: "project profiles",
    detail: "Games, WebGL art, Blender add-ons, desktop tools, and AI workflow systems.",
  },
  {
    value: `${projects.filter((project) => project.liveUrl).length}`,
    label: "public live demos",
    detail: "Browser-delivered work that opens without a private server.",
  },
  {
    value: "4",
    label: "target role lanes",
    detail: "Gameplay, Blender tools, technical art support, and creative technology.",
  },
];

function AboutMe() {
  return (
    <main className="page-shell">
      <section className="about-hero">
        <div>
          <p className="eyebrow">About Andrew</p>
          <h1>I build playable systems and practical creative tools.</h1>
          <p>
            {profile.summary} The through-line is visible proof: playable browser demos,
            Blender workflow tools, captured project evidence, and a downloadable resume
            grounded in real work.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              View projects
            </Link>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
            <Link className="button ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <aside className="about-operator-card" aria-label="Current positioning">
          <span>Current positioning</span>
          <strong>{profile.title}</strong>
          <p>
            Best fit: junior game development, Python/Blender tools, technical art support,
            gameplay prototyping, and creative technology roles.
          </p>
          <div className="about-role-list">
            {profile.roles.slice(0, 4).map((role) => (
              <small key={role}>{role}</small>
            ))}
          </div>
        </aside>
      </section>

      <section className="about-proof-strip" aria-label="About proof snapshot">
        {aboutProof.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="about-layout">
        <div className="about-panel">
          <h2>Target roles</h2>
          <div className="tag-row large">
            {profile.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </div>

        <div className="about-panel">
          <h2>Primary stack</h2>
          <div className="tag-row large">
            {profile.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-principles-section no-pad-top">
        <div>
          <p className="eyebrow">Working style</p>
          <h2>Broad ideas get turned into proof someone can inspect.</h2>
          <p>
            I am strongest when a project needs both taste and implementation: a playable
            loop, a working tool, a clean browser page, or a visual artifact that makes the
            system understandable quickly.
          </p>
        </div>
        <div className="about-principle-list">
          {workingPrinciples.map((principle, index) => (
            <article key={principle.title} className="about-principle-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{principle.title}</strong>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-proof-lanes-section no-pad-top">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Proof lanes</p>
            <h2>The portfolio is organized around role signals.</h2>
          </div>
          <a className="text-link" href={profile.resume}>
            Download resume
          </a>
        </div>
        <div className="about-lane-grid">
          {resumeProofStack.map((lane) => (
            <article key={lane.lane} className="about-lane-card">
              <span>{lane.lane}</span>
              <h3>{lane.title}</h3>
              <p>{lane.summary}</p>
              <div className="about-link-row">
                {lane.links.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section no-pad-top">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Skills are framed around what the projects actually use.</h2>
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

      <section className="section experience-section no-pad-top">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Hands-on technical work with public creative proof.</h2>
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
    </main>
  );
}

export default AboutMe;
