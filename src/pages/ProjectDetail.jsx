import { Link, useParams } from "react-router-dom";
import { curatedProjectIds, projects } from "../data/portfolio";

const curatedProjects = curatedProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

function getRelatedProjects(project) {
  return curatedProjects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => ({
      candidate,
      score: candidate.stack.filter((item) => project.stack.includes(item)).length,
    }))
    .sort((a, b) => b.score - a.score || a.candidate.name.localeCompare(b.candidate.name))
    .slice(0, 3)
    .map((item) => item.candidate);
}

function getContributionLabel(project) {
  if (project.id === "claude-citizen") return "Merged upstream contribution";
  if (project.liveUrl) return "Independent build with live work";
  return "Independent project case study";
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
            Back to selected work
          </Link>
        </section>
      </main>
    );
  }

  const heroImage = project.detailImage || project.image;
  const gallery = project.gallery || [];
  const linksToPublicRepo = project.repository && !project.isPrivate;
  const relatedProjects = getRelatedProjects(project);
  const evidenceLabel = project.liveUrl
    ? "Live work and captured screenshots"
    : linksToPublicRepo
      ? "Public source and captured screenshots"
      : "Captured workflow and implementation notes";

  return (
    <main className="page-shell">
      <section className="case-hero">
        <div className="case-hero-copy">
          <Link className="case-back-link" to="/projects">
            Back to selected work
          </Link>
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.name}</h1>
          <p>{project.outcome}</p>
          <div className="tag-row large">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            {project.liveUrl ? (
              <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Open live work
              </a>
            ) : null}
            {linksToPublicRepo ? (
              <a className="button secondary" href={project.repository} target="_blank" rel="noreferrer">
                {project.repositoryNote}
              </a>
            ) : null}
          </div>
        </div>
        <figure className="case-media">
          <img
            className={project.mediaFit === "contain" ? "contain-image" : undefined}
            src={heroImage}
            alt={`${project.name} project screenshot`}
          />
          <figcaption>
            <span>Primary project capture</span>
            <strong>{project.proofPoints?.[0] || project.name}</strong>
          </figcaption>
        </figure>
      </section>

      <section className="case-facts" aria-label={`${project.name} project facts`}>
        <article>
          <span>Contribution</span>
          <strong>{getContributionLabel(project)}</strong>
        </article>
        <article>
          <span>Evidence</span>
          <strong>{evidenceLabel}</strong>
        </article>
        <article>
          <span>Core stack</span>
          <strong>{project.stack.slice(0, 3).join(" / ")}</strong>
        </article>
      </section>

      {gallery.length ? (
        <section className="case-gallery" aria-label={`${project.name} screenshot gallery`}>
          <div className="case-section-heading">
            <p className="eyebrow">Project gallery</p>
            <h2>Captured workflow and results.</h2>
          </div>
          <div className="case-gallery-grid">
            {gallery.map((shot) => (
              <figure key={`${project.id}-${shot.image}`} className="case-gallery-item">
                <img src={shot.image} alt={shot.alt || `${project.name} ${shot.title} screenshot`} />
                <figcaption>
                  <strong>{shot.title}</strong>
                  <span>{shot.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="case-body">
        <div>
          <p className="eyebrow">What I built</p>
          <h2>Scope and implementation.</h2>
        </div>
        <ul className="evidence-list">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      {project.proofPoints?.length ? (
        <section className="case-proof-line" aria-label="Project proof points">
          {project.proofPoints.map((point, index) => (
            <div key={point}>
              <span>0{index + 1}</span>
              <strong>{point}</strong>
            </div>
          ))}
        </section>
      ) : null}

      {project.implementationNotes?.length ? (
        <section className="case-notes">
          <div className="case-section-heading">
            <p className="eyebrow">Implementation notes</p>
            <h2>Decisions behind the work.</h2>
          </div>
          <div className="notes-grid">
            {project.implementationNotes.map((note, index) => (
              <article key={note.title}>
                <span>0{index + 1}</span>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="case-next-section" aria-label="Related projects">
        <div>
          <p className="eyebrow">Related work</p>
          <h2>Continue through the portfolio.</h2>
        </div>
        <div className="case-next-links">
          {relatedProjects.map((related) => (
            <Link key={related.id} to={`/projects/${related.id}`}>
              <span>{related.eyebrow}</span>
              <strong>{related.name}</strong>
            </Link>
          ))}
          <Link to="/contact">
            <span>Contact</span>
            <strong>Discuss the work</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
