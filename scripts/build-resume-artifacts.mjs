import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  applicationPackets,
  experiences,
  profile,
  projects,
  resumeProofStack,
  resumeSignals,
  roleFit,
} from "../src/data/portfolio.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const resumeHtmlPath = join(root, "resume-print.html");
const publicResumeHtmlPath = join(publicDir, "resume-print.html");
const resumePdfPath = join(root, profile.resume);
const publicResumePdfPath = join(publicDir, profile.resume);
const portfolioUrl = "https://curiocrafter.github.io";

const featuredIds = [
  "tidefront-terrain-studio",
  "tidefront-blender-workflow",
  "claude-citizen",
  "ocean-supremacy",
  "tacops",
  "blender-tools-pipeline",
  "terrainforge",
];

const featuredProjects = featuredIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function linkForProject(project) {
  if (project.liveUrl) {
    return `${portfolioUrl}/${project.liveUrl}`;
  }

  return `${portfolioUrl}/#/projects/${project.id}`;
}

function renderTags(items) {
  return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(profile.name)} Resume</title>
    <style>
      @page {
        size: letter;
        margin: 0.42in;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: #ffffff;
        color: #151817;
        font-family: Inter, Arial, sans-serif;
        font-size: 9.6pt;
        line-height: 1.35;
      }

      a {
        color: #0c6265;
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      p {
        margin-top: 0;
      }

      h1 {
        margin-bottom: 0.04in;
        color: #101413;
        font-size: 26pt;
        line-height: 0.96;
      }

      h2 {
        margin-bottom: 0.08in;
        border-bottom: 1px solid #cdd6d3;
        padding-bottom: 0.04in;
        color: #0c6265;
        font-size: 10pt;
        text-transform: uppercase;
      }

      h3 {
        margin-bottom: 0.03in;
        font-size: 10.8pt;
        line-height: 1.1;
      }

      p {
        margin-bottom: 0.08in;
      }

      .page {
        display: grid;
        gap: 0.16in;
      }

      .header {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.25in;
        align-items: start;
        border-bottom: 2px solid #101413;
        padding-bottom: 0.13in;
      }

      .title {
        margin-bottom: 0.05in;
        color: #9a650e;
        font-size: 11pt;
        font-weight: 800;
      }

      .summary {
        max-width: 6.35in;
        margin-bottom: 0;
        font-size: 10.2pt;
      }

      .contact {
        display: grid;
        gap: 0.035in;
        min-width: 1.95in;
        color: #3d4544;
        font-size: 8.7pt;
        text-align: right;
      }

      .contact strong {
        color: #101413;
      }

      .signal-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.08in;
      }

      .signal {
        border-left: 3px solid #0c6265;
        background: #f2f6f5;
        padding: 0.08in;
      }

      .signal span,
      .stat span,
      .project-kicker {
        display: block;
        color: #0c6265;
        font-size: 7.6pt;
        font-weight: 800;
        text-transform: uppercase;
      }

      .signal strong,
      .stat strong {
        display: block;
        margin-top: 0.03in;
        color: #151817;
        font-size: 9.2pt;
        line-height: 1.2;
      }

      .two-col {
        display: grid;
        grid-template-columns: 1.08fr 0.92fr;
        gap: 0.2in;
        align-items: start;
      }

      .project-list,
      .proof-list,
      .packet-list,
      .experience-list {
        display: grid;
        gap: 0.11in;
      }

      .project {
        break-inside: avoid;
        border-bottom: 1px solid #dde5e2;
        padding-bottom: 0.09in;
      }

      .project:last-child {
        border-bottom: 0;
      }

      .project p,
      .proof p,
      .experience p {
        color: #303b39;
      }

      .project ul,
      .experience ul {
        margin: 0.04in 0 0;
        padding-left: 0.16in;
      }

      .project li,
      .experience li {
        margin-bottom: 0.025in;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.035in;
        margin-top: 0.055in;
      }

      .tags span {
        border: 1px solid #cbd8d5;
        padding: 0.025in 0.045in;
        color: #303b39;
        font-size: 7.6pt;
        font-weight: 700;
      }

      .proof {
        break-inside: avoid;
        border-left: 3px solid #c48622;
        background: #fff8ec;
        padding: 0.075in 0.09in;
      }

      .proof strong {
        display: block;
        margin-bottom: 0.035in;
      }

      .packet-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.08in;
      }

      .packet {
        break-inside: avoid;
        border: 1px solid #d8e2df;
        border-left: 3px solid #0c6265;
        padding: 0.075in;
      }

      .packet p {
        margin-bottom: 0.045in;
        color: #303b39;
      }

      .packet ul {
        margin: 0.04in 0 0;
        padding-left: 0.15in;
      }

      .packet li {
        margin-bottom: 0.02in;
      }

      .skills {
        display: grid;
        gap: 0.11in;
      }

      .skill-group h3 {
        margin-bottom: 0.05in;
        color: #101413;
        font-size: 9.4pt;
      }

      .stats {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.06in;
      }

      .stat {
        border: 1px solid #dde5e2;
        padding: 0.07in;
      }

      .experience span {
        display: block;
        margin-bottom: 0.025in;
        color: #596664;
        font-size: 8.2pt;
        font-weight: 700;
      }

      .footer-note {
        border-top: 1px solid #cdd6d3;
        padding-top: 0.08in;
        color: #596664;
        font-size: 8.2pt;
      }

      @media screen {
        body {
          background: #f4f7f6;
        }

        .page {
          max-width: 8.5in;
          min-height: 11in;
          margin: 0 auto;
          background: #ffffff;
          padding: 0.25in;
          box-shadow: 0 18px 60px rgba(16, 20, 19, 0.16);
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
      <section class="header">
        <div>
          <h1>${escapeHtml(profile.name)}</h1>
          <p class="title">${escapeHtml(profile.title)}</p>
          <p class="summary">
            Game and tools developer building playable browser demos, Blender Python add-ons,
            WebGL creative systems, native gameplay experiments, desktop utilities, and
            AI-assisted creative workflows with a practical focus on visible proof.
          </p>
        </div>
        <div class="contact" aria-label="Contact">
          <strong>${escapeHtml(profile.location)}</strong>
          <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
          <a href="${portfolioUrl}">curiocrafter.github.io</a>
          <a href="${escapeHtml(profile.github)}">github.com/CurioCrafter</a>
          <a href="${escapeHtml(profile.youtube)}">youtube.com/@CurioCrafter-r1w</a>
          <a href="${escapeHtml(profile.linkedin)}">LinkedIn profile</a>
        </div>
      </section>

      <section class="signal-grid" aria-label="Positioning">
        ${resumeSignals
          .map(
            (signal) => `<article class="signal">
              <span>${escapeHtml(signal.label)}</span>
              <strong>${escapeHtml(signal.value)}</strong>
            </article>`,
          )
          .join("")}
      </section>

      <section>
        <h2>Role-Specific Application Packets</h2>
        <div class="packet-grid">
          ${applicationPackets
            .slice(0, 4)
            .map(
              (packet) => `<article class="packet">
                <span class="project-kicker">${escapeHtml(packet.role)}</span>
                <h3>${escapeHtml(packet.headline)}</h3>
                <p>${escapeHtml(packet.fit)}</p>
                <ul>${renderList(packet.bullets.slice(0, 2))}</ul>
                <div class="tags">${renderTags(packet.inspect.map((item) => item.label))}</div>
              </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="two-col">
        <div>
          <h2>Selected Project Proof</h2>
          <div class="project-list">
            ${featuredProjects
              .map(
                (project) => `<article class="project">
                  <span class="project-kicker">${escapeHtml(project.eyebrow)}</span>
                  <h3><a href="${escapeHtml(linkForProject(project))}">${escapeHtml(project.name)}</a></h3>
                  <p>${escapeHtml(project.outcome)}</p>
                  <ul>${renderList(project.bullets.slice(0, 2))}</ul>
                  <div class="tags">${renderTags(project.stack.slice(0, 5))}</div>
                </article>`,
              )
              .join("")}
          </div>
        </div>

        <aside>
          <h2>Resume Proof Lines</h2>
          <div class="proof-list">
            ${resumeProofStack
              .map(
                (item) => `<article class="proof">
                  <strong>${escapeHtml(item.lane)}: ${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.resumeLine)}</p>
                </article>`,
              )
              .join("")}
          </div>
        </aside>
      </section>

      <section class="two-col">
        <div>
          <h2>Experience</h2>
          <div class="experience-list">
            ${experiences
              .map(
                (item) => `<article class="experience">
                  <h3>${escapeHtml(item.role)}</h3>
                  <span>${escapeHtml(item.organization)} | ${escapeHtml(item.timeframe)}</span>
                  <ul>${renderList(item.bullets)}</ul>
                </article>`,
              )
              .join("")}
          </div>
        </div>

        <div class="skills">
          <section>
            <h2>Role Fit</h2>
            ${roleFit
              .slice(0, 3)
              .map(
                (fit) => `<article class="skill-group">
                  <h3>${escapeHtml(fit.role)}</h3>
                  <p>${escapeHtml(fit.pitch)}</p>
                </article>`,
              )
              .join("")}
          </section>

          <section>
            <h2>Technical Stack</h2>
            <div class="tags">${renderTags(profile.stack)}</div>
          </section>

          <section>
            <h2>Creative Audience</h2>
            <div class="stats">
              ${profile.proof
                .map(
                  (stat) => `<article class="stat">
                    <span>${escapeHtml(stat.label)}</span>
                    <strong>${escapeHtml(stat.value)}</strong>
                  </article>`,
                )
                .join("")}
            </div>
          </section>
        </div>
      </section>

      <p class="footer-note">
        Updated June 2026. Portfolio case studies and public demos are available at
        <a href="${portfolioUrl}">${portfolioUrl}</a>.
      </p>
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
