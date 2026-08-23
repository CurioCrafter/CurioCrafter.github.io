import { Link } from "react-router-dom";

function ProjectCard({ project, featured = false }) {
  const linksToPublicRepo = project.repository && !project.isPrivate;
  const primaryExternalLink = project.externalLinks?.[0];

  return (
    <article className={featured ? "project-card featured" : "project-card"}>
      <Link to={`/projects/${project.id}`} className="project-image-link">
        <img
          className={project.mediaFit === "contain" ? "contain-image" : undefined}
          src={project.image}
          alt={project.imageAlt || `${project.name} project screenshot`}
          loading="lazy"
        />
        <span>{project.eyebrow}</span>
      </Link>

      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p>{project.outcome}</p>

        {project.proofPoints?.length ? (
          <ul className="card-proof-list">
            {project.proofPoints.slice(0, featured ? 3 : 2).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        <div className="tag-row" aria-label={`${project.name} technology stack`}>
          {project.stack.slice(0, featured ? 5 : 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-actions">
          <Link className="text-link" to={`/projects/${project.id}`}>
            Case study
          </Link>
          {project.liveUrl ? (
            <a className="text-link muted" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live work
            </a>
          ) : primaryExternalLink ? (
            <a className="text-link muted" href={primaryExternalLink.url} target="_blank" rel="noreferrer">
              {primaryExternalLink.shortLabel || primaryExternalLink.label}
            </a>
          ) : null}
          {linksToPublicRepo ? (
            <a className="text-link muted" href={project.repository} target="_blank" rel="noreferrer">
              {project.repositoryNote}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
