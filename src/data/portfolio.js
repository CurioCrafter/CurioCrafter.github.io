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
  resumePrint: "resume-print.html",
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

export const featuredProjectIds = [
  "tidefront-terrain-studio",
  "tidefront-blender-workflow",
  "claude-citizen",
  "ocean-supremacy",
];

export const evidenceScreenshots = [
  {
    title: "Tidefront Terrain Studio",
    label: "Map authoring",
    image: "images/tidefront-terrain-studio-architecture.png",
    to: "/projects/tidefront-terrain-studio",
    alt: "Tidefront Terrain Studio architecture stamp controls and ocean map preview",
  },
  {
    title: "EasyTexture PBR add-on",
    label: "Blender add-on",
    image: "images/easytexture-addon-pbr-proof.png",
    to: "/projects/blender-tools-pipeline",
    alt: "Blender render created after EasyTexture applied PBR texture channels",
  },
  {
    title: "AI Retopo Assist",
    label: "Blender add-on",
    image: "images/ai-retopo-assist-proof.png",
    to: "/projects/blender-tools-pipeline",
    alt: "Blender render of AI Retopo Assist source mesh and generated retopo guides",
  },
  {
    title: "Claude Citizen Solar Atlas",
    label: "External contribution",
    image: "images/claude-citizen-solar-atlas.png",
    to: "/projects/claude-citizen",
    alt: "Claude Citizen Solar Atlas browser game navigation screenshot",
  },
];

export const projects = [
  {
    id: "tidefront-terrain-studio",
    name: "Tidefront Terrain Studio",
    eyebrow: "Ocean map authoring workbench",
    image: "images/tidefront-terrain-studio-architecture.png",
    detailImage: "images/tidefront-terrain-studio-desktop.png",
    gallery: [
      {
        title: "Architecture stamp controls",
        caption: "Terrain Studio capture showing map-scale architecture handles and ocean bounds.",
        image: "images/tidefront-terrain-studio-architecture.png",
        alt: "Tidefront Terrain Studio architecture stamp controls and ocean map bounds",
      },
      {
        title: "Terrain workbench",
        caption: "Desktop capture of the sculpting and QA workspace used to frame the case study.",
        image: "images/tidefront-terrain-studio-desktop.png",
        alt: "Tidefront terrain workbench desktop screenshot with editor controls",
      },
      {
        title: "Shared asset catalog",
        caption: "Asset data surface tying runtime creatures, props, textures, and Studio review together.",
        image: "images/tidefront-asset-catalog.png",
        alt: "Tidefront shared asset catalog screenshot",
      },
    ],
    repository: "",
    repositoryNote: "Local case-study evidence",
    stack: ["TypeScript", "Three.js", "Terrain Studio", "Playwright", "Blender bridge"],
    proofPoints: ["Terrain Studio authoring capture", "Architecture handles and map bounds", "QA/evidence workspace"],
    outcome:
      "A dark technical map-authoring workbench for Ocean Drift/Tidefront terrain, with sculpting lanes, architecture stamps, terrain bounds, playtest handoff, and visible QA evidence.",
    bullets: [
      "Built a Studio surface that lets terrain work stay visual: generate, sculpt, stamp architecture, frame bounds, export heightmaps/JSON, and jump into playtest preview.",
      "Connected authoring controls to real terrain concepts such as reef canyons, lagoon shelves, kelp banks, reef crests, map bounds, surface detail, masks, and material states.",
      "Captured QA and smoke evidence from the local Studio workflow so the case study shows working tools, not just concept screenshots.",
    ],
    implementationNotes: [
      {
        title: "Authoring lanes",
        body: "The UI separates terrain, layout, assets, gameplay zones, export, QA, and playtest so map-building tasks are discoverable without burying the viewport.",
      },
      {
        title: "Map proof",
        body: "Screenshots come from the local Tidefront/Ocean Drift Studio artifacts and show terrain architecture controls, generated maps, and QA surfaces.",
      },
      {
        title: "Recruiter signal",
        body: "This is the strongest game-tools evidence because it combines 3D viewport work, editor UX, map data, and validation screenshots in one project.",
      },
    ],
  },
  {
    id: "tidefront-blender-workflow",
    name: "Tidefront Blender + Asset Workflow",
    eyebrow: "Blender bridge and asset catalog tooling",
    image: "images/tidefront-blender-live.png",
    detailImage: "images/tidefront-asset-catalog.png",
    gallery: [
      {
        title: "Blender bridge controls",
        caption: "Live Blender-facing controls for bridge checks, terrain sync, markers, and scene reads.",
        image: "images/tidefront-blender-live.png",
        alt: "Tidefront Blender bridge workflow screenshot with Python tool controls",
      },
      {
        title: "Runtime asset catalog",
        caption: "Shared catalog capture used to explain how Studio and runtime asset lists stay reviewable.",
        image: "images/tidefront-asset-catalog.png",
        alt: "Tidefront runtime asset catalog screenshot",
      },
      {
        title: "Studio handoff",
        caption: "Terrain Studio capture showing the game-editor side of the Blender and asset pipeline.",
        image: "images/tidefront-terrain-studio-desktop.png",
        alt: "Tidefront Studio terrain handoff screenshot",
      },
      {
        title: "Asset Shelf smoke export",
        caption: "Fresh Blender 4.5.11 capture after the Tidefront Asset Shelf add-on exported GLB, source blend, and catalog metadata.",
        image: "images/tidefront-asset-shelf-addon-proof.png",
        alt: "Tidefront Asset Shelf Blender add-on export proof render",
      },
    ],
    repository: "",
    repositoryNote: "Local case-study evidence",
    stack: ["Python", "Blender API", "TypeScript", "asset catalogs", "JSON export"],
    proofPoints: ["Blender bridge panel", "Shared asset catalog", "Studio asset QA captures"],
    outcome:
      "A production-tools slice around moving Tidefront terrain and asset data between Studio, runtime catalogs, Blender bridge workflows, and reviewable QA surfaces.",
    bullets: [
      "Worked on the toolchain around terrain sync, Blender scene reads, local bridge checks, project JSON, heightmap export, and runtime asset catalog handoff.",
      "Built recruiter-readable proof around actual workflow surfaces: shared asset catalog, Studio QA lane, terrain workspace, and Blender bridge controls.",
      "Framed Blender work as production support for a game pipeline instead of a loose set of unfinished add-on experiments.",
    ],
    implementationNotes: [
      {
        title: "Asset workflow",
        body: "The shared catalog screenshot shows runtime and Studio reading the same creature, prop, texture, ability, and food asset lists.",
      },
      {
        title: "Blender bridge",
        body: "The bridge panel keeps Blender-facing actions explicit: check the local bridge, sync terrain, add markers, and read scene state.",
      },
      {
        title: "Scope boundary",
        body: "The case study focuses on verified local workflow evidence rather than claiming a fully packaged public Blender add-on release.",
      },
    ],
  },
  {
    id: "claude-citizen",
    name: "Claude Citizen Solar Atlas Contribution",
    eyebrow: "External game project contribution",
    image: "images/claude-citizen-solar-atlas.png",
    detailImage: "images/claude-citizen-solar-atlas-detail.png",
    gallery: [
      {
        title: "Solar Atlas surface",
        caption: "Local browser capture of the polished navigation surface tied to the upstream work.",
        image: "images/claude-citizen-solar-atlas.png",
        alt: "Claude Citizen Solar Atlas game UI screenshot",
      },
      {
        title: "Navigation detail",
        caption: "Detail capture focused on route clarity, UI treatment, and screenshot-ready presentation.",
        image: "images/claude-citizen-solar-atlas-detail.png",
        alt: "Claude Citizen Solar Atlas navigation detail screenshot",
      },
    ],
    repository: "https://github.com/huiung/claude-citizen",
    repositoryNote: "Upstream repo",
    stack: ["TypeScript", "Vite", "Three.js", "game UI", "Git collaboration"],
    proofPoints: ["Upstream PR #10 merge", "Solar Atlas navigation polish", "Local browser capture"],
    outcome:
      "A contribution to another developer's browser space game focused on Solar Atlas navigation polish, pointer-lock safety, orbit selection clarity, and screenshot-ready visual presentation.",
    bullets: [
      "Verified the upstream history contains a merge from CurioCrafter's solar-atlas navigation polish branch, with authored commits present on the remote history.",
      "Worked inside an existing codebase instead of a solo repo, keeping interaction changes aligned with the project's flight, atlas, and navigation surfaces.",
      "Captured polished Solar Atlas screenshots from the local checkout so the contribution reads as external collaboration plus concrete visual proof.",
    ],
    implementationNotes: [
      {
        title: "Collaboration proof",
        body: "The public upstream repo contains a merged pull request from the CurioCrafter branch; the local checkout also includes branch and artifact history.",
      },
      {
        title: "Interaction focus",
        body: "The contribution centers on navigation feel and pointer-lock safety, which are small but important details in a browser game.",
      },
      {
        title: "Visual proof",
        body: "The selected screenshot avoids unfinished branch UI and shows the polished Solar Atlas surface tied to the pushed contribution.",
      },
    ],
  },
  {
    id: "ocean-supremacy",
    name: "Ocean Supremacy Web / Ocean Drift",
    eyebrow: "Browser 3D survival game",
    image: "images/ocean-drift-lobby.png",
    detailImage: "images/ocean-water-lab-blue-glass-shaft.png",
    repository: "https://github.com/CurioCrafter/oceansupremacyweb",
    isPrivate: true,
    repositoryNote: "Case-study source",
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
    repositoryNote: "Captured case study",
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
    repositoryNote: "Captured case study",
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
    repositoryNote: "Captured case study",
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
    repositoryNote: "Captured case study",
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
    isPrivate: true,
    repositoryNote: "Case-study source",
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
    id: "blender-tools-pipeline",
    name: "Blender Tools Pipeline",
    eyebrow: "Production-tools case study",
    image: "images/easytexture-addon-pbr-proof.png",
    detailImage: "images/ai-retopo-assist-proof.png",
    gallery: [
      {
        title: "EasyTexture PBR smoke",
        caption: "Fresh Blender 4.5.11 capture after EasyTexture applied Base Color, Normal, Roughness, and Packed ORM through its public operator.",
        image: "images/easytexture-addon-pbr-proof.png",
        alt: "EasyTexture Blender add-on PBR proof render",
      },
      {
        title: "AI Retopo Assist smoke",
        caption: "Fresh Blender 5.1.2 capture after AI Retopo Assist generated preview guides and applied a 100% quad target.",
        image: "images/ai-retopo-assist-proof.png",
        alt: "AI Retopo Assist Blender add-on proof render",
      },
      {
        title: "Tidefront Asset Shelf export",
        caption: "Fresh Blender 4.5.11 capture from the asset-shelf add-on after exporting a GLB, source blend, and catalog entry.",
        image: "images/tidefront-asset-shelf-addon-proof.png",
        alt: "Tidefront Asset Shelf Blender add-on proof render",
      },
      {
        title: "Shared asset catalog",
        caption: "Runtime and Studio asset lists tied into the Blender-facing production workflow.",
        image: "images/tidefront-asset-catalog.png",
        alt: "Tidefront shared asset catalog screenshot",
      },
    ],
    repository: "",
    repositoryNote: "Pipeline case study",
    stack: ["Python", "Blender API", "PBR materials", "retopo planning", "export tooling"],
    proofPoints: ["EasyTexture PBR smoke", "AI Retopo quad target smoke", "Tidefront Asset Shelf GLB/catalog export"],
    outcome:
      "A focused tools-pipeline story around real Blender add-ons: PBR texture assignment, preview-first retopo planning, asset-shelf export, catalog metadata, and visual QA artifacts.",
    bullets: [
      "Ran EasyTexture through Blender 4.5.11 to apply Base Color, Normal, Roughness, and Packed ORM channels, then captured the resulting PBR material output.",
      "Ran AI Retopo Assist through Blender 5.1.2 to preview guide geometry and apply a mostly quad retopo target from a stroke-driven plan.",
      "Ran Tidefront Asset Shelf through Blender 4.5.11 to export a runtime GLB, source blend, and catalog metadata from an authored module.",
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
    repositoryNote: "Captured case study",
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
    liveUrl: "song-lab/index.html",
    repository: "",
    repositoryNote: "Hosted static demo + local/private source",
    stack: ["Python", "FastAPI", "NumPy", "Canvas", "audio analysis", "CLI/Web UI"],
    proofPoints: [
      "Public static visual lab",
      "Live local web UI captured",
      "manifest.json + features.npz output",
      "FL Studio handoff direction",
    ],
    outcome:
      "A Python tool that converts songs into dense machine-learning feature bundles, now paired with a public browser visualizer for downstream music analysis, generation, or DAW-adjacent workflows.",
    bullets: [
      "Extracts STFT magnitude, spectral peaks, chroma, MFCCs, RMS, onsets, beats, tempo, F0, segments, and feature-array metadata.",
      "Provides a CLI, Python API, and FastAPI web UI with drag-and-drop uploads, analyzer settings, recent runs, and download links.",
      "Ships a static Canvas visual lab so reviewers can scrub beats, energy, chroma, peaks, and song segments directly on GitHub Pages.",
      "Defines a stable output contract around manifest JSON and compressed NumPy features so another model or FL Studio add-on can consume the results.",
    ],
  },
  {
    id: "organism-evolution",
    name: "OrganismEvolution",
    eyebrow: "Artificial life simulation",
    image: "images/anothergame.png",
    isArchived: true,
    repository: "https://github.com/CurioCrafter/OrganismEvolution",
    repositoryNote: "Public repo",
    stack: ["C++20", "DirectX 12", "HLSL", "CMake", "simulation systems"],
    proofPoints: ["Public C++ prototype repo", "Simulation architecture", "Systems programming focus"],
    outcome:
      "A real-time artificial-life simulation prototype with procedural terrain, creature systems, rendering, camera controls, save/load, replay, and profiling direction.",
    bullets: [
      "Developed early artificial-life systems around movement, energy, predator/prey interactions, and genetic/neural scaffolding.",
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
    repositoryNote: "Case-study evidence",
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
    isArchived: true,
    repository: "https://github.com/CurioCrafter/blender-alignment-suite",
    repositoryNote: "Public repo",
    stack: ["Python", "Blender API", "tool development"],
    proofPoints: ["Public add-on repo", "Blender N-panel workflow", "Modeling productivity focus"],
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
    isArchived: true,
    repository: "",
    repositoryNote: "Archived case study",
    stack: ["React", "React Three Fiber", "Three.js", "Vitest", "Playwright"],
    proofPoints: ["3D training UI capture", "Authored content model", "Acceptance checks"],
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
    name: "Tidefront Studio",
    role: "Terrain and map authoring",
    proof: "Architecture stamps, terrain bounds, exported project data, QA lane, and playtest handoff captures.",
  },
  {
    name: "Blender Bridge",
    role: "Studio-to-Blender workflow",
    proof: "Local bridge checks, terrain sync controls, scene-read actions, and screenshot evidence from the workbench.",
  },
  {
    name: "Shared Asset Catalog",
    role: "Runtime and Studio asset source",
    proof: "One catalog path for creatures, props, textures, abilities, food, thumbnails, and manual placement data.",
  },
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
    value: "Tidefront Terrain Studio, Blender workflow, Claude Citizen, Ocean Drift",
  },
  {
    label: "Strongest angle",
    value: "Game tools, Blender bridge workflows, and external contribution proof",
  },
  {
    label: "Portfolio surface",
    value: "Curated live demos, case-study screenshots, and role-specific proof paths",
  },
];

export const resumeProofStack = [
  {
    lane: "Studio first",
    title: "Lead with the most complete tool surface.",
    summary:
      "Tidefront Terrain Studio and Ocean Drift show map authoring, terrain controls, playtest handoff, runtime captures, and QA evidence in one coherent game-tools story.",
    resumeLine:
      "Game/tools developer building terrain authoring workbenches, 3D runtime prototypes, QA evidence surfaces, and playable browser systems.",
    links: [
      { label: "Tidefront Studio", to: "/projects/tidefront-terrain-studio" },
      { label: "Ocean Drift", to: "/projects/ocean-supremacy" },
    ],
  },
  {
    lane: "Game systems",
    title: "Use deeper game systems as case-study proof.",
    summary:
      "Ocean Drift, TacOps, Claude Citizen, Linear Drive, and Ant Colony show HUD work, camera feel, interaction polish, multiplayer planning, and gameplay loops.",
    resumeLine:
      "Prototype movement, HUDs, lobbies, bot modes, navigation polish, survival pressure, and simulation loops across browser and native game projects.",
    links: [
      { label: "Claude Citizen", to: "/projects/claude-citizen" },
      { label: "TacOps", to: "/projects/tacops" },
    ],
  },
  {
    lane: "Blender tools",
    title: "Turn Blender work into a production-tools story.",
    summary:
      "Tidefront Blender workflow, TerrainForge, Laser Saw, and the shared asset catalog are strongest when framed as artist-facing pipeline improvements with visual QA.",
    resumeLine:
      "Build Blender Python and game-editor workflows for terrain generation, mesh operations, asset catalogs, export handoff, and validation artifacts.",
    links: [
      { label: "Blender workflow", to: "/projects/tidefront-blender-workflow" },
      { label: "TerrainForge", to: "/projects/terrainforge" },
    ],
  },
  {
    lane: "Utility products",
    title: "Show product judgment through practical tools.",
    summary:
      "Desktop utilities, audio tooling, and automation surfaces make the portfolio broader without diluting the game/tools focus when each case has a clear user problem.",
    resumeLine:
      "Ship local-first utilities and automation tools with safety-conscious UX, screenshots, and delivery checks.",
    links: [
      { label: "SongDeconstructor", to: "/projects/song-deconstructor" },
      { label: "Disk Space Inspector", to: "/projects/disk-space-inspector" },
    ],
  },
];

export const roleFit = [
  {
    role: "Junior Gameplay Developer",
    pitch: "Prototype loops, HUDs, camera feel, simulation rules, and browser-playable vertical slices.",
    proof: ["Tidefront Terrain Studio", "Ocean Drift", "TacOps", "Claude Citizen"],
  },
  {
    role: "Python / Blender Tools Developer",
    pitch: "Build artist-facing add-ons, validation scripts, export flows, and visual QA artifacts.",
    proof: ["Tidefront Blender Workflow", "TerrainForge", "Laser Saw", "Asset Catalog"],
  },
  {
    role: "Technical Artist Assistant",
    pitch: "Bridge visual goals and engineering constraints across meshes, terrain, materials, and 3D UI.",
    proof: ["Tidefront Blender Workflow", "Blender Tools Pipeline", "Codex 3D Studio"],
  },
  {
    role: "Creative Technologist",
    pitch: "Ship interactive WebGL, generative audio/visual systems, and AI-assisted workflows.",
    proof: ["Destimmer", "CodexForWorkflow", "SongDeconstructor"],
  },
];

export const applicationPackets = [
  {
    role: "Junior Gameplay Developer",
    headline: "Lead with game systems and authoring tools.",
    fit: "Best for teams that need someone who can prototype controls, HUDs, map tools, interaction polish, and small public game loops.",
    inspect: [
      { label: "Tidefront Studio", to: "/projects/tidefront-terrain-studio" },
      { label: "Ocean Drift", to: "/projects/ocean-supremacy" },
      { label: "Claude Citizen", to: "/projects/claude-citizen" },
    ],
    bullets: [
      "Built terrain authoring, runtime, HUD, and playtest surfaces with screenshots and QA evidence a reviewer can inspect.",
      "Prototype movement, lobbies, HUDs, abilities, bot modes, navigation polish, and survival loops across browser and native game projects.",
      "Use screenshots, smoke checks, public repos, and public pages to prove the work instead of only describing it.",
    ],
    ask: "Ask me to walk through one terrain or gameplay loop from input, to state, to rendered feedback.",
  },
  {
    role: "Python / Blender Tools Developer",
    headline: "Lead with artist-facing tooling and validation artifacts.",
    fit: "Best for pipeline, technical art support, or tools teams that need Blender add-ons with practical controls and QA proof.",
    inspect: [
      { label: "Blender Workflow", to: "/projects/tidefront-blender-workflow" },
      { label: "Blender Pipeline", to: "/projects/blender-tools-pipeline" },
      { label: "TerrainForge", to: "/projects/terrainforge" },
    ],
    bullets: [
      "Build Blender Python and game-editor tools for terrain generation, mesh cutting, asset catalogs, bridge checks, export paths, and visual QA.",
      "Frame tools around artist outcomes: before/action/after, useful data handoff, screenshots, and repeatable validation.",
      "Keep proof concrete: a focused bridge/catalog workflow, TerrainForge evidence, and one visual capture per tool.",
    ],
    ask: "Ask me to explain how I would turn one repeated Blender task into a safe add-on workflow.",
  },
  {
    role: "Technical Artist Assistant",
    headline: "Lead with the bridge between visuals and engineering constraints.",
    fit: "Best for teams that need scene tools, 3D UI, procedural assets, and someone comfortable moving between art goals and code.",
    inspect: [
      { label: "Codex 3D Studio", to: "/projects/codex-3d-studio" },
      { label: "Procedural Ocean", to: "/projects/procedural-ocean" },
      { label: "Blender Tools", to: "/software" },
    ],
    bullets: [
      "Translate visual goals into working editors, asset catalogs, procedural scenes, and exportable data.",
      "Work across Three.js, Blender API, native rendering experiments, and practical validation screenshots.",
      "Use constraints as design inputs: browser delivery, asset ownership, performance, and reviewer clarity.",
    ],
    ask: "Ask me how I would prototype a tool that lets artists inspect, place, and export game assets.",
  },
  {
    role: "Creative Technologist",
    headline: "Lead with interactive WebGL, automation, and sensory systems.",
    fit: "Best for teams or projects that want unusual browser experiences, generative visuals, workflow automation, and practical product polish.",
    inspect: [
      { label: "Destimmer", to: "/projects/destimmer" },
      { label: "CodexForWorkflow", to: "/projects/codexforworkflow" },
      { label: "SongDeconstructor", to: "/projects/song-deconstructor" },
    ],
    bullets: [
      "Ship interactive WebGL, canvas, audio-analysis, and AI workflow surfaces with usable controls.",
      "Turn experimental ideas into public demos, screenshots, case-study copy, and concrete next steps.",
      "Balance visual experimentation with practical delivery: static hosting, local-first tools, and proof links.",
    ],
    ask: "Ask me to turn a creative tool idea into a small public demo with verification evidence.",
  },
];

export const nextBuilds = [
  {
    name: "Tidefront Studio Case Study",
    priority: "Best current proof",
    timeframe: "Next: tighten captures",
    deliverable: "Terrain Studio case study, QA screenshot set, short walkthrough",
    goal: "Turn the Tidefront map-authoring workbench into the first proof path for recruiters.",
    why: "It combines game development, editor UX, Blender-adjacent tooling, terrain systems, and verification evidence in one polished lane.",
    stack: "TypeScript, Three.js, Terrain Studio, Playwright",
    firstSteps: [
      "Capture the terrain, QA, assets, and playtest workspaces at consistent sizes.",
      "Write the case study around problem, workflow, implementation, and verification.",
      "Add one short clip showing terrain authoring into playtest handoff.",
    ],
    milestones: ["Screenshot set", "Case study copy", "Short walkthrough"],
  },
  {
    name: "Blender Bridge Proof Reel",
    priority: "Best tooling signal",
    timeframe: "1 capture day",
    deliverable: "60-90 second bridge/catalog reel plus proof sheet",
    goal: "Record a concise reel around the Tidefront Blender bridge, shared asset catalog, TerrainForge, and Laser Saw workflows.",
    why: "The Blender work is strongest when it is presented as production support for a game pipeline.",
    stack: "Blender 4.5, Python, TypeScript, asset catalogs",
    firstSteps: [
      "Pick one visible win for Blender bridge, asset catalog, TerrainForge, and Laser Saw.",
      "Capture before, action, after, and export/result screens.",
      "Cut the reel around outcomes instead of feature lists.",
    ],
    milestones: ["Bridge clip", "Catalog proof", "Proof sheet on the portfolio"],
  },
  {
    name: "Ocean Drift Public Slice",
    priority: "Best game demo",
    timeframe: "1 tight vertical slice",
    deliverable: "Playable solo loop with performance notes",
    goal: "Ship a public solo-play loop with one creature, one ability, one arena, and one clear win condition.",
    why: "A finished loop beats a large private prototype when applying for junior game roles.",
    stack: "Three.js, Vite, WebGL2, lightweight save/state",
    firstSteps: [
      "Freeze scope to movement, feeding, one threat, and one ability.",
      "Add a start-to-win flow that a reviewer can finish quickly.",
      "Capture desktop and mobile smoke evidence before linking it.",
    ],
    milestones: ["Playable GitHub Pages build", "Mobile controls pass", "Performance budget notes"],
  },
  {
    name: "Tooling Case Study Pack",
    priority: "Presentation polish",
    timeframe: "One afternoon per tool",
    deliverable: "Three case studies with problem/scope/result framing",
    goal: "Turn three utilities into concise case studies with screenshots, problem statements, and outcomes.",
    why: "This frames the tools as product-minded engineering instead of a raw project inventory.",
    stack: "React, Electron, Python/FastAPI, desktop utilities",
    firstSteps: [
      "Select the three tools with the clearest before/after value.",
      "Write each case as problem, constraints, implementation, proof.",
      "Update public project copy to point at shipped artifacts.",
    ],
    milestones: ["Problem/scope/result copy", "One screenshot per tool", "Project-copy refresh"],
  },
];

export const projectBriefs = [
  {
    title: "Tidefront Terrain Studio Walkthrough",
    lane: "Game tools",
    recommendation: "Build first",
    pitch:
      "Turn the current Terrain Studio screenshots into a short walkthrough that shows generate, stamp, bounds, QA, export, and playtest handoff.",
    why:
      "It is the most recruiter-ready proof because it connects game development, editor UX, terrain systems, and validation.",
    deliverable: "Short walkthrough, screenshot set, role-focused case study",
    scope: [
      "One clean authoring path from terrain preset to generated map",
      "One export/QA path with evidence screenshots",
      "One playtest handoff capture that shows the authored terrain in context",
    ],
    acceptance: [
      "Reviewer can understand the tool without knowing the codebase",
      "Case study explains what changed, why it matters, and how it was verified",
      "Portfolio links directly to the Terrain Studio and Blender workflow pages",
    ],
    codexHelp:
      "I can run the local Studio, capture fresh proof, write the case study, and keep the public project story aligned.",
    links: [
      { label: "Tidefront Studio", to: "/projects/tidefront-terrain-studio" },
      { label: "Tools lane", to: "/software" },
    ],
  },
  {
    title: "Ocean Drift Solo Arena",
    lane: "Game slice",
    recommendation: "Best game-role lift",
    pitch:
      "Cut Ocean Drift down to one public solo loop: spawn, swim, feed, avoid one threat, use one ability, and finish one objective.",
    why:
      "A small finished loop is more useful for junior game applications than a larger private prototype that a reviewer cannot play.",
    deliverable: "Public solo build, mobile smoke proof, one-minute gameplay capture",
    scope: [
      "One arena with a clear start and finish condition",
      "One creature, one threat, one ability, and one HUD objective",
      "Performance budget notes and desktop/mobile screenshots",
    ],
    acceptance: [
      "Reviewer can finish the loop in under three minutes",
      "Controls work on desktop and mobile",
      "Portfolio links directly to the public slice and its proof notes",
    ],
    codexHelp:
      "I can scope the public build, wire the solo flow, run smoke captures, and write the role-focused case-study update.",
    links: [
      { label: "Ocean Drift", to: "/projects/ocean-supremacy" },
      { label: "Games lane", to: "/games" },
    ],
  },
  {
    title: "Blender Bridge Proof Reel",
    lane: "Tools proof",
    recommendation: "Best tools-role lift",
    pitch:
      "Record a short reel that shows one before/action/after win each for Blender bridge, asset catalog, TerrainForge, and Laser Saw.",
    why:
      "The Blender tooling is deep, but hiring reviewers need to understand the value in under a minute.",
    deliverable: "60-90 second reel, proof sheet, tighter project copy",
    scope: [
      "One visible win per bridge/catalog/tool workflow",
      "A four-panel proof sheet for the portfolio",
      "Project copy rewritten around artist-facing outcomes",
    ],
    acceptance: [
      "Each clip shows before, action, after, and result",
      "Tools page exposes the reel/proof sheet near the top",
      "The public portfolio points directly at the Blender proof",
    ],
    codexHelp:
      "I can script the capture plan, update portfolio sections, write proof captions, and keep the public story aligned.",
    links: [
      { label: "Tools lane", to: "/software" },
      { label: "Blender proof", to: "/projects/blender-tools-pipeline" },
    ],
  },
  {
    title: "SongDeconstructor Visual Lab",
    lane: "Creative tool",
    recommendation: "Started",
    pitch:
      "Extend the new public browser visualizer from sample analysis data into a fuller SongDeconstructor proof surface.",
    why:
      "It creates a fresh public project from an existing technical tool and strengthens the creative-technologist lane.",
    deliverable: "Expanded visualizer demo, sample analysis bundle, tool case-study update",
    scope: [
      "Load one real sample manifest/features export",
      "Add richer timeline overlays for MFCCs, onsets, and pitch confidence",
      "Short explanation of how the data could feed DAW or generation workflows",
    ],
    acceptance: [
      "Reviewer can scrub or inspect at least three audio feature layers",
      "Demo runs as static GitHub Pages content",
      "Case study includes the output contract and next integration direction",
    ],
    codexHelp:
      "I can convert real output into browser-safe sample data, add the remaining layers, capture proof screenshots, and update the case study.",
    links: [
      { label: "SongDeconstructor", to: "/projects/song-deconstructor" },
      { label: "Live visual lab", href: "song-lab/index.html" },
      { label: "Tools lane", to: "/software" },
    ],
  },
];

export const buildSprints = [
  {
    title: "Role evidence pack",
    cadence: "1 focused pass",
    focus: "Keep the public portfolio ordered around role-specific proof links, screenshots, and concise project outcomes.",
    outputs: ["Proof-link checklist", "Case-study order", "Role-ready project sequence"],
    nextAction: "Keep the strongest public screenshots and case studies at the top of each role lane.",
  },
  {
    title: "Blender demo reel sprint",
    cadence: "1 capture day",
    focus: "Record one before/action/after clip per add-on so the Blender tooling work becomes obvious in under a minute.",
    outputs: ["60-90 second reel", "Tool proof sheet", "Portfolio reel section"],
    nextAction: "Capture Blender bridge, asset catalog, TerrainForge, and Laser Saw with one visible win each.",
  },
  {
    title: "Public game slice sprint",
    cadence: "3-5 build days",
    focus: "Ship one small Ocean Drift or TacOps public loop that a reviewer can complete without needing a private server.",
    outputs: ["Playable public URL", "Desktop/mobile smoke proof", "One-minute gameplay capture"],
    nextAction: "Freeze scope to one arena, one objective, one ability, and one finish condition.",
  },
  {
    title: "Case-study refresh sprint",
    cadence: "One afternoon per project",
    focus: "Upgrade the best existing projects from inventory entries into proof-led case studies with screenshots, constraints, and outcomes.",
    outputs: ["Problem/scope/result copy", "Updated screenshots", "Verification notes"],
    nextAction: "Start with Tidefront Studio, Blender Workflow, Claude Citizen, and Ocean Drift.",
  },
];

export const supportOffers = [
  {
    title: "Turn local projects into public proof",
    summary: "Pick the smallest impressive slice, remove private-only dependencies, build it, and publish it with screenshots.",
    outputs: ["Public demo URL", "Case-study copy", "Browser QA evidence"],
  },
  {
    title: "Sharpen project copy",
    summary: "Rewrite project entries around action, system, result, and verification instead of broad project descriptions.",
    outputs: ["Role-targeted copy", "Portfolio alignment", "Proof links"],
  },
  {
    title: "Capture Blender and game evidence",
    summary: "Run projects locally, take screenshots or short clips, and make the portfolio prove the work visually.",
    outputs: ["Proof sheets", "Demo reel plan", "Before/after captures"],
  },
  {
    title: "Build the next showcase project",
    summary: "Choose one roadmap item, implement a contained vertical slice, verify it, then wire it into the site.",
    outputs: ["Working project", "Tests/build checks", "Portfolio integration"],
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
