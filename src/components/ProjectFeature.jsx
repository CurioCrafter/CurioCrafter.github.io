import { Link } from "react-router-dom";

function ProjectFeature({ project, index }) {
  const linksToPublicRepo = project.repository && !project.isPrivate;
  const primaryExternalLink = project.externalLinks?.[0];

  return (
    <article className={index % 2 === 1 ? "project-feature is-reversed" : "project-feature"}>
      <Link className="project-feature-media" to={`/projects/${project.id}`}>
        <img
          className={project.mediaFit === "contain" ? "contain-image" : undefined}
          src={project.image}
          alt={project.imageAlt || `${project.name} project screenshot`}
          loading={index === 0 ? "eager" : "lazy"}
        />
        <span className="media-index">0{index + 1}</span>
      </Link>

      <div className="project-feature-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p>{project.outcome}</p>

        {project.proofPoints?.length ? (
          <ul className="feature-proof-list">
            {project.proofPoints.slice(0, 3).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}

        <div className="tag-row" aria-label={`${project.name} technology stack`}>
          {project.stack.slice(0, 5).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-actions">
          <Link className="text-link" to={`/projects/${project.id}`}>
            View case study
          </Link>
          {project.liveUrl ? (
            <a className="text-link muted" href={project.liveUrl} target="_blank" rel="noreferrer">
              Open live work
            </a>
          ) : primaryExternalLink ? (
            <a className="text-link muted" href={primaryExternalLink.url} target="_blank" rel="noreferrer">
              {primaryExternalLink.shortLabel || primaryExternalLink.label}
            </a>
          ) : linksToPublicRepo ? (
            <a className="text-link muted" href={project.repository} target="_blank" rel="noreferrer">
              {project.repositoryNote}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectFeature;
