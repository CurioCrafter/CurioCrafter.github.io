import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import {
  curatedProjectIds,
  gamePortfolioIds,
  projects,
  toolsPortfolioIds,
} from "../data/portfolio";

const selectedProjects = curatedProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);
const gameIds = new Set(gamePortfolioIds);
const blenderIds = new Set([
  "shipwreck-discovery",
  "terrainforge",
  "laser-saw",
  "tidefront-blender-workflow",
  "blender-tools-pipeline",
]);
const toolIds = new Set(toolsPortfolioIds);

const filters = [
  { id: "selected", label: "Selected", matches: () => true },
  { id: "games", label: "Games", matches: (project) => gameIds.has(project.id) },
  { id: "blender", label: "Blender", matches: (project) => blenderIds.has(project.id) },
  { id: "tools", label: "Tools", matches: (project) => toolIds.has(project.id) },
  {
    id: "public",
    label: "Public proof",
    matches: (project) =>
      Boolean(project.liveUrl || project.externalLinks?.length || (project.repository && !project.isPrivate)),
  },
];

function Projects() {
  const [activeFilterId, setActiveFilterId] = useState(filters[0].id);
  const activeFilter = filters.find((filter) => filter.id === activeFilterId) || filters[0];
  const visibleProjects = useMemo(
    () => selectedProjects.filter((project) => activeFilter.matches(project)),
    [activeFilter],
  );

  return (
    <main className="page-shell">
      <section className="page-hero work-page-hero">
        <p className="eyebrow">Selected work</p>
        <h1>VR game systems, Blender tools, and production workflows.</h1>
        <p>
          A focused set of current production work, independent builds, verified Blender tools,
          and public contribution history. Each case includes concrete implementation evidence.
        </p>
      </section>

      <section className="work-filter-bar" aria-label="Filter selected projects">
        <div className="filter-buttons" role="group" aria-label="Project category">
          {filters.map((filter) => {
            const count = selectedProjects.filter((project) => filter.matches(project)).length;
            return (
              <button
                key={filter.id}
                className={filter.id === activeFilter.id ? "is-active" : undefined}
                type="button"
                aria-pressed={filter.id === activeFilter.id}
                onClick={() => setActiveFilterId(filter.id)}
              >
                {filter.label}
                <span>{count}</span>
              </button>
            );
          })}
        </div>
        <p aria-live="polite">Showing {visibleProjects.length} projects</p>
      </section>

      <section className="project-grid full" aria-label={`${activeFilter.label} projects`}>
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 2} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
