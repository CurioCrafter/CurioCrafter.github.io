# CurioCrafter.github.io

Portfolio website for Andrew Rainsberger / CurioCrafter, built as a static React + Vite site for GitHub Pages.

## Local Development

```powershell
npm ci
npm run dev
```

## Checks

```powershell
npm run check
```

This runs ESLint and a production Vite build.

## Resume Artifacts

```powershell
npm run resume:build
```

This regenerates `resume-print.html` and `Andrew_Rainsberger_Game_Developer_Resume.pdf` from the portfolio data. `npm run build` also refreshes these artifacts before copying the GitHub Pages files to the repository root.

## Publishing On GitHub Pages

This repository is intended to be named `CurioCrafter.github.io` on GitHub. The source app lives in `src/`, while `npm run build` compiles the Vite output and copies the static files to the repository root for GitHub Pages branch publishing.

The site should publish at:

```text
https://CurioCrafter.github.io/
```

## What GitHub Pages Can Host

GitHub Pages is a static website host. This site can use HTML, CSS, JavaScript, images, PDFs, React, Vite builds, and client-side routing.

GitHub Pages does not run a backend process. Use another service for databases, private APIs, multiplayer servers, WebSockets, login sessions, payments, or long-running jobs.

## Current Project Assumptions

The portfolio content is employer-facing and uses the existing CurioCrafter project data, public links, screenshots, and resume already present in the previous local portfolio workspace. Project links marked private can still appear as case studies, but visitors will not be able to open those repositories unless access is granted.
