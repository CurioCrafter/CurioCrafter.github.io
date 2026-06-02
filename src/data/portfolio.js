export const profile = {
  name: "Andrew Rainsberger",
  handle: "CurioCrafter",
  title: "Game Developer + Python/Blender Tools Developer",
  location: "Dixon, Missouri",
  email: "andrewrainsberger@gmail.com",
  github: "https://github.com/CurioCrafter",
  youtube: "https://youtube.com/@CurioCrafter-r1w",
  linkedin: "https://linkedin.com/in/andrew-rainsberger-2b9b721b1",
  resume: "Andrew_Rainsberger_Game_Developer_Resume.pdf",
  summary:
    "I build game prototypes, Blender add-ons, browser 3D experiences, native C++ experiments, desktop utilities, and AI-assisted creative workflows with a practical focus on tools, simulation, and player-facing polish.",
  focusAreas: [
    "Gameplay prototyping",
    "Python and Blender API tools",
    "Three.js/WebGL game interfaces",
    "WebGL creative coding",
    "Native C++ gameplay experiments",
    "Creative AI production workflows",
  ],
  proof: [
    { value: "79.9K", label: "YouTube subscribers" },
    { value: "100M+", label: "total views" },
    { value: "568", label: "published videos" },
    { value: "18.5M", label: "top short views" },
  ],
  evidence: [
    "Live GitHub Pages portfolio",
    "Browser playtests and local project screenshots",
    "Blender add-on smoke and matrix artifacts",
    "Public repos plus broader private-project case studies",
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
    "Colyseus",
    "raylib",
    "SQLite",
    "GitHub",
    "AI tools",
  ],
};

export const featuredProjectIds = ["ocean-supremacy", "destimmer", "tacops", "codex-3d-studio"];

export const projects = [
  {
    id: "ocean-supremacy",
    name: "Ocean Supremacy Web / Ocean Drift",
    eyebrow: "Browser 3D survival game",
    image: "images/ocean-drift-lobby.png",
    detailImage: "images/ocean-water-lab-blue-glass-shaft.png",
    repository: "https://github.com/CurioCrafter/oceansupremacyweb",
    repositoryNote: "Private repo",
    stack: ["TypeScript", "Three.js", "WebGL2", "Vite", "WebSocket architecture"],
    proofPoints: ["Live lobby capture", "Water rendering lab", "Server browser flow"],
    outcome:
      "A multiplayer-ready underwater survival prototype with third-person fish controls, lobby flow, HUD, growth systems, and water rendering quality tiers.",
    bullets: [
      "Built player movement, feeding, sprint, ability, HUD, lobby, and match-selection flows.",
      "Iterated on underwater rendering concepts including clarity, caustics, scattering, refraction shimmer, light shafts, and particulate haze.",
      "Separated shared world rules from client rendering and server simulation so gameplay logic can move toward authoritative multiplayer.",
    ],
  },
  {
    id: "tacops",
    name: "TacOps",
    eyebrow: "Browser tactical FPS vertical slice",
    image: "images/tacops-maple-court-objective.png",
    detailImage: "images/tacops-loadout-builder.png",
    repository: "",
    repositoryNote: "Local/private project",
    stack: ["TypeScript", "Three.js", "Colyseus", "Vite", "authoritative server"],
    proofPoints: ["Live gameplay screenshot", "Friend lobby and loadout UI", "Netlify + Render deployment plan"],
    outcome:
      "An original browser tactical FPS prototype with bot matches, friend lobbies, invite links, campaign/objective modes, loadouts, gadgets, and authoritative multiplayer architecture.",
    bullets: [
      "Built a Three.js/Vite client paired with a Colyseus server for room state, projectiles, tactical modes, bots, and lobby flow.",
      "Created multiple playable modes including campaign, tactical bots, tactical friends, deathmatch vs bots, and deathmatch with friends.",
      "Documented a real deployment split where Netlify hosts the static client and a persistent WebSocket host runs the multiplayer server.",
    ],
  },
  {
    id: "codex-3d-studio",
    name: "Codex 3D Studio",
    eyebrow: "AI-assisted 3D scene editor",
    image: "images/codex-3d-studio-cloudgrove.png",
    repository: "",
    repositoryNote: "Local/private project",
    stack: ["Electron", "React Three Fiber", "Three.js", "Express", "OpenAI/Codex SDK"],
    proofPoints: ["Desktop editor screenshot", "Export JSON/GLB workflow", "Scene validation panel"],
    outcome:
      "A desktop/web 3D editor prototype for building and validating scenes with React Three Fiber, export tools, screenshot capture, and AI-assisted generation hooks.",
    bullets: [
      "Built a Blender-like editor surface with outliner, transform tools, primitive creation, camera shots, timeline controls, and inspector panels.",
      "Added export flows for JSON, GLB, and Unreal-style handoff data so generated scenes are not trapped in the UI.",
      "Connected local server, Electron shell, and Codex/OpenAI surfaces into a practical 3D workflow command center.",
    ],
  },
  {
    id: "destimmer",
    name: "Destimmer",
    eyebrow: "WebGL generative sensory artwork",
    image: "images/destimmer-fractal-cathedral-live.png",
    detailImage: "images/destimmer-studio-panel.png",
    liveUrl: "destimmer/index.html?trip=fastTrance&view3d=polytopeSwarm&pattern=plasma&images=false",
    repository: "",
    repositoryNote: "Hosted static demo",
    stack: ["JavaScript", "WebGL", "Canvas", "Three.js CDN", "generative audio"],
    proofPoints: ["Fresh local WebGL capture", "Studio controls and trip presets", "Canvas fallback path"],
    outcome:
      "A self-contained browser artwork for kinetic sacred geometry, psychedelic 3D trance scenes, interactive polytope/ribbon swarms, generative harmonic music, and low-friction sensory stimming.",
    bullets: [
      "Built a full-screen WebGL-first experience with animated cathedral ribs, glass shards, caustic veils, light shafts, point sprites, reactive lighting, and tunnel camera motion.",
      "Created a studio control surface for visuals, motion, image sources, music generation, instrument mapping, 3D parameters, trips, presets, and chrome-free focus mode.",
      "Added a local generative music engine with key, scale, tempo, groove, harmony, polyrhythm, bass, arpeggio, melody, percussion, drone, shimmer, and stereo controls.",
    ],
  },
  {
    id: "rts-builder",
    name: "RTS Builder",
    eyebrow: "Browser RTS map editor",
    image: "images/rts-builder-map-editor.png",
    repository: "",
    repositoryNote: "Local/private project",
    stack: ["React", "TypeScript", "Canvas", "Vite", "generated asset pipeline"],
    proofPoints: ["Map editor screenshot", "73 generated PNG assets", "JSON import/export and playtest mode"],
    outcome:
      "A browser-based 2D RTS level designer with terrain painting, road brushes, minimap navigation, asset placement, validation rules, generated sprites, and in-editor playtest mode.",
    bullets: [
      "Implemented deliberate hand-authoring tools for terrain, roads, structures, units, props, labels, collision overlays, and scenario markers.",
      "Built generated terrain, road, sprite, rotation, and atlas assets into the editor while keeping procedural renderers as fallbacks.",
      "Added autosave, undo/redo, JSON import/export, tutorial flow, and a playtest mode with selectable units and route drawing.",
    ],
  },
  {
    id: "linear-drive",
    name: "Linear Drive",
    eyebrow: "Native C++ horror driving game",
    image: "images/linear-drive-cockpit.png",
    repository: "",
    repositoryNote: "Local/private project",
    stack: ["C++", "raylib", "CMake", "Ninja", "game systems"],
    proofPoints: ["Runtime cockpit capture", "Physical car-control interactions", "Installer/release workflow"],
    outcome:
      "A native Windows first-person survival-horror driving game with a diegetic cockpit, alien/tornado set pieces, route generation, accessibility options, and packaged release flow.",
    bullets: [
      "Built gameplay around physical cockpit controls such as ignition, radio, shifter, handbrake, locks, headlights, wipers, horn, and mirror glance.",
      "Implemented survival pressure systems including slow-risk, alien pursuit, road hazards, storms, tornado danger, and deterministic route variation.",
      "Maintained native build and packaging documentation with CMake/Ninja, release zips, installer scripts, smoke runs, and capture commands.",
    ],
  },
  {
    id: "ocean-drift-level-builder",
    name: "Ocean Drift Level Builder",
    eyebrow: "3D editor and asset workflow",
    image: "images/ocean-drift-level-builder-live.png",
    repository: "https://github.com/CurioCrafter/oceandriftleveldesigner",
    repositoryNote: "Private repo",
    stack: ["TypeScript", "Vite", "3D asset tooling", "JSON import/export"],
    proofPoints: ["65 asset cards loaded", "3D viewport capture", "Export workflow"],
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
    image: "images/curiomesh-remesh-output.png",
    detailImage: "images/blender-tools-suite.png",
    repository: "https://github.com/CurioCrafter/CurioMesh",
    repositoryNote: "Public repo",
    stack: ["Python", "Blender API", "mesh processing", "technical art tools"],
    proofPoints: ["Blender matrix artifacts", "Before/after renders", "QuadriFlow + TRIAD-Q Lite"],
    outcome:
      "A Blender add-on for automatic quad remeshing and retopology workflows with practical artist-facing controls.",
    bullets: [
      "Built tooling around mesh cleanup, UV/material preservation, projection, quality presets, and remeshing metrics.",
      "Designed controls for artists instead of only exposing raw implementation knobs.",
      "Demonstrates Python tool development, Blender scripting, and technical art pipeline thinking.",
    ],
  },
  {
    id: "blender-tools-pipeline",
    name: "Blender Tools Pipeline",
    eyebrow: "Add-on suite and validation workflow",
    image: "images/blender-tools-suite.png",
    mediaFit: "contain",
    repository: "",
    repositoryNote: "Local suite / private prototypes",
    stack: ["Python", "Blender API", "visual QA", "rigging", "boolean tooling"],
    proofPoints: ["TerrainForge + Laser Saw inspected", "5 Blender add-on workstreams", "Visual QA artifacts"],
    outcome:
      "A broader Blender tooling suite covering terrain generation, mesh cutting, remeshing, character generation, rig setup, hard-surface cutters, and an in-Blender AI command surface.",
    bullets: [
      "Inspected TerrainForge, Laser Saw, CurioMesh, Armaturizer, Extractionator, GenerateHuman, and Codex Blender Agent project folders and READMEs.",
      "GenerateHuman includes deterministic character generation, visual QA galleries, engine export presets, and GLB/reimport checks.",
      "TerrainForge, Laser Saw, Extractionator, and Armaturizer add production-minded workflows for tiled terrain, through-view cuts, hard-surface boolean sets, guided rigs, weights, and export.",
    ],
  },
  {
    id: "terrainforge",
    name: "TerrainForge",
    eyebrow: "Blender procedural terrain add-on",
    image: "images/terrainforge-surface-atlas.png",
    mediaFit: "contain",
    repository: "",
    repositoryNote: "Installed Blender add-on",
    stack: ["Python", "Blender API", "NumPy", "heightmaps", "QA campaign tooling"],
    proofPoints: ["Blender 4.5 add-on path inspected", "Professional bake workflow", "Headless campaign runner"],
    outcome:
      "A Blender terrain-generation add-on for preview meshes, segmented worlds, tiled heightmap export, texture layers, cave volumes, LOD/detail bake, and professional selected-tile baking.",
    bullets: [
      "Built a terrain workflow around preview generation, export validation, tiled worlds, segmented region editing, local tile overrides, stamps, masks, and recipe scripts.",
      "Added professional bake output for dense selected-tile meshes with height, normal, cavity, curvature, albedo, UVs, materials, metrics, and manifests.",
      "Maintained automated campaign tooling that can run Blender headlessly and emit case configs, logs, thumbnails, manifests, metrics, and classified defects.",
    ],
  },
  {
    id: "procedural-ocean",
    name: "Procedural Ocean",
    eyebrow: "Native DirectX underwater survival game",
    image: "images/procedural-ocean-dive-computer.png",
    mediaFit: "contain",
    repository: "",
    repositoryNote: "Local/private project",
    stack: ["C++", "DirectX 11", "CMake", "procedural generation", "survival systems"],
    proofPoints: ["Dive-computer UI asset", "Procedural terrain and fauna scope", "Apache-2.0 release notes"],
    outcome:
      "A native C++/DirectX 11 underwater survival and exploration project focused on procedural terrain, ocean rendering, creature ecosystems, crafting, building, and expedition HUD design.",
    bullets: [
      "Designed gameplay systems around swimming, scanning, crafting, base building, survival telemetry, tools, inventory, sonar, map, and environmental pressure.",
      "Documented a renderer and world direction with streamed chunks, LOD rings, kelp, coral, resources, dust, vents, creatures, underwater lighting, and post-processing.",
      "Maintained release and branding guidance, including Apache-2.0 licensing language and official-distribution boundaries.",
    ],
  },
  {
    id: "song-deconstructor",
    name: "SongDeconstructor",
    eyebrow: "Audio ML feature extraction tool",
    image: "images/song-deconstructor-web-ui.png",
    repository: "",
    repositoryNote: "Local/private project",
    stack: ["Python", "FastAPI", "NumPy", "audio analysis", "CLI/Web UI"],
    proofPoints: ["Live local web UI captured", "manifest.json + features.npz output", "FL Studio handoff direction"],
    outcome:
      "A Python tool that converts songs into dense machine-learning feature bundles for downstream music analysis, generation, or DAW-adjacent workflows.",
    bullets: [
      "Extracts STFT magnitude, spectral peaks, chroma, MFCCs, RMS, onsets, beats, tempo, F0, segments, and feature-array metadata.",
      "Provides a CLI, Python API, and FastAPI web UI with drag-and-drop uploads, analyzer settings, recent runs, and download links.",
      "Defines a stable output contract around manifest JSON and compressed NumPy features so another model or FL Studio add-on can consume the results.",
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
    proofPoints: ["Codebase located", "Needs current media", "Systems programming focus"],
    outcome:
      "A real-time artificial-life simulation prototype with procedural terrain, creature systems, rendering, camera controls, save/load, replay, and profiling direction.",
    bullets: [
      "Developed early creature behavior systems around movement, energy, predator/prey interactions, and genetic/neural scaffolding.",
      "Explored systems-level game programming with simulation architecture and rendering constraints.",
      "Focused on performance-oriented thinking through profiling and explicit systems boundaries.",
    ],
  },
  {
    id: "ant-colony",
    name: "Ant Colony Simulator",
    eyebrow: "Browser simulation game",
    image: "images/ant-colony-live-simulation.png",
    repository: "",
    repositoryNote: "Local prototype",
    stack: ["TypeScript", "Vite", "Canvas/WebGL", "simulation systems", "Playwright"],
    proofPoints: ["Live canvas capture", "1x-16x speed controls", "Tool-driven colony UI"],
    outcome:
      "A browser-based colony simulation with overworld/colony views, simulation speed controls, resource states, trails, threat tracking, and player tools.",
    bullets: [
      "Built a readable simulation UI with queen, reserves, brood, threats, caste counts, and colony log state.",
      "Added explicit speed presets up to 16x and controls for food, digging, defense, trails, and alarms.",
      "Kept the system testable with build, smoke, deep playtest, and visual playtest scripts.",
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
    proofPoints: ["Public tool concept", "Blender N-panel workflow", "Modeling productivity focus"],
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
    proofPoints: ["Local prototype", "3D educational UI", "Acceptance checks"],
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
    image: "images/codexforworkflow-command-center.png",
    repository: "https://github.com/CurioCrafter/CodexForWorkflow",
    repositoryNote: "Public repo",
    stack: ["TypeScript", "Electron", "Playwright", "AI workflow automation"],
    proofPoints: ["Command-center screenshot", "Approval gates", "Desktop automation UX"],
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
    image: "images/disk-space-inspector-overview.png",
    repository: "https://github.com/CurioCrafter/Disk-Space-Inspector",
    repositoryNote: "Public repo",
    stack: ["C#", "SQLite", "desktop app development", "data visualization"],
    proofPoints: ["Scan dashboard screenshot", "Cleanup staging", "Safety-first UX"],
    outcome:
      "A Windows utility that scans local drives, stores snapshots, visualizes disk usage, and stages cleanup recommendations for review.",
    bullets: [
      "Designed safety-first cleanup workflows that explain files and paths before action.",
      "Added screenshot-based documentation, release packaging, and user-facing guidance.",
      "Shows care for developer ergonomics, user trust, and practical desktop workflows.",
    ],
  },
];

export const blenderToolchain = [
  {
    name: "TerrainForge",
    role: "Tiled terrain generation and baking",
    proof: "Preview meshes, segmented worlds, export seam checks, professional bake, and campaign artifacts.",
  },
  {
    name: "Laser Saw",
    role: "Through-view mesh cutting",
    proof: "Mesh Edit and Sculpt Mode support, separate-object splits, open bisect, kerf width, and Blender smoke tests.",
  },
  {
    name: "CurioMesh",
    role: "Quad remeshing and retopology",
    proof: "Matrix runner captures before/after PNGs, metrics, and summary reports.",
  },
  {
    name: "GenerateHuman",
    role: "Deterministic character generator",
    proof: "Visual QA gallery, LOD checks, GLB/FBX export presets, and custom metadata export.",
  },
  {
    name: "Armaturizer",
    role: "Guided biped/quadruped rig setup",
    proof: "Guide landmarks, DEF/CTRL/HELPER/MCH bone collections, weight cleanup, Roblox FBX export.",
  },
  {
    name: "Extractionator",
    role: "Hard-surface boolean command center",
    proof: "Live cutters, boolean sets, curve booleans, Mesh Doctor, duplicate-first finalize workflow.",
  },
  {
    name: "Codex Blender Agent",
    role: "AI Studio inside Blender",
    proof: "Scene tools, workflow graphs, asset library, visual self-review, dashboard observability.",
  },
];

export const inspectedProjects = [
  {
    name: "PlayableCat",
    type: "Roblox locomotion prototype",
    evidence:
      "README and Luau modules show skinned cat rig control, gait state, crouch/charge jump, traversal sensing, and HUD/debug systems.",
  },
  {
    name: "Laser Saw",
    type: "Blender mesh-cutting add-on",
    evidence:
      "README and tests show Mesh Edit/Sculpt Mode cutting, open bisect, separate capped objects, kerf width, toolbar tools, and smoke coverage.",
  },
  {
    name: "TerrainForge",
    type: "Blender terrain pipeline",
    evidence:
      "Tutorial and source show segmented worlds, terrain layers, cave volumes, professional bake, texture layers, and campaign QA artifacts.",
  },
  {
    name: "SongDeconstructor",
    type: "Audio analysis tool",
    evidence:
      "Live local FastAPI UI captured, with prior analysis outputs containing manifest.json and features.npz.",
  },
  {
    name: "TacOps",
    type: "Browser tactical FPS",
    evidence:
      "README and playtest screenshots show modes, bot/friend lobbies, loadouts, authoritative Colyseus server, and deployment wiring.",
  },
  {
    name: "RTS Builder",
    type: "Browser level editor",
    evidence:
      "README and smoke screenshot show canvas map authoring, generated sprites, road/terrain tools, JSON export, and playtest mode.",
  },
];

export const resumeSignals = [
  {
    label: "Best fit",
    value: "Junior game developer, Python/Blender tools, technical art support",
  },
  {
    label: "Lead proof",
    value: "Ocean Drift, Destimmer, TacOps, Blender Tools Pipeline",
  },
  {
    label: "Strongest angle",
    value: "Playable prototypes plus practical tools that remove production friction",
  },
  {
    label: "Next polish",
    value: "Turn two private/local projects into public demo reels with short postmortems",
  },
];

export const roleFit = [
  {
    role: "Junior Gameplay Developer",
    pitch: "Prototype loops, HUDs, camera feel, simulation rules, and browser-playable vertical slices.",
    proof: ["Ocean Drift", "TacOps", "Linear Drive", "Ant Colony Simulator"],
  },
  {
    role: "Python / Blender Tools Developer",
    pitch: "Build artist-facing add-ons, validation scripts, export flows, and visual QA artifacts.",
    proof: ["TerrainForge", "CurioMesh", "Laser Saw", "GenerateHuman"],
  },
  {
    role: "Technical Artist Assistant",
    pitch: "Bridge visual goals and engineering constraints across meshes, terrain, materials, and 3D UI.",
    proof: ["Blender Tools Pipeline", "Codex 3D Studio", "Procedural Ocean"],
  },
  {
    role: "Creative Technologist",
    pitch: "Ship interactive WebGL, generative audio/visual systems, and AI-assisted workflows.",
    proof: ["Destimmer", "CodexForWorkflow", "SongDeconstructor"],
  },
];

export const nextBuilds = [
  {
    name: "Creature Behavior Lab",
    goal: "Package one small public browser demo where fish, ants, or organisms show readable AI behavior.",
    why: "It turns several simulation ideas into one recruiter-friendly proof of gameplay systems thinking.",
    stack: "TypeScript, Canvas/WebGL, deterministic simulation",
    milestones: ["One-page live demo", "Debug overlay", "Short postmortem with GIFs"],
  },
  {
    name: "Blender Add-on Demo Reel",
    goal: "Record a 60-90 second reel showing TerrainForge, Laser Saw, CurioMesh, and GenerateHuman workflows.",
    why: "The Blender work is strong, but employers need to understand the value in under a minute.",
    stack: "Blender 4.5, Python add-ons, OBS/capture workflow",
    milestones: ["Before/after clips", "Packaged add-on links", "Proof sheet on the portfolio"],
  },
  {
    name: "Ocean Drift Public Slice",
    goal: "Ship a public solo-play loop with one creature, one ability, one arena, and one clear win condition.",
    why: "A finished loop beats a large private prototype when applying for junior game roles.",
    stack: "Three.js, Vite, WebGL2, lightweight save/state",
    milestones: ["Playable GitHub Pages build", "Mobile controls pass", "Performance budget notes"],
  },
  {
    name: "Tooling Case Study Pack",
    goal: "Turn three utilities into concise case studies with screenshots, problem statements, and outcomes.",
    why: "This makes the resume read as product-minded engineering instead of a raw project inventory.",
    stack: "React, Electron, Python/FastAPI, desktop utilities",
    milestones: ["Problem/scope/result copy", "One screenshot per tool", "Resume bullet rewrite"],
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
      "Authoritative multiplayer prototypes",
      "DirectX 12 and HLSL",
      "Native C++ game loops",
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
      "Terrain and level builders",
      "Quality presets and metrics",
    ],
  },
  {
    title: "Product and Delivery",
    items: [
      "React and Electron",
      "SQLite and local-first data",
      "Vite and Node.js",
      "FastAPI web tools",
      "Audio feature extraction",
      "Playwright checks",
      "GitHub workflows",
      "AI-assisted iteration",
    ],
  },
];
