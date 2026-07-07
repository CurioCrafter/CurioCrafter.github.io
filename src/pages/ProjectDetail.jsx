import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";

const gameProjectIds = new Set([
  "tidefront-terrain-studio",
  "ocean-supremacy",
  "claude-citizen",
  "tacops",
  "linear-drive",
  "procedural-ocean",
  "organism-evolution",
  "ant-colony",
  "brainsim-md-trainer",
]);

const blenderProjectIds = new Set([
  "tidefront-blender-workflow",
  "blender-tools-pipeline",
  "terrainforge",
  "blender-alignment-suite",
]);

const toolProjectIds = new Set([
  "destimmer",
  "codex-3d-studio",
  "rts-builder",
  "ocean-drift-level-builder",
  "song-deconstructor",
  "codexforworkflow",
  "disk-space-inspector",
]);

function getCaseSignal(project) {
  if (blenderProjectIds.has(project.id)) {
    return {
      label: "Blender / tools",
      detail: "Best for Python tools, technical art support, and artist-facing workflow roles.",
    };
  }

  if (gameProjectIds.has(project.id)) {
    return {
      label: "Game systems",
      detail: "Best for gameplay prototyping, simulation, rendering, HUD, and systems-thinking roles.",
    };
  }

  if (toolProjectIds.has(project.id)) {
    return {
      label: "Software product",
      detail: "Best for editor, automation, utility, creative coding, and product-minded engineering roles.",
    };
  }

  return {
    label: "Creative technology",
    detail: "Best for roles that need practical prototypes, visual systems, and useful tools.",
  };
}

function getRelatedProjects(project) {
  const scored = projects
    .filter((candidate) => candidate.id !== project.id && !candidate.isArchived)
    .map((candidate) => {
      const sharedStack = candidate.stack.filter((item) => project.stack.includes(item)).length;
      const sharedProof = candidate.proofPoints?.some((point) =>
        project.proofPoints?.some((ownPoint) => ownPoint.split(" ")[0] === point.split(" ")[0]),
      )
        ? 1
        : 0;
      return { candidate, score: sharedStack + sharedProof };
    })
    .sort((a, b) => b.score - a.score || a.candidate.name.localeCompare(b.candidate.name));

  return scored.slice(0, 3).map((item) => item.candidate);
}

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="page-shell compact">
        <section className="page-hero">
          <p className="eyebrow">Project not found</p>
          <h1>That case study is not available.</h1>
          <Link className="button primary" to="/projects">
            Back to projects
          </Link>
        </section>
      </main>
    );
  }

  const heroImage = project.detailImage || project.image;
  const linksToPublicRepo = project.repository && !project.isPrivate;
  const signal = getCaseSignal(project);
  const relatedProjects = getRelatedProjects(project);
  const publicProofLabel = project.liveUrl
    ? "Live demo available"
    : linksToPublicRepo
      ? "Public repo available"
      : "Case-study evidence";
  const reviewerPath = project.liveUrl
    ? "Open the demo first, then scan the proof points."
    : linksToPublicRepo
      ? "Open the repo, then compare the screenshot and project bullets."
      : "Scan the screenshot, proof points, and implementation notes.";
  const caseSnapshot = [
    { label: "Role signal", value: signal.label, detail: signal.detail },
    { label: "Proof status", value: publicProofLabel, detail: reviewerPath },
    {
      label: "Stack depth",
      value: `${project.stack.length} tools`,
      detail: project.stack.slice(0, 4).join(" / "),
    },
    {
      label: "Resume angle",
      value: project.proofPoints?.[0] || project.eyebrow,
      detail: project.bullets[0],
    },
  ];

  return (
    <main className="page-shell">
      <section className="case-hero">
        <div className="case-hero-copy">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.name}</h1>
          <p>{project.outcome}</p>
          <div className="tag-row large">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="button secondary" to="/projects">
              Back to work
            </Link>
            {project.liveUrl ? (
              <a className="button primary" href={project.liveUrl}>
                Live demo
              </a>
            ) : null}
            {linksToPublicRepo ? (
              <a className="button ghost" href={project.repository} target="_blank" rel="noreferrer">
                {project.repositoryNote}
              </a>
            ) : (
              <span className="case-status">{publicProofLabel}</span>
            )}
          </div>
        </div>
        <figure className="case-media">
          <img
            className={project.mediaFit === "contain" ? "contain-image" : undefined}
            src={heroImage}
            alt={`${project.name} screenshot`}
          />
          <figcaption>
            <strong>{publicProofLabel}</strong>
            <span>{project.proofPoints?.join(" / ") || project.repositoryNote}</span>
          </figcaption>
        </figure>
      </section>

      <section className="case-snapshot" aria-label={`${project.name} reviewer snapshot`}>
        {caseSnapshot.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="case-body">
        <div>
          <p className="eyebrow">What it shows</p>
          <h2>Evidence for the role.</h2>
        </div>
        <ul className="evidence-list">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="case-resume-section">
        <div>
          <p className="eyebrow">Resume translation</p>
          <h2>How this project supports an application.</h2>
        </div>
        <div className="case-resume-lines">
          {project.bullets.map((bullet, index) => (
            <article key={bullet}>
              <span>Resume proof {String(index + 1).padStart(2, "0")}</span>
              <p>{bullet}</p>
            </article>
          ))}
        </div>
      </section>

      {project.proofPoints?.length ? (
        <section className="case-proof">
          <div>
            <p className="eyebrow">Proof points</p>
            <h2>What a reviewer can verify quickly.</h2>
          </div>
          <div className="proof-card-grid">
            {project.proofPoints.map((point) => (
              <article key={point} className="proof-card">
                <span>{point}</span>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {project.implementationNotes?.length ? (
        <section className="case-notes">
          <div>
            <p className="eyebrow">Implementation notes</p>
            <h2>How the work is structured.</h2>
          </div>
          <div className="notes-grid">
            {project.implementationNotes.map((note) => (
              <article key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="case-next-section" aria-label="Related project paths">
        <div>
          <p className="eyebrow">Related work</p>
          <h2>Compare this with related work.</h2>
        </div>
        <div className="case-next-links">
          {relatedProjects.map((related) => (
            <Link key={related.id} to={`/projects/${related.id}`}>
              <span>{related.eyebrow}</span>
              <strong>{related.name}</strong>
            </Link>
          ))}
          <Link to="/resume">
            <span>Application proof</span>
            <strong>Resume stack</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
