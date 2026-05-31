import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";

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
  const linksToPublicRepo = project.repository && !/private/i.test(project.repositoryNote);

  return (
    <main className="page-shell">
      <section className="case-hero">
        <div>
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
              <span className="button ghost static">{project.repositoryNote}</span>
            )}
          </div>
        </div>
        <img
          className={project.mediaFit === "contain" ? "contain-image" : undefined}
          src={heroImage}
          alt={`${project.name} screenshot`}
        />
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
    </main>
  );
}

export default ProjectDetail;
