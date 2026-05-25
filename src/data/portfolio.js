export const profile = {
  name: "Andrew Rainsberger",
  handle: "CurioCrafter",
  title: "Entry-Level Game Developer + Python/Blender Tools Developer",
  location: "Dixon, Missouri",
  email: "andrewrainsberger@gmail.com",
  github: "https://github.com/CurioCrafter",
  youtube: "https://youtube.com/@CurioCrafter-r1w",
  linkedin: "https://linkedin.com/in/andrew-rainsberger-2b9b721b1",
  resume: "Andrew_Rainsberger_Game_Developer_Resume.pdf",
  summary:
    "I build game prototypes, Blender add-ons, browser 3D experiences, desktop utilities, and AI-assisted creative workflows with a practical focus on tools, simulation, and player-facing polish.",
  focusAreas: [
    "Gameplay prototyping",
    "Python and Blender API tools",
    "Three.js/WebGL game interfaces",
    "Creative AI production workflows",
  ],
  proof: [
    { value: "79.9K", label: "YouTube subscribers" },
    { value: "100M+", label: "total views" },
    { value: "568", label: "published videos" },
    { value: "18.5M", label: "top short views" },
  ],
  roles: [
    "Junior Game Developer",
    "Python Tools Developer",
    "Blender Pipeline Tools",
    "Technical Artist Assistant",
    "Gameplay Prototyper",
    "Creative Technologist",
  ],
  stack: [
    "Python",
    "Blender API",
    "TypeScript",
    "Three.js",
    "WebGL2",
    "C++",
    "DirectX 12",
    "Electron",
    "React",
    "SQLite",
    "GitHub",
    "AI tools",
  ],
};

export const projects = [
  {
    id: "ocean-supremacy",
    name: "Ocean Supremacy Web / Ocean Drift",
    eyebrow: "Browser 3D survival game",
    image: "images/ocean-drift-lobby.png",
    detailImage: "images/ocean-supremacy-gameplay.png",
    repository: "https://github.com/CurioCrafter/oceansupremacyweb",
    repositoryNote: "Private repo",
    stack: ["TypeScript", "Three.js", "WebGL2", "Vite", "WebSocket architecture"],
    outcome:
      "A multiplayer-ready underwater survival prototype with third-person fish controls, lobby flow, HUD, growth systems, and water rendering quality tiers.",
    bullets: [
      "Built player movement, feeding, sprint, ability, HUD, lobby, and match-selection flows.",
      "Iterated on underwater rendering concepts including clarity, caustics, scattering, refraction shimmer, light shafts, and particulate haze.",
      "Separated shared world rules from client rendering and server simulation so gameplay logic can move toward authoritative multiplayer.",
    ],
  },
  {
    id: "ocean-drift-level-builder",
    name: "Ocean Drift Level Builder",
    eyebrow: "3D editor and asset workflow",
    image: "images/ocean-drift-level-builder.png",
    repository: "https://github.com/CurioCrafter/oceandriftleveldesigner",
    repositoryNote: "Private repo",
    stack: ["TypeScript", "Vite", "3D asset tooling", "JSON import/export"],
    outcome:
      "A browser-based level editor for placing Ocean Drift assets with searchable catalogs, transform controls, save/load, and portable JSON export.",
    bullets: [
      "Created a clear editor layout with catalog, 3D canvas, selected asset inspector, scene list, and transform controls.",
      "Linked game assets without duplicating paid source files, keeping the editor useful while respecting asset ownership.",
      "Added local save/load and export flows so map data can move back into the game pipeline.",
    ],
  },
  {
    id: "curiomesh",
    name: "CurioMesh",
    eyebrow: "Blender quad remeshing add-on",
    image: "images/cataract.png",
    repository: "https://github.com/CurioCrafter/CurioMesh",
    repositoryNote: "Public repo",
    stack: ["Python", "Blender API", "mesh processing", "technical art tools"],
    outcome:
      "A Blender add-on for automatic quad remeshing and retopology workflows with practical artist-facing controls.",
    bullets: [
      "Built tooling around mesh cleanup, UV/material preservation, projection, quality presets, and remeshing metrics.",
      "Designed controls for artists instead of only exposing raw implementation knobs.",
      "Demonstrates Python tool development, Blender scripting, and technical art pipeline thinking.",
    ],
  },
  {
    id: "organism-evolution",
    name: "OrganismEvolution",
    eyebrow: "Artificial life simulation",
    image: "images/anothergame.png",
    repository: "https://github.com/CurioCrafter/OrganismEvolution",
    repositoryNote: "Public repo",
    stack: ["C++20", "DirectX 12", "HLSL", "CMake", "simulation systems"],
    outcome:
      "A real-time artificial-life simulation prototype with procedural terrain, creature systems, rendering, camera controls, save/load, replay, and profiling direction.",
    bullets: [
      "Developed early creature behavior systems around movement, energy, predator/prey interactions, and genetic/neural scaffolding.",
      "Explored systems-level game programming with simulation architecture and rendering constraints.",
      "Focused on performance-oriented thinking through profiling and explicit systems boundaries.",
    ],
  },
  {
    id: "blender-alignment-suite",
    name: "Blender Alignment Suite",
    eyebrow: "Blender workflow add-on",
    image: "images/ocean-drift-level-builder.png",
    repository: "https://github.com/CurioCrafter/blender-alignment-suite",
    repositoryNote: "Public repo",
    stack: ["Python", "Blender API", "tool development"],
    outcome:
      "A Blender 4.5 add-on for alignment, distribution, mirroring, cursor/origin tools, and edit-mode vertex alignment.",
    bullets: [
      "Implemented object alignment along X/Y/Z axes, equal-gap distribution, mirror workflows, and origin/cursor operations.",
      "Designed a simple N-panel UI around practical day-to-day modeling operations.",
      "Shows comfort turning repetitive content-creation tasks into reusable tools.",
    ],
  },
  {
    id: "brainsim-md-trainer",
    name: "BrainSim MD Trainer",
    eyebrow: "React Three Fiber educational simulator",
    image: "images/brainsim-hero.png",
    repository: "",
    repositoryNote: "Local prototype",
    stack: ["React", "React Three Fiber", "Three.js", "Vitest", "Playwright"],
    outcome:
      "An educational simulator with authored content, 3D brain rendering, UI overlays, minigames, generated visual assets, and acceptance scripts.",
    bullets: [
      "Split authored content, simulation rules, rendering, UI overlays, and minigames into separate folders.",
      "Added explicit educational-only boundaries and source-linked learning notes.",
      "Used Vitest and Playwright acceptance checks to keep the prototype testable.",
    ],
  },
  {
    id: "codexforworkflow",
    name: "CodexForWorkflow",
    eyebrow: "AI-guided workflow command center",
    image: "images/brainsim-hero.png",
    repository: "https://github.com/CurioCrafter/CodexForWorkflow",
    repositoryNote: "Public repo",
    stack: ["TypeScript", "Electron", "Playwright", "AI workflow automation"],
    outcome:
      "A Windows desktop command center for AI-guided screen observation, workflow planning, controlled browser automation, and deterministic demos.",
    bullets: [
      "Implemented visible action planning, approval gates, workflow presets, and local safety controls.",
      "Connected browser automation ideas to practical operator-facing product surfaces.",
      "Demonstrates desktop app development, automation design, and product thinking.",
    ],
  },
  {
    id: "disk-space-inspector",
    name: "Disk Space Inspector",
    eyebrow: "Windows storage analysis app",
    image: "images/anothergame.png",
    repository: "https://github.com/CurioCrafter/Disk-Space-Inspector",
    repositoryNote: "Public repo",
    stack: ["C#", "SQLite", "desktop app development", "data visualization"],
    outcome:
      "A Windows utility that scans local drives, stores snapshots, visualizes disk usage, and stages cleanup recommendations for review.",
    bullets: [
      "Designed safety-first cleanup workflows that explain files and paths before action.",
      "Added screenshot-based documentation, release packaging, and user-facing guidance.",
      "Shows care for developer ergonomics, user trust, and practical desktop workflows.",
    ],
  },
];

export const experiences = [
  {
    role: "Independent Creative Technology Developer",
    organization: "CurioCrafter / Independent Projects",
    timeframe: "2023 - Present",
    bullets: [
      "Build game prototypes, Blender add-ons, desktop apps, AI workflow tools, and creative production systems.",
      "Prototype procedural environments, player controls, HUD/UI, camera systems, real-time rendering, and simulation behavior.",
      "Operate a high-volume AI creative channel with measurable audience growth and viral video performance.",
    ],
  },
  {
    role: "Apprentice Electrician",
    organization: "Productive Electric LLC / Malm Electrical Contractors",
    timeframe: "2021 - 2023",
    bullets: [
      "Supported commercial electrical installation, jobsite preparation, safety procedures, materials handling, and field troubleshooting.",
    ],
  },
];

export const capabilityGroups = [
  {
    title: "Game and 3D",
    items: [
      "Gameplay prototyping",
      "Procedural generation",
      "Simulation systems",
      "Three.js and WebGL2",
      "DirectX 12 and HLSL",
      "HUD/UI and camera controls",
    ],
  },
  {
    title: "Tools and Pipelines",
    items: [
      "Blender Python API",
      "Artist-facing add-ons",
      "Mesh processing workflows",
      "Asset catalogs",
      "Editor tools",
      "Quality presets and metrics",
    ],
  },
  {
    title: "Product and Delivery",
    items: [
      "React and Electron",
      "SQLite and local-first data",
      "Vite and Node.js",
      "Playwright checks",
      "GitHub workflows",
      "AI-assisted iteration",
    ],
  },
];
