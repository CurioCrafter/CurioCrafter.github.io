import { Link } from "react-router-dom";
import {
  buildSprints,
  nextBuilds,
  profile,
  resumeProofStack,
  resumeSignals,
  roleFit,
  supportOffers,
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
            next builds will make the portfolio stronger.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={profile.resume}>
              Download updated PDF
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

      <section className="next-builds-section" aria-label="Recommended next projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Next builds</p>
            <h2>Project goals that would raise the portfolio fastest.</h2>
          </div>
          <Link className="text-link" to="/goals">
            Goals board
          </Link>
        </div>
        <div className="next-builds-grid">
          {nextBuilds.map((build, index) => (
            <article key={build.name} className="next-build">
              <span className="build-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{build.stack}</p>
                <h3>{build.name}</h3>
                <div className="roadmap-meta">
                  <span>{build.priority}</span>
                  <span>{build.timeframe}</span>
                  <span>{build.deliverable}</span>
                </div>
                <strong>{build.goal}</strong>
                <span>{build.why}</span>
                <ol className="first-steps">
                  {build.firstSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <ul>
                  {build.milestones.map((milestone) => (
                    <li key={milestone}>{milestone}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="build-sprint-section" aria-label="Build sprints Codex can help run">
        <div>
          <p className="eyebrow">Build sprints</p>
          <h2>Concrete goals I can help execute next.</h2>
          <p>
            These are scoped as portfolio upgrades, not vague ideas: each one ends with a
            proof artifact that can improve applications.
          </p>
        </div>
        <div className="build-sprint-grid">
          {buildSprints.map((sprint) => (
            <article key={sprint.title}>
              <p>{sprint.cadence}</p>
              <h3>{sprint.title}</h3>
              <span>{sprint.focus}</span>
              <div className="proof-points">
                {sprint.outputs.map((output) => (
                  <span key={output}>{output}</span>
                ))}
              </div>
              <strong>{sprint.nextAction}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="assist-section" aria-label="How Codex can help">
        <div>
          <p className="eyebrow">How I can help next</p>
          <h2>Use me as a build partner, not just a copy editor.</h2>
          <p>
            The best next work is practical: publish proof, tighten bullets, capture visuals,
            and ship one contained showcase at a time.
          </p>
        </div>
        <div className="assist-grid">
          {supportOffers.map((offer) => (
            <article key={offer.title}>
              <h3>{offer.title}</h3>
              <p>{offer.summary}</p>
              <div className="proof-points">
                {offer.outputs.map((output) => (
                  <span key={output}>{output}</span>
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
