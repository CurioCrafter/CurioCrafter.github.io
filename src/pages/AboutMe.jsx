import { capabilityGroups, experiences, profile } from "../data/portfolio";

function AboutMe() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">About</p>
        <h1>Independent builder focused on games, tools, and creative systems.</h1>
        <p>{profile.summary}</p>
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

      <section className="section no-pad-top">
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
