(() => {
  "use strict";

  const STORAGE_KEY = "destimmer.psych3d.v6";
  const THREE_VERSION = "0.165.0";
  const THREE_CDN = "./three.module.js";
  const twoPi = Math.PI * 2;
  const phi = (1 + Math.sqrt(5)) / 2;
  const MODES = [
    "flower",
    "spiral",
    "metatron",
    "orbit",
    "veil",
    "kaleidoscope",
    "lattice",
    "tunnel",
    "chrysalis",
    "rose",
    "waveform",
  ];
  const VIEWS_3D = [
    "templeTunnel",
    "crystalOrbit",
    "metatronEngine",
    "hypersphereField",
    "torusGate",
    "icosaBloom",
    "psychedelicCorridor",
    "kaleidoTemple",
    "neuralBloom",
    "prismVortex",
    "fractalCathedral",
    "polytopeSwarm",
  ];
  const PATTERNS_3D = ["kaleido", "vortex", "lattice", "petal", "ripple", "moire", "plasma"];
  const MUSIC_MODES = ["trance", "ambient", "pulse", "crystal", "euphoric", "polyrhythm"];
  const KEYS = {
    C: 0,
    Db: 1,
    D: 2,
    Eb: 3,
    E: 4,
    F: 5,
    Gb: 6,
    G: 7,
    Ab: 8,
    A: 9,
    Bb: 10,
    B: 11,
  };
  const SCALES = {
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    pentatonic: [0, 3, 5, 7, 10],
    harmonic: [0, 2, 3, 5, 7, 8, 11],
    wholeTone: [0, 2, 4, 6, 8, 10],
  };
  const CHORD_PROGRESSIONS = {
    trance: [0, 6, 3, 5, 0, 2, 4, 5],
    ambient: [0, 4, 3, 5, 1, 5, 3, 0],
    pulse: [0, 0, 5, 3, 6, 5, 3, 0],
    crystal: [0, 2, 4, 6, 5, 3, 1, 0],
    euphoric: [0, 4, 5, 3, 6, 4, 1, 5, 0, 3, 5, 6, 4, 1, 5, 0],
    polyrhythm: [0, 5, 2, 6, 3, 1, 4, 6, 0, 4, 2, 5],
  };
  const CHORD_COLORS = {
    trance: [
      [0, 2, 4, 6, 8],
      [0, 2, 4, 6, 9],
      [0, 3, 4, 6, 8],
      [0, 2, 4, 5, 8],
    ],
    ambient: [
      [0, 2, 4, 6, 8],
      [0, 3, 4, 6, 9],
      [0, 1, 4, 6, 8],
      [0, 2, 4, 6, 10],
    ],
    pulse: [
      [0, 2, 4, 6],
      [0, 2, 4, 8],
      [0, 3, 4, 6],
      [0, 2, 4, 5, 8],
    ],
    crystal: [
      [0, 2, 4, 6, 8, 10],
      [0, 3, 4, 6, 9],
      [0, 1, 4, 6, 8, 10],
      [0, 2, 5, 6, 8],
    ],
    euphoric: [
      [0, 2, 4, 6, 8, 10],
      [0, 2, 4, 6, 9],
      [0, 3, 4, 6, 8, 10],
      [0, 1, 4, 6, 8],
    ],
    polyrhythm: [
      [0, 2, 4, 6, 9],
      [0, 3, 4, 6, 8],
      [0, 2, 5, 6, 10],
      [0, 1, 4, 6, 8],
    ],
  };

  const MOODS = {
    aurora: {
      bg: ["#041321", "#082033", "#190f28"],
      colors: ["#8be8dd", "#b3f3ff", "#c7a7ff", "#67f0b8", "#fff7d6"],
      root: 110,
    },
    moon: {
      bg: ["#060811", "#11182a", "#202438"],
      colors: ["#e6eeff", "#b7c3d8", "#fff1d6", "#91b8ff", "#f7fbff"],
      root: 98,
    },
    deep: {
      bg: ["#010712", "#06182b", "#080c22"],
      colors: ["#5fb8ff", "#76f7d3", "#b9a4ff", "#2e7cff", "#eef9ff"],
      root: 82,
    },
    garden: {
      bg: ["#05120e", "#0c241c", "#162612"],
      colors: ["#a4f4b3", "#e5ffa8", "#80d7ff", "#f2d0a7", "#fafff0"],
      root: 123,
    },
    ember: {
      bg: ["#170609", "#24100f", "#201625"],
      colors: ["#ffb36b", "#ffdf9e", "#ff7f86", "#bb8cff", "#fff7e8"],
      root: 73,
    },
    violet: {
      bg: ["#0a0718", "#171033", "#1c0b25"],
      colors: ["#bd9cff", "#ff9ee3", "#8be8dd", "#ffde8a", "#f7efff"],
      root: 92,
    },
    prism: {
      bg: ["#061018", "#151622", "#180b15"],
      colors: ["#78f1ff", "#ff74b7", "#ffe879", "#83ff9a", "#caa8ff"],
      root: 105,
    },
    infrared: {
      bg: ["#120507", "#26100d", "#07131a"],
      colors: ["#ff5f72", "#ffb36b", "#f9ff8a", "#69e5ff", "#ffffff"],
      root: 67,
    },
  };

  const COLLECTIONS = {
    aurora: { label: "Aurora", query: "aurora", mood: "aurora" },
    moon: { label: "Moon", query: "moon", mood: "moon" },
    nebula: { label: "Nebula", query: "hubble nebula", mood: "deep" },
    galaxy: { label: "Galaxy", query: "galaxy", mood: "prism" },
    earth: { label: "Earth", query: "earth", mood: "garden" },
    solar: { label: "Solar Flare", query: "solar flare", mood: "ember" },
    jupiter: { label: "Jupiter", query: "jupiter", mood: "aurora" },
    saturn: { label: "Saturn", query: "saturn", mood: "violet" },
    mars: { label: "Mars", query: "mars", mood: "ember" },
    ocean: { label: "Ocean Earth", query: "ocean earth", mood: "deep" },
    vegetation: { label: "Vegetation", query: "vegetation", mood: "garden" },
    stars: { label: "Stars", query: "stars", mood: "moon" },
    clouds: { label: "Clouds", query: "clouds earth", mood: "moon" },
    deepfield: { label: "Deep Field", query: "hubble deep field", mood: "deep" },
  };

  const PRESETS = {
    calmOrbit: {
      label: "Calm Orbit",
      mode: "orbit",
      mood: "moon",
      collection: "moon",
      intensity: 0.42,
      speed: 0.42,
      density: 0.55,
      trails: 0.26,
      symmetry: 8,
      glow: 0.62,
      colorShift: 0.14,
      pulse: 0.22,
      orbit: 0.72,
      warp: 0.08,
      pointer: 0.18,
      breath: 0.54,
      imageOpacity: 0.22,
      imageBlur: 2.5,
      imageZoom: 1.08,
      imagePan: 0.26,
      blend: "screen",
      audioLevel: 0.38,
      drone: 0.74,
      shimmer: 0.28,
      pulseMix: 0.18,
      stereo: 0.35,
      autoEvolve: false,
    },
    neonMandala: {
      label: "Neon Mandala",
      mode: "kaleidoscope",
      mood: "prism",
      collection: "galaxy",
      intensity: 0.88,
      speed: 1.36,
      density: 1.18,
      trails: 0.74,
      symmetry: 14,
      glow: 1.24,
      colorShift: 0.85,
      pulse: 0.72,
      orbit: 1.24,
      warp: 0.78,
      pointer: 0.72,
      breath: 0.58,
      imageOpacity: 0.42,
      imageBlur: 0.9,
      imageZoom: 1.2,
      imagePan: 0.82,
      blend: "screen",
      audioLevel: 0.62,
      drone: 0.64,
      shimmer: 0.82,
      pulseMix: 0.48,
      stereo: 0.78,
      autoEvolve: true,
    },
    solarBloom: {
      label: "Solar Bloom",
      mode: "rose",
      mood: "ember",
      collection: "solar",
      intensity: 0.84,
      speed: 1.08,
      density: 1.0,
      trails: 0.58,
      symmetry: 11,
      glow: 1.14,
      colorShift: 0.38,
      pulse: 0.86,
      orbit: 1.04,
      warp: 0.5,
      pointer: 0.52,
      breath: 0.76,
      imageOpacity: 0.46,
      imageBlur: 1.2,
      imageZoom: 1.18,
      imagePan: 0.58,
      blend: "lighter",
      audioLevel: 0.58,
      drone: 0.62,
      shimmer: 0.66,
      pulseMix: 0.72,
      stereo: 0.52,
      autoEvolve: false,
    },
    lunarDrift: {
      label: "Lunar Drift",
      mode: "veil",
      mood: "moon",
      collection: "stars",
      intensity: 0.5,
      speed: 0.34,
      density: 0.6,
      trails: 0.38,
      symmetry: 7,
      glow: 0.78,
      colorShift: 0.18,
      pulse: 0.18,
      orbit: 0.54,
      warp: 0.18,
      pointer: 0.2,
      breath: 0.42,
      imageOpacity: 0.3,
      imageBlur: 2.8,
      imageZoom: 1.1,
      imagePan: 0.34,
      blend: "soft-light",
      audioLevel: 0.42,
      drone: 0.8,
      shimmer: 0.32,
      pulseMix: 0.15,
      stereo: 0.42,
      autoEvolve: false,
    },
    deepField: {
      label: "Deep Field",
      mode: "tunnel",
      mood: "deep",
      collection: "deepfield",
      intensity: 0.78,
      speed: 0.94,
      density: 1.05,
      trails: 0.72,
      symmetry: 12,
      glow: 1.02,
      colorShift: 0.7,
      pulse: 0.46,
      orbit: 1.42,
      warp: 0.9,
      pointer: 0.48,
      breath: 0.36,
      imageOpacity: 0.52,
      imageBlur: 0.8,
      imageZoom: 1.26,
      imagePan: 0.8,
      blend: "screen",
      audioLevel: 0.56,
      drone: 0.76,
      shimmer: 0.58,
      pulseMix: 0.32,
      stereo: 0.74,
      autoEvolve: true,
    },
    verdantPulse: {
      label: "Verdant Pulse",
      mode: "waveform",
      mood: "garden",
      collection: "vegetation",
      intensity: 0.7,
      speed: 0.82,
      density: 0.88,
      trails: 0.48,
      symmetry: 10,
      glow: 0.96,
      colorShift: 0.42,
      pulse: 0.7,
      orbit: 0.9,
      warp: 0.38,
      pointer: 0.58,
      breath: 0.78,
      imageOpacity: 0.38,
      imageBlur: 1.6,
      imageZoom: 1.14,
      imagePan: 0.52,
      blend: "overlay",
      audioLevel: 0.5,
      drone: 0.62,
      shimmer: 0.5,
      pulseMix: 0.56,
      stereo: 0.5,
      autoEvolve: false,
    },
    kineticAltar: {
      label: "Kinetic Altar",
      mode: "kaleidoscope",
      mood: "prism",
      collection: "nebula",
      intensity: 0.82,
      speed: 1.18,
      density: 1.08,
      trails: 0.66,
      symmetry: 12,
      glow: 1.12,
      colorShift: 0.76,
      pulse: 0.62,
      orbit: 1.15,
      warp: 0.72,
      pointer: 0.6,
      breath: 0.58,
      imageOpacity: 0.44,
      imageBlur: 1.1,
      imageZoom: 1.18,
      imagePan: 0.74,
      blend: "screen",
      audioLevel: 0.58,
      drone: 0.68,
      shimmer: 0.72,
      pulseMix: 0.42,
      stereo: 0.68,
      autoEvolve: true,
    },
    stillMirror: {
      label: "Still Mirror",
      mode: "metatron",
      mood: "moon",
      collection: "earth",
      intensity: 0.34,
      speed: 0.12,
      density: 0.34,
      trails: 0.18,
      symmetry: 6,
      glow: 0.52,
      colorShift: 0.04,
      pulse: 0.04,
      orbit: 0.38,
      warp: 0,
      pointer: 0.08,
      breath: 0.18,
      imageOpacity: 0.18,
      imageBlur: 4,
      imageZoom: 1.04,
      imagePan: 0.08,
      blend: "soft-light",
      audioLevel: 0.28,
      drone: 0.82,
      shimmer: 0.16,
      pulseMix: 0.04,
      stereo: 0.24,
      autoEvolve: false,
    },
  };

  const TRIPS = {
    fastTrance: {
      label: "Fast Trance",
      mode: "kaleidoscope",
      view3d: "prismVortex",
      mood: "prism",
      collection: "galaxy",
      intensity: 0.92,
      speed: 1.7,
      density: 1.18,
      trails: 0.78,
      symmetry: 16,
      glow: 1.32,
      colorShift: 0.95,
      pulse: 0.82,
      orbit: 1.28,
      warp: 1.0,
      pointer: 0.72,
      breath: 0.62,
      depth: 0.9,
      camera: 0.78,
      tunnel: 1.14,
      spin: 1.42,
      fieldSpread: 1.1,
      density3d: 1.12,
      wireGlow: 1.28,
      perspectiveWarp: 0.82,
      tempo: 126,
      sequence: 0.86,
      audioLevel: 0.62,
      drone: 0.62,
      shimmer: 0.84,
      pulseMix: 0.68,
      stereo: 0.82,
      autoEvolve: true,
    },
    deepTunnel: {
      label: "Deep Tunnel",
      mode: "tunnel",
      view3d: "templeTunnel",
      mood: "deep",
      collection: "deepfield",
      intensity: 0.82,
      speed: 1.05,
      density: 1.0,
      trails: 0.8,
      symmetry: 12,
      glow: 1.08,
      colorShift: 0.54,
      pulse: 0.52,
      orbit: 1.35,
      warp: 0.86,
      pointer: 0.45,
      breath: 0.4,
      depth: 1,
      camera: 0.64,
      tunnel: 1.28,
      spin: 0.72,
      fieldSpread: 1.25,
      density3d: 1.06,
      wireGlow: 1.12,
      perspectiveWarp: 0.92,
      tempo: 92,
      sequence: 0.52,
      audioLevel: 0.56,
      drone: 0.82,
      shimmer: 0.48,
      pulseMix: 0.5,
      stereo: 0.72,
      autoEvolve: true,
    },
    crystalSpin: {
      label: "Crystal Spin",
      mode: "orbit",
      view3d: "crystalOrbit",
      mood: "aurora",
      collection: "jupiter",
      intensity: 0.86,
      speed: 1.24,
      density: 0.92,
      trails: 0.6,
      symmetry: 10,
      glow: 1.18,
      colorShift: 0.62,
      pulse: 0.48,
      orbit: 1.12,
      warp: 0.42,
      pointer: 0.68,
      breath: 0.38,
      depth: 0.82,
      camera: 0.66,
      tunnel: 0.52,
      spin: 1.62,
      fieldSpread: 0.9,
      density3d: 0.92,
      wireGlow: 1.35,
      perspectiveWarp: 0.48,
      tempo: 108,
      sequence: 0.74,
      audioLevel: 0.58,
      drone: 0.6,
      shimmer: 0.78,
      pulseMix: 0.4,
      stereo: 0.9,
      autoEvolve: false,
    },
    shapeStorm: {
      label: "Shape Storm",
      mode: "rose",
      view3d: "neuralBloom",
      mood: "infrared",
      collection: "solar",
      intensity: 0.95,
      speed: 1.52,
      density: 1.28,
      trails: 0.72,
      symmetry: 15,
      glow: 1.4,
      colorShift: 0.76,
      pulse: 0.92,
      orbit: 1.45,
      warp: 0.9,
      pointer: 0.78,
      breath: 0.7,
      depth: 0.82,
      camera: 0.8,
      tunnel: 0.78,
      spin: 1.8,
      fieldSpread: 1.2,
      density3d: 1.25,
      wireGlow: 1.42,
      perspectiveWarp: 0.7,
      tempo: 132,
      sequence: 0.92,
      audioLevel: 0.64,
      drone: 0.56,
      shimmer: 0.88,
      pulseMix: 0.82,
      stereo: 0.86,
      autoEvolve: true,
    },
    softFloat: {
      label: "Soft Float",
      mode: "veil",
      view3d: "hypersphereField",
      mood: "moon",
      collection: "stars",
      intensity: 0.5,
      speed: 0.42,
      density: 0.52,
      trails: 0.38,
      symmetry: 8,
      glow: 0.72,
      colorShift: 0.18,
      pulse: 0.2,
      orbit: 0.65,
      warp: 0.14,
      pointer: 0.22,
      breath: 0.36,
      depth: 0.42,
      camera: 0.24,
      tunnel: 0.22,
      spin: 0.28,
      fieldSpread: 0.72,
      density3d: 0.46,
      wireGlow: 0.62,
      perspectiveWarp: 0.18,
      tempo: 62,
      sequence: 0.18,
      audioLevel: 0.38,
      drone: 0.86,
      shimmer: 0.28,
      pulseMix: 0.12,
      stereo: 0.38,
      autoEvolve: false,
    },
    bassPulse: {
      label: "Bass Pulse",
      mode: "waveform",
      view3d: "torusGate",
      mood: "ember",
      collection: "saturn",
      intensity: 0.78,
      speed: 0.96,
      density: 0.9,
      trails: 0.54,
      symmetry: 9,
      glow: 1.0,
      colorShift: 0.34,
      pulse: 0.88,
      orbit: 0.98,
      warp: 0.48,
      pointer: 0.44,
      breath: 0.82,
      depth: 0.68,
      camera: 0.42,
      tunnel: 0.66,
      spin: 0.86,
      fieldSpread: 0.94,
      density3d: 0.82,
      wireGlow: 1.0,
      perspectiveWarp: 0.44,
      tempo: 84,
      sequence: 0.58,
      audioLevel: 0.66,
      drone: 0.76,
      shimmer: 0.34,
      pulseMix: 0.92,
      stereo: 0.48,
      autoEvolve: false,
    },
    hyperMandala: {
      label: "Hyper Mandala",
      mode: "flower",
      view3d: "kaleidoTemple",
      mood: "violet",
      collection: "nebula",
      intensity: 0.9,
      speed: 1.18,
      density: 1.12,
      trails: 0.68,
      symmetry: 18,
      glow: 1.28,
      colorShift: 0.88,
      pulse: 0.72,
      orbit: 1.12,
      warp: 0.78,
      pointer: 0.58,
      breath: 0.66,
      depth: 0.74,
      camera: 0.58,
      tunnel: 0.7,
      spin: 1.18,
      fieldSpread: 1.0,
      density3d: 1.0,
      wireGlow: 1.36,
      perspectiveWarp: 0.66,
      tempo: 116,
      sequence: 0.82,
      audioLevel: 0.58,
      drone: 0.68,
      shimmer: 0.78,
      pulseMix: 0.54,
      stereo: 0.78,
      autoEvolve: true,
    },
    fractalCathedral: {
      label: "Fractal Cathedral",
      mode: "metatron",
      view3d: "fractalCathedral",
      mood: "prism",
      collection: "nebula",
      intensity: 0.94,
      speed: 1.32,
      density: 1.22,
      trails: 0.82,
      symmetry: 18,
      glow: 1.42,
      colorShift: 0.92,
      pulse: 0.78,
      orbit: 1.34,
      warp: 0.96,
      pointer: 0.82,
      breath: 0.74,
      depth: 0.94,
      camera: 0.76,
      tunnel: 1.12,
      spin: 1.54,
      fieldSpread: 1.22,
      density3d: 1.24,
      wireGlow: 1.52,
      perspectiveWarp: 0.86,
      morph: 1.12,
      interaction: 1.12,
      connectivity: 1.24,
      tempo: 124,
      sequence: 0.92,
      audioLevel: 0.62,
      drone: 0.62,
      shimmer: 0.92,
      pulseMix: 0.64,
      stereo: 0.92,
      autoEvolve: true,
    },
    polytopeSwarm: {
      label: "Polytope Swarm",
      mode: "waveform",
      view3d: "polytopeSwarm",
      mood: "infrared",
      collection: "deepfield",
      intensity: 0.96,
      speed: 1.48,
      density: 1.3,
      trails: 0.76,
      symmetry: 15,
      glow: 1.34,
      colorShift: 0.82,
      pulse: 0.94,
      orbit: 1.52,
      warp: 1.02,
      pointer: 0.9,
      breath: 0.82,
      depth: 0.86,
      camera: 0.82,
      tunnel: 0.78,
      spin: 1.9,
      fieldSpread: 1.36,
      density3d: 1.3,
      wireGlow: 1.45,
      perspectiveWarp: 0.72,
      morph: 1.28,
      interaction: 1.32,
      connectivity: 1.35,
      tempo: 137,
      sequence: 0.96,
      audioLevel: 0.66,
      drone: 0.48,
      shimmer: 0.86,
      pulseMix: 0.9,
      stereo: 0.9,
      autoEvolve: true,
    },
    emergencyCalm: {
      label: "Emergency Calm",
      mode: "metatron",
      view3d: "hypersphereField",
      mood: "moon",
      collection: "earth",
      intensity: 0.28,
      speed: 0.12,
      density: 0.32,
      trails: 0.12,
      symmetry: 6,
      glow: 0.45,
      colorShift: 0,
      pulse: 0,
      orbit: 0.42,
      warp: 0,
      pointer: 0,
      breath: 0.1,
      depth: 0.18,
      camera: 0,
      tunnel: 0,
      spin: 0.04,
      fieldSpread: 0.5,
      density3d: 0.25,
      wireGlow: 0.4,
      perspectiveWarp: 0,
      morph: 0.08,
      interaction: 0.02,
      connectivity: 0.08,
      tempo: 54,
      sequence: 0,
      audioLevel: 0.22,
      drone: 0.72,
      shimmer: 0.04,
      pulseMix: 0,
      stereo: 0.18,
      autoEvolve: false,
      still: true,
    },
  };

  const TRIP_GENERATOR = {
    fastTrance: {
      pattern: "vortex",
      musicMode: "trance",
      key: "D",
      scale: "dorian",
      complexity: 0.88,
      groove: 0.46,
      harmony: 0.92,
      rhythm: 0.62,
      bass: 0.72,
      arp: 0.9,
      melody: 0.78,
      percussion: 0.62,
      imageOpacity: 0.18,
      musicSeed: 1309,
    },
    deepTunnel: {
      pattern: "kaleido",
      musicMode: "ambient",
      key: "C",
      scale: "minor",
      complexity: 0.54,
      groove: 0.25,
      harmony: 0.78,
      rhythm: 0.28,
      bass: 0.46,
      arp: 0.4,
      melody: 0.32,
      percussion: 0.18,
      imageOpacity: 0.16,
      musicSeed: 2104,
    },
    crystalSpin: {
      pattern: "petal",
      musicMode: "crystal",
      key: "G",
      scale: "lydian",
      complexity: 0.76,
      groove: 0.34,
      harmony: 0.94,
      rhythm: 0.36,
      bass: 0.38,
      arp: 0.92,
      melody: 0.68,
      percussion: 0.28,
      imageOpacity: 0.14,
      musicSeed: 3187,
    },
    shapeStorm: {
      pattern: "lattice",
      musicMode: "trance",
      key: "F",
      scale: "harmonic",
      complexity: 0.96,
      groove: 0.58,
      harmony: 0.9,
      rhythm: 0.72,
      bass: 0.82,
      arp: 0.94,
      melody: 0.88,
      percussion: 0.74,
      imageOpacity: 0.12,
      musicSeed: 5153,
    },
    softFloat: {
      pattern: "ripple",
      musicMode: "ambient",
      key: "A",
      scale: "pentatonic",
      complexity: 0.24,
      groove: 0.12,
      harmony: 0.62,
      rhythm: 0.1,
      bass: 0.14,
      arp: 0.22,
      melody: 0.26,
      percussion: 0.02,
      imageOpacity: 0.22,
      musicSeed: 813,
    },
    bassPulse: {
      pattern: "vortex",
      musicMode: "pulse",
      key: "E",
      scale: "minor",
      complexity: 0.64,
      groove: 0.68,
      harmony: 0.72,
      rhythm: 0.82,
      bass: 0.94,
      arp: 0.36,
      melody: 0.38,
      percussion: 0.68,
      imageOpacity: 0.16,
      musicSeed: 1447,
    },
    hyperMandala: {
      pattern: "kaleido",
      musicMode: "crystal",
      key: "Bb",
      scale: "lydian",
      complexity: 0.86,
      groove: 0.42,
      harmony: 0.96,
      rhythm: 0.48,
      bass: 0.5,
      arp: 0.86,
      melody: 0.84,
      percussion: 0.38,
      imageOpacity: 0.15,
      musicSeed: 3779,
    },
    fractalCathedral: {
      pattern: "plasma",
      musicMode: "euphoric",
      key: "G",
      scale: "lydian",
      complexity: 0.94,
      groove: 0.54,
      harmony: 0.96,
      rhythm: 0.64,
      bass: 0.62,
      arp: 0.94,
      melody: 0.9,
      percussion: 0.54,
      imageOpacity: 0.1,
      musicSeed: 6101,
    },
    polytopeSwarm: {
      pattern: "moire",
      musicMode: "polyrhythm",
      key: "Eb",
      scale: "mixolydian",
      complexity: 0.98,
      groove: 0.72,
      harmony: 0.9,
      rhythm: 0.96,
      bass: 0.9,
      arp: 0.82,
      melody: 0.76,
      percussion: 0.92,
      imageOpacity: 0.08,
      musicSeed: 9317,
    },
    emergencyCalm: {
      pattern: "ripple",
      musicMode: "ambient",
      key: "C",
      scale: "pentatonic",
      complexity: 0.05,
      groove: 0,
      harmony: 0.08,
      rhythm: 0,
      bass: 0.02,
      arp: 0.04,
      melody: 0.06,
      percussion: 0,
      imageOpacity: 0.08,
      musicSeed: 1,
    },
  };

  const PRESET_GENERATOR = {
    calmOrbit: { pattern: "ripple", musicMode: "ambient", key: "C", scale: "pentatonic", complexity: 0.22, groove: 0.12, harmony: 0.58, rhythm: 0.08, bass: 0.16, arp: 0.22, melody: 0.2, percussion: 0.02, musicSeed: 34 },
    neonMandala: { pattern: "kaleido", musicMode: "trance", key: "D", scale: "dorian", complexity: 0.82, groove: 0.42, harmony: 0.9, rhythm: 0.48, bass: 0.58, arp: 0.84, melody: 0.72, percussion: 0.46, musicSeed: 987 },
    solarBloom: { pattern: "petal", musicMode: "pulse", key: "F", scale: "harmonic", complexity: 0.68, groove: 0.48, harmony: 0.78, rhythm: 0.58, bass: 0.72, arp: 0.54, melody: 0.52, percussion: 0.46, musicSeed: 1597 },
    lunarDrift: { pattern: "ripple", musicMode: "ambient", key: "A", scale: "pentatonic", complexity: 0.18, groove: 0.08, harmony: 0.54, rhythm: 0.04, bass: 0.12, arp: 0.18, melody: 0.22, percussion: 0, musicSeed: 2584 },
    deepField: { pattern: "vortex", musicMode: "ambient", key: "C", scale: "minor", complexity: 0.48, groove: 0.18, harmony: 0.74, rhythm: 0.18, bass: 0.32, arp: 0.42, melody: 0.34, percussion: 0.12, musicSeed: 4181 },
    verdantPulse: { pattern: "lattice", musicMode: "pulse", key: "G", scale: "dorian", complexity: 0.56, groove: 0.52, harmony: 0.72, rhythm: 0.66, bass: 0.54, arp: 0.44, melody: 0.42, percussion: 0.38, musicSeed: 6765 },
    kineticAltar: { pattern: "kaleido", musicMode: "trance", key: "D", scale: "dorian", complexity: 0.72, groove: 0.36, harmony: 0.86, rhythm: 0.42, bass: 0.56, arp: 0.76, melody: 0.62, percussion: 0.36, musicSeed: 10946 },
    stillMirror: { pattern: "ripple", musicMode: "ambient", key: "C", scale: "pentatonic", complexity: 0.06, groove: 0, harmony: 0.08, rhythm: 0, bass: 0.04, arp: 0.04, melody: 0.08, percussion: 0, musicSeed: 2 },
  };

  const webglCanvas = document.getElementById("webglStage");
  const canvas = document.getElementById("field");
  const ctx = canvas.getContext("2d", { alpha: true });
  const experience = document.querySelector(".experience");
  const sourceLine = document.getElementById("sourceLine");
  const stateLine = document.getElementById("stateLine");
  const studioPanel = document.getElementById("studioPanel");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersReducedMotion = reducedMotionQuery.matches;

  const controls = {
    sound: document.getElementById("soundToggle"),
    still: document.getElementById("stillnessToggle"),
    menu: document.getElementById("menuToggle"),
    tripToggle: document.getElementById("tripToggle"),
    reset: document.getElementById("resetButton"),
    calm: document.getElementById("calmButton"),
    hideUi: document.getElementById("hideUiButton"),
    hideUiFromPanel: document.getElementById("hideUiFromPanelButton"),
    showTitle: document.getElementById("showTitleButton"),
    closeStudio: document.getElementById("closeStudio"),
    image: document.getElementById("imageToggle"),
    shuffleImage: document.getElementById("shuffleImageButton"),
    nextImage: document.getElementById("nextImageButton"),
    mode: document.getElementById("modeSelect"),
    mood: document.getElementById("moodSelect"),
    collection: document.getElementById("collectionSelect"),
    blend: document.getElementById("blendSelect"),
    intensity: document.getElementById("intensityInput"),
    symmetry: document.getElementById("symmetryInput"),
    glow: document.getElementById("glowInput"),
    colorShift: document.getElementById("colorShiftInput"),
    title: document.getElementById("titleInput"),
    speed: document.getElementById("speedInput"),
    density: document.getElementById("densityInput"),
    trails: document.getElementById("trailsInput"),
    pulse: document.getElementById("pulseInput"),
    orbit: document.getElementById("orbitInput"),
    warp: document.getElementById("warpInput"),
    pointer: document.getElementById("pointerInput"),
    breath: document.getElementById("breathInput"),
    autoEvolve: document.getElementById("autoEvolveInput"),
    imageOpacity: document.getElementById("imageOpacityInput"),
    imageBlur: document.getElementById("imageBlurInput"),
    imageZoom: document.getElementById("imageZoomInput"),
    imagePan: document.getElementById("imagePanInput"),
    audioLevel: document.getElementById("audioLevelInput"),
    drone: document.getElementById("droneInput"),
    shimmer: document.getElementById("shimmerInput"),
    pulseMix: document.getElementById("pulseMixInput"),
    stereo: document.getElementById("stereoInput"),
    tempo: document.getElementById("tempoInput"),
    sequence: document.getElementById("sequenceInput"),
    musicMode: document.getElementById("musicModeSelect"),
    key: document.getElementById("keySelect"),
    scale: document.getElementById("scaleSelect"),
    complexity: document.getElementById("complexityInput"),
    groove: document.getElementById("grooveInput"),
    harmony: document.getElementById("harmonyInput"),
    rhythm: document.getElementById("rhythmInput"),
    bass: document.getElementById("bassInput"),
    arp: document.getElementById("arpInput"),
    melody: document.getElementById("melodyInput"),
    percussion: document.getElementById("percussionInput"),
    seed: document.getElementById("seedButton"),
    reactive: document.getElementById("reactiveInput"),
    beatDrive: document.getElementById("beatDriveInput"),
    bassDrive: document.getElementById("bassDriveInput"),
    arpDrive: document.getElementById("arpDriveInput"),
    melodyDrive: document.getElementById("melodyDriveInput"),
    patternDrive: document.getElementById("patternDriveInput"),
    cameraDrive: document.getElementById("cameraDriveInput"),
    shapeDrive: document.getElementById("shapeDriveInput"),
    particleDrive: document.getElementById("particleDriveInput"),
    webgl: document.getElementById("webglInput"),
    view3d: document.getElementById("view3dSelect"),
    pattern: document.getElementById("patternSelect"),
    depth: document.getElementById("depthInput"),
    camera: document.getElementById("cameraInput"),
    tunnel: document.getElementById("tunnelInput"),
    spin: document.getElementById("spinInput"),
    fieldSpread: document.getElementById("fieldSpreadInput"),
    density3d: document.getElementById("density3dInput"),
    wireGlow: document.getElementById("wireGlowInput"),
    perspectiveWarp: document.getElementById("perspectiveWarpInput"),
    morph: document.getElementById("morphInput"),
    interaction: document.getElementById("interactionInput"),
    connectivity: document.getElementById("connectivityInput"),
  };

  const numericRanges = {
    intensity: [0.2, 1],
    speed: [0.1, 2.4],
    density: [0.2, 1.5],
    trails: [0, 0.92],
    symmetry: [3, 18],
    glow: [0.2, 1.5],
    colorShift: [0, 1],
    pulse: [0, 1],
    orbit: [0.2, 1.8],
    warp: [0, 1.4],
    pointer: [0, 1],
    breath: [0, 1],
    imageOpacity: [0, 0.7],
    imageBlur: [0, 8],
    imageZoom: [1, 1.55],
    imagePan: [0, 1.4],
    audioLevel: [0, 1],
    drone: [0, 1],
    shimmer: [0, 1],
    pulseMix: [0, 1],
    stereo: [0, 1],
    tempo: [45, 155],
    sequence: [0, 1],
    complexity: [0, 1],
    groove: [0, 1],
    harmony: [0, 1],
    rhythm: [0, 1],
    bass: [0, 1],
    arp: [0, 1],
    melody: [0, 1],
    percussion: [0, 1],
    beatDrive: [0, 1.8],
    bassDrive: [0, 1.8],
    arpDrive: [0, 1.8],
    melodyDrive: [0, 1.8],
    patternDrive: [0, 1.8],
    cameraDrive: [0, 1.8],
    shapeDrive: [0, 1.8],
    particleDrive: [0, 1.8],
    depth: [0, 1],
    camera: [0, 1],
    tunnel: [0, 1.6],
    spin: [0, 2],
    fieldSpread: [0.35, 1.7],
    density3d: [0.25, 1.35],
    wireGlow: [0.2, 1.6],
    perspectiveWarp: [0, 1],
    morph: [0, 1.4],
    interaction: [0, 1.4],
    connectivity: [0, 1.4],
  };

  const pointer = {
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
    pressure: 0,
    targetPressure: 0,
  };

  let dpr = 1;
  let width = 0;
  let height = 0;
  let minSide = 0;
  let lastTime = performance.now();
  let phase = 0;
  let frame = 0;
  let particles = [];
  let stars = [];
  let imageCache = {};
  let imageRequest = 0;
  let backdrops = { current: null, next: null, fade: 1 };
  let audio = null;
  let shimmerTimer = 0;
  let pulseTimer = 0;
  let sequenceTimer = 0;
  let bassTimer = 0;
  let sequenceStep = 0;
  let sequencerPulse = 0;
  let musicReactive = {
    beat: 0,
    bass: 0,
    arp: 0,
    melody: 0,
    chord: 0,
    percussion: 0,
  };
  let evolveTimer = 0;
  let threeLayer = {
    available: false,
    loading: false,
    failed: false,
    module: null,
    renderer: null,
    scene: null,
    camera: null,
    root: null,
    groups: {},
    lights: {},
    objects: [],
    ripples: [],
    shaderMaterials: [],
    textures: [],
    dummy: null,
  };

  const defaultState = buildDefaultState();
  const state = loadState();
  applyQueryParams(state);
  sanitizeState(state);

  function buildDefaultState() {
    const base = {
      ...PRESETS.kineticAltar,
      ...PRESET_GENERATOR.kineticAltar,
      ...TRIPS.fastTrance,
      ...TRIP_GENERATOR.fastTrance,
    };
    base.preset = "custom";
    base.images = true;
    base.still = false;
    base.sound = false;
    base.menuOpen = true;
    base.uiHidden = false;
    base.showTitle = false;
    base.activeTab = "visuals";
    base.trip = "fastTrance";
    base.webgl = true;
    base.view3d = "prismVortex";
    base.depth = 0.82;
    base.camera = 0.62;
    base.tunnel = 0.9;
    base.spin = 1.12;
    base.fieldSpread = 1.0;
    base.density3d = 0.95;
    base.wireGlow = 1.18;
    base.perspectiveWarp = 0.68;
    base.morph = 0.92;
    base.interaction = 0.86;
    base.connectivity = 0.88;
    base.tempo = 104;
    base.sequence = 0.7;
    base.pattern = "vortex";
    base.musicMode = "trance";
    base.key = "D";
    base.scale = "dorian";
    base.complexity = 0.84;
    base.groove = 0.42;
    base.harmony = 0.92;
    base.rhythm = 0.58;
    base.bass = 0.68;
    base.arp = 0.86;
    base.melody = 0.72;
    base.percussion = 0.52;
    base.musicSeed = 1309;
    base.reactive = true;
    base.beatDrive = 1.05;
    base.bassDrive = 1.18;
    base.arpDrive = 0.9;
    base.melodyDrive = 0.92;
    base.patternDrive = 1.1;
    base.cameraDrive = 0.72;
    base.shapeDrive = 1.1;
    base.particleDrive = 0.88;
    if (prefersReducedMotion) {
      base.intensity = 0.62;
      base.speed = 0.55;
      base.density = 0.68;
      base.trails = 0.36;
      base.pulse = 0.28;
      base.warp = 0.16;
      base.pointer = 0.25;
      base.autoEvolve = false;
      base.imagePan = 0.26;
      base.shimmer = 0.3;
      base.pulseMix = 0.16;
      base.depth = 0.48;
      base.camera = 0.22;
      base.tunnel = 0.2;
      base.spin = 0.26;
      base.density3d = 0.48;
      base.wireGlow = 0.68;
      base.perspectiveWarp = 0.2;
      base.morph = 0.24;
      base.interaction = 0.28;
      base.connectivity = 0.26;
      base.tempo = 68;
      base.sequence = 0.18;
      base.complexity = 0.18;
      base.groove = 0.04;
      base.harmony = 0.18;
      base.rhythm = 0.04;
      base.bass = 0.08;
      base.arp = 0.12;
      base.melody = 0.12;
      base.percussion = 0;
      base.beatDrive = 0.32;
      base.bassDrive = 0.28;
      base.arpDrive = 0.24;
      base.melodyDrive = 0.24;
      base.patternDrive = 0.32;
      base.cameraDrive = 0.12;
      base.shapeDrive = 0.26;
      base.particleDrive = 0.2;
    }
    return base;
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return { ...defaultState, ...saved, sound: false };
    } catch {
      return { ...defaultState };
    }
  }

  function applyQueryParams(target) {
    const params = new URLSearchParams(window.location.search);
    const preset = params.get("preset");
    if (preset && PRESETS[preset]) {
      Object.assign(target, PRESETS[preset], PRESET_GENERATOR[preset] || {}, { preset, images: true, still: false });
    }
    const trip = params.get("trip");
    if (trip && TRIPS[trip]) {
      Object.assign(target, TRIPS[trip], TRIP_GENERATOR[trip] || {}, {
        trip,
        images: true,
        webgl: true,
        still: Boolean(TRIPS[trip].still),
      });
    }
    [
      "mode",
      "mood",
      "collection",
      "blend",
      "view3d",
      "pattern",
      "musicMode",
      "key",
      "scale",
    ].forEach((key) => {
      const value = params.get(key);
      if (value) target[key] = value;
    });
    const webgl = params.get("webgl");
    if (webgl !== null) target.webgl = webgl !== "false" && webgl !== "0";
    const reactive = params.get("reactive");
    if (reactive !== null) target.reactive = reactive !== "false" && reactive !== "0";
    const images = params.get("images");
    if (images !== null) target.images = images !== "false" && images !== "0";
    const title = params.get("title");
    if (title !== null) target.showTitle = title === "true" || title === "1";
    const ui = params.get("ui");
    if (ui !== null) target.uiHidden = ui === "hidden" || ui === "0" || ui === "false";
    [
      "intensity",
      "speed",
      "density",
      "trails",
      "symmetry",
      "depth",
      "camera",
      "spin",
      "tempo",
      "sequence",
      "complexity",
      "groove",
      "harmony",
      "rhythm",
      "bass",
      "arp",
      "melody",
      "percussion",
      "musicSeed",
      "beatDrive",
      "bassDrive",
      "arpDrive",
      "melodyDrive",
      "patternDrive",
      "cameraDrive",
      "shapeDrive",
      "particleDrive",
      "warp",
      "tunnel",
      "morph",
      "interaction",
      "connectivity",
    ].forEach((key) => {
      const value = params.get(key);
      if (value !== null) target[key] = Number(value);
    });
  }

  function sanitizeState(target) {
    if (!MODES.includes(target.mode)) target.mode = defaultState.mode;
    if (!VIEWS_3D.includes(target.view3d)) target.view3d = defaultState.view3d;
    if (!PATTERNS_3D.includes(target.pattern)) target.pattern = defaultState.pattern;
    if (!MUSIC_MODES.includes(target.musicMode)) target.musicMode = defaultState.musicMode;
    if (!Object.hasOwn(KEYS, target.key)) target.key = defaultState.key;
    if (!Object.hasOwn(SCALES, target.scale)) target.scale = defaultState.scale;
    if (!MOODS[target.mood]) target.mood = defaultState.mood;
    if (!COLLECTIONS[target.collection]) target.collection = defaultState.collection;
    if (!["screen", "lighter", "soft-light", "overlay", "source-over"].includes(target.blend)) {
      target.blend = defaultState.blend;
    }
    Object.entries(numericRanges).forEach(([key, [min, max]]) => {
      target[key] = clamp(Number(target[key]), min, max);
    });
    target.symmetry = Math.round(target.symmetry);
    target.musicSeed = Math.round(clamp(Number(target.musicSeed), 1, 99999));
    target.images = Boolean(target.images);
    target.webgl = Boolean(target.webgl);
    target.still = Boolean(target.still);
    target.sound = Boolean(target.sound);
    target.uiHidden = Boolean(target.uiHidden);
    target.showTitle = Boolean(target.showTitle);
    target.reactive = Boolean(target.reactive);
    target.menuOpen = Boolean(target.menuOpen);
    target.autoEvolve = Boolean(target.autoEvolve) && !prefersReducedMotion;
    if (!["visuals", "motion", "images", "audio", "instrument", "three", "trips", "presets"].includes(target.activeTab)) {
      target.activeTab = "visuals";
    }
    if (!PRESETS[target.preset]) target.preset = "custom";
    if (!TRIPS[target.trip]) target.trip = "custom";
  }

  function persistState() {
    const saved = { ...state, sound: false, uiHidden: false };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }

  function clamp(value, min, max) {
    if (Number.isNaN(value)) return min;
    return Math.min(max, Math.max(min, value));
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function init() {
    resize();
    buildParticles();
    bindControls();
    syncControls();
    loadBackdrop({ reason: "initial" });
    initThreeLayer();
    window.addEventListener("resize", () => {
      resize();
      buildParticles();
      resizeThreeLayer();
      frame = 0;
    }, { passive: true });
    requestAnimationFrame(tick);
  }

  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);
    minSide = Math.min(width, height);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    webglCanvas.width = Math.floor(width * dpr);
    webglCanvas.height = Math.floor(height * dpr);
    webglCanvas.style.width = `${width}px`;
    webglCanvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    resizeThreeLayer();
  }

  function buildParticles() {
    const particleCount = Math.round(lerp(70, 310, state.density) * state.intensity);
    const starCount = Math.round(lerp(80, 280, state.density) * state.intensity);
    particles = Array.from({ length: particleCount }, (_, index) => ({
      x: pseudo(index * 13 + 2),
      y: pseudo(index * 17 + 5),
      r: lerp(0.45, 2.9, pseudo(index * 19 + 7)),
      drift: lerp(0.04, 0.24, pseudo(index * 23 + 11)),
      hue: pseudo(index * 29 + 3),
      angle: pseudo(index * 31 + 9) * twoPi,
    }));
    stars = Array.from({ length: starCount }, (_, index) => ({
      x: pseudo(index * 37 + 1),
      y: pseudo(index * 41 + 4),
      r: lerp(0.3, 1.8, pseudo(index * 43 + 8)),
      twinkle: pseudo(index * 47 + 12) * twoPi,
    }));
  }

  function pseudo(n) {
    const value = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
    return value - Math.floor(value);
  }

  function bindControls() {
    controls.sound.addEventListener("click", toggleSound);
    controls.still.addEventListener("click", () => {
      state.still = !state.still;
      syncControls();
      persistState();
    });
    controls.menu.addEventListener("click", () => setMenuOpen(!state.menuOpen));
    controls.tripToggle.addEventListener("click", () => {
      state.activeTab = "trips";
      setMenuOpen(true);
      syncControls();
      persistState();
    });
    controls.calm.addEventListener("click", () => applyTrip("emergencyCalm"));
    controls.hideUi.addEventListener("click", hideAllUi);
    controls.hideUiFromPanel.addEventListener("click", hideAllUi);
    controls.showTitle.addEventListener("click", () => {
      state.showTitle = !state.showTitle;
      syncControls();
      persistState();
    });
    controls.closeStudio.addEventListener("click", () => setMenuOpen(false));
    controls.reset.addEventListener("click", resetState);
    controls.image.addEventListener("click", () => {
      state.images = !state.images;
      if (state.images) loadBackdrop({ reason: "image-on" });
      syncControls();
      persistState();
    });
    controls.shuffleImage.addEventListener("click", shuffleCollection);
    controls.nextImage.addEventListener("click", () => loadBackdrop({ next: true, reason: "next" }));

    document.querySelectorAll(".tab-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeTab = button.dataset.tab;
        syncControls();
        persistState();
      });
    });

    document.querySelectorAll(".preset-button").forEach((button) => {
      button.addEventListener("click", () => applyPreset(button.dataset.preset));
    });
    document.querySelectorAll(".trip-button").forEach((button) => {
      button.addEventListener("click", () => applyTrip(button.dataset.trip));
    });

    bindSelect("mode", controls.mode, (value) => {
      state.mode = value;
      state.preset = "custom";
      state.trip = "custom";
      updateAudioPalette();
    });
    bindSelect("mood", controls.mood, (value) => {
      state.mood = value;
      state.preset = "custom";
      state.trip = "custom";
      updateAudioPalette();
      rebuildThreeLayer();
    });
    bindSelect("collection", controls.collection, (value) => {
      state.collection = value;
      state.preset = "custom";
      state.trip = "custom";
      loadBackdrop({ reason: "collection" });
    });
    bindSelect("blend", controls.blend, (value) => {
      state.blend = value;
      state.preset = "custom";
      state.trip = "custom";
    });
    bindSelect("view3d", controls.view3d, (value) => {
      state.view3d = value;
      state.trip = "custom";
      rebuildThreeLayer();
    });
    bindSelect("pattern", controls.pattern, (value) => {
      state.pattern = value;
      state.trip = "custom";
      rebuildThreeLayer();
    });
    bindSelect("musicMode", controls.musicMode, (value) => {
      state.musicMode = value;
      state.preset = "custom";
      state.trip = "custom";
      reseedPhrase();
      updateAudioPalette();
    });
    bindSelect("key", controls.key, (value) => {
      state.key = value;
      state.preset = "custom";
      state.trip = "custom";
      updateAudioPalette();
    });
    bindSelect("scale", controls.scale, (value) => {
      state.scale = value;
      state.preset = "custom";
      state.trip = "custom";
      reseedPhrase();
      updateAudioPalette();
    });
    controls.seed.addEventListener("click", randomizeMusicSeed);
    controls.webgl.addEventListener("change", () => {
      state.webgl = controls.webgl.checked;
      state.trip = "custom";
      experience.classList.toggle("is-webgl-off", !state.webgl);
      if (state.webgl) initThreeLayer();
      syncControls();
      persistState();
    });

    Object.keys(numericRanges).forEach((key) => {
      const control = controls[key];
      if (!control) return;
      control.addEventListener("input", () => {
        state[key] = clamp(Number(control.value), numericRanges[key][0], numericRanges[key][1]);
        if (key === "symmetry") state.symmetry = Math.round(state.symmetry);
        state.preset = "custom";
        state.trip = "custom";
        if (key === "density" || key === "intensity") buildParticles();
        if (key === "density3d" || key === "wireGlow" || key === "connectivity" || key === "fieldSpread") rebuildThreeLayer();
        if (key === "complexity" || key === "melody" || key === "arp" || key === "harmony" || key === "rhythm") reseedPhrase(false);
        updateAudioPalette();
        syncControls();
        persistState();
      });
    });

    controls.autoEvolve.addEventListener("change", () => {
      state.autoEvolve = controls.autoEvolve.checked && !prefersReducedMotion;
      state.preset = "custom";
      state.trip = "custom";
      syncControls();
      persistState();
    });
    controls.reactive.addEventListener("change", () => {
      state.reactive = controls.reactive.checked;
      state.preset = "custom";
      state.trip = "custom";
      syncControls();
      persistState();
    });
    controls.title.addEventListener("change", () => {
      state.showTitle = controls.title.checked;
      syncControls();
      persistState();
    });

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerdown", (event) => {
      updatePointer(event);
      pointer.targetPressure = 1;
      if (!event.target.closest(".studio-panel, .quickbar, button, input, select")) {
        spawnInteractionBurst();
        if (!state.sound) startSound().then(playInteractionAccent);
        else playInteractionAccent();
      }
    }, { passive: true });
    window.addEventListener("pointerup", () => {
      pointer.targetPressure = 0;
    }, { passive: true });
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        toggleSound();
      } else if (event.code === "Escape") {
        emergencyPause();
      } else if (event.key.toLowerCase() === "m") {
        cycleMode();
      } else if (event.key.toLowerCase() === "c") {
        cycleMood();
      } else if (event.key.toLowerCase() === "s") {
        setMenuOpen(!state.menuOpen);
      } else if (event.key.toLowerCase() === "t") {
        state.activeTab = "trips";
        setMenuOpen(true);
      } else if (event.key.toLowerCase() === "h") {
        setUiHidden(!state.uiHidden);
      } else if (/^[1-9]$/.test(event.key) || event.key === "0") {
        const tripIndex = event.key === "0" ? 9 : Number(event.key) - 1;
        const tripName = Object.keys(TRIPS)[tripIndex];
        if (tripName) applyTrip(tripName);
      }
    });
    window.addEventListener("dblclick", (event) => {
      if (!event.target.closest(".studio-panel, .quickbar, button, input, select")) {
        setUiHidden(!state.uiHidden);
      }
    }, { passive: true });
  }

  function bindSelect(key, control, handler) {
    control.addEventListener("change", () => {
      handler(control.value);
      syncControls();
      persistState();
    });
  }

  function updatePointer(event) {
    pointer.targetX = clamp(event.clientX / width, 0, 1);
    pointer.targetY = clamp(event.clientY / height, 0, 1);
    pointer.targetPressure = Math.max(pointer.targetPressure, event.pressure || 0.16);
  }

  function setMenuOpen(open) {
    state.menuOpen = open;
    if (open) state.uiHidden = false;
    syncControls();
    persistState();
  }

  function hideAllUi() {
    setUiHidden(true);
  }

  function setUiHidden(hidden) {
    state.uiHidden = hidden;
    if (hidden) state.menuOpen = false;
    syncControls();
    persistState();
  }

  function syncControls() {
    controls.mode.value = state.mode;
    controls.mood.value = state.mood;
    controls.collection.value = state.collection;
    controls.blend.value = state.blend;
    controls.view3d.value = state.view3d;
    controls.pattern.value = state.pattern;
    controls.musicMode.value = state.musicMode;
    controls.key.value = state.key;
    controls.scale.value = state.scale;
    controls.webgl.checked = state.webgl;
    Object.keys(numericRanges).forEach((key) => {
      if (controls[key]) controls[key].value = String(state[key]);
    });
    controls.autoEvolve.checked = state.autoEvolve;
    controls.reactive.checked = state.reactive;
    controls.title.checked = state.showTitle;

    controls.sound.classList.toggle("is-active", state.sound);
    controls.sound.setAttribute("aria-label", state.sound ? "Pause audio" : "Start audio");
    controls.sound.querySelector("span").textContent = state.sound ? "pause" : "play";
    controls.still.classList.toggle("is-active", state.still);
    controls.still.setAttribute("aria-label", state.still ? "Resume motion" : "Pause motion");
    controls.still.querySelector("span").textContent = state.still ? "move" : "still";
    controls.menu.classList.toggle("is-active", state.menuOpen);
    controls.menu.setAttribute("aria-expanded", String(state.menuOpen));
    controls.menu.setAttribute("aria-label", state.menuOpen ? "Close studio menu" : "Open studio menu");
    controls.tripToggle.classList.toggle("is-active", state.activeTab === "trips" && state.menuOpen);
    controls.calm.classList.toggle("is-active", state.trip === "emergencyCalm");
    controls.hideUi.classList.toggle("is-active", state.uiHidden);
    controls.hideUi.setAttribute("aria-label", state.uiHidden ? "Show interface" : "Hide all interface");
    controls.hideUi.querySelector("span").textContent = state.uiHidden ? "show" : "hide";
    controls.showTitle.classList.toggle("is-active", state.showTitle);
    controls.showTitle.textContent = state.showTitle ? "Title On" : "Title Off";
    studioPanel.classList.toggle("is-open", state.menuOpen);
    experience.classList.toggle("is-menu-closed", !state.menuOpen);
    experience.classList.toggle("is-still", state.still);
    experience.classList.toggle("is-webgl-off", !state.webgl);
    experience.classList.toggle("is-ui-hidden", state.uiHidden);
    experience.classList.toggle("is-title-hidden", !state.showTitle);

    controls.image.textContent = state.images ? "Image On" : "Image Off";
    controls.image.classList.toggle("is-active", state.images);
    controls.image.setAttribute("aria-label", state.images ? "Hide online imagery" : "Show online imagery");

    document.querySelectorAll(".tab-button").forEach((button) => {
      const active = button.dataset.tab === state.activeTab;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === state.activeTab);
    });
    document.querySelectorAll(".preset-button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.preset === state.preset);
    });
    document.querySelectorAll(".trip-button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.trip === state.trip);
    });

    const mood = MOODS[state.mood];
    document.documentElement.style.setProperty("--accent", mood.colors[0]);
    document.documentElement.style.setProperty("--accent-two", mood.colors[1]);
    document.documentElement.style.setProperty("--accent-three", mood.colors[2]);
    stateLine.textContent = TRIPS[state.trip]?.label || PRESETS[state.preset]?.label || `${labelFor(state.mode)} / ${labelFor(state.collection)}`;
    updateSourceLine();
  }

  function labelFor(value) {
    if (COLLECTIONS[value]) return COLLECTIONS[value].label;
    const option = controls.mode.querySelector(`option[value="${value}"]`)
      || controls.mood.querySelector(`option[value="${value}"]`);
    return option?.textContent || value;
  }

  function updateSourceLine() {
    if (!state.images) {
      sourceLine.textContent = "generative geometry";
      return;
    }
    const active = backdrops.next || backdrops.current;
    const collection = COLLECTIONS[state.collection]?.label || "NASA";
    sourceLine.textContent = active?.title ? `${collection} - ${active.title}` : `${collection} archive`;
  }

  function resetState() {
    const keepSound = state.sound;
    Object.assign(state, buildDefaultState(), { sound: keepSound });
    phase = 0;
    frame = 0;
    buildParticles();
    rebuildThreeLayer();
    loadBackdrop({ reason: "reset" });
    syncControls();
    persistState();
    updateAudioPalette();
    refreshAudioSeedBuffers();
    reseedPhrase();
  }

  function applyPreset(name) {
    const preset = PRESETS[name];
    if (!preset) return;
    const keepSound = state.sound;
    const keepMenu = state.menuOpen;
    Object.assign(state, {
      morph: defaultState.morph,
      interaction: defaultState.interaction,
      connectivity: defaultState.connectivity,
    }, preset, PRESET_GENERATOR[name] || {}, {
      preset: name,
      trip: "custom",
      images: true,
      still: false,
      sound: keepSound,
      menuOpen: keepMenu,
    });
    sanitizeState(state);
    buildParticles();
    rebuildThreeLayer();
    loadBackdrop({ reason: "preset" });
    syncControls();
    persistState();
    updateAudioPalette();
    refreshAudioSeedBuffers();
    reseedPhrase(false);
  }

  function applyTrip(name) {
    const trip = TRIPS[name];
    if (!trip) return;
    const keepSound = name === "emergencyCalm" ? false : state.sound;
    const keepMenu = state.menuOpen;
    Object.assign(state, {
      morph: defaultState.morph,
      interaction: defaultState.interaction,
      connectivity: defaultState.connectivity,
    }, trip, TRIP_GENERATOR[name] || {}, {
      trip: name,
      preset: "custom",
      images: true,
      webgl: true,
      sound: keepSound,
      menuOpen: keepMenu,
      activeTab: "trips",
      still: Boolean(trip.still),
    });
    sanitizeState(state);
    buildParticles();
    rebuildThreeLayer();
    loadBackdrop({ reason: "trip" });
    if (name === "emergencyCalm") stopSound();
    syncControls();
    persistState();
    updateAudioPalette();
    refreshAudioSeedBuffers();
    reseedPhrase(false);
  }

  function cycleMode() {
    const index = MODES.indexOf(state.mode);
    state.mode = MODES[(index + 1) % MODES.length];
    state.preset = "custom";
    state.trip = "custom";
    syncControls();
    persistState();
    updateAudioPalette();
  }

  function cycleMood() {
    const keys = Object.keys(MOODS);
    const index = keys.indexOf(state.mood);
    state.mood = keys[(index + 1) % keys.length];
    state.preset = "custom";
    state.trip = "custom";
    syncControls();
    persistState();
    updateAudioPalette();
  }

  function randomizeMusicSeed() {
    state.musicSeed = Math.floor(1 + Math.random() * 99998);
    state.preset = "custom";
    state.trip = "custom";
    refreshAudioSeedBuffers();
    reseedPhrase(true);
    syncControls();
    persistState();
  }

  function refreshAudioSeedBuffers() {
    if (!audio) return;
    audio.noiseBuffer = makeNoiseBuffer(audio.context);
    if (audio.reverb) audio.reverb.buffer = makeImpulseResponse(audio.context);
  }

  function reseedPhrase(resetTransport = true) {
    if (!audio) return;
    audio.phrase = buildPhrase();
    audio.counterPhrase = buildCounterPhrase();
    if (resetTransport && audio.transport) {
      audio.transport.step = 0;
      audio.transport.bar = 0;
      audio.transport.nextTime = audio.context.currentTime + 0.06;
    }
  }

  function shuffleCollection() {
    const keys = Object.keys(COLLECTIONS);
    let next = state.collection;
    while (next === state.collection && keys.length > 1) {
      next = keys[Math.floor(Math.random() * keys.length)];
    }
    state.collection = next;
    state.mood = COLLECTIONS[next].mood || state.mood;
    state.preset = "custom";
    state.trip = "custom";
    loadBackdrop({ shuffle: true, reason: "shuffle" });
    syncControls();
    persistState();
    updateAudioPalette();
  }

  async function loadBackdrop({ next = false, shuffle = false } = {}) {
    if (!state.images) return;
    const requestId = ++imageRequest;
    const collectionKey = state.collection;
    const collection = COLLECTIONS[collectionKey];
    if (!collection) return;
    sourceLine.textContent = `${collection.label} archive`;
    try {
      const candidates = await getImageCandidates(collectionKey, collection.query);
      if (!candidates.length) throw new Error("No image candidates");
      const picked = pickCandidate(collectionKey, candidates, next || shuffle);
      const image = await loadImage(picked.preview);
      if (requestId !== imageRequest) return;
      backdrops.next = {
        image,
        title: picked.data.title || "NASA image archive",
        collection: collection.label,
        seed: Math.random() * 100,
      };
      backdrops.fade = backdrops.current ? 0 : 1;
      if (!backdrops.current) {
        backdrops.current = backdrops.next;
        backdrops.next = null;
      }
      syncControls();
    } catch {
      if (requestId !== imageRequest) return;
      if (!backdrops.current) backdrops.current = null;
      updateSourceLine();
    }
  }

  async function getImageCandidates(collectionKey, query) {
    const cached = imageCache[collectionKey];
    if (cached?.items?.length) return cached.items;
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image&page_size=48`;
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) throw new Error(`NASA search failed: ${response.status}`);
    const json = await response.json();
    const items = (json.collection?.items || [])
      .map((item) => {
        const data = item.data?.[0] || {};
        const preview = item.links?.find((link) => link.render === "image")?.href || item.links?.[0]?.href;
        return preview ? { preview, data } : null;
      })
      .filter(Boolean);
    imageCache[collectionKey] = { items, index: -1 };
    return items;
  }

  function pickCandidate(collectionKey, candidates, forceNext) {
    const cached = imageCache[collectionKey] || { index: -1 };
    if (forceNext) {
      cached.index = (cached.index + 1) % candidates.length;
    } else if (cached.index < 0) {
      cached.index = Math.floor(Math.random() * candidates.length);
    }
    imageCache[collectionKey] = { ...cached, items: candidates };
    return candidates[cached.index];
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.referrerPolicy = "no-referrer";
      image.decoding = "async";
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function tick(now) {
    const dt = Math.min(0.04, (now - lastTime) / 1000 || 0);
    lastTime = now;
    frame += 1;

    const activeSpeed = state.still ? 0 : state.speed * (prefersReducedMotion ? 0.35 : 1);
    phase += dt * activeSpeed;
    pointer.x = lerp(pointer.x, pointer.targetX, 0.055);
    pointer.y = lerp(pointer.y, pointer.targetY, 0.055);
    pointer.pressure = lerp(pointer.pressure, pointer.targetPressure, 0.06);
    pointer.targetPressure *= 0.985;
    sequencerPulse = lerp(sequencerPulse, 0, Math.min(1, dt * 4.5));
    updateMusicReactive(dt);
    if (backdrops.next) {
      backdrops.fade = clamp(backdrops.fade + dt * 0.42, 0, 1);
      if (backdrops.fade >= 1) {
        backdrops.current = backdrops.next;
        backdrops.next = null;
      }
    }
    handleAutoEvolve(dt);
    updateAudio(dt);
    updateThreeLayer(dt);
    render();
    requestAnimationFrame(tick);
  }

  function handleAutoEvolve(dt) {
    if (!state.autoEvolve || state.still) return;
    evolveTimer += dt * state.speed;
    if (evolveTimer < 34) return;
    evolveTimer = 0;
    const modeIndex = MODES.indexOf(state.mode);
    state.mode = MODES[(modeIndex + 1) % MODES.length];
    if (Math.random() > 0.35) {
      const collections = Object.keys(COLLECTIONS);
      state.collection = collections[(collections.indexOf(state.collection) + 1) % collections.length];
      state.mood = COLLECTIONS[state.collection].mood || state.mood;
      loadBackdrop({ next: true, reason: "evolve" });
    }
    state.preset = "custom";
    syncControls();
    persistState();
    updateAudioPalette();
  }

  function updateMusicReactive(dt) {
    const decay = Math.min(1, dt * (state.still ? 1.4 : 5.8));
    Object.keys(musicReactive).forEach((key) => {
      musicReactive[key] = lerp(musicReactive[key], 0, decay);
    });
  }

  function hitMusicReactive(key, amount = 1) {
    if (!state.reactive) return;
    musicReactive[key] = Math.max(musicReactive[key] || 0, clamp(amount, 0, 1.6));
    musicReactive.beat = Math.max(musicReactive.beat, clamp(amount * 0.72, 0, 1.3));
  }

  async function initThreeLayer() {
    if (!state.webgl || threeLayer.available || threeLayer.loading) return;
    threeLayer.loading = true;
    webglCanvas.classList.remove("is-fallback");
    try {
      const THREE = await import(THREE_CDN);
      const renderer = new THREE.WebGLRenderer({
        canvas: webglCanvas,
        antialias: true,
        alpha: false,
        stencil: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
      });
      renderer.setClearColor(0x02030a, 1);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      if (THREE.ACESFilmicToneMapping) renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.82;
      if (THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x03040b, 0.012);
      const camera = new THREE.PerspectiveCamera(74, width / height, 0.08, 220);
      camera.position.set(0, 0, 13);
      const ambient = new THREE.AmbientLight(0xffffff, 0.34);
      scene.add(ambient);
      const hemi = new THREE.HemisphereLight(0x8be8dd, 0x120507, 0.92);
      scene.add(hemi);
      const key = new THREE.PointLight(0x8be8dd, 2.15, 110);
      key.position.set(7, 8, 10);
      scene.add(key);
      const fill = new THREE.PointLight(0xff74b7, 1.25, 120);
      fill.position.set(-8, -5, 4);
      scene.add(fill);
      const core = new THREE.PointLight(0xffffff, 0.75, 80);
      core.position.set(0, 0, -12);
      scene.add(core);
      const rim = new THREE.DirectionalLight(0xffffff, 0.95);
      rim.position.set(-5, 9, 6);
      scene.add(rim);
      const glint = new THREE.PointLight(0xffe879, 1.1, 70);
      glint.position.set(0, 2, 5);
      scene.add(glint);

      threeLayer = {
        available: true,
        loading: false,
        failed: false,
        module: THREE,
        renderer,
        scene,
        camera,
        root: null,
        groups: {},
        lights: { ambient, hemi, key, fill, core, rim, glint },
        objects: [],
        ripples: [],
        shaderMaterials: [],
        textures: [],
        dummy: new THREE.Object3D(),
      };
      rebuildThreeLayer();
      resizeThreeLayer();
    } catch {
      threeLayer.loading = false;
      threeLayer.failed = true;
      threeLayer.available = false;
      webglCanvas.classList.add("is-fallback");
    }
  }

  function resizeThreeLayer() {
    if (!threeLayer.available) return;
    threeLayer.camera.aspect = width / height;
    threeLayer.camera.updateProjectionMatrix();
    threeLayer.renderer.setPixelRatio(dpr);
    threeLayer.renderer.setSize(width, height, false);
  }

  function rebuildThreeLayer() {
    if (!state.webgl) return;
    if (!threeLayer.available) {
      initThreeLayer();
      return;
    }
    const THREE = threeLayer.module;
    if (threeLayer.root) {
      threeLayer.scene.remove(threeLayer.root);
      disposeThreeObject(threeLayer.root);
    }
    disposeManagedTextures();

    const mood = MOODS[state.mood];
    applyThreeScenePalette(THREE, mood);
    const root = new THREE.Group();
    const groups = {
      shader: new THREE.Group(),
      caustics: new THREE.Group(),
      shafts: new THREE.Group(),
      cathedral: new THREE.Group(),
      tunnel: new THREE.Group(),
      orbit: new THREE.Group(),
      metatron: new THREE.Group(),
      hypersphere: new THREE.Group(),
      gate: new THREE.Group(),
      altar: new THREE.Group(),
      shards: new THREE.Group(),
      polytope: new THREE.Group(),
      ribbons: new THREE.Group(),
      connectors: new THREE.Group(),
      field: new THREE.Group(),
      ripples: new THREE.Group(),
      interaction: new THREE.Group(),
    };
    Object.values(groups).forEach((group) => root.add(group));
    threeLayer.scene.add(root);
    threeLayer.root = root;
    threeLayer.groups = groups;
    threeLayer.objects = [];
    threeLayer.ripples = [];
    threeLayer.shaderMaterials = [];

    buildShaderVeil(THREE, groups.shader, mood);
    buildCausticVeils(THREE, groups.caustics, mood);
    buildLightShafts(THREE, groups.shafts, mood);
    buildCathedralRibs(THREE, groups.cathedral, mood);
    buildTunnel(THREE, groups.tunnel, mood);
    buildOrbiters(THREE, groups.orbit, mood);
    buildMetatron3d(THREE, groups.metatron, mood);
    buildHypersphere(THREE, groups.hypersphere, mood);
    buildTorusGate(THREE, groups.gate, mood);
    buildAltarCore(THREE, groups.altar, mood);
    buildPrismShards(THREE, groups.shards, mood);
    buildPolytopeSwarm(THREE, groups.polytope, groups.connectors, mood);
    buildRibbonGarden(THREE, groups.ribbons, mood);
    buildDepthField(THREE, groups.field, mood);
  }

  function disposeManagedTextures() {
    threeLayer.textures.forEach((texture) => texture?.dispose?.());
    threeLayer.textures = [];
    if (threeLayer.scene) threeLayer.scene.environment = null;
  }

  function trackThreeTexture(texture) {
    if (texture) threeLayer.textures.push(texture);
    return texture;
  }

  function applyThreeScenePalette(THREE, mood) {
    threeLayer.renderer.setClearColor(hexToNumber(mood.bg[0]), 1);
    if (threeLayer.scene.fog?.color) threeLayer.scene.fog.color.set(hexToNumber(mood.bg[0]));
    const env = makeEnvironmentTexture(THREE, mood);
    if (threeLayer.scene.environment?.dispose) threeLayer.scene.environment.dispose();
    threeLayer.scene.environment = trackThreeTexture(env);
  }

  function makeEnvironmentTexture(THREE, mood) {
    const envCanvas = document.createElement("canvas");
    envCanvas.width = 512;
    envCanvas.height = 256;
    const envCtx = envCanvas.getContext("2d");
    const gradient = envCtx.createLinearGradient(0, 0, envCanvas.width, envCanvas.height);
    gradient.addColorStop(0, mood.colors[0]);
    gradient.addColorStop(0.26, mood.bg[1]);
    gradient.addColorStop(0.58, mood.colors[2]);
    gradient.addColorStop(1, mood.bg[2]);
    envCtx.fillStyle = gradient;
    envCtx.fillRect(0, 0, envCanvas.width, envCanvas.height);
    envCtx.globalCompositeOperation = "lighter";
    for (let i = 0; i < 26; i += 1) {
      const x = pseudo(i * 11 + 1) * envCanvas.width;
      const y = pseudo(i * 13 + 2) * envCanvas.height;
      const radius = 24 + pseudo(i * 17 + 3) * 76;
      const aura = envCtx.createRadialGradient(x, y, 0, x, y, radius);
      aura.addColorStop(0, withAlpha(colorAt(mood, i), 0.42));
      aura.addColorStop(1, "rgba(0, 0, 0, 0)");
      envCtx.fillStyle = aura;
      envCtx.beginPath();
      envCtx.arc(x, y, radius, 0, twoPi);
      envCtx.fill();
    }
    const texture = new THREE.CanvasTexture(envCanvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  function disposeThreeObject(object) {
    object.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach(disposeThreeMaterial);
        else disposeThreeMaterial(child.material);
      }
    });
  }

  function disposeThreeMaterial(material) {
    Object.values(material).forEach((value) => {
      if (value?.isTexture) value.dispose();
    });
    material.dispose();
  }

  function makeWireMaterial(THREE, color, opacity = 0.35) {
    return new THREE.MeshBasicMaterial({
      color: hexToNumber(color),
      transparent: true,
      opacity: clamp(opacity * 0.46, 0.025, 0.28),
      wireframe: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
  }

  function makeLineMaterial(THREE, color, opacity = 0.3) {
    return new THREE.LineBasicMaterial({
      color: hexToNumber(color),
      transparent: true,
      opacity: clamp(opacity * 0.52, 0.018, 0.24),
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
  }

  function makeCrystalMaterial(THREE, color, opacity = 0.68) {
    const material = new THREE.MeshPhysicalMaterial({
      color: hexToNumber(color),
      emissive: hexToNumber(color),
      emissiveIntensity: 0.18 + state.wireGlow * 0.24,
      metalness: 0.16,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
      transmission: 0.08,
      thickness: 0.55,
      envMapIntensity: 0.82,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
      depthWrite: opacity > 0.86,
      blending: THREE.NormalBlending,
    });
    if ("iridescence" in material) {
      material.iridescence = 0.72;
      material.iridescenceIOR = 1.42;
      material.iridescenceThicknessRange = [120, 640];
    }
    return material;
  }

  function addEdgeShell(THREE, parent, geometry, color, opacity = 0.42) {
    const edgeGeometry = new THREE.EdgesGeometry(geometry, 18);
    const shell = new THREE.LineSegments(edgeGeometry, makeLineMaterial(THREE, color, opacity));
    shell.userData = { kind: "edgeShell" };
    parent.add(shell);
    threeLayer.objects.push(shell);
    return shell;
  }

  function makeGlowTexture(THREE) {
    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = 96;
    glowCanvas.height = 96;
    const glowCtx = glowCanvas.getContext("2d");
    const gradient = glowCtx.createRadialGradient(48, 48, 0, 48, 48, 48);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.22, "rgba(255, 255, 255, 0.72)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.18)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    glowCtx.fillStyle = gradient;
    glowCtx.fillRect(0, 0, 96, 96);
    const texture = new THREE.CanvasTexture(glowCanvas);
    if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  function buildShaderVeil(THREE, group, mood) {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pulse: { value: 0 },
        intensity: { value: state.intensity },
        symmetry: { value: state.symmetry },
        warp: { value: state.perspectiveWarp },
        pattern: { value: patternIndex() },
        pointer: { value: new THREE.Vector2(pointer.x, pointer.y) },
        colorA: { value: new THREE.Color(hexToNumber(mood.colors[0])) },
        colorB: { value: new THREE.Color(hexToNumber(mood.colors[2])) },
        colorC: { value: new THREE.Color(hexToNumber(mood.colors[3])) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform float time;
        uniform float pulse;
        uniform float intensity;
        uniform float symmetry;
        uniform float warp;
        uniform float pattern;
        uniform vec2 pointer;
        uniform vec3 colorA;
        uniform vec3 colorB;
        uniform vec3 colorC;
        varying vec2 vUv;

        mat2 rotate2d(float a) {
          float s = sin(a);
          float c = cos(a);
          return mat2(c, -s, s, c);
        }

        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          p.x *= 1.78;
          vec2 pull = (pointer - 0.5) * vec2(1.2, -1.0);
          p += pull * 0.28 * warp;
          float radius = length(p);
          float angle = atan(p.y, p.x);
          float sector = 6.2831853 / max(3.0, symmetry);
          angle = mod(angle + sector * 0.5 + time * 0.05, sector) - sector * 0.5;
          vec2 k = vec2(cos(angle), sin(angle)) * radius;
          k = rotate2d(radius * warp * 1.5 + time * 0.08) * k;

          float kaleido = sin(radius * 28.0 - time * 1.55 + pulse * 4.0) + cos(angle * symmetry * 2.0);
          float vortex = sin(radius * 22.0 + angle * symmetry * 2.6 - time * 2.2);
          float lattice = sin((k.x + k.y) * 15.0 + time) * sin((k.x - k.y) * 15.0 - time * 0.8);
          float petal = sin(angle * symmetry * 3.0 + sin(radius * 8.0 - time) * 2.0);
          float ripple = sin(radius * 38.0 - time * 3.0 + pulse * 5.0);
          float moire = sin(k.x * 24.0 + sin(k.y * 8.0 + time) * 4.0) * cos(k.y * 22.0 - time * 1.15);
          float plasma = sin(radius * 18.0 - time * 1.8) + sin(k.x * 11.0 + time * 1.4) + cos(k.y * 13.0 - time * 1.1);
          float folding = abs(sin(angle * symmetry * 0.5 + radius * 9.0 - time * 0.55));
          float rib = smoothstep(0.92, 1.0, folding) * smoothstep(1.34, 0.12, radius);
          float starGate = smoothstep(0.024, 0.0, abs(fract(radius * 5.5 - time * 0.11 + sin(angle * 4.0) * 0.08) - 0.5));
          float lens = pow(smoothstep(1.36, 0.08, radius), 2.0);
          float corona = pow(max(0.0, cos(angle * symmetry + time * 0.44)), 18.0) * lens;

          float value = kaleido * (1.0 - step(0.5, pattern));
          value += vortex * (step(0.5, pattern) - step(1.5, pattern));
          value += lattice * (step(1.5, pattern) - step(2.5, pattern));
          value += petal * (step(2.5, pattern) - step(3.5, pattern));
          value += ripple * (step(3.5, pattern) - step(4.5, pattern));
          value += moire * (step(4.5, pattern) - step(5.5, pattern));
          value += plasma * step(5.5, pattern);
          value = smoothstep(0.08, 1.2, abs(value));
          value = max(value, rib * 0.88 + starGate * 0.44 + corona * 0.72);

          float tunnel = smoothstep(1.55, 0.08, radius);
          float center = smoothstep(0.74, 0.02, abs(fract(radius * 4.0 - time * 0.16) - 0.5));
          vec3 color = mix(colorA, colorB, 0.5 + 0.5 * sin(time * 0.18 + radius * 5.0));
          color = mix(color, colorC, center * 0.45 + pulse * 0.18);
          color += colorC * corona * 0.28 + colorA * starGate * 0.22;
          float alpha = tunnel * value * (0.34 + intensity * 0.68);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    const geometry = new THREE.PlaneGeometry(72, 44, 1, 1);
    const plane = new THREE.Mesh(geometry, material);
    plane.position.z = -28;
    plane.userData = { kind: "shaderVeil", managesOpacity: true };
    group.add(plane);
    threeLayer.objects.push(plane);
    threeLayer.shaderMaterials.push(material);
  }

  function buildCausticVeils(THREE, group, mood) {
    const layerCount = 3;
    for (let i = 0; i < layerCount; i += 1) {
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pulse: { value: 0 },
          intensity: { value: state.intensity },
          symmetry: { value: state.symmetry },
          warp: { value: state.perspectiveWarp },
          pattern: { value: patternIndex() },
          pointer: { value: new THREE.Vector2(pointer.x, pointer.y) },
          colorA: { value: new THREE.Color(hexToNumber(colorAt(mood, i))) },
          colorB: { value: new THREE.Color(hexToNumber(colorAt(mood, i + 2))) },
          colorC: { value: new THREE.Color(hexToNumber(colorAt(mood, i + 4))) },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          precision highp float;
          uniform float time;
          uniform float pulse;
          uniform float intensity;
          uniform float symmetry;
          uniform float warp;
          uniform vec2 pointer;
          uniform vec3 colorA;
          uniform vec3 colorB;
          uniform vec3 colorC;
          varying vec2 vUv;

          void main() {
            vec2 p = vUv * 2.0 - 1.0;
            p.x *= 1.78;
            p += (pointer - 0.5) * vec2(0.42, -0.34) * warp;
            float radius = length(p);
            float angle = atan(p.y, p.x);
            float fold = abs(sin(angle * symmetry * 0.5 + sin(radius * 7.0 - time * 0.55) * 1.4));
            float lattice = sin(p.x * (18.0 + symmetry) + time * 0.7) * sin(p.y * 15.0 - time * 0.9);
            float caustic = smoothstep(0.82, 1.0, fold) + smoothstep(0.76, 0.98, abs(lattice));
            float ring = smoothstep(0.022, 0.0, abs(fract(radius * (4.0 + warp * 5.0) - time * 0.09) - 0.5));
            float mask = smoothstep(1.35, 0.04, radius);
            vec3 color = mix(colorA, colorB, 0.5 + 0.5 * sin(radius * 8.0 + time));
            color = mix(color, colorC, ring * 0.42 + pulse * 0.12);
            float alpha = mask * (caustic * 0.07 + ring * 0.1) * (0.35 + intensity * 0.95);
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(62, 38, 1, 1), material);
      plane.position.z = -13 - i * 12;
      plane.rotation.z = i * 0.34;
      plane.userData = { kind: "causticVeil", index: i, seed: pseudo(i * 67 + 3) * twoPi, managesOpacity: true };
      group.add(plane);
      threeLayer.objects.push(plane);
      threeLayer.shaderMaterials.push(material);
    }
  }

  function buildLightShafts(THREE, group, mood) {
    const count = Math.round(9 + state.density3d * 13);
    const geometry = new THREE.PlaneGeometry(1, 18, 1, 1);
    for (let i = 0; i < count; i += 1) {
      const angle = i * phi * twoPi;
      const radius = (3.8 + pseudo(i * 19 + 2) * 9.5) * state.fieldSpread;
      const material = new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 2)),
        transparent: true,
        opacity: 0.045 + state.wireGlow * 0.035,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      const shaft = new THREE.Mesh(geometry.clone(), material);
      shaft.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.7) * 3.2,
        -8 - pseudo(i * 23 + 7) * (38 + state.depth * 26),
      );
      shaft.rotation.set(
        Math.PI * 0.5 + Math.sin(angle) * 0.38,
        angle + Math.PI * 0.5,
        angle * 0.32,
      );
      shaft.scale.set(0.5 + pseudo(i * 29 + 5) * 1.1, 1.0 + state.depth * 0.7, 1);
      shaft.userData = {
        kind: "lightShaft",
        index: i,
        angle,
        radius,
        seed: pseudo(i * 31 + 11) * twoPi,
        baseZ: shaft.position.z,
        managesOpacity: true,
      };
      group.add(shaft);
      threeLayer.objects.push(shaft);
    }
  }

  function buildCathedralRibs(THREE, group, mood) {
    const archCount = Math.round(7 + state.density3d * 12);
    for (let i = 0; i < archCount; i += 1) {
      const points = [];
      const z = -5 - i * (4.4 + state.depth * 0.8);
      const span = (4.2 + (i % 4) * 0.34) * state.fieldSpread;
      const height = 4.2 + state.depth * 2.1;
      for (let j = 0; j <= 72; j += 1) {
        const t = j / 72;
        const arc = t * Math.PI;
        const twist = Math.sin(t * twoPi + i * 0.37) * state.morph * 0.32;
        points.push(new THREE.Vector3(
          Math.cos(arc) * span,
          -2.45 + Math.sin(arc) * height,
          z + twist + Math.sin(arc * 2 + i) * 0.52,
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 108, 0.022 + state.wireGlow * 0.012, 8, false);
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.32 + state.wireGlow * 0.12);
      material.depthWrite = false;
      material.blending = THREE.AdditiveBlending;
      const rib = new THREE.Mesh(geometry, material);
      rib.rotation.z = (i % 3 - 1) * 0.05;
      rib.userData = { kind: "cathedralRib", index: i, seed: pseudo(i * 37 + 6) * twoPi, baseZ: z };
      group.add(rib);
      threeLayer.objects.push(rib);
      if (i % 2 === 0) {
        const shell = addEdgeShell(THREE, rib, geometry, colorAt(mood, i + 3), 0.18 + state.wireGlow * 0.06);
        shell.scale.setScalar(1.025);
      }
    }

    const spineCount = Math.round(4 + state.density3d * 5);
    for (let i = 0; i < spineCount; i += 1) {
      [-1, 1].forEach((side) => {
        const points = [];
        const lane = i / Math.max(1, spineCount - 1);
        const x = side * (3.1 + lane * 2.4) * state.fieldSpread;
        for (let j = 0; j <= 56; j += 1) {
          const t = j / 56;
          points.push(new THREE.Vector3(
            x + Math.sin(t * twoPi * 2 + i) * state.morph * 0.2,
            -2.6 + lane * 2.7 + Math.sin(t * Math.PI) * 0.58,
            -4 - t * (52 + state.depth * 34),
          ));
        }
        const curve = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(curve, 80, 0.015 + state.wireGlow * 0.008, 6, false);
        const spine = new THREE.Mesh(geometry, makeWireMaterial(THREE, colorAt(mood, i + (side > 0 ? 2 : 4)), 0.16 + state.wireGlow * 0.1));
        spine.userData = { kind: "cathedralSpine", index: i, seed: pseudo(i * 41 + side * 7) * twoPi };
        group.add(spine);
        threeLayer.objects.push(spine);
      });
    }
  }

  function buildPrismShards(THREE, group, mood) {
    const count = Math.round(14 + state.density3d * 24);
    const geometries = [
      new THREE.TetrahedronGeometry(0.58, 1),
      new THREE.OctahedronGeometry(0.56, 1),
      new THREE.IcosahedronGeometry(0.46, 1),
      new THREE.ConeGeometry(0.34, 1.28, 3, 1),
      new THREE.TorusKnotGeometry(0.28, 0.06, 72, 8, 2, 5),
    ];
    for (let i = 0; i < count; i += 1) {
      const geometry = geometries[i % geometries.length].clone();
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.38 + state.wireGlow * 0.16);
      material.depthWrite = false;
      material.envMapIntensity = 1.9;
      material.transmission = 0.16;
      material.thickness = 0.82;
      const shard = new THREE.Mesh(geometry, material);
      const layer = i % 6;
      const angle = i * phi * twoPi;
      const radius = (1.9 + layer * 0.9 + pseudo(i * 17 + 4) * 2.1) * state.fieldSpread;
      const baseZ = -3 - layer * 4.8 - pseudo(i * 23 + 8) * 26;
      shard.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.19) * (1.2 + layer * 0.42),
        baseZ + Math.sin(angle) * 1.4,
      );
      shard.rotation.set(angle * 0.2, angle * 0.34, angle * 0.51);
      shard.scale.setScalar(0.55 + pseudo(i * 31 + 2) * 1.2);
      shard.userData = {
        kind: "prismShard",
        index: i,
        layer,
        angle,
        radius,
        baseZ,
        seed: pseudo(i * 43 + 9) * twoPi,
        mass: lerp(0.65, 1.5, pseudo(i * 47 + 1)),
      };
      group.add(shard);
      threeLayer.objects.push(shard);
      const shell = addEdgeShell(THREE, shard, geometry, colorAt(mood, i + 5), 0.2 + state.wireGlow * 0.08);
      shell.scale.setScalar(1.06);
    }
  }

  function buildTunnel(THREE, group, mood) {
    const count = Math.round(18 + state.density3d * 26);
    const geometry = new THREE.TorusGeometry(3.2, 0.055, 12, 112);
    for (let i = 0; i < count; i += 1) {
      const material = makeCrystalMaterial(THREE, colorAt(mood, i), 0.46 + state.wireGlow * 0.18);
      const mesh = new THREE.Mesh(geometry.clone(), material);
      mesh.position.z = -i * 3.2;
      mesh.rotation.z = i * 0.34;
      mesh.scale.setScalar(0.72 + i * 0.018 * state.fieldSpread);
      mesh.userData = { kind: "tunnel", index: i, seed: pseudo(i * 9 + 2) * twoPi };
      group.add(mesh);
      threeLayer.objects.push(mesh);
      const shell = addEdgeShell(THREE, mesh, mesh.geometry, colorAt(mood, i + 2), 0.18 + state.wireGlow * 0.08);
      shell.scale.setScalar(1.015);
    }
  }

  function buildOrbiters(THREE, group, mood) {
    const count = Math.round(14 + state.density3d * 24);
    const geometries = [
      new THREE.IcosahedronGeometry(0.52, 1),
      new THREE.DodecahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.58, 0),
      new THREE.TetrahedronGeometry(0.62, 0),
      new THREE.TorusKnotGeometry(0.34, 0.08, 72, 8, 2, 3),
    ];
    for (let i = 0; i < count; i += 1) {
      const geometry = geometries[i % geometries.length].clone();
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.62 + state.wireGlow * 0.16);
      const mesh = new THREE.Mesh(geometry, material);
      const angle = i * twoPi / count;
      const radius = 3.2 + (i % 5) * 0.72 * state.fieldSpread;
      mesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.3) * 1.8, Math.sin(angle) * radius - 8);
      mesh.scale.setScalar(0.7 + pseudo(i * 5 + 1) * 1.0);
      mesh.userData = { kind: "orbit", index: i, angle, radius, seed: pseudo(i * 13 + 1) * twoPi };
      group.add(mesh);
      threeLayer.objects.push(mesh);
      const shell = addEdgeShell(THREE, mesh, geometry, colorAt(mood, i + 3), 0.3 + state.wireGlow * 0.12);
      shell.scale.setScalar(1.04);
    }
  }

  function buildMetatron3d(THREE, group, mood) {
    const nodes = [];
    nodes.push(new THREE.Vector3(0, 0, 0));
    for (let ring = 1; ring <= 2; ring += 1) {
      for (let i = 0; i < 6; i += 1) {
        const angle = i * twoPi / 6 + ring * 0.18;
        nodes.push(new THREE.Vector3(Math.cos(angle) * ring * 1.8, Math.sin(angle) * ring * 1.8, Math.sin(angle * 2) * ring * 0.8));
      }
    }
    const sphereGeometry = new THREE.IcosahedronGeometry(0.14, 1);
    nodes.forEach((node, index) => {
      const mesh = new THREE.Mesh(sphereGeometry.clone(), makeWireMaterial(THREE, colorAt(mood, index), 0.42));
      mesh.position.copy(node);
      mesh.userData = { kind: "metatronNode", index };
      group.add(mesh);
      threeLayer.objects.push(mesh);
    });
    const positions = [];
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        if (nodes[i].distanceTo(nodes[j]) < 4.1) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    const lines = new THREE.LineSegments(lineGeometry, makeLineMaterial(THREE, mood.colors[0], 0.25 + state.wireGlow * 0.1));
    lines.userData = { kind: "metatronLines" };
    group.add(lines);
    threeLayer.objects.push(lines);
  }

  function buildHypersphere(THREE, group, mood) {
    const count = Math.round(7 + state.density3d * 10);
    for (let i = 0; i < count; i += 1) {
      const geometry = new THREE.TorusGeometry(1.2 + i * 0.18, 0.01 + i * 0.001, 8, 128);
      const mesh = new THREE.Mesh(geometry, makeWireMaterial(THREE, colorAt(mood, i + 2), 0.2 + state.wireGlow * 0.1));
      mesh.rotation.x = i * 0.53;
      mesh.rotation.y = i * 0.37;
      mesh.userData = { kind: "hypersphere", index: i, seed: pseudo(i * 19 + 4) * twoPi };
      group.add(mesh);
      threeLayer.objects.push(mesh);
    }
  }

  function buildTorusGate(THREE, group, mood) {
    const count = Math.round(4 + state.density3d * 5);
    for (let i = 0; i < count; i += 1) {
      const geometry = i % 2
        ? new THREE.TorusKnotGeometry(1.2 + i * 0.18, 0.045, 130, 8, 2 + (i % 3), 3)
        : new THREE.TorusGeometry(1.3 + i * 0.22, 0.035, 8, 144);
      const mesh = new THREE.Mesh(geometry, makeWireMaterial(THREE, colorAt(mood, i + 3), 0.2 + state.wireGlow * 0.12));
      mesh.rotation.x = i * 0.48;
      mesh.rotation.y = i * 0.3;
      mesh.position.z = -i * 0.52;
      mesh.userData = { kind: "gate", index: i, seed: pseudo(i * 23 + 5) * twoPi };
      group.add(mesh);
      threeLayer.objects.push(mesh);
    }
  }

  function buildAltarCore(THREE, group, mood) {
    const coreGeometries = [
      new THREE.IcosahedronGeometry(1.25, 2),
      new THREE.DodecahedronGeometry(1.1, 1),
      new THREE.OctahedronGeometry(1.35, 1),
      new THREE.TorusKnotGeometry(0.92, 0.16, 150, 14, 3, 5),
    ];
    const count = Math.round(5 + state.density3d * 9);
    for (let i = 0; i < count; i += 1) {
      const geometry = coreGeometries[i % coreGeometries.length].clone();
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.66 + state.wireGlow * 0.16);
      if (i === 0) {
        material.transparent = false;
        material.opacity = 1;
        material.metalness = 0.42;
        material.roughness = 0.16;
        material.emissiveIntensity = 0.9 + state.wireGlow * 0.35;
      }
      const mesh = new THREE.Mesh(geometry, material);
      const angle = i * twoPi / count;
      const ring = i === 0 ? 0 : 2.15 + (i % 4) * 0.8 * state.fieldSpread;
      mesh.position.set(Math.cos(angle) * ring, Math.sin(angle * 1.7) * ring * 0.34, -5.5 - (i % 3) * 2.5);
      mesh.rotation.set(angle * 0.4, angle * 0.7, angle);
      mesh.scale.setScalar(i === 0 ? 1.65 : 0.75 + pseudo(i * 37) * 0.95);
      mesh.userData = { kind: i === 0 ? "altarCore" : "altar", index: i, angle, radius: ring, seed: pseudo(i * 41 + 6) * twoPi };
      group.add(mesh);
      threeLayer.objects.push(mesh);
      const shell = addEdgeShell(THREE, mesh, geometry, colorAt(mood, i + 1), 0.38 + state.wireGlow * 0.12);
      shell.scale.setScalar(1.045);
    }
  }

  function buildDepthField(THREE, group, mood) {
    const count = Math.round(260 + state.density3d * 720);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < count; i += 1) {
      const radius = Math.sqrt(pseudo(i * 17 + 1)) * 18 * state.fieldSpread;
      const angle = pseudo(i * 19 + 2) * twoPi;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (pseudo(i * 23 + 3) - 0.5) * 11 * state.fieldSpread;
      positions[i * 3 + 2] = -pseudo(i * 29 + 4) * 72;
      color.set(hexToNumber(colorAt(mood, i)));
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size: 0.06 + state.wireGlow * 0.05,
      transparent: true,
      opacity: 0.55,
      vertexColors: true,
      map: makeGlowTexture(THREE),
      alphaTest: 0.02,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, material);
    points.userData = { kind: "field" };
    group.add(points);
    threeLayer.objects.push(points);
  }

  function buildPolytopeSwarm(THREE, group, connectorGroup, mood) {
    const count = Math.round(20 + state.density3d * 34);
    const geometries = [
      new THREE.IcosahedronGeometry(0.58, 2),
      new THREE.DodecahedronGeometry(0.62, 1),
      new THREE.OctahedronGeometry(0.7, 1),
      new THREE.TetrahedronGeometry(0.72, 0),
      new THREE.TorusKnotGeometry(0.42, 0.09, 96, 10, 3, 5),
      new THREE.CapsuleGeometry(0.24, 0.72, 6, 12),
    ];
    const nodes = [];
    for (let i = 0; i < count; i += 1) {
      const geometry = geometries[i % geometries.length].clone();
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.5 + state.wireGlow * 0.16);
      const mesh = new THREE.Mesh(geometry, material);
      const layer = i % 5;
      const angle = i * phi * twoPi;
      const radius = (2.3 + layer * 1.1 + pseudo(i * 13 + 4) * 1.5) * state.fieldSpread;
      const z = -5 - layer * 5.2 - pseudo(i * 17 + 8) * 18;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.17) * (1.4 + layer * 0.62),
        z + Math.sin(angle) * 1.6,
      );
      mesh.rotation.set(angle * 0.3, angle * 0.5, angle * 0.2);
      mesh.scale.setScalar(0.62 + pseudo(i * 31 + 7) * 1.05);
      mesh.userData = {
        kind: "polytope",
        index: i,
        angle,
        radius,
        layer,
        seed: pseudo(i * 43 + 11) * twoPi,
        baseZ: z,
        mass: lerp(0.5, 1.35, pseudo(i * 47 + 3)),
      };
      group.add(mesh);
      nodes.push(mesh);
      threeLayer.objects.push(mesh);
      const shell = addEdgeShell(THREE, mesh, geometry, colorAt(mood, i + 4), 0.22 + state.wireGlow * 0.1);
      shell.scale.setScalar(1.045);
    }

    const pairs = [];
    nodes.forEach((_, index) => {
      pairs.push([index, (index + 1) % nodes.length]);
      if (index % 2 === 0) pairs.push([index, (index + 5) % nodes.length]);
      if (state.connectivity > 0.82 && index % 3 === 0) pairs.push([index, (index + 13) % nodes.length]);
    });
    const positions = new Float32Array(pairs.length * 6);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const connectors = new THREE.LineSegments(geometry, makeLineMaterial(THREE, mood.colors[1], 0.08 + state.connectivity * 0.12));
    connectors.userData = { kind: "connector", index: 0, nodes, pairs };
    connectorGroup.add(connectors);
    threeLayer.objects.push(connectors);
  }

  function buildRibbonGarden(THREE, group, mood) {
    const count = Math.round(5 + state.density3d * 8);
    for (let i = 0; i < count; i += 1) {
      const points = [];
      const turnCount = 2.5 + (i % 4) * 0.65;
      const radius = 1.5 + i * 0.32 * state.fieldSpread;
      for (let j = 0; j <= 56; j += 1) {
        const t = j / 56;
        const angle = t * twoPi * turnCount + i * 0.44;
        const wave = Math.sin(t * Math.PI * 2 + i) * (0.28 + state.morph * 0.22);
        points.push(new THREE.Vector3(
          Math.cos(angle) * (radius + wave),
          Math.sin(angle * 0.7 + i) * (1.05 + state.fieldSpread * 0.55),
          -7 - t * (22 + state.depth * 18) + Math.sin(angle) * 1.8,
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 96, 0.018 + state.wireGlow * 0.012, 8, false);
      const material = makeWireMaterial(THREE, colorAt(mood, i + 1), 0.18 + state.wireGlow * 0.12);
      const ribbon = new THREE.Mesh(geometry, material);
      ribbon.userData = { kind: "ribbon", index: i, seed: pseudo(i * 53 + 5) * twoPi };
      group.add(ribbon);
      threeLayer.objects.push(ribbon);
    }
  }

  function updateThreeLights(mood, pulse, beatHit, bassHit, chordHit) {
    const { lights } = threeLayer;
    if (!lights?.key) return;
    lights.hemi.color.set(hexToNumber(mood.colors[0]));
    lights.hemi.groundColor.set(hexToNumber(mood.bg[2]));
    lights.hemi.intensity = 0.74 + state.depth * 0.24 + pulse * 0.08;
    lights.ambient.intensity = 0.22 + state.wireGlow * 0.06;
    lights.key.color.set(hexToNumber(mood.colors[0]));
    lights.key.intensity = 1.65 + state.wireGlow * 0.72 + beatHit * 0.32;
    lights.key.position.set(
      Math.sin(phase * 0.38) * 8.5,
      6.2 + Math.cos(phase * 0.24) * 2.2,
      8 + Math.sin(phase * 0.18) * 3,
    );
    lights.fill.color.set(hexToNumber(mood.colors[2]));
    lights.fill.intensity = 0.9 + state.morph * 0.48 + chordHit * 0.28;
    lights.fill.position.set(
      Math.cos(phase * 0.27) * -9,
      -4.8 + Math.sin(phase * 0.31) * 2.4,
      -2 + Math.cos(phase * 0.21) * 6,
    );
    lights.core.color.set(hexToNumber(mood.colors[4]));
    lights.core.intensity = 0.7 + state.intensity * 0.52 + bassHit * 0.62;
    lights.core.position.set(
      Math.sin(phase * 0.16) * 2,
      Math.cos(phase * 0.19) * 1.3,
      -12 - state.depth * 22,
    );
    lights.rim.color.set(hexToNumber(mood.colors[1]));
    lights.rim.intensity = 0.76 + state.perspectiveWarp * 0.46 + pulse * 0.12;
    lights.rim.position.set(Math.cos(phase * 0.14) * -6, 8, 6 + Math.sin(phase * 0.2) * 4);
    lights.glint.color.set(hexToNumber(mood.colors[3]));
    lights.glint.intensity = 0.82 + beatHit * 0.55 + state.wireGlow * 0.18;
    lights.glint.position.set(
      (pointer.x - 0.5) * 6,
      (0.5 - pointer.y) * 4,
      4 - bassHit * 4,
    );
    threeLayer.renderer.toneMappingExposure = 0.68 + state.wireGlow * 0.06 + pulse * 0.035 + bassHit * 0.02;
    if (threeLayer.scene.fog?.color) threeLayer.scene.fog.color.set(hexToNumber(mood.bg[0]));
  }

  function updateThreeLayer(dt) {
    if (!state.webgl) {
      experience.classList.add("is-webgl-off");
      return;
    }
    if (!threeLayer.available) {
      initThreeLayer();
      return;
    }
    if (!threeLayer.root) {
      rebuildThreeLayer();
      if (!threeLayer.root) return;
    }
    const THREE = threeLayer.module;
    const mood = MOODS[state.mood];
    const activeSpeed = state.still ? 0 : state.speed;
    const reactiveAmount = state.reactive ? 1 : 0;
    const beatHit = musicReactive.beat * state.beatDrive * reactiveAmount;
    const bassHit = musicReactive.bass * state.bassDrive * reactiveAmount;
    const arpHit = musicReactive.arp * state.arpDrive * reactiveAmount;
    const melodyHit = musicReactive.melody * state.melodyDrive * reactiveAmount;
    const chordHit = musicReactive.chord * state.patternDrive * reactiveAmount;
    const percussionHit = musicReactive.percussion * state.particleDrive * reactiveAmount;
    const pulse = getPulse() + sequencerPulse * 0.55 + beatHit * 0.32 + bassHit * 0.24 + melodyHit * 0.18;
    const depth = lerp(8, 50, state.depth);
    const interactionWorld = new THREE.Vector3(
      (pointer.x - 0.5) * (9 + state.depth * 12),
      (0.5 - pointer.y) * (6 + state.depth * 7),
      -6 - state.depth * 24,
    );
    const cameraDrift = state.camera * (state.still ? 0.12 : 1);
    const camera = threeLayer.camera;
    camera.fov = 62 + state.perspectiveWarp * 34 + pulse * 5 + beatHit * state.cameraDrive * 4.5 + bassHit * state.cameraDrive * 3.2;
    camera.updateProjectionMatrix();
    camera.position.x = Math.sin(phase * 0.31) * cameraDrift * 5.2 + (pointer.x - 0.5) * state.pointer * 7.5 + arpHit * state.cameraDrive * Math.sin(phase * 1.4);
    camera.position.y = Math.cos(phase * 0.23) * cameraDrift * 3.4 + (pointer.y - 0.5) * state.pointer * -5.4 + melodyHit * state.cameraDrive * Math.cos(phase * 1.1);
    camera.position.z = 8.6 + Math.sin(phase * 0.18) * cameraDrift * 4.6 - state.tunnel * Math.sin(phase * 0.09) * 2.5 - bassHit * state.cameraDrive * 1.8;
    camera.lookAt(
      (pointer.x - 0.5) * state.pointer * 3.2,
      (0.5 - pointer.y) * state.pointer * 2.4,
      -depth * 0.5,
    );
    threeLayer.scene.fog.density = 0.006 + state.depth * 0.012 + state.perspectiveWarp * 0.007;
    updateThreeLights(mood, pulse, beatHit, bassHit, chordHit);

    threeLayer.shaderMaterials.forEach((material) => {
      material.uniforms.time.value = phase * 1.8;
      material.uniforms.pulse.value = pulse;
      material.uniforms.intensity.value = state.intensity + beatHit * 0.12 + melodyHit * 0.1;
      material.uniforms.symmetry.value = state.symmetry + Math.round(arpHit * state.patternDrive * 3);
      material.uniforms.warp.value = state.perspectiveWarp + state.warp * 0.32 + bassHit * state.patternDrive * 0.18 + chordHit * 0.12;
      material.uniforms.pattern.value = patternIndex() + chordHit * 0.16;
      material.uniforms.pointer.value.set(pointer.x, pointer.y);
      material.uniforms.colorA.value.set(hexToNumber(mood.colors[0]));
      material.uniforms.colorB.value.set(hexToNumber(mood.colors[2]));
      material.uniforms.colorC.value.set(hexToNumber(mood.colors[3]));
    });

    Object.entries(threeLayer.groups).forEach(([key, group]) => {
      group.visible = groupVisibleForView(key, state.view3d);
    });
    threeLayer.root.rotation.y += dt * activeSpeed * state.spin * (0.12 + arpHit * state.arpDrive * 0.04);
    threeLayer.root.rotation.x = Math.sin(phase * 0.12) * state.perspectiveWarp * 0.22 + (pointer.y - 0.5) * state.pointer * 0.12 + melodyHit * state.shapeDrive * 0.025;
    threeLayer.root.rotation.z = (pointer.x - 0.5) * state.pointer * 0.08 + percussionHit * 0.015;
    threeLayer.root.scale.setScalar(0.92 + state.depth * 0.3 + pulse * state.pulse * 0.05 + bassHit * state.shapeDrive * 0.03);

    const removals = [];
    threeLayer.objects.forEach((object) => {
      const data = object.userData || {};
      if (object.material?.color && mood.colors[data.index % mood.colors.length]) {
        object.material.color.set(hexToNumber(colorAt(mood, data.index || 0)));
      }
      if (object.material?.emissive && mood.colors[data.index % mood.colors.length]) {
        object.material.emissive.set(hexToNumber(colorAt(mood, (data.index || 0) + 2)));
        object.material.emissiveIntensity = 0.12 + state.wireGlow * 0.24 + pulse * 0.08 + melodyHit * state.melodyDrive * 0.08 + percussionHit * 0.04;
      }
      if (object.material && "opacity" in object.material && !data.managesOpacity) {
        let opacity = 0.05 + state.wireGlow * 0.07 + pulse * 0.02;
        if (data.kind === "edgeShell") {
          opacity = 0.026 + state.wireGlow * 0.04 + pulse * 0.014;
        } else if (data.kind === "cathedralRib") {
          opacity = 0.07 + state.wireGlow * 0.045 + pulse * 0.018;
        } else if (data.kind === "prismShard") {
          opacity = 0.12 + state.wireGlow * 0.07 + pulse * 0.032 + melodyHit * 0.018;
        } else if (data.kind === "tunnel") {
          opacity = 0.16 + state.wireGlow * 0.08 + pulse * 0.034 + bassHit * 0.015;
        } else if (data.kind === "altar" || data.kind === "altarCore" || data.kind === "orbit") {
          opacity = 0.2 + state.wireGlow * 0.08 + pulse * 0.04;
        }
        object.material.opacity = clamp(opacity, 0.02, data.kind === "edgeShell" ? 0.13 : 0.46);
      }
      if (data.kind === "causticVeil") {
        object.rotation.z = data.seed * 0.05 + Math.sin(phase * 0.09 + data.seed) * state.perspectiveWarp * 0.22;
        object.scale.setScalar(1 + state.depth * 0.08 + pulse * 0.045);
      } else if (data.kind === "lightShaft") {
        object.position.z += dt * activeSpeed * (1.4 + state.tunnel * 7.2 + state.depth * 3);
        if (object.position.z > 16) object.position.z -= 64 + state.depth * 38;
        object.rotation.z = data.angle * 0.32 + Math.sin(phase * 0.17 + data.seed) * 0.22;
        object.scale.x = 0.42 + state.fieldSpread * 0.35 + Math.sin(phase * 0.3 + data.seed) * 0.08;
        object.scale.y = 0.9 + state.depth * 0.82 + pulse * 0.12 + beatHit * 0.08;
        if (object.material) {
          object.material.opacity = clamp(0.025 + state.wireGlow * 0.055 + pulse * 0.028 + bassHit * 0.02, 0.02, 0.18);
        }
      } else if (data.kind === "cathedralRib") {
        object.position.z += dt * activeSpeed * state.tunnel * (2.4 + state.depth * 3.8);
        if (object.position.z > 15) object.position.z -= 84 + state.depth * 26;
        object.rotation.z = Math.sin(phase * 0.13 + data.seed) * (0.04 + state.morph * 0.05);
        object.rotation.y = Math.sin(phase * 0.09 + data.seed) * state.perspectiveWarp * 0.16;
        object.scale.setScalar(1 + pulse * 0.045 + chordHit * 0.025);
      } else if (data.kind === "cathedralSpine") {
        object.rotation.y = Math.sin(phase * 0.12 + data.seed) * state.perspectiveWarp * 0.18;
        object.rotation.z = Math.cos(phase * 0.08 + data.seed) * state.morph * 0.04;
        object.scale.setScalar(1 + pulse * 0.035 + arpHit * 0.02);
      } else if (data.kind === "prismShard") {
        const angle = data.angle + phase * activeSpeed * (0.1 + data.layer * 0.018 + state.morph * 0.05);
        const weave = Math.sin(phase * (0.36 + data.layer * 0.07) + data.seed);
        const baseX = Math.cos(angle) * data.radius * (0.96 + weave * state.morph * 0.05);
        const baseY = Math.sin(angle * 1.11 + data.seed) * (1.6 + data.layer * 0.5) + weave * state.morph * 0.4;
        const baseZ = data.baseZ + Math.sin(angle * 1.6) * (1.2 + state.morph * 1.8) - state.depth * 7;
        const dx = interactionWorld.x - baseX;
        const dy = interactionWorld.y - baseY;
        const dz = interactionWorld.z - baseZ;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) + 0.001;
        const pull = state.interaction * state.pointer * (0.12 + pointer.pressure * 0.56 + melodyHit * 0.08) * Math.exp(-distance * 0.08) / data.mass;
        object.position.set(
          baseX + dx * pull,
          baseY + dy * pull,
          baseZ + dz * pull,
        );
        object.rotation.x += dt * activeSpeed * state.spin * (0.76 + data.mass * 0.18 + arpHit * 0.1);
        object.rotation.y += dt * activeSpeed * state.spin * (0.94 + data.layer * 0.045 + melodyHit * 0.12);
        object.rotation.z += dt * activeSpeed * state.spin * (0.38 + state.morph * 0.16);
        object.scale.setScalar((0.48 + data.mass * 0.38) * (1 + pulse * state.pulse * 0.13 + pull * 0.58 + beatHit * 0.05));
        if (object.material && "iridescence" in object.material) {
          object.material.iridescence = clamp(0.48 + state.wireGlow * 0.22 + pulse * 0.14, 0.25, 1);
        }
      } else if (data.kind === "tunnel") {
        object.position.z += dt * activeSpeed * state.tunnel * (7 + state.depth * 10);
        if (object.position.z > 12) object.position.z -= 104;
        object.rotation.z += dt * activeSpeed * state.spin * (0.35 + data.index * 0.003) + arpHit * 0.002 * state.shapeDrive;
        object.rotation.x = Math.sin(phase * 0.24 + data.seed) * state.perspectiveWarp * 0.18;
        const scale = 0.72 + data.index * 0.018 * state.fieldSpread + pulse * 0.04 * state.pulse + bassHit * 0.02 * state.shapeDrive;
        object.scale.setScalar(scale);
      } else if (data.kind === "orbit") {
        const angle = data.angle + phase * state.spin * (0.28 + data.index * 0.006);
        const radius = data.radius * state.fieldSpread * (1 + pulse * 0.05 * state.pulse + bassHit * 0.025 * state.shapeDrive);
        object.position.x = Math.cos(angle) * radius + (pointer.x - 0.5) * state.pointer * 1.6;
        object.position.y = Math.sin(angle * 1.3 + data.seed) * 2.8 * state.fieldSpread + (0.5 - pointer.y) * state.pointer * 1.2;
        object.position.z = Math.sin(angle) * radius - 9 - state.depth * 14;
        object.rotation.x += dt * activeSpeed * state.spin * (1.25 + arpHit * 0.18);
        object.rotation.y += dt * activeSpeed * state.spin * (1.5 + melodyHit * 0.16);
        object.rotation.z += dt * activeSpeed * state.spin * 0.54;
      } else if (data.kind === "altar" || data.kind === "altarCore") {
        const angle = data.angle + phase * state.spin * (0.16 + data.index * 0.012);
        object.position.x = Math.cos(angle) * data.radius * (1 + pointer.pressure * 0.08);
        object.position.y = Math.sin(angle * 1.7 + data.seed) * data.radius * 0.34 + Math.sin(phase * 0.36 + data.seed) * state.breath;
        object.position.z = (data.kind === "altarCore" ? -13.4 : -5.5 - (data.index % 3) * 2.5 - state.depth * 5) + Math.sin(angle) * 1.5;
        object.rotation.x += dt * activeSpeed * state.spin * (0.52 + data.index * 0.03);
        object.rotation.y += dt * activeSpeed * state.spin * (0.66 + data.index * 0.02);
        object.scale.setScalar((data.kind === "altarCore" ? 1.45 : 0.72) * (1 + pulse * state.pulse * 0.16 + pointer.pressure * 0.08 + melodyHit * state.shapeDrive * 0.08));
      } else if (data.kind === "polytope") {
        const angle = data.angle + phase * activeSpeed * (0.18 + data.layer * 0.025 + state.morph * 0.04);
        const weave = Math.sin(phase * (0.48 + data.layer * 0.08) + data.seed);
        const baseX = Math.cos(angle) * data.radius * (1 + weave * state.morph * 0.08);
        const baseY = Math.sin(angle * 1.3 + data.seed) * (1.8 + data.layer * 0.72) + weave * state.morph * 0.72;
        const baseZ = data.baseZ + Math.sin(angle * 1.7) * (2 + state.morph * 2.2) - state.depth * 8;
        const dx = interactionWorld.x - baseX;
        const dy = interactionWorld.y - baseY;
        const dz = interactionWorld.z - baseZ;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) + 0.001;
        const pull = state.interaction * state.pointer * (0.16 + pointer.pressure * 0.72 + beatHit * 0.08) * Math.exp(-distance * 0.075) / data.mass;
        object.position.set(
          baseX + dx * pull + Math.sin(phase * 1.1 + data.seed) * state.morph * 0.28,
          baseY + dy * pull + Math.cos(phase * 0.9 + data.seed) * state.morph * 0.22,
          baseZ + dz * pull,
        );
        object.rotation.x += dt * activeSpeed * state.spin * (0.72 + data.mass * 0.24 + arpHit * 0.12);
        object.rotation.y += dt * activeSpeed * state.spin * (0.86 + data.layer * 0.05 + melodyHit * 0.08);
        object.rotation.z += dt * activeSpeed * state.spin * (0.42 + state.morph * 0.18);
        object.scale.setScalar((0.62 + data.mass * 0.36) * (1 + pulse * state.pulse * 0.12 + pull * 0.65 + chordHit * 0.04));
      } else if (data.kind === "metatronNode") {
        object.rotation.x += dt * activeSpeed * state.spin * 0.6;
        object.rotation.y += dt * activeSpeed * state.spin * 0.4;
      } else if (data.kind === "metatronLines") {
        object.rotation.z += dt * activeSpeed * state.spin * 0.18;
        object.rotation.y = Math.sin(phase * 0.2) * state.perspectiveWarp;
      } else if (data.kind === "hypersphere" || data.kind === "gate") {
        object.rotation.x += dt * activeSpeed * state.spin * (0.28 + data.index * 0.04);
        object.rotation.y += dt * activeSpeed * state.spin * (0.36 + data.index * 0.035);
        object.scale.setScalar(1 + pulse * state.pulse * 0.08 + state.depth * 0.04 + chordHit * 0.06 + arpHit * 0.04);
      } else if (data.kind === "ribbon") {
        object.rotation.x = Math.sin(phase * 0.18 + data.seed) * (0.28 + state.morph * 0.28) + melodyHit * 0.04;
        object.rotation.y += dt * activeSpeed * state.spin * (0.12 + data.index * 0.01 + arpHit * 0.02);
        object.rotation.z = Math.cos(phase * 0.13 + data.seed) * state.perspectiveWarp * 0.45;
        object.scale.setScalar(1 + state.morph * 0.08 + pulse * 0.06 + chordHit * 0.08);
      } else if (data.kind === "connector") {
        const positionAttribute = object.geometry.getAttribute("position");
        data.pairs.forEach(([aIndex, bIndex], pairIndex) => {
          const a = data.nodes[aIndex]?.position;
          const b = data.nodes[bIndex]?.position;
          if (!a || !b) return;
          const offset = pairIndex * 2;
          positionAttribute.setXYZ(offset, a.x, a.y, a.z);
          positionAttribute.setXYZ(offset + 1, b.x, b.y, b.z);
        });
        positionAttribute.needsUpdate = true;
        if (object.material && "opacity" in object.material) {
          object.material.opacity = clamp(0.035 + state.connectivity * 0.18 + chordHit * 0.08 + pointer.pressure * state.interaction * 0.06, 0.03, 0.46);
        }
      } else if (data.kind === "field") {
        object.rotation.y += dt * activeSpeed * (0.025 + state.tunnel * 0.06 + percussionHit * 0.025);
        object.rotation.x = Math.sin(phase * 0.08) * 0.08 * state.perspectiveWarp;
        if (object.material && "size" in object.material) {
          object.material.size = 0.06 + state.wireGlow * 0.05 + percussionHit * state.particleDrive * 0.035 + beatHit * 0.018;
        }
      } else if (data.kind === "ripple") {
        data.age += dt * (state.still ? 0.18 : 1);
        const t = clamp(data.age / data.life, 0, 1);
        object.scale.setScalar(0.25 + t * data.size);
        object.rotation.z += dt * activeSpeed * (0.8 + state.spin);
        object.position.z -= dt * (2 + state.depth * 7);
        if (object.material) object.material.opacity = (1 - t) * (0.65 + state.wireGlow * 0.12);
        if (t >= 1) removals.push(object);
      } else if (data.kind === "probe") {
        data.age += dt * (state.still ? 0.2 : 1);
        const t = clamp(data.age / data.life, 0, 1);
        object.position.addScaledVector(data.velocity, dt * (state.still ? 0.25 : 1));
        data.velocity.x += (interactionWorld.x - object.position.x) * dt * 0.08 * state.interaction;
        data.velocity.y += (interactionWorld.y - object.position.y) * dt * 0.08 * state.interaction;
        data.velocity.z -= dt * (1.2 + state.depth * 2.2);
        object.rotation.x += dt * (2.2 + state.spin) * data.spin;
        object.rotation.y += dt * (1.7 + state.spin) * data.spin;
        object.scale.setScalar((1 - t) * data.size * (1 + pulse * 0.25));
        if (object.material) object.material.opacity = (1 - t) * (0.72 + state.wireGlow * 0.12);
        if (t >= 1) removals.push(object);
      }
    });

    removals.forEach((object) => {
      object.parent?.remove(object);
      threeLayer.objects = threeLayer.objects.filter((item) => item !== object);
      threeLayer.ripples = threeLayer.ripples.filter((item) => item !== object);
      disposeThreeObject(object);
    });

    threeLayer.renderer.render(threeLayer.scene, threeLayer.camera);
  }

  function groupVisibleForView(group, view) {
    const visibility = {
      templeTunnel: ["shader", "caustics", "shafts", "cathedral", "tunnel", "field", "gate", "ribbons", "ripples", "interaction"],
      crystalOrbit: ["shader", "caustics", "shafts", "orbit", "shards", "field", "hypersphere", "altar", "polytope", "connectors", "ripples", "interaction"],
      metatronEngine: ["shader", "caustics", "cathedral", "metatron", "orbit", "shards", "field", "altar", "connectors", "ripples", "interaction"],
      hypersphereField: ["shader", "caustics", "shafts", "hypersphere", "shards", "field", "altar", "ribbons", "ripples", "interaction"],
      torusGate: ["shader", "caustics", "shafts", "gate", "tunnel", "shards", "field", "polytope", "ripples", "interaction"],
      icosaBloom: ["shader", "caustics", "shafts", "orbit", "metatron", "hypersphere", "altar", "shards", "polytope", "connectors", "ripples", "interaction"],
      psychedelicCorridor: ["shader", "caustics", "shafts", "cathedral", "tunnel", "orbit", "gate", "field", "altar", "ribbons", "ripples", "interaction"],
      kaleidoTemple: ["shader", "caustics", "cathedral", "metatron", "gate", "altar", "shards", "field", "ribbons", "connectors", "ripples", "interaction"],
      neuralBloom: ["shader", "caustics", "shafts", "hypersphere", "orbit", "altar", "shards", "field", "polytope", "connectors", "ripples", "interaction"],
      prismVortex: ["shader", "caustics", "shafts", "cathedral", "tunnel", "gate", "hypersphere", "altar", "shards", "field", "polytope", "ribbons", "ripples", "interaction"],
      fractalCathedral: ["shader", "caustics", "shafts", "cathedral", "tunnel", "metatron", "gate", "altar", "shards", "ribbons", "connectors", "field", "ripples", "interaction"],
      polytopeSwarm: ["shader", "caustics", "shafts", "shards", "polytope", "connectors", "orbit", "ribbons", "field", "ripples", "interaction"],
    };
    return (visibility[view] || visibility.psychedelicCorridor).includes(group);
  }

  function patternIndex() {
    return Math.max(0, PATTERNS_3D.indexOf(state.pattern));
  }

  function spawnInteractionBurst() {
    sequencerPulse = Math.max(sequencerPulse, 1);
    if (!state.webgl || !threeLayer.available || !threeLayer.groups.ripples) return;
    const THREE = threeLayer.module;
    const mood = MOODS[state.mood];
    const geometry = new THREE.TorusGeometry(0.42, 0.018, 8, 96);
    const material = new THREE.MeshBasicMaterial({
      color: hexToNumber(colorAt(mood, Math.floor(pointer.x * 10))),
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const ripple = new THREE.Mesh(geometry, material);
    ripple.position.set(
      (pointer.x - 0.5) * (8 + state.depth * 7),
      (0.5 - pointer.y) * (5 + state.depth * 4),
      -5 - state.depth * 18,
    );
    ripple.rotation.x = Math.PI / 2 + (pointer.y - 0.5) * 0.45;
    ripple.rotation.y = (pointer.x - 0.5) * 0.45;
    ripple.userData = {
      kind: "ripple",
      index: threeLayer.ripples.length,
      age: 0,
      life: lerp(1.2, 2.4, state.trails),
      size: lerp(3.4, 9.5, state.pointer),
    };
    threeLayer.groups.ripples.add(ripple);
    threeLayer.ripples.push(ripple);
    threeLayer.objects.push(ripple);
    spawnInteractionProbes(THREE, mood);
    while (threeLayer.ripples.length > 18) {
      const old = threeLayer.ripples.shift();
      old.parent?.remove(old);
      threeLayer.objects = threeLayer.objects.filter((item) => item !== old);
      disposeThreeObject(old);
    }
  }

  function spawnInteractionProbes(THREE, mood) {
    if (!threeLayer.groups.interaction) return;
    const probeCount = Math.round(2 + state.interaction * 3);
    const geometries = [
      new THREE.IcosahedronGeometry(0.32, 1),
      new THREE.OctahedronGeometry(0.38, 0),
      new THREE.TorusKnotGeometry(0.22, 0.055, 58, 8, 2, 5),
    ];
    for (let i = 0; i < probeCount; i += 1) {
      const geometry = geometries[i % geometries.length].clone();
      const material = new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + Math.floor(pointer.y * 7))),
        transparent: true,
        opacity: 0.82,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        wireframe: i % 2 === 0,
      });
      const probe = new THREE.Mesh(geometry, material);
      const angle = i * twoPi / probeCount + pointer.x * twoPi;
      const originX = (pointer.x - 0.5) * (8 + state.depth * 8);
      const originY = (0.5 - pointer.y) * (5 + state.depth * 5);
      probe.position.set(originX, originY, -4 - state.depth * 12 - i * 0.8);
      probe.userData = {
        kind: "probe",
        index: threeLayer.ripples.length + i,
        age: 0,
        life: lerp(1.4, 3.2, state.trails),
        size: lerp(0.8, 1.9, state.interaction / 1.4) * (1 + pointer.pressure * 0.4),
        spin: lerp(0.8, 1.8, pseudo(i * 17 + frame)),
        velocity: new THREE.Vector3(
          Math.cos(angle) * (2.2 + state.interaction * 4.5),
          Math.sin(angle) * (1.6 + state.interaction * 3.2),
          -5.2 - state.depth * 5 - i * 0.5,
        ),
      };
      threeLayer.groups.interaction.add(probe);
      threeLayer.objects.push(probe);
    }
  }

  function hexToNumber(hex) {
    const value = Number.parseInt(hex.replace("#", ""), 16);
    let r = (value >> 16) & 255;
    let g = (value >> 8) & 255;
    let b = value & 255;
    const max = Math.max(r, g, b);
    if (max > 172) {
      const t = clamp((max - 172) / 83, 0, 1);
      const factor = lerp(0.88, 0.54, t);
      r = Math.round(r * factor);
      g = Math.round(g * factor);
      b = Math.round(b * factor);
    }
    return (r << 16) | (g << 8) | b;
  }

  function render() {
    const mood = MOODS[state.mood];
    drawBase(mood);
    if (state.images) drawImageLayer(mood);
    drawFluidWash(mood);
    drawStars(mood);
    drawParticles(mood);
    drawCentralAura(mood);
    drawMode(mood);
    drawChromaticHalo(mood);
    drawVignette();
  }

  function drawBase(mood) {
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    if (frame < 2 || state.trails <= 0.02) {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, mood.bg[0]);
      gradient.addColorStop(0.52, mood.bg[1]);
      gradient.addColorStop(1, mood.bg[2]);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      return;
    }
    const fade = clamp(1 - state.trails * 0.86, 0.08, 0.92);
    ctx.fillStyle = withAlpha(mood.bg[0], fade);
    ctx.fillRect(0, 0, width, height);
  }

  function drawImageLayer(mood) {
    const current = backdrops.current;
    const next = backdrops.next;
    if (!current && !next) return;
    ctx.save();
    if (current) drawSingleImage(current, mood, next ? 1 - backdrops.fade : 1);
    if (next) drawSingleImage(next, mood, backdrops.fade);
    ctx.restore();
  }

  function drawSingleImage(backdrop, mood, alphaScale) {
    const image = backdrop.image;
    const scale = Math.max(width / image.width, height / image.height) * state.imageZoom;
    const drift = state.still ? 0 : state.imagePan;
    const zoomPulse = 1 + Math.sin(phase * 0.08 + backdrop.seed) * 0.018 * drift;
    const drawW = image.width * scale * zoomPulse;
    const drawH = image.height * scale * zoomPulse;
    const overflowX = Math.max(0, drawW - width);
    const overflowY = Math.max(0, drawH - height);
    const panX = Math.sin(phase * 0.07 + backdrop.seed) * overflowX * 0.24 * drift + (pointer.x - 0.5) * overflowX * 0.16 * state.pointer;
    const panY = Math.cos(phase * 0.055 + backdrop.seed) * overflowY * 0.24 * drift + (pointer.y - 0.5) * overflowY * 0.16 * state.pointer;
    const x = (width - drawW) / 2 + panX;
    const y = (height - drawH) / 2 + panY;

    ctx.globalCompositeOperation = state.blend;
    ctx.globalAlpha = state.imageOpacity * alphaScale;
    ctx.filter = `saturate(${1 + state.intensity * 0.55}) contrast(${0.82 + state.intensity * 0.25}) blur(${state.imageBlur}px)`;
    ctx.drawImage(image, x, y, drawW, drawH);
    ctx.filter = "none";

    const wash = ctx.createLinearGradient(0, 0, width, height);
    wash.addColorStop(0, withAlpha(mood.bg[0], 0.18 + state.imageOpacity * 0.24));
    wash.addColorStop(1, withAlpha(mood.bg[2], 0.26 + state.imageOpacity * 0.32));
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = alphaScale;
    ctx.fillStyle = wash;
    ctx.fillRect(0, 0, width, height);
  }

  function drawFluidWash(mood) {
    const center = getCenter();
    const pulse = getPulse();
    const radius = minSide * lerp(0.34, 0.72, state.intensity) * (1 + state.warp * 0.08 * pulse);
    const gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius);
    gradient.addColorStop(0, withAlpha(mood.colors[0], 0.12 + state.pulse * 0.08 * pulse));
    gradient.addColorStop(0.36, withAlpha(mood.colors[2], 0.06 + state.warp * 0.05));
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = 1;
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function drawStars(mood) {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    const count = Math.round(stars.length * state.density);
    for (let i = 0; i < count && i < stars.length; i += 1) {
      const star = stars[i];
      const twinkle = 0.5 + Math.sin(phase * 1.6 + star.twinkle) * 0.5;
      ctx.globalAlpha = (0.07 + twinkle * 0.25) * state.intensity;
      ctx.fillStyle = mood.colors[i % mood.colors.length];
      ctx.beginPath();
      ctx.arc(star.x * width, star.y * height, star.r * (1 + state.glow * 0.2), 0, twoPi);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawParticles(mood) {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const count = Math.min(particles.length, Math.round(particles.length * state.density));
    for (let i = 0; i < count; i += 1) {
      const p = particles[i];
      const driftRadius = minSide * p.drift * (0.22 + state.warp * 0.18);
      const x = ((p.x * width) + Math.cos(phase * p.drift * 2.2 + p.angle) * driftRadius + width) % width;
      const y = ((p.y * height) + Math.sin(phase * p.drift * 1.8 + p.angle) * driftRadius + height) % height;
      const size = p.r * lerp(1, 3, state.intensity) * state.glow;
      const color = colorAt(mood, i + p.hue * 10);
      const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 8);
      glow.addColorStop(0, withAlpha(color, 0.22 * state.intensity));
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(x - size * 8, y - size * 8, size * 16, size * 16);
    }
    ctx.restore();
  }

  function drawCentralAura(mood) {
    const center = getCenter();
    const radius = minSide * lerp(0.18, 0.38, state.intensity + state.warp * 0.2);
    const aura = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius);
    aura.addColorStop(0, withAlpha(mood.colors[1], 0.16 + state.intensity * 0.08));
    aura.addColorStop(0.5, withAlpha(mood.colors[0], 0.06));
    aura.addColorStop(1, "rgba(0,0,0,0)");
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = aura;
    ctx.fillRect(center.x - radius, center.y - radius, radius * 2, radius * 2);
  }

  function drawMode(mood) {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    switch (state.mode) {
      case "spiral":
        drawGoldenSpiral(mood);
        break;
      case "metatron":
        drawMetatron(mood);
        break;
      case "orbit":
        drawOrbitingPolygons(mood);
        break;
      case "veil":
        drawVeil(mood);
        break;
      case "kaleidoscope":
        drawKaleidoscope(mood);
        break;
      case "lattice":
        drawLattice(mood);
        break;
      case "tunnel":
        drawTunnel(mood);
        break;
      case "chrysalis":
        drawChrysalis(mood);
        break;
      case "rose":
        drawRoseEngine(mood);
        break;
      case "waveform":
        drawWaveformMandala(mood);
        break;
      case "flower":
      default:
        drawFlowerOfLife(mood);
        break;
    }
    ctx.restore();
  }

  function getCenter() {
    const influence = state.pointer * (state.still ? 0.18 : 1);
    return {
      x: width * (0.5 + (pointer.x - 0.5) * 0.16 * influence),
      y: height * (0.5 + (pointer.y - 0.5) * 0.16 * influence),
    };
  }

  function getPulse() {
    if (state.still) return 0;
    return Math.sin(phase * (1.2 + state.speed * 0.6)) * 0.5 + 0.5;
  }

  function colorAt(mood, offset) {
    const drift = state.colorShift * phase * 0.32;
    const index = Math.abs(Math.floor(offset + drift)) % mood.colors.length;
    return mood.colors[index];
  }

  function drawFlowerOfLife(mood) {
    const center = getCenter();
    const pulse = getPulse();
    const radius = minSide * lerp(0.068, 0.13, state.intensity) * (1 + state.breath * 0.08 * pulse);
    const rings = state.density > 1.05 ? 4 : state.density > 0.7 ? 3 : 2;
    const points = [{ x: center.x, y: center.y, ring: 0 }];
    for (let ring = 1; ring <= rings; ring += 1) {
      const steps = ring * 6;
      for (let i = 0; i < steps; i += 1) {
        const angle = i * twoPi / steps + phase * 0.06 * (ring % 2 ? 1 : -1);
        points.push({
          x: center.x + Math.cos(angle) * radius * ring * state.orbit,
          y: center.y + Math.sin(angle) * radius * ring * state.orbit,
          ring,
        });
      }
    }
    points.forEach((point, index) => {
      const alpha = 0.18 + (rings - point.ring + 1) * 0.05;
      strokeCircle(point.x, point.y, radius, colorAt(mood, index), alpha, 1.1 + state.glow * 0.8);
      if (state.density > 0.58) {
        strokeCircle(point.x, point.y, radius * 0.5, colorAt(mood, index + 2), alpha * 0.42, 0.7);
      }
    });
    drawRadialPetals(center, radius * 3.2, state.symmetry, mood, phase * 0.16, 0.28);
  }

  function drawGoldenSpiral(mood) {
    const center = getCenter();
    const maxRadius = minSide * lerp(0.32, 0.54, state.intensity) * state.orbit;
    const turns = lerp(3.8, 6.8, state.density);
    const points = Math.round(380 + state.density * 220);
    for (let layer = 0; layer < 5; layer += 1) {
      ctx.beginPath();
      const rotation = phase * (0.1 + layer * 0.022) + layer * Math.PI * 0.42;
      for (let i = 0; i < points; i += 1) {
        const t = i / (points - 1);
        const angle = t * turns * twoPi + rotation;
        const r = maxRadius * Math.pow(t, 1 / phi);
        const warp = 1 + Math.sin(t * 24 + phase * 1.1 + layer) * 0.03 * state.warp;
        const x = center.x + Math.cos(angle) * r * warp;
        const y = center.y + Math.sin(angle) * r * warp;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = withAlpha(colorAt(mood, layer), 0.18 + state.intensity * 0.16);
      ctx.lineWidth = (0.8 + layer * 0.32) * state.glow;
      ctx.stroke();
    }
    drawRadialBeads(center, maxRadius, turns, mood);
  }

  function drawMetatron(mood) {
    const center = getCenter();
    const base = minSide * lerp(0.062, 0.11, state.intensity);
    const nodes = [{ x: center.x, y: center.y, layer: 0 }];
    const rings = state.density > 1.05 ? 3 : 2;
    for (let ring = 1; ring <= rings; ring += 1) {
      for (let i = 0; i < 6; i += 1) {
        const angle = i * twoPi / 6 + Math.PI / 6 + phase * 0.04 * ring;
        nodes.push({
          x: center.x + Math.cos(angle) * base * ring * 1.85 * state.orbit,
          y: center.y + Math.sin(angle) * base * ring * 1.85 * state.orbit,
          layer: ring,
        });
      }
    }
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < base * (4.2 + state.density)) {
          line(a.x, a.y, b.x, b.y, colorAt(mood, i + j), 0.05 + state.intensity * 0.06, 0.7 + state.glow * 0.5);
        }
      }
    }
    nodes.forEach((node, index) => {
      strokeCircle(node.x, node.y, base * (node.layer ? 0.82 : 1.08), colorAt(mood, index), 0.22, 1.1);
      glowDot(node.x, node.y, 2 + state.glow * 3, colorAt(mood, index + 1), 0.24);
    });
    drawPolygon(center.x, center.y, base * 4.2 * state.orbit, 6, phase * 0.08, colorAt(mood, 1), 0.24, 1.4);
    drawPolygon(center.x, center.y, base * 2.3 * state.orbit, 3, -phase * 0.13, colorAt(mood, 2), 0.28, 1.2);
    drawPolygon(center.x, center.y, base * 2.3 * state.orbit, 3, Math.PI - phase * 0.13, colorAt(mood, 0), 0.22, 1.2);
  }

  function drawOrbitingPolygons(mood) {
    const center = getCenter();
    const shells = Math.round(4 + state.density * 3);
    const base = minSide * lerp(0.045, 0.082, state.intensity);
    for (let shell = 1; shell <= shells; shell += 1) {
      const orbit = base * shell * 1.45 * state.orbit;
      const count = shell + state.symmetry / 2;
      strokeCircle(center.x, center.y, orbit, colorAt(mood, shell), 0.06, 0.8);
      for (let i = 0; i < count; i += 1) {
        const angle = phase * (0.16 / shell) * (shell % 2 ? 1 : -1) + i * twoPi / count;
        const warp = Math.sin(phase * 0.8 + i) * base * state.warp * 0.25;
        const x = center.x + Math.cos(angle) * (orbit + warp);
        const y = center.y + Math.sin(angle) * (orbit + warp);
        drawPolygon(x, y, base * (0.25 + state.intensity * 0.34) * (1 + shell * 0.05), 3 + ((i + shell) % 5), -phase * 0.5 + i, colorAt(mood, i + shell), 0.28, 0.9);
      }
    }
    drawRadialPetals(center, base * 6.2, state.symmetry, mood, phase * 0.1, 0.2);
  }

  function drawVeil(mood) {
    const center = getCenter();
    const waves = Math.round(7 + state.density * 14);
    const amp = minSide * lerp(0.026, 0.09, state.intensity) * (1 + state.warp * 0.35);
    const span = minSide * lerp(0.36, 0.62, state.intensity) * state.orbit;
    for (let w = 0; w < waves; w += 1) {
      const offset = (w - waves / 2) * (span / waves);
      ctx.beginPath();
      for (let i = 0; i <= 240; i += 1) {
        const t = i / 240;
        const x = center.x - span + t * span * 2;
        const wave = Math.sin(t * twoPi * (2 + (w % 5)) + phase * (0.34 + w * 0.025));
        const y = center.y + offset + wave * amp + Math.cos(t * twoPi + phase * 0.16) * amp * 0.34;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = withAlpha(colorAt(mood, w), 0.08 + state.intensity * 0.07);
      ctx.lineWidth = 0.8 + state.glow * 0.6;
      ctx.stroke();
    }
    drawRadialPetals(center, span * 0.7, state.symmetry + 8, mood, phase * 0.05, 0.16);
  }

  function drawKaleidoscope(mood) {
    const center = getCenter();
    const slices = state.symmetry;
    const maxRadius = minSide * lerp(0.28, 0.58, state.intensity) * state.orbit;
    for (let s = 0; s < slices; s += 1) {
      const a = s * twoPi / slices + phase * 0.09;
      const next = a + twoPi / slices;
      for (let layer = 1; layer <= 5 + state.density * 3; layer += 1) {
        const r1 = maxRadius * layer / 9;
        const r2 = r1 + maxRadius * 0.12 * (1 + Math.sin(phase + layer) * state.warp * 0.2);
        const mid = (a + next) * 0.5 + Math.sin(phase * 0.6 + layer) * 0.025 * state.warp;
        line(center.x + Math.cos(a) * r1, center.y + Math.sin(a) * r1, center.x + Math.cos(mid) * r2, center.y + Math.sin(mid) * r2, colorAt(mood, s + layer), 0.13, 1.1 * state.glow);
        line(center.x + Math.cos(next) * r1, center.y + Math.sin(next) * r1, center.x + Math.cos(mid) * r2, center.y + Math.sin(mid) * r2, colorAt(mood, s + layer + 2), 0.1, 0.8 * state.glow);
      }
    }
    for (let ring = 1; ring <= 7; ring += 1) {
      drawPolygon(center.x, center.y, maxRadius * ring / 7, slices, phase * (ring % 2 ? 0.08 : -0.06), colorAt(mood, ring), 0.09, 0.9);
    }
  }

  function drawLattice(mood) {
    const center = getCenter();
    const spacing = minSide * lerp(0.08, 0.045, state.density);
    const cols = Math.ceil(width / spacing) + 4;
    const rows = Math.ceil(height / spacing) + 4;
    const skew = Math.sin(phase * 0.22) * spacing * state.warp * 0.5;
    for (let y = -2; y < rows; y += 1) {
      for (let x = -2; x < cols; x += 1) {
        const px = x * spacing + (y % 2) * spacing * 0.5 + skew - spacing;
        const py = y * spacing * 0.86 - spacing;
        const dx = px - center.x;
        const dy = py - center.y;
        const dist = Math.hypot(dx, dy);
        const alpha = clamp(0.2 - dist / Math.max(width, height) * 0.18, 0.02, 0.18) * state.intensity;
        drawPolygon(px, py, spacing * 0.42 * state.orbit, 3 + ((x + y + 9) % 4), phase * 0.1 + dist * 0.002, colorAt(mood, x + y), alpha, 0.8);
      }
    }
    drawRadialPetals(center, minSide * 0.28, state.symmetry, mood, -phase * 0.1, 0.16);
  }

  function drawTunnel(mood) {
    const center = getCenter();
    const rings = Math.round(14 + state.density * 16);
    const maxRadius = minSide * lerp(0.4, 0.74, state.intensity) * state.orbit;
    for (let i = rings; i >= 1; i -= 1) {
      const t = i / rings;
      const pulse = Math.sin(phase * 1.2 + i * 0.55) * state.pulse * 0.08;
      const r = maxRadius * Math.pow(t, 1.5) * (1 + pulse);
      const sides = Math.max(3, Math.round(state.symmetry - i % 5));
      drawPolygon(center.x, center.y, r, sides, phase * (0.08 + t * 0.12), colorAt(mood, i), 0.06 + (1 - t) * 0.16, 1.0 + state.glow * 0.4);
    }
    drawRadialBeads(center, maxRadius * 0.92, 3.4, mood);
  }

  function drawChrysalis(mood) {
    const center = getCenter();
    const loops = Math.round(12 + state.density * 10);
    const radius = minSide * lerp(0.16, 0.34, state.intensity) * state.orbit;
    for (let i = 0; i < loops; i += 1) {
      const a = i * twoPi / loops + phase * 0.12;
      const x = center.x + Math.cos(a) * radius * 0.24 * state.warp;
      const y = center.y + Math.sin(a) * radius * 0.24 * state.warp;
      ctx.strokeStyle = withAlpha(colorAt(mood, i), 0.16 + state.intensity * 0.08);
      ctx.lineWidth = 0.8 + state.glow * 0.7;
      ctx.beginPath();
      ctx.ellipse(x, y, radius * 0.32, radius * (0.82 + Math.sin(phase + i) * 0.08 * state.breath), a, 0, twoPi);
      ctx.stroke();
    }
    drawRadialPetals(center, radius * 1.15, state.symmetry * 2, mood, -phase * 0.09, 0.14);
  }

  function drawRoseEngine(mood) {
    const center = getCenter();
    const petals = state.symmetry;
    const radius = minSide * lerp(0.22, 0.46, state.intensity) * state.orbit;
    for (let layer = 0; layer < 4 + state.density * 2; layer += 1) {
      ctx.beginPath();
      const k = petals / (2 + (layer % 3));
      const rot = phase * (0.08 + layer * 0.025);
      const points = 720;
      for (let i = 0; i <= points; i += 1) {
        const t = i / points * twoPi * 2;
        const r = radius * (0.24 + layer * 0.1) * Math.cos(k * t + Math.sin(phase * 0.4) * state.warp * 0.3);
        const x = center.x + Math.cos(t + rot) * r;
        const y = center.y + Math.sin(t + rot) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = withAlpha(colorAt(mood, layer), 0.14 + state.intensity * 0.08);
      ctx.lineWidth = 0.8 + state.glow * 0.7;
      ctx.stroke();
    }
  }

  function drawWaveformMandala(mood) {
    const center = getCenter();
    const rings = Math.round(4 + state.density * 5);
    const points = 360;
    for (let ring = 1; ring <= rings; ring += 1) {
      ctx.beginPath();
      const base = minSide * (0.04 + ring * 0.038) * state.orbit;
      const amp = minSide * 0.018 * (state.pulse + state.warp * 0.5);
      for (let i = 0; i <= points; i += 1) {
        const a = i / points * twoPi;
        const wave = Math.sin(a * state.symmetry + phase * (1.4 + ring * 0.16)) + Math.sin(a * (ring + 2) - phase * 0.9) * 0.45;
        const r = base + wave * amp * (0.35 + ring / rings);
        const x = center.x + Math.cos(a) * r;
        const y = center.y + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = withAlpha(colorAt(mood, ring), 0.14 + state.intensity * 0.08);
      ctx.lineWidth = 0.9 + state.glow * 0.6;
      ctx.stroke();
    }
    drawRadialPetals(center, minSide * 0.28 * state.orbit, state.symmetry, mood, phase * 0.12, 0.22);
  }

  function drawRadialPetals(center, radius, count, mood, rotation, alpha) {
    const petals = Math.max(3, Math.round(count));
    for (let i = 0; i < petals; i += 1) {
      const a = i * twoPi / petals + rotation;
      const pulse = 0.74 + getPulse() * 0.26;
      ctx.strokeStyle = withAlpha(colorAt(mood, i), alpha * state.intensity);
      ctx.lineWidth = 0.7 + state.glow * 0.6;
      ctx.beginPath();
      ctx.ellipse(
        center.x + Math.cos(a) * radius * 0.22,
        center.y + Math.sin(a) * radius * 0.22,
        radius * 0.13 * pulse,
        radius * 0.46 * (1 + state.breath * 0.1 * getPulse()),
        a,
        0,
        twoPi,
      );
      ctx.stroke();
    }
  }

  function drawRadialBeads(center, maxRadius, turns, mood) {
    const beadCount = Math.round(36 + state.density * 80);
    for (let i = 0; i < beadCount; i += 1) {
      const t = i / beadCount;
      const angle = t * turns * twoPi + phase * 0.25;
      const r = maxRadius * Math.pow(t, 1 / phi);
      const x = center.x + Math.cos(angle) * r;
      const y = center.y + Math.sin(angle) * r;
      glowDot(x, y, lerp(1, 3.2, state.intensity), colorAt(mood, i), 0.2);
    }
  }

  function drawChromaticHalo(mood) {
    const center = getCenter();
    const r = minSide * lerp(0.12, 0.24, state.intensity) * (1 + state.pulse * getPulse() * 0.14);
    for (let i = 0; i < 3; i += 1) {
      strokeCircle(
        center.x + Math.sin(phase + i) * state.warp * 5,
        center.y + Math.cos(phase + i * 1.7) * state.warp * 5,
        r * (1 + i * 0.32),
        mood.colors[i],
        0.045 + state.glow * 0.025,
        0.9,
      );
    }
  }

  function drawPolygon(x, y, radius, sides, rotation, color, alpha, lineWidth) {
    ctx.strokeStyle = withAlpha(color, alpha * state.intensity);
    ctx.lineWidth = lineWidth * state.glow;
    ctx.beginPath();
    for (let i = 0; i <= sides; i += 1) {
      const angle = i * twoPi / sides + rotation;
      const px = x + Math.cos(angle) * radius;
      const py = y + Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
  }

  function strokeCircle(x, y, radius, color, alpha, lineWidth) {
    ctx.strokeStyle = withAlpha(color, alpha * state.intensity);
    ctx.lineWidth = lineWidth * state.glow;
    ctx.beginPath();
    ctx.arc(x, y, Math.max(0, radius), 0, twoPi);
    ctx.stroke();
  }

  function line(x1, y1, x2, y2, color, alpha, lineWidth) {
    ctx.strokeStyle = withAlpha(color, alpha * state.intensity);
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function glowDot(x, y, radius, color, alpha) {
    const r = Math.max(1, radius * state.glow);
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r * 7);
    gradient.addColorStop(0, withAlpha(color, alpha * state.intensity));
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(x - r * 7, y - r * 7, r * 14, r * 14);
  }

  function drawVignette() {
    const gradient = ctx.createRadialGradient(width / 2, height / 2, minSide * 0.18, width / 2, height / 2, Math.max(width, height) * 0.7);
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(0.72, "rgba(0,0,0,0.08)");
    gradient.addColorStop(1, "rgba(0,0,0,0.68)");
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function withAlpha(hex, alpha) {
    const normalized = hex.replace("#", "");
    const value = Number.parseInt(normalized, 16);
    const r = (value >> 16) & 255;
    const g = (value >> 8) & 255;
    const b = value & 255;
    return `rgba(${r}, ${g}, ${b}, ${clamp(alpha, 0, 1)})`;
  }

  async function toggleSound() {
    if (state.sound) {
      await stopSound();
    } else {
      await startSound();
    }
  }

  async function startSound() {
    if (state.sound) return;
    if (!audio) audio = createAudioEngine();
    if (audio.context.state === "suspended") await audio.context.resume();
    const now = audio.context.currentTime;
    audio.transport.nextTime = now + 0.04;
    audio.master.gain.cancelScheduledValues(now);
    audio.master.gain.setTargetAtTime(masterLevel(), now, 0.28);
    state.sound = true;
    syncControls();
  }

  async function stopSound() {
    if (audio) {
      const now = audio.context.currentTime;
      audio.master.gain.cancelScheduledValues(now);
      audio.master.gain.setTargetAtTime(0.0001, now, 0.08);
    }
    state.sound = false;
    syncControls();
  }

  function emergencyPause() {
    state.still = true;
    stopSound();
    syncControls();
    persistState();
  }

  function createAudioEngine() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const master = context.createGain();
    const compressor = context.createDynamicsCompressor();
    const filter = context.createBiquadFilter();
    const delay = context.createDelay(1.4);
    const delayGain = context.createGain();
    const feedback = context.createGain();
    const reverb = context.createConvolver();
    const reverbGain = context.createGain();
    const harmonyBus = context.createGain();
    const harmonyFilter = context.createBiquadFilter();
    const voices = [];
    const harmonyVoices = [];
    const intervals = [0.5, 1, 1.5, 2, 3, 4, 6];

    master.gain.value = 0.0001;
    compressor.threshold.value = -24;
    compressor.knee.value = 18;
    compressor.ratio.value = 4;
    compressor.attack.value = 0.04;
    compressor.release.value = 0.44;
    filter.type = "lowpass";
    filter.frequency.value = 900;
    filter.Q.value = 0.62;
    delay.delayTime.value = 0.38;
    delayGain.gain.value = 0.08;
    feedback.gain.value = 0.18;
    reverb.buffer = makeImpulseResponse(context);
    reverbGain.gain.value = 0.08;
    harmonyBus.gain.value = 0.0001;
    harmonyFilter.type = "lowpass";
    harmonyFilter.frequency.value = 1400;
    harmonyFilter.Q.value = 0.72;

    filter.connect(compressor);
    compressor.connect(master);
    master.connect(context.destination);
    filter.connect(delay);
    filter.connect(reverb);
    delay.connect(delayGain);
    delayGain.connect(feedback);
    feedback.connect(delay);
    delayGain.connect(compressor);
    reverb.connect(reverbGain);
    reverbGain.connect(compressor);
    harmonyBus.connect(harmonyFilter);
    harmonyFilter.connect(filter);

    intervals.forEach((interval, index) => {
      const osc = context.createOscillator();
      const gain = context.createGain();
      const pan = context.createStereoPanner();
      const lfo = context.createOscillator();
      const lfoGain = context.createGain();
      osc.type = index % 3 === 0 ? "sine" : "triangle";
      osc.frequency.value = MOODS[state.mood].root * interval;
      gain.gain.value = 0.012;
      pan.pan.value = lerp(-0.55, 0.55, index / (intervals.length - 1));
      lfo.frequency.value = 0.012 + index * 0.007;
      lfoGain.gain.value = 0.02;
      lfo.connect(lfoGain);
      lfoGain.connect(pan.pan);
      osc.connect(gain);
      gain.connect(pan);
      pan.connect(filter);
      osc.start();
      lfo.start();
      voices.push({ osc, gain, pan, interval });
    });

    for (let index = 0; index < 8; index += 1) {
      const osc = context.createOscillator();
      const gain = context.createGain();
      const pan = context.createStereoPanner();
      osc.type = index % 4 === 0 ? "sine" : index % 4 === 1 ? "triangle" : index % 4 === 2 ? "sine" : "sawtooth";
      osc.frequency.value = MOODS[state.mood].root * (index < 2 ? 0.5 : 1);
      gain.gain.value = 0.0001;
      pan.pan.value = lerp(-0.68, 0.68, index / 7);
      osc.connect(gain);
      gain.connect(pan);
      pan.connect(harmonyBus);
      osc.start();
      harmonyVoices.push({ osc, gain, pan, index });
    }

    const transport = {
      step: 0,
      bar: 0,
      nextTime: context.currentTime + 0.08,
    };
    return {
      context,
      master,
      compressor,
      filter,
      delay,
      delayGain,
      feedback,
      reverb,
      reverbGain,
      harmonyBus,
      harmonyFilter,
      harmonyVoices,
      voices,
      transport,
      phrase: buildPhrase(),
      counterPhrase: buildCounterPhrase(),
      noiseBuffer: makeNoiseBuffer(context),
    };
  }

  function makeNoiseBuffer(context) {
    const buffer = context.createBuffer(1, context.sampleRate * 1.5, context.sampleRate);
    const data = buffer.getChannelData(0);
    let seed = state.musicSeed || 1;
    for (let i = 0; i < data.length; i += 1) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      data[i] = ((seed / 4294967295) * 2 - 1) * (1 - i / data.length);
    }
    return buffer;
  }

  function makeImpulseResponse(context) {
    const length = Math.floor(context.sampleRate * 2.4);
    const buffer = context.createBuffer(2, length, context.sampleRate);
    let seed = (state.musicSeed || 1) + 919;
    for (let channel = 0; channel < 2; channel += 1) {
      const data = buffer.getChannelData(channel);
      for (let i = 0; i < length; i += 1) {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        const decay = Math.pow(1 - i / length, 2.2);
        data[i] = ((seed / 4294967295) * 2 - 1) * decay * (channel ? 0.85 : 1);
      }
    }
    return buffer;
  }

  function seeded(seed) {
    let value = Math.max(1, Math.floor(seed)) >>> 0;
    return () => {
      value = (value * 1664525 + 1013904223) >>> 0;
      return value / 4294967295;
    };
  }

  function buildPhrase() {
    const rand = seeded(state.musicSeed + patternIndex() * 997 + state.symmetry * 31);
    const length = state.rhythm > 0.72 ? 64 : 32;
    const phrase = [];
    for (let i = 0; i < length; i += 1) {
      const bar = Math.floor(i / 16);
      const stepInBar = i % 16;
      const contour = Math.sin((i / length) * twoPi * (1.5 + state.harmony * 0.7) + rand() * 1.2);
      const cross = Math.sin((i / length) * twoPi * (3 + state.rhythm * 2) + state.musicSeed * 0.001);
      const chordDegree = progressionDegreeForBar(bar);
      const nextChordDegree = progressionDegreeForBar(bar + 1);
      const chord = chordToneDegrees(chordDegree, bar);
      const nextChord = chordToneDegrees(nextChordDegree, bar + 1);
      const leap = Math.floor(rand() * chord.length * lerp(0.8, 1.45, state.harmony));
      const chordIndex = Math.abs(Math.round(stepInBar / 2 + contour * 2.2 + cross * state.rhythm + leap)) % chord.length;
      const cadenceStep = stepInBar >= 12 && state.harmony > 0.72 && rand() < 0.34;
      const anchor = cadenceStep
        ? nextChordDegree - chordDegree + nextChord[(chordIndex + 1) % nextChord.length]
        : chord[chordIndex];
      const passing = state.harmony > 0.56 && [3, 7, 11, 15].includes(stepInBar) && rand() < 0.52
        ? (rand() > 0.5 ? 1 : -1)
        : 0;
      const degree = anchor + passing;
      const syncopated = euclideanHit(i % 16, Math.round(3 + state.rhythm * 6), state.musicSeed % 16);
      phrase.push({
        degree,
        octave: rand() > lerp(0.82, 0.48, state.harmony) ? 2 : 1,
        rest: syncopated || cadenceStep || rand() > lerp(0.46, 0.08, state.complexity),
        accent: cadenceStep || syncopated || rand() > lerp(0.84, 0.56, state.rhythm),
      });
    }
    return phrase;
  }

  function buildCounterPhrase() {
    const rand = seeded(state.musicSeed * 3 + 71 + state.symmetry * 19);
    return Array.from({ length: 32 }, (_, index) => {
      const bar = Math.floor(index / 16);
      const chordDegree = progressionDegreeForBar(bar + 1);
      const currentDegree = progressionDegreeForBar(bar);
      const chord = chordToneDegrees(chordDegree, bar + 1);
      const inversion = index % 8 > 3 ? 2 : 0;
      const degree = chordDegree - currentDegree + chord[Math.abs(Math.round(chord.length - 1 - (index * phi + inversion + rand() * 2))) % chord.length];
      return {
        degree,
        octave: index % 6 === 0 ? 2 : 1,
        accent: euclideanHit(index % 16, Math.round(2 + state.harmony * 5), (state.musicSeed + 5) % 16),
      };
    });
  }

  function updateAudio(dt) {
    if (!audio) return;
    const now = audio.context.currentTime;
    const root = MOODS[state.mood].root;
    const pointerTone = lerp(0.88, 1.16, pointer.y * state.pointer + 0.5 * (1 - state.pointer));
    const brightness = lerp(380, 2600, state.intensity) * lerp(0.88, 1.14, pointer.x * state.pointer);
    audio.filter.frequency.setTargetAtTime(brightness, now, 0.55);
    audio.filter.Q.setTargetAtTime(0.44 + state.shimmer * 1.2, now, 0.7);
    if (audio.harmonyFilter) {
      audio.harmonyFilter.frequency.setTargetAtTime(lerp(760, 3200, state.harmony) * lerp(0.86, 1.18, pointer.y), now, 0.45);
      audio.harmonyFilter.Q.setTargetAtTime(0.72 + state.harmony * 0.92, now, 0.6);
    }
    if (audio.harmonyBus) {
      const harmonyLevel = state.sound
        ? (0.068 + state.harmony * 0.24) * state.audioLevel * state.sequence
        : 0.0001;
      audio.harmonyBus.gain.setTargetAtTime(harmonyLevel, now, 0.32);
    }
    audio.delay.delayTime.setTargetAtTime(lerp(0.62, 0.24, state.speed / 2.4), now, 1.0);
    audio.delayGain.gain.setTargetAtTime(0.025 + state.shimmer * 0.095, now, 0.8);
    audio.feedback.gain.setTargetAtTime(0.08 + state.trails * 0.18, now, 0.8);
    if (audio.reverbGain) {
      audio.reverbGain.gain.setTargetAtTime(0.025 + state.drone * 0.045 + state.harmony * 0.09, now, 0.9);
    }
    audio.master.gain.setTargetAtTime(state.sound ? masterLevel() : 0.0001, now, 0.24);
    audio.voices.forEach((voice, index) => {
      const drift = 1 + Math.sin(phase * 0.11 + index * 1.7) * 0.004 * state.warp;
      voice.osc.frequency.setTargetAtTime(root * voice.interval * pointerTone * drift, now, 1.5);
      voice.gain.gain.setTargetAtTime((0.006 + state.drone * 0.018) * (1 + pointer.pressure * 0.45), now, 0.7);
      voice.pan.pan.setTargetAtTime(lerp(-state.stereo, state.stereo, index / (audio.voices.length - 1)), now, 0.9);
    });
    updateHarmonyBed(now);
    if (!state.sound) return;
    shimmerTimer -= dt;
    if (shimmerTimer <= 0) {
      shimmerTimer = lerp(5.2, 1.1, state.shimmer * state.complexity) / Math.max(0.28, state.speed);
      playShimmer(now);
    }
    scheduleGenerator(now);
  }

  function updateAudioPalette() {
    if (!audio) return;
    const now = audio.context.currentTime;
    const root = MOODS[state.mood].root;
    audio.voices.forEach((voice) => {
      voice.osc.frequency.setTargetAtTime(root * voice.interval, now, 1.8);
    });
    const { bar, chordDegree } = activeChordContext();
    scheduleHarmonyVoicing(now, chordDegree, bar, 0.12);
  }

  function masterLevel() {
    return (0.02 + state.audioLevel * 0.13) * (0.72 + state.intensity * 0.34);
  }

  function scheduleGenerator(now) {
    if (!audio?.transport || state.sequence <= 0.02) return;
    const beat = 60 / Math.max(45, state.tempo);
    const stepDuration = beat / 4;
    if (audio.transport.nextTime < now - 0.2) {
      audio.transport.nextTime = now + 0.04;
    }
    const lookAhead = prefersReducedMotion ? 0.08 : 0.18;
    while (audio.transport.nextTime < now + lookAhead) {
      scheduleMusicStep(audio.transport.nextTime, audio.transport.step, beat);
      audio.transport.step += 1;
      audio.transport.nextTime += stepDuration;
    }
  }

  function activeChordContext() {
    const step = audio?.transport?.step || 0;
    const bar = Math.floor(step / 16);
    return {
      bar,
      chordDegree: progressionDegreeForBar(bar),
      nextChordDegree: progressionDegreeForBar(bar + 1),
    };
  }

  function progressionDegreeForBar(bar = 0) {
    const progression = CHORD_PROGRESSIONS[state.musicMode] || CHORD_PROGRESSIONS.trance;
    const chordCycle = state.rhythm > 0.74 || state.musicMode === "polyrhythm" ? bar : Math.floor(bar / 2);
    return progression[((chordCycle % progression.length) + progression.length) % progression.length];
  }

  function chordVoicing(chordDegree, bar = 0) {
    const tones = chordToneDegrees(chordDegree, bar);
    const inversion = state.harmony > 0.62 ? (bar + Math.round(chordDegree)) % Math.min(4, tones.length) : 0;
    const rotated = tones.slice(inversion).concat(tones.slice(0, inversion).map((degree) => degree + 7));
    while (rotated.length < 8) {
      rotated.push(rotated[rotated.length % tones.length] + 7);
    }
    return rotated.slice(0, 8).map((degree, index) => ({
      degree: chordDegree + degree,
      octave: index < 1 ? -1 : index < 5 ? 0 : 1,
    }));
  }

  function updateHarmonyBed(now) {
    if (!audio?.harmonyVoices?.length) return;
    const { bar, chordDegree } = activeChordContext();
    scheduleHarmonyVoicing(now, chordDegree, bar, 0.42);
  }

  function scheduleHarmonyVoicing(time, chordDegree, bar = 0, glide = 0.18) {
    if (!audio?.harmonyVoices?.length) return;
    const voicing = chordVoicing(chordDegree, bar);
    audio.harmonyVoices.forEach((voice, index) => {
      const note = voicing[index % voicing.length];
      const drift = 1 + Math.sin(phase * 0.09 + index * 1.4) * 0.0025 * state.shimmer;
      const frequency = noteFrequency(note.degree, note.octave) * drift;
      const toneWeight = index === 0 ? 1.08 : index < 4 ? 0.84 : 0.58;
      voice.osc.frequency.setTargetAtTime(frequency, time, glide);
      voice.gain.gain.setTargetAtTime((0.026 + state.harmony * 0.048) * state.harmony * toneWeight, time, 0.28);
      voice.pan.pan.setTargetAtTime(Math.sin(index * 1.37 + bar * 0.44) * state.stereo * 0.72, time, 0.35);
    });
  }

  function scheduleMusicStep(time, step, beat) {
    const stepInBar = step % 16;
    const bar = Math.floor(step / 16);
    const chordDegree = progressionDegreeForBar(bar);
    const nextChordDegree = progressionDegreeForBar(bar + 1);
    const phrase = audio.phrase || buildPhrase();
    const counterPhrase = audio.counterPhrase || buildCounterPhrase();
    const swungTime = time
      + (stepInBar % 2 ? beat * 0.08 * state.groove : 0)
      + (state.rhythm > 0.55 && stepInBar % 4 === 3 ? beat * 0.035 * state.rhythm : 0);
    const density = state.sequence * state.complexity;
    const ambient = state.musicMode === "ambient";
    const pulseMode = state.musicMode === "pulse";
    const polyMode = state.musicMode === "polyrhythm";
    const euphoric = state.musicMode === "euphoric";
    const rhythmPulse = euclideanHit(stepInBar, Math.round(3 + state.rhythm * 7), (bar + state.musicSeed) % 16);

    if (stepInBar === 0 || (state.harmony > 0.64 && stepInBar === 8)) {
      scheduleHarmonyVoicing(swungTime, stepInBar >= 8 && state.harmony > 0.72 ? nextChordDegree : chordDegree, bar, 0.12);
    }

    if (stepInBar === 0 || (stepInBar === 8 && state.complexity > 0.42) || (state.harmony > 0.72 && stepInBar === 12)) {
      const padDegree = stepInBar >= 12 && state.harmony > 0.78 ? nextChordDegree : chordDegree;
      playChordPad(swungTime, padDegree, beat * (ambient ? 8.8 : euphoric ? 5.6 : 4.4), stepInBar >= 12 ? bar + 1 : bar);
      hitMusicReactive("chord", 0.9 + state.drone * 0.2);
      sequencerPulse = Math.max(sequencerPulse, 0.75);
    }

    if (state.harmony > 0.48 && (stepInBar === 3 || stepInBar === 10 || (euphoric && stepInBar === 14))) {
      playChordStab(swungTime + beat * 0.015, stepInBar > 8 ? nextChordDegree : chordDegree, beat, stepInBar > 8 ? bar + 1 : bar);
      hitMusicReactive("chord", 0.42 + state.harmony * 0.5);
    }

    const bassSteps = pulseMode || polyMode ? [0, 3, 6, 8, 11, 14] : [0, 6, 8, 14];
    const bassEuclid = state.rhythm > 0.5 && euclideanHit(stepInBar, Math.round(3 + state.rhythm * 4), (bar * 3 + state.musicSeed) % 16);
    if (state.bass > 0.03 && (bassSteps.includes(stepInBar) || bassEuclid)) {
      const passing = state.harmony > 0.62 && (bassEuclid || stepInBar >= 14) && ![0, 8].includes(stepInBar) ? nextChordDegree : chordDegree;
      playGeneratedBass(swungTime, passing, beat * (pulseMode || polyMode ? 0.58 : 0.78));
      hitMusicReactive("bass", 0.72 + state.bass * 0.42);
      sequencerPulse = Math.max(sequencerPulse, 0.55 + state.bass * 0.3);
    }

    const arpEvery = state.complexity > 0.72 || state.rhythm > 0.82 ? 1 : state.complexity > 0.38 ? 2 : 4;
    if (state.arp > 0.04 && stepInBar % arpEvery === 0 && (!ambient || stepInBar % 4 === 0)) {
      const arpPattern = state.harmony > 0.65
        ? [0, 2, 4, 6, 8, 6, 4, 2, 5, 7, 9, 7]
        : [0, 2, 4, 6, 4, 2, 5, 7];
      const chordPattern = chordToneDegrees(chordDegree, bar);
      const arpDegree = state.harmony > 0.55
        ? chordPattern[(step + Math.floor(step / 4)) % chordPattern.length]
        : arpPattern[step % arpPattern.length];
      playArpVoice(swungTime, chordDegree + arpDegree, step, beat * 0.72);
      hitMusicReactive("arp", 0.44 + state.arp * 0.46);
    }

    const phraseNote = phrase[step % phrase.length];
    const melodyGate = phraseNote && phraseNote.rest && (stepInBar % 2 === 0 || density > 0.62);
    if (state.melody > 0.04 && melodyGate && seededDecision(step, 0.22 + state.melody * 0.5 + density * 0.18)) {
      const melodyDegree = state.harmony > 0.52 ? chordAwareDegree(phraseNote.degree, chordDegree, bar) : phraseNote.degree;
      playMelodyVoice(swungTime + beat * 0.02, chordDegree + melodyDegree, phraseNote.octave, phraseNote.accent, beat);
      if (state.harmony > 0.66) {
        playHarmonicAnswer(swungTime + beat * 0.04, chordDegree, melodyDegree, phraseNote.octave, beat, bar, phraseNote.accent ? 0.9 : 0.62);
      }
      hitMusicReactive("melody", phraseNote.accent ? 1.1 : 0.72);
    }

    const counterNote = counterPhrase[(step + bar * 3) % counterPhrase.length];
    if (state.harmony > 0.34 && state.melody > 0.12 && rhythmPulse && counterNote && stepInBar % 2 === 1) {
      playHarmonicBell(swungTime + beat * 0.03, nextChordDegree + counterNote.degree, counterNote.octave + 1, beat, counterNote.accent ? 1.15 : 0.82);
      hitMusicReactive("melody", counterNote.accent ? 0.72 : 0.48);
    }

    if (state.harmony > 0.68 && state.arp > 0.24 && (stepInBar === 6 || stepInBar === 13)) {
      playChordAnswer(swungTime + beat * 0.018, stepInBar > 8 ? nextChordDegree : chordDegree, beat, stepInBar > 8 ? bar + 1 : bar);
      hitMusicReactive("chord", 0.36 + state.harmony * 0.32);
    }

    if (state.percussion > 0.02 && !ambient) {
      if (stepInBar === 0 || ((pulseMode || polyMode) && stepInBar === 8)) {
        playKick(swungTime);
        hitMusicReactive("percussion", 1.05);
      }
      if ((stepInBar === 4 || stepInBar === 12) && state.percussion > 0.36) {
        playSoftClap(swungTime + beat * 0.02);
        hitMusicReactive("percussion", 0.68);
      }
      if (stepInBar % 2 === 1 && seededDecision(step + 11, state.percussion * 0.65)) {
        playHat(swungTime, stepInBar);
        hitMusicReactive("percussion", 0.42);
      }
      if (state.rhythm > 0.42 && rhythmPulse) {
        playRimClick(swungTime + beat * 0.01, stepInBar);
        hitMusicReactive("percussion", 0.32 + state.rhythm * 0.24);
      }
      if (state.rhythm > 0.66 && euclideanHit(stepInBar, 5, (bar * 5 + 2) % 16)) {
        playResonantTom(swungTime, chordDegree + (stepInBar > 7 ? 4 : 0), beat);
        hitMusicReactive("percussion", 0.5 + state.rhythm * 0.28);
      }
    }

    if (step % 64 === 0) {
      audio.phrase = buildPhrase();
      audio.counterPhrase = buildCounterPhrase();
    }
  }

  function seededDecision(step, threshold) {
    const value = pseudo((state.musicSeed + 17) * (step + 3) + state.symmetry * 13);
    return value < clamp(threshold, 0, 1);
  }

  function euclideanHit(step, pulses, rotation = 0, steps = 16) {
    const normalizedPulses = Math.round(clamp(Number(pulses), 0, steps));
    if (normalizedPulses <= 0) return false;
    if (normalizedPulses >= steps) return true;
    const currentStep = (step + rotation + steps * 4) % steps;
    const previousStep = (currentStep - 1 + steps) % steps;
    return Math.floor((currentStep * normalizedPulses) / steps) !== Math.floor((previousStep * normalizedPulses) / steps);
  }

  function noteFrequency(degree, octave = 0) {
    const scale = SCALES[state.scale] || SCALES.minor;
    const normalized = ((Math.round(degree) % scale.length) + scale.length) % scale.length;
    const wraps = Math.floor(Math.round(degree) / scale.length);
    const semitone = scale[normalized] + (wraps + octave) * 12 + (KEYS[state.key] || 0);
    return MOODS[state.mood].root * Math.pow(2, semitone / 12);
  }

  function chordToneDegrees(chordDegree = 0, bar = 0) {
    const colors = CHORD_COLORS[state.musicMode] || CHORD_COLORS.trance;
    const colorIndex = Math.abs(Math.round(bar + chordDegree)) % colors.length;
    let chord = colors[colorIndex].slice();
    if (state.harmony < 0.42) chord = chord.slice(0, 3);
    else if (state.harmony < 0.62) chord = chord.slice(0, 4);
    else if (state.harmony < 0.78) chord = chord.slice(0, 5);
    if (state.harmony > 0.9 && bar % 4 === 2) chord = [0, 1, 4, 6, 8, 10];
    return chord.filter((degree, index) => chord.indexOf(degree) === index);
  }

  function chordAwareDegree(degree, chordDegree = 0, bar = 0) {
    const rounded = Math.round(degree);
    if (state.harmony < 0.62) return rounded;
    const chord = chordToneDegrees(chordDegree, bar);
    const octave = Math.floor(rounded / 7) * 7;
    const candidates = chord.flatMap((tone) => [tone + octave - 7, tone + octave, tone + octave + 7]);
    return candidates.reduce((closest, tone) => {
      const distance = Math.abs(tone - rounded);
      const closestDistance = Math.abs(closest - rounded);
      return distance < closestDistance ? tone : closest;
    }, candidates[0]);
  }

  function playChordPad(time, chordDegree, duration, bar = 0) {
    if (!audio) return;
    const context = audio.context;
    const chord = chordToneDegrees(chordDegree, bar);
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(940 + state.harmony * 1800 + state.shimmer * 620, time);
    filter.Q.setValueAtTime(0.7 + state.harmony * 0.8, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.024 * state.audioLevel * state.sequence * (0.45 + state.drone * 0.55) * (1 + state.harmony), time + 0.18);
    output.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    pan.pan.setValueAtTime(Math.sin(chordDegree + phase) * state.stereo * 0.28, time);
    chord.forEach((degree, index) => {
      const osc = context.createOscillator();
      const detune = (index - 2) * (3 + state.shimmer * 5);
      osc.type = index % 4 === 3 ? "sawtooth" : index % 2 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(noteFrequency(chordDegree + degree, index === 0 ? -1 : index >= 4 ? 1 : 0), time);
      osc.detune.setValueAtTime(detune, time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + duration + 0.08);
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.filter);
  }

  function playChordStab(time, chordDegree, beat, bar = 0) {
    if (!audio || state.harmony <= 0.02) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const chord = chordToneDegrees(chordDegree, bar).slice(0, state.harmony > 0.76 ? 5 : 4);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(680 + state.shimmer * 1300 + pointer.y * 420, time);
    filter.Q.setValueAtTime(2.2 + state.harmony * 5, time);
    pan.pan.setValueAtTime(Math.sin(bar + stepHash(chordDegree)) * state.stereo * 0.55, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.034 * state.harmony * state.audioLevel * state.sequence, time + 0.012);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.72);
    chord.forEach((degree, index) => {
      const osc = context.createOscillator();
      osc.type = index % 2 ? "triangle" : "sawtooth";
      osc.frequency.setValueAtTime(noteFrequency(chordDegree + degree, index > 2 ? 1 : 0), time);
      osc.detune.setValueAtTime((index - 2) * (5 + state.harmony * 8), time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + beat * 0.84);
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.filter);
  }

  function playChordAnswer(time, chordDegree, beat, bar = 0) {
    if (!audio || state.harmony <= 0.08) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const chord = chordToneDegrees(chordDegree, bar);
    const degrees = [
      chord[1] ?? chord[0],
      chord[3] ?? chord[2] ?? chord[0],
      chord[state.harmony > 0.82 ? 4 : 2] ?? chord[chord.length - 1],
    ];
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(980 + state.shimmer * 1600 + pointer.y * 520, time);
    filter.Q.setValueAtTime(2.4 + state.harmony * 4, time);
    pan.pan.setValueAtTime(Math.sin(bar * 1.7 + chordDegree) * state.stereo * 0.72, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.018 * state.harmony * state.arp * state.audioLevel * state.sequence, time + 0.018);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.15);
    degrees.forEach((degree, index) => {
      const osc = context.createOscillator();
      osc.type = index === 2 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(noteFrequency(chordDegree + degree, index > 0 ? 1 : 0), time);
      osc.detune.setValueAtTime((index - 1) * (4 + state.shimmer * 5), time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + beat * 1.28);
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.filter);
  }

  function playHarmonicAnswer(time, chordDegree, melodyDegree, octave, beat, bar = 0, accent = 1) {
    const lower = chordAwareDegree(melodyDegree - 2, chordDegree, bar);
    const upper = chordAwareDegree(melodyDegree + (state.musicMode === "euphoric" ? 4 : 3), chordDegree, bar);
    playHarmonicBell(time, chordDegree + lower, octave, beat, accent * 0.72);
    if (state.harmony > 0.82) {
      playHarmonicBell(time + beat * 0.08, chordDegree + upper, octave + 1, beat, accent * 0.48);
    }
  }

  function stepHash(value) {
    return Math.sin(value * 12.9898 + state.musicSeed * 0.001) * 43758.5453;
  }

  function playGeneratedBass(time, chordDegree, duration) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const sub = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const freq = noteFrequency(chordDegree, -2);
    osc.type = "sawtooth";
    sub.type = "sine";
    osc.frequency.setValueAtTime(freq, time);
    sub.frequency.setValueAtTime(freq * 0.5, time);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(130 + state.bass * 380 + pointer.pressure * 120, time);
    filter.Q.setValueAtTime(0.7 + state.groove * 1.4, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.055 * state.bass * state.audioLevel, time + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(filter);
    sub.connect(filter);
    filter.connect(gain);
    gain.connect(audio.filter);
    osc.start(time);
    sub.start(time);
    osc.stop(time + duration + 0.05);
    sub.stop(time + duration + 0.05);
  }

  function playArpVoice(time, degree, step, duration) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const pan = context.createStereoPanner();
    const filter = context.createBiquadFilter();
    const octave = step % 12 > 6 ? 2 : 1;
    const freq = noteFrequency(degree, octave);
    osc.type = state.musicMode === "crystal" ? "sine" : "triangle";
    osc.frequency.setValueAtTime(freq, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * lerp(0.92, 1.4, state.shimmer), time);
    filter.Q.setValueAtTime(4 + state.arp * 9, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.7 + pointer.x * 3) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.024 * state.arp * state.audioLevel * state.sequence, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    osc.start(time);
    osc.stop(time + duration + 0.04);
  }

  function playMelodyVoice(time, degree, octave, accent, beat) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const pan = context.createStereoPanner();
    const filter = context.createBiquadFilter();
    const freq = noteFrequency(degree, octave + 1);
    osc.type = accent ? "square" : "sine";
    osc.frequency.setValueAtTime(freq, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * 1.08, time);
    filter.Q.setValueAtTime(2.5 + state.melody * 7, time);
    pan.pan.setValueAtTime(lerp(-state.stereo, state.stereo, pointer.x), time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime((accent ? 0.024 : 0.016) * state.melody * state.audioLevel, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * lerp(0.9, 1.8, 1 - state.complexity));
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    osc.start(time);
    osc.stop(time + beat * 2.1);
  }

  function playHarmonicBell(time, degree, octave, beat, accent = 1) {
    if (!audio || state.harmony <= 0.02) return;
    const context = audio.context;
    const carrier = context.createOscillator();
    const overtone = context.createOscillator();
    const gain = context.createGain();
    const pan = context.createStereoPanner();
    const filter = context.createBiquadFilter();
    const freq = noteFrequency(degree, octave);
    carrier.type = "sine";
    overtone.type = state.musicMode === "polyrhythm" ? "triangle" : "sine";
    carrier.frequency.setValueAtTime(freq, time);
    overtone.frequency.setValueAtTime(freq * (state.harmony > 0.7 ? 2.5 : 2.0), time);
    overtone.detune.setValueAtTime(3 + state.shimmer * 7, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * lerp(1.1, 2.2, state.shimmer), time);
    filter.Q.setValueAtTime(3 + state.harmony * 8, time);
    pan.pan.setValueAtTime(Math.sin(degree * 1.7 + phase) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.022 * state.harmony * state.melody * state.audioLevel * accent, time + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * lerp(1.2, 2.4, state.harmony));
    carrier.connect(filter);
    overtone.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    carrier.start(time);
    overtone.start(time);
    carrier.stop(time + beat * 2.6);
    overtone.stop(time + beat * 2.6);
  }

  function playKick(time) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(95, time);
    osc.frequency.exponentialRampToValueAtTime(38, time + 0.22);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.075 * state.percussion * state.audioLevel, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.34);
    osc.connect(gain);
    gain.connect(audio.compressor);
    osc.start(time);
    osc.stop(time + 0.38);
  }

  function playHat(time, stepInBar) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    source.buffer = audio.noiseBuffer;
    filter.type = "highpass";
    filter.frequency.value = 5200 + state.shimmer * 2600;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.012 * state.percussion * state.audioLevel * (stepInBar % 4 === 1 ? 1 : 0.7), time + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08 + state.groove * 0.08);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audio.compressor);
    source.start(time);
    source.stop(time + 0.22);
  }

  function playSoftClap(time) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    source.buffer = audio.noiseBuffer;
    filter.type = "bandpass";
    filter.frequency.value = 1300 + state.percussion * 1400;
    filter.Q.value = 0.8;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.022 * state.percussion * state.audioLevel, time + 0.014);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audio.compressor);
    source.start(time);
    source.stop(time + 0.28);
  }

  function playRimClick(time, stepInBar) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(1.4 + (stepInBar % 5) * 0.08, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(2200 + state.rhythm * 1800 + pointer.x * 900, time);
    filter.Q.setValueAtTime(5 + state.rhythm * 8, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.009 * state.percussion * state.rhythm * state.audioLevel, time + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.07);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audio.compressor);
    source.start(time);
    source.stop(time + 0.12);
  }

  function playResonantTom(time, degree, beat) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const freq = noteFrequency(degree, -1) * lerp(0.82, 1.08, state.rhythm);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq * 1.18, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.72, time + beat * 0.35);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(360 + state.rhythm * 520, time);
    filter.Q.setValueAtTime(1.2 + state.groove * 2, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.032 * state.percussion * state.rhythm * state.audioLevel, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.9);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audio.compressor);
    osc.start(time);
    osc.stop(time + beat);
  }

  function playInteractionAccent() {
    if (!audio || !state.sound) return;
    const now = audio.context.currentTime + 0.015;
    const { bar, chordDegree } = activeChordContext();
    const chord = chordToneDegrees(chordDegree, bar);
    const degree = chordDegree + chord[Math.floor(pointer.x * chord.length) % chord.length] + (pointer.y < 0.35 ? 7 : 0);
    playArpVoice(now, degree, Math.floor(pointer.x * 32), 0.42);
    playChordStab(now + 0.025, chordDegree, 0.5, bar);
    playHarmonicAnswer(now + 0.05, chordDegree, degree - chordDegree, 2, 0.5, bar, 1.1);
    hitMusicReactive("chord", 0.78);
    if (pointer.pressure > 0.35 || state.pointer > 0.65) {
      playMelodyVoice(now + 0.04, chordDegree + chordAwareDegree(degree - chordDegree + 4, chordDegree, bar), 2, true, 0.5);
    }
  }

  function playShimmer(now) {
    if (!audio || state.shimmer <= 0.02) return;
    const context = audio.context;
    const { bar, chordDegree } = activeChordContext();
    const chord = chordToneDegrees(chordDegree, bar);
    const degree = chordDegree + chord[Math.floor(Math.random() * chord.length)];
    const osc = context.createOscillator();
    const gain = context.createGain();
    const pan = context.createStereoPanner();
    const filter = context.createBiquadFilter();
    const duration = lerp(2.2, 5.6, Math.random()) * lerp(0.8, 1.2, state.trails);
    osc.type = "sine";
    osc.frequency.value = noteFrequency(degree, 2 + Math.floor(Math.random() * 2)) * lerp(0.995, 1.005, Math.random());
    filter.type = "bandpass";
    filter.frequency.value = osc.frequency.value * lerp(0.9, 1.12, Math.random());
    filter.Q.value = 4 + state.shimmer * 7;
    pan.pan.value = lerp(-state.stereo, state.stereo, Math.random());
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.018 * state.shimmer * state.audioLevel, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    osc.start(now);
    osc.stop(now + duration + 0.2);
  }

  function playPulse(now) {
    if (!audio || state.pulseMix <= 0.02) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    osc.type = "sine";
    osc.frequency.value = MOODS[state.mood].root * 0.5;
    filter.type = "lowpass";
    filter.frequency.value = 220 + state.pulseMix * 160;
    filter.Q.value = 0.8;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.04 * state.pulseMix * state.audioLevel, now + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audio.filter);
    osc.start(now);
    osc.stop(now + 1.45);
  }

  function playSequenceNote(now) {
    if (!audio || state.sequence <= 0.02) return;
    const context = audio.context;
    const scale = [1, 1.125, 1.25, 1.5, 1.667, 2, 2.25, 2.5, 3];
    const patterns = {
      fastTrance: [0, 2, 4, 7, 5, 4, 2, 7],
      deepTunnel: [0, 4, 2, 5, 1, 4, 2, 6],
      crystalSpin: [0, 3, 5, 8, 6, 5, 3, 8],
      shapeStorm: [0, 5, 2, 7, 3, 8, 4, 9],
      softFloat: [0, 2, 4, 2, 5, 4, 2, 0],
      bassPulse: [0, 0, 4, 0, 5, 0, 4, 0],
      hyperMandala: [0, 4, 7, 11, 9, 7, 4, 2],
      emergencyCalm: [0, 2, 0, 4],
    };
    const pattern = patterns[state.trip] || patterns.fastTrance;
    const step = pattern[sequenceStep % pattern.length] % scale.length;
    const octave = 1 + (sequenceStep % 3 === 0 ? 1 : 0);
    const freq = MOODS[state.mood].root * scale[step] * octave;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const duration = (60 / Math.max(45, state.tempo)) * lerp(0.42, 0.9, 1 - state.sequence);
    osc.type = state.sequence > 0.7 ? "triangle" : "sine";
    osc.frequency.value = freq;
    filter.type = "bandpass";
    filter.frequency.value = freq * lerp(0.85, 1.28, state.shimmer);
    filter.Q.value = 3 + state.sequence * 8;
    pan.pan.value = Math.sin(sequenceStep * 1.7) * state.stereo;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.018 * state.sequence * state.audioLevel, now + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    osc.start(now);
    osc.stop(now + duration + 0.06);
    sequenceStep += 1;
  }

  function playBassNote(now) {
    if (!audio || state.pulseMix <= 0.02) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const duration = (60 / Math.max(45, state.tempo)) * 1.7;
    osc.type = "sine";
    osc.frequency.value = MOODS[state.mood].root * 0.25 * (sequenceStep % 4 === 0 ? 1 : 1.5);
    filter.type = "lowpass";
    filter.frequency.value = 120 + state.pulseMix * 260;
    filter.Q.value = 0.7;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.06 * state.pulseMix * state.audioLevel, now + 0.045);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audio.filter);
    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  init();
})();
