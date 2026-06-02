import { Link } from "react-router-dom";
import { buildSprints, nextBuilds, projectBriefs, projects, supportOffers } from "../data/portfolio";

const buildProjectLinks = {
  "Creature Behavior Lab": "/projects/creature-behavior-lab",
  "Blender Add-on Demo Reel": "/projects/blender-tools-pipeline",
  "Ocean Drift Public Slice": "/projects/ocean-supremacy",
  "Tooling Case Study Pack": "/projects",
};

const buildImages = {
  "Creature Behavior Lab": "images/creature-behavior-lab-live.png",
  "Blender Add-on Demo Reel": "images/blender-tools-suite.png",
  "Ocean Drift Public Slice": "images/ocean-drift-lobby.png",
  "Tooling Case Study Pack": "images/codexforworkflow-command-center.png",
};

const priorityBuild = nextBuilds[0];
const relatedPreviewProjects = ["creature-behavior-lab", "blender-tools-pipeline", "ocean-supremacy"]
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

const roadmapMetrics = [
  {
    label: "Active goals",
    value: nextBuilds.length,
    detail: "Each one ends in a public proof artifact, capture, or tighter case study.",
  },
  {
    label: "Execution sprints",
    value: buildSprints.length,
    detail: "Scoped passes I can help run from project work through verification.",
  },
  {
    label: "Best first move",
    value: "Demo proof",
    detail: "Record or ship something a reviewer can understand in under a minute.",
  },
  {
    label: "Operating rule",
    value: "Small slice",
    detail: "Finish one visible loop before expanding scope or adding more inventory.",
  },
];

function Goals() {
  return (
    <main className="page-shell">
      <section className="goals-hero">
        <div className="goals-hero-copy">
          <p className="eyebrow">Build goals</p>
          <h1>Next projects should create proof, not just more inventory.</h1>
          <p>
            This page turns the portfolio roadmap into concrete work: what to build next,
            what artifact it should produce, and how I can help execute the sprint.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to={buildProjectLinks[priorityBuild.name]}>
              Start first goal
            </Link>
            <Link className="button secondary" to="/resume">
              Resume proof
            </Link>
          </div>
        </div>
        <aside className="goals-priority" aria-label="Current highest priority build">
          <span>Priority now</span>
          <h2>{priorityBuild.name}</h2>
          <p>{priorityBuild.goal}</p>
          <strong>{priorityBuild.deliverable}</strong>
        </aside>
      </section>

      <section className="goals-metric-strip" aria-label="Roadmap metrics">
        {roadmapMetrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="goals-preview-strip" aria-label="Roadmap proof references">
        {relatedPreviewProjects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <img
              className={project.mediaFit === "contain" ? "contain-image" : undefined}
              src={project.image}
              alt={`${project.name} proof reference`}
            />
            <span>{project.name}</span>
          </Link>
        ))}
      </section>

      <section className="project-brief-section" aria-label="Concrete next project briefs">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Build briefs</p>
            <h2>Concrete project slices I would start next.</h2>
          </div>
        </div>
        <div className="project-brief-list">
          {projectBriefs.map((brief, index) => (
            <article key={brief.title} className="project-brief-row">
              <div className="project-brief-rank">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{brief.lane}</strong>
              </div>
              <div className="project-brief-main">
                <p>{brief.recommendation}</p>
                <h3>{brief.title}</h3>
                <strong>{brief.pitch}</strong>
                <span>{brief.why}</span>
                <div className="proof-stack-links">
                  {brief.links.map((link) => (
                    <Link key={link.to} to={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="project-brief-detail">
                <div>
                  <span>Deliverable</span>
                  <strong>{brief.deliverable}</strong>
                </div>
                <div>
                  <span>Starter scope</span>
                  <ul>
                    {brief.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>Acceptance proof</span>
                  <ul>
                    {brief.acceptance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p>{brief.codexHelp}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="goals-board-section" aria-label="Recommended next builds">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Roadmap board</p>
            <h2>Four next builds, ordered by portfolio leverage.</h2>
          </div>
        </div>
        <div className="goals-board">
          {nextBuilds.map((build, index) => (
            <article key={build.name} className="goal-build-card">
              <div className="goal-build-media">
                <img src={buildImages[build.name]} alt={`${build.name} roadmap visual`} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="goal-build-body">
                <p>{build.priority}</p>
                <h3>{build.name}</h3>
                <div className="roadmap-meta compact">
                  <span>{build.timeframe}</span>
                  <span>{build.deliverable}</span>
                  <span>{build.stack}</span>
                </div>
                <strong>{build.goal}</strong>
                <span>{build.why}</span>
                <ol className="goal-steps">
                  {build.firstSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <div className="proof-points">
                  {build.milestones.map((milestone) => (
                    <span key={milestone}>{milestone}</span>
                  ))}
                </div>
                <Link className="text-link" to={buildProjectLinks[build.name]}>
                  Relevant work
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="goals-sprint-section" aria-label="How Codex can execute the roadmap">
        <div>
          <p className="eyebrow">How I can help</p>
          <h2>Run the work as proof sprints.</h2>
          <p>
            Each sprint should end with something usable on the site or resume: public URL,
            screenshot set, proof sheet, rewritten bullets, or build verification.
          </p>
        </div>
        <div className="goals-sprint-list">
          {buildSprints.map((sprint, index) => (
            <article key={sprint.title}>
              <span>{String(index + 1).padStart(2, "0")} / {sprint.cadence}</span>
              <h3>{sprint.title}</h3>
              <p>{sprint.focus}</p>
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

      <section className="goals-assist-section" aria-label="Support offers">
        <div>
          <p className="eyebrow">Practical support</p>
          <h2>Use the roadmap as a working queue.</h2>
        </div>
        <div className="goals-assist-grid">
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
    </main>
  );
}

export default Goals;
