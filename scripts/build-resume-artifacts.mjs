import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { experiences, profile, projects } from "../src/data/portfolio.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const resumeHtmlPath = join(root, "resume-print.html");
const publicResumeHtmlPath = join(publicDir, "resume-print.html");
const resumePdfPath = join(root, profile.resume);
const publicResumePdfPath = join(publicDir, profile.resume);
const portfolioUrl = "https://curiocrafter.github.io";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function projectUrl(id) {
  return `${portfolioUrl}/#/projects/${id}`;
}

function projectName(id) {
  return projects.find((project) => project.id === id)?.name ?? id;
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderTags(items) {
  return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

const selectedWork = [
  {
    id: "ocean-supremacy",
    label: "Browser 3D game + authored world pipeline",
    bullets: [
      "Built player movement, feeding, abilities, camera states, HUD, lobby flow, survival pressure, and simulation systems.",
      "Connected authored Blender terrain, coral, landmarks, and export data to a Three.js/WebGL runtime.",
    ],
    stack: ["TypeScript", "Three.js", "WebGL2", "Blender", "WebSockets"],
  },
  {
    id: "terrainforge",
    label: "Blender Python terrain and modeling tools",
    displayName: "TerrainForge + Blender Tools",
    bullets: [
      "Verified a four-tile tropical terrain build, export manifest, and a separate 1,054,721-vertex professional bake in Blender 4.5.11.",
      "Built repeatable add-on proof scenes for terrain generation, capped mesh cutting, and PBR material assignment.",
    ],
    stack: ["Python", "Blender API", "NumPy", "Mesh tooling", "Visual QA"],
  },
  {
    id: "claude-citizen",
    label: "Merged external game contribution",
    bullets: [
      "Contributed 10 commits to a merged upstream PR for Solar Atlas navigation, pointer-lock safety, orbit selection, and visual polish.",
      "Worked within an existing TypeScript/Three.js codebase and iterated from review evidence rather than a solo greenfield repo.",
    ],
    stack: ["TypeScript", "Three.js", "Vite", "Git", "Pull requests"],
  },
];

const skillGroups = [
  {
    title: "Gameplay + 3D",
    items: ["TypeScript", "Three.js / WebGL", "C++", "DirectX 12 / HLSL", "Gameplay systems", "Simulation", "HUD + cameras"],
  },
  {
    title: "Tools + Technical Art",
    items: ["Python", "Blender API", "Procedural terrain", "Mesh operations", "Asset/export pipelines", "React", "Electron"],
  },
  {
    title: "Delivery",
    items: ["Git + GitHub", "PR collaboration", "Playwright", "Visual QA", "Vite", "Node.js", "SQLite"],
  },
];

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(profile.name)} Resume</title>
    <style>
      @page {
        size: letter;
        margin: 0.38in;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        background: #ffffff;
        color: #171819;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 8.65pt;
        line-height: 1.24;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      p,
      ul {
        margin-top: 0;
      }

      .page {
        width: 100%;
      }

      .header {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 2.18in;
        gap: 0.25in;
        align-items: end;
        border-bottom: 3px solid #d51f3c;
        padding-bottom: 0.1in;
      }

      h1 {
        margin-bottom: 0.025in;
        font-size: 25pt;
        line-height: 0.95;
      }

      .title {
        margin-bottom: 0;
        color: #c21835;
        font-size: 10.8pt;
        font-weight: 800;
      }

      .contact {
        display: grid;
        gap: 0.018in;
        color: #404346;
        font-size: 8pt;
        text-align: right;
      }

      .contact strong {
        color: #171819;
      }

      .summary {
        margin: 0;
        border-bottom: 1px solid #d8d9db;
        padding: 0.095in 0 0.105in;
        color: #323538;
        font-size: 9.15pt;
      }

      .columns {
        display: grid;
        grid-template-columns: minmax(0, 1.68fr) minmax(0, 0.82fr);
        gap: 0.23in;
        margin-top: 0.13in;
      }

      .rail {
        border-left: 1px solid #d8d9db;
        padding-left: 0.18in;
      }

      section + section {
        margin-top: 0.14in;
      }

      h2 {
        margin-bottom: 0.06in;
        color: #bf1934;
        font-size: 9.2pt;
        line-height: 1;
        text-transform: uppercase;
      }

      h3 {
        margin-bottom: 0.015in;
        font-size: 10pt;
        line-height: 1.08;
      }

      .item {
        break-inside: avoid;
        border-top: 1px solid #e2e3e4;
        padding: 0.062in 0 0.052in;
      }

      .item:first-child {
        border-top: 0;
        padding-top: 0;
      }

      .kicker,
      .meta {
        display: block;
        margin-bottom: 0.022in;
        color: #5a5d60;
        font-size: 7.75pt;
        font-weight: 700;
      }

      .kicker {
        color: #a3152d;
        text-transform: uppercase;
      }

      ul {
        margin-bottom: 0;
        padding-left: 0.155in;
      }

      li {
        margin-bottom: 0.018in;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.026in 0.04in;
        margin-top: 0.036in;
      }

      .tags span {
        border: 1px solid #d7d8da;
        padding: 0.015in 0.035in;
        color: #3f4245;
        font-size: 7pt;
        font-weight: 700;
      }

      .skill-group + .skill-group {
        margin-top: 0.09in;
      }

      .skill-group h3 {
        margin-bottom: 0.035in;
        font-size: 8.7pt;
      }

      .skill-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.035in;
      }

      .skill-list span {
        border-bottom: 1px solid #c7c9cb;
        padding-bottom: 0.01in;
        color: #333638;
        font-size: 7.65pt;
      }

      .proof {
        border-left: 3px solid #d51f3c;
        padding-left: 0.07in;
      }

      .proof + .proof {
        margin-top: 0.075in;
      }

      .proof strong {
        display: block;
        margin-bottom: 0.018in;
        font-size: 8.35pt;
      }

      .proof p,
      .education p {
        margin-bottom: 0;
        color: #434649;
        font-size: 7.8pt;
      }

      .education + .education {
        margin-top: 0.07in;
      }

      .footer {
        display: flex;
        justify-content: space-between;
        gap: 0.2in;
        margin-top: 0.11in;
        border-top: 1px solid #cfd1d3;
        padding-top: 0.055in;
        color: #55585b;
        font-size: 7.25pt;
      }

      @media screen {
        body {
          background: #eceeef;
          padding: 0.25in;
        }

        .page {
          width: 8.5in;
          min-height: 11in;
          margin: 0 auto;
          background: #ffffff;
          padding: 0.38in;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.16);
        }
      }

      @media print {
        .page {
          padding: 0;
        }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="header">
        <div>
          <h1>${escapeHtml(profile.name)}</h1>
          <p class="title">Junior Game Developer | Python / Blender Tools</p>
        </div>
        <div class="contact" aria-label="Contact">
          <strong>${escapeHtml(profile.location)}</strong>
          <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
          <a href="${portfolioUrl}">curiocrafter.github.io</a>
          <a href="${escapeHtml(profile.github)}">github.com/CurioCrafter</a>
          <a href="${escapeHtml(profile.linkedin)}">linkedin.com/in/andrew-rainsberger</a>
        </div>
      </header>

      <p class="summary">
        Junior game and tools developer building playable 3D systems, authored worlds, and Blender Python workflows.
        Comfortable moving between gameplay, technical-art support, testing, and shipping reviewable work with a team.
      </p>

      <div class="columns">
        <div>
          <section>
            <h2>Selected Work</h2>
            ${selectedWork
              .map(
                (work) => `<article class="item">
                  <span class="kicker">${escapeHtml(work.label)}</span>
                  <h3><a href="${projectUrl(work.id)}">${escapeHtml(work.displayName ?? projectName(work.id))}</a></h3>
                  <ul>${renderList(work.bullets)}</ul>
                  <div class="tags">${renderTags(work.stack)}</div>
                </article>`,
              )
              .join("")}
          </section>

          <section>
            <h2>Experience</h2>
            ${experiences
              .map(
                (item) => `<article class="item">
                  <h3>${escapeHtml(item.role)}</h3>
                  <span class="meta">${escapeHtml(item.organization)} | ${escapeHtml(item.timeframe)}</span>
                  <ul>${renderList(item.bullets.slice(0, item.role.startsWith("Independent") ? 3 : 2))}</ul>
                </article>`,
              )
              .join("")}
          </section>
        </div>

        <aside class="rail">
          <section>
            <h2>Technical Skills</h2>
            ${skillGroups
              .map(
                (group) => `<div class="skill-group">
                  <h3>${escapeHtml(group.title)}</h3>
                  <div class="skill-list">${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
                </div>`,
              )
              .join("")}
          </section>

          <section>
            <h2>Team Evidence</h2>
            <div class="proof">
              <strong>Merged upstream contribution</strong>
              <p>10 commits accepted into another developer's browser game through a reviewed pull request.</p>
            </div>
            <div class="proof">
              <strong>Playable and inspectable work</strong>
              <p>Browser builds, Blender captures, geometry assertions, responsive QA, and public case studies.</p>
            </div>
            <div class="proof">
              <strong>Creative feedback loop</strong>
              <p>81K+ audience developed through repeated visual iteration, pacing, and response to feedback.</p>
            </div>
          </section>

          <section>
            <h2>Education + Training</h2>
            <div class="education">
              <h3>High School Diploma</h3>
              <p>Job Corps</p>
            </div>
            <div class="education">
              <h3>Electrical Pre-Apprenticeship</h3>
              <p>Job Corps</p>
            </div>
            <div class="education">
              <h3>Wildland Firefighting</h3>
              <p>One season of field crew experience through Job Corps.</p>
            </div>
          </section>

          <section>
            <h2>Role Fit</h2>
            <div class="proof">
              <strong>Junior gameplay development</strong>
              <p>Controls, cameras, HUDs, simulation rules, browser 3D, and focused vertical slices.</p>
            </div>
            <div class="proof">
              <strong>Tools and technical art support</strong>
              <p>Blender add-ons, procedural content, mesh workflows, export tooling, and artist-facing QA.</p>
            </div>
          </section>
        </aside>
      </div>

      <footer class="footer">
        <span>Portfolio case studies and live builds: ${portfolioUrl}</span>
        <span>Updated July 2026</span>
      </footer>
    </main>
  </body>
</html>
`;

await mkdir(publicDir, { recursive: true });
await Promise.all([writeFile(resumeHtmlPath, html, "utf8"), writeFile(publicResumeHtmlPath, html, "utf8")]);

const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];
const chrome = chromeCandidates.find((candidate) => existsSync(candidate));

if (!chrome) {
  console.warn("Wrote resume-print.html, but Chrome was not found for PDF export.");
  process.exit(0);
}

const print = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--no-pdf-header-footer",
    `--print-to-pdf=${resumePdfPath}`,
    pathToFileURL(resumeHtmlPath).href,
  ],
  {
    cwd: root,
    shell: false,
    stdio: "inherit",
  },
);

if (print.status !== 0) {
  process.exit(print.status ?? 1);
}

await copyFile(resumePdfPath, publicResumePdfPath);
