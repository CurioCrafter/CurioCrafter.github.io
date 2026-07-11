import { Link } from "react-router-dom";
import { capabilityGroups, experiences, profile } from "../data/portfolio";

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
          <h1>A curious builder focused on games, 3D tools, and useful systems.</h1>
          <p>
            I am an independent developer in Dixon, Missouri, building toward a junior game or
            tools role. My strongest work combines gameplay prototyping with Python/Blender
            tooling, editor UI, terrain systems, and browser-delivered 3D.
          </p>
          <p>
            I bring a practical production background, a large creative audience feedback loop,
            and the persistence to turn unfamiliar technical problems into working artifacts.
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
            src="images/tidefront-blender-showcase.webp"
            alt="Tidefront underwater environment rendered from Andrew's Blender scene"
          />
          <figcaption>
            <span>Current focus</span>
            <strong>Gameplay systems and Blender-to-game worldbuilding</strong>
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
