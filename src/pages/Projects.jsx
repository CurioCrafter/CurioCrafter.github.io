import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

const recruiterProjects = projects.filter((project) => !project.isArchived);

const priorityProjectIds = new Set([
  "creature-behavior-lab",
  "ocean-supremacy",
  "destimmer",
  "tacops",
  "blender-tools-pipeline",
  "terrainforge",
]);

const gameProjectIds = new Set([
  "creature-behavior-lab",
  "ocean-supremacy",
  "tacops",
  "linear-drive",
  "procedural-ocean",
  "organism-evolution",
  "ant-colony",
  "brainsim-md-trainer",
]);

const toolProjectIds = new Set([
  "destimmer",
  "codex-3d-studio",
  "rts-builder",
  "ocean-drift-level-builder",
  "curiomesh",
  "blender-tools-pipeline",
  "terrainforge",
  "song-deconstructor",
  "blender-alignment-suite",
  "codexforworkflow",
  "disk-space-inspector",
]);

const publicEvidence = (project) =>
  Boolean(project.liveUrl || (project.repository && !/private/i.test(project.repositoryNote)));

const projectLenses = [
  {
    id: "best",
    label: "Best first",
    summary: "The shortest reviewer path: playable demos, strong game systems, and Blender pipeline proof.",
    matches: (project) => priorityProjectIds.has(project.id),
  },
  {
    id: "playable",
    label: "Playable",
    summary: "Projects with live demos, runtime captures, or interaction-first proof.",
    matches: (project) => project.liveUrl || project.proofPoints?.some((point) => /live|playable|runtime/i.test(point)),
  },
  {
    id: "games",
    label: "Game systems",
    summary: "Gameplay, simulation, rendering, lobbies, AI behavior, HUDs, and interactive prototypes.",
    matches: (project) => gameProjectIds.has(project.id),
  },
  {
    id: "tools",
    label: "Tools",
    summary: "Blender add-ons, editors, utilities, automation surfaces, and production workflow projects.",
    matches: (project) => toolProjectIds.has(project.id),
  },
  {
    id: "public",
    label: "Public links",
    summary: "Work with a live demo URL or public repository link a reviewer can open immediately.",
    matches: publicEvidence,
  },
  {
    id: "all",
    label: "All",
    summary: "The curated recruiter-facing portfolio set, limited to projects with useful visual evidence.",
    matches: () => true,
  },
];

function Projects() {
  const [activeLensId, setActiveLensId] = useState(projectLenses[0].id);
  const activeLens = projectLenses.find((lens) => lens.id === activeLensId) || projectLenses[0];

  const visibleProjects = useMemo(
    () => recruiterProjects.filter((project) => activeLens.matches(project)),
    [activeLens],
  );
  const projectMetrics = useMemo(
    () => [
      { value: recruiterProjects.length, label: "case studies" },
      { value: recruiterProjects.filter((project) => project.liveUrl).length, label: "live demos" },
      { value: recruiterProjects.filter(publicEvidence).length, label: "public links" },
      { value: priorityProjectIds.size, label: "best first" },
    ],
    [],
  );

  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Selected work</p>
        <h1>Projects with evidence, systems, and hiring relevance.</h1>
        <p>
          These are the projects I would put in front of a hiring manager first:
          game prototypes, Blender tools, editor workflows, simulations, and practical desktop apps.
        </p>
      </section>

      <section className="project-lens-section" aria-label="Project evidence filters">
        <div>
          <p className="eyebrow">Evidence lens</p>
          <h2>Choose the proof path that matches the role.</h2>
          <p>
            Start narrow for hiring review, then expand to the broader project inventory when
            you want depth.
          </p>
        </div>
        <div className="project-lens-controls">
          <div className="project-lens-metrics" aria-label="Portfolio evidence counts">
            {projectMetrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
          <div className="project-lens-buttons" role="group" aria-label="Filter project evidence">
            {projectLenses.map((lens) => {
              const count = recruiterProjects.filter((project) => lens.matches(project)).length;
              return (
                <button
                  key={lens.id}
                  className={lens.id === activeLens.id ? "project-lens-button is-active" : "project-lens-button"}
                  type="button"
                  aria-pressed={lens.id === activeLens.id}
                  onClick={() => setActiveLensId(lens.id)}
                >
                  <span>{lens.label}</span>
                  <strong>{count}</strong>
                </button>
              );
            })}
          </div>
          <div className="project-lens-result" aria-live="polite">
            <strong>
              Showing {visibleProjects.length} of {recruiterProjects.length}
            </strong>
            <span>{activeLens.summary}</span>
          </div>
        </div>
      </section>

      <section className="project-grid full">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 2} />
        ))}
      </section>

    </main>
  );
}

export default Projects;
