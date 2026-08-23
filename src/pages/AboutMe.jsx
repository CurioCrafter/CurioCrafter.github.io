import { Link } from "react-router-dom";
import { capabilityGroups, experiences, profile } from "../data/portfolio";
import { formatExperienceTimeframe } from "../utils/experience";

const workingPrinciples = [
  {
    title: "Make it playable or inspectable",
    body: "I learn by building a working slice, then capturing the behavior, output, and tradeoffs clearly.",
  },
  {
    title: "Bridge art and engineering",
    body: "I enjoy the point where meshes, terrain, UI, data, rendering, and gameplay rules have to work together.",
  },
  {
    title: "Respond well to review",
    body: "I am comfortable iterating in an existing codebase, keeping scope contained, and improving work from concrete feedback.",
  },
];

function AboutMe() {
  return (
    <main className="page-shell">
      <section className="about-hero">
        <div>
          <p className="eyebrow">About Andrew</p>
          <h1>A game developer bridging runtime systems and production-ready 3D.</h1>
          <p>
            I am a game developer and 3D technical artist in Dixon, Missouri, currently
            contributing to Shipwreck Discovery. My work spans Godot/OpenXR gameplay, coral
            retopology and PBR delivery, Python/Blender tools, terrain systems, and browser 3D.
          </p>
          <p>
            I bring current production experience, a practical field-work background, a large
            creative feedback loop, and the persistence to turn unfamiliar technical problems
            into inspectable results.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              View selected work
            </Link>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
          </div>
        </div>
        <figure className="about-visual">
          <img
            src="images/shipwreck-retopology-proof.webp"
            alt="Shipwreck Discovery coral PBR result beside validated real-time retopology"
          />
          <figcaption>
            <span>Current production work</span>
            <strong>Godot gameplay and Blender-to-VR asset delivery</strong>
          </figcaption>
        </figure>
      </section>

      <section className="section about-principles-section">
        <div className="about-principles-intro">
          <p className="eyebrow">Working style</p>
          <h2>Direct, visual, and comfortable with iteration.</h2>
          <p>
            I care about the small implementation details that make a prototype readable:
            controls, state, feedback, edge cases, and the handoff to the next person.
          </p>
        </div>
        <div className="about-principle-list">
          {workingPrinciples.map((principle, index) => (
            <article key={principle.title} className="about-principle-row">
              <span>0{index + 1}</span>
              <strong>{principle.title}</strong>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical range</p>
            <h2>The skills behind the project work.</h2>
          </div>
        </div>
        <div className="capability-grid">
          {capabilityGroups.map((group, index) => (
            <article key={group.title} className="capability-panel">
              <span>0{index + 1}</span>
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
          <h2>Creative development backed by real-world responsibility.</h2>
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
    </main>
  );
}

export default AboutMe;
