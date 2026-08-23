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
    "I contribute Godot/OpenXR gameplay and production-ready 3D to Shipwreck Discovery, alongside independent game systems and Blender Python tools built with visible QA.",
  focusAreas: [
    "Godot gameplay and OpenXR interaction",
    "Real-time retopology and PBR delivery",
    "Gameplay systems and prototyping",
    "Python and Blender API tools",
    "Terrain and level-authoring workflows",
    "Three.js and WebGL",
  ],
  proof: [
    { value: "VR", label: "current Shipwreck role" },
    { value: "18", label: "coral assets prepared" },
    { value: "10", label: "commits in merged upstream PR" },
    { value: "5", label: "Blender add-ons verified" },
  ],
  evidence: [
    "Current Godot and OpenXR feature work",
    "Actual-game trailer and store media",
    "Blender add-on smoke and matrix artifacts",
    "Public pull request plus private-project case studies",
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
    "Godot 4",
    "GDScript",
    "OpenXR",
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
  "shipwreck-discovery",
  "ocean-supremacy",
  "claude-citizen",
];

export const curatedProjectIds = [
  "shipwreck-discovery",
  "ocean-supremacy",
  "dronesim",
  "claude-citizen",
  "terrainforge",
  "laser-saw",
  "tidefront-terrain-studio",
  "tidefront-blender-workflow",
  "blender-tools-pipeline",
  "rts-builder",
  "destimmer",
];

export const gamePortfolioIds = [
  "shipwreck-discovery",
  "ocean-supremacy",
  "dronesim",
  "claude-citizen",
  "tidefront-terrain-studio",
  "tacops",
  "linear-drive",
];

export const toolsPortfolioIds = [
  "terrainforge",
  "laser-saw",
  "tidefront-blender-workflow",
  "blender-tools-pipeline",
  "rts-builder",
  "destimmer",
];

export const evidenceScreenshots = [
  {
    title: "Shipwreck Discovery VR",
    label: "Current professional work",
    image: "images/shipwreck-vr-gameplay.webp",
    to: "/projects/shipwreck-discovery",
    alt: "Actual Shipwreck Discovery VR gameplay above a living reef",
  },
  {
    title: "Tidefront reef runtime",
    label: "Current gameplay",
    image: "images/tidefront-gameplay-reef.webp",
    to: "/projects/ocean-supremacy",
    alt: "Tidefront fish gameplay in the authored underwater reef world",
  },
  {
    title: "TerrainForge Archipelago",
    label: "Four-tile Blender build",
    image: "images/terrainforge-tropical-archipelago-proof.webp",
    to: "/projects/terrainforge",
    alt: "TerrainForge four-tile tropical archipelago generated in Blender",
  },
  {
    title: "Laser Saw Production Cut",
    label: "Verified mesh operation",
    image: "images/laser-saw-production-cut-proof.webp",
    to: "/projects/laser-saw",
    alt: "Laser Saw production housing separated into two capped Blender meshes",
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
    id: "shipwreck-discovery",
    name: "Shipwreck Discovery",
    eyebrow: "Current professional VR work",
    image: "images/shipwreck-discovery-cover.png",
    imageAlt: "Shipwreck Discovery cover using actual underwater gameplay and the official game mark",
    detailImage: "images/shipwreck-discovery-cover.png",
    toolImage: "images/shipwreck-retopology-proof.webp",
    gallery: [
      {
        title: "Coral retopology and PBR delivery",
        caption:
          "Portfolio render from the production Blender delivery: baked real-time result beside the validated topology.",
        image: "images/shipwreck-retopology-proof.webp",
        alt: "Elkhorn coral baked PBR result beside its gold wireframe retopology",
      },
      {
        title: "Embodied VR reef interaction",
        caption: "Actual-game trailer frame showing tracked hands above the living shipwreck reef.",
        image: "images/shipwreck-vr-gameplay.webp",
        alt: "Shipwreck Discovery first-person VR hands interacting above coral and reef fish",
      },
      {
        title: "In-world species identification",
        caption: "Actual-game frame showing the diegetic Spadefish identification display.",
        image: "images/shipwreck-identification.webp",
        alt: "Shipwreck Discovery in-world Spadefish identification interface",
      },
      {
        title: "Wreck exploration environment",
        caption: "Actual-game trailer frame establishing the underwater wreck at the center of play.",
        image: "images/shipwreck-wreck-exploration.webp",
        alt: "Underwater wreck explored in Shipwreck Discovery VR",
      },
    ],
    repository: "",
    repositoryNote: "Private production repository",
    externalLinks: [
      {
        label: "View on Steam",
        shortLabel: "Steam page",
        url: "https://store.steampowered.com/app/3583270/Shipwreck_Discovery/",
        primary: true,
      },
      {
        label: "View on Meta Quest",
        shortLabel: "Meta Quest page",
        url: "https://www.meta.com/experiences/shipwreck-discovery/32767209856226296/",
      },
      {
        label: "Official game site",
        shortLabel: "Official site",
        url: "https://shipwreckdiscovery.com/",
      },
    ],
    stack: ["Godot 4", "GDScript", "OpenXR", "Blender", "PBR / GLB", "SteamVR / Meta Quest"],
    proofPoints: [
      "18 coral growth-stage assets prepared",
      "1K / 2K PBR and GLB validation",
      "Godot coral and wildlife feature work",
    ],
    outcome:
      "Contributing gameplay systems and real-time asset work to a live Early Access underwater VR game for SteamVR and Meta Quest.",
    contributionLabel: "Current game development and 3D technical art role",
    evidenceLabel: "Actual-game media and captured Blender delivery",
    primaryCaptureLabel: "Current production context",
    primaryCaptureTitle: "Godot / OpenXR gameplay and coral asset pipeline",
    bullets: [
      "Retopologize and prepare coral growth-stage assets for real-time VR, including UVs, PBR baking, and Godot-ready GLB delivery.",
      "Integrate coral growth, planting, placement, collision, and wildlife-balance systems in Godot.",
      "Debug VR interaction behavior and add focused regression coverage for gameplay fixes.",
      "Authored five current coral and wildlife feature commits plus a published VR gameplay fix while working inside the existing project architecture.",
    ],
    implementationNotes: [
      {
        title: "Contribution boundary",
        body: "My role covers the coral asset pipeline and focused Godot gameplay work shown here. Shipwreck Discovery, its broader game assets, and its store presence belong to Lionfish Central.",
      },
      {
        title: "Real-time coral delivery",
        body: "The production delivery contains 18 growth-stage coral assets, 1K and 2K PBR tiers, Godot-ready GLBs, and fresh Blender reimport checks.",
      },
      {
        title: "Current branch work",
        body: "Coral growth, planting, placement, collision, and wildlife-balance changes are active feature work. This case study does not present those changes as shipped until they are merged and released.",
      },
    ],
  },
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
        title: "Cross-discipline workflow",
        body: "The project combines 3D viewport work, editor UX, map data, and validation into one map-authoring workflow.",
      },
    ],
  },
  {
    id: "tidefront-blender-workflow",
    name: "Tidefront Blender Environment Workflow",
    eyebrow: "Underwater worldbuilding and asset handoff",
    image: "images/tidefront-blender-showcase.webp",
    detailImage: "images/tidefront-blender-gameplay.webp",
    gallery: [
      {
        title: "Underwater environment showcase",
        caption: "Direct Blender 4.5 render from the current Tidefront scene, showing the complete terraced reef layout and prop distribution.",
        image: "images/tidefront-blender-showcase.webp",
        alt: "Wide Blender render of the Tidefront underwater terrain and coral environment",
      },
      {
        title: "Gameplay-height environment view",
        caption: "A second camera inside the same scene, focused on terrain transitions, landmarks, and player-scale readability.",
        image: "images/tidefront-blender-gameplay.webp",
        alt: "Player-height Blender render across Tidefront terrain and coral props",
      },
      {
        title: "Basalt trench biome",
        caption: "Dedicated biome camera showing the darker rock language and enclosed trench silhouette.",
        image: "images/tidefront-blender-basalt.webp",
        alt: "Blender render of the Tidefront basalt trench biome",
      },
      {
        title: "Blender bridge controls",
        caption: "Live Blender-facing controls for bridge checks, terrain sync, markers, and scene reads.",
        image: "images/tidefront-blender-live.png",
        alt: "Tidefront Blender bridge workflow screenshot with Python tool controls",
      },
      {
        title: "Asset Shelf export panel",
        caption: "The live Asset Shelf panel records a verified export of an original primitive-built beacon: 17 objects, 8,320 triangles, three materials, a GLB, source blend, and catalog entry.",
        image: "images/tidefront-asset-shelf-panel-proof.png",
        alt: "Tidefront Asset Shelf panel beside an original red and white beacon export fixture in Blender",
      },
    ],
    repository: "",
    repositoryNote: "Local case-study evidence",
    stack: ["Python", "Blender API", "TypeScript", "asset catalogs", "JSON export"],
    proofPoints: ["3 direct Blender scene renders", "718-object underwater scene", "Bridge and Asset Shelf workflow"],
    outcome:
      "A production worldbuilding slice that combines an authored underwater Blender scene, terrain and prop staging, dedicated showcase cameras, bridge controls, and runtime asset handoff.",
    bullets: [
      "Built and rendered the current underwater scene directly from the working .blend: 718 objects, 701 meshes, dedicated gameplay/showcase/biome cameras, terrain shelves, coral, rocks, landmarks, and lighting.",
      "Worked on the toolchain around terrain sync, Blender scene reads, local bridge checks, project JSON, heightmap export, and runtime asset catalog handoff.",
      "Validated the portfolio captures headlessly in Blender 4.5.10 at 1800px, then connected the scene evidence to the in-game reef and authoring workflow.",
    ],
    implementationNotes: [
      {
        title: "Scene evidence",
        body: "Every environment image on this case study is a direct render from the current Tidefront .blend, using named showcase, gameplay, and basalt-trench cameras.",
      },
      {
        title: "Blender bridge",
        body: "The bridge panel keeps Blender-facing actions explicit: check the local bridge, sync terrain, add markers, and read scene state.",
      },
      {
        title: "Runtime handoff",
        body: "The environment work is shown beside the live Tidefront runtime so the Blender scene reads as game-production support, not an isolated art exercise.",
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
    liveUrl: "https://claudecitizen.com",
    repository: "https://github.com/huiung/claude-citizen/pull/10",
    repositoryNote: "Merged PR #10",
    stack: ["TypeScript", "Vite", "Three.js", "game UI", "Git collaboration"],
    proofPoints: ["Merged upstream PR #10", "10 authored commits", "Live in the shipped game"],
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
        body: "The public upstream pull request contains ten authored commits and was merged after maintainer review. The feature is live in the shipped game.",
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
    id: "dronesim",
    name: "Frontline FPV",
    eyebrow: "Three.js combined-arms drone simulator",
    image: "images/dronesim-air-defense.webp",
    detailImage: "images/dronesim-acro-ingress.webp",
    gallery: [
      {
        title: "Air-defense strike",
        caption: "Live browser capture during a 7-inch ACRO sortie with a missile warning, link telemetry, finite objective count, and physical air-defense target below.",
        image: "images/dronesim-air-defense.webp",
        alt: "Frontline FPV combat sortie with a missile warning over an air-defense launcher",
      },
      {
        title: "Manual ACRO ingress",
        caption: "Banked low-level approach across trenches, armor, and the generated frontline using the simulator's manual rate and collective flight model.",
        image: "images/dronesim-acro-ingress.webp",
        alt: "Frontline FPV banked manual flight above trenches and armored vehicles",
      },
      {
        title: "Combined-arms frontline",
        caption: "Aerial view of infantry, armor, trench systems, and terrain scale captured from the current playable build.",
        image: "images/dronesim-frontline.webp",
        alt: "Frontline FPV aerial view of infantry armor and connected trenches",
      },
    ],
    liveUrl: "https://dronewarfare-fpv.netlify.app",
    repository: "https://github.com/CurioCrafter/DroneWarfare",
    isPrivate: true,
    repositoryNote: "Private source",
    stack: ["TypeScript", "Three.js", "Vite", "Playwright", "fixed-step simulation"],
    proofPoints: ["Live browser build", "6 active desktop/mobile checks", "120 Hz quaternion flight integration"],
    outcome:
      "A playable manual-ACRO FPV and air-defense simulator with role-specific airframes, combined-arms ground AI, generated battlefields, weather, link pressure, destructible strike targets, and replayable sorties.",
    bullets: [
      "Built fixed-step manual rate and collective flight around quaternion integration, motor spool, gravity, drag, gusting wind, terrain impact, voltage sag, payload cameras, and finite airframes.",
      "Created a live battlefield with infantry, tanks, APCs, trench networks, settlements, target sites, hostile UAV pressure, air-defense radar locks, jamming, interceptors, weather, and multiple generated layouts.",
      "Shipped a public Three.js build and a repeatable Playwright suite; the current verification passed six active desktop/mobile gameplay checks with the two non-applicable platform cases skipped.",
    ],
    implementationNotes: [
      {
        title: "Flight and input",
        body: "Desktop and mobile use the same manual ACRO flight law. Mobile keeps dual sticks and role-aware payload, camera, and pause controls instead of switching to a simplified guided mode.",
      },
      {
        title: "Simulation scope",
        body: "Terrain, weather, signal pressure, destructible air-defense sites, friendly and hostile units, payload jobs, and objectives all feed the same sortie loop.",
      },
      {
        title: "Verification",
        body: "The portfolio captures come from the current local build. The browser game is public; the source remains private, with production build commands and Playwright gameplay coverage verified locally.",
      },
    ],
  },
  {
    id: "ocean-supremacy",
    name: "Tidefront / Ocean Drift",
    eyebrow: "Browser 3D reef survival game",
    image: "images/tidefront-gameplay-reef.webp",
    detailImage: "images/tidefront-gameplay-reef.webp",
    gallery: [
      {
        title: "Current reef gameplay",
        caption: "Current runtime capture with third-person fish control, survival HUD, abilities, food state, leaderboard, minimap, and the authored reef world visible together.",
        image: "images/tidefront-gameplay-reef.webp",
        alt: "Tidefront third-person fish gameplay inside a wide tropical reef arena",
      },
      {
        title: "Authored terrain kit",
        caption: "Runtime terrain review showing reef towers, shelf transitions, coral landmarks, traversal lanes, and long-distance world composition.",
        image: "images/tidefront-authored-reef.webp",
        alt: "Tidefront authored tropical reef terrain running in the browser",
      },
      {
        title: "Lobby and server browser",
        caption: "Finished lobby surface for player identity, region selection, mode review, active rooms, join flow, audio, graphics, inventory, and account state.",
        image: "images/tidefront-lobby.webp",
        alt: "Tidefront lobby and multiplayer server browser",
      },
      {
        title: "Blender environment source",
        caption: "Direct render from the current underwater Blender scene used to stage terrain shelves, coral, rock language, landmarks, and biome cameras.",
        image: "images/tidefront-blender-showcase.webp",
        alt: "Tidefront underwater environment rendered directly in Blender",
      },
    ],
    repository: "https://github.com/CurioCrafter/oceansupremacyweb",
    isPrivate: true,
    repositoryNote: "Case-study source",
    stack: ["TypeScript", "Three.js", "WebGL2", "Blender", "WebSocket architecture"],
    proofPoints: ["Current playable reef capture", "Authored terrain and Blender scene", "Lobby and server-browser flow"],
    outcome:
      "A browser-based underwater survival game with third-person fish controls, growth and ability systems, authored reef biomes, a complete HUD, lobby and room flow, and a Blender-to-runtime worldbuilding pipeline.",
    bullets: [
      "Built player movement, feeding, sprint, abilities, camera states, HUD, growth, mutation, minimap, leaderboard, lobby, region, and match-selection flows.",
      "Authored and reviewed terrain across browser and Blender workflows, including reef shelves, towers, trenches, traversal lanes, biome landmarks, coral placement, rock language, water clarity, and scene cameras.",
      "Separated shared world rules from client rendering and server simulation while adding browser QA captures for runtime terrain, gameplay state, and the multiplayer entry flow.",
    ],
    implementationNotes: [
      {
        title: "Playable loop",
        body: "The current capture shows the actual survival loop in one frame: player state, movement, food, abilities, threats, growth, position, and the world being traversed.",
      },
      {
        title: "Worldbuilding pipeline",
        body: "Dedicated Blender cameras and browser terrain captures make it possible to compare the authored environment, the runtime kit, and the player-height result.",
      },
      {
        title: "Multiplayer surface",
        body: "The lobby handles player identity, region choice, room discovery, mode review, join/create flows, sound and graphics state, inventory, login, and legal status before the dive.",
      },
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
    image: "images/easytexture-game-prop-proof.webp",
    detailImage: "images/terrainforge-tropical-archipelago-proof.webp",
    gallery: [
      {
        title: "TerrainForge archipelago build",
        caption: "Installed TerrainForge v0.6.2 generated four detailed tropical-archipelago tiles with 264,196 vertices, surface data, and a verified export manifest.",
        image: "images/terrainforge-tropical-archipelago-proof.webp",
        alt: "Four-tile TerrainForge tropical archipelago build in Blender",
      },
      {
        title: "Laser Saw production cut",
        caption: "Laser Saw v0.4.0 split a hard-surface housing into two objects at a 0.19-unit kerf and exposed exactly two verified cap surfaces.",
        image: "images/laser-saw-production-cut-proof.webp",
        alt: "Laser Saw split hard-surface housing with highlighted cap surfaces",
      },
      {
        title: "Asset Shelf live export proof",
        caption: "The real add-on panel shows the selected export root and its completed output record: 17 objects, 8,320 triangles, three materials, a 193,212-byte GLB, source blend, and catalog metadata.",
        image: "images/tidefront-asset-shelf-panel-proof.png",
        alt: "Live Tidefront Asset Shelf export panel and original signal beacon fixture in Blender",
      },
      {
        title: "Controlled export fixture",
        caption: "An original primitive-built beacon from the same proof scene provides a controlled hierarchy and material set for validating GLB, source blend, and catalog output without external asset dependencies.",
        image: "images/tidefront-asset-shelf-beacon-output.webp",
        alt: "Original red and white signal beacon built as a Tidefront Asset Shelf export fixture",
      },
      {
        title: "EasyTexture game-prop material",
        caption: "EasyTexture v0.3.0 assigned Base Color, Normal, and packed ORM maps through its public operator and built the verified 11-node material on this prop.",
        image: "images/easytexture-game-prop-proof.webp",
        alt: "Textured hard-surface game prop produced through EasyTexture",
      },
      {
        title: "AI Retopo on an authored alien",
        caption: "AI Retopo Assist v0.2.0 generated a surface-conforming 144-face torso cage on aliencreature_001.blend with 100% quads, zero pole warnings, and zero flipped faces.",
        image: "images/ai-retopo-authored-alien-surface-proof.webp",
        alt: "Red all-quad AI Retopo Assist cage conforming to the torso of an authored alien character",
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
    stack: ["Python", "Blender API", "terrain baking", "mesh operations", "export tooling"],
    proofPoints: ["5 add-ons run in Blender 4.5.11", "Real operators and authored character input", "Geometry and export assertions"],
    outcome:
      "A tested Blender tools pipeline spanning procedural terrain, hard-surface mesh cutting, reusable asset packaging, PBR material setup, retopo planning, and visual QA on authored project files.",
    bullets: [
      "Built deterministic Blender capture scenes that call the real public operators and fail when expected meshes, materials, manifests, or export files are missing.",
      "Ran the retopo tool on an authored alien-character blend and used a clearly identified original primitive fixture to prove the Asset Shelf export path.",
      "Kept the evidence inspectable: the retopo report asserts quad ratio, poles, and winding, while TerrainForge, Laser Saw, EasyTexture, and Asset Shelf checks assert their concrete outputs.",
    ],
  },
  {
    id: "terrainforge",
    name: "TerrainForge",
    eyebrow: "Blender procedural terrain add-on",
    image: "images/terrainforge-tropical-archipelago-proof.webp",
    detailImage: "images/terrainforge-tropical-archipelago-proof.webp",
    gallery: [
      {
        title: "Four-tile tropical archipelago",
        caption: "TerrainForge v0.6.2 built four detailed 257-resolution tiles with 264,196 vertices and 262,144 faces, then wrote the verified tropical-archipelago export manifest.",
        image: "images/terrainforge-tropical-archipelago-proof.webp",
        alt: "TerrainForge tropical archipelago generated across four Blender terrain tiles",
      },
      {
        title: "Surface-layer atlas",
        caption: "Generated material-layer atlas used to present TerrainForge's terrain texture and surface workflow evidence.",
        image: "images/terrainforge-surface-atlas.png",
        alt: "TerrainForge terrain surface and material atlas",
      },
      {
        title: "Terrain Studio handoff",
        caption: "Tidefront terrain workbench showing where generated terrain work can land in the game-editor flow.",
        image: "images/tidefront-terrain-studio-desktop.png",
        alt: "Tidefront Terrain Studio terrain workbench screenshot",
      },
    ],
    repository: "",
    repositoryNote: "Installed Blender add-on",
    stack: ["Python", "Blender API", "NumPy", "heightmaps", "QA campaign tooling"],
    proofPoints: ["Four-tile build + export proof", "57 layer types / 20 modules / 10 rock types", "1,054,721-vertex bake smoke"],
    outcome:
      "A Blender terrain-generation add-on for preview meshes, segmented worlds, tiled heightmap export, texture layers, cave volumes, LOD/detail bake, and dense professional selected-tile baking.",
    bullets: [
      "Ran the installed TerrainForge v0.6.2 add-on in Blender 4.5.11 and captured a fresh four-tile tropical-archipelago preview with surface colors and export data.",
      "Separately verified the professional-bake path at 1,054,721 vertices and 1,052,672 faces, plus terrain-variety, texture-layer, region, and UI/export smokes.",
      "Documented the workflow around preview generation, export validation, tiled worlds, segmented region editing, local tile overrides, stamps, masks, recipe scripts, metrics, and manifests.",
    ],
    implementationNotes: [
      {
        title: "Generated world proof",
        body: "The lead image comes from a fresh installed-add-on build, not a generic terrain render. The script checks TerrainForge v0.6.2 or newer, four generated tiles, surface color data, and the export manifest.",
      },
      {
        title: "Validation breadth",
        body: "Smoke coverage exercised tooltip/export flow, terrain variety, texture layers, professional bake, and region workflows in Blender 4.5.11.",
      },
      {
        title: "Editor handoff",
        body: "TerrainForge output connects naturally to the Tidefront map-authoring workflow, where generated terrain can be inspected and prepared for gameplay.",
      },
    ],
  },
  {
    id: "laser-saw",
    name: "Laser Saw",
    eyebrow: "Blender capped mesh-split add-on",
    image: "images/laser-saw-production-cut-proof.webp",
    detailImage: "images/laser-saw-production-cut-proof.webp",
    gallery: [
      {
        title: "Production housing split",
        caption: "Laser Saw v0.4.0 separated this hard-surface housing at a 0.19-unit kerf; the verifier found two output objects, two reported caps, and two visible cut-plane surfaces.",
        image: "images/laser-saw-production-cut-proof.webp",
        alt: "Laser Saw production housing split with highlighted cut-plane caps",
      },
      {
        title: "Tidefront Asset Shelf export",
        caption: "A neighboring production-tool proof showing the actual Asset Shelf panel, selected root, export settings, and completed GLB/source/catalog record.",
        image: "images/tidefront-asset-shelf-panel-proof.png",
        alt: "Tidefront Asset Shelf panel showing a completed signal beacon export",
      },
    ],
    repository: "",
    repositoryNote: "Installed Blender add-on",
    stack: ["Python", "Blender API", "bmesh", "modal viewport tool", "mesh operations"],
    proofPoints: ["v0.4.0 operator capture", "2 objects / 2 verified caps", "0.19-unit kerf"],
    outcome:
      "A Blender mesh-cutting add-on that turns a drawn viewport cut line into separate capped objects or open bisect cuts for hard-surface modeling workflows.",
    bullets: [
      "Ran the installed Laser Saw v0.4.0 implementation in Blender 4.5.11 and captured a capped split that generated two separate mesh objects.",
      "Uses Blender mesh data and bmesh operations around cut planes, kerf width, cap generation, cut-edge selection, and object separation.",
      "Fits the portfolio as practical artist-facing tooling: a fast modeling operation with visible geometry output, not another unfinished concept panel.",
    ],
    implementationNotes: [
      {
        title: "Operator proof",
        body: "The capture script imports the installed add-on, calls its split implementation, validates that two objects were created, and renders the result for the site.",
      },
      {
        title: "Artist workflow",
        body: "Laser Saw is framed as a modeling productivity add-on: draw a cut, choose capped split or open bisect behavior, and keep the resulting mesh pieces readable.",
      },
      {
        title: "Evidence boundary",
        body: "The portfolio shows a generated proof render from the real add-on. It does not claim a public packaged release because this evidence came from the local installed add-on.",
      },
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
    proof: "Installed v0.6.2 add-on captured after a four-tile archipelago build and export, plus professional-bake, terrain-variety, texture-layer, and region smokes.",
  },
  {
    name: "Laser Saw",
    role: "Through-view mesh cutting",
    proof: "Installed v0.4.0 add-on captured after a 0.19-unit kerf split generated two objects and two verified cap surfaces in Blender 4.5.11.",
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
    label: "Featured proof",
    value: "Tidefront Terrain Studio, TerrainForge, Laser Saw, Claude Citizen",
  },
  {
    label: "Core strengths",
    value: "Game tools, Blender bridge workflows, and external collaboration",
  },
  {
    label: "Public evidence",
    value: "Live demos, captured case studies, and a merged upstream contribution",
  },
];

export const resumeProofStack = [
  {
    lane: "Game tools",
    title: "Terrain authoring and runtime tools.",
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
    title: "Gameplay systems and interaction polish.",
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
    title: "Blender production tools and validation artifacts.",
    summary:
      "Tidefront Blender workflow, TerrainForge, Laser Saw, and the shared asset catalog are strongest when framed as artist-facing pipeline improvements with visual QA.",
    resumeLine:
      "Build Blender Python and game-editor workflows for terrain generation, mesh operations, asset catalogs, export handoff, and validation artifacts.",
    links: [
      { label: "Blender workflow", to: "/projects/tidefront-blender-workflow" },
      { label: "TerrainForge", to: "/projects/terrainforge" },
      { label: "Laser Saw", to: "/projects/laser-saw" },
    ],
  },
  {
    lane: "Utility products",
    title: "Practical tools with visible user value.",
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
    headline: "Game systems and authoring tools.",
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
    headline: "Artist-facing tooling and validation artifacts.",
    fit: "Best for pipeline, technical art support, or tools teams that need Blender add-ons with practical controls and QA proof.",
    inspect: [
      { label: "Blender Workflow", to: "/projects/tidefront-blender-workflow" },
      { label: "Blender Pipeline", to: "/projects/blender-tools-pipeline" },
      { label: "TerrainForge", to: "/projects/terrainforge" },
      { label: "Laser Saw", to: "/projects/laser-saw" },
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
    headline: "Visual engineering and 3D tool support.",
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
    headline: "Interactive WebGL, automation, and sensory systems.",
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
    recommendation: "Current strongest proof",
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
    recommendation: "High-value game slice",
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
    recommendation: "High-value tools proof",
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
    role: "Game Developer & 3D Technical Artist",
    organization: "Lionfish Central / Shipwreck Discovery",
    timeframe: "July 2026 - Present",
    tenureStart: "2026-07",
    bullets: [
      "Retopologize and prepare coral growth-stage assets for real-time VR, including UVs, PBR baking, and Godot-ready GLB delivery.",
      "Integrate coral growth, planting, placement, collision, and wildlife-balance systems in Godot.",
      "Debug VR interaction behavior and add regression coverage for gameplay fixes.",
    ],
  },
  {
    role: "Independent Creative Technology Developer",
    organization: "CurioCrafter / Independent Projects",
    timeframe: "2023 - Present",
    bullets: [
      "Build game prototypes, Blender add-ons, desktop apps, AI workflow tools, and creative production systems.",
      "Prototype procedural environments, player controls, HUD/UI, camera systems, real-time rendering, and simulation behavior.",
      "Contributed 10 commits to a merged external game PR and iterate from code review, playtest evidence, and visual QA.",
      "Run a creative channel with an 81K+ audience, building an instinct for visual hooks, pacing, and fast feedback loops.",
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
  {
    role: "Wildland Firefighter / Electrical Pre-Apprentice",
    organization: "Job Corps",
    timeframe: "One fire season",
    bullets: [
      "Served one season on a wildland firefighting crew, working within strict safety, fitness, communication, and field-tool procedures.",
      "Completed electrical pre-apprenticeship training and earned a high school diploma through Job Corps.",
    ],
  },
];

export const capabilityGroups = [
  {
    title: "Gameplay and 3D",
    items: [
      "Godot 4 and GDScript",
      "OpenXR and VR interaction",
      "Gameplay prototyping",
      "Procedural generation",
      "Simulation systems",
      "Three.js and WebGL2",
      "DirectX 12 and HLSL",
      "HUD/UI and camera systems",
    ],
  },
  {
    title: "Tools and Pipelines",
    items: [
      "Blender Python API",
      "Artist-facing add-ons",
      "Real-time retopology",
      "PBR baking and GLB delivery",
      "Mesh processing workflows",
      "Asset catalogs",
      "Editor tools",
      "Terrain and level builders",
    ],
  },
  {
    title: "Delivery and Team Workflow",
    items: [
      "Git and pull-request collaboration",
      "Feature-branch integration",
      "Regression coverage",
      "Playwright and visual QA",
      "React and Electron",
      "Vite and Node.js",
      "SQLite and local-first data",
      "GitHub workflows",
    ],
  },
];
