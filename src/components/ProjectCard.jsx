import { Link } from "react-router-dom";

function ProjectCard({ project, featured = false }) {
  const linksToPublicRepo = project.repository && !/private/i.test(project.repositoryNote);

  return (
    <article className={featured ? "project-card featured" : "project-card"}>
      <Link to={`/projects/${project.id}`} className="project-image-link">
        <img
          className={project.mediaFit === "contain" ? "contain-image" : undefined}
          src={project.image}
          alt={`${project.name} project screenshot`}
        />
      </Link>

      <div className="project-card-body">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p>{project.outcome}</p>

        <div className="tag-row" aria-label={`${project.name} technology stack`}>
          {project.stack.slice(0, featured ? 5 : 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {project.proofPoints?.length ? (
          <div className="proof-points" aria-label={`${project.name} proof points`}>
            {project.proofPoints.slice(0, featured ? 3 : 2).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}

        <div className="project-actions">
          <Link className="text-link" to={`/projects/${project.id}`}>
            Case study
          </Link>
          {project.liveUrl ? (
            <a className="text-link muted" href={project.liveUrl}>
              Live demo
            </a>
          ) : linksToPublicRepo ? (
            <a className="text-link muted" href={project.repository} target="_blank" rel="noreferrer">
              {project.repositoryNote}
            </a>
          ) : (
            <span className="project-note">{project.repositoryNote}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
