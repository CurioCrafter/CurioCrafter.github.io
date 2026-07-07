import { Link } from "react-router-dom";
import {
  applicationPackets,
  profile,
  resumeProofStack,
  resumeSignals,
  roleFit,
} from "../data/portfolio";

function Resume() {
  return (
    <main className="page-shell">
      <section className="resume-hero">
        <div>
          <p className="eyebrow">Resume companion</p>
          <h1>Resume fit for game, tools, and technical art roles.</h1>
          <p>
            A recruiter-readable view of the work: where I fit, what proves it, and which
            projects to inspect first.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={profile.resume}>
              Download PDF
            </a>
            <a className="button secondary" href={profile.resumePrint}>
              Print view
            </a>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              Email Andrew
            </a>
            <Link className="button ghost" to="/projects">
              Review work
            </Link>
          </div>
        </div>
        <aside className="resume-snapshot" aria-label="Resume positioning summary">
          {resumeSignals.map((signal) => (
            <article key={signal.label}>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
            </article>
          ))}
        </aside>
      </section>

      <section className="application-packet-section" aria-label="Application packets by role">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Application packets</p>
            <h2>Use the right proof order for each role.</h2>
          </div>
          <Link className="text-link" to="/contact">
            Contact path
          </Link>
        </div>
        <div className="application-packet-list">
          {applicationPackets.map((packet, index) => (
            <article key={packet.role} className="application-packet-row">
              <span className="application-packet-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="application-packet-main">
                <p>{packet.role}</p>
                <h3>{packet.headline}</h3>
                <span>{packet.fit}</span>
                <div className="proof-stack-links">
                  {packet.inspect.map((link) => (
                    <Link key={link.to} to={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="application-packet-proof">
                <strong>Resume bullets</strong>
                <ul>
                  {packet.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p>{packet.ask}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-stack-section" aria-label="Resume proof stack">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Proof stack</p>
            <h2>The resume should point to this evidence first.</h2>
          </div>
          <Link className="text-link" to="/projects">
            Project evidence
          </Link>
        </div>
        <div className="proof-stack-list">
          {resumeProofStack.map((item, index) => (
            <article key={item.lane} className="proof-stack-row">
              <span className="proof-stack-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{item.lane}</p>
                <h3>{item.title}</h3>
                <span>{item.summary}</span>
              </div>
              <div className="resume-line">
                <strong>Resume line</strong>
                <span>{item.resumeLine}</span>
                <div className="proof-stack-links">
                  {item.links.map((link) => (
                    <Link key={link.to} to={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="role-fit-section" aria-label="Role fit">
        <div>
          <p className="eyebrow">Role fit</p>
          <h2>Lead with the jobs the evidence already supports.</h2>
        </div>
        <div className="role-fit-grid">
          {roleFit.map((fit) => (
            <article key={fit.role}>
              <h3>{fit.role}</h3>
              <p>{fit.pitch}</p>
              <div className="proof-points">
                {fit.proof.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-close">
        <div>
          <p className="eyebrow">Presentation direction</p>
          <h2>Keep tightening the story around proof, not volume.</h2>
          <p>
            The highest-leverage resume move is to lead with a small set of public, visual,
            verifiable projects and use the broader project inventory as supporting depth.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button primary" to="/projects/destimmer">
            See live demo case
          </Link>
          <Link className="button secondary" to="/software">
            Blender tools
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Resume;
