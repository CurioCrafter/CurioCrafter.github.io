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
    "gravityWell",
    "neonReef",
    "dreamLoom",
    "signalLab",
    "crystalRain",
    "clockworkRoom",
    "voidBloom",
    "magneticInk",
    "solarHarp",
    "dataOrchard",
    "mirrorChoir",
    "tidalEngine",
    "cometRunes",
    "origamiStorm",
    "jellyfishChapel",
    "obsidianSpires",
    "tapeSpirits",
    "mothLanterns",
    "circuitShrine",
    "iceOrgan",
    "myceliumRadio",
    "thunderLoom",
    "railCathedral",
    "typewriterSeance",
    "glassLabyrinth",
    "marbleArcade",
    "diceChapel",
    "steamKitchen",
    "radioGarden",
    "stitchMachine",
    "lavaLibrary",
    "elevatorForest",
    "switchboardChoir",
    "prismCourt",
    "weatherFactory",
    "semaphoreBloom",
    "pendulumTemple",
    "neonAbacus",
    "cipherFountain",
    "orreryCathedral",
    "velvetReactor",
    "phaseArray",
    "tectonicForge",
    "paperOracle",
    "sporeSemaphore",
    "cartogramChoir",
    "quartzArchive",
  ];
  const PATTERNS_3D = ["kaleido", "vortex", "lattice", "petal", "ripple", "moire", "plasma"];
  const MUSIC_MODES = ["trance", "ambient", "pulse", "crystal", "euphoric", "polyrhythm", "glitch", "ritual", "drift", "swarm", "rain", "clockwork", "bloom", "ferro", "harp", "orchard", "choir", "tide", "comet", "fold", "jelly", "spire", "tape", "moth", "circuit", "ice", "mycelium", "storm", "rail", "typewriter", "maze", "marble", "chance", "kitchen", "radio", "stitch", "archive", "lift", "switchboard", "court", "weather", "semaphore", "pendulum", "abacus", "cipher", "orrery", "reactor", "phase", "forge", "oracle", "spore", "cartogram", "quartz"];
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
    glitch: [0, 1, 6, 2, 5, 1, 4, 2, 6, 3, 0, 5],
    ritual: [0, 0, 3, 0, 5, 3, 0, 6, 0, 4, 3, 1],
    drift: [0, 4, 2, 5, 3, 6, 4, 1, 0, 5, 2, 4],
    swarm: [0, 2, 5, 1, 6, 3, 4, 0, 5, 2, 6, 1, 3, 5, 0, 4],
    rain: [0, 2, 5, 6, 4, 1, 5, 3, 0, 4, 6, 2],
    clockwork: [0, 3, 6, 2, 5, 1, 4, 0, 6, 3, 1, 5],
    bloom: [0, 4, 6, 5, 3, 1, 4, 2, 0, 5, 6, 4],
    ferro: [0, 1, 5, 2, 6, 1, 4, 3, 0, 6, 2, 5],
    harp: [0, 4, 6, 2, 5, 3, 6, 4, 1, 5, 0, 6],
    orchard: [0, 2, 4, 1, 5, 3, 6, 2, 4, 0, 5, 1],
    choir: [0, 3, 5, 4, 1, 6, 2, 5, 0, 4, 6, 3],
    tide: [0, 0, 4, 5, 3, 1, 5, 6, 4, 2, 0, 5],
    comet: [0, 6, 2, 5, 1, 4, 6, 3, 0, 5, 2, 6],
    fold: [0, 5, 1, 6, 2, 4, 1, 5, 3, 0, 6, 2, 5, 1, 4, 0],
    jelly: [0, 4, 2, 6, 5, 3, 1, 5, 0, 2, 4, 6],
    spire: [0, 0, 1, 5, 0, 6, 1, 3, 0, 5, 2, 1],
    tape: [0, 3, 6, 1, 5, 2, 4, 6, 1, 0, 5, 3],
    moth: [0, 5, 2, 6, 4, 1, 5, 3, 0, 4, 6, 2],
    circuit: [0, 1, 6, 2, 0, 5, 3, 1, 6, 4, 2, 5, 0, 3, 1, 6],
    ice: [0, 4, 6, 5, 2, 4, 1, 5, 0, 6, 4, 2],
    mycelium: [0, 2, 0, 5, 3, 6, 1, 4, 2, 5, 0, 6, 4, 1],
    storm: [0, 6, 1, 5, 2, 6, 3, 0, 5, 1, 6, 4, 2, 6, 0, 5],
    rail: [0, 0, 4, 0, 5, 3, 0, 6, 4, 0, 2, 5, 0, 3, 6, 5],
    typewriter: [0, 1, 0, 5, 2, 0, 6, 3, 0, 4, 1, 5, 0, 2, 6, 4],
    maze: [0, 4, 1, 5, 2, 6, 3, 1, 5, 0, 6, 2, 4, 1, 3, 6],
    marble: [0, 2, 5, 0, 4, 6, 1, 5, 3, 0, 6, 2, 5, 1, 4, 6],
    chance: [0, 6, 1, 4, 2, 5, 3, 0, 6, 2, 5, 1, 4, 0, 3, 6],
    kitchen: [0, 0, 3, 5, 0, 2, 6, 4, 0, 5, 1, 3, 0, 6, 2, 5],
    radio: [0, 4, 6, 2, 5, 1, 3, 6, 0, 5, 2, 4, 1, 6, 3, 5],
    stitch: [0, 1, 0, 4, 2, 5, 1, 6, 0, 3, 5, 2, 4, 1, 6, 3],
    archive: [0, 3, 6, 2, 5, 1, 4, 6, 0, 2, 5, 3, 1, 4, 6, 2],
    lift: [0, 4, 0, 5, 1, 6, 2, 5, 0, 3, 6, 1, 4, 2, 5, 0],
    switchboard: [0, 1, 4, 0, 6, 2, 5, 1, 0, 3, 6, 2, 5, 1, 4, 0],
    court: [0, 5, 1, 4, 6, 2, 5, 3, 0, 6, 2, 5, 1, 4, 3, 6],
    weather: [0, 2, 5, 3, 6, 4, 1, 5, 0, 4, 6, 2, 5, 3, 1, 6],
    semaphore: [0, 1, 5, 2, 6, 3, 0, 4, 1, 6, 2, 5, 0, 3, 6, 1],
    pendulum: [0, 4, 0, 5, 3, 6, 2, 5, 1, 4, 0, 6, 3, 5, 2, 4],
    abacus: [0, 2, 4, 1, 6, 3, 5, 0, 4, 2, 6, 1, 5, 3, 0, 6],
    cipher: [0, 1, 4, 6, 2, 5, 1, 3, 0, 6, 2, 4, 1, 5, 3, 6],
    orrery: [0, 4, 1, 5, 2, 6, 3, 5, 0, 2, 6, 4, 1, 5, 0, 6],
    reactor: [0, 0, 6, 0, 3, 5, 0, 2, 6, 0, 4, 1, 0, 5, 3, 6],
    phase: [0, 3, 1, 5, 2, 6, 4, 1, 0, 5, 3, 6, 2, 4, 1, 5],
    forge: [0, 0, 5, 0, 1, 0, 6, 0, 3, 0, 5, 0, 2, 0, 6, 0],
    oracle: [0, 4, 2, 6, 1, 5, 3, 6, 0, 3, 5, 1, 4, 2, 6, 0],
    spore: [0, 2, 0, 5, 1, 4, 6, 2, 0, 3, 5, 1, 6, 4, 2, 5],
    cartogram: [0, 4, 1, 6, 2, 5, 3, 0, 5, 1, 4, 6, 2, 0, 3, 5],
    quartz: [0, 4, 6, 2, 5, 1, 3, 6, 0, 5, 2, 4, 1, 6, 3, 0],
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
    glitch: [
      [0, 1, 4, 6, 8],
      [0, 2, 3, 6, 9],
      [0, 1, 5, 6, 10],
      [0, 3, 4, 7, 8],
    ],
    ritual: [
      [0, 2, 3, 5, 7],
      [0, 1, 3, 5, 8],
      [0, 2, 4, 5, 7],
      [0, 3, 5, 6, 8],
    ],
    drift: [
      [0, 2, 4, 6, 9, 11],
      [0, 1, 4, 6, 8, 10],
      [0, 2, 5, 6, 9, 11],
      [0, 3, 4, 7, 9, 10],
    ],
    swarm: [
      [0, 2, 4, 5, 8, 10],
      [0, 1, 4, 6, 9],
      [0, 3, 5, 6, 8, 11],
      [0, 2, 3, 6, 8, 10],
    ],
    rain: [
      [0, 2, 4, 6, 11],
      [0, 3, 5, 6, 9],
      [0, 2, 5, 7, 10],
      [0, 1, 4, 6, 8],
    ],
    clockwork: [
      [0, 2, 3, 6, 8],
      [0, 1, 4, 7, 9],
      [0, 3, 5, 6, 10],
      [0, 2, 4, 5, 8],
    ],
    bloom: [
      [0, 2, 4, 6, 8, 11],
      [0, 3, 4, 6, 9, 10],
      [0, 1, 4, 5, 8, 11],
      [0, 2, 5, 6, 9, 10],
    ],
    ferro: [
      [0, 1, 3, 6, 8, 11],
      [0, 2, 5, 6, 9, 10],
      [0, 1, 4, 7, 8, 11],
      [0, 3, 4, 6, 10, 12],
    ],
    harp: [
      [0, 2, 4, 6, 9, 11],
      [0, 2, 5, 7, 10, 12],
      [0, 3, 4, 6, 8, 11],
      [0, 1, 4, 6, 9, 13],
    ],
    orchard: [
      [0, 2, 4, 7, 9],
      [0, 3, 5, 7, 10],
      [0, 2, 5, 8, 9],
      [0, 4, 5, 7, 11],
    ],
    choir: [
      [0, 2, 4, 5, 7, 9, 11],
      [0, 1, 3, 5, 8, 10],
      [0, 2, 4, 6, 8, 10],
      [0, 3, 4, 5, 9, 12],
    ],
    tide: [
      [0, 2, 4, 6, 8],
      [0, 3, 5, 7, 9],
      [0, 2, 5, 6, 10],
      [0, 1, 4, 6, 9],
    ],
    comet: [
      [0, 1, 4, 6, 11],
      [0, 2, 5, 8, 10],
      [0, 3, 6, 7, 12],
      [0, 1, 5, 9, 13],
    ],
    fold: [
      [0, 1, 4, 7, 11],
      [0, 2, 5, 6, 9],
      [0, 3, 4, 8, 12],
      [0, 1, 6, 9, 10],
    ],
    jelly: [
      [0, 2, 4, 6, 8, 11],
      [0, 3, 5, 7, 9, 12],
      [0, 2, 5, 8, 10],
      [0, 4, 6, 9, 11],
    ],
    spire: [
      [0, 1, 5, 7, 12],
      [0, 3, 6, 8, 11],
      [0, 1, 4, 6, 10],
      [0, 2, 5, 6, 13],
    ],
    tape: [
      [0, 2, 3, 7, 8],
      [0, 1, 5, 6, 10],
      [0, 4, 5, 9, 11],
      [0, 2, 6, 7, 12],
    ],
    moth: [
      [0, 2, 5, 7, 10],
      [0, 1, 4, 8, 11],
      [0, 3, 5, 9, 12],
      [0, 2, 6, 8, 13],
    ],
    circuit: [
      [0, 1, 4, 6, 9],
      [0, 2, 3, 7, 10],
      [0, 1, 5, 8, 11],
      [0, 3, 6, 9, 12],
    ],
    ice: [
      [0, 2, 4, 6, 11, 14],
      [0, 3, 5, 7, 12],
      [0, 1, 4, 8, 10, 13],
      [0, 2, 5, 9, 11],
    ],
    mycelium: [
      [0, 2, 3, 5, 9, 12],
      [0, 1, 4, 7, 10],
      [0, 3, 5, 8, 11, 14],
      [0, 2, 5, 7, 9],
    ],
    storm: [
      [0, 1, 5, 6, 10, 13],
      [0, 3, 4, 8, 11],
      [0, 2, 6, 7, 12],
      [0, 1, 4, 9, 13],
    ],
    rail: [
      [0, 2, 4, 5, 7, 10],
      [0, 1, 4, 6, 8],
      [0, 3, 5, 7, 11],
      [0, 2, 5, 6, 9],
    ],
    typewriter: [
      [0, 1, 4, 5, 8],
      [0, 2, 3, 6, 9],
      [0, 1, 5, 7, 10],
      [0, 3, 4, 6, 11],
    ],
    maze: [
      [0, 2, 4, 7, 11],
      [0, 1, 5, 8, 10],
      [0, 3, 5, 6, 12],
      [0, 2, 6, 9, 13],
    ],
    marble: [
      [0, 2, 5, 7, 9],
      [0, 3, 4, 8, 11],
      [0, 1, 5, 6, 10],
      [0, 2, 4, 6, 12],
    ],
    chance: [
      [0, 1, 5, 6, 10, 12],
      [0, 3, 4, 8, 11],
      [0, 2, 6, 9, 13],
      [0, 1, 4, 7, 10],
    ],
    kitchen: [
      [0, 2, 3, 5, 9],
      [0, 1, 4, 6, 8],
      [0, 3, 5, 7, 11],
      [0, 2, 5, 6, 10],
    ],
    radio: [
      [0, 2, 6, 8, 13],
      [0, 4, 5, 9, 11],
      [0, 1, 5, 7, 12],
      [0, 3, 6, 10, 14],
    ],
    stitch: [
      [0, 1, 4, 6, 9],
      [0, 2, 3, 7, 10],
      [0, 1, 5, 8, 11],
      [0, 3, 4, 6, 12],
    ],
    archive: [
      [0, 2, 5, 7, 11, 14],
      [0, 1, 4, 8, 10],
      [0, 3, 5, 9, 12],
      [0, 2, 6, 8, 13],
    ],
    lift: [
      [0, 2, 4, 7, 12],
      [0, 3, 5, 8, 11],
      [0, 1, 4, 6, 10],
      [0, 2, 5, 9, 14],
    ],
    switchboard: [
      [0, 1, 4, 6, 9, 12],
      [0, 2, 3, 7, 10],
      [0, 1, 5, 8, 11],
      [0, 3, 4, 6, 10],
    ],
    court: [
      [0, 1, 5, 7, 12],
      [0, 3, 6, 8, 11],
      [0, 2, 4, 7, 10, 14],
      [0, 1, 4, 6, 9],
    ],
    weather: [
      [0, 2, 5, 7, 11],
      [0, 3, 4, 8, 12],
      [0, 1, 5, 9, 13],
      [0, 2, 6, 8, 10],
    ],
    semaphore: [
      [0, 1, 5, 7, 10],
      [0, 2, 4, 6, 11],
      [0, 1, 3, 8, 12],
      [0, 4, 6, 9, 13],
    ],
    pendulum: [
      [0, 2, 4, 7, 12],
      [0, 3, 5, 8, 10],
      [0, 1, 4, 6, 11],
      [0, 2, 5, 9, 14],
    ],
    abacus: [
      [0, 1, 4, 6, 8, 11],
      [0, 2, 5, 7, 9, 12],
      [0, 3, 4, 8, 10, 13],
      [0, 1, 5, 6, 9, 14],
    ],
    cipher: [
      [0, 1, 4, 6, 10, 13],
      [0, 2, 3, 7, 11],
      [0, 1, 5, 8, 12],
      [0, 3, 6, 9, 14],
    ],
    orrery: [
      [0, 2, 4, 7, 11, 14],
      [0, 3, 5, 8, 12],
      [0, 1, 4, 6, 9, 13],
      [0, 2, 5, 10, 12],
    ],
    reactor: [
      [0, 1, 5, 6, 10, 12],
      [0, 3, 4, 8, 11],
      [0, 2, 6, 7, 13],
      [0, 1, 4, 9, 14],
    ],
    phase: [
      [0, 1, 4, 7, 11, 15],
      [0, 3, 5, 8, 12],
      [0, 2, 6, 9, 13],
      [0, 1, 5, 10, 14],
    ],
    forge: [
      [0, 1, 5, 6, 12],
      [0, 3, 4, 7, 11],
      [0, 2, 6, 8, 13],
      [0, 1, 4, 9, 12],
    ],
    oracle: [
      [0, 2, 4, 7, 11, 14],
      [0, 1, 5, 8, 12],
      [0, 3, 4, 6, 10, 13],
      [0, 2, 5, 9, 11],
    ],
    spore: [
      [0, 1, 3, 5, 8, 12],
      [0, 2, 4, 6, 9],
      [0, 1, 5, 7, 10, 13],
      [0, 3, 4, 8, 11],
    ],
    cartogram: [
      [0, 2, 6, 9, 13],
      [0, 4, 5, 10, 12],
      [0, 1, 7, 11, 14],
      [0, 3, 6, 8, 15],
    ],
    quartz: [
      [0, 2, 4, 7, 11, 16],
      [0, 1, 5, 9, 12, 14],
      [0, 3, 6, 10, 13, 17],
      [0, 2, 5, 8, 11, 15],
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
    gravityWell: {
      label: "Gravity Well",
      mode: "tunnel",
      view3d: "gravityWell",
      mood: "deep",
      collection: "deepfield",
      intensity: 0.98,
      speed: 1.08,
      density: 1.18,
      trails: 0.86,
      symmetry: 13,
      glow: 1.22,
      colorShift: 0.58,
      pulse: 0.88,
      orbit: 1.55,
      warp: 1.16,
      pointer: 0.78,
      breath: 0.42,
      depth: 1,
      camera: 0.9,
      tunnel: 1.36,
      spin: 1.06,
      fieldSpread: 1.42,
      density3d: 1.18,
      wireGlow: 1.22,
      perspectiveWarp: 0.96,
      morph: 0.86,
      interaction: 1.08,
      connectivity: 0.82,
      tempo: 108,
      sequence: 0.82,
      audioLevel: 0.64,
      drone: 0.82,
      shimmer: 0.52,
      pulseMix: 0.92,
      stereo: 0.72,
      autoEvolve: true,
    },
    neonReef: {
      label: "Neon Reef",
      mode: "chrysalis",
      view3d: "neonReef",
      mood: "garden",
      collection: "ocean",
      intensity: 0.84,
      speed: 0.74,
      density: 1.08,
      trails: 0.72,
      symmetry: 9,
      glow: 1.08,
      colorShift: 0.72,
      pulse: 0.58,
      orbit: 1.1,
      warp: 0.46,
      pointer: 0.92,
      breath: 0.94,
      depth: 0.7,
      camera: 0.46,
      tunnel: 0.34,
      spin: 0.62,
      fieldSpread: 1.12,
      density3d: 1.08,
      wireGlow: 1.18,
      perspectiveWarp: 0.42,
      morph: 1.22,
      interaction: 1.26,
      connectivity: 0.66,
      tempo: 88,
      sequence: 0.62,
      audioLevel: 0.54,
      drone: 0.76,
      shimmer: 0.78,
      pulseMix: 0.34,
      stereo: 0.86,
      autoEvolve: true,
    },
    dreamLoom: {
      label: "Dream Loom",
      mode: "veil",
      view3d: "dreamLoom",
      mood: "violet",
      collection: "nebula",
      intensity: 0.76,
      speed: 0.62,
      density: 0.92,
      trails: 0.88,
      symmetry: 11,
      glow: 0.96,
      colorShift: 0.84,
      pulse: 0.36,
      orbit: 0.88,
      warp: 0.74,
      pointer: 0.48,
      breath: 0.88,
      depth: 0.82,
      camera: 0.52,
      tunnel: 0.42,
      spin: 0.38,
      fieldSpread: 1.28,
      density3d: 0.88,
      wireGlow: 1.0,
      perspectiveWarp: 0.7,
      morph: 1.34,
      interaction: 0.78,
      connectivity: 1.08,
      tempo: 72,
      sequence: 0.58,
      audioLevel: 0.48,
      drone: 0.9,
      shimmer: 0.86,
      pulseMix: 0.18,
      stereo: 0.96,
      autoEvolve: true,
    },
    signalLab: {
      label: "Signal Lab",
      mode: "lattice",
      view3d: "signalLab",
      mood: "infrared",
      collection: "solar",
      intensity: 0.9,
      speed: 1.36,
      density: 1.12,
      trails: 0.48,
      symmetry: 7,
      glow: 1.18,
      colorShift: 0.34,
      pulse: 0.82,
      orbit: 1.22,
      warp: 1.08,
      pointer: 0.72,
      breath: 0.28,
      depth: 0.62,
      camera: 0.68,
      tunnel: 0.92,
      spin: 1.32,
      fieldSpread: 1.2,
      density3d: 1.08,
      wireGlow: 1.48,
      perspectiveWarp: 0.88,
      morph: 0.58,
      interaction: 0.96,
      connectivity: 1.18,
      tempo: 141,
      sequence: 0.94,
      audioLevel: 0.62,
      drone: 0.36,
      shimmer: 0.62,
      pulseMix: 0.72,
      stereo: 0.92,
      autoEvolve: true,
    },
    crystalRain: {
      label: "Crystal Rain",
      mode: "veil",
      view3d: "crystalRain",
      mood: "moon",
      collection: "stars",
      intensity: 0.78,
      speed: 0.86,
      density: 0.82,
      trails: 0.74,
      symmetry: 8,
      glow: 1.1,
      colorShift: 0.46,
      pulse: 0.44,
      orbit: 0.72,
      warp: 0.34,
      pointer: 0.58,
      breath: 0.64,
      depth: 0.72,
      camera: 0.4,
      tunnel: 0.72,
      spin: 0.44,
      fieldSpread: 0.86,
      density3d: 0.96,
      wireGlow: 1.26,
      perspectiveWarp: 0.34,
      morph: 0.72,
      interaction: 0.82,
      connectivity: 0.52,
      tempo: 94,
      sequence: 0.64,
      audioLevel: 0.5,
      drone: 0.72,
      shimmer: 0.94,
      pulseMix: 0.22,
      stereo: 0.9,
      autoEvolve: true,
    },
    clockworkRoom: {
      label: "Clockwork Room",
      mode: "lattice",
      view3d: "clockworkRoom",
      mood: "ember",
      collection: "saturn",
      intensity: 0.86,
      speed: 1.08,
      density: 0.96,
      trails: 0.5,
      symmetry: 12,
      glow: 0.92,
      colorShift: 0.22,
      pulse: 0.62,
      orbit: 0.96,
      warp: 0.58,
      pointer: 0.46,
      breath: 0.18,
      depth: 0.66,
      camera: 0.56,
      tunnel: 0.46,
      spin: 0.86,
      fieldSpread: 1.08,
      density3d: 0.9,
      wireGlow: 0.96,
      perspectiveWarp: 0.52,
      morph: 0.36,
      interaction: 0.54,
      connectivity: 1.12,
      tempo: 128,
      sequence: 0.88,
      audioLevel: 0.56,
      drone: 0.34,
      shimmer: 0.36,
      pulseMix: 0.62,
      stereo: 0.72,
      autoEvolve: true,
    },
    voidBloom: {
      label: "Void Bloom",
      mode: "rose",
      view3d: "voidBloom",
      mood: "violet",
      collection: "deepfield",
      intensity: 0.9,
      speed: 0.54,
      density: 1.04,
      trails: 0.84,
      symmetry: 17,
      glow: 1.22,
      colorShift: 0.88,
      pulse: 0.76,
      orbit: 1.08,
      warp: 0.82,
      pointer: 0.74,
      breath: 0.96,
      depth: 0.88,
      camera: 0.64,
      tunnel: 0.38,
      spin: 0.5,
      fieldSpread: 1.18,
      density3d: 1.08,
      wireGlow: 1.28,
      perspectiveWarp: 0.76,
      morph: 1.38,
      interaction: 1.14,
      connectivity: 0.72,
      tempo: 76,
      sequence: 0.58,
      audioLevel: 0.54,
      drone: 0.88,
      shimmer: 0.72,
      pulseMix: 0.38,
      stereo: 0.94,
      autoEvolve: true,
    },
    magneticInk: {
      label: "Magnetic Ink",
      mode: "waveform",
      view3d: "magneticInk",
      mood: "deep",
      collection: "deepfield",
      intensity: 0.94,
      speed: 1.02,
      density: 1.08,
      trails: 0.68,
      symmetry: 11,
      glow: 1.26,
      colorShift: 0.76,
      pulse: 0.88,
      orbit: 1.18,
      warp: 1.16,
      pointer: 0.88,
      breath: 0.36,
      depth: 0.9,
      camera: 0.72,
      tunnel: 0.78,
      spin: 1.22,
      fieldSpread: 1.12,
      density3d: 1.14,
      wireGlow: 1.48,
      perspectiveWarp: 0.94,
      morph: 1.18,
      interaction: 1.26,
      connectivity: 1.04,
      tempo: 118,
      sequence: 0.86,
      audioLevel: 0.56,
      drone: 0.48,
      shimmer: 0.52,
      pulseMix: 0.66,
      stereo: 0.92,
      autoEvolve: true,
    },
    solarHarp: {
      label: "Solar Harp",
      mode: "veil",
      view3d: "solarHarp",
      mood: "ember",
      collection: "solar",
      intensity: 0.88,
      speed: 0.78,
      density: 0.82,
      trails: 0.58,
      symmetry: 9,
      glow: 1.34,
      colorShift: 0.28,
      pulse: 0.5,
      orbit: 0.86,
      warp: 0.42,
      pointer: 0.62,
      breath: 0.72,
      depth: 0.72,
      camera: 0.46,
      tunnel: 0.42,
      spin: 0.42,
      fieldSpread: 0.94,
      density3d: 0.92,
      wireGlow: 1.44,
      perspectiveWarp: 0.4,
      morph: 0.76,
      interaction: 0.72,
      connectivity: 0.58,
      tempo: 102,
      sequence: 0.72,
      audioLevel: 0.52,
      drone: 0.68,
      shimmer: 0.96,
      pulseMix: 0.24,
      stereo: 0.96,
      autoEvolve: true,
    },
    dataOrchard: {
      label: "Data Orchard",
      mode: "chrysalis",
      view3d: "dataOrchard",
      mood: "garden",
      collection: "vegetation",
      intensity: 0.78,
      speed: 0.64,
      density: 0.92,
      trails: 0.7,
      symmetry: 13,
      glow: 1.02,
      colorShift: 0.58,
      pulse: 0.62,
      orbit: 0.76,
      warp: 0.54,
      pointer: 0.82,
      breath: 0.84,
      depth: 0.82,
      camera: 0.58,
      tunnel: 0.32,
      spin: 0.38,
      fieldSpread: 1.08,
      density3d: 1.02,
      wireGlow: 1.12,
      perspectiveWarp: 0.56,
      morph: 1.1,
      interaction: 1.0,
      connectivity: 1.22,
      tempo: 86,
      sequence: 0.66,
      audioLevel: 0.5,
      drone: 0.76,
      shimmer: 0.68,
      pulseMix: 0.34,
      stereo: 0.84,
      autoEvolve: true,
    },
    mirrorChoir: {
      label: "Mirror Choir",
      mode: "metatron",
      view3d: "mirrorChoir",
      mood: "prism",
      collection: "galaxy",
      intensity: 0.84,
      speed: 0.52,
      density: 0.76,
      trails: 0.82,
      symmetry: 16,
      glow: 1.28,
      colorShift: 0.64,
      pulse: 0.48,
      orbit: 0.92,
      warp: 0.74,
      pointer: 0.68,
      breath: 0.9,
      depth: 0.82,
      camera: 0.52,
      tunnel: 0.24,
      spin: 0.28,
      fieldSpread: 1.02,
      density3d: 0.92,
      wireGlow: 1.32,
      perspectiveWarp: 0.72,
      morph: 1.2,
      interaction: 0.76,
      connectivity: 0.7,
      tempo: 68,
      sequence: 0.58,
      audioLevel: 0.5,
      drone: 0.92,
      shimmer: 0.76,
      pulseMix: 0.18,
      stereo: 0.96,
      autoEvolve: true,
    },
    tidalEngine: {
      label: "Tidal Engine",
      mode: "waveform",
      view3d: "tidalEngine",
      mood: "deep",
      collection: "ocean",
      intensity: 0.82,
      speed: 0.74,
      density: 0.9,
      trails: 0.76,
      symmetry: 10,
      glow: 1.08,
      colorShift: 0.42,
      pulse: 0.72,
      orbit: 0.8,
      warp: 0.66,
      pointer: 0.86,
      breath: 0.88,
      depth: 0.9,
      camera: 0.6,
      tunnel: 0.56,
      spin: 0.5,
      fieldSpread: 1.16,
      density3d: 1.0,
      wireGlow: 1.1,
      perspectiveWarp: 0.68,
      morph: 1.02,
      interaction: 1.08,
      connectivity: 0.74,
      tempo: 82,
      sequence: 0.7,
      audioLevel: 0.54,
      drone: 0.78,
      shimmer: 0.5,
      pulseMix: 0.52,
      stereo: 0.82,
      autoEvolve: true,
    },
    cometRunes: {
      label: "Comet Runes",
      mode: "lattice",
      view3d: "cometRunes",
      mood: "aurora",
      collection: "stars",
      intensity: 0.94,
      speed: 1.26,
      density: 0.98,
      trails: 0.62,
      symmetry: 7,
      glow: 1.42,
      colorShift: 0.82,
      pulse: 0.86,
      orbit: 1.28,
      warp: 1.0,
      pointer: 0.78,
      breath: 0.34,
      depth: 0.94,
      camera: 0.78,
      tunnel: 1.08,
      spin: 1.12,
      fieldSpread: 1.22,
      density3d: 1.08,
      wireGlow: 1.5,
      perspectiveWarp: 0.9,
      morph: 0.72,
      interaction: 1.16,
      connectivity: 1.04,
      tempo: 136,
      sequence: 0.92,
      audioLevel: 0.58,
      drone: 0.34,
      shimmer: 0.88,
      pulseMix: 0.58,
      stereo: 0.92,
      autoEvolve: true,
    },
    origamiStorm: {
      label: "Origami Storm",
      mode: "rose",
      view3d: "origamiStorm",
      mood: "moon",
      collection: "stars",
      intensity: 0.9,
      speed: 1.18,
      density: 1.06,
      trails: 0.72,
      symmetry: 14,
      glow: 1.18,
      colorShift: 0.78,
      pulse: 0.72,
      orbit: 1.08,
      warp: 0.96,
      pointer: 0.82,
      breath: 0.62,
      depth: 0.82,
      camera: 0.74,
      tunnel: 0.6,
      spin: 1.24,
      fieldSpread: 1.18,
      density3d: 1.12,
      wireGlow: 1.24,
      perspectiveWarp: 0.84,
      morph: 1.32,
      interaction: 1.08,
      connectivity: 0.68,
      tempo: 118,
      sequence: 0.88,
      audioLevel: 0.56,
      drone: 0.3,
      shimmer: 0.72,
      pulseMix: 0.56,
      stereo: 0.94,
      autoEvolve: true,
    },
    jellyfishChapel: {
      label: "Jellyfish Chapel",
      mode: "veil",
      view3d: "jellyfishChapel",
      mood: "aurora",
      collection: "ocean",
      intensity: 0.72,
      speed: 0.46,
      density: 0.82,
      trails: 0.86,
      symmetry: 11,
      glow: 1.16,
      colorShift: 0.58,
      pulse: 0.42,
      orbit: 0.7,
      warp: 0.48,
      pointer: 0.64,
      breath: 1.0,
      depth: 0.86,
      camera: 0.4,
      tunnel: 0.24,
      spin: 0.22,
      fieldSpread: 1.0,
      density3d: 0.86,
      wireGlow: 1.18,
      perspectiveWarp: 0.52,
      morph: 1.22,
      interaction: 0.9,
      connectivity: 0.48,
      tempo: 58,
      sequence: 0.46,
      audioLevel: 0.48,
      drone: 0.94,
      shimmer: 0.86,
      pulseMix: 0.14,
      stereo: 0.98,
      autoEvolve: true,
    },
    obsidianSpires: {
      label: "Obsidian Spires",
      mode: "metatron",
      view3d: "obsidianSpires",
      mood: "ember",
      collection: "deepfield",
      intensity: 0.92,
      speed: 0.72,
      density: 0.92,
      trails: 0.5,
      symmetry: 8,
      glow: 1.34,
      colorShift: 0.22,
      pulse: 0.82,
      orbit: 0.8,
      warp: 0.7,
      pointer: 0.5,
      breath: 0.26,
      depth: 1,
      camera: 0.62,
      tunnel: 0.74,
      spin: 0.38,
      fieldSpread: 1.1,
      density3d: 0.9,
      wireGlow: 1.48,
      perspectiveWarp: 0.76,
      morph: 0.62,
      interaction: 0.72,
      connectivity: 1.02,
      tempo: 72,
      sequence: 0.66,
      audioLevel: 0.6,
      drone: 0.9,
      shimmer: 0.34,
      pulseMix: 0.86,
      stereo: 0.62,
      autoEvolve: true,
    },
    tapeSpirits: {
      label: "Tape Spirits",
      mode: "waveform",
      view3d: "tapeSpirits",
      mood: "violet",
      collection: "nebula",
      intensity: 0.8,
      speed: 0.94,
      density: 1.0,
      trails: 0.9,
      symmetry: 9,
      glow: 1.04,
      colorShift: 0.9,
      pulse: 0.58,
      orbit: 1.18,
      warp: 1.08,
      pointer: 0.88,
      breath: 0.74,
      depth: 0.88,
      camera: 0.68,
      tunnel: 0.5,
      spin: 0.86,
      fieldSpread: 1.24,
      density3d: 0.96,
      wireGlow: 1.18,
      perspectiveWarp: 1.02,
      morph: 1.08,
      interaction: 1.22,
      connectivity: 0.82,
      tempo: 96,
      sequence: 0.78,
      audioLevel: 0.52,
      drone: 0.62,
      shimmer: 0.48,
      pulseMix: 0.5,
      stereo: 1,
      autoEvolve: true,
    },
    mothLanterns: {
      label: "Moth Lanterns",
      mode: "orbit",
      view3d: "mothLanterns",
      mood: "garden",
      collection: "vegetation",
      intensity: 0.82,
      speed: 1.08,
      density: 0.88,
      trails: 0.78,
      symmetry: 12,
      glow: 1.38,
      colorShift: 0.52,
      pulse: 0.74,
      orbit: 1.3,
      warp: 0.7,
      pointer: 0.9,
      breath: 0.78,
      depth: 0.76,
      camera: 0.58,
      tunnel: 0.36,
      spin: 1.16,
      fieldSpread: 1.05,
      density3d: 0.96,
      wireGlow: 1.48,
      perspectiveWarp: 0.62,
      morph: 1.28,
      interaction: 1.3,
      connectivity: 0.58,
      tempo: 112,
      sequence: 0.82,
      audioLevel: 0.52,
      drone: 0.58,
      shimmer: 0.88,
      pulseMix: 0.38,
      stereo: 0.98,
      autoEvolve: true,
    },
    circuitShrine: {
      label: "Circuit Shrine",
      mode: "lattice",
      view3d: "circuitShrine",
      mood: "infrared",
      collection: "solar",
      intensity: 0.94,
      speed: 1.42,
      density: 1.12,
      trails: 0.46,
      symmetry: 8,
      glow: 1.24,
      colorShift: 0.36,
      pulse: 0.86,
      orbit: 0.8,
      warp: 0.92,
      pointer: 0.62,
      breath: 0.22,
      depth: 0.78,
      camera: 0.7,
      tunnel: 0.82,
      spin: 0.52,
      fieldSpread: 1.16,
      density3d: 1.08,
      wireGlow: 1.52,
      perspectiveWarp: 0.84,
      morph: 0.66,
      interaction: 0.88,
      connectivity: 1.34,
      tempo: 144,
      sequence: 0.94,
      audioLevel: 0.58,
      drone: 0.28,
      shimmer: 0.52,
      pulseMix: 0.74,
      stereo: 0.86,
      autoEvolve: true,
    },
    iceOrgan: {
      label: "Ice Organ",
      mode: "metatron",
      view3d: "iceOrgan",
      mood: "moon",
      collection: "stars",
      intensity: 0.76,
      speed: 0.34,
      density: 0.74,
      trails: 0.64,
      symmetry: 10,
      glow: 1.22,
      colorShift: 0.18,
      pulse: 0.36,
      orbit: 0.58,
      warp: 0.5,
      pointer: 0.48,
      breath: 0.68,
      depth: 0.92,
      camera: 0.42,
      tunnel: 0.32,
      spin: 0.18,
      fieldSpread: 0.92,
      density3d: 0.78,
      wireGlow: 1.34,
      perspectiveWarp: 0.54,
      morph: 0.84,
      interaction: 0.6,
      connectivity: 0.72,
      tempo: 54,
      sequence: 0.42,
      audioLevel: 0.48,
      drone: 0.96,
      shimmer: 0.9,
      pulseMix: 0.16,
      stereo: 0.9,
      autoEvolve: true,
    },
    myceliumRadio: {
      label: "Mycelium Radio",
      mode: "chrysalis",
      view3d: "myceliumRadio",
      mood: "garden",
      collection: "vegetation",
      intensity: 0.78,
      speed: 0.68,
      density: 1.04,
      trails: 0.76,
      symmetry: 13,
      glow: 1.3,
      colorShift: 0.62,
      pulse: 0.52,
      orbit: 0.66,
      warp: 0.86,
      pointer: 0.78,
      breath: 1.08,
      depth: 0.84,
      camera: 0.52,
      tunnel: 0.28,
      spin: 0.34,
      fieldSpread: 1.08,
      density3d: 1.12,
      wireGlow: 1.42,
      perspectiveWarp: 0.74,
      morph: 1.34,
      interaction: 1.12,
      connectivity: 1.18,
      tempo: 86,
      sequence: 0.68,
      audioLevel: 0.52,
      drone: 0.72,
      shimmer: 0.7,
      pulseMix: 0.36,
      stereo: 0.96,
      autoEvolve: true,
    },
    thunderLoom: {
      label: "Thunder Loom",
      mode: "waveform",
      view3d: "thunderLoom",
      mood: "moon",
      collection: "clouds",
      intensity: 0.9,
      speed: 1.18,
      density: 0.98,
      trails: 0.5,
      symmetry: 7,
      glow: 1.48,
      colorShift: 0.2,
      pulse: 0.9,
      orbit: 0.64,
      warp: 1.14,
      pointer: 0.68,
      breath: 0.48,
      depth: 0.92,
      camera: 0.74,
      tunnel: 0.78,
      spin: 0.5,
      fieldSpread: 1.12,
      density3d: 0.94,
      wireGlow: 1.62,
      perspectiveWarp: 1.08,
      morph: 1.1,
      interaction: 0.96,
      connectivity: 1.24,
      tempo: 126,
      sequence: 0.82,
      audioLevel: 0.58,
      drone: 0.58,
      shimmer: 0.82,
      pulseMix: 0.64,
      stereo: 0.92,
      autoEvolve: true,
    },
    railCathedral: {
      label: "Rail Cathedral",
      mode: "tunnel",
      view3d: "railCathedral",
      mood: "ember",
      collection: "mars",
      intensity: 0.86,
      speed: 1.34,
      density: 0.92,
      trails: 0.6,
      symmetry: 9,
      glow: 1.18,
      colorShift: 0.44,
      pulse: 0.78,
      orbit: 0.72,
      warp: 0.62,
      pointer: 0.54,
      breath: 0.24,
      depth: 0.98,
      camera: 0.82,
      tunnel: 1.08,
      spin: 0.42,
      fieldSpread: 1.0,
      density3d: 0.88,
      wireGlow: 1.36,
      perspectiveWarp: 0.7,
      morph: 0.58,
      interaction: 0.72,
      connectivity: 1.08,
      tempo: 132,
      sequence: 0.9,
      audioLevel: 0.56,
      drone: 0.36,
      shimmer: 0.34,
      pulseMix: 0.82,
      stereo: 0.72,
      autoEvolve: true,
    },
    typewriterSeance: {
      label: "Typewriter Seance",
      mode: "waveform",
      view3d: "typewriterSeance",
      mood: "violet",
      collection: "nebula",
      intensity: 0.82,
      speed: 0.92,
      density: 0.9,
      trails: 0.54,
      symmetry: 11,
      glow: 1.16,
      colorShift: 0.86,
      pulse: 0.62,
      orbit: 0.76,
      warp: 0.88,
      pointer: 0.72,
      breath: 0.42,
      depth: 0.82,
      camera: 0.58,
      tunnel: 0.42,
      spin: 0.34,
      fieldSpread: 1.06,
      density3d: 0.92,
      wireGlow: 1.28,
      perspectiveWarp: 0.74,
      morph: 0.94,
      interaction: 0.9,
      connectivity: 0.9,
      tempo: 118,
      sequence: 0.86,
      audioLevel: 0.54,
      drone: 0.38,
      shimmer: 0.5,
      pulseMix: 0.58,
      stereo: 0.86,
      autoEvolve: true,
    },
    glassLabyrinth: {
      label: "Glass Labyrinth",
      mode: "lattice",
      view3d: "glassLabyrinth",
      mood: "prism",
      collection: "galaxy",
      intensity: 0.78,
      speed: 0.54,
      density: 0.86,
      trails: 0.7,
      symmetry: 10,
      glow: 1.34,
      colorShift: 0.44,
      pulse: 0.46,
      orbit: 0.62,
      warp: 0.82,
      pointer: 0.58,
      breath: 0.58,
      depth: 0.9,
      camera: 0.54,
      tunnel: 0.36,
      spin: 0.22,
      fieldSpread: 0.96,
      density3d: 0.82,
      wireGlow: 1.44,
      perspectiveWarp: 0.92,
      morph: 0.78,
      interaction: 0.78,
      connectivity: 1.16,
      tempo: 74,
      sequence: 0.64,
      audioLevel: 0.5,
      drone: 0.76,
      shimmer: 0.82,
      pulseMix: 0.28,
      stereo: 0.98,
      autoEvolve: true,
    },
    marbleArcade: {
      label: "Marble Arcade",
      mode: "orbit",
      view3d: "marbleArcade",
      mood: "aurora",
      collection: "saturn",
      intensity: 0.88,
      speed: 1.2,
      density: 1.0,
      trails: 0.68,
      symmetry: 14,
      glow: 1.32,
      colorShift: 0.56,
      pulse: 0.84,
      orbit: 1.18,
      warp: 0.7,
      pointer: 0.76,
      breath: 0.36,
      depth: 0.78,
      camera: 0.66,
      tunnel: 0.62,
      spin: 0.92,
      fieldSpread: 1.12,
      density3d: 1.0,
      wireGlow: 1.38,
      perspectiveWarp: 0.68,
      morph: 1.04,
      interaction: 1.02,
      connectivity: 0.82,
      tempo: 138,
      sequence: 0.9,
      audioLevel: 0.54,
      drone: 0.28,
      shimmer: 0.72,
      pulseMix: 0.5,
      stereo: 0.96,
      autoEvolve: true,
    },
    diceChapel: {
      label: "Dice Chapel",
      mode: "kaleidoscope",
      view3d: "diceChapel",
      mood: "prism",
      collection: "galaxy",
      intensity: 0.9,
      speed: 0.82,
      density: 0.95,
      trails: 0.72,
      symmetry: 12,
      glow: 1.42,
      colorShift: 0.72,
      pulse: 0.72,
      orbit: 1.05,
      warp: 0.9,
      pointer: 0.74,
      breath: 0.44,
      depth: 0.82,
      camera: 0.72,
      tunnel: 0.44,
      spin: 0.78,
      fieldSpread: 1.08,
      density3d: 0.96,
      wireGlow: 1.46,
      perspectiveWarp: 0.9,
      morph: 0.88,
      interaction: 0.92,
      connectivity: 0.98,
      tempo: 126,
      sequence: 0.86,
      audioLevel: 0.54,
      drone: 0.34,
      shimmer: 0.72,
      pulseMix: 0.54,
      stereo: 0.98,
      autoEvolve: true,
    },
    steamKitchen: {
      label: "Steam Kitchen",
      mode: "waveform",
      view3d: "steamKitchen",
      mood: "ember",
      collection: "nebula",
      intensity: 0.94,
      speed: 0.74,
      density: 0.92,
      trails: 0.76,
      symmetry: 9,
      glow: 1.38,
      colorShift: 0.52,
      pulse: 0.66,
      orbit: 0.72,
      warp: 0.62,
      pointer: 0.7,
      breath: 0.8,
      depth: 0.74,
      camera: 0.56,
      tunnel: 0.32,
      spin: 0.38,
      fieldSpread: 1.02,
      density3d: 0.96,
      wireGlow: 1.48,
      perspectiveWarp: 0.58,
      morph: 1.02,
      interaction: 0.86,
      connectivity: 0.74,
      tempo: 104,
      sequence: 0.76,
      audioLevel: 0.54,
      drone: 0.54,
      shimmer: 0.58,
      pulseMix: 0.64,
      stereo: 0.8,
      autoEvolve: true,
    },
    radioGarden: {
      label: "Radio Garden",
      mode: "metatron",
      view3d: "radioGarden",
      mood: "deep",
      collection: "stars",
      intensity: 0.9,
      speed: 0.62,
      density: 0.84,
      trails: 0.82,
      symmetry: 16,
      glow: 1.54,
      colorShift: 0.6,
      pulse: 0.38,
      orbit: 1.22,
      warp: 0.82,
      pointer: 0.64,
      breath: 0.48,
      depth: 0.92,
      camera: 0.76,
      tunnel: 0.5,
      spin: 0.5,
      fieldSpread: 1.22,
      density3d: 0.92,
      wireGlow: 1.58,
      perspectiveWarp: 0.78,
      morph: 0.64,
      interaction: 0.8,
      connectivity: 1.22,
      tempo: 88,
      sequence: 0.66,
      audioLevel: 0.5,
      drone: 0.82,
      shimmer: 0.86,
      pulseMix: 0.26,
      stereo: 1,
      autoEvolve: true,
    },
    stitchMachine: {
      label: "Stitch Machine",
      mode: "lattice",
      view3d: "stitchMachine",
      mood: "violet",
      collection: "vegetation",
      intensity: 0.88,
      speed: 0.96,
      density: 0.9,
      trails: 0.64,
      symmetry: 10,
      glow: 1.28,
      colorShift: 0.68,
      pulse: 0.74,
      orbit: 0.92,
      warp: 0.66,
      pointer: 0.78,
      breath: 0.36,
      depth: 0.7,
      camera: 0.62,
      tunnel: 0.36,
      spin: 0.74,
      fieldSpread: 1.04,
      density3d: 0.92,
      wireGlow: 1.42,
      perspectiveWarp: 0.62,
      morph: 0.96,
      interaction: 0.92,
      connectivity: 0.86,
      tempo: 132,
      sequence: 0.84,
      audioLevel: 0.54,
      drone: 0.28,
      shimmer: 0.74,
      pulseMix: 0.48,
      stereo: 0.92,
      autoEvolve: true,
    },
    lavaLibrary: {
      label: "Lava Library",
      mode: "rose",
      view3d: "lavaLibrary",
      mood: "infrared",
      collection: "mars",
      intensity: 0.86,
      speed: 0.5,
      density: 0.86,
      trails: 0.84,
      symmetry: 7,
      glow: 1.5,
      colorShift: 0.42,
      pulse: 0.44,
      orbit: 0.62,
      warp: 0.7,
      pointer: 0.58,
      breath: 0.78,
      depth: 0.86,
      camera: 0.5,
      tunnel: 0.3,
      spin: 0.28,
      fieldSpread: 1.0,
      density3d: 0.9,
      wireGlow: 1.54,
      perspectiveWarp: 0.7,
      morph: 0.72,
      interaction: 0.72,
      connectivity: 0.62,
      tempo: 82,
      sequence: 0.58,
      audioLevel: 0.52,
      drone: 0.84,
      shimmer: 0.62,
      pulseMix: 0.3,
      stereo: 0.86,
      autoEvolve: true,
    },
    elevatorForest: {
      label: "Elevator Forest",
      mode: "tunnel",
      view3d: "elevatorForest",
      mood: "moon",
      collection: "deepfield",
      intensity: 0.84,
      speed: 0.86,
      density: 0.82,
      trails: 0.76,
      symmetry: 8,
      glow: 1.34,
      colorShift: 0.48,
      pulse: 0.62,
      orbit: 1.02,
      warp: 0.86,
      pointer: 0.72,
      breath: 0.46,
      depth: 0.9,
      camera: 0.82,
      tunnel: 0.7,
      spin: 0.44,
      fieldSpread: 1.14,
      density3d: 0.92,
      wireGlow: 1.4,
      perspectiveWarp: 0.84,
      morph: 0.62,
      interaction: 0.84,
      connectivity: 0.9,
      tempo: 116,
      sequence: 0.72,
      audioLevel: 0.52,
      drone: 0.52,
      shimmer: 0.82,
      pulseMix: 0.4,
      stereo: 1,
      autoEvolve: true,
    },
    switchboardChoir: {
      label: "Switchboard Choir",
      mode: "lattice",
      view3d: "switchboardChoir",
      mood: "aurora",
      collection: "deepfield",
      intensity: 0.9,
      speed: 1.08,
      density: 0.92,
      trails: 0.66,
      symmetry: 12,
      glow: 1.46,
      colorShift: 0.64,
      pulse: 0.86,
      orbit: 0.82,
      warp: 0.58,
      pointer: 0.82,
      breath: 0.32,
      depth: 0.74,
      camera: 0.58,
      tunnel: 0.34,
      spin: 0.52,
      fieldSpread: 1.02,
      density3d: 0.96,
      wireGlow: 1.56,
      perspectiveWarp: 0.56,
      morph: 0.72,
      interaction: 1.04,
      connectivity: 1.16,
      tempo: 148,
      sequence: 0.88,
      audioLevel: 0.54,
      drone: 0.22,
      shimmer: 0.7,
      pulseMix: 0.62,
      stereo: 1,
      autoEvolve: true,
    },
    prismCourt: {
      label: "Prism Court",
      mode: "metatron",
      view3d: "prismCourt",
      mood: "prism",
      collection: "moon",
      intensity: 0.86,
      speed: 0.58,
      density: 0.78,
      trails: 0.78,
      symmetry: 9,
      glow: 1.42,
      colorShift: 0.7,
      pulse: 0.44,
      orbit: 0.74,
      warp: 0.76,
      pointer: 0.62,
      breath: 0.54,
      depth: 0.86,
      camera: 0.64,
      tunnel: 0.38,
      spin: 0.36,
      fieldSpread: 1.0,
      density3d: 0.86,
      wireGlow: 1.5,
      perspectiveWarp: 0.72,
      morph: 0.54,
      interaction: 0.74,
      connectivity: 0.7,
      tempo: 74,
      sequence: 0.56,
      audioLevel: 0.52,
      drone: 0.76,
      shimmer: 0.8,
      pulseMix: 0.26,
      stereo: 0.9,
      autoEvolve: true,
    },
    weatherFactory: {
      label: "Weather Factory",
      mode: "waveform",
      view3d: "weatherFactory",
      mood: "deep",
      collection: "clouds",
      intensity: 0.88,
      speed: 0.76,
      density: 0.9,
      trails: 0.86,
      symmetry: 11,
      glow: 1.36,
      colorShift: 0.5,
      pulse: 0.58,
      orbit: 1.08,
      warp: 0.78,
      pointer: 0.68,
      breath: 0.86,
      depth: 0.82,
      camera: 0.72,
      tunnel: 0.42,
      spin: 0.5,
      fieldSpread: 1.12,
      density3d: 0.94,
      wireGlow: 1.46,
      perspectiveWarp: 0.8,
      morph: 0.88,
      interaction: 0.86,
      connectivity: 0.92,
      tempo: 96,
      sequence: 0.68,
      audioLevel: 0.52,
      drone: 0.66,
      shimmer: 0.72,
      pulseMix: 0.38,
      stereo: 0.96,
      autoEvolve: true,
    },
    semaphoreBloom: {
      label: "Semaphore Bloom",
      mode: "lattice",
      view3d: "semaphoreBloom",
      mood: "prism",
      collection: "nebula",
      intensity: 0.9,
      speed: 1.18,
      density: 0.84,
      trails: 0.7,
      symmetry: 16,
      glow: 1.5,
      colorShift: 0.78,
      pulse: 0.86,
      orbit: 0.64,
      warp: 0.48,
      pointer: 0.88,
      breath: 0.3,
      depth: 0.78,
      camera: 0.58,
      tunnel: 0.28,
      spin: 0.72,
      fieldSpread: 1.08,
      density3d: 0.9,
      wireGlow: 1.58,
      perspectiveWarp: 0.52,
      morph: 0.88,
      interaction: 1.1,
      connectivity: 1.2,
      tempo: 132,
      sequence: 0.82,
      audioLevel: 0.52,
      drone: 0.2,
      shimmer: 0.66,
      pulseMix: 0.58,
      stereo: 1,
      autoEvolve: true,
    },
    pendulumTemple: {
      label: "Pendulum Temple",
      mode: "orbit",
      view3d: "pendulumTemple",
      mood: "moon",
      collection: "earth",
      intensity: 0.78,
      speed: 0.52,
      density: 0.7,
      trails: 0.84,
      symmetry: 7,
      glow: 1.32,
      colorShift: 0.46,
      pulse: 0.36,
      orbit: 1.18,
      warp: 0.66,
      pointer: 0.52,
      breath: 0.72,
      depth: 0.92,
      camera: 0.68,
      tunnel: 0.36,
      spin: 0.28,
      fieldSpread: 1.02,
      density3d: 0.82,
      wireGlow: 1.42,
      perspectiveWarp: 0.7,
      morph: 0.5,
      interaction: 0.66,
      connectivity: 0.72,
      tempo: 68,
      sequence: 0.5,
      audioLevel: 0.5,
      drone: 0.82,
      shimmer: 0.74,
      pulseMix: 0.24,
      stereo: 0.88,
      autoEvolve: true,
    },
    neonAbacus: {
      label: "Neon Abacus",
      mode: "waveform",
      view3d: "neonAbacus",
      mood: "infrared",
      collection: "deepfield",
      intensity: 0.94,
      speed: 1.02,
      density: 0.88,
      trails: 0.62,
      symmetry: 10,
      glow: 1.54,
      colorShift: 0.7,
      pulse: 0.76,
      orbit: 0.74,
      warp: 0.42,
      pointer: 0.82,
      breath: 0.28,
      depth: 0.76,
      camera: 0.54,
      tunnel: 0.3,
      spin: 0.58,
      fieldSpread: 0.98,
      density3d: 0.96,
      wireGlow: 1.62,
      perspectiveWarp: 0.48,
      morph: 0.78,
      interaction: 1.0,
      connectivity: 1.24,
      tempo: 124,
      sequence: 0.86,
      audioLevel: 0.54,
      drone: 0.26,
      shimmer: 0.6,
      pulseMix: 0.66,
      stereo: 1,
      autoEvolve: true,
    },
    cipherFountain: {
      label: "Cipher Fountain",
      mode: "veil",
      view3d: "cipherFountain",
      mood: "deep",
      collection: "nebula",
      intensity: 0.88,
      speed: 0.92,
      density: 0.86,
      trails: 0.9,
      symmetry: 13,
      glow: 1.46,
      colorShift: 0.58,
      pulse: 0.62,
      orbit: 0.92,
      warp: 0.72,
      pointer: 0.76,
      breath: 0.7,
      depth: 0.88,
      camera: 0.66,
      tunnel: 0.48,
      spin: 0.44,
      fieldSpread: 1.02,
      density3d: 0.96,
      wireGlow: 1.52,
      perspectiveWarp: 0.78,
      morph: 0.84,
      interaction: 0.9,
      connectivity: 1.06,
      tempo: 104,
      sequence: 0.72,
      audioLevel: 0.52,
      drone: 0.58,
      shimmer: 0.82,
      pulseMix: 0.42,
      stereo: 1,
      autoEvolve: true,
    },
    orreryCathedral: {
      label: "Orrery Cathedral",
      mode: "orbit",
      view3d: "orreryCathedral",
      mood: "moon",
      collection: "deepfield",
      intensity: 0.84,
      speed: 0.66,
      density: 0.74,
      trails: 0.82,
      symmetry: 12,
      glow: 1.38,
      colorShift: 0.52,
      pulse: 0.42,
      orbit: 1.28,
      warp: 0.6,
      pointer: 0.58,
      breath: 0.54,
      depth: 0.94,
      camera: 0.72,
      tunnel: 0.34,
      spin: 0.34,
      fieldSpread: 1.08,
      density3d: 0.82,
      wireGlow: 1.48,
      perspectiveWarp: 0.64,
      morph: 0.56,
      interaction: 0.68,
      connectivity: 0.84,
      tempo: 88,
      sequence: 0.6,
      audioLevel: 0.5,
      drone: 0.74,
      shimmer: 0.7,
      pulseMix: 0.28,
      stereo: 0.92,
      autoEvolve: true,
    },
    velvetReactor: {
      label: "Velvet Reactor",
      mode: "chrysalis",
      view3d: "velvetReactor",
      mood: "ember",
      collection: "earth",
      intensity: 0.94,
      speed: 0.82,
      density: 0.88,
      trails: 0.72,
      symmetry: 10,
      glow: 1.58,
      colorShift: 0.72,
      pulse: 0.92,
      orbit: 0.84,
      warp: 0.7,
      pointer: 0.74,
      breath: 0.78,
      depth: 0.82,
      camera: 0.62,
      tunnel: 0.4,
      spin: 0.52,
      fieldSpread: 1,
      density3d: 0.9,
      wireGlow: 1.58,
      perspectiveWarp: 0.72,
      morph: 1.04,
      interaction: 0.86,
      connectivity: 0.96,
      tempo: 112,
      sequence: 0.7,
      audioLevel: 0.54,
      drone: 0.7,
      shimmer: 0.56,
      pulseMix: 0.78,
      stereo: 0.9,
      autoEvolve: true,
    },
    phaseArray: {
      label: "Phase Array",
      mode: "lattice",
      view3d: "phaseArray",
      mood: "aurora",
      collection: "deepfield",
      intensity: 0.88,
      speed: 0.74,
      density: 0.78,
      trails: 0.86,
      symmetry: 16,
      glow: 1.5,
      colorShift: 0.62,
      pulse: 0.58,
      orbit: 1.18,
      warp: 0.66,
      pointer: 0.7,
      breath: 0.5,
      depth: 0.9,
      camera: 0.72,
      tunnel: 0.32,
      spin: 0.38,
      fieldSpread: 1.06,
      density3d: 0.86,
      wireGlow: 1.54,
      perspectiveWarp: 0.66,
      morph: 0.7,
      interaction: 0.84,
      connectivity: 1.18,
      tempo: 96,
      sequence: 0.68,
      audioLevel: 0.52,
      drone: 0.66,
      shimmer: 0.78,
      pulseMix: 0.36,
      stereo: 1,
      autoEvolve: true,
    },
    tectonicForge: {
      label: "Tectonic Forge",
      mode: "waveform",
      view3d: "tectonicForge",
      mood: "infrared",
      collection: "earth",
      intensity: 0.94,
      speed: 0.68,
      density: 0.9,
      trails: 0.64,
      symmetry: 8,
      glow: 1.62,
      colorShift: 0.5,
      pulse: 0.96,
      orbit: 0.66,
      warp: 0.78,
      pointer: 0.72,
      breath: 0.88,
      depth: 0.84,
      camera: 0.56,
      tunnel: 0.28,
      spin: 0.28,
      fieldSpread: 1.02,
      density3d: 0.94,
      wireGlow: 1.6,
      perspectiveWarp: 0.74,
      morph: 0.88,
      interaction: 0.92,
      connectivity: 0.82,
      tempo: 78,
      sequence: 0.58,
      audioLevel: 0.56,
      drone: 0.8,
      shimmer: 0.44,
      pulseMix: 0.84,
      stereo: 0.78,
      autoEvolve: true,
    },
    paperOracle: {
      label: "Paper Oracle",
      mode: "kaleidoscope",
      view3d: "paperOracle",
      mood: "violet",
      collection: "nebula",
      intensity: 0.86,
      speed: 0.82,
      density: 0.8,
      trails: 0.78,
      symmetry: 14,
      glow: 1.42,
      colorShift: 0.78,
      pulse: 0.5,
      orbit: 1,
      warp: 0.82,
      pointer: 0.78,
      breath: 0.62,
      depth: 0.9,
      camera: 0.68,
      tunnel: 0.36,
      spin: 0.46,
      fieldSpread: 1.0,
      density3d: 0.88,
      wireGlow: 1.44,
      perspectiveWarp: 0.86,
      morph: 1.12,
      interaction: 0.86,
      connectivity: 0.9,
      tempo: 102,
      sequence: 0.64,
      audioLevel: 0.5,
      drone: 0.52,
      shimmer: 0.86,
      pulseMix: 0.3,
      stereo: 0.96,
      autoEvolve: true,
    },
    sporeSemaphore: {
      label: "Spore Semaphore",
      mode: "chrysalis",
      view3d: "sporeSemaphore",
      mood: "garden",
      collection: "vegetation",
      intensity: 0.9,
      speed: 0.88,
      density: 0.94,
      trails: 0.72,
      symmetry: 9,
      glow: 1.48,
      colorShift: 0.44,
      pulse: 0.74,
      orbit: 0.72,
      warp: 0.52,
      pointer: 0.86,
      breath: 0.94,
      depth: 0.82,
      camera: 0.58,
      tunnel: 0.28,
      spin: 0.34,
      fieldSpread: 1.06,
      density3d: 0.96,
      wireGlow: 1.5,
      perspectiveWarp: 0.58,
      morph: 1.08,
      interaction: 1.04,
      connectivity: 1.0,
      tempo: 118,
      sequence: 0.72,
      audioLevel: 0.54,
      drone: 0.56,
      shimmer: 0.62,
      pulseMix: 0.58,
      stereo: 0.92,
      autoEvolve: true,
    },
    cartogramChoir: {
      label: "Cartogram Choir",
      mode: "lattice",
      view3d: "cartogramChoir",
      mood: "prism",
      collection: "galaxy",
      intensity: 0.86,
      speed: 0.96,
      density: 0.82,
      trails: 0.84,
      symmetry: 11,
      glow: 1.46,
      colorShift: 0.86,
      pulse: 0.48,
      orbit: 1.12,
      warp: 0.76,
      pointer: 0.78,
      breath: 0.42,
      depth: 0.9,
      camera: 0.74,
      tunnel: 0.46,
      spin: 0.5,
      fieldSpread: 1.12,
      density3d: 0.84,
      wireGlow: 1.56,
      perspectiveWarp: 0.82,
      morph: 0.74,
      interaction: 0.88,
      connectivity: 1.18,
      tempo: 92,
      sequence: 0.66,
      audioLevel: 0.52,
      drone: 0.64,
      shimmer: 0.76,
      pulseMix: 0.34,
      stereo: 1,
      autoEvolve: true,
    },
    quartzArchive: {
      label: "Quartz Archive",
      mode: "veil",
      view3d: "quartzArchive",
      mood: "moon",
      collection: "deepfield",
      intensity: 0.82,
      speed: 0.52,
      density: 0.78,
      trails: 0.9,
      symmetry: 15,
      glow: 1.5,
      colorShift: 0.36,
      pulse: 0.32,
      orbit: 0.84,
      warp: 0.68,
      pointer: 0.62,
      breath: 0.7,
      depth: 0.96,
      camera: 0.7,
      tunnel: 0.34,
      spin: 0.24,
      fieldSpread: 1.02,
      density3d: 0.86,
      wireGlow: 1.62,
      perspectiveWarp: 0.78,
      morph: 0.68,
      interaction: 0.66,
      connectivity: 0.86,
      tempo: 72,
      sequence: 0.46,
      audioLevel: 0.5,
      drone: 0.86,
      shimmer: 0.84,
      pulseMix: 0.22,
      stereo: 0.96,
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
    gravityWell: {
      pattern: "vortex",
      musicMode: "ritual",
      key: "C",
      scale: "harmonic",
      complexity: 0.78,
      groove: 0.36,
      harmony: 0.88,
      rhythm: 0.84,
      bass: 0.96,
      arp: 0.44,
      melody: 0.5,
      percussion: 0.72,
      imageOpacity: 0.08,
      musicSeed: 12013,
    },
    neonReef: {
      pattern: "ripple",
      musicMode: "swarm",
      key: "A",
      scale: "wholeTone",
      complexity: 0.72,
      groove: 0.66,
      harmony: 0.72,
      rhythm: 0.88,
      bass: 0.38,
      arp: 0.82,
      melody: 0.72,
      percussion: 0.36,
      imageOpacity: 0.16,
      musicSeed: 15021,
    },
    dreamLoom: {
      pattern: "moire",
      musicMode: "drift",
      key: "Db",
      scale: "lydian",
      complexity: 0.5,
      groove: 0.18,
      harmony: 0.96,
      rhythm: 0.32,
      bass: 0.2,
      arp: 0.54,
      melody: 0.62,
      percussion: 0.04,
      imageOpacity: 0.14,
      musicSeed: 18089,
    },
    signalLab: {
      pattern: "lattice",
      musicMode: "glitch",
      key: "Gb",
      scale: "wholeTone",
      complexity: 0.94,
      groove: 0.74,
      harmony: 0.66,
      rhythm: 0.98,
      bass: 0.64,
      arp: 0.88,
      melody: 0.44,
      percussion: 0.9,
      imageOpacity: 0.06,
      musicSeed: 21034,
    },
    crystalRain: {
      pattern: "ripple",
      musicMode: "rain",
      key: "E",
      scale: "lydian",
      complexity: 0.56,
      groove: 0.24,
      harmony: 0.84,
      rhythm: 0.42,
      bass: 0.16,
      arp: 0.66,
      melody: 0.52,
      percussion: 0.18,
      imageOpacity: 0.12,
      musicSeed: 24013,
    },
    clockworkRoom: {
      pattern: "lattice",
      musicMode: "clockwork",
      key: "Bb",
      scale: "harmonic",
      complexity: 0.78,
      groove: 0.12,
      harmony: 0.72,
      rhythm: 0.9,
      bass: 0.54,
      arp: 0.8,
      melody: 0.38,
      percussion: 0.86,
      imageOpacity: 0.08,
      musicSeed: 27011,
    },
    voidBloom: {
      pattern: "petal",
      musicMode: "bloom",
      key: "Ab",
      scale: "wholeTone",
      complexity: 0.68,
      groove: 0.28,
      harmony: 0.94,
      rhythm: 0.46,
      bass: 0.32,
      arp: 0.44,
      melody: 0.76,
      percussion: 0.12,
      imageOpacity: 0.1,
      musicSeed: 30029,
    },
    magneticInk: {
      pattern: "plasma",
      musicMode: "ferro",
      key: "Gb",
      scale: "wholeTone",
      complexity: 0.88,
      groove: 0.62,
      harmony: 0.74,
      rhythm: 0.86,
      bass: 0.82,
      arp: 0.58,
      melody: 0.48,
      percussion: 0.62,
      imageOpacity: 0.06,
      musicSeed: 33071,
    },
    solarHarp: {
      pattern: "ripple",
      musicMode: "harp",
      key: "F",
      scale: "lydian",
      complexity: 0.62,
      groove: 0.18,
      harmony: 0.92,
      rhythm: 0.34,
      bass: 0.18,
      arp: 0.92,
      melody: 0.7,
      percussion: 0.08,
      imageOpacity: 0.1,
      musicSeed: 36017,
    },
    dataOrchard: {
      pattern: "moire",
      musicMode: "orchard",
      key: "C",
      scale: "pentatonic",
      complexity: 0.7,
      groove: 0.46,
      harmony: 0.82,
      rhythm: 0.54,
      bass: 0.34,
      arp: 0.5,
      melody: 0.84,
      percussion: 0.18,
      imageOpacity: 0.14,
      musicSeed: 39043,
    },
    mirrorChoir: {
      pattern: "kaleido",
      musicMode: "choir",
      key: "Db",
      scale: "lydian",
      complexity: 0.54,
      groove: 0.12,
      harmony: 0.96,
      rhythm: 0.28,
      bass: 0.12,
      arp: 0.28,
      melody: 0.58,
      percussion: 0.02,
      imageOpacity: 0.12,
      musicSeed: 42019,
    },
    tidalEngine: {
      pattern: "ripple",
      musicMode: "tide",
      key: "D",
      scale: "dorian",
      complexity: 0.64,
      groove: 0.44,
      harmony: 0.8,
      rhythm: 0.48,
      bass: 0.52,
      arp: 0.34,
      melody: 0.44,
      percussion: 0.26,
      imageOpacity: 0.14,
      musicSeed: 45007,
    },
    cometRunes: {
      pattern: "plasma",
      musicMode: "comet",
      key: "B",
      scale: "wholeTone",
      complexity: 0.9,
      groove: 0.52,
      harmony: 0.7,
      rhythm: 0.88,
      bass: 0.46,
      arp: 0.86,
      melody: 0.76,
      percussion: 0.68,
      imageOpacity: 0.06,
      musicSeed: 48011,
    },
    origamiStorm: {
      pattern: "moire",
      musicMode: "fold",
      key: "E",
      scale: "lydian",
      complexity: 0.84,
      groove: 0.56,
      harmony: 0.72,
      rhythm: 0.82,
      bass: 0.28,
      arp: 0.78,
      melody: 0.66,
      percussion: 0.52,
      imageOpacity: 0.06,
      musicSeed: 51031,
    },
    jellyfishChapel: {
      pattern: "ripple",
      musicMode: "jelly",
      key: "Ab",
      scale: "pentatonic",
      complexity: 0.42,
      groove: 0.18,
      harmony: 0.92,
      rhythm: 0.22,
      bass: 0.12,
      arp: 0.3,
      melody: 0.62,
      percussion: 0.08,
      imageOpacity: 0.12,
      musicSeed: 54049,
    },
    obsidianSpires: {
      pattern: "vortex",
      musicMode: "spire",
      key: "Bb",
      scale: "harmonic",
      complexity: 0.58,
      groove: 0.34,
      harmony: 0.76,
      rhythm: 0.62,
      bass: 0.9,
      arp: 0.22,
      melody: 0.28,
      percussion: 0.58,
      imageOpacity: 0.04,
      musicSeed: 57077,
    },
    tapeSpirits: {
      pattern: "plasma",
      musicMode: "tape",
      key: "Gb",
      scale: "mixolydian",
      complexity: 0.78,
      groove: 0.68,
      harmony: 0.62,
      rhythm: 0.7,
      bass: 0.46,
      arp: 0.48,
      melody: 0.74,
      percussion: 0.44,
      imageOpacity: 0.08,
      musicSeed: 60091,
    },
    mothLanterns: {
      pattern: "petal",
      musicMode: "moth",
      key: "G",
      scale: "dorian",
      complexity: 0.72,
      groove: 0.46,
      harmony: 0.68,
      rhythm: 0.78,
      bass: 0.2,
      arp: 0.84,
      melody: 0.78,
      percussion: 0.28,
      imageOpacity: 0.1,
      musicSeed: 63127,
    },
    circuitShrine: {
      pattern: "lattice",
      musicMode: "circuit",
      key: "E",
      scale: "wholeTone",
      complexity: 0.94,
      groove: 0.58,
      harmony: 0.54,
      rhythm: 0.94,
      bass: 0.62,
      arp: 0.76,
      melody: 0.42,
      percussion: 0.82,
      imageOpacity: 0.04,
      musicSeed: 66029,
    },
    iceOrgan: {
      pattern: "moire",
      musicMode: "ice",
      key: "C",
      scale: "lydian",
      complexity: 0.36,
      groove: 0.08,
      harmony: 0.94,
      rhythm: 0.12,
      bass: 0.18,
      arp: 0.22,
      melody: 0.54,
      percussion: 0.04,
      imageOpacity: 0.12,
      musicSeed: 69061,
    },
    myceliumRadio: {
      pattern: "petal",
      musicMode: "mycelium",
      key: "F",
      scale: "pentatonic",
      complexity: 0.66,
      groove: 0.62,
      harmony: 0.74,
      rhythm: 0.52,
      bass: 0.34,
      arp: 0.54,
      melody: 0.72,
      percussion: 0.22,
      imageOpacity: 0.12,
      musicSeed: 72043,
    },
    thunderLoom: {
      pattern: "plasma",
      musicMode: "storm",
      key: "D",
      scale: "harmonic",
      complexity: 0.86,
      groove: 0.4,
      harmony: 0.7,
      rhythm: 0.82,
      bass: 0.72,
      arp: 0.62,
      melody: 0.44,
      percussion: 0.88,
      imageOpacity: 0.08,
      musicSeed: 75083,
    },
    railCathedral: {
      pattern: "vortex",
      musicMode: "rail",
      key: "A",
      scale: "mixolydian",
      complexity: 0.72,
      groove: 0.76,
      harmony: 0.64,
      rhythm: 0.9,
      bass: 0.84,
      arp: 0.42,
      melody: 0.38,
      percussion: 0.72,
      imageOpacity: 0.06,
      musicSeed: 78031,
    },
    typewriterSeance: {
      pattern: "lattice",
      musicMode: "typewriter",
      key: "Eb",
      scale: "harmonic",
      complexity: 0.78,
      groove: 0.72,
      harmony: 0.58,
      rhythm: 0.88,
      bass: 0.38,
      arp: 0.54,
      melody: 0.52,
      percussion: 0.9,
      imageOpacity: 0.08,
      musicSeed: 81041,
    },
    glassLabyrinth: {
      pattern: "moire",
      musicMode: "maze",
      key: "C",
      scale: "lydian",
      complexity: 0.54,
      groove: 0.32,
      harmony: 0.9,
      rhythm: 0.36,
      bass: 0.22,
      arp: 0.5,
      melody: 0.64,
      percussion: 0.12,
      imageOpacity: 0.1,
      musicSeed: 84017,
    },
    marbleArcade: {
      pattern: "ripple",
      musicMode: "marble",
      key: "G",
      scale: "wholeTone",
      complexity: 0.82,
      groove: 0.58,
      harmony: 0.72,
      rhythm: 0.82,
      bass: 0.48,
      arp: 0.86,
      melody: 0.7,
      percussion: 0.48,
      imageOpacity: 0.08,
      musicSeed: 87037,
    },
    diceChapel: {
      pattern: "plasma",
      musicMode: "chance",
      key: "Bb",
      scale: "mixolydian",
      complexity: 0.86,
      groove: 0.44,
      harmony: 0.74,
      rhythm: 0.76,
      bass: 0.42,
      arp: 0.62,
      melody: 0.72,
      percussion: 0.58,
      imageOpacity: 0.08,
      musicSeed: 90091,
    },
    steamKitchen: {
      pattern: "petal",
      musicMode: "kitchen",
      key: "D",
      scale: "dorian",
      complexity: 0.68,
      groove: 0.74,
      harmony: 0.52,
      rhythm: 0.68,
      bass: 0.5,
      arp: 0.38,
      melody: 0.46,
      percussion: 0.82,
      imageOpacity: 0.08,
      musicSeed: 93029,
    },
    radioGarden: {
      pattern: "vortex",
      musicMode: "radio",
      key: "F",
      scale: "lydian",
      complexity: 0.58,
      groove: 0.24,
      harmony: 0.86,
      rhythm: 0.42,
      bass: 0.28,
      arp: 0.44,
      melody: 0.62,
      percussion: 0.16,
      imageOpacity: 0.08,
      musicSeed: 96053,
    },
    stitchMachine: {
      pattern: "lattice",
      musicMode: "stitch",
      key: "E",
      scale: "harmonic",
      complexity: 0.76,
      groove: 0.66,
      harmony: 0.6,
      rhythm: 0.82,
      bass: 0.34,
      arp: 0.84,
      melody: 0.62,
      percussion: 0.72,
      imageOpacity: 0.08,
      musicSeed: 99023,
    },
    lavaLibrary: {
      pattern: "plasma",
      musicMode: "archive",
      key: "Ab",
      scale: "harmonic",
      complexity: 0.48,
      groove: 0.28,
      harmony: 0.88,
      rhythm: 0.36,
      bass: 0.58,
      arp: 0.3,
      melody: 0.44,
      percussion: 0.24,
      imageOpacity: 0.09,
      musicSeed: 102047,
    },
    elevatorForest: {
      pattern: "moire",
      musicMode: "lift",
      key: "Gb",
      scale: "wholeTone",
      complexity: 0.64,
      groove: 0.5,
      harmony: 0.7,
      rhythm: 0.58,
      bass: 0.42,
      arp: 0.52,
      melody: 0.72,
      percussion: 0.28,
      imageOpacity: 0.08,
      musicSeed: 105011,
    },
    switchboardChoir: {
      pattern: "lattice",
      musicMode: "switchboard",
      key: "A",
      scale: "mixolydian",
      complexity: 0.84,
      groove: 0.74,
      harmony: 0.64,
      rhythm: 0.9,
      bass: 0.36,
      arp: 0.78,
      melody: 0.54,
      percussion: 0.8,
      imageOpacity: 0.08,
      musicSeed: 108043,
    },
    prismCourt: {
      pattern: "petal",
      musicMode: "court",
      key: "Db",
      scale: "lydian",
      complexity: 0.46,
      groove: 0.18,
      harmony: 0.9,
      rhythm: 0.24,
      bass: 0.52,
      arp: 0.32,
      melody: 0.48,
      percussion: 0.32,
      imageOpacity: 0.08,
      musicSeed: 111061,
    },
    weatherFactory: {
      pattern: "ripple",
      musicMode: "weather",
      key: "C",
      scale: "dorian",
      complexity: 0.58,
      groove: 0.42,
      harmony: 0.72,
      rhythm: 0.54,
      bass: 0.44,
      arp: 0.46,
      melody: 0.6,
      percussion: 0.44,
      imageOpacity: 0.09,
      musicSeed: 114083,
    },
    semaphoreBloom: {
      pattern: "moire",
      musicMode: "semaphore",
      key: "E",
      scale: "mixolydian",
      complexity: 0.78,
      groove: 0.66,
      harmony: 0.58,
      rhythm: 0.84,
      bass: 0.36,
      arp: 0.7,
      melody: 0.58,
      percussion: 0.68,
      imageOpacity: 0.08,
      musicSeed: 117109,
    },
    pendulumTemple: {
      pattern: "vortex",
      musicMode: "pendulum",
      key: "F",
      scale: "dorian",
      complexity: 0.38,
      groove: 0.28,
      harmony: 0.86,
      rhythm: 0.22,
      bass: 0.58,
      arp: 0.28,
      melody: 0.46,
      percussion: 0.3,
      imageOpacity: 0.08,
      musicSeed: 120121,
    },
    neonAbacus: {
      pattern: "lattice",
      musicMode: "abacus",
      key: "Bb",
      scale: "wholeTone",
      complexity: 0.88,
      groove: 0.58,
      harmony: 0.62,
      rhythm: 0.76,
      bass: 0.5,
      arp: 0.82,
      melody: 0.52,
      percussion: 0.62,
      imageOpacity: 0.08,
      musicSeed: 123143,
    },
    cipherFountain: {
      pattern: "plasma",
      musicMode: "cipher",
      key: "D",
      scale: "dorian",
      complexity: 0.74,
      groove: 0.48,
      harmony: 0.76,
      rhythm: 0.62,
      bass: 0.42,
      arp: 0.58,
      melody: 0.64,
      percussion: 0.5,
      imageOpacity: 0.08,
      musicSeed: 126181,
    },
    orreryCathedral: {
      pattern: "vortex",
      musicMode: "orrery",
      key: "G",
      scale: "lydian",
      complexity: 0.5,
      groove: 0.34,
      harmony: 0.86,
      rhythm: 0.36,
      bass: 0.5,
      arp: 0.42,
      melody: 0.5,
      percussion: 0.28,
      imageOpacity: 0.08,
      musicSeed: 129169,
    },
    velvetReactor: {
      pattern: "ripple",
      musicMode: "reactor",
      key: "Eb",
      scale: "harmonic",
      complexity: 0.64,
      groove: 0.54,
      harmony: 0.68,
      rhythm: 0.68,
      bass: 0.72,
      arp: 0.34,
      melody: 0.42,
      percussion: 0.62,
      imageOpacity: 0.08,
      musicSeed: 132197,
    },
    phaseArray: {
      pattern: "moire",
      musicMode: "phase",
      key: "A",
      scale: "wholeTone",
      complexity: 0.66,
      groove: 0.42,
      harmony: 0.8,
      rhythm: 0.58,
      bass: 0.34,
      arp: 0.5,
      melody: 0.58,
      percussion: 0.34,
      imageOpacity: 0.08,
      musicSeed: 135191,
    },
    tectonicForge: {
      pattern: "lattice",
      musicMode: "forge",
      key: "E",
      scale: "harmonic",
      complexity: 0.48,
      groove: 0.6,
      harmony: 0.58,
      rhythm: 0.5,
      bass: 0.86,
      arp: 0.2,
      melody: 0.34,
      percussion: 0.78,
      imageOpacity: 0.08,
      musicSeed: 138209,
    },
    paperOracle: {
      pattern: "petal",
      musicMode: "oracle",
      key: "F",
      scale: "lydian",
      complexity: 0.62,
      groove: 0.3,
      harmony: 0.84,
      rhythm: 0.34,
      bass: 0.36,
      arp: 0.46,
      melody: 0.68,
      percussion: 0.24,
      imageOpacity: 0.08,
      musicSeed: 141221,
    },
    sporeSemaphore: {
      pattern: "ripple",
      musicMode: "spore",
      key: "G",
      scale: "dorian",
      complexity: 0.72,
      groove: 0.68,
      harmony: 0.66,
      rhythm: 0.86,
      bass: 0.44,
      arp: 0.58,
      melody: 0.62,
      percussion: 0.72,
      imageOpacity: 0.1,
      musicSeed: 144233,
    },
    cartogramChoir: {
      pattern: "lattice",
      musicMode: "cartogram",
      key: "Bb",
      scale: "mixolydian",
      complexity: 0.7,
      groove: 0.38,
      harmony: 0.82,
      rhythm: 0.54,
      bass: 0.38,
      arp: 0.64,
      melody: 0.74,
      percussion: 0.32,
      imageOpacity: 0.08,
      musicSeed: 147251,
    },
    quartzArchive: {
      pattern: "plasma",
      musicMode: "quartz",
      key: "Db",
      scale: "lydian",
      complexity: 0.54,
      groove: 0.16,
      harmony: 0.9,
      rhythm: 0.24,
      bass: 0.24,
      arp: 0.42,
      melody: 0.58,
      percussion: 0.16,
      imageOpacity: 0.08,
      musicSeed: 150287,
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
      well: new THREE.Group(),
      reef: new THREE.Group(),
      loom: new THREE.Group(),
      signals: new THREE.Group(),
      rain: new THREE.Group(),
      clockwork: new THREE.Group(),
      bloom: new THREE.Group(),
      ink: new THREE.Group(),
      harp: new THREE.Group(),
      orchard: new THREE.Group(),
      choir: new THREE.Group(),
      tide: new THREE.Group(),
      comet: new THREE.Group(),
      origami: new THREE.Group(),
      jellyfish: new THREE.Group(),
      spires: new THREE.Group(),
      tape: new THREE.Group(),
      moths: new THREE.Group(),
      circuit: new THREE.Group(),
      ice: new THREE.Group(),
      mycelium: new THREE.Group(),
      thunder: new THREE.Group(),
      rail: new THREE.Group(),
      typewriter: new THREE.Group(),
      labyrinth: new THREE.Group(),
      marble: new THREE.Group(),
      dice: new THREE.Group(),
      kitchen: new THREE.Group(),
      radio: new THREE.Group(),
      stitch: new THREE.Group(),
      archive: new THREE.Group(),
      elevator: new THREE.Group(),
      switchboard: new THREE.Group(),
      court: new THREE.Group(),
      weather: new THREE.Group(),
      semaphore: new THREE.Group(),
      pendulum: new THREE.Group(),
      abacus: new THREE.Group(),
      cipher: new THREE.Group(),
      orrery: new THREE.Group(),
      reactor: new THREE.Group(),
      phaseArray: new THREE.Group(),
      forge: new THREE.Group(),
      oracle: new THREE.Group(),
      spore: new THREE.Group(),
      cartogram: new THREE.Group(),
      quartz: new THREE.Group(),
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
    buildGravityWell(THREE, groups.well, mood);
    buildNeonReef(THREE, groups.reef, mood);
    buildDreamLoom(THREE, groups.loom, mood);
    buildSignalLab(THREE, groups.signals, mood);
    buildCrystalRain(THREE, groups.rain, mood);
    buildClockworkRoom(THREE, groups.clockwork, mood);
    buildVoidBloom(THREE, groups.bloom, mood);
    buildMagneticInk(THREE, groups.ink, mood);
    buildSolarHarp(THREE, groups.harp, mood);
    buildDataOrchard(THREE, groups.orchard, mood);
    buildMirrorChoir(THREE, groups.choir, mood);
    buildTidalEngine(THREE, groups.tide, mood);
    buildCometRunes(THREE, groups.comet, mood);
    buildOrigamiStorm(THREE, groups.origami, mood);
    buildJellyfishChapel(THREE, groups.jellyfish, mood);
    buildObsidianSpires(THREE, groups.spires, mood);
    buildTapeSpirits(THREE, groups.tape, mood);
    buildMothLanterns(THREE, groups.moths, mood);
    buildCircuitShrine(THREE, groups.circuit, mood);
    buildIceOrgan(THREE, groups.ice, mood);
    buildMyceliumRadio(THREE, groups.mycelium, mood);
    buildThunderLoom(THREE, groups.thunder, mood);
    buildRailCathedral(THREE, groups.rail, mood);
    buildTypewriterSeance(THREE, groups.typewriter, mood);
    buildGlassLabyrinth(THREE, groups.labyrinth, mood);
    buildMarbleArcade(THREE, groups.marble, mood);
    buildDiceChapel(THREE, groups.dice, mood);
    buildSteamKitchen(THREE, groups.kitchen, mood);
    buildRadioGarden(THREE, groups.radio, mood);
    buildStitchMachine(THREE, groups.stitch, mood);
    buildLavaLibrary(THREE, groups.archive, mood);
    buildElevatorForest(THREE, groups.elevator, mood);
    buildSwitchboardChoir(THREE, groups.switchboard, mood);
    buildPrismCourt(THREE, groups.court, mood);
    buildWeatherFactory(THREE, groups.weather, mood);
    buildSemaphoreBloom(THREE, groups.semaphore, mood);
    buildPendulumTemple(THREE, groups.pendulum, mood);
    buildNeonAbacus(THREE, groups.abacus, mood);
    buildCipherFountain(THREE, groups.cipher, mood);
    buildOrreryCathedral(THREE, groups.orrery, mood);
    buildVelvetReactor(THREE, groups.reactor, mood);
    buildPhaseArray(THREE, groups.phaseArray, mood);
    buildTectonicForge(THREE, groups.forge, mood);
    buildPaperOracle(THREE, groups.oracle, mood);
    buildSporeSemaphore(THREE, groups.spore, mood);
    buildCartogramChoir(THREE, groups.cartogram, mood);
    buildQuartzArchive(THREE, groups.quartz, mood);
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

  function makeTypewriterPaperTexture(THREE, mood) {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(248, 240, 255, 0.94)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(25, 14, 42, 0.92)";
    ctx.font = "700 34px Georgia, serif";
    ctx.fillText("TYPEWRITER", 52, 96);
    ctx.fillText("SEANCE", 52, 142);
    ctx.font = "22px Consolas, monospace";
    const rows = [
      "A A A  ECHO  A A A",
      "keys knock holes in time",
      "paper learns a rhythm",
      "tap tap  /  bell  /  tap",
      "ghost chord: EB  C  F#",
      "/////  ////  ///  //",
      "listen to the carriage",
      "return return return",
      "ink blooms after silence",
      "Q W E R T Y  becomes",
      "a little machine choir",
    ];
    rows.forEach((line, index) => {
      ctx.fillStyle = index % 3 === 0 ? mood.colors[(index + 1) % mood.colors.length] : "rgba(30, 20, 48, 0.82)";
      ctx.fillText(line, 52, 210 + index * 42);
    });
    ctx.strokeStyle = "rgba(60, 34, 92, 0.32)";
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
    ctx.strokeStyle = mood.colors[2] || "#8be8dd";
    ctx.globalAlpha = 0.46;
    for (let i = 0; i < 12; i += 1) {
      ctx.beginPath();
      ctx.moveTo(42, 188 + i * 42);
      ctx.lineTo(470, 188 + i * 42 + Math.sin(i) * 8);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    const texture = trackThreeTexture(new THREE.CanvasTexture(canvas));
    texture.needsUpdate = true;
    return texture;
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

  function buildGravityWell(THREE, group, mood) {
    const ringCount = Math.round(7 + state.density3d * 8);
    for (let i = 0; i < ringCount; i += 1) {
      const radius = 1.15 + i * 0.62 * state.fieldSpread;
      const geometry = new THREE.TorusGeometry(radius, 0.012 + i * 0.002, 8, 170);
      const material = makeLineMaterial(THREE, colorAt(mood, i + 1), 0.12 + state.wireGlow * 0.1);
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(Math.PI * 0.5 + i * 0.045, i * 0.31, i * 0.17);
      ring.position.z = -10 - i * 2.5;
      ring.userData = { kind: "wellRing", index: i, radius, seed: pseudo(i * 61 + 4) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }

    const shardGeometry = new THREE.TetrahedronGeometry(0.16, 0);
    const shardCount = Math.round(22 + state.density3d * 38);
    for (let i = 0; i < shardCount; i += 1) {
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.22 + state.wireGlow * 0.08);
      material.depthWrite = false;
      material.blending = THREE.AdditiveBlending;
      const shard = new THREE.Mesh(shardGeometry.clone(), material);
      const layer = i % 9;
      const radius = (1.6 + layer * 0.58 + pseudo(i * 17 + 1) * 1.2) * state.fieldSpread;
      const angle = i * phi * twoPi;
      shard.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.36, -8 - layer * 3.4);
      shard.scale.setScalar(0.7 + pseudo(i * 23 + 5) * 1.4);
      shard.userData = { kind: "wellShard", index: i, layer, radius, angle, seed: pseudo(i * 29 + 8) * twoPi };
      group.add(shard);
      threeLayer.objects.push(shard);
    }
  }

  function buildNeonReef(THREE, group, mood) {
    const tendrilCount = Math.round(10 + state.density3d * 16);
    const bulbGeometry = new THREE.IcosahedronGeometry(0.16, 1);
    for (let i = 0; i < tendrilCount; i += 1) {
      const points = [];
      const angle = i * phi * twoPi;
      const baseRadius = (2.2 + pseudo(i * 13 + 2) * 6.2) * state.fieldSpread;
      const baseX = Math.cos(angle) * baseRadius;
      const baseY = Math.sin(angle * 0.8) * 2.4;
      const baseZ = -7 - pseudo(i * 19 + 7) * (24 + state.depth * 22);
      for (let j = 0; j <= 42; j += 1) {
        const t = j / 42;
        const sway = Math.sin(t * Math.PI * 2 + i) * (0.3 + state.morph * 0.22);
        points.push(new THREE.Vector3(
          baseX + Math.cos(angle + t * 1.4) * sway,
          baseY + t * (2.8 + state.breath * 1.4) + Math.sin(t * Math.PI + i) * 0.5,
          baseZ - t * (2.6 + state.depth * 4.2),
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 72, 0.018 + state.wireGlow * 0.008, 7, false);
      const tendril = new THREE.Mesh(geometry, makeWireMaterial(THREE, colorAt(mood, i + 1), 0.16 + state.wireGlow * 0.09));
      tendril.userData = { kind: "reefTendril", index: i, seed: pseudo(i * 31 + 3) * twoPi };
      group.add(tendril);
      threeLayer.objects.push(tendril);

      const bulb = new THREE.Mesh(bulbGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.42 + state.wireGlow * 0.08));
      bulb.position.copy(points[points.length - 1]);
      bulb.scale.setScalar(0.8 + pseudo(i * 37 + 4) * 1.2);
      bulb.userData = { kind: "reefBulb", index: i, seed: pseudo(i * 43 + 8) * twoPi, anchor: bulb.position.clone() };
      group.add(bulb);
      threeLayer.objects.push(bulb);
    }
  }

  function buildDreamLoom(THREE, group, mood) {
    const threadCount = Math.round(9 + state.density3d * 14);
    for (let i = 0; i < threadCount; i += 1) {
      [-1, 1].forEach((direction) => {
        const points = [];
        for (let j = 0; j <= 58; j += 1) {
          const t = j / 58;
          const x = (t - 0.5) * 18 * state.fieldSpread * direction;
          const y = Math.sin(t * twoPi * (1.2 + (i % 4) * 0.2) + i) * (1.1 + state.morph * 0.8) + (i - threadCount / 2) * 0.34;
          const z = -6 - t * (36 + state.depth * 28) + Math.cos(i + t * twoPi) * 0.8;
          points.push(new THREE.Vector3(x, y, z));
        }
        const curve = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(curve, 90, 0.012 + state.wireGlow * 0.006, 6, false);
        const thread = new THREE.Mesh(geometry, makeWireMaterial(THREE, colorAt(mood, i + (direction > 0 ? 1 : 3)), 0.14 + state.wireGlow * 0.08));
        thread.userData = { kind: "loomThread", index: i, direction, seed: pseudo(i * 47 + direction * 5) * twoPi };
        group.add(thread);
        threeLayer.objects.push(thread);
      });
    }

    const knotGeometry = new THREE.TorusKnotGeometry(0.18, 0.035, 56, 7, 2, 5);
    for (let i = 0; i < 18; i += 1) {
      const knot = new THREE.Mesh(knotGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.28 + state.wireGlow * 0.1));
      const angle = i * phi * twoPi;
      knot.position.set(Math.cos(angle) * (2.4 + (i % 5) * 1.1), Math.sin(angle * 1.4) * 2.2, -8 - i * 2.1);
      knot.userData = { kind: "loomKnot", index: i, angle, seed: pseudo(i * 53 + 9) * twoPi };
      group.add(knot);
      threeLayer.objects.push(knot);
    }
  }

  function buildSignalLab(THREE, group, mood) {
    const towerGeometry = new THREE.BoxGeometry(0.32, 3.2, 0.32);
    const towerCount = Math.round(10 + state.density3d * 14);
    for (let i = 0; i < towerCount; i += 1) {
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.32 + state.wireGlow * 0.08);
      material.depthWrite = false;
      const tower = new THREE.Mesh(towerGeometry.clone(), material);
      const lane = i % 5;
      const z = -3 - Math.floor(i / 5) * 3.8 - pseudo(i * 17 + 3) * 3.2;
      tower.position.set((lane - 2) * 2.1 * state.fieldSpread, -0.9 + pseudo(i * 19 + 4) * 3.0, z);
      tower.rotation.y = (lane - 2) * 0.18;
      tower.scale.set(1, 1.1 + pseudo(i * 23 + 6) * 2.9, 1);
      tower.userData = { kind: "signalTower", index: i, lane, baseY: tower.position.y, seed: pseudo(i * 29 + 2) * twoPi };
      group.add(tower);
      threeLayer.objects.push(tower);
      const shell = addEdgeShell(THREE, tower, towerGeometry, colorAt(mood, i + 3), 0.18);
      shell.scale.set(1.08, 1.02, 1.08);
    }

    const scanGeometry = new THREE.TorusGeometry(1.55, 0.024, 8, 112);
    for (let i = 0; i < 10; i += 1) {
      const scan = new THREE.Mesh(scanGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 4), 0.18 + state.wireGlow * 0.1));
      scan.rotation.x = Math.PI * 0.5;
      scan.position.z = -2.4 - i * 3.9;
      scan.scale.setScalar(1.1 + i * 0.42);
      scan.userData = { kind: "signalScan", index: i, seed: pseudo(i * 31 + 7) * twoPi };
      group.add(scan);
      threeLayer.objects.push(scan);
    }
  }

  function buildCrystalRain(THREE, group, mood) {
    const dropCount = Math.round(56 + state.density3d * 92);
    const geometries = [
      new THREE.ConeGeometry(0.14, 1.45, 5, 1),
      new THREE.OctahedronGeometry(0.32, 0),
      new THREE.CylinderGeometry(0.045, 0.115, 1.75, 5),
    ];
    for (let i = 0; i < dropCount; i += 1) {
      const geometry = geometries[i % geometries.length].clone();
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.38 + state.wireGlow * 0.14);
      if (material.emissive) material.emissiveIntensity = 0.42 + state.wireGlow * 0.62;
      material.depthWrite = false;
      const drop = new THREE.Mesh(geometry, material);
      const lane = pseudo(i * 13 + 2);
      const x = (lane - 0.5) * 14 * state.fieldSpread;
      const y = -4.6 + pseudo(i * 17 + 3) * 17;
      const z = -3.5 - pseudo(i * 19 + 4) * (34 + state.depth * 26);
      drop.position.set(x, y, z);
      drop.rotation.set(pseudo(i * 23 + 5) * Math.PI, pseudo(i * 29 + 6) * Math.PI, pseudo(i * 31 + 7) * Math.PI);
      drop.scale.setScalar(0.8 + pseudo(i * 37 + 8) * 1.75);
      drop.userData = { kind: "rainDrop", index: i, x, y, z, speed: lerp(3.2, 10.4, pseudo(i * 41 + 9)), seed: pseudo(i * 43 + 10) * twoPi };
      group.add(drop);
      threeLayer.objects.push(drop);
      if (i % 2 === 0) {
        const shell = addEdgeShell(THREE, drop, geometry, colorAt(mood, i + 3), 0.2 + state.wireGlow * 0.08);
        shell.scale.setScalar(1.08);
      }
    }

    const veilPositions = [];
    for (let i = 0; i < 160; i += 1) {
      const x = (pseudo(i * 83 + 1) - 0.5) * 18 * state.fieldSpread;
      const y = -4 + pseudo(i * 89 + 2) * 15;
      const z = -4 - pseudo(i * 97 + 3) * (38 + state.depth * 24);
      const drift = (pseudo(i * 101 + 4) - 0.5) * 0.34;
      const length = 1.4 + pseudo(i * 103 + 5) * 3.8;
      veilPositions.push(x, y, z, x + drift, y - length, z + 0.4);
    }
    const veilGeometry = new THREE.BufferGeometry();
    veilGeometry.setAttribute("position", new THREE.Float32BufferAttribute(veilPositions, 3));
    const veil = new THREE.LineSegments(veilGeometry, new THREE.LineBasicMaterial({
      color: hexToNumber(colorAt(mood, 3)),
      transparent: true,
      opacity: 0.18 + state.wireGlow * 0.08,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    veil.userData = { kind: "rainVeil", seed: pseudo(711) * twoPi };
    group.add(veil);
    threeLayer.objects.push(veil);

    const poolGeometry = new THREE.TorusGeometry(1.18, 0.02, 8, 128);
    for (let i = 0; i < 14; i += 1) {
      const pool = new THREE.Mesh(poolGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 2)),
        transparent: true,
        opacity: clamp(0.18 + state.wireGlow * 0.08, 0.08, 0.36),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      pool.rotation.x = Math.PI * 0.5;
      pool.position.set((i % 4 - 1.5) * 3.5 * state.fieldSpread, -3.7 + Math.floor(i / 4) * 0.34, -6 - i * 3.2);
      pool.scale.setScalar(0.9 + (i % 4) * 0.3);
      pool.userData = { kind: "rainPool", index: i, seed: pseudo(i * 47 + 1) * twoPi };
      group.add(pool);
      threeLayer.objects.push(pool);
    }
  }

  function buildClockworkRoom(THREE, group, mood) {
    const gearCount = Math.round(9 + state.density3d * 12);
    for (let i = 0; i < gearCount; i += 1) {
      const radius = 1.05 + (i % 5) * 0.36;
      const gear = new THREE.Group();
      const gearColor = colorAt(mood, i + 1);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.07, 10, 128),
        new THREE.MeshBasicMaterial({
          color: hexToNumber(gearColor),
          transparent: true,
          opacity: clamp(0.22 + state.wireGlow * 0.09, 0.12, 0.42),
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      gear.add(ring);
      const hub = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 0.25, 0.045, 8, 72),
        new THREE.MeshBasicMaterial({
          color: hexToNumber(colorAt(mood, i + 4)),
          transparent: true,
          opacity: clamp(0.2 + state.wireGlow * 0.08, 0.1, 0.36),
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      gear.add(hub);
      const toothGeometry = new THREE.BoxGeometry(0.14, 0.48, 0.1);
      const toothMaterial = new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 3)),
        transparent: true,
        opacity: clamp(0.34 + state.wireGlow * 0.12, 0.18, 0.56),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      toothMaterial.depthWrite = false;
      const teeth = 12 + (i % 5) * 3;
      for (let j = 0; j < teeth; j += 1) {
        const tooth = new THREE.Mesh(toothGeometry.clone(), toothMaterial.clone());
        const angle = j * twoPi / teeth;
        tooth.position.set(Math.cos(angle) * (radius + 0.08), Math.sin(angle) * (radius + 0.08), 0);
        tooth.rotation.z = angle;
        gear.add(tooth);
      }
      const spokeGeometry = new THREE.BoxGeometry(0.055, radius * 1.55, 0.055);
      const spokeMaterial = new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 2)),
        transparent: true,
        opacity: clamp(0.16 + state.wireGlow * 0.07, 0.08, 0.3),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const spokeCount = 4 + (i % 3) * 2;
      for (let j = 0; j < spokeCount; j += 1) {
        const spoke = new THREE.Mesh(spokeGeometry.clone(), spokeMaterial.clone());
        spoke.rotation.z = j * twoPi / spokeCount;
        gear.add(spoke);
      }
      gear.position.set((i % 5 - 2) * 2.45 * state.fieldSpread, Math.sin(i * 1.3) * 2.0, -4.2 - Math.floor(i / 5) * 4.8 - (i % 3) * 1.05);
      gear.rotation.set(i * 0.12, i * 0.28, i * 0.44);
      gear.userData = { kind: "clockGear", index: i, seed: pseudo(i * 59 + 4) * twoPi, direction: i % 2 ? -1 : 1 };
      group.add(gear);
      threeLayer.objects.push(gear);
    }

    const handGeometry = new THREE.BoxGeometry(0.11, 4.8, 0.09);
    for (let i = 0; i < 10; i += 1) {
      const hand = new THREE.Mesh(handGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 4)),
        transparent: true,
        opacity: clamp(0.22 + state.wireGlow * 0.1, 0.12, 0.42),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      hand.position.set(Math.cos(i * phi * twoPi) * 4.2, Math.sin(i * 1.2) * 2.65, -6 - i * 3.2);
      hand.rotation.z = i * 0.7;
      hand.userData = { kind: "clockHand", index: i, seed: pseudo(i * 61 + 5) * twoPi, direction: i % 2 ? -1 : 1 };
      group.add(hand);
      threeLayer.objects.push(hand);
    }
  }

  function buildVoidBloom(THREE, group, mood) {
    const petalCount = Math.round(10 + state.density3d * 12);
    for (let i = 0; i < petalCount; i += 1) {
      const points = [];
      const angleBase = i * twoPi / petalCount;
      for (let j = 0; j <= 72; j += 1) {
        const t = j / 72;
        const petal = Math.sin(t * Math.PI);
        const angle = angleBase + (t - 0.5) * 0.9;
        const radius = (1.2 + petal * (3.4 + state.morph * 1.8)) * state.fieldSpread;
        points.push(new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.72,
          -9 - petal * (4 + state.depth * 9) + Math.cos(t * twoPi + i) * 0.8,
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 96, 0.018 + state.wireGlow * 0.008, 7, false);
      const petal = new THREE.Mesh(geometry, makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.22 + state.wireGlow * 0.1));
      petal.userData = { kind: "voidPetal", index: i, angle: angleBase, seed: pseudo(i * 67 + 7) * twoPi };
      group.add(petal);
      threeLayer.objects.push(petal);
    }

    const coreGeometry = new THREE.IcosahedronGeometry(0.95, 2);
    const coreMaterial = makeCrystalMaterial(THREE, colorAt(mood, 4), 0.52 + state.wireGlow * 0.12);
    if (coreMaterial.emissive) coreMaterial.emissiveIntensity = 0.6 + state.wireGlow * 0.6;
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.set(0, 0, -8.4);
    core.userData = { kind: "voidCore", seed: pseudo(1337) * twoPi };
    group.add(core);
    threeLayer.objects.push(core);
    addEdgeShell(THREE, core, coreGeometry, colorAt(mood, 8), 0.28 + state.wireGlow * 0.1);

    const haloGeometry = new THREE.TorusGeometry(2.3, 0.018, 8, 160);
    for (let i = 0; i < 5; i += 1) {
      const halo = new THREE.Mesh(haloGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 5)),
        transparent: true,
        opacity: clamp(0.15 + state.wireGlow * 0.08, 0.08, 0.32),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      halo.position.z = -8.6 - i * 0.45;
      halo.rotation.set(i * 0.64, i * 0.37, i * 0.51);
      halo.scale.set(1 + i * 0.2, 0.68 + i * 0.12, 1);
      halo.userData = { kind: "voidHalo", index: i, seed: pseudo(i * 157 + 11) * twoPi };
      group.add(halo);
      threeLayer.objects.push(halo);
    }

    const sporeGeometry = new THREE.IcosahedronGeometry(0.11, 1);
    for (let i = 0; i < 46; i += 1) {
      const spore = new THREE.Mesh(sporeGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.26 + state.wireGlow * 0.07));
      const angle = i * phi * twoPi;
      const radius = (1.6 + pseudo(i * 17 + 2) * 6.8) * state.fieldSpread;
      spore.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.2) * 3.4, -5 - pseudo(i * 23 + 5) * 36);
      spore.userData = { kind: "voidSpore", index: i, angle, radius, seed: pseudo(i * 29 + 9) * twoPi };
      group.add(spore);
      threeLayer.objects.push(spore);
    }
  }

  function buildMagneticInk(THREE, group, mood) {
    const coreGeometry = new THREE.IcosahedronGeometry(0.68, 2);
    for (let i = 0; i < 3; i += 1) {
      const coreMaterial = makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.5 + state.wireGlow * 0.12);
      if (coreMaterial.emissive) coreMaterial.emissiveIntensity = 0.72 + state.wireGlow * 0.72;
      const core = new THREE.Mesh(coreGeometry.clone(), coreMaterial);
      core.position.set((i - 1) * 1.8, Math.sin(i * 1.7) * 0.7, -7.5 - i * 1.6);
      core.userData = { kind: "inkCore", index: i, seed: pseudo(i * 211 + 3) * twoPi };
      group.add(core);
      threeLayer.objects.push(core);
      addEdgeShell(THREE, core, coreGeometry, colorAt(mood, i + 5), 0.3 + state.wireGlow * 0.1);
    }

    const spikeGeometry = new THREE.ConeGeometry(0.12, 1.6, 6, 1);
    const spikeCount = Math.round(46 + state.density3d * 54);
    for (let i = 0; i < spikeCount; i += 1) {
      const material = new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 1)),
        transparent: true,
        opacity: clamp(0.22 + state.wireGlow * 0.13, 0.12, 0.52),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const spike = new THREE.Mesh(spikeGeometry.clone(), material);
      const ring = Math.floor(i / 18);
      const angle = i * phi * twoPi;
      const radius = (1.4 + (i % 9) * 0.42 + ring * 0.55) * state.fieldSpread;
      const z = -5.2 - ring * 3.1 - pseudo(i * 17 + 4) * 8;
      spike.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.68, z);
      spike.rotation.set(Math.PI * 0.5, 0, angle - Math.PI * 0.5);
      spike.scale.setScalar(0.72 + pseudo(i * 23 + 5) * 1.1);
      spike.userData = { kind: "inkSpike", index: i, angle, radius, z, seed: pseudo(i * 29 + 7) * twoPi, size: spike.scale.x };
      group.add(spike);
      threeLayer.objects.push(spike);
    }

    for (let i = 0; i < 30; i += 1) {
      const points = [];
      const angle = i * phi * twoPi;
      const radius = (1.5 + pseudo(i * 31 + 1) * 4.6) * state.fieldSpread;
      for (let j = 0; j <= 64; j += 1) {
        const t = j / 64;
        const curl = angle + (t - 0.5) * (1.4 + state.morph * 1.2);
        const breathe = Math.sin(t * Math.PI);
        points.push(new THREE.Vector3(
          Math.cos(curl) * radius * (0.55 + breathe * 0.48),
          Math.sin(curl * 1.2) * radius * 0.44 + Math.sin(t * twoPi + i) * 0.38,
          -4.8 - t * (13 + state.depth * 12) - breathe * 2.8,
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 72, 0.01 + state.wireGlow * 0.006, 5, false);
      const material = new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 4)),
        transparent: true,
        opacity: clamp(0.14 + state.wireGlow * 0.07, 0.06, 0.3),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const thread = new THREE.Mesh(geometry, material);
      thread.userData = { kind: "inkThread", index: i, seed: pseudo(i * 37 + 9) * twoPi };
      group.add(thread);
      threeLayer.objects.push(thread);
    }

    const dropGeometry = new THREE.SphereGeometry(0.09, 12, 8);
    for (let i = 0; i < 38; i += 1) {
      const drop = new THREE.Mesh(dropGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 6), 0.42 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.8 + pseudo(i * 41 + 2) * 6.2) * state.fieldSpread;
      drop.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.4) * 2.7, -4.5 - pseudo(i * 43 + 3) * 23);
      drop.userData = { kind: "inkDrop", index: i, angle, radius, seed: pseudo(i * 47 + 8) * twoPi };
      group.add(drop);
      threeLayer.objects.push(drop);
    }
  }

  function buildSolarHarp(THREE, group, mood) {
    const stringCount = Math.round(12 + state.density3d * 10);
    for (let i = 0; i < stringCount; i += 1) {
      const x = (i - (stringCount - 1) / 2) * 0.52 * state.fieldSpread;
      const points = [];
      for (let j = 0; j <= 56; j += 1) {
        const t = j / 56;
        const curve = Math.sin(t * Math.PI) * (0.28 + state.morph * 0.18) * Math.sin(i * 1.7);
        points.push(new THREE.Vector3(x + curve, -4.1 + t * 8.2, -8.8 - Math.sin(t * Math.PI) * (1.4 + state.depth * 3.4)));
      }
      const geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 64, 0.012 + state.wireGlow * 0.004, 5, false);
      const material = new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 1)),
        transparent: true,
        opacity: clamp(0.22 + state.wireGlow * 0.08, 0.12, 0.4),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const string = new THREE.Mesh(geometry, material);
      string.userData = { kind: "solarString", index: i, x, seed: pseudo(i * 67 + 5) * twoPi };
      group.add(string);
      threeLayer.objects.push(string);
    }

    const ringGeometry = new THREE.TorusGeometry(2.4, 0.025, 8, 160);
    for (let i = 0; i < 8; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 3)),
        transparent: true,
        opacity: clamp(0.16 + state.wireGlow * 0.08, 0.08, 0.34),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      ring.position.z = -9.6 - i * 1.2;
      ring.rotation.set(Math.PI * 0.5 + i * 0.14, i * 0.18, i * 0.38);
      ring.scale.set(1 + i * 0.16, 0.46 + i * 0.08, 1);
      ring.userData = { kind: "solarRing", index: i, seed: pseudo(i * 71 + 6) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }

    const noteGeometry = new THREE.OctahedronGeometry(0.12, 0);
    for (let i = 0; i < 34; i += 1) {
      const stringIndex = i % stringCount;
      const x = (stringIndex - (stringCount - 1) / 2) * 0.52 * state.fieldSpread;
      const note = new THREE.Mesh(noteGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 5), 0.5 + state.wireGlow * 0.08));
      note.position.set(x, -3.8 + pseudo(i * 79 + 1) * 7.8, -8.2 - pseudo(i * 83 + 2) * 8);
      note.userData = { kind: "solarNote", index: i, stringIndex, x, seed: pseudo(i * 89 + 3) * twoPi };
      group.add(note);
      threeLayer.objects.push(note);
    }
  }

  function buildDataOrchard(THREE, group, mood) {
    group.position.set(0, -0.25, 1.7);
    group.scale.setScalar(1.42);
    const levels = [[new THREE.Vector3(0, -3.6, -7.6)]];
    const branchMaterial = new THREE.MeshBasicMaterial({
      color: hexToNumber(colorAt(mood, 1)),
      transparent: true,
      opacity: clamp(0.26 + state.wireGlow * 0.1, 0.14, 0.48),
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const trunkPoints = [
      new THREE.Vector3(0, -4.5, -7.2),
      new THREE.Vector3(-0.24, -2.4, -8.1),
      new THREE.Vector3(0.28, -0.2, -9.0),
      new THREE.Vector3(0, 2.3, -10.4),
      new THREE.Vector3(0.18, 4.4, -12.1),
    ];
    const trunk = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(trunkPoints), 74, 0.06 + state.wireGlow * 0.014, 7, false),
      new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, 3)),
        transparent: true,
        opacity: clamp(0.34 + state.wireGlow * 0.12, 0.18, 0.58),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    trunk.userData = { kind: "orchardTrunk", seed: pseudo(919) * twoPi };
    group.add(trunk);
    threeLayer.objects.push(trunk);

    for (let level = 1; level <= 5; level += 1) {
      const count = 3 + level * 4;
      const previous = levels[level - 1];
      const current = [];
      for (let i = 0; i < count; i += 1) {
        const parent = previous[i % previous.length];
        const angle = i * phi * twoPi + level * 0.36;
        const spread = (0.7 + level * 0.68) * state.fieldSpread;
        const node = new THREE.Vector3(
          Math.cos(angle) * spread + parent.x * 0.32,
          -3.6 + level * 1.35 + Math.sin(angle * 1.3) * 0.38,
          -7.6 - level * (1.9 + state.depth * 1.4) + Math.sin(angle) * 1.1,
        );
        current.push(node);
        const mid = parent.clone().lerp(node, 0.52);
        mid.x += Math.sin(angle * 2.0) * 0.32;
        mid.y += 0.38 + Math.cos(angle) * 0.18;
        const branch = new THREE.Mesh(
          new THREE.TubeGeometry(new THREE.CatmullRomCurve3([parent, mid, node]), 42, 0.02 + level * 0.007, 6, false),
          branchMaterial.clone(),
        );
        branch.material.color.set(hexToNumber(colorAt(mood, level + i)));
        branch.userData = { kind: "orchardBranch", index: i, level, seed: pseudo(level * 101 + i * 7) * twoPi };
        group.add(branch);
        threeLayer.objects.push(branch);

        if (level > 1 && i % 2 === 0) {
          const fruit = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.18 + level * 0.045, 1),
            makeCrystalMaterial(THREE, colorAt(mood, i + level * 3), 0.52 + state.wireGlow * 0.1),
          );
          fruit.position.copy(node);
          fruit.userData = { kind: "orchardFruit", index: i, level, anchor: node.clone(), seed: pseudo(level * 131 + i * 11) * twoPi };
          group.add(fruit);
          threeLayer.objects.push(fruit);
        }
      }
      levels[level] = current;
    }

    const canopyGeometry = new THREE.TorusGeometry(2.2, 0.018, 8, 128);
    for (let i = 0; i < 7; i += 1) {
      const canopy = new THREE.Mesh(canopyGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 5)),
        transparent: true,
        opacity: clamp(0.18 + state.wireGlow * 0.08, 0.08, 0.34),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      canopy.position.set(Math.sin(i * 1.6) * 0.8, 0.2 + i * 0.42, -9.4 - i * 0.72);
      canopy.rotation.set(Math.PI * 0.52 + i * 0.13, i * 0.31, i * 0.58);
      canopy.scale.set(1 + i * 0.18, 0.5 + i * 0.08, 1);
      canopy.userData = { kind: "orchardCanopy", index: i, seed: pseudo(i * 181 + 12) * twoPi };
      group.add(canopy);
      threeLayer.objects.push(canopy);
    }

    const pulseGeometry = new THREE.TorusGeometry(0.36, 0.008, 6, 72);
    for (let i = 0; i < 18; i += 1) {
      const pulse = new THREE.Mesh(pulseGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 4), 0.16 + state.wireGlow * 0.08));
      const anchor = levels[3 + (i % 3)][i % levels[3 + (i % 3)].length];
      pulse.position.copy(anchor);
      pulse.rotation.x = Math.PI * 0.5;
      pulse.userData = { kind: "orchardPulse", index: i, seed: pseudo(i * 149 + 4) * twoPi };
      group.add(pulse);
      threeLayer.objects.push(pulse);
    }
  }

  function buildMirrorChoir(THREE, group, mood) {
    group.position.set(0, -0.08, 2.05);
    group.scale.setScalar(1.24);
    const mirrorGeometry = new THREE.CircleGeometry(1.12, 56);
    const mouthGeometry = new THREE.TorusGeometry(0.32, 0.022, 8, 80);
    const eyeGeometry = new THREE.TorusGeometry(0.145, 0.015, 6, 42);
    const maskCount = Math.round(12 + state.density3d * 10);
    for (let i = 0; i < maskCount; i += 1) {
      const mask = new THREE.Group();
      const front = i < 3;
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 1), (front ? 0.58 : 0.44) + state.wireGlow * 0.14);
      if (material.emissive) material.emissiveIntensity = 0.68 + state.wireGlow * 0.56;
      const face = new THREE.Mesh(mirrorGeometry.clone(), material);
      face.scale.set(front ? 0.9 : 0.78, front ? 1.28 : 1.18, 1);
      mask.add(face);
      const mouth = new THREE.Mesh(mouthGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 3)),
        transparent: true,
        opacity: clamp((front ? 0.46 : 0.34) + state.wireGlow * 0.12, 0.18, 0.68),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      mouth.position.set(0, -0.26, 0.03);
      mouth.scale.set(front ? 1.32 : 1.1, 0.48 + (i % 4) * 0.18, 1);
      mask.add(mouth);
      [-0.28, 0.28].forEach((x, eyeIndex) => {
        const eye = new THREE.Mesh(eyeGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + eyeIndex + 5), (front ? 0.36 : 0.26) + state.wireGlow * 0.1));
        eye.position.set(x, 0.2, 0.04);
        mask.add(eye);
      });
      const angle = i * twoPi / maskCount;
      const ring = front ? 0.45 + i * 0.72 : 1.55 + (i % 4) * 0.58;
      const baseZ = front ? -2.5 - i * 0.34 : -4.35 - (i % 5) * 0.78;
      mask.position.set(Math.cos(angle) * ring * state.fieldSpread, Math.sin(angle * 1.4) * (front ? 0.75 : 1.55), baseZ);
      mask.rotation.set(Math.sin(angle) * 0.18, -angle * 0.22, angle + Math.PI * 0.5);
      mask.scale.setScalar(front ? 1.18 : 1);
      mask.userData = { kind: "choirMask", index: i, angle, ring, baseZ, frontScale: front ? 1.18 : 1, ySpread: front ? 0.75 : 1.55, seed: pseudo(i * 191 + 8) * twoPi };
      group.add(mask);
      threeLayer.objects.push(mask);
    }

    const haloGeometry = new THREE.TorusGeometry(1.9, 0.024, 8, 160);
    for (let i = 0; i < 7; i += 1) {
      const halo = new THREE.Mesh(haloGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 6)),
        transparent: true,
        opacity: clamp(0.22 + state.wireGlow * 0.09, 0.1, 0.4),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      halo.position.z = -3.6 - i * 0.55;
      halo.rotation.set(i * 0.42, Math.PI * 0.5 + i * 0.18, i * 0.33);
      halo.scale.set(1 + i * 0.16, 0.72 + i * 0.11, 1);
      halo.userData = { kind: "choirHalo", index: i, seed: pseudo(i * 193 + 9) * twoPi };
      group.add(halo);
      threeLayer.objects.push(halo);
    }

    const shardGeometry = new THREE.PlaneGeometry(0.46, 1.9);
    for (let i = 0; i < 34; i += 1) {
      const shard = new THREE.Mesh(shardGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 2)),
        transparent: true,
        opacity: clamp(0.14 + state.wireGlow * 0.06, 0.07, 0.28),
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      const angle = i * phi * twoPi;
      const radius = (1.8 + pseudo(i * 31 + 2) * 4.6) * state.fieldSpread;
      shard.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.2) * 3.0, -3.2 - pseudo(i * 37 + 3) * 14);
      shard.rotation.set(pseudo(i * 41 + 4) * Math.PI, angle, pseudo(i * 43 + 5) * Math.PI);
      shard.userData = { kind: "choirShard", index: i, angle, radius, seed: pseudo(i * 47 + 6) * twoPi };
      group.add(shard);
      threeLayer.objects.push(shard);
    }
  }

  function buildTidalEngine(THREE, group, mood) {
    group.position.set(0, -0.08, 1.8);
    group.scale.setScalar(1.18);

    const wheelGeometry = new THREE.TorusGeometry(1.36, 0.05, 10, 168);
    const innerWheelGeometry = new THREE.TorusGeometry(0.58, 0.026, 8, 120);
    const spokeGeometry = new THREE.BoxGeometry(0.052, 2.55, 0.018);
    for (let i = 0; i < 5; i += 1) {
      const wheel = new THREE.Group();
      const ring = new THREE.Mesh(wheelGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 2), 0.36 + state.wireGlow * 0.12));
      wheel.add(ring);
      const innerRing = new THREE.Mesh(innerWheelGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 5), 0.3 + state.wireGlow * 0.1));
      wheel.add(innerRing);
      for (let s = 0; s < 10; s += 1) {
        const spoke = new THREE.Mesh(spokeGeometry.clone(), new THREE.MeshBasicMaterial({
          color: hexToNumber(colorAt(mood, i + s + 6)),
          transparent: true,
          opacity: clamp(0.26 + state.wireGlow * 0.1, 0.1, 0.46),
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }));
        spoke.rotation.z = s * Math.PI / 10;
        wheel.add(spoke);
      }
      wheel.position.set((i - 2) * 1.48 * state.fieldSpread, -0.25 + Math.sin(i * 1.1) * 0.58, -2.85 - i * 0.5);
      wheel.rotation.set(0, i * 0.05, i * 0.42);
      wheel.scale.setScalar(0.78 + i * 0.13);
      wheel.userData = { kind: "tidalWheel", index: i, seed: pseudo(i * 207 + 4) * twoPi };
      group.add(wheel);
      threeLayer.objects.push(wheel);
    }

    for (let i = 0; i < 20; i += 1) {
      const points = [];
      const y = -3.4 + i * 0.38;
      for (let j = 0; j <= 92; j += 1) {
        const t = j / 92;
        const x = (t - 0.5) * 11.5 * state.fieldSpread;
        const wave = Math.sin(t * twoPi * (1.4 + (i % 4) * 0.35) + i * 0.8) * (0.34 + state.morph * 0.22);
        points.push(new THREE.Vector3(x, y + wave, -4.3 - i * 0.32 - Math.sin(t * Math.PI) * (1.6 + state.depth * 2.2)));
      }
      const waveLine = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 96, 0.02 + state.wireGlow * 0.006, 6, false),
        new THREE.MeshBasicMaterial({
          color: hexToNumber(colorAt(mood, i + 1)),
          transparent: true,
          opacity: clamp(0.28 + state.wireGlow * 0.1, 0.12, 0.5),
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      waveLine.userData = { kind: "tidalWave", index: i, seed: pseudo(i * 211 + 1) * twoPi };
      group.add(waveLine);
      threeLayer.objects.push(waveLine);
    }

    const shellGeometry = new THREE.TorusKnotGeometry(0.36, 0.082, 82, 9, 2, 5);
    for (let i = 0; i < 20; i += 1) {
      const shell = new THREE.Mesh(shellGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.48 + state.wireGlow * 0.1));
      const angle = i * phi * twoPi;
      const radius = (0.95 + pseudo(i * 53 + 2) * 4.8) * state.fieldSpread;
      shell.position.set(Math.cos(angle) * radius, -2.6 + pseudo(i * 59 + 3) * 5.1, -3.8 - pseudo(i * 61 + 4) * 13);
      shell.scale.setScalar(0.9 + pseudo(i * 67 + 5) * 1.05);
      shell.userData = { kind: "tidalShell", index: i, angle, radius, seed: pseudo(i * 71 + 6) * twoPi };
      group.add(shell);
      threeLayer.objects.push(shell);
      addEdgeShell(THREE, shell, shellGeometry, colorAt(mood, i + 7), 0.22 + state.wireGlow * 0.08);
    }

    const buoyGeometry = new THREE.SphereGeometry(0.22, 18, 12);
    for (let i = 0; i < 34; i += 1) {
      const buoy = new THREE.Mesh(buoyGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 6), 0.54 + state.wireGlow * 0.1));
      const x = (pseudo(i * 73 + 1) - 0.5) * 10.5 * state.fieldSpread;
      const y = -2.9 + pseudo(i * 79 + 2) * 5.8;
      const z = -3.3 - pseudo(i * 83 + 3) * 13;
      buoy.position.set(x, y, z);
      buoy.userData = { kind: "tidalBuoy", index: i, anchor: { x, y, z }, seed: pseudo(i * 89 + 4) * twoPi };
      group.add(buoy);
      threeLayer.objects.push(buoy);
    }
  }

  function buildCometRunes(THREE, group, mood) {
    group.position.set(0.15, -0.05, 1.85);
    group.scale.setScalar(1.2);
    const cometGeometry = new THREE.IcosahedronGeometry(0.28, 1);
    const tailGeometry = new THREE.ConeGeometry(0.14, 3.4, 7, 1, true);
    for (let i = 0; i < 30; i += 1) {
      const comet = new THREE.Group();
      const head = new THREE.Mesh(cometGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.55 + state.wireGlow * 0.08));
      const tail = new THREE.Mesh(tailGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 3)),
        transparent: true,
        opacity: clamp(0.28 + state.wireGlow * 0.1, 0.12, 0.52),
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      tail.position.y = -1.62;
      comet.add(head);
      comet.add(tail);
      const lane = i % 7;
      const x = (lane - 3) * 1.62 * state.fieldSpread + (pseudo(i * 97 + 1) - 0.5) * 0.66;
      const y = -3.7 + pseudo(i * 101 + 2) * 7.2;
      const z = -3.7 - Math.floor(i / 7) * 3.2 - pseudo(i * 103 + 3) * 2.6;
      comet.position.set(x, y, z);
      comet.rotation.set(Math.PI * 0.5 + pseudo(i * 107 + 4) * 0.7, 0, pseudo(i * 109 + 5) * twoPi);
      comet.scale.setScalar(0.92 + pseudo(i * 113 + 6) * 1.45);
      comet.userData = { kind: "cometBody", index: i, lane, x, y, z, speed: lerp(2.0, 7.8, pseudo(i * 127 + 7)), seed: pseudo(i * 131 + 8) * twoPi };
      group.add(comet);
      threeLayer.objects.push(comet);
    }

    const glyphPatterns = [
      [[-0.4, -0.4, 0.4, 0.4], [0.4, -0.4, -0.4, 0.4], [0, -0.55, 0, 0.55]],
      [[-0.45, 0, 0.45, 0], [0, -0.5, 0, 0.5], [-0.3, -0.35, 0.3, 0.35]],
      [[-0.45, -0.35, 0, 0.5], [0, 0.5, 0.45, -0.35], [-0.28, 0.05, 0.28, 0.05]],
      [[-0.4, -0.5, -0.1, 0.5], [-0.1, 0.5, 0.4, -0.5], [-0.25, -0.05, 0.25, -0.05]],
    ];
    for (let i = 0; i < 28; i += 1) {
      const pattern = glyphPatterns[i % glyphPatterns.length];
      const positions = [];
      pattern.forEach(([x1, y1, x2, y2]) => positions.push(x1, y1, 0, x2, y2, 0));
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      const glyph = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 5)),
        transparent: true,
        opacity: clamp(0.28 + state.wireGlow * 0.1, 0.12, 0.52),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      const angle = i * phi * twoPi;
      const radius = (1.25 + pseudo(i * 139 + 2) * 4.8) * state.fieldSpread;
      glyph.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.25) * 3.1, -3.6 - pseudo(i * 149 + 3) * 15);
      glyph.rotation.set(pseudo(i * 151 + 4) * Math.PI, pseudo(i * 157 + 5) * Math.PI, angle);
      glyph.scale.setScalar(1.1 + pseudo(i * 163 + 6) * 2.2);
      glyph.userData = { kind: "cometRune", index: i, angle, radius, seed: pseudo(i * 167 + 7) * twoPi };
      group.add(glyph);
      threeLayer.objects.push(glyph);
    }
  }

  function buildOrigamiStorm(THREE, group, mood) {
    group.position.set(0, -0.05, 2.1);
    group.scale.setScalar(1.34);
    const wingGeometry = new THREE.BufferGeometry();
    wingGeometry.setAttribute("position", new THREE.Float32BufferAttribute([
      0, 0, 0,
      0.92, 0.08, 0.03,
      0.18, 0.62, -0.03,
    ], 3));
    wingGeometry.setIndex([0, 1, 2]);
    wingGeometry.computeVertexNormals();
    const creaseGeometry = new THREE.BufferGeometry();
    creaseGeometry.setAttribute("position", new THREE.Float32BufferAttribute([
      0, 0, 0.04, 0.92, 0.08, 0.05,
      0, 0, 0.04, 0.18, 0.62, 0.04,
      0.18, 0.62, 0.04, 0.92, 0.08, 0.04,
    ], 3));
    const birdCount = Math.round(18 + state.density3d * 18);
    for (let i = 0; i < birdCount; i += 1) {
      const bird = new THREE.Group();
      const front = i < 5;
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 1), (front ? 0.72 : 0.58) + state.wireGlow * 0.1);
      if (material.emissive) material.emissiveIntensity = 0.48 + state.wireGlow * 0.46;
      const right = new THREE.Mesh(wingGeometry.clone(), material);
      const left = new THREE.Mesh(wingGeometry.clone(), material.clone());
      left.scale.x = -1;
      bird.add(right);
      bird.add(left);
      const crease = new THREE.LineSegments(creaseGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 4), 0.34 + state.wireGlow * 0.08));
      bird.add(crease);
      const angle = i * phi * twoPi;
      const radius = (1.1 + pseudo(i * 17 + 2) * 5.8) * state.fieldSpread;
      const anchor = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle * 1.4) * 3.1,
        z: front ? -2.2 - i * 0.42 : -3.2 - pseudo(i * 23 + 3) * 12,
      };
      bird.position.set(anchor.x, anchor.y, anchor.z);
      bird.rotation.set(pseudo(i * 29 + 4) * Math.PI, angle, pseudo(i * 31 + 5) * twoPi);
      bird.scale.setScalar((front ? 1.12 : 0.76) + pseudo(i * 37 + 6) * 1.2);
      bird.userData = { kind: "origamiBird", index: i, angle, radius, anchor, frontScale: front ? 1.08 : 0.72, seed: pseudo(i * 41 + 7) * twoPi };
      group.add(bird);
      threeLayer.objects.push(bird);
    }

    const sheetGeometry = new THREE.PlaneGeometry(0.54, 2.1, 1, 4);
    for (let i = 0; i < 30; i += 1) {
      const sheet = new THREE.Mesh(sheetGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 2)),
        transparent: true,
        opacity: clamp(0.18 + state.wireGlow * 0.07, 0.08, 0.36),
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      const angle = i * twoPi / 30;
      const radius = (2 + pseudo(i * 43 + 2) * 5.2) * state.fieldSpread;
      sheet.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.7) * 3.4, -3.1 - pseudo(i * 47 + 3) * 12);
      sheet.rotation.set(pseudo(i * 53 + 4) * Math.PI, angle, pseudo(i * 59 + 5) * Math.PI);
      sheet.userData = { kind: "origamiSheet", index: i, angle, radius, seed: pseudo(i * 61 + 6) * twoPi };
      group.add(sheet);
      threeLayer.objects.push(sheet);
    }
  }

  function buildJellyfishChapel(THREE, group, mood) {
    group.position.set(0, -0.15, 2.25);
    group.scale.setScalar(1.28);
    const domeGeometry = new THREE.SphereGeometry(0.52, 28, 12, 0, twoPi, 0, Math.PI * 0.62);
    const haloGeometry = new THREE.TorusGeometry(0.56, 0.018, 7, 96);
    const tentacleMaterialCache = [];
    const jellyCount = Math.round(10 + state.density3d * 9);
    for (let i = 0; i < jellyCount; i += 1) {
      const jelly = new THREE.Group();
      const front = i < 4;
      const dome = new THREE.Mesh(domeGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), (front ? 0.58 : 0.44) + state.wireGlow * 0.12));
      dome.scale.set(front ? 1.38 : 1.12, front ? 0.72 : 0.58, front ? 1.38 : 1.12);
      jelly.add(dome);
      const halo = new THREE.Mesh(haloGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 4), 0.32 + state.wireGlow * 0.1));
      halo.rotation.x = Math.PI * 0.5;
      halo.position.y = -0.02;
      jelly.add(halo);
      for (let t = 0; t < 7; t += 1) {
        const points = [];
        const spread = (t - 3) * 0.13;
        for (let p = 0; p < 8; p += 1) {
          const d = p / 7;
          points.push(new THREE.Vector3(spread + Math.sin(d * twoPi + t) * 0.08, -0.18 - d * (1.15 + (t % 3) * 0.24), Math.cos(d * Math.PI + t) * 0.06));
        }
        const tentacleGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const tentacleMaterial = tentacleMaterialCache[t] || makeLineMaterial(THREE, colorAt(mood, i + t + 6), 0.28 + state.wireGlow * 0.08);
        tentacleMaterialCache[t] = tentacleMaterial;
        const tentacle = new THREE.Line(tentacleGeometry, tentacleMaterial.clone());
        tentacle.userData = { kind: "jellyTentacle", seed: pseudo(i * 67 + t * 11) * twoPi };
        jelly.add(tentacle);
      }
      const angle = i * phi * twoPi;
      const radius = (0.9 + pseudo(i * 71 + 1) * 5.4) * state.fieldSpread;
      const anchor = {
        x: front ? (i - 1.5) * 1.08 * state.fieldSpread : Math.cos(angle) * radius,
        y: front ? -0.85 + Math.sin(i) * 0.48 : -2.4 + pseudo(i * 73 + 2) * 4.8,
        z: front ? -2.25 - i * 0.62 : -3.4 - pseudo(i * 79 + 3) * 12,
      };
      jelly.position.set(anchor.x, anchor.y, anchor.z);
      jelly.rotation.set(0.12 * Math.sin(angle), -angle * 0.12, angle);
      jelly.scale.setScalar((front ? 1.2 : 0.82) + pseudo(i * 83 + 4) * 1.18);
      jelly.userData = { kind: "jellyBody", index: i, anchor, angle, frontScale: front ? 1.16 : 0.78, seed: pseudo(i * 89 + 5) * twoPi };
      group.add(jelly);
      threeLayer.objects.push(jelly);
    }

    const bubbleGeometry = new THREE.SphereGeometry(0.12, 12, 8);
    for (let i = 0; i < 44; i += 1) {
      const bubble = new THREE.Mesh(bubbleGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 5), 0.24 + state.wireGlow * 0.06));
      const x = (pseudo(i * 97 + 1) - 0.5) * 10.5 * state.fieldSpread;
      const y = -3.7 + pseudo(i * 101 + 2) * 7.4;
      const z = -2.8 - pseudo(i * 103 + 3) * 14;
      bubble.position.set(x, y, z);
      bubble.scale.setScalar(0.55 + pseudo(i * 107 + 4) * 1.35);
      bubble.userData = { kind: "jellyBubble", index: i, anchor: { x, y, z }, seed: pseudo(i * 109 + 5) * twoPi };
      group.add(bubble);
      threeLayer.objects.push(bubble);
    }
  }

  function buildObsidianSpires(THREE, group, mood) {
    group.position.set(0, -0.9, 1.8);
    group.scale.setScalar(1.12);
    const spireGeometry = new THREE.ConeGeometry(0.42, 3.8, 6, 2, false);
    const ringGeometry = new THREE.TorusGeometry(0.62, 0.018, 7, 96);
    for (let i = 0; i < 18; i += 1) {
      const spire = new THREE.Group();
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x09070f,
        emissive: hexToNumber(colorAt(mood, i + 2)),
        emissiveIntensity: 0.2 + state.wireGlow * 0.42,
        metalness: 0.42,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        transparent: true,
        opacity: 0.88,
        side: THREE.DoubleSide,
      });
      const tower = new THREE.Mesh(spireGeometry.clone(), material);
      tower.position.y = 1.5;
      spire.add(tower);
      addEdgeShell(THREE, tower, spireGeometry, colorAt(mood, i + 4), 0.24 + state.wireGlow * 0.08);
      const rings = 2 + (i % 3);
      for (let r = 0; r < rings; r += 1) {
        const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + r + 6), 0.34 + state.wireGlow * 0.08));
        ring.position.y = 0.42 + r * 0.82;
        ring.rotation.x = Math.PI * 0.5;
        ring.scale.setScalar(0.7 + r * 0.26);
        spire.add(ring);
      }
      const column = i % 6;
      const row = Math.floor(i / 6);
      const x = (column - 2.5) * 1.6 * state.fieldSpread + (pseudo(i * 113 + 1) - 0.5) * 0.5;
      const z = -2.8 - row * 2.8 - pseudo(i * 127 + 2) * 1.1;
      const y = -2.0 + pseudo(i * 131 + 3) * 0.8;
      spire.position.set(x, y, z);
      spire.rotation.y = (column - 2.5) * 0.12;
      spire.scale.setScalar(0.72 + pseudo(i * 137 + 4) * 0.86);
      spire.userData = { kind: "obsidianSpire", index: i, anchor: { x, y, z }, seed: pseudo(i * 139 + 5) * twoPi };
      group.add(spire);
      threeLayer.objects.push(spire);
    }

    const beamGeometry = new THREE.CylinderGeometry(0.025, 0.025, 9, 8);
    for (let i = 0; i < 14; i += 1) {
      const beam = new THREE.Mesh(beamGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 8)),
        transparent: true,
        opacity: clamp(0.16 + state.wireGlow * 0.08, 0.06, 0.34),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      const x = (pseudo(i * 149 + 1) - 0.5) * 9.5 * state.fieldSpread;
      const z = -2.8 - pseudo(i * 151 + 2) * 18;
      beam.position.set(x, 1.0, z);
      beam.rotation.z = (pseudo(i * 157 + 3) - 0.5) * 0.18;
      beam.userData = { kind: "obsidianBeam", index: i, anchor: { x, z }, seed: pseudo(i * 163 + 4) * twoPi };
      group.add(beam);
      threeLayer.objects.push(beam);
    }
  }

  function buildTapeSpirits(THREE, group, mood) {
    group.position.set(0, -0.05, 2.1);
    group.scale.setScalar(1.28);
    const reelGeometry = new THREE.TorusGeometry(0.84, 0.055, 10, 144);
    const hubGeometry = new THREE.CylinderGeometry(0.17, 0.17, 0.08, 24);
    const spokeGeometry = new THREE.BoxGeometry(0.045, 1.25, 0.025);
    for (let i = 0; i < 7; i += 1) {
      const reel = new THREE.Group();
      const ring = new THREE.Mesh(reelGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 1), 0.42 + state.wireGlow * 0.1));
      const hub = new THREE.Mesh(hubGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.44 + state.wireGlow * 0.08));
      hub.rotation.x = Math.PI * 0.5;
      reel.add(ring);
      reel.add(hub);
      for (let s = 0; s < 6; s += 1) {
        const spoke = new THREE.Mesh(spokeGeometry.clone(), new THREE.MeshBasicMaterial({
          color: hexToNumber(colorAt(mood, i + s + 5)),
          transparent: true,
          opacity: clamp(0.2 + state.wireGlow * 0.08, 0.08, 0.38),
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }));
        spoke.rotation.z = s * Math.PI / 6;
        reel.add(spoke);
      }
      const angle = i * twoPi / 7;
      const x = Math.cos(angle) * (2.1 + (i % 2) * 0.8) * state.fieldSpread;
      const y = Math.sin(angle * 1.3) * 2.3;
      const z = -2.55 - i * 0.95;
      reel.position.set(x, y, z);
      reel.rotation.set(0, angle * 0.12, angle);
      reel.scale.setScalar(0.76 + (i % 3) * 0.16);
      reel.userData = { kind: "tapeReel", index: i, anchor: { x, y, z }, seed: pseudo(i * 167 + 1) * twoPi };
      group.add(reel);
      threeLayer.objects.push(reel);
    }

    for (let i = 0; i < 12; i += 1) {
      const points = [];
      for (let j = 0; j <= 72; j += 1) {
        const t = j / 72;
        const x = (t - 0.5) * (9.5 + (i % 3) * 1.4) * state.fieldSpread;
        const y = Math.sin(t * twoPi * (1.2 + (i % 4) * 0.35) + i) * (1.0 + state.morph * 0.4) + (i - 5.5) * 0.22;
        const z = -2.7 - i * 0.58 - Math.sin(t * Math.PI) * (1.6 + state.depth * 2.0);
        points.push(new THREE.Vector3(x, y, z));
      }
      const ribbon = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 96, 0.022 + state.wireGlow * 0.005, 6, false),
        new THREE.MeshBasicMaterial({
          color: hexToNumber(colorAt(mood, i + 6)),
          transparent: true,
          opacity: clamp(0.32 + state.wireGlow * 0.1, 0.12, 0.56),
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      ribbon.userData = { kind: "tapeRibbon", index: i, seed: pseudo(i * 173 + 2) * twoPi };
      group.add(ribbon);
      threeLayer.objects.push(ribbon);
    }

    const sliceGeometry = new THREE.PlaneGeometry(0.16, 1.25);
    for (let i = 0; i < 34; i += 1) {
      const slice = new THREE.Mesh(sliceGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 9)),
        transparent: true,
        opacity: clamp(0.18 + state.wireGlow * 0.07, 0.07, 0.36),
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      const angle = i * phi * twoPi;
      const radius = (1.8 + pseudo(i * 179 + 1) * 5.8) * state.fieldSpread;
      slice.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.1) * 3.3, -2.9 - pseudo(i * 181 + 2) * 12);
      slice.rotation.set(pseudo(i * 191 + 3) * Math.PI, angle, pseudo(i * 193 + 4) * Math.PI);
      slice.userData = { kind: "tapeSlice", index: i, angle, radius, seed: pseudo(i * 197 + 5) * twoPi };
      group.add(slice);
      threeLayer.objects.push(slice);
    }
  }

  function buildMothLanterns(THREE, group, mood) {
    group.position.set(0, -0.06, 2.25);
    group.scale.setScalar(1.48);
    const lanternGeometry = new THREE.SphereGeometry(0.52, 28, 18);
    const haloGeometry = new THREE.TorusGeometry(0.74, 0.024, 8, 112);
    const wingGeometry = new THREE.BufferGeometry();
    wingGeometry.setAttribute("position", new THREE.Float32BufferAttribute([
      0, 0, 0,
      0.72, 0.18, 0.04,
      0.18, 0.56, -0.02,
    ], 3));
    wingGeometry.setIndex([0, 1, 2]);
    wingGeometry.computeVertexNormals();
    const lanternCount = 11;
    const lanterns = [];
    for (let i = 0; i < lanternCount; i += 1) {
      const angle = i * twoPi / lanternCount;
      const x = Math.cos(angle) * (2.25 + (i % 3) * 0.78) * state.fieldSpread;
      const y = Math.sin(angle * 1.4) * 2.05 + (i % 2 ? 0.42 : -0.28);
      const z = -2.35 - i * 0.68;
      const lantern = new THREE.Group();
      const core = new THREE.Mesh(lanternGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.74 + state.wireGlow * 0.14));
      if (core.material?.emissive) core.material.emissiveIntensity = 0.88 + state.wireGlow * 0.72;
      const halo = new THREE.Mesh(haloGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 3), 0.56 + state.wireGlow * 0.14));
      halo.rotation.x = Math.PI * 0.5;
      lantern.add(core);
      lantern.add(halo);
      lantern.position.set(x, y, z);
      lantern.scale.setScalar(0.9 + (i % 4) * 0.13);
      lantern.userData = { kind: "mothLantern", index: i, anchor: { x, y, z }, seed: pseudo(i * 211 + 2) * twoPi };
      lanterns.push({ x, y, z });
      group.add(lantern);
      threeLayer.objects.push(lantern);
    }

    const mothCount = Math.round(42 + state.density3d * 30);
    for (let i = 0; i < mothCount; i += 1) {
      const moth = new THREE.Group();
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.54 + state.wireGlow * 0.1);
      if (material.emissive) material.emissiveIntensity = 0.5 + state.wireGlow * 0.46;
      const left = new THREE.Mesh(wingGeometry.clone(), material);
      const right = new THREE.Mesh(wingGeometry.clone(), material.clone());
      left.scale.x = -1;
      moth.add(left);
      moth.add(right);
      const lantern = lanterns[i % lanterns.length];
      const angle = pseudo(i * 223 + 1) * twoPi;
      const radius = 0.65 + pseudo(i * 227 + 2) * 1.45;
      moth.position.set(lantern.x + Math.cos(angle) * radius, lantern.y + Math.sin(angle * 1.3) * radius * 0.65, lantern.z + Math.sin(angle) * 0.7);
      moth.rotation.set(pseudo(i * 229 + 3) * Math.PI, angle, pseudo(i * 233 + 4) * twoPi);
      moth.scale.setScalar(0.36 + pseudo(i * 239 + 5) * 0.62);
      moth.userData = { kind: "mothBody", index: i, lantern: i % lanterns.length, anchor: lantern, angle, radius, seed: pseudo(i * 241 + 6) * twoPi };
      group.add(moth);
      threeLayer.objects.push(moth);
    }
  }

  function buildCircuitShrine(THREE, group, mood) {
    group.position.set(0, -0.05, 2.12);
    group.scale.setScalar(1.42);
    const boardGeometry = new THREE.BoxGeometry(1.32, 2.8, 0.06);
    const nodeGeometry = new THREE.SphereGeometry(0.09, 12, 8);
    for (let i = 0; i < 14; i += 1) {
      const board = new THREE.Group();
      const slab = new THREE.Mesh(boardGeometry.clone(), new THREE.MeshPhysicalMaterial({
        color: 0x061313,
        emissive: hexToNumber(colorAt(mood, i + 1)),
        emissiveIntensity: 0.26 + state.wireGlow * 0.46,
        metalness: 0.28,
        roughness: 0.22,
        clearcoat: 0.8,
        transparent: true,
        opacity: 0.72,
        side: THREE.DoubleSide,
      }));
      board.add(slab);
      const tracePositions = [];
      for (let t = 0; t < 10; t += 1) {
        const y = -1.12 + t * 0.25;
        const x1 = -0.52 + pseudo(i * 251 + t * 7) * 0.3;
        const x2 = 0.52 - pseudo(i * 257 + t * 9) * 0.3;
        tracePositions.push(x1, y, 0.045, x2, y + (t % 2 ? 0.12 : -0.1), 0.045);
      }
      const traceGeometry = new THREE.BufferGeometry();
      traceGeometry.setAttribute("position", new THREE.Float32BufferAttribute(tracePositions, 3));
      const traces = new THREE.LineSegments(traceGeometry, new THREE.LineBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 5)),
        transparent: true,
        opacity: clamp(0.58 + state.wireGlow * 0.14, 0.18, 0.82),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      board.add(traces);
      for (let n = 0; n < 8; n += 1) {
        const node = new THREE.Mesh(nodeGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + n + 8), 0.48 + state.wireGlow * 0.08));
        node.position.set(-0.5 + pseudo(i * 263 + n * 11) * 1.0, -1.06 + n * 0.3, 0.09);
        board.add(node);
      }
      const column = i % 5;
      const row = Math.floor(i / 5);
      const x = (column - 2) * 1.38 * state.fieldSpread;
      const y = -0.24 + Math.sin(i * 1.7) * 0.74;
      const z = -2.35 - row * 2.05 - pseudo(i * 269 + 2) * 0.65;
      board.position.set(x, y, z);
      board.rotation.set(0.08 * Math.sin(i), (column - 1.5) * 0.16, 0.04 * Math.cos(i));
      board.scale.setScalar(0.92 + (i % 3) * 0.14);
      board.userData = { kind: "circuitBoard", index: i, anchor: { x, y, z }, seed: pseudo(i * 271 + 3) * twoPi };
      group.add(board);
      threeLayer.objects.push(board);
    }

    const pulseGeometry = new THREE.SphereGeometry(0.1, 12, 8);
    for (let i = 0; i < 38; i += 1) {
      const pulseNode = new THREE.Mesh(pulseGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 9), 0.56 + state.wireGlow * 0.12));
      const lane = i % 7;
      const x = (lane - 3) * 1.05 * state.fieldSpread;
      const y = -2.65 + pseudo(i * 277 + 1) * 5.3;
      const z = -2.0 - pseudo(i * 281 + 2) * 12;
      pulseNode.position.set(x, y, z);
      pulseNode.userData = { kind: "circuitPulse", index: i, lane, anchor: { x, y, z }, seed: pseudo(i * 283 + 3) * twoPi };
      group.add(pulseNode);
      threeLayer.objects.push(pulseNode);
    }
  }

  function buildIceOrgan(THREE, group, mood) {
    group.position.set(0, -1.15, 1.9);
    group.scale.setScalar(1.18);
    const pipeGeometry = new THREE.CylinderGeometry(0.18, 0.26, 3.4, 18, 1, true);
    const capGeometry = new THREE.ConeGeometry(0.32, 0.72, 18, 1, true);
    const ringGeometry = new THREE.TorusGeometry(0.3, 0.012, 6, 72);
    for (let i = 0; i < 18; i += 1) {
      const pipe = new THREE.Group();
      const heightScale = 0.65 + (i % 6) * 0.17 + pseudo(i * 293 + 1) * 0.18;
      const material = makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.5 + state.wireGlow * 0.12);
      if (material.emissive) material.emissiveIntensity = 0.36 + state.wireGlow * 0.42;
      const body = new THREE.Mesh(pipeGeometry.clone(), material);
      body.scale.y = heightScale;
      body.position.y = 1.35 * heightScale;
      pipe.add(body);
      const cap = new THREE.Mesh(capGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.42 + state.wireGlow * 0.08));
      cap.position.y = 2.95 * heightScale;
      pipe.add(cap);
      for (let r = 0; r < 3; r += 1) {
        const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + r + 7), 0.28 + state.wireGlow * 0.08));
        ring.rotation.x = Math.PI * 0.5;
        ring.position.y = 0.55 + r * 0.78 * heightScale;
        ring.scale.setScalar(0.8 + r * 0.18);
        pipe.add(ring);
      }
      const column = i % 6;
      const row = Math.floor(i / 6);
      const x = (column - 2.5) * 1.05 * state.fieldSpread;
      const z = -2.5 - row * 2.25 - pseudo(i * 307 + 2) * 0.8;
      const y = -1.9 + pseudo(i * 311 + 3) * 0.32;
      pipe.position.set(x, y, z);
      pipe.rotation.y = (column - 2.5) * 0.07;
      pipe.userData = { kind: "icePipe", index: i, anchor: { x, y, z }, heightScale, seed: pseudo(i * 313 + 4) * twoPi };
      group.add(pipe);
      threeLayer.objects.push(pipe);
    }

    const shardGeometry = new THREE.OctahedronGeometry(0.18, 0);
    for (let i = 0; i < 36; i += 1) {
      const shard = new THREE.Mesh(shardGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 6), 0.4 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (1.4 + pseudo(i * 317 + 1) * 5.2) * state.fieldSpread;
      shard.position.set(Math.cos(angle) * radius, -0.6 + Math.sin(angle * 1.3) * 2.7, -2.9 - pseudo(i * 331 + 2) * 13);
      shard.rotation.set(pseudo(i * 337 + 3) * Math.PI, angle, pseudo(i * 347 + 4) * Math.PI);
      shard.scale.setScalar(0.56 + pseudo(i * 349 + 5) * 1.2);
      shard.userData = { kind: "iceShard", index: i, angle, radius, seed: pseudo(i * 353 + 6) * twoPi };
      group.add(shard);
      threeLayer.objects.push(shard);
    }
  }

  function buildMyceliumRadio(THREE, group, mood) {
    group.position.set(0, -1.55, 2.05);
    group.scale.setScalar(1.36);
    const stemGeometry = new THREE.CylinderGeometry(0.08, 0.18, 1.8, 12);
    const capGeometry = new THREE.SphereGeometry(0.5, 24, 12);
    const sporeGeometry = new THREE.SphereGeometry(0.075, 10, 8);
    const antennaGeometry = new THREE.TorusGeometry(0.72, 0.015, 6, 80);
    const fungusCount = 18;
    const anchors = [];
    for (let i = 0; i < fungusCount; i += 1) {
      const angle = i * phi * twoPi;
      const radius = (0.45 + pseudo(i * 359 + 1) * 4.1) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const z = -2.2 - pseudo(i * 361 + 2) * 8.6;
      const y = -0.28 + Math.sin(angle * 1.8) * 0.32;
      const fungus = new THREE.Group();
      const stem = new THREE.Mesh(stemGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.5 + state.wireGlow * 0.08));
      const cap = new THREE.Mesh(capGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.62 + state.wireGlow * 0.1));
      const antenna = new THREE.Mesh(antennaGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 6), 0.5 + state.wireGlow * 0.12));
      const height = 0.62 + pseudo(i * 367 + 3) * 1.25;
      stem.scale.y = height;
      stem.position.y = height * 0.82;
      cap.position.y = height * 1.72;
      cap.scale.set(0.82 + pseudo(i * 373 + 4) * 0.72, 0.2 + pseudo(i * 379 + 5) * 0.16, 0.82 + pseudo(i * 383 + 6) * 0.72);
      antenna.position.y = height * 1.82;
      antenna.rotation.x = Math.PI * 0.5;
      fungus.add(stem);
      fungus.add(cap);
      fungus.add(antenna);
      fungus.position.set(x, y, z);
      fungus.rotation.y = angle + Math.PI * 0.5;
      fungus.userData = { kind: "myceliumFungus", index: i, anchor: { x, y, z }, height, seed: pseudo(i * 389 + 7) * twoPi };
      anchors.push({ x, y, z, height });
      group.add(fungus);
      threeLayer.objects.push(fungus);
    }

    const rootPositions = [];
    for (let i = 0; i < fungusCount * 2; i += 1) {
      const a = anchors[i % anchors.length];
      const b = anchors[(i * 5 + 3) % anchors.length];
      rootPositions.push(a.x, a.y + 0.05, a.z, (a.x + b.x) * 0.5 + Math.sin(i) * 0.55, -0.42, (a.z + b.z) * 0.5, b.x, b.y + 0.05, b.z);
    }
    const rootGeometry = new THREE.BufferGeometry();
    rootGeometry.setAttribute("position", new THREE.Float32BufferAttribute(rootPositions, 3));
    const rootLines = new THREE.Line(rootGeometry, makeLineMaterial(THREE, colorAt(mood, 2), 0.46 + state.wireGlow * 0.12));
    rootLines.userData = { kind: "myceliumRoot", index: 0, seed: 0.4 };
    group.add(rootLines);
    threeLayer.objects.push(rootLines);

    for (let i = 0; i < 46; i += 1) {
      const spore = new THREE.Mesh(sporeGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 7), 0.5 + state.wireGlow * 0.06));
      const angle = i * phi * twoPi;
      const radius = (0.8 + pseudo(i * 397 + 1) * 5.4) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 0.2 + pseudo(i * 401 + 2) * 4.2;
      const z = -1.8 - pseudo(i * 409 + 3) * 10.5;
      spore.position.set(x, y, z);
      spore.userData = { kind: "myceliumSpore", index: i, anchor: { x, y, z }, seed: pseudo(i * 419 + 4) * twoPi };
      group.add(spore);
      threeLayer.objects.push(spore);
    }
  }

  function buildThunderLoom(THREE, group, mood) {
    group.position.set(0, -0.15, 2.0);
    group.scale.setScalar(1.24);
    const cloudGeometry = new THREE.IcosahedronGeometry(0.72, 1);
    const ringGeometry = new THREE.TorusGeometry(1.0, 0.018, 7, 96);
    const beadGeometry = new THREE.SphereGeometry(0.07, 8, 6);
    const boltSegmentGeometry = new THREE.CylinderGeometry(0.035, 0.055, 1, 6);
    for (let i = 0; i < 14; i += 1) {
      const cloud = new THREE.Mesh(cloudGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.34 + state.wireGlow * 0.07));
      const column = i % 7;
      const row = Math.floor(i / 7);
      const x = (column - 3) * 0.94 * state.fieldSpread + Math.sin(i * 1.6) * 0.34;
      const y = 1.9 + Math.sin(i * 0.9) * 0.58 - row * 0.58;
      const z = -2.2 - row * 2.1 - pseudo(i * 431 + 1) * 2.2;
      cloud.position.set(x, y, z);
      const scale = { x: 1.1 + pseudo(i * 433 + 2) * 1.1, y: 0.38 + pseudo(i * 439 + 3) * 0.34, z: 0.76 + pseudo(i * 443 + 4) * 0.56 };
      cloud.scale.set(scale.x, scale.y, scale.z);
      cloud.userData = { kind: "thunderCloud", index: i, anchor: { x, y, z }, scale, seed: pseudo(i * 449 + 5) * twoPi };
      group.add(cloud);
      threeLayer.objects.push(cloud);
    }

    for (let i = 0; i < 18; i += 1) {
      const x = (-3.4 + pseudo(i * 457 + 1) * 6.8) * state.fieldSpread;
      const y = 2.2 - pseudo(i * 461 + 2) * 0.8;
      const z = -2.2 - pseudo(i * 463 + 3) * 10.8;
      const segments = 6 + (i % 4);
      const positions = [];
      for (let s = 0; s <= segments; s += 1) {
        const t = s / segments;
        positions.push(x + Math.sin((s + i) * 1.9) * (0.16 + t * 0.52), y - t * (2.9 + pseudo(i * 467 + 4) * 2.1), z + Math.sin(s * 0.9) * 0.34);
      }
      const boltGeometry = new THREE.BufferGeometry();
      boltGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      const bolt = new THREE.Line(boltGeometry, makeLineMaterial(THREE, colorAt(mood, i + 5), 0.72 + state.wireGlow * 0.18));
      if (bolt.material) bolt.material.opacity = 0.42;
      bolt.userData = { kind: "thunderBolt", index: i, anchor: { x, y, z }, seed: pseudo(i * 479 + 6) * twoPi };
      group.add(bolt);
      threeLayer.objects.push(bolt);

      const boltMesh = new THREE.Group();
      for (let s = 0; s < segments; s += 1) {
        const a = new THREE.Vector3(positions[s * 3], positions[s * 3 + 1], positions[s * 3 + 2]);
        const b = new THREE.Vector3(positions[(s + 1) * 3], positions[(s + 1) * 3 + 1], positions[(s + 1) * 3 + 2]);
        const mid = a.clone().lerp(b, 0.5);
        const direction = b.clone().sub(a);
        const length = direction.length();
        const segment = new THREE.Mesh(boltSegmentGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + s + 8), 0.66 + state.wireGlow * 0.12));
        segment.position.copy(mid);
        segment.scale.y = length;
        segment.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
        segment.userData = { managesOpacity: true };
        boltMesh.add(segment);
      }
      boltMesh.userData = { kind: "thunderBoltMesh", index: i, anchor: { x, y, z }, seed: pseudo(i * 481 + 7) * twoPi };
      group.add(boltMesh);
      threeLayer.objects.push(boltMesh);
    }

    for (let i = 0; i < 8; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 9), 0.38 + state.wireGlow * 0.08));
      ring.position.set(Math.sin(i * 1.7) * 2.4 * state.fieldSpread, -0.6 + Math.cos(i) * 0.44, -2.4 - i * 1.6);
      ring.rotation.x = Math.PI * 0.5 + Math.sin(i) * 0.24;
      ring.userData = { kind: "thunderRing", index: i, seed: pseudo(i * 487 + 7) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }

    for (let i = 0; i < 64; i += 1) {
      const bead = new THREE.Mesh(beadGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.42 + state.wireGlow * 0.06));
      const x = (-4.2 + pseudo(i * 491 + 1) * 8.4) * state.fieldSpread;
      const y = -1.8 + pseudo(i * 499 + 2) * 5.8;
      const z = -2.0 - pseudo(i * 503 + 3) * 12;
      bead.position.set(x, y, z);
      bead.userData = { kind: "thunderBead", index: i, anchor: { x, y, z }, seed: pseudo(i * 509 + 4) * twoPi };
      group.add(bead);
      threeLayer.objects.push(bead);
    }
  }

  function buildRailCathedral(THREE, group, mood) {
    group.position.set(0, -1.15, 2.15);
    group.scale.setScalar(1.28);
    const railGeometry = new THREE.BoxGeometry(0.07, 0.08, 5.2);
    const sleeperGeometry = new THREE.BoxGeometry(3.4, 0.08, 0.12);
    const carGeometry = new THREE.BoxGeometry(0.86, 0.62, 1.1);
    const archGeometry = new THREE.TorusGeometry(1.7, 0.025, 8, 96, Math.PI);
    for (let i = 0; i < 20; i += 1) {
      const z = -2 - i * 1.22;
      [-0.78, 0.78].forEach((side, sideIndex) => {
        const rail = new THREE.Mesh(railGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + sideIndex), 0.46 + state.wireGlow * 0.08));
        rail.position.set(side * (1 + i * 0.02), -0.34, z);
        rail.rotation.y = side * 0.03;
        rail.userData = { kind: "railTrack", index: i * 2 + sideIndex, anchor: { x: rail.position.x, y: rail.position.y, z }, seed: pseudo(i * 521 + sideIndex) * twoPi };
        group.add(rail);
        threeLayer.objects.push(rail);
      });
      const sleeper = new THREE.Mesh(sleeperGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.34 + state.wireGlow * 0.06));
      sleeper.position.set(0, -0.44, z + 0.42);
      sleeper.userData = { kind: "railSleeper", index: i, anchor: { x: 0, y: -0.44, z: z + 0.42 }, seed: pseudo(i * 523 + 2) * twoPi };
      group.add(sleeper);
      threeLayer.objects.push(sleeper);
    }

    for (let i = 0; i < 9; i += 1) {
      const arch = new THREE.Mesh(archGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 6), 0.48 + state.wireGlow * 0.1));
      arch.position.set(0, -0.2, -2.4 - i * 2.15);
      arch.rotation.set(0, Math.PI * 0.5, 0);
      arch.scale.setScalar(1 + i * 0.08);
      arch.userData = { kind: "railArch", index: i, anchor: { x: 0, y: -0.2, z: -2.4 - i * 2.15 }, seed: pseudo(i * 541 + 3) * twoPi };
      group.add(arch);
      threeLayer.objects.push(arch);
    }

    for (let i = 0; i < 8; i += 1) {
      const car = new THREE.Mesh(carGeometry.clone(), new THREE.MeshPhysicalMaterial({
        color: hexToNumber(colorAt(mood, i + 2)),
        emissive: hexToNumber(colorAt(mood, i + 5)),
        emissiveIntensity: 0.34 + state.wireGlow * 0.38,
        metalness: 0.46,
        roughness: 0.28,
        clearcoat: 0.72,
        transparent: true,
        opacity: 0.66,
        depthWrite: false,
      }));
      const x = (i % 2 ? 0.44 : -0.44) + Math.sin(i) * 0.12;
      const y = 0.02 + (i % 3) * 0.08;
      const z = -1.2 - i * 1.9;
      car.position.set(x, y, z);
      car.userData = { kind: "railCar", index: i, anchor: { x, y, z }, seed: pseudo(i * 547 + 4) * twoPi };
      group.add(car);
      threeLayer.objects.push(car);
    }
  }

  function buildTypewriterSeance(THREE, group, mood) {
    group.position.set(0, -0.82, 1.05);
    group.scale.setScalar(1.86);
    const keyGeometry = new THREE.BoxGeometry(0.5, 0.16, 0.42);
    const paperGeometry = new THREE.PlaneGeometry(1.2, 1.8);
    const mainPaperGeometry = new THREE.PlaneGeometry(2.8, 3.45);
    const railGeometry = new THREE.CylinderGeometry(0.035, 0.035, 5.8, 10);
    const ribbonGeometry = new THREE.BoxGeometry(5.6, 0.035, 0.045);
    const hammerGeometry = new THREE.BoxGeometry(0.035, 1.7, 0.035);
    for (let row = 0; row < 4; row += 1) {
      const count = row % 2 ? 9 : 10;
      for (let column = 0; column < count; column += 1) {
        const index = row * 10 + column;
        const key = new THREE.Mesh(keyGeometry.clone(), new THREE.MeshPhysicalMaterial({
          color: hexToNumber(colorAt(mood, index + 1)),
          emissive: hexToNumber(colorAt(mood, index + 3)),
          emissiveIntensity: 0.34 + state.wireGlow * 0.4,
          metalness: 0.18,
          roughness: 0.28,
          clearcoat: 0.74,
          transparent: true,
          opacity: 0.86,
        }));
        const x = (column - (count - 1) / 2) * 0.58 + (row % 2 ? 0.16 : 0);
        const y = -0.3 + row * 0.34;
        const z = -1.6 - row * 0.34;
        key.position.set(x, y, z);
        key.rotation.x = -0.22 - row * 0.04;
        key.userData = { kind: "typewriterKey", index, anchor: { x, y, z }, seed: pseudo(index * 563 + 1) * twoPi };
        group.add(key);
        threeLayer.objects.push(key);
      }
    }

    const rail = new THREE.Mesh(railGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, 4), 0.42 + state.wireGlow * 0.08));
    rail.position.set(0, 1.45, -2.35);
    rail.rotation.z = Math.PI * 0.5;
    rail.userData = { kind: "typewriterRail", index: 0, seed: 0.2 };
    group.add(rail);
    threeLayer.objects.push(rail);

    const ribbon = new THREE.Mesh(ribbonGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, 8), 0.48 + state.wireGlow * 0.08));
    ribbon.position.set(0, 0.82, -2.0);
    ribbon.userData = { kind: "typewriterRibbon", index: 1, seed: 1.1 };
    group.add(ribbon);
    threeLayer.objects.push(ribbon);

    const mainPaper = new THREE.Mesh(mainPaperGeometry.clone(), new THREE.MeshBasicMaterial({
      map: makeTypewriterPaperTexture(THREE, mood),
      color: 0xffffff,
      transparent: true,
      opacity: 0.94,
      side: THREE.DoubleSide,
      depthWrite: false,
      depthTest: false,
    }));
    mainPaper.position.set(0, 1.68, -1.94);
    mainPaper.rotation.set(-0.08, 0, 0);
    mainPaper.renderOrder = 18;
    mainPaper.userData = { kind: "typewriterMainPaper", index: 6, anchor: { x: 0, y: 1.68, z: -1.94 }, seed: 1.8, managesColor: true, managesOpacity: true };
    group.add(mainPaper);
    threeLayer.objects.push(mainPaper);

    for (let i = 0; i < 21; i += 1) {
      const hammer = new THREE.Mesh(hammerGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 5), 0.55 + state.wireGlow * 0.08));
      const x = (i - 10) * 0.18;
      const y = 0.74 + Math.abs(i - 10) * 0.015;
      const z = -2.05 - Math.abs(i - 10) * 0.012;
      hammer.position.set(x, y, z);
      hammer.rotation.set(-0.48, 0, (i - 10) * 0.035);
      hammer.userData = { kind: "typewriterHammer", index: i, anchor: { x, y, z }, seed: pseudo(i * 581 + 5) * twoPi };
      group.add(hammer);
      threeLayer.objects.push(hammer);
    }

    for (let i = 0; i < 11; i += 1) {
      const paper = new THREE.Mesh(paperGeometry.clone(), new THREE.MeshPhysicalMaterial({
        color: 0xf7ecff,
        emissive: hexToNumber(colorAt(mood, i + 3)),
        emissiveIntensity: 0.18 + state.wireGlow * 0.28,
        metalness: 0,
        roughness: 0.38,
        transparent: true,
        opacity: 0.28 + (i % 3) * 0.07,
        side: THREE.DoubleSide,
        depthWrite: false,
      }));
      const angle = i * phi * twoPi;
      const radius = (0.7 + pseudo(i * 569 + 1) * 4.0) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 1.3 + Math.sin(angle * 1.4) * 1.1;
      const z = -2.6 - pseudo(i * 571 + 2) * 9.6;
      paper.position.set(x, y, z);
      paper.rotation.set(Math.sin(angle) * 0.38, angle + Math.PI, Math.cos(angle) * 0.22);
      paper.userData = { kind: "typewriterPaper", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 577 + 3) * twoPi };
      group.add(paper);
      threeLayer.objects.push(paper);
    }
  }

  function buildGlassLabyrinth(THREE, group, mood) {
    group.position.set(0, -0.58, 2.0);
    group.scale.setScalar(1.18);
    const wallGeometry = new THREE.BoxGeometry(0.14, 1.2, 1.45);
    const orbGeometry = new THREE.SphereGeometry(0.16, 18, 12);
    const pathPoints = [];
    for (let i = 0; i < 30; i += 1) {
      const gridX = (i % 6) - 2.5;
      const gridZ = Math.floor(i / 6);
      const x = gridX * 0.92 * state.fieldSpread;
      const y = -0.05 + Math.sin(i * 1.1) * 0.22;
      const z = -2.2 - gridZ * 1.28 - pseudo(i * 587 + 1) * 0.42;
      const wall = new THREE.Mesh(wallGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.32 + state.wireGlow * 0.08));
      wall.position.set(x, y, z);
      wall.rotation.y = (i % 3 === 0 ? Math.PI * 0.5 : 0) + Math.sin(i) * 0.12;
      wall.scale.set(0.8 + pseudo(i * 593 + 2) * 0.9, 0.8 + pseudo(i * 599 + 3) * 1.2, 0.7 + pseudo(i * 601 + 4) * 1.1);
      wall.userData = { kind: "mazeWall", index: i, anchor: { x, y, z }, seed: pseudo(i * 607 + 5) * twoPi };
      group.add(wall);
      threeLayer.objects.push(wall);
      if (i % 3 !== 1) pathPoints.push(x, y + 0.72, z);
    }
    const pathGeometry = new THREE.BufferGeometry();
    pathGeometry.setAttribute("position", new THREE.Float32BufferAttribute(pathPoints, 3));
    const path = new THREE.Line(pathGeometry, makeLineMaterial(THREE, colorAt(mood, 4), 0.62 + state.wireGlow * 0.12));
    path.userData = { kind: "mazePath", index: 0, seed: 0.6 };
    group.add(path);
    threeLayer.objects.push(path);

    for (let i = 0; i < 9; i += 1) {
      const orb = new THREE.Mesh(orbGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 6), 0.62 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (1.0 + pseudo(i * 613 + 1) * 3.4) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 0.85 + Math.sin(i) * 0.55;
      const z = -2.6 - pseudo(i * 617 + 2) * 8.4;
      orb.position.set(x, y, z);
      orb.userData = { kind: "mazeOrb", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 619 + 3) * twoPi };
      group.add(orb);
      threeLayer.objects.push(orb);
    }
  }

  function buildMarbleArcade(THREE, group, mood) {
    group.position.set(0, -0.84, 1.62);
    group.scale.setScalar(1.4);
    const rampGeometry = new THREE.BoxGeometry(3.8, 0.08, 0.24);
    const ballGeometry = new THREE.SphereGeometry(0.18, 20, 14);
    const hoopGeometry = new THREE.TorusGeometry(0.72, 0.035, 8, 84);
    const pinGeometry = new THREE.CylinderGeometry(0.045, 0.06, 0.52, 10);
    for (let i = 0; i < 10; i += 1) {
      const ramp = new THREE.Mesh(rampGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.46 + state.wireGlow * 0.08));
      const x = Math.sin(i * 1.1) * 0.9 * state.fieldSpread;
      const y = 1.8 - i * 0.42;
      const z = -1.8 - i * 0.86;
      ramp.position.set(x, y, z);
      ramp.rotation.z = (i % 2 ? -0.18 : 0.18);
      ramp.rotation.y = Math.sin(i) * 0.12;
      ramp.userData = { kind: "marbleRamp", index: i, anchor: { x, y, z }, seed: pseudo(i * 631 + 1) * twoPi };
      group.add(ramp);
      threeLayer.objects.push(ramp);
    }
    for (let i = 0; i < 9; i += 1) {
      const hoop = new THREE.Mesh(hoopGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 5), 0.58 + state.wireGlow * 0.12));
      const angle = i * twoPi / 9;
      const x = Math.cos(angle) * (2.0 + (i % 3) * 0.35) * state.fieldSpread;
      const y = 0.55 + Math.sin(angle * 1.4) * 1.2;
      const z = -2.2 - i * 0.86;
      hoop.position.set(x, y, z);
      hoop.rotation.set(Math.PI * 0.5 + Math.sin(i) * 0.28, angle, Math.cos(i) * 0.2);
      hoop.userData = { kind: "marbleHoop", index: i, anchor: { x, y, z }, seed: pseudo(i * 641 + 2) * twoPi };
      group.add(hoop);
      threeLayer.objects.push(hoop);
    }
    for (let i = 0; i < 17; i += 1) {
      const ball = new THREE.Mesh(ballGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 7), 0.72 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.8 + pseudo(i * 643 + 1) * 3.9) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 1.8 - pseudo(i * 647 + 2) * 4.0;
      const z = -1.7 - pseudo(i * 653 + 3) * 9.2;
      ball.position.set(x, y, z);
      ball.userData = { kind: "marbleBall", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 659 + 4) * twoPi };
      group.add(ball);
      threeLayer.objects.push(ball);
    }
    for (let i = 0; i < 34; i += 1) {
      const pin = new THREE.Mesh(pinGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.38 + state.wireGlow * 0.06));
      const x = (-3.2 + pseudo(i * 661 + 1) * 6.4) * state.fieldSpread;
      const y = -1.5 + pseudo(i * 673 + 2) * 4.6;
      const z = -2.1 - pseudo(i * 677 + 3) * 9.8;
      pin.position.set(x, y, z);
      pin.rotation.z = Math.sin(i * 1.7) * 0.26;
      pin.userData = { kind: "marblePin", index: i, anchor: { x, y, z }, seed: pseudo(i * 683 + 4) * twoPi };
      group.add(pin);
      threeLayer.objects.push(pin);
    }
  }

  function buildDiceChapel(THREE, group, mood) {
    group.position.set(0, -0.88, 1.72);
    group.scale.setScalar(1.34);
    const diceGeometry = new THREE.BoxGeometry(0.58, 0.58, 0.58);
    const pipGeometry = new THREE.SphereGeometry(0.035, 8, 6);
    const cardGeometry = new THREE.PlaneGeometry(0.82, 1.18);
    const wheelGeometry = new THREE.TorusGeometry(1.45, 0.055, 10, 108);
    const chipGeometry = new THREE.CylinderGeometry(0.28, 0.28, 0.05, 28);
    const arcGeometry = new THREE.TorusGeometry(2.5, 0.018, 6, 96, Math.PI * 1.35);

    for (let i = 0; i < 4; i += 1) {
      const wheel = new THREE.Mesh(wheelGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 3), 0.58 + state.wireGlow * 0.1));
      wheel.position.set(0, -0.05 + i * 0.02, -2.4 - i * 0.82);
      wheel.rotation.set(Math.PI * 0.5, 0, i * 0.38);
      wheel.scale.setScalar(1 + i * 0.24);
      wheel.userData = { kind: "diceWheel", index: i, anchor: { x: 0, y: wheel.position.y, z: wheel.position.z }, seed: pseudo(i * 691 + 1) * twoPi };
      group.add(wheel);
      threeLayer.objects.push(wheel);
    }

    for (let i = 0; i < 12; i += 1) {
      const die = new THREE.Mesh(diceGeometry.clone(), new THREE.MeshPhysicalMaterial({
        color: hexToNumber(colorAt(mood, i + 1)),
        emissive: hexToNumber(colorAt(mood, i + 4)),
        emissiveIntensity: 0.32 + state.wireGlow * 0.38,
        metalness: 0.14,
        roughness: 0.24,
        clearcoat: 0.86,
        transparent: true,
        opacity: 0.78,
      }));
      const angle = i * phi * twoPi;
      const radius = (0.6 + pseudo(i * 701 + 2) * 3.2) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 0.25 + Math.sin(i * 0.83) * 1.25;
      const z = -2.0 - pseudo(i * 709 + 3) * 7.4;
      die.position.set(x, y, z);
      die.rotation.set(pseudo(i * 719 + 4) * twoPi, pseudo(i * 727 + 5) * twoPi, pseudo(i * 733 + 6) * twoPi);
      die.userData = { kind: "diceCube", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 739 + 7) * twoPi };
      const pipMaterial = new THREE.MeshBasicMaterial({ color: 0xf8fbff, transparent: true, opacity: 0.74, depthWrite: false });
      const pipOffsets = [-0.18, 0, 0.18];
      for (let p = 0; p < 7; p += 1) {
        const pip = new THREE.Mesh(pipGeometry.clone(), pipMaterial.clone());
        pip.position.set(pipOffsets[p % 3], pipOffsets[Math.floor(p / 3) % 3], 0.296);
        die.add(pip);
      }
      group.add(die);
      threeLayer.objects.push(die);
    }

    for (let i = 0; i < 18; i += 1) {
      const card = new THREE.Mesh(cardGeometry.clone(), new THREE.MeshBasicMaterial({
        color: hexToNumber(i % 2 ? "#f6efff" : colorAt(mood, i + 2)),
        transparent: true,
        opacity: 0.28 + (i % 4) * 0.04,
        side: THREE.DoubleSide,
        depthWrite: false,
      }));
      const angle = (i / 18) * twoPi;
      const radius = (1.3 + (i % 4) * 0.58) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.1 + Math.sin(angle * 2.2) * 1.25;
      const z = -2.2 - i * 0.42;
      card.position.set(x, y, z);
      card.rotation.set(Math.sin(i) * 0.35, angle + Math.PI, Math.cos(i) * 0.26);
      card.userData = { kind: "diceCard", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 743 + 1) * twoPi };
      group.add(card);
      threeLayer.objects.push(card);
    }

    for (let i = 0; i < 20; i += 1) {
      const chip = new THREE.Mesh(chipGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 6), 0.58 + state.wireGlow * 0.08));
      const x = (-3 + pseudo(i * 751 + 1) * 6) * state.fieldSpread;
      const y = -1.1 + pseudo(i * 757 + 2) * 2.3;
      const z = -1.7 - pseudo(i * 761 + 3) * 8.6;
      chip.position.set(x, y, z);
      chip.rotation.set(Math.PI * 0.5, 0, pseudo(i * 769 + 4) * twoPi);
      chip.userData = { kind: "diceChip", index: i, anchor: { x, y, z }, seed: pseudo(i * 773 + 5) * twoPi };
      group.add(chip);
      threeLayer.objects.push(chip);
    }

    for (let i = 0; i < 5; i += 1) {
      const arc = new THREE.Mesh(arcGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 8), 0.36 + state.wireGlow * 0.1));
      arc.position.set(0, 0.3 + Math.sin(i) * 0.2, -2.8 - i * 1.12);
      arc.rotation.set(Math.PI * 0.5 + Math.sin(i) * 0.18, 0, i * 0.74);
      arc.userData = { kind: "diceArc", index: i, seed: pseudo(i * 787 + 2) * twoPi };
      group.add(arc);
      threeLayer.objects.push(arc);
    }
  }

  function buildSteamKitchen(THREE, group, mood) {
    group.position.set(0, -0.86, 1.46);
    group.scale.setScalar(1.46);
    const potGeometry = new THREE.CylinderGeometry(0.54, 0.64, 0.78, 32, 1, true);
    const lidGeometry = new THREE.ConeGeometry(0.62, 0.22, 32);
    const spoonGeometry = new THREE.CylinderGeometry(0.035, 0.05, 1.75, 10);
    const bowlGeometry = new THREE.SphereGeometry(0.24, 18, 10, 0, twoPi, 0, Math.PI * 0.58);
    const ringGeometry = new THREE.TorusGeometry(0.72, 0.035, 8, 96);
    const dropletGeometry = new THREE.SphereGeometry(0.075, 12, 8);
    const flameGeometry = new THREE.ConeGeometry(0.16, 0.72, 18);

    for (let i = 0; i < 7; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 2), 0.56 + state.wireGlow * 0.12));
      const x = (i - 3) * 0.82 * state.fieldSpread;
      const y = -0.72 + Math.sin(i) * 0.1;
      const z = -2.1 - (i % 3) * 0.72;
      ring.position.set(x, y, z);
      ring.rotation.x = Math.PI * 0.5;
      ring.userData = { kind: "kitchenBurner", index: i, anchor: { x, y, z }, seed: pseudo(i * 797 + 1) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);

      for (let flameIndex = 0; flameIndex < 3; flameIndex += 1) {
        const flame = new THREE.Mesh(flameGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + flameIndex + 7), 0.72 + state.wireGlow * 0.09));
        const offset = (flameIndex - 1) * 0.18;
        flame.position.set(x + offset, y + 0.48 + flameIndex * 0.03, z + Math.sin(flameIndex + i) * 0.14);
        flame.rotation.z = offset * 0.8;
        flame.userData = {
          kind: "kitchenFlame",
          index: i * 3 + flameIndex,
          anchor: { x: flame.position.x, y: flame.position.y, z: flame.position.z },
          seed: pseudo(i * 801 + flameIndex * 17 + 5) * twoPi,
        };
        group.add(flame);
        threeLayer.objects.push(flame);
      }
    }

    for (let i = 0; i < 6; i += 1) {
      const pot = new THREE.Mesh(potGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.72 + state.wireGlow * 0.09));
      const x = (-2.4 + i * 0.96) * state.fieldSpread;
      const y = -0.28 + Math.sin(i * 1.4) * 0.22;
      const z = -2.4 - (i % 2) * 1.1 - pseudo(i * 809 + 1) * 2.6;
      pot.position.set(x, y, z);
      pot.rotation.z = Math.sin(i) * 0.08;
      pot.userData = { kind: "kitchenPot", index: i, anchor: { x, y, z }, seed: pseudo(i * 811 + 2) * twoPi };
      group.add(pot);
      threeLayer.objects.push(pot);

      const lid = new THREE.Mesh(lidGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.5 + state.wireGlow * 0.07));
      lid.position.set(x, y + 0.5, z);
      lid.userData = { kind: "kitchenLid", index: i, anchor: { x, y: y + 0.5, z }, seed: pseudo(i * 821 + 3) * twoPi };
      group.add(lid);
      threeLayer.objects.push(lid);
    }

    for (let i = 0; i < 18; i += 1) {
      const spoon = new THREE.Mesh(spoonGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 5), 0.46 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.8 + pseudo(i * 823 + 1) * 3.4) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 1.15 + Math.sin(angle * 1.6) * 1.1;
      const z = -2.0 - pseudo(i * 827 + 2) * 8.6;
      spoon.position.set(x, y, z);
      spoon.rotation.set(Math.PI * 0.48 + Math.sin(i) * 0.2, angle, Math.cos(i) * 0.25);
      spoon.userData = { kind: "kitchenSpoon", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 829 + 3) * twoPi };
      group.add(spoon);
      threeLayer.objects.push(spoon);

      if (i % 3 === 0) {
        const bowl = new THREE.Mesh(bowlGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 8), 0.58 + state.wireGlow * 0.08));
        bowl.position.set(x + Math.sin(angle) * 0.16, y - 0.9, z + Math.cos(angle) * 0.16);
        bowl.rotation.set(Math.PI, 0, angle);
        bowl.userData = { kind: "kitchenBowl", index: i, anchor: { x: bowl.position.x, y: bowl.position.y, z: bowl.position.z }, seed: pseudo(i * 839 + 4) * twoPi };
        group.add(bowl);
        threeLayer.objects.push(bowl);
      }
    }

    for (let i = 0; i < 12; i += 1) {
      const points = [];
      const baseX = (-2.8 + pseudo(i * 853 + 1) * 5.6) * state.fieldSpread;
      const baseZ = -2.0 - pseudo(i * 857 + 2) * 7.4;
      for (let j = 0; j < 18; j += 1) {
        const t = j / 17;
        points.push(baseX + Math.sin(t * twoPi * 1.5 + i) * 0.2, -0.1 + t * 3.4, baseZ + Math.cos(t * twoPi + i) * 0.16);
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
      const curl = new THREE.Line(geometry, makeLineMaterial(THREE, colorAt(mood, i + 4), 0.54 + state.wireGlow * 0.14));
      curl.userData = { kind: "kitchenSteam", index: i, anchor: { x: baseX, y: -0.1, z: baseZ }, seed: pseudo(i * 859 + 3) * twoPi };
      group.add(curl);
      threeLayer.objects.push(curl);
    }

    for (let i = 0; i < 44; i += 1) {
      const drop = new THREE.Mesh(dropletGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.54 + state.wireGlow * 0.07));
      const x = (-3.5 + pseudo(i * 863 + 1) * 7) * state.fieldSpread;
      const y = -0.4 + pseudo(i * 877 + 2) * 3.8;
      const z = -2.0 - pseudo(i * 881 + 3) * 9.5;
      drop.position.set(x, y, z);
      drop.userData = { kind: "kitchenDroplet", index: i, anchor: { x, y, z }, seed: pseudo(i * 883 + 4) * twoPi };
      group.add(drop);
      threeLayer.objects.push(drop);
    }
  }

  function buildRadioGarden(THREE, group, mood) {
    group.position.set(0, -0.68, 1.42);
    group.scale.setScalar(1.42);
    const dishGeometry = new THREE.SphereGeometry(0.86, 32, 16, 0, twoPi, 0, Math.PI * 0.52);
    const coreGeometry = new THREE.IcosahedronGeometry(0.42, 2);
    const mastGeometry = new THREE.CylinderGeometry(0.035, 0.055, 2.4, 10);
    const ringGeometry = new THREE.TorusGeometry(0.72, 0.018, 6, 96);
    const dotGeometry = new THREE.SphereGeometry(0.08, 12, 8);
    const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.028, 1.6, 8);
    const core = new THREE.Mesh(coreGeometry, makeCrystalMaterial(THREE, colorAt(mood, 12), 0.78 + state.wireGlow * 0.08));
    core.position.set(0, 0.12, -2.1);
    core.userData = { kind: "radioCore", index: 0, anchor: { x: 0, y: 0.12, z: -2.1 }, seed: 0.48 };
    group.add(core);
    threeLayer.objects.push(core);

    for (let i = 0; i < 9; i += 1) {
      const dish = new THREE.Mesh(dishGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.5 + state.wireGlow * 0.1));
      const angle = i * twoPi / 9;
      const radius = (1.2 + (i % 3) * 0.72) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.35 + Math.sin(i * 0.9) * 0.42;
      const z = -2.3 - i * 0.78;
      dish.position.set(x, y, z);
      dish.rotation.set(Math.PI * 0.72 + Math.sin(i) * 0.12, angle + Math.PI, Math.cos(i) * 0.1);
      dish.userData = { kind: "radioDish", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 887 + 1) * twoPi };
      group.add(dish);
      threeLayer.objects.push(dish);

      const mast = new THREE.Mesh(mastGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.42 + state.wireGlow * 0.06));
      mast.position.set(x, y - 1.0, z + 0.2);
      mast.rotation.z = Math.sin(angle) * 0.12;
      mast.userData = { kind: "radioMast", index: i, anchor: { x, y: y - 1.0, z: z + 0.2 }, seed: pseudo(i * 907 + 2) * twoPi };
      group.add(mast);
      threeLayer.objects.push(mast);

      const beamGeometry = new THREE.BufferGeometry();
      beamGeometry.setAttribute("position", new THREE.Float32BufferAttribute([
        x, y + 0.12, z,
        Math.sin(i * 1.7) * 0.35, 0.18 + Math.cos(i) * 0.18, -1.75 - i * 0.22,
      ], 3));
      const beam = new THREE.Line(beamGeometry, makeLineMaterial(THREE, colorAt(mood, i + 9), 0.48 + state.wireGlow * 0.12));
      beam.userData = { kind: "radioBeam", index: i, seed: pseudo(i * 913 + 6) * twoPi };
      group.add(beam);
      threeLayer.objects.push(beam);
    }

    for (let i = 0; i < 13; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 6), 0.54 + state.wireGlow * 0.14));
      const z = -1.8 - i * 0.82;
      ring.position.set(Math.sin(i * 1.9) * 1.2 * state.fieldSpread, 0.38 + Math.cos(i) * 0.4, z);
      ring.rotation.set(Math.PI * 0.5 + Math.sin(i) * 0.3, Math.cos(i) * 0.28, i * 0.43);
      ring.scale.setScalar(0.68 + i * 0.16);
      ring.userData = { kind: "radioSignal", index: i, anchor: { x: ring.position.x, y: ring.position.y, z }, seed: pseudo(i * 911 + 3) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }

    for (let i = 0; i < 18; i += 1) {
      const antenna = new THREE.Mesh(antennaGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 8), 0.4 + state.wireGlow * 0.06));
      const x = (-4 + pseudo(i * 919 + 1) * 8) * state.fieldSpread;
      const y = -0.65 + pseudo(i * 929 + 2) * 1.2;
      const z = -2.1 - pseudo(i * 937 + 3) * 9.2;
      antenna.position.set(x, y, z);
      antenna.rotation.set(Math.sin(i) * 0.3, 0, Math.cos(i * 0.7) * 0.36);
      antenna.userData = { kind: "radioAntenna", index: i, anchor: { x, y, z }, seed: pseudo(i * 941 + 4) * twoPi };
      group.add(antenna);
      threeLayer.objects.push(antenna);
    }

    for (let i = 0; i < 64; i += 1) {
      const dot = new THREE.Mesh(dotGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.62 + state.wireGlow * 0.07));
      const x = (-5 + pseudo(i * 947 + 1) * 10) * state.fieldSpread;
      const y = -1.0 + pseudo(i * 953 + 2) * 4.8;
      const z = -1.8 - pseudo(i * 967 + 3) * 13.5;
      dot.position.set(x, y, z);
      dot.userData = { kind: "radioDot", index: i, anchor: { x, y, z }, seed: pseudo(i * 971 + 4) * twoPi };
      group.add(dot);
      threeLayer.objects.push(dot);
    }
  }

  function buildStitchMachine(THREE, group, mood) {
    group.position.set(0, -0.46, 1.36);
    group.scale.setScalar(1.34);
    const spoolGeometry = new THREE.CylinderGeometry(0.34, 0.34, 0.58, 28);
    const needleGeometry = new THREE.CylinderGeometry(0.026, 0.042, 1.55, 10);
    const knotGeometry = new THREE.SphereGeometry(0.085, 12, 8);
    const hoopGeometry = new THREE.TorusGeometry(1.08, 0.026, 8, 96);
    const shuttleGeometry = new THREE.BoxGeometry(0.72, 0.14, 0.24);
    const gridPoints = [];
    for (let i = -7; i <= 7; i += 1) {
      gridPoints.push(i * 0.42, -1.3, -3.4, i * 0.42, 1.25, -3.4);
      gridPoints.push(-3.1, i * 0.18, -3.4, 3.1, i * 0.18, -3.4);
    }
    const gridGeometry = new THREE.BufferGeometry();
    gridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(gridPoints, 3));
    const fabric = new THREE.LineSegments(gridGeometry, makeLineMaterial(THREE, colorAt(mood, 1), 0.36 + state.wireGlow * 0.08));
    fabric.userData = { kind: "stitchFabric", index: 0, seed: 0.17 };
    group.add(fabric);
    threeLayer.objects.push(fabric);

    for (let i = 0; i < 7; i += 1) {
      const angle = (i / 7) * twoPi;
      const x = Math.cos(angle) * (1.7 + (i % 2) * 0.56) * state.fieldSpread;
      const y = -0.08 + Math.sin(angle * 1.3) * 0.82;
      const z = -2.1 - i * 0.64;
      const spool = new THREE.Mesh(spoolGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.58 + state.wireGlow * 0.08));
      spool.position.set(x, y, z);
      spool.rotation.set(Math.PI * 0.5, angle, 0);
      spool.userData = { kind: "stitchSpool", index: i, anchor: { x, y, z }, angle, seed: pseudo(i * 983 + 1) * twoPi };
      group.add(spool);
      threeLayer.objects.push(spool);

      const hoop = new THREE.Mesh(hoopGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 6), 0.42 + state.wireGlow * 0.11));
      hoop.position.set(x * 0.62, y * 0.48 + 0.18, z - 0.22);
      hoop.rotation.set(Math.PI * 0.5 + Math.sin(i) * 0.2, 0, angle);
      hoop.userData = { kind: "stitchHoop", index: i, anchor: { x: hoop.position.x, y: hoop.position.y, z: hoop.position.z }, seed: pseudo(i * 991 + 2) * twoPi };
      group.add(hoop);
      threeLayer.objects.push(hoop);
    }

    for (let i = 0; i < 9; i += 1) {
      const x = (-2.4 + i * 0.6) * state.fieldSpread;
      const y = 0.86 + Math.sin(i * 0.8) * 0.28;
      const z = -1.8 - (i % 3) * 0.78;
      const needle = new THREE.Mesh(needleGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.7 + state.wireGlow * 0.08));
      needle.position.set(x, y, z);
      needle.rotation.z = Math.sin(i) * 0.18;
      needle.userData = { kind: "stitchNeedle", index: i, anchor: { x, y, z }, seed: pseudo(i * 997 + 3) * twoPi };
      group.add(needle);
      threeLayer.objects.push(needle);
    }

    for (let i = 0; i < 12; i += 1) {
      const points = [];
      const lane = -1.1 + (i % 6) * 0.42;
      const z = -2.05 - i * 0.52;
      for (let j = 0; j < 22; j += 1) {
        const t = j / 21;
        points.push(-3.1 + t * 6.2, lane + Math.sin(t * twoPi * (1.5 + (i % 3) * 0.25) + i) * 0.18, z + Math.cos(t * twoPi + i) * 0.1);
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
      const thread = new THREE.Line(geometry, makeLineMaterial(THREE, colorAt(mood, i + 8), 0.56 + state.wireGlow * 0.16));
      thread.userData = { kind: "stitchThread", index: i, anchor: { x: 0, y: lane, z }, seed: pseudo(i * 1009 + 4) * twoPi };
      group.add(thread);
      threeLayer.objects.push(thread);
    }

    for (let i = 0; i < 42; i += 1) {
      const x = (-3.2 + pseudo(i * 1013 + 1) * 6.4) * state.fieldSpread;
      const y = -1.14 + pseudo(i * 1019 + 2) * 2.46;
      const z = -2.2 - pseudo(i * 1021 + 3) * 5.2;
      const knot = new THREE.Mesh(knotGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.54 + state.wireGlow * 0.08));
      knot.position.set(x, y, z);
      knot.userData = { kind: "stitchKnot", index: i, anchor: { x, y, z }, seed: pseudo(i * 1031 + 4) * twoPi };
      group.add(knot);
      threeLayer.objects.push(knot);
    }

    for (let i = 0; i < 5; i += 1) {
      const shuttle = new THREE.Mesh(shuttleGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 10), 0.62 + state.wireGlow * 0.08));
      const x = (-2.2 + i * 1.1) * state.fieldSpread;
      const y = -1.05 + Math.sin(i) * 0.12;
      const z = -2.8 - i * 0.64;
      shuttle.position.set(x, y, z);
      shuttle.rotation.y = Math.sin(i) * 0.3;
      shuttle.userData = { kind: "stitchShuttle", index: i, anchor: { x, y, z }, seed: pseudo(i * 1033 + 5) * twoPi };
      group.add(shuttle);
      threeLayer.objects.push(shuttle);
    }
  }

  function buildLavaLibrary(THREE, group, mood) {
    group.position.set(0, -0.82, 1.5);
    group.scale.setScalar(1.28);
    const shelfGeometry = new THREE.BoxGeometry(6.2, 0.1, 0.16);
    const uprightGeometry = new THREE.BoxGeometry(0.12, 2.8, 0.18);
    const bookGeometry = new THREE.BoxGeometry(0.18, 0.72, 0.32);
    const pageGeometry = new THREE.BoxGeometry(0.38, 0.52, 0.025);
    const emberGeometry = new THREE.SphereGeometry(0.07, 12, 8);
    const ringGeometry = new THREE.TorusGeometry(1.2, 0.024, 8, 96);

    for (let row = 0; row < 4; row += 1) {
      const y = -0.92 + row * 0.72;
      const z = -2.4 - row * 0.82;
      const shelf = new THREE.Mesh(shelfGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, row + 1), 0.42 + state.wireGlow * 0.06));
      shelf.position.set(0, y, z);
      shelf.userData = { kind: "archiveShelf", index: row, anchor: { x: 0, y, z }, seed: row };
      group.add(shelf);
      threeLayer.objects.push(shelf);

      for (let col = 0; col < 5; col += 1) {
        const x = (-2.85 + col * 1.42) * state.fieldSpread;
        const upright = new THREE.Mesh(uprightGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, row + col + 4), 0.34 + state.wireGlow * 0.05));
        upright.position.set(x, y + 0.68, z - 0.04);
        upright.userData = { kind: "archiveShelf", index: row * 5 + col + 4, anchor: { x, y: y + 0.68, z: z - 0.04 }, seed: row + col };
        group.add(upright);
        threeLayer.objects.push(upright);
      }
    }

    for (let i = 0; i < 34; i += 1) {
      const row = i % 4;
      const x = (-2.8 + (i % 9) * 0.7 + pseudo(i * 1039 + 1) * 0.18) * state.fieldSpread;
      const y = -0.46 + row * 0.72 + pseudo(i * 1049 + 2) * 0.12;
      const z = -2.38 - row * 0.82 - pseudo(i * 1051 + 3) * 0.52;
      const book = new THREE.Mesh(bookGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.5 + state.wireGlow * 0.07));
      book.position.set(x, y, z);
      book.rotation.z = Math.sin(i) * 0.09;
      book.userData = { kind: "archiveBook", index: i, anchor: { x, y, z }, seed: pseudo(i * 1061 + 4) * twoPi };
      group.add(book);
      threeLayer.objects.push(book);
    }

    for (let i = 0; i < 24; i += 1) {
      const page = new THREE.Mesh(pageGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 7), 0.56 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.4 + pseudo(i * 1063 + 1) * 3.2) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 0.3 + pseudo(i * 1069 + 2) * 2.1;
      const z = -1.8 - pseudo(i * 1087 + 3) * 7.8;
      page.position.set(x, y, z);
      page.rotation.set(Math.sin(i) * 0.3, angle, Math.cos(i) * 0.2);
      page.userData = { kind: "archivePage", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 1091 + 4) * twoPi };
      group.add(page);
      threeLayer.objects.push(page);
    }

    for (let i = 0; i < 52; i += 1) {
      const ember = new THREE.Mesh(emberGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.66 + state.wireGlow * 0.08));
      const x = (-3.4 + pseudo(i * 1093 + 1) * 6.8) * state.fieldSpread;
      const y = -1.2 + pseudo(i * 1097 + 2) * 3.5;
      const z = -1.8 - pseudo(i * 1103 + 3) * 9.4;
      ember.position.set(x, y, z);
      ember.userData = { kind: "archiveEmber", index: i, anchor: { x, y, z }, seed: pseudo(i * 1109 + 4) * twoPi };
      group.add(ember);
      threeLayer.objects.push(ember);
    }

    for (let i = 0; i < 6; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 6), 0.36 + state.wireGlow * 0.12));
      ring.position.set(Math.sin(i) * 0.28, 0.24 + i * 0.12, -2.6 - i * 1.08);
      ring.rotation.set(Math.PI * 0.5 + Math.sin(i) * 0.24, 0, i * 0.62);
      ring.scale.setScalar(0.72 + i * 0.16);
      ring.userData = { kind: "archiveRing", index: i, anchor: { x: ring.position.x, y: ring.position.y, z: ring.position.z }, seed: pseudo(i * 1117 + 5) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }
  }

  function buildElevatorForest(THREE, group, mood) {
    group.position.set(0, -0.2, 1.25);
    group.scale.setScalar(1.24);
    const shaftGeometry = new THREE.BoxGeometry(0.08, 5.2, 0.08);
    const railGeometry = new THREE.BoxGeometry(0.04, 5.6, 0.04);
    const carGeometry = new THREE.BoxGeometry(0.78, 0.92, 0.52);
    const doorGeometry = new THREE.BoxGeometry(0.32, 0.84, 0.035);
    const counterGeometry = new THREE.BoxGeometry(0.26, 0.58, 0.18);
    const lampGeometry = new THREE.SphereGeometry(0.07, 12, 8);

    for (let i = 0; i < 9; i += 1) {
      const angle = (i / 9) * twoPi;
      const radius = (1.0 + (i % 3) * 0.78) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const z = -2.0 - i * 0.82;
      const y = 0.1 + Math.sin(i * 0.8) * 0.42;
      const shaft = new THREE.Mesh(shaftGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.38 + state.wireGlow * 0.06));
      shaft.position.set(x, y, z);
      shaft.rotation.z = Math.sin(angle) * 0.08;
      shaft.userData = { kind: "liftShaft", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 1123 + 1) * twoPi };
      group.add(shaft);
      threeLayer.objects.push(shaft);

      const rail = new THREE.Mesh(railGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.34 + state.wireGlow * 0.05));
      rail.position.set(x + Math.sin(angle) * 0.18, y, z + Math.cos(angle) * 0.18);
      rail.userData = { kind: "liftRail", index: i, anchor: { x: rail.position.x, y, z: rail.position.z }, seed: pseudo(i * 1129 + 2) * twoPi };
      group.add(rail);
      threeLayer.objects.push(rail);

      const car = new THREE.Mesh(carGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 7), 0.58 + state.wireGlow * 0.08));
      car.position.set(x, y - 0.6 + pseudo(i * 1133 + 3) * 1.6, z);
      car.userData = { kind: "liftCar", index: i, anchor: { x, y, z }, seed: pseudo(i * 1139 + 4) * twoPi };
      group.add(car);
      threeLayer.objects.push(car);

      for (let side = -1; side <= 1; side += 2) {
        const door = new THREE.Mesh(doorGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + side + 11), 0.48 + state.wireGlow * 0.07));
        door.position.set(x + side * 0.18, car.position.y, z + 0.29);
        door.userData = { kind: "liftDoor", index: i * 2 + (side > 0 ? 1 : 0), side, anchor: { x: door.position.x, y: door.position.y, z: door.position.z }, carAnchor: car.userData.anchor, seed: pseudo(i * 1151 + side + 5) * twoPi };
        group.add(door);
        threeLayer.objects.push(door);
      }

      const counter = new THREE.Mesh(counterGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 13), 0.44 + state.wireGlow * 0.06));
      counter.position.set(x - Math.sin(angle) * 0.42, y + 0.8, z - Math.cos(angle) * 0.32);
      counter.userData = { kind: "liftCounterweight", index: i, anchor: { x: counter.position.x, y: counter.position.y, z: counter.position.z }, seed: pseudo(i * 1153 + 6) * twoPi };
      group.add(counter);
      threeLayer.objects.push(counter);
    }

    for (let i = 0; i < 36; i += 1) {
      const lamp = new THREE.Mesh(lampGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.66 + state.wireGlow * 0.08));
      const x = (-4 + pseudo(i * 1163 + 1) * 8) * state.fieldSpread;
      const y = -2.2 + (i % 9) * 0.54;
      const z = -1.7 - pseudo(i * 1171 + 2) * 10.5;
      lamp.position.set(x, y, z);
      lamp.userData = { kind: "liftLamp", index: i, anchor: { x, y, z }, seed: pseudo(i * 1181 + 3) * twoPi };
      group.add(lamp);
      threeLayer.objects.push(lamp);
    }
  }

  function buildSwitchboardChoir(THREE, group, mood) {
    group.position.set(0, -0.42, 1.78);
    group.scale.setScalar(1.48);
    const panelGeometry = new THREE.BoxGeometry(6.45, 3.05, 0.18);
    const jackGeometry = new THREE.CylinderGeometry(0.095, 0.095, 0.06, 18);
    const plugGeometry = new THREE.CylinderGeometry(0.085, 0.12, 0.42, 16);
    const bulbGeometry = new THREE.SphereGeometry(0.105, 14, 10);
    const leverGeometry = new THREE.BoxGeometry(0.1, 0.66, 0.1);
    const dialGeometry = new THREE.TorusGeometry(0.34, 0.024, 8, 56);
    const panel = new THREE.Mesh(panelGeometry, makeCrystalMaterial(THREE, colorAt(mood, 1), 0.36 + state.wireGlow * 0.06));
    panel.position.set(0, 0, -3.2);
    panel.userData = { kind: "switchPanel", index: 0, anchor: { x: 0, y: 0, z: -3.2 }, seed: 0.14 };
    group.add(panel);
    threeLayer.objects.push(panel);

    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 9; col += 1) {
        const index = row * 9 + col;
        const x = (-2.72 + col * 0.68) * state.fieldSpread;
        const y = -1.08 + row * 0.54;
        const z = -3.05 + pseudo(index * 1193 + 1) * 0.12;
        const jack = new THREE.Mesh(jackGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, index + 2), 0.48 + state.wireGlow * 0.06));
        jack.position.set(x, y, z);
        jack.rotation.x = Math.PI * 0.5;
        jack.userData = { kind: "switchJack", index, anchor: { x, y, z }, seed: pseudo(index * 1199 + 2) * twoPi };
        group.add(jack);
        threeLayer.objects.push(jack);

        if ((row + col) % 3 === 0) {
          const bulb = new THREE.Mesh(bulbGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, index + 5), 0.68 + state.wireGlow * 0.08));
          bulb.position.set(x, y + 0.18, z + 0.16);
          bulb.userData = { kind: "switchBulb", index, anchor: { x, y: y + 0.18, z: z + 0.16 }, seed: pseudo(index * 1201 + 3) * twoPi };
          group.add(bulb);
          threeLayer.objects.push(bulb);
        }
      }
    }

    for (let i = 0; i < 18; i += 1) {
      const fromX = (-2.72 + (i % 9) * 0.68) * state.fieldSpread;
      const fromY = -1.05 + (i % 5) * 0.54;
      const toX = (-2.72 + ((i * 4 + 5) % 9) * 0.68) * state.fieldSpread;
      const toY = -1.05 + ((i * 3 + 2) % 5) * 0.54;
      const z = -2.9 + (i % 4) * 0.04;
      const points = [
        fromX, fromY, z,
        (fromX + toX) * 0.5 + Math.sin(i) * 0.35, Math.max(fromY, toY) + 0.7 + pseudo(i * 1213 + 1) * 0.5, z + 0.08,
        toX, toY, z,
      ];
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
      const cable = new THREE.Line(geometry, makeLineMaterial(THREE, colorAt(mood, i + 7), 0.58 + state.wireGlow * 0.16));
      cable.userData = { kind: "switchCable", index: i, anchor: { x: 0, y: 0, z }, seed: pseudo(i * 1217 + 2) * twoPi };
      group.add(cable);
      threeLayer.objects.push(cable);

      const plug = new THREE.Mesh(plugGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 9), 0.58 + state.wireGlow * 0.07));
      plug.position.set(toX, toY, z + 0.22);
      plug.rotation.x = Math.PI * 0.5;
      plug.userData = { kind: "switchPlug", index: i, anchor: { x: toX, y: toY, z: z + 0.22 }, seed: pseudo(i * 1223 + 3) * twoPi };
      group.add(plug);
      threeLayer.objects.push(plug);
    }

    for (let i = 0; i < 8; i += 1) {
      const x = (-2.68 + i * 0.76) * state.fieldSpread;
      const y = -1.55;
      const z = -2.88;
      const lever = new THREE.Mesh(leverGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 11), 0.62 + state.wireGlow * 0.07));
      lever.position.set(x, y, z);
      lever.userData = { kind: "switchLever", index: i, anchor: { x, y, z }, seed: pseudo(i * 1229 + 4) * twoPi };
      group.add(lever);
      threeLayer.objects.push(lever);
    }

    for (let i = 0; i < 7; i += 1) {
      const dial = new THREE.Mesh(dialGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 14), 0.5 + state.wireGlow * 0.14));
      dial.position.set((-2.35 + i * 0.78) * state.fieldSpread, 1.56, -2.86);
      dial.userData = { kind: "switchDial", index: i, anchor: { x: dial.position.x, y: dial.position.y, z: dial.position.z }, seed: pseudo(i * 1231 + 5) * twoPi };
      group.add(dial);
      threeLayer.objects.push(dial);
    }
  }

  function buildPrismCourt(THREE, group, mood) {
    group.position.set(0, -0.58, 1.96);
    group.scale.setScalar(1.68);
    const floorGeometry = new THREE.CylinderGeometry(3.3, 3.3, 0.1, 9);
    const standGeometry = new THREE.CylinderGeometry(0.5, 0.72, 1.58, 6);
    const prismGeometry = new THREE.OctahedronGeometry(0.66, 1);
    const beamGeometry = new THREE.BoxGeometry(0.12, 0.12, 3.05);
    const scaleGeometry = new THREE.TorusGeometry(0.58, 0.026, 8, 64);
    const shardGeometry = new THREE.TetrahedronGeometry(0.24, 0);
    const floor = new THREE.Mesh(floorGeometry, makeCrystalMaterial(THREE, colorAt(mood, 1), 0.42 + state.wireGlow * 0.07));
    floor.position.set(0, -0.84, -2.82);
    floor.userData = { kind: "courtFloor", index: 0, anchor: { x: 0, y: -0.84, z: -2.82 }, seed: 0.2 };
    group.add(floor);
    threeLayer.objects.push(floor);

    for (let i = 0; i < 9; i += 1) {
      const angle = (i / 9) * twoPi;
      const radius = (1.12 + (i % 3) * 0.58) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.22 + Math.sin(i * 0.7) * 0.28;
      const z = -2.08 - i * 0.42;
      const stand = new THREE.Mesh(standGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.48 + state.wireGlow * 0.07));
      stand.position.set(x, y, z);
      stand.rotation.y = angle;
      stand.userData = { kind: "courtStand", index: i, anchor: { x, y, z }, angle, seed: pseudo(i * 1237 + 1) * twoPi };
      group.add(stand);
      threeLayer.objects.push(stand);

      const prism = new THREE.Mesh(prismGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 5), 0.68 + state.wireGlow * 0.09));
      prism.position.set(x, y + 1.16, z);
      prism.userData = { kind: "courtPrism", index: i, anchor: { x, y: y + 1.16, z }, angle, seed: pseudo(i * 1249 + 2) * twoPi };
      group.add(prism);
      threeLayer.objects.push(prism);
    }

    for (let i = 0; i < 11; i += 1) {
      const beam = new THREE.Mesh(beamGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 8), 0.5 + state.wireGlow * 0.08));
      beam.position.set((-2.8 + i * 0.56) * state.fieldSpread, 0.68 + Math.sin(i) * 0.24, -1.95 - i * 0.34);
      beam.rotation.set(Math.sin(i) * 0.16, i * 0.32, Math.cos(i) * 0.1);
      beam.userData = { kind: "courtBeam", index: i, anchor: { x: beam.position.x, y: beam.position.y, z: beam.position.z }, seed: pseudo(i * 1259 + 3) * twoPi };
      group.add(beam);
      threeLayer.objects.push(beam);
    }

    for (let i = 0; i < 8; i += 1) {
      const scale = new THREE.Mesh(scaleGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 11), 0.44 + state.wireGlow * 0.12));
      scale.position.set(Math.sin(i * 1.7) * 2.15 * state.fieldSpread, 1.22 + Math.cos(i) * 0.42, -1.95 - i * 0.55);
      scale.rotation.set(Math.PI * 0.5 + Math.sin(i) * 0.22, Math.cos(i) * 0.12, i * 0.55);
      scale.userData = { kind: "courtScale", index: i, anchor: { x: scale.position.x, y: scale.position.y, z: scale.position.z }, seed: pseudo(i * 1277 + 4) * twoPi };
      group.add(scale);
      threeLayer.objects.push(scale);
    }

    for (let i = 0; i < 58; i += 1) {
      const shard = new THREE.Mesh(shardGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.62 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.5 + pseudo(i * 1279 + 1) * 3.7) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.52 + pseudo(i * 1283 + 2) * 3.35;
      const z = -1.28 - pseudo(i * 1289 + 3) * 7.6;
      shard.position.set(x, y, z);
      shard.userData = { kind: "courtShard", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 1291 + 4) * twoPi };
      group.add(shard);
      threeLayer.objects.push(shard);
    }
  }

  function buildWeatherFactory(THREE, group, mood) {
    group.position.set(0, -0.5, 1.96);
    group.scale.setScalar(1.7);
    const gaugeGeometry = new THREE.TorusGeometry(0.56, 0.034, 8, 72);
    const needleGeometry = new THREE.BoxGeometry(0.045, 0.58, 0.045);
    const vaneGeometry = new THREE.ConeGeometry(0.24, 0.74, 3);
    const drumGeometry = new THREE.CylinderGeometry(0.58, 0.68, 0.82, 32);
    const pipeGeometry = new THREE.CylinderGeometry(0.06, 0.08, 2.7, 12);
    const dropletGeometry = new THREE.SphereGeometry(0.085, 14, 10);

    for (let i = 0; i < 10; i += 1) {
      const x = (-2.85 + (i % 5) * 1.42) * state.fieldSpread;
      const y = -0.58 + Math.floor(i / 5) * 1.0;
      const z = -2.05 - (i % 3) * 0.48;
      const gauge = new THREE.Mesh(gaugeGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 2), 0.68 + state.wireGlow * 0.18));
      gauge.position.set(x, y, z);
      gauge.rotation.x = Math.PI * 0.5;
      gauge.userData = { kind: "weatherGauge", index: i, anchor: { x, y, z }, seed: pseudo(i * 1301 + 1) * twoPi };
      group.add(gauge);
      threeLayer.objects.push(gauge);

      const needle = new THREE.Mesh(needleGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 6), 0.78 + state.wireGlow * 0.09));
      needle.position.set(x, y, z + 0.06);
      needle.userData = { kind: "weatherNeedle", index: i, anchor: { x, y, z: z + 0.06 }, seed: pseudo(i * 1303 + 2) * twoPi };
      group.add(needle);
      threeLayer.objects.push(needle);
    }

    for (let i = 0; i < 8; i += 1) {
      const vane = new THREE.Mesh(vaneGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 8), 0.7 + state.wireGlow * 0.09));
      const angle = (i / 8) * twoPi;
      const radius = (1.05 + (i % 3) * 0.82) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 1.22 + Math.sin(i) * 0.42;
      const z = -1.68 - i * 0.54;
      vane.position.set(x, y, z);
      vane.rotation.set(Math.PI * 0.5, 0, angle);
      vane.userData = { kind: "weatherVane", index: i, anchor: { x, y, z }, angle, seed: pseudo(i * 1319 + 3) * twoPi };
      group.add(vane);
      threeLayer.objects.push(vane);
    }

    for (let i = 0; i < 6; i += 1) {
      const drum = new THREE.Mesh(drumGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 11), 0.62 + state.wireGlow * 0.08));
      const x = (-2.45 + i * 0.98) * state.fieldSpread;
      const y = -1.1 + Math.sin(i * 0.9) * 0.16;
      const z = -2.16 - (i % 2) * 0.58;
      drum.position.set(x, y, z);
      drum.userData = { kind: "weatherDrum", index: i, anchor: { x, y, z }, seed: pseudo(i * 1321 + 4) * twoPi };
      group.add(drum);
      threeLayer.objects.push(drum);
    }

    for (let i = 0; i < 9; i += 1) {
      const pipe = new THREE.Mesh(pipeGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 14), 0.48 + state.wireGlow * 0.07));
      pipe.position.set((-3.25 + i * 0.82) * state.fieldSpread, 0.02 + Math.sin(i) * 0.28, -2.35 - (i % 3) * 0.42);
      pipe.rotation.z = Math.sin(i * 1.2) * 0.3;
      pipe.userData = { kind: "weatherPipe", index: i, anchor: { x: pipe.position.x, y: pipe.position.y, z: pipe.position.z }, seed: pseudo(i * 1327 + 5) * twoPi };
      group.add(pipe);
      threeLayer.objects.push(pipe);
    }

    for (let i = 0; i < 86; i += 1) {
      const drop = new THREE.Mesh(dropletGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.68 + state.wireGlow * 0.08));
      const x = (-4.6 + pseudo(i * 1329 + 1) * 9.2) * state.fieldSpread;
      const y = -1.45 + pseudo(i * 1331 + 2) * 4.85;
      const z = -1.18 - pseudo(i * 1361 + 3) * 8.8;
      drop.position.set(x, y, z);
      drop.userData = { kind: "weatherDrop", index: i, anchor: { x, y, z }, seed: pseudo(i * 1367 + 4) * twoPi };
      group.add(drop);
      threeLayer.objects.push(drop);
    }
  }

  function buildSemaphoreBloom(THREE, group, mood) {
    group.position.set(0, -0.44, 1.78);
    group.scale.setScalar(1.52);
    const mastGeometry = new THREE.CylinderGeometry(0.035, 0.052, 2.25, 10);
    const flagGeometry = new THREE.BoxGeometry(0.72, 0.36, 0.035);
    const lampGeometry = new THREE.SphereGeometry(0.11, 16, 10);
    const beamGeometry = new THREE.BoxGeometry(0.07, 0.07, 2.8);
    const ringGeometry = new THREE.TorusGeometry(0.42, 0.018, 8, 64);

    for (let i = 0; i < 12; i += 1) {
      const row = Math.floor(i / 6);
      const col = i % 6;
      const x = (-2.65 + col * 1.06) * state.fieldSpread;
      const y = -0.36 + row * 1.02 + Math.sin(i * 0.7) * 0.08;
      const z = -2.18 - row * 0.46 - (col % 2) * 0.18;
      const mast = new THREE.Mesh(mastGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.54 + state.wireGlow * 0.08));
      mast.position.set(x, y, z);
      mast.userData = { kind: "semaMast", index: i, anchor: { x, y, z }, seed: pseudo(i * 1373 + 1) * twoPi };
      group.add(mast);
      threeLayer.objects.push(mast);

      [-1, 1].forEach((side, sideIndex) => {
        const flag = new THREE.Mesh(flagGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + sideIndex + 5), 0.72 + state.wireGlow * 0.08));
        const flagY = y + 0.55 + sideIndex * 0.42;
        flag.position.set(x + side * 0.34, flagY, z + 0.04);
        flag.userData = { kind: "semaFlag", index: i * 2 + sideIndex, side, anchor: { x: flag.position.x, y: flagY, z: z + 0.04 }, seed: pseudo(i * 1381 + sideIndex) * twoPi };
        group.add(flag);
        threeLayer.objects.push(flag);
      });

      const lamp = new THREE.Mesh(lampGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 9), 0.82 + state.wireGlow * 0.08));
      lamp.position.set(x, y + 1.22, z + 0.12);
      lamp.userData = { kind: "semaLamp", index: i, anchor: { x, y: y + 1.22, z: z + 0.12 }, seed: pseudo(i * 1399 + 3) * twoPi };
      group.add(lamp);
      threeLayer.objects.push(lamp);
    }

    for (let i = 0; i < 10; i += 1) {
      const beam = new THREE.Mesh(beamGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 13), 0.42 + state.wireGlow * 0.07));
      const x = (-2.7 + i * 0.6) * state.fieldSpread;
      const y = 0.42 + Math.sin(i) * 0.28;
      const z = -1.84 - (i % 3) * 0.52;
      beam.position.set(x, y, z);
      beam.rotation.set(Math.PI * 0.5 + Math.sin(i) * 0.08, i * 0.42, Math.cos(i * 0.8) * 0.22);
      beam.userData = { kind: "semaBeam", index: i, anchor: { x, y, z }, seed: pseudo(i * 1409 + 4) * twoPi };
      group.add(beam);
      threeLayer.objects.push(beam);
    }

    for (let i = 0; i < 9; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 18), 0.62 + state.wireGlow * 0.18));
      const angle = (i / 9) * twoPi;
      const radius = (0.9 + (i % 3) * 0.72) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 1.02 + Math.sin(i * 1.1) * 0.28;
      const z = -1.7 - i * 0.38;
      ring.position.set(x, y, z);
      ring.rotation.set(Math.PI * 0.5, 0, angle);
      ring.userData = { kind: "semaRing", index: i, anchor: { x, y, z }, angle, seed: pseudo(i * 1423 + 5) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }
  }

  function buildPendulumTemple(THREE, group, mood) {
    group.position.set(0, -0.28, 1.86);
    group.scale.setScalar(1.48);
    const stringGeometry = new THREE.CylinderGeometry(0.022, 0.028, 2.2, 8);
    const bobGeometry = new THREE.SphereGeometry(0.22, 20, 12);
    const bellGeometry = new THREE.CylinderGeometry(0.36, 0.52, 0.38, 24);
    const haloGeometry = new THREE.TorusGeometry(0.64, 0.02, 8, 72);
    const archGeometry = new THREE.TorusGeometry(2.9, 0.035, 10, 96);

    for (let i = 0; i < 3; i += 1) {
      const arch = new THREE.Mesh(archGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 2), 0.52 + state.wireGlow * 0.14));
      arch.position.set(0, 0.2 + i * 0.12, -2.25 - i * 0.72);
      arch.rotation.x = Math.PI * 0.5;
      arch.scale.set(1, 0.44 + i * 0.08, 1);
      arch.userData = { kind: "pendulumArch", index: i, anchor: { x: 0, y: arch.position.y, z: arch.position.z }, seed: pseudo(i * 1427 + 1) * twoPi };
      group.add(arch);
      threeLayer.objects.push(arch);
    }

    for (let i = 0; i < 11; i += 1) {
      const x = (-3.0 + i * 0.6) * state.fieldSpread;
      const topY = 1.32 + Math.sin(i * 0.5) * 0.18;
      const z = -1.78 - (i % 4) * 0.42;
      const length = 1.38 + (i % 5) * 0.18;
      const string = new THREE.Mesh(stringGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.44 + state.wireGlow * 0.06));
      string.scale.y = length / 2.2;
      string.position.set(x, topY - length * 0.5, z);
      string.userData = { kind: "pendulumString", index: i, anchor: { x, topY, z, length }, seed: pseudo(i * 1433 + 2) * twoPi };
      group.add(string);
      threeLayer.objects.push(string);

      const bob = new THREE.Mesh(bobGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 6), 0.7 + state.wireGlow * 0.08));
      bob.position.set(x, topY - length, z);
      bob.userData = { kind: "pendulumBob", index: i, anchor: { x, topY, z, length }, seed: pseudo(i * 1439 + 3) * twoPi };
      group.add(bob);
      threeLayer.objects.push(bob);

      const bell = new THREE.Mesh(bellGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 9), 0.52 + state.wireGlow * 0.07));
      bell.position.set(x, -1.14 + Math.sin(i) * 0.08, z - 0.08);
      bell.userData = { kind: "pendulumBell", index: i, anchor: { x, y: bell.position.y, z: z - 0.08 }, seed: pseudo(i * 1447 + 4) * twoPi };
      group.add(bell);
      threeLayer.objects.push(bell);

      const halo = new THREE.Mesh(haloGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 12), 0.5 + state.wireGlow * 0.16));
      halo.position.set(x, -0.68 + Math.cos(i) * 0.08, z);
      halo.rotation.x = Math.PI * 0.5;
      halo.userData = { kind: "pendulumHalo", index: i, anchor: { x, y: halo.position.y, z }, seed: pseudo(i * 1451 + 5) * twoPi };
      group.add(halo);
      threeLayer.objects.push(halo);
    }
  }

  function buildNeonAbacus(THREE, group, mood) {
    group.position.set(0, -0.48, 1.8);
    group.scale.setScalar(1.58);
    const railGeometry = new THREE.CylinderGeometry(0.032, 0.04, 5.7, 10);
    const sideGeometry = new THREE.BoxGeometry(0.12, 3.75, 0.12);
    const capGeometry = new THREE.BoxGeometry(6.0, 0.12, 0.12);
    const beadGeometry = new THREE.SphereGeometry(0.19, 20, 12);
    const glyphGeometry = new THREE.TorusKnotGeometry(0.17, 0.034, 54, 8, 2, 3);

    [-1, 1].forEach((side, index) => {
      const sideBar = new THREE.Mesh(sideGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, index + 1), 0.5 + state.wireGlow * 0.06));
      sideBar.position.set(side * 3.08 * state.fieldSpread, 0.02, -2.58);
      sideBar.userData = { kind: "abacusFrame", index, anchor: { x: sideBar.position.x, y: sideBar.position.y, z: sideBar.position.z }, seed: pseudo(index * 1459 + 1) * twoPi };
      group.add(sideBar);
      threeLayer.objects.push(sideBar);
    });

    [-1, 1].forEach((side, index) => {
      const cap = new THREE.Mesh(capGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, index + 4), 0.48 + state.wireGlow * 0.06));
      cap.position.set(0, side * 1.86, -2.58);
      cap.userData = { kind: "abacusFrame", index: index + 2, anchor: { x: 0, y: cap.position.y, z: -2.58 }, seed: pseudo(index * 1469 + 2) * twoPi };
      group.add(cap);
      threeLayer.objects.push(cap);
    });

    for (let row = 0; row < 7; row += 1) {
      const y = -1.36 + row * 0.46;
      const z = -2.22 - (row % 2) * 0.16;
      const rail = new THREE.Mesh(railGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, row + 5), 0.5 + state.wireGlow * 0.06));
      rail.position.set(0, y, z);
      rail.rotation.z = Math.PI * 0.5;
      rail.userData = { kind: "abacusRail", index: row, anchor: { x: 0, y, z }, seed: pseudo(row * 1471 + 3) * twoPi };
      group.add(rail);
      threeLayer.objects.push(rail);

      for (let col = 0; col < 9; col += 1) {
        const x = (-2.36 + col * 0.59) * state.fieldSpread;
        const bead = new THREE.Mesh(beadGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, row * 2 + col + 7), 0.72 + state.wireGlow * 0.08));
        bead.position.set(x, y, z + 0.12);
        bead.userData = { kind: "abacusBead", index: row * 9 + col, row, col, anchor: { x, y, z: z + 0.12 }, seed: pseudo((row * 9 + col) * 1481 + 4) * twoPi };
        group.add(bead);
        threeLayer.objects.push(bead);
      }
    }

    for (let i = 0; i < 18; i += 1) {
      const glyph = new THREE.Mesh(glyphGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 12), 0.58 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.8 + pseudo(i * 1493 + 1) * 2.8) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.2 + pseudo(i * 1499 + 2) * 2.6;
      const z = -1.42 - pseudo(i * 1511 + 3) * 4.2;
      glyph.position.set(x, y, z);
      glyph.userData = { kind: "abacusGlyph", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 1517 + 4) * twoPi };
      group.add(glyph);
      threeLayer.objects.push(glyph);
    }
  }

  function buildCipherFountain(THREE, group, mood) {
    group.position.set(0, -0.44, 1.9);
    group.scale.setScalar(1.68);
    const basinGeometry = new THREE.TorusGeometry(2.35, 0.075, 12, 112);
    const columnGeometry = new THREE.CylinderGeometry(0.035, 0.052, 2.55, 10);
    const glyphGeometry = new THREE.BoxGeometry(0.34, 0.54, 0.035);
    const dropletGeometry = new THREE.TetrahedronGeometry(0.11, 0);
    const streamGeometry = new THREE.CylinderGeometry(0.018, 0.028, 2.2, 8);
    const lamp = new THREE.PointLight(hexToNumber(colorAt(mood, 5)), 1.35 + state.wireGlow * 0.45, 7.5);
    lamp.position.set(0, 0.9, -2.1);
    group.add(lamp);
    const basin = new THREE.Mesh(basinGeometry, makeLineMaterial(THREE, colorAt(mood, 2), 0.68 + state.wireGlow * 0.2));
    basin.position.set(0, -1.18, -2.45);
    basin.rotation.x = Math.PI * 0.5;
    basin.userData = { kind: "cipherBasin", index: 0, anchor: { x: 0, y: -1.18, z: -2.45 }, seed: 0.4 };
    group.add(basin);
    threeLayer.objects.push(basin);

    for (let i = 0; i < 9; i += 1) {
      const x = (-2.35 + i * 0.58) * state.fieldSpread;
      const z = -2.35 - (i % 3) * 0.28;
      const y = -0.1 + Math.sin(i * 0.7) * 0.12;
      const column = new THREE.Mesh(columnGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.42 + state.wireGlow * 0.06));
      column.position.set(x, y, z);
      column.userData = { kind: "cipherColumn", index: i, anchor: { x, y, z }, seed: pseudo(i * 1523 + 1) * twoPi };
      group.add(column);
      threeLayer.objects.push(column);

      const stream = new THREE.Mesh(streamGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 7), 0.48 + state.wireGlow * 0.07));
      stream.position.set(x, y + 0.1, z + 0.08);
      stream.userData = { kind: "cipherStream", index: i, anchor: { x, y: y + 0.1, z: z + 0.08 }, seed: pseudo(i * 1531 + 2) * twoPi };
      group.add(stream);
      threeLayer.objects.push(stream);
    }

    for (let i = 0; i < 72; i += 1) {
      const glyph = new THREE.Mesh(glyphGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 5), 0.62 + state.wireGlow * 0.08));
      const lane = i % 12;
      const x = (-2.75 + lane * 0.5) * state.fieldSpread + Math.sin(i) * 0.06;
      const y = -1.0 + pseudo(i * 1543 + 1) * 3.9;
      const z = -1.55 - pseudo(i * 1549 + 2) * 4.8;
      glyph.position.set(x, y, z);
      glyph.rotation.set(pseudo(i * 1553 + 3) * 0.4, pseudo(i * 1559 + 4) * twoPi, pseudo(i * 1567 + 5) * 0.5);
      glyph.userData = { kind: "cipherGlyph", index: i, lane, anchor: { x, y, z }, seed: pseudo(i * 1571 + 6) * twoPi };
      group.add(glyph);
      threeLayer.objects.push(glyph);
    }

    for (let i = 0; i < 40; i += 1) {
      const drop = new THREE.Mesh(dropletGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 12), 0.64 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.48 + pseudo(i * 1579 + 1) * 2.7) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.9 + pseudo(i * 1583 + 2) * 3.2;
      const z = -1.36 - pseudo(i * 1597 + 3) * 5.8;
      drop.position.set(x, y, z);
      drop.userData = { kind: "cipherDrop", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 1601 + 4) * twoPi };
      group.add(drop);
      threeLayer.objects.push(drop);
    }
  }

  function buildOrreryCathedral(THREE, group, mood) {
    group.position.set(0, -0.38, 1.86);
    group.scale.setScalar(1.6);
    const ringGeometry = new THREE.TorusGeometry(1.0, 0.024, 10, 96);
    const armGeometry = new THREE.BoxGeometry(2.2, 0.055, 0.055);
    const planetGeometry = new THREE.SphereGeometry(0.18, 20, 12);
    const spireGeometry = new THREE.ConeGeometry(0.13, 1.1, 4);
    const dialGeometry = new THREE.TorusGeometry(0.36, 0.018, 8, 64);
    const coreGeometry = new THREE.SphereGeometry(0.42, 32, 18);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: hexToNumber(colorAt(mood, 6)),
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.set(0, 0.08, -1.95);
    core.userData = { kind: "orreryCore", index: 0, anchor: { x: 0, y: 0.08, z: -1.95 }, seed: 0.25 };
    group.add(core);
    threeLayer.objects.push(core);
    const lamp = new THREE.PointLight(hexToNumber(colorAt(mood, 7)), 2.1 + state.wireGlow * 0.7, 8.5);
    lamp.position.copy(core.position);
    group.add(lamp);

    const rayPoints = [];
    for (let i = 0; i < 36; i += 1) {
      const angle = (i / 36) * twoPi;
      const radius = 0.68 + (i % 6) * 0.33;
      rayPoints.push(0, 0.08, -1.95, Math.cos(angle) * radius * state.fieldSpread, 0.08 + Math.sin(angle * 3) * 0.16, -1.95 + Math.sin(angle) * 0.42);
    }
    const rayGeometry = new THREE.BufferGeometry();
    rayGeometry.setAttribute("position", new THREE.Float32BufferAttribute(rayPoints, 3));
    const rayMaterial = new THREE.LineBasicMaterial({
      color: hexToNumber(colorAt(mood, 8)),
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const rays = new THREE.LineSegments(rayGeometry, rayMaterial);
    rays.userData = { kind: "orreryRay", index: 0, seed: 0.7 };
    group.add(rays);
    threeLayer.objects.push(rays);

    for (let i = 0; i < 6; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.42 + state.wireGlow * 0.08));
      ring.position.set(0, 0.06 + i * 0.05, -2.1 - i * 0.48);
      ring.rotation.set(Math.PI * 0.5 + i * 0.12, i * 0.28, i * 0.42);
      ring.scale.setScalar(1.1 + i * 0.28);
      ring.userData = { kind: "orreryRing", index: i, anchor: { x: 0, y: ring.position.y, z: ring.position.z }, seed: pseudo(i * 1607 + 1) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }

    for (let i = 0; i < 14; i += 1) {
      const angle = (i / 14) * twoPi;
      const radius = (0.82 + (i % 5) * 0.38) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.05 + Math.sin(i * 0.8) * 0.38;
      const z = -2.05 - (i % 6) * 0.4;
      const arm = new THREE.Mesh(armGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 5), 0.42 + state.wireGlow * 0.06));
      arm.position.set(x * 0.5, y, z);
      arm.rotation.z = angle;
      arm.userData = { kind: "orreryArm", index: i, anchor: { x: x * 0.5, y, z }, angle, radius, seed: pseudo(i * 1613 + 2) * twoPi };
      group.add(arm);
      threeLayer.objects.push(arm);

      const planet = new THREE.Mesh(planetGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 9), 0.72 + state.wireGlow * 0.08));
      planet.position.set(x, y, z + 0.08);
      planet.userData = { kind: "orreryPlanet", index: i, anchor: { x, y, z: z + 0.08 }, angle, radius, seed: pseudo(i * 1619 + 3) * twoPi };
      group.add(planet);
      threeLayer.objects.push(planet);
    }

    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * twoPi;
      const radius = 2.75 * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const z = -2.8 + Math.sin(angle) * 0.55;
      const spire = new THREE.Mesh(spireGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 14), 0.46 + state.wireGlow * 0.06));
      spire.position.set(x, -0.52 + (i % 3) * 0.18, z);
      spire.rotation.y = angle;
      spire.userData = { kind: "orrerySpire", index: i, anchor: { x, y: spire.position.y, z }, angle, seed: pseudo(i * 1621 + 4) * twoPi };
      group.add(spire);
      threeLayer.objects.push(spire);
    }

    for (let i = 0; i < 7; i += 1) {
      const dial = new THREE.Mesh(dialGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 20), 0.4 + state.wireGlow * 0.08));
      dial.position.set(Math.sin(i * 1.8) * 1.9 * state.fieldSpread, 1.1 + Math.cos(i) * 0.22, -1.6 - i * 0.56);
      dial.rotation.set(Math.PI * 0.5, i * 0.22, i * 0.7);
      dial.userData = { kind: "orreryDial", index: i, anchor: { x: dial.position.x, y: dial.position.y, z: dial.position.z }, seed: pseudo(i * 1627 + 5) * twoPi };
      group.add(dial);
      threeLayer.objects.push(dial);
    }
  }

  function buildVelvetReactor(THREE, group, mood) {
    group.position.set(0, -0.42, 1.84);
    group.scale.setScalar(1.5);
    const shellGeometry = new THREE.SphereGeometry(0.82, 28, 16);
    const ringGeometry = new THREE.TorusGeometry(1.15, 0.04, 10, 112);
    const rodGeometry = new THREE.CylinderGeometry(0.035, 0.055, 2.6, 10);
    const coreGeometry = new THREE.IcosahedronGeometry(0.44, 1);
    const sparkGeometry = new THREE.OctahedronGeometry(0.12, 0);

    for (let i = 0; i < 5; i += 1) {
      const shell = new THREE.Mesh(shellGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 1), 0.18 + state.wireGlow * 0.04));
      shell.position.set(0, 0.05, -2.35 - i * 0.18);
      shell.scale.setScalar(1.0 + i * 0.34);
      shell.userData = { kind: "reactorShell", index: i, anchor: { x: 0, y: 0.05, z: shell.position.z }, seed: pseudo(i * 1637 + 1) * twoPi };
      group.add(shell);
      threeLayer.objects.push(shell);
    }

    for (let i = 0; i < 7; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 5), 0.58 + state.wireGlow * 0.16));
      ring.position.set(0, 0.02 + Math.sin(i) * 0.08, -2.28 - i * 0.16);
      ring.rotation.set(Math.PI * 0.5 + i * 0.18, i * 0.28, i * 0.47);
      ring.scale.setScalar(0.8 + i * 0.18);
      ring.userData = { kind: "reactorRing", index: i, anchor: { x: 0, y: ring.position.y, z: ring.position.z }, seed: pseudo(i * 1657 + 2) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }

    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * twoPi;
      const radius = (1.18 + (i % 3) * 0.34) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.36;
      const z = -2.16 - (i % 4) * 0.28;
      const rod = new THREE.Mesh(rodGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 8), 0.48 + state.wireGlow * 0.07));
      rod.position.set(x * 0.52, y, z);
      rod.rotation.set(Math.PI * 0.5, 0, angle);
      rod.userData = { kind: "reactorRod", index: i, anchor: { x: x * 0.52, y, z }, angle, radius, seed: pseudo(i * 1663 + 3) * twoPi };
      group.add(rod);
      threeLayer.objects.push(rod);
    }

    for (let i = 0; i < 3; i += 1) {
      const core = new THREE.Mesh(coreGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 13), 0.76 + state.wireGlow * 0.08));
      core.position.set((i - 1) * 0.3, 0.04 + i * 0.05, -2.02 + i * 0.08);
      core.userData = { kind: "reactorCore", index: i, anchor: { x: core.position.x, y: core.position.y, z: core.position.z }, seed: pseudo(i * 1667 + 4) * twoPi };
      group.add(core);
      threeLayer.objects.push(core);
    }

    for (let i = 0; i < 48; i += 1) {
      const spark = new THREE.Mesh(sparkGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 16), 0.58 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.46 + pseudo(i * 1669 + 1) * 3.0) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -1.2 + pseudo(i * 1693 + 2) * 2.9;
      const z = -1.35 - pseudo(i * 1697 + 3) * 5.2;
      spark.position.set(x, y, z);
      spark.userData = { kind: "reactorSpark", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 1699 + 4) * twoPi };
      group.add(spark);
      threeLayer.objects.push(spark);
    }
  }

  function buildPhaseArray(THREE, group, mood) {
    group.position.set(0, -0.2, 2.1);
    group.scale.setScalar(1.62);
    const nodeGeometry = new THREE.SphereGeometry(0.17, 20, 12);
    const dishGeometry = new THREE.TorusGeometry(0.33, 0.02, 8, 64);
    const cursorGeometry = new THREE.OctahedronGeometry(0.22, 0);
    const haloGeometry = new THREE.TorusGeometry(1.08, 0.014, 8, 160);
    const beamPoints = [];
    const nodes = [];
    const columns = 8;
    const rows = 6;
    const spacingX = 0.58 * state.fieldSpread;
    const spacingY = 0.42;
    const baseZ = -2.25;
    const lamp = new THREE.PointLight(hexToNumber(colorAt(mood, 2)), 2.2 + state.wireGlow * 0.7, 9);
    lamp.position.set(0, 0.78, -1.7);
    group.add(lamp);

    for (let i = 0; i < 9; i += 1) {
      const haloMaterial = new THREE.MeshBasicMaterial({
        color: hexToNumber(colorAt(mood, i + 6)),
        transparent: true,
        opacity: clamp(0.08 + state.wireGlow * 0.035 + i * 0.006, 0.05, 0.24),
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const halo = new THREE.Mesh(haloGeometry.clone(), haloMaterial);
      const baseScale = 1 + i * 0.16;
      halo.position.set(0, -0.1 + i * 0.018, -2.25 - i * 0.16);
      halo.rotation.set(Math.PI * 0.5 + i * 0.06, i * 0.18, i * phi);
      halo.scale.setScalar(baseScale);
      halo.userData = { kind: "phaseHalo", index: i, baseScale, seed: pseudo(i * 1717 + 11) * twoPi };
      group.add(halo);
      threeLayer.objects.push(halo);
    }

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < columns; x += 1) {
        const index = y * columns + x;
        const px = (x - (columns - 1) / 2) * spacingX;
        const py = (y - (rows - 1) / 2) * spacingY;
        const pz = baseZ - y * 0.36 - pseudo(index * 1721 + 3) * 0.54;
        nodes.push({ x: px, y: py, z: pz });
        const node = new THREE.Mesh(nodeGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, index + 4), 0.66 + state.wireGlow * 0.07));
        node.position.set(px, py, pz);
        node.userData = { kind: "phaseNode", index, row: y, col: x, anchor: { x: px, y: py, z: pz }, seed: pseudo(index * 1723 + 5) * twoPi };
        group.add(node);
        threeLayer.objects.push(node);

        const dish = new THREE.Mesh(dishGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, index + 8), 0.56 + state.wireGlow * 0.16));
        dish.position.set(px, py, pz + 0.08);
        dish.rotation.set(Math.PI * 0.5 + (y - 2) * 0.08, (x - 3) * 0.08, index * 0.13);
        dish.userData = { kind: "phaseDish", index, row: y, col: x, anchor: { x: px, y: py, z: pz + 0.08 }, seed: pseudo(index * 1727 + 7) * twoPi };
        group.add(dish);
        threeLayer.objects.push(dish);
      }
    }

    nodes.forEach((node, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      const links = [];
      if (col < columns - 1) links.push(index + 1);
      if (row < rows - 1) links.push(index + columns);
      if (col < columns - 1 && row < rows - 1 && index % 2 === 0) links.push(index + columns + 1);
      if (col > 0 && row < rows - 1 && index % 3 === 1) links.push(index + columns - 1);
      links.forEach((targetIndex) => {
        const target = nodes[targetIndex];
        beamPoints.push(node.x, node.y, node.z, target.x, target.y, target.z);
      });
    });
    const beamGeometry = new THREE.BufferGeometry();
    beamGeometry.setAttribute("position", new THREE.Float32BufferAttribute(beamPoints, 3));
    const beamMaterial = new THREE.LineBasicMaterial({
      color: hexToNumber(colorAt(mood, 10)),
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const beams = new THREE.LineSegments(beamGeometry, beamMaterial);
    beams.userData = { kind: "phaseBeam", index: 0, seed: 0.33 };
    group.add(beams);
    threeLayer.objects.push(beams);

    for (let i = 0; i < 12; i += 1) {
      const cursor = new THREE.Mesh(cursorGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 16), 0.7 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.86 + pseudo(i * 1733 + 1) * 2.55) * state.fieldSpread;
      cursor.position.set(Math.cos(angle) * radius, -0.1 + pseudo(i * 1739 + 2) * 1.75, -1.45 - pseudo(i * 1741 + 3) * 3.45);
      cursor.userData = { kind: "phaseCursor", index: i, anchor: { x: cursor.position.x, y: cursor.position.y, z: cursor.position.z }, angle, radius, seed: pseudo(i * 1747 + 4) * twoPi };
      group.add(cursor);
      threeLayer.objects.push(cursor);
    }
  }

  function buildTectonicForge(THREE, group, mood) {
    group.position.set(0, -0.58, 1.9);
    group.scale.setScalar(1.56);
    const slabGeometry = new THREE.BoxGeometry(0.86, 0.18, 1.6);
    const ringGeometry = new THREE.TorusGeometry(1.0, 0.055, 10, 112);
    const coreGeometry = new THREE.DodecahedronGeometry(0.54, 0);
    const sparkGeometry = new THREE.TetrahedronGeometry(0.12, 0);
    const pressGeometry = new THREE.CylinderGeometry(0.16, 0.24, 1.25, 8);
    const lamp = new THREE.PointLight(hexToNumber(colorAt(mood, 1)), 2.4 + state.wireGlow * 0.75, 8.5);
    lamp.position.set(0, 0.22, -2.04);
    group.add(lamp);

    for (let i = 0; i < 11; i += 1) {
      const layer = i % 4;
      const x = (i - 5) * 0.42 * state.fieldSpread;
      const y = -0.7 + layer * 0.18;
      const z = -2.28 - layer * 0.38 - pseudo(i * 1753 + 1) * 0.35;
      const slab = new THREE.Mesh(slabGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 3), 0.46 + state.wireGlow * 0.06));
      slab.position.set(x, y, z);
      slab.rotation.set(0.04 * (layer - 1), pseudo(i * 1759 + 2) * 0.22, (i - 5) * 0.03);
      slab.scale.set(0.82 + pseudo(i * 1763 + 3) * 0.52, 1, 0.72 + layer * 0.24);
      slab.userData = { kind: "forgeSlab", index: i, layer, anchor: { x, y, z }, seed: pseudo(i * 1769 + 4) * twoPi };
      group.add(slab);
      threeLayer.objects.push(slab);
    }

    for (let i = 0; i < 6; i += 1) {
      const ring = new THREE.Mesh(ringGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 8), 0.6 + state.wireGlow * 0.16));
      ring.position.set(0, -0.08 + i * 0.03, -2.16 - i * 0.28);
      ring.rotation.set(Math.PI * 0.5 + i * 0.09, i * 0.17, i * 0.34);
      ring.scale.setScalar(0.78 + i * 0.22);
      ring.userData = { kind: "forgeRing", index: i, anchor: { x: 0, y: ring.position.y, z: ring.position.z }, seed: pseudo(i * 1777 + 5) * twoPi };
      group.add(ring);
      threeLayer.objects.push(ring);
    }

    for (let i = 0; i < 3; i += 1) {
      const core = new THREE.Mesh(coreGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 13), 0.76 + state.wireGlow * 0.08));
      core.position.set((i - 1) * 0.32, -0.06 + i * 0.08, -1.96 - i * 0.08);
      core.userData = { kind: "forgeCore", index: i, anchor: { x: core.position.x, y: core.position.y, z: core.position.z }, seed: pseudo(i * 1783 + 6) * twoPi };
      group.add(core);
      threeLayer.objects.push(core);
    }

    for (let i = 0; i < 5; i += 1) {
      const press = new THREE.Mesh(pressGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 17), 0.44 + state.wireGlow * 0.06));
      press.position.set((i - 2) * 0.82 * state.fieldSpread, 0.8 + (i % 2) * 0.12, -2.32 - i * 0.18);
      press.rotation.z = (i - 2) * 0.05;
      press.userData = { kind: "forgePress", index: i, anchor: { x: press.position.x, y: press.position.y, z: press.position.z }, seed: pseudo(i * 1787 + 7) * twoPi };
      group.add(press);
      threeLayer.objects.push(press);
    }

    for (let i = 0; i < 52; i += 1) {
      const spark = new THREE.Mesh(sparkGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 20), 0.6 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.38 + pseudo(i * 1789 + 1) * 2.75) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.95 + pseudo(i * 1793 + 2) * 2.4;
      const z = -1.45 - pseudo(i * 1799 + 3) * 4.8;
      spark.position.set(x, y, z);
      spark.userData = { kind: "forgeSpark", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 1801 + 4) * twoPi };
      group.add(spark);
      threeLayer.objects.push(spark);
    }
  }

  function buildPaperOracle(THREE, group, mood) {
    group.position.set(0, -0.36, 1.78);
    group.scale.setScalar(1.48);
    const sheetGeometry = new THREE.PlaneGeometry(0.78, 1.12, 2, 2);
    const foldGeometry = new THREE.BoxGeometry(0.025, 1.2, 0.025);
    const glyphGeometry = new THREE.TetrahedronGeometry(0.1, 0);
    const spineGeometry = new THREE.TorusGeometry(1.0, 0.018, 8, 84);
    const lamp = new THREE.PointLight(hexToNumber(colorAt(mood, 3)), 1.55 + state.wireGlow * 0.5, 8);
    lamp.position.set(0, 0.52, -2.0);
    group.add(lamp);

    for (let i = 0; i < 32; i += 1) {
      const ring = Math.floor(i / 8);
      const slot = i % 8;
      const angle = (slot / 8) * twoPi + ring * 0.22;
      const radius = (0.72 + ring * 0.42) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.2 + Math.sin(angle * 2) * 0.38 + ring * 0.14;
      const z = -1.72 - ring * 0.5 + Math.sin(angle) * 0.28;
      const sheet = new THREE.Mesh(sheetGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 4), 0.42 + state.wireGlow * 0.06));
      sheet.position.set(x, y, z);
      sheet.rotation.set(Math.sin(angle) * 0.35, -angle + Math.PI * 0.5, Math.cos(angle) * 0.22);
      sheet.userData = { kind: "oracleSheet", index: i, ring, slot, angle, radius, anchor: { x, y, z }, seed: pseudo(i * 1811 + 1) * twoPi };
      group.add(sheet);
      threeLayer.objects.push(sheet);

      const fold = new THREE.Mesh(foldGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 9), 0.54 + state.wireGlow * 0.16));
      fold.position.set(x, y, z + 0.02);
      fold.rotation.copy(sheet.rotation);
      fold.userData = { kind: "oracleFold", index: i, ring, slot, angle, radius, anchor: { x, y, z: z + 0.02 }, seed: pseudo(i * 1817 + 2) * twoPi };
      group.add(fold);
      threeLayer.objects.push(fold);
    }

    for (let i = 0; i < 5; i += 1) {
      const spine = new THREE.Mesh(spineGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 20), 0.46 + state.wireGlow * 0.14));
      spine.position.set(0, -0.08 + i * 0.12, -2.04 - i * 0.32);
      spine.rotation.set(Math.PI * 0.5 + i * 0.16, i * 0.3, i * 0.54);
      spine.scale.setScalar(0.72 + i * 0.26);
      spine.userData = { kind: "oracleSpine", index: i, anchor: { x: 0, y: spine.position.y, z: spine.position.z }, seed: pseudo(i * 1823 + 3) * twoPi };
      group.add(spine);
      threeLayer.objects.push(spine);
    }

    for (let i = 0; i < 40; i += 1) {
      const glyph = new THREE.Mesh(glyphGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 24), 0.64 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.38 + pseudo(i * 1829 + 1) * 2.6) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.8 + pseudo(i * 1831 + 2) * 2.8;
      const z = -1.35 - pseudo(i * 1837 + 3) * 4.6;
      glyph.position.set(x, y, z);
      glyph.userData = { kind: "oracleGlyph", index: i, anchor: { x, y, z }, angle, radius, seed: pseudo(i * 1847 + 4) * twoPi };
      group.add(glyph);
      threeLayer.objects.push(glyph);
    }
  }

  function buildSporeSemaphore(THREE, group, mood) {
    group.position.set(0, -0.72, 1.92);
    group.scale.setScalar(1.5);
    const stemGeometry = new THREE.CylinderGeometry(0.035, 0.065, 1.05, 7);
    const capGeometry = new THREE.SphereGeometry(0.2, 18, 10);
    const dustGeometry = new THREE.IcosahedronGeometry(0.055, 0);
    const podGeometry = new THREE.DodecahedronGeometry(0.14, 0);
    const lamp = new THREE.PointLight(hexToNumber(colorAt(mood, 1)), 1.8 + state.wireGlow * 0.62, 8);
    lamp.position.set(0, 0.84, -2.1);
    group.add(lamp);

    const tendrilPoints = [];
    for (let i = 0; i < 34; i += 1) {
      const ring = Math.floor(i / 9);
      const angle = i * phi * twoPi;
      const radius = (0.32 + ring * 0.42 + pseudo(i * 1861 + 1) * 0.62) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const z = -1.25 - ring * 0.66 - pseudo(i * 1867 + 2) * 1.7;
      const h = 0.56 + pseudo(i * 1871 + 3) * 1.35;
      const y = -0.44 + h * 0.5 + Math.sin(angle * 2) * 0.16;
      const stem = new THREE.Mesh(stemGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.4 + state.wireGlow * 0.05));
      stem.position.set(x, y - h * 0.5, z);
      stem.scale.y = h;
      stem.rotation.set(Math.sin(angle) * 0.18, 0, Math.cos(angle) * 0.14);
      stem.userData = { kind: "sporeStem", index: i, ring, anchor: { x, y: y - h * 0.5, z }, height: h, seed: pseudo(i * 1873 + 4) * twoPi };
      group.add(stem);
      threeLayer.objects.push(stem);

      const cap = new THREE.Mesh(capGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 7), 0.6 + state.wireGlow * 0.08));
      cap.position.set(x, y + h * 0.12, z);
      cap.scale.set(1.2 + pseudo(i * 1877 + 5) * 1.1, 0.42 + pseudo(i * 1879 + 6) * 0.28, 1.05);
      cap.userData = { kind: "sporeCap", index: i, ring, angle, anchor: { x, y: y + h * 0.12, z }, seed: pseudo(i * 1889 + 7) * twoPi };
      group.add(cap);
      threeLayer.objects.push(cap);

      if (i % 2 === 0) {
        const pod = new THREE.Mesh(podGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 12), 0.66 + state.wireGlow * 0.08));
        pod.position.set(x * 0.82, y + 0.18, z - 0.16);
        pod.userData = { kind: "sporePod", index: i, ring, anchor: { x: pod.position.x, y: pod.position.y, z: pod.position.z }, seed: pseudo(i * 1891 + 8) * twoPi };
        group.add(pod);
        threeLayer.objects.push(pod);
      }

      const reach = 0.24 + pseudo(i * 1897 + 9) * 0.44;
      tendrilPoints.push(x, y + h * 0.12, z, x + Math.cos(angle + Math.PI * 0.5) * reach, y + 0.2 + Math.sin(angle * 3) * 0.18, z - 0.34 - reach);
    }

    const tendrilGeometry = new THREE.BufferGeometry();
    tendrilGeometry.setAttribute("position", new THREE.Float32BufferAttribute(tendrilPoints, 3));
    const tendrils = new THREE.LineSegments(tendrilGeometry, new THREE.LineBasicMaterial({
      color: hexToNumber(colorAt(mood, 3)),
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    tendrils.userData = { kind: "sporeTendril", index: 0, seed: 0.41 };
    group.add(tendrils);
    threeLayer.objects.push(tendrils);

    for (let i = 0; i < 58; i += 1) {
      const dust = new THREE.Mesh(dustGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 16), 0.56 + state.wireGlow * 0.06));
      const angle = i * phi * twoPi;
      const radius = (0.45 + pseudo(i * 1901 + 1) * 2.9) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.52 + pseudo(i * 1907 + 2) * 2.45;
      const z = -1.1 - pseudo(i * 1913 + 3) * 4.4;
      dust.position.set(x, y, z);
      dust.userData = { kind: "sporeDust", index: i, angle, radius, anchor: { x, y, z }, seed: pseudo(i * 1919 + 4) * twoPi };
      group.add(dust);
      threeLayer.objects.push(dust);
    }
  }

  function buildCartogramChoir(THREE, group, mood) {
    group.position.set(0, 0.06, 2.12);
    group.scale.setScalar(1.68);
    const islandGeometry = new THREE.CylinderGeometry(0.46, 0.54, 0.1, 7);
    const pinGeometry = new THREE.ConeGeometry(0.1, 0.38, 6);
    const beaconGeometry = new THREE.SphereGeometry(0.13, 16, 9);
    const labelGeometry = new THREE.BoxGeometry(0.32, 0.035, 0.035);
    const anchors = [];
    const lamp = new THREE.PointLight(hexToNumber(colorAt(mood, 4)), 2.25 + state.wireGlow * 0.72, 9);
    lamp.position.set(0.2, 0.86, -1.7);
    group.add(lamp);

    for (let i = 0; i < 18; i += 1) {
      const angle = i * phi * twoPi;
      const ring = Math.floor(i / 6);
      const radius = (0.5 + ring * 0.92 + pseudo(i * 1931 + 1) * 0.55) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = 0.02 + Math.sin(angle * 1.7) * 0.5 + ring * 0.12;
      const z = -1.28 - ring * 0.66 - pseudo(i * 1933 + 2) * 1.55;
      anchors.push({ x, y, z, angle, ring });
      const island = new THREE.Mesh(islandGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.44 + state.wireGlow * 0.07));
      island.position.set(x, y, z);
      island.rotation.set(Math.PI * 0.5 + Math.sin(angle) * 0.18, angle, Math.cos(angle) * 0.16);
      island.scale.set(1 + pseudo(i * 1939 + 3) * 0.8, 0.8, 0.7 + pseudo(i * 1949 + 4) * 0.7);
      island.userData = { kind: "cartoIsland", index: i, ring, angle, anchor: { x, y, z }, seed: pseudo(i * 1951 + 5) * twoPi };
      group.add(island);
      threeLayer.objects.push(island);

      const pin = new THREE.Mesh(pinGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 9), 0.68 + state.wireGlow * 0.08));
      pin.position.set(x, y + 0.24, z);
      pin.rotation.z = angle;
      pin.userData = { kind: "cartoPin", index: i, ring, anchor: { x, y: y + 0.24, z }, seed: pseudo(i * 1957 + 6) * twoPi };
      group.add(pin);
      threeLayer.objects.push(pin);

      const label = new THREE.Mesh(labelGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 14), 0.72 + state.wireGlow * 0.12));
      label.position.set(x + 0.14, y + 0.1, z + 0.04);
      label.rotation.set(0.1, angle, 0.05);
      label.userData = { kind: "cartoLabel", index: i, anchor: { x: label.position.x, y: label.position.y, z: label.position.z }, seed: pseudo(i * 1961 + 7) * twoPi };
      group.add(label);
      threeLayer.objects.push(label);
    }

    const routePoints = [];
    const pairs = [];
    anchors.forEach((anchor, index) => {
      const targets = [(index + 5) % anchors.length, (index + 7) % anchors.length];
      targets.forEach((targetIndex) => {
        if (index < targetIndex || pseudo(index * 1973 + targetIndex) > 0.5) {
          const target = anchors[targetIndex];
          routePoints.push(anchor.x, anchor.y + 0.08, anchor.z, target.x, target.y + 0.08, target.z);
          pairs.push([index, targetIndex]);
        }
      });
    });
    const routeGeometry = new THREE.BufferGeometry();
    routeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(routePoints, 3));
    const routes = new THREE.LineSegments(routeGeometry, new THREE.LineBasicMaterial({
      color: hexToNumber(colorAt(mood, 1)),
      transparent: true,
      opacity: 0.48,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    routes.userData = { kind: "cartoRoute", index: 0, anchors, pairs, seed: 0.62 };
    group.add(routes);
    threeLayer.objects.push(routes);

    for (let i = 0; i < 24; i += 1) {
      const a = anchors[i % anchors.length];
      const b = anchors[(i * 5 + 7) % anchors.length];
      const beacon = new THREE.Mesh(beaconGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 20), 0.72 + state.wireGlow * 0.08));
      beacon.position.set(a.x, a.y + 0.18, a.z);
      beacon.userData = { kind: "cartoBeacon", index: i, from: a, to: b, seed: pseudo(i * 1987 + 8) * twoPi };
      group.add(beacon);
      threeLayer.objects.push(beacon);
    }
  }

  function buildQuartzArchive(THREE, group, mood) {
    group.position.set(0, -0.28, 1.76);
    group.scale.setScalar(1.5);
    const plateGeometry = new THREE.BoxGeometry(1.15, 0.045, 0.58);
    const shardGeometry = new THREE.CylinderGeometry(0.1, 0.2, 0.86, 6);
    const echoGeometry = new THREE.TorusGeometry(0.78, 0.012, 8, 112);
    const moteGeometry = new THREE.TetrahedronGeometry(0.075, 0);
    const lamp = new THREE.PointLight(hexToNumber(colorAt(mood, 0)), 1.9 + state.wireGlow * 0.7, 8.4);
    lamp.position.set(0, 0.74, -1.9);
    group.add(lamp);

    for (let i = 0; i < 26; i += 1) {
      const layer = Math.floor(i / 5);
      const slot = i % 5;
      const x = (slot - 2) * 0.52 + Math.sin(layer * 1.7) * 0.12;
      const y = -0.42 + layer * 0.2 + Math.sin(slot) * 0.04;
      const z = -1.5 - layer * 0.5 - pseudo(i * 1993 + 1) * 0.45;
      const plate = new THREE.Mesh(plateGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 2), 0.38 + state.wireGlow * 0.08));
      plate.position.set(x, y, z);
      plate.rotation.set(0.14 + layer * 0.03, (slot - 2) * 0.12, Math.sin(i) * 0.06);
      plate.scale.set(0.8 + pseudo(i * 1997 + 2) * 0.7, 1, 0.75 + pseudo(i * 1999 + 3) * 0.5);
      plate.userData = { kind: "quartzPlate", index: i, layer, slot, anchor: { x, y, z }, seed: pseudo(i * 2003 + 4) * twoPi };
      group.add(plate);
      threeLayer.objects.push(plate);
    }

    for (let i = 0; i < 18; i += 1) {
      const angle = i * phi * twoPi;
      const radius = (0.42 + pseudo(i * 2011 + 1) * 2.15) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.38 + pseudo(i * 2017 + 2) * 1.76;
      const z = -1.36 - pseudo(i * 2027 + 3) * 4.2;
      const shard = new THREE.Mesh(shardGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 9), 0.66 + state.wireGlow * 0.1));
      shard.position.set(x, y, z);
      shard.rotation.set(Math.sin(angle) * 0.38, angle, Math.cos(angle) * 0.24);
      shard.scale.setScalar(0.78 + pseudo(i * 2029 + 4) * 0.72);
      shard.userData = { kind: "quartzShard", index: i, angle, radius, anchor: { x, y, z }, seed: pseudo(i * 2039 + 5) * twoPi };
      group.add(shard);
      threeLayer.objects.push(shard);
    }

    for (let i = 0; i < 7; i += 1) {
      const echo = new THREE.Mesh(echoGeometry.clone(), makeLineMaterial(THREE, colorAt(mood, i + 17), 0.58 + state.wireGlow * 0.14));
      echo.position.set(0, -0.02 + i * 0.12, -1.62 - i * 0.42);
      echo.rotation.set(Math.PI * 0.5 + i * 0.1, i * 0.18, i * 0.42);
      echo.scale.setScalar(0.7 + i * 0.24);
      echo.userData = { kind: "quartzEcho", index: i, baseScale: 0.7 + i * 0.24, seed: pseudo(i * 2053 + 6) * twoPi };
      group.add(echo);
      threeLayer.objects.push(echo);
    }

    for (let i = 0; i < 46; i += 1) {
      const mote = new THREE.Mesh(moteGeometry.clone(), makeCrystalMaterial(THREE, colorAt(mood, i + 22), 0.54 + state.wireGlow * 0.08));
      const angle = i * phi * twoPi;
      const radius = (0.28 + pseudo(i * 2063 + 1) * 2.8) * state.fieldSpread;
      const x = Math.cos(angle) * radius;
      const y = -0.7 + pseudo(i * 2069 + 2) * 2.5;
      const z = -1.1 - pseudo(i * 2081 + 3) * 4.6;
      mote.position.set(x, y, z);
      mote.userData = { kind: "quartzMote", index: i, angle, radius, anchor: { x, y, z }, seed: pseudo(i * 2083 + 4) * twoPi };
      group.add(mote);
      threeLayer.objects.push(mote);
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
      if (!data.managesColor && object.material?.color && mood.colors[data.index % mood.colors.length]) {
        object.material.color.set(hexToNumber(colorAt(mood, data.index || 0)));
      }
      if (!data.managesColor && object.material?.emissive && mood.colors[data.index % mood.colors.length]) {
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
      } else if (data.kind === "wellRing") {
        object.rotation.z += dt * activeSpeed * state.spin * (0.12 + data.index * 0.018 + bassHit * 0.04);
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.12 + data.seed) * state.perspectiveWarp * 0.28;
        object.scale.setScalar(1 + Math.sin(phase * 0.42 + data.seed) * 0.035 + bassHit * 0.04 + pulse * state.pulse * 0.03);
        if (object.material) object.material.opacity = clamp(0.05 + state.wireGlow * 0.08 + bassHit * 0.05, 0.03, 0.24);
      } else if (data.kind === "wellShard") {
        const angle = data.angle + phase * activeSpeed * (0.22 + data.layer * 0.035 + state.tunnel * 0.04);
        const radius = data.radius * (1 - pulse * 0.035 - bassHit * 0.05);
        object.position.x = Math.cos(angle) * radius;
        object.position.y = Math.sin(angle) * radius * 0.36 + Math.sin(phase * 0.5 + data.seed) * state.morph * 0.24;
        object.position.z = -7 - data.layer * 3.4 + Math.sin(angle * 1.7) * 1.8 - state.depth * 8;
        object.rotation.x += dt * activeSpeed * (1.2 + state.spin);
        object.rotation.y += dt * activeSpeed * (1.5 + data.layer * 0.1);
        object.scale.setScalar((0.55 + data.layer * 0.035) * (1 + pulse * 0.2 + bassHit * 0.16));
      } else if (data.kind === "reefTendril") {
        object.rotation.x = Math.sin(phase * 0.16 + data.seed) * (0.12 + state.morph * 0.12);
        object.rotation.y = Math.cos(phase * 0.11 + data.seed) * (0.16 + state.pointer * 0.08);
        object.scale.setScalar(1 + pulse * 0.04 + melodyHit * 0.04);
      } else if (data.kind === "reefBulb") {
        const bloom = 1 + pulse * state.pulse * 0.18 + melodyHit * 0.12 + pointer.pressure * state.interaction * 0.08;
        object.position.x = data.anchor.x + Math.sin(phase * 0.34 + data.seed) * state.morph * 0.34;
        object.position.y = data.anchor.y + Math.cos(phase * 0.29 + data.seed) * state.breath * 0.42;
        object.position.z = data.anchor.z + Math.sin(phase * 0.2 + data.seed) * state.depth * 1.4;
        object.rotation.x += dt * activeSpeed * 0.6;
        object.rotation.y += dt * activeSpeed * 0.8;
        object.scale.setScalar(bloom);
      } else if (data.kind === "loomThread") {
        object.rotation.z = Math.sin(phase * 0.09 + data.seed) * state.morph * 0.18 * data.direction;
        object.rotation.y = Math.cos(phase * 0.07 + data.seed) * state.perspectiveWarp * 0.22;
        object.scale.setScalar(1 + chordHit * 0.08 + pulse * 0.03);
        if (object.material) object.material.opacity = clamp(0.05 + state.wireGlow * 0.08 + chordHit * 0.07, 0.03, 0.22);
      } else if (data.kind === "loomKnot") {
        const angle = data.angle + phase * activeSpeed * 0.08;
        object.position.x = Math.cos(angle) * (2.6 + (data.index % 5) * 1.0) * state.fieldSpread;
        object.position.y = Math.sin(angle * 1.4 + data.seed) * (1.8 + state.morph * 0.8);
        object.position.z = -8 - data.index * 2.1 + Math.sin(phase * 0.2 + data.seed) * 1.4;
        object.rotation.x += dt * activeSpeed * (0.5 + state.spin * 0.3);
        object.rotation.y += dt * activeSpeed * (0.8 + state.spin * 0.4);
        object.scale.setScalar(0.8 + pulse * 0.14 + chordHit * 0.1);
      } else if (data.kind === "signalTower") {
        const hit = percussionHit + beatHit * 0.6;
        object.position.y = data.baseY + Math.sin(phase * 0.42 + data.seed) * 0.22 + hit * 0.16;
        object.scale.y = 0.8 + (data.index % 6) * 0.34 + hit * 0.72 + state.pulse * pulse * 0.18;
        object.rotation.y = (data.lane - 2) * 0.18 + Math.sin(phase * 0.18 + data.seed) * state.perspectiveWarp * 0.18;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.32 + state.wireGlow * 0.44 + hit * 0.38;
      } else if (data.kind === "signalScan") {
        object.position.z += dt * activeSpeed * (2.2 + state.tunnel * 8.5);
        if (object.position.z > 8) object.position.z -= 62;
        object.rotation.z += dt * activeSpeed * (0.28 + state.spin * 0.22);
        object.scale.setScalar(1 + data.index * 0.36 + pulse * 0.16 + percussionHit * 0.12);
        if (object.material) object.material.opacity = clamp(0.04 + state.wireGlow * 0.06 + percussionHit * 0.08, 0.02, 0.22);
      } else if (data.kind === "rainDrop") {
        object.position.y -= dt * activeSpeed * data.speed * (0.45 + state.tunnel * 0.36);
        object.position.z += dt * activeSpeed * (1.6 + state.depth * 2.8);
        if (object.position.y < -5.8 || object.position.z > 8) {
          object.position.y = 7.2 + pseudo(data.index * 71 + frame) * 5.8;
          object.position.z = -11 - pseudo(data.index * 73 + frame) * (30 + state.depth * 24);
        }
        object.rotation.x += dt * activeSpeed * (0.5 + state.spin * 0.5);
        object.rotation.y += dt * activeSpeed * (0.7 + data.index * 0.01);
        object.scale.setScalar((0.72 + pseudo(data.index * 37 + 8) * 1.45) * (1 + melodyHit * 0.12 + pulse * 0.08));
        if (object.material?.emissive) object.material.emissiveIntensity = 0.38 + state.wireGlow * 0.6 + melodyHit * 0.34;
      } else if (data.kind === "rainPool") {
        object.rotation.z += dt * activeSpeed * (0.08 + state.spin * 0.08);
        object.scale.setScalar(0.92 + (data.index % 4) * 0.3 + pulse * 0.24 + melodyHit * 0.12);
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.08 + melodyHit * 0.08, 0.06, 0.34);
      } else if (data.kind === "rainVeil") {
        object.rotation.z = Math.sin(phase * 0.06 + data.seed) * 0.08;
        object.position.y = Math.sin(phase * 0.22 + data.seed) * 0.8;
        if (object.material) object.material.opacity = clamp(0.1 + state.wireGlow * 0.08 + melodyHit * 0.08 + pulse * 0.04, 0.05, 0.26);
      } else if (data.kind === "clockGear") {
        object.rotation.z += dt * activeSpeed * data.direction * (0.32 + state.spin * 0.35 + percussionHit * 0.2);
        object.rotation.x = Math.sin(phase * 0.1 + data.seed) * state.perspectiveWarp * 0.16;
        object.scale.setScalar(1 + beatHit * 0.04 + percussionHit * 0.08);
      } else if (data.kind === "clockHand") {
        object.rotation.z += dt * activeSpeed * data.direction * (0.8 + state.spin * 0.5 + beatHit * 0.28);
        object.rotation.y = Math.sin(phase * 0.14 + data.seed) * state.perspectiveWarp * 0.28;
        object.scale.y = 1 + pulse * 0.1 + percussionHit * 0.18;
      } else if (data.kind === "voidPetal") {
        object.rotation.z = Math.sin(phase * 0.08 + data.seed) * state.morph * 0.16;
        object.rotation.y = Math.cos(phase * 0.06 + data.seed) * state.perspectiveWarp * 0.22;
        object.scale.setScalar(0.86 + state.breath * 0.12 + pulse * state.pulse * 0.22 + chordHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.1 + chordHit * 0.08, 0.04, 0.32);
      } else if (data.kind === "voidCore") {
        object.rotation.x += dt * activeSpeed * (0.22 + state.morph * 0.08);
        object.rotation.y += dt * activeSpeed * (0.3 + state.spin * 0.16);
        object.scale.setScalar(0.95 + state.breath * 0.12 + chordHit * 0.22 + melodyHit * 0.14);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.58 + state.wireGlow * 0.6 + chordHit * 0.42;
      } else if (data.kind === "voidHalo") {
        object.rotation.x += dt * activeSpeed * (0.07 + data.index * 0.02);
        object.rotation.y += dt * activeSpeed * (0.11 + state.morph * 0.04);
        object.rotation.z += dt * activeSpeed * (0.13 + state.spin * 0.08);
        object.scale.x = 1 + data.index * 0.18 + pulse * 0.08 + chordHit * 0.08;
        object.scale.y = 0.68 + data.index * 0.12 + pulse * 0.05;
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.07 + chordHit * 0.08, 0.04, 0.28);
      } else if (data.kind === "voidSpore") {
        const angle = data.angle + phase * activeSpeed * (0.08 + state.morph * 0.04);
        const radius = data.radius * (1 + Math.sin(phase * 0.2 + data.seed) * 0.08 + pulse * 0.04);
        object.position.x = Math.cos(angle) * radius;
        object.position.y = Math.sin(angle * 1.2 + data.seed) * (2.6 + state.breath * 1.2);
        object.position.z = -6 - (data.index % 9) * 3.8 + Math.sin(angle * 1.7) * 2.2 - state.depth * 7;
        object.rotation.x += dt * activeSpeed * 0.8;
        object.rotation.y += dt * activeSpeed * 0.9;
        object.scale.setScalar(0.7 + pulse * 0.18 + melodyHit * 0.1);
      } else if (data.kind === "inkCore") {
        object.rotation.x += dt * activeSpeed * (0.45 + state.spin * 0.24);
        object.rotation.y += dt * activeSpeed * (0.62 + state.morph * 0.18);
        object.scale.setScalar(1 + bassHit * 0.26 + pulse * 0.08 + pointer.pressure * state.interaction * 0.08);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.64 + state.wireGlow * 0.72 + bassHit * 0.5;
      } else if (data.kind === "inkSpike") {
        const angle = data.angle + Math.sin(phase * 0.22 + data.seed) * state.morph * 0.16 + pointer.pressure * state.interaction * 0.08;
        const radius = data.radius * (1 + bassHit * 0.14 + Math.sin(phase * 0.35 + data.seed) * 0.04);
        object.position.x = Math.cos(angle) * radius;
        object.position.y = Math.sin(angle) * radius * 0.68;
        object.position.z = data.z + Math.sin(phase * 0.3 + data.seed) * 0.9 + bassHit * 0.5;
        object.rotation.z = angle - Math.PI * 0.5;
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.18 + data.seed) * 0.18;
        object.scale.setScalar(data.size * (1 + bassHit * 0.35 + percussionHit * 0.18));
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.1 + bassHit * 0.14, 0.08, 0.52);
      } else if (data.kind === "inkThread") {
        object.rotation.z = Math.sin(phase * 0.07 + data.seed) * state.perspectiveWarp * 0.22;
        object.rotation.y = Math.cos(phase * 0.09 + data.seed) * state.morph * 0.2;
        object.scale.setScalar(0.96 + bassHit * 0.12 + pulse * 0.06);
        if (object.material) object.material.opacity = clamp(0.07 + state.wireGlow * 0.07 + bassHit * 0.1, 0.04, 0.28);
      } else if (data.kind === "inkDrop") {
        const angle = data.angle + phase * activeSpeed * (0.16 + state.spin * 0.05);
        const radius = data.radius * (1 + Math.sin(phase * 0.28 + data.seed) * 0.08 + bassHit * 0.08);
        object.position.x = Math.cos(angle) * radius + (pointer.x - 0.5) * state.pointer * 0.8;
        object.position.y = Math.sin(angle * 1.4 + data.seed) * 2.7 + (0.5 - pointer.y) * state.pointer * 0.6;
        object.position.z = -4.5 - (data.index % 7) * 3.2 + Math.sin(angle) * 1.8 - state.depth * 5;
        object.rotation.x += dt * activeSpeed * 0.8;
        object.rotation.y += dt * activeSpeed * 1.1;
        object.scale.setScalar(0.82 + bassHit * 0.2 + melodyHit * 0.12);
      } else if (data.kind === "solarString") {
        object.rotation.y = Math.sin(phase * 0.09 + data.seed) * state.morph * 0.08 + arpHit * 0.02;
        object.rotation.z = Math.sin(phase * 0.12 + data.seed) * 0.035;
        object.scale.x = 1 + arpHit * 0.08 + melodyHit * 0.05;
        object.scale.y = 1 + melodyHit * 0.08 + pulse * 0.03;
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.08 + arpHit * 0.12, 0.08, 0.42);
      } else if (data.kind === "solarRing") {
        object.rotation.z += dt * activeSpeed * (0.08 + data.index * 0.018 + state.spin * 0.04);
        object.rotation.x = Math.PI * 0.5 + data.index * 0.14 + Math.sin(phase * 0.06 + data.seed) * 0.18;
        object.scale.x = 1 + data.index * 0.16 + pulse * 0.1 + melodyHit * 0.08;
        object.scale.y = 0.46 + data.index * 0.08 + pulse * 0.05;
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.08 + melodyHit * 0.08, 0.04, 0.32);
      } else if (data.kind === "solarNote") {
        const travel = (phase * (0.12 + state.arp * 0.16) + data.index * 0.071) % 1;
        object.position.y = -4.0 + travel * 8.4;
        object.position.x = data.x + Math.sin(phase * 0.18 + data.seed) * 0.08;
        object.position.z = -8.2 - (data.index % 6) * 1.1 + Math.sin(travel * Math.PI) * -3.8;
        object.rotation.x += dt * activeSpeed * 1.4;
        object.rotation.y += dt * activeSpeed * 1.0;
        object.scale.setScalar(0.76 + arpHit * 0.24 + melodyHit * 0.16);
      } else if (data.kind === "orchardBranch") {
        object.rotation.z = Math.sin(phase * 0.05 + data.seed) * state.breath * 0.035;
        object.rotation.y = Math.cos(phase * 0.06 + data.seed) * state.perspectiveWarp * 0.04;
        object.scale.setScalar(1 + chordHit * 0.05 + melodyHit * 0.04);
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.08 + chordHit * 0.1, 0.06, 0.42);
      } else if (data.kind === "orchardTrunk") {
        object.rotation.z = Math.sin(phase * 0.04 + data.seed) * state.breath * 0.025;
        object.scale.setScalar(1 + chordHit * 0.05 + melodyHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.11 + melodyHit * 0.12, 0.1, 0.54);
      } else if (data.kind === "orchardCanopy") {
        object.rotation.z += dt * activeSpeed * (0.04 + data.index * 0.012);
        object.rotation.y += dt * activeSpeed * (0.025 + state.morph * 0.012);
        object.scale.x = 1 + data.index * 0.18 + pulse * 0.07 + chordHit * 0.06;
        object.scale.y = 0.5 + data.index * 0.08 + pulse * 0.04;
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.07 + chordHit * 0.08, 0.04, 0.3);
      } else if (data.kind === "orchardFruit") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.12 + data.seed) * state.morph * 0.18;
        object.position.y = data.anchor.y + Math.cos(phase * 0.15 + data.seed) * state.breath * 0.18;
        object.position.z = data.anchor.z + Math.sin(phase * 0.09 + data.seed) * state.depth * 0.55;
        object.rotation.x += dt * activeSpeed * 0.45;
        object.rotation.y += dt * activeSpeed * 0.65;
        object.scale.setScalar(0.92 + pulse * 0.12 + melodyHit * 0.22 + chordHit * 0.1);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.2 + state.wireGlow * 0.36 + melodyHit * 0.36;
      } else if (data.kind === "orchardPulse") {
        object.rotation.z += dt * activeSpeed * (0.08 + state.spin * 0.05);
        object.scale.setScalar(0.75 + (data.index % 5) * 0.18 + pulse * 0.3 + melodyHit * 0.18);
        if (object.material) object.material.opacity = clamp(0.04 + state.wireGlow * 0.05 + melodyHit * 0.08, 0.02, 0.24);
      } else if (data.kind === "choirMask") {
        const angle = data.angle + Math.sin(phase * 0.045 + data.seed) * state.breath * 0.18;
        const ring = data.ring * (1 + chordHit * 0.08 + Math.sin(phase * 0.11 + data.seed) * 0.025);
        object.position.x = Math.cos(angle) * ring * state.fieldSpread;
        object.position.y = Math.sin(angle * 1.4 + data.seed) * data.ySpread + chordHit * 0.2;
        object.position.z = data.baseZ + Math.sin(phase * 0.08 + data.seed) * 0.54;
        object.rotation.z = angle + Math.PI * 0.5 + Math.sin(phase * 0.07 + data.seed) * 0.12;
        object.rotation.y = -angle * 0.22 + Math.cos(phase * 0.06 + data.seed) * state.perspectiveWarp * 0.24;
        object.scale.set(data.frontScale + chordHit * 0.12, data.frontScale + melodyHit * 0.14 + state.breath * 0.04, 1);
        object.children.forEach((child, childIndex) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp(0.18 + state.wireGlow * 0.09 + chordHit * 0.1 + (childIndex === 1 ? melodyHit * 0.2 : 0), 0.08, 0.66);
        });
      } else if (data.kind === "choirHalo") {
        object.rotation.z += dt * activeSpeed * (0.035 + data.index * 0.01);
        object.rotation.x += dt * activeSpeed * 0.018;
        object.scale.x = 1 + data.index * 0.12 + chordHit * 0.12 + pulse * 0.04;
        object.scale.y = 0.72 + data.index * 0.09 + melodyHit * 0.05;
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.08 + chordHit * 0.12, 0.06, 0.42);
      } else if (data.kind === "choirShard") {
        const angle = data.angle + phase * activeSpeed * 0.035;
        const radius = data.radius * (1 + Math.sin(phase * 0.09 + data.seed) * 0.06);
        object.position.x = Math.cos(angle) * radius;
        object.position.y = Math.sin(angle * 1.2 + data.seed) * 3.2;
        object.position.z = -3.2 - (data.index % 8) * 1.55 - state.depth * 2.2 + Math.sin(angle) * 1.0;
        object.rotation.x += dt * activeSpeed * 0.12;
        object.rotation.y += dt * activeSpeed * 0.18;
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.05 + chordHit * 0.07, 0.04, 0.28);
      } else if (data.kind === "tidalWheel") {
        object.rotation.z += dt * activeSpeed * (0.26 + data.index * 0.055 + bassHit * 0.15);
        object.rotation.y = Math.sin(phase * 0.08 + data.seed) * state.perspectiveWarp * 0.18;
        object.scale.setScalar(0.72 + data.index * 0.11 + bassHit * 0.08 + pulse * 0.05);
        object.children.forEach((child) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp(0.14 + state.wireGlow * 0.08 + bassHit * 0.1, 0.06, 0.42);
        });
      } else if (data.kind === "tidalWave") {
        object.rotation.z = Math.sin(phase * 0.05 + data.seed) * state.breath * 0.08;
        object.position.y = Math.sin(phase * (0.18 + data.index * 0.008) + data.seed) * (0.28 + state.morph * 0.22) + pulse * 0.12;
        object.position.z = Math.sin(phase * 0.07 + data.seed) * state.depth * 0.28;
        object.scale.x = 1 + bassHit * 0.08 + pointer.pressure * state.interaction * 0.04;
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.08 + bassHit * 0.1 + pulse * 0.05, 0.08, 0.52);
      } else if (data.kind === "tidalShell") {
        const angle = data.angle + phase * activeSpeed * (0.05 + state.spin * 0.025);
        const radius = data.radius * (1 + Math.sin(phase * 0.12 + data.seed) * 0.06 + bassHit * 0.05);
        object.position.x = Math.cos(angle) * radius;
        object.position.y = -2.8 + Math.sin(angle * 1.5 + data.seed) * 2.7 + pulse * 0.16;
        object.position.z = -3.8 - (data.index % 6) * 2.15 - state.depth * 2.6 + Math.sin(angle) * 1.2;
        object.rotation.x += dt * activeSpeed * 0.45;
        object.rotation.y += dt * activeSpeed * 0.35;
        object.scale.setScalar(0.9 + (data.index % 5) * 0.1 + pulse * 0.13 + bassHit * 0.15);
      } else if (data.kind === "tidalBuoy") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.18 + data.seed) * 0.35;
        object.position.y = data.anchor.y + Math.sin(phase * 0.44 + data.seed) * (0.42 + state.breath * 0.35) + bassHit * 0.18;
        object.position.z = data.anchor.z + Math.cos(phase * 0.14 + data.seed) * 0.8;
        object.rotation.x += dt * activeSpeed * 0.7;
        object.rotation.y += dt * activeSpeed * 0.5;
        object.scale.setScalar(0.96 + pulse * 0.18 + bassHit * 0.2);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.18 + state.wireGlow * 0.34 + bassHit * 0.32;
      } else if (data.kind === "cometBody") {
        object.position.y += dt * activeSpeed * data.speed * (0.42 + state.tunnel * 0.22);
        object.position.x = data.x + Math.sin(phase * 0.24 + data.seed) * state.morph * 0.72 + pointer.pressure * state.interaction * 0.28;
        object.position.z += dt * activeSpeed * (0.9 + state.depth * 1.4);
        if (object.position.y > 5.8 || object.position.z > 8) {
          object.position.y = -5.8 - pseudo(data.index * 181 + frame) * 3.6;
          object.position.z = -12 - pseudo(data.index * 191 + frame) * (20 + state.depth * 16);
        }
        object.rotation.z = Math.sin(phase * 0.3 + data.seed) * 0.18;
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.13 + data.seed) * 0.34;
        object.scale.setScalar(0.9 + (data.index % 5) * 0.1 + arpHit * 0.2 + percussionHit * 0.16);
        object.children.forEach((child, childIndex) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp((childIndex === 0 ? 0.44 : 0.18) + state.wireGlow * 0.09 + arpHit * 0.14, 0.08, 0.66);
        });
      } else if (data.kind === "cometRune") {
        const angle = data.angle + phase * activeSpeed * (0.1 + state.spin * 0.035);
        const radius = data.radius * (1 + Math.sin(phase * 0.17 + data.seed) * 0.08 + arpHit * 0.04);
        object.position.x = Math.cos(angle) * radius;
        object.position.y = Math.sin(angle * 1.25 + data.seed) * 3.1 + percussionHit * 0.24;
        object.position.z = -3.6 - (data.index % 8) * 1.85 - state.depth * 3.2 + Math.sin(angle) * 1.2;
        object.rotation.z += dt * activeSpeed * (0.24 + state.spin * 0.16);
        object.rotation.y += dt * activeSpeed * 0.1;
        object.scale.setScalar(1.05 + (data.index % 4) * 0.22 + arpHit * 0.18);
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.09 + arpHit * 0.12 + percussionHit * 0.08, 0.08, 0.54);
      } else if (data.kind === "origamiBird") {
        const angle = data.angle + phase * activeSpeed * (0.18 + state.morph * 0.08) + percussionHit * 0.06;
        const fold = Math.sin(phase * (1.8 + state.speed * 0.35) + data.seed) * (0.28 + state.morph * 0.18);
        object.position.x = Math.cos(angle) * data.radius + (pointer.x - 0.5) * state.pointer * 0.9;
        object.position.y = data.anchor.y + Math.sin(phase * 0.7 + data.seed) * 0.65 + melodyHit * 0.2;
        object.position.z = data.anchor.z + Math.sin(angle * 1.4) * 1.1 - state.depth * 2.2;
        object.rotation.x = fold + Math.sin(phase * 0.33 + data.seed) * 0.18;
        object.rotation.y = angle + fold * 0.7;
        object.rotation.z += dt * activeSpeed * (0.28 + state.spin * 0.2 + arpHit * 0.15);
        object.scale.setScalar(data.frontScale + (data.index % 5) * 0.1 + pulse * 0.1 + percussionHit * 0.2);
        object.children.forEach((child, childIndex) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp((childIndex === 2 ? 0.2 : 0.42) + state.wireGlow * 0.09 + melodyHit * 0.12, 0.07, 0.68);
        });
      } else if (data.kind === "origamiSheet") {
        const angle = data.angle - phase * activeSpeed * (0.08 + state.spin * 0.05);
        object.position.x = Math.cos(angle) * data.radius;
        object.position.y = Math.sin(angle * 1.7 + data.seed) * 3.2 + percussionHit * 0.22;
        object.position.z = -2.8 - (data.index % 8) * 1.35 - state.depth * 2.2 + Math.sin(angle) * 1.1;
        object.rotation.x += dt * activeSpeed * 0.34;
        object.rotation.y = angle + Math.sin(phase * 0.22 + data.seed) * state.morph;
        if (object.material) object.material.opacity = clamp(0.1 + state.wireGlow * 0.07 + arpHit * 0.07 + percussionHit * 0.09, 0.04, 0.38);
      } else if (data.kind === "jellyBody") {
        const swim = Math.sin(phase * (0.36 + state.breath * 0.12) + data.seed);
        object.position.x = data.anchor.x + Math.sin(phase * 0.18 + data.seed) * state.morph * 0.55 + (pointer.x - 0.5) * state.pointer * 0.4;
        object.position.y = data.anchor.y + swim * (0.42 + state.breath * 0.45) + chordHit * 0.16;
        object.position.z = data.anchor.z + Math.cos(phase * 0.16 + data.seed) * state.depth * 0.8;
        object.rotation.z = Math.sin(phase * 0.13 + data.seed) * 0.18;
        object.rotation.y = data.angle * 0.18 + Math.sin(phase * 0.1 + data.seed) * state.perspectiveWarp * 0.2;
        object.scale.setScalar(data.frontScale + (data.index % 4) * 0.1 + pulse * 0.18 + chordHit * 0.1);
        object.children.forEach((child, childIndex) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp((childIndex < 2 ? 0.24 : 0.12) + state.wireGlow * 0.08 + chordHit * 0.1 + melodyHit * 0.06, 0.05, 0.5);
        });
      } else if (data.kind === "jellyBubble") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.22 + data.seed) * 0.32;
        object.position.y = data.anchor.y + ((phase * activeSpeed * 0.32 + data.seed) % 7.6) - 3.8 + melodyHit * 0.18;
        object.position.z = data.anchor.z + Math.cos(phase * 0.16 + data.seed) * 0.72;
        object.scale.setScalar(0.5 + (data.index % 5) * 0.1 + pulse * 0.08);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.14 + state.wireGlow * 0.28 + melodyHit * 0.3;
      } else if (data.kind === "obsidianSpire") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.07 + data.seed) * state.morph * 0.18;
        object.position.y = data.anchor.y + bassHit * 0.22 + Math.sin(phase * 0.11 + data.seed) * state.breath * 0.12;
        object.position.z = data.anchor.z + Math.cos(phase * 0.09 + data.seed) * state.depth * 0.55;
        object.rotation.y += dt * activeSpeed * (0.035 + state.spin * 0.025);
        object.scale.y = 0.82 + (data.index % 5) * 0.05 + bassHit * 0.18 + pulse * 0.04;
        object.children.forEach((child, childIndex) => {
          if (childIndex > 0) child.rotation.z += dt * activeSpeed * (0.18 + childIndex * 0.07 + bassHit * 0.18);
          if (child.material?.opacity !== undefined) child.material.opacity = clamp(0.1 + state.wireGlow * 0.06 + bassHit * 0.1, 0.04, 0.44);
        });
      } else if (data.kind === "obsidianBeam") {
        object.position.y = 0.8 + Math.sin(phase * 0.12 + data.seed) * 0.8;
        object.position.z = data.anchor.z + Math.sin(phase * 0.08 + data.seed) * 0.9;
        object.scale.y = 0.72 + state.depth * 0.34 + bassHit * 0.38 + pulse * 0.12;
        object.rotation.y += dt * activeSpeed * 0.08;
        if (object.material) object.material.opacity = clamp(0.05 + state.wireGlow * 0.06 + bassHit * 0.14 + chordHit * 0.08, 0.03, 0.36);
      } else if (data.kind === "tapeReel") {
        object.rotation.z += dt * activeSpeed * (0.38 + data.index * 0.04 + percussionHit * 0.24);
        object.rotation.y = Math.sin(phase * 0.19 + data.seed) * state.perspectiveWarp * 0.24;
        object.position.x = data.anchor.x + Math.sin(phase * 0.21 + data.seed) * state.morph * 0.28;
        object.position.y = data.anchor.y + Math.cos(phase * 0.16 + data.seed) * state.breath * 0.34;
        object.position.z = data.anchor.z + Math.sin(phase * 0.13 + data.seed) * state.depth * 0.8;
        object.scale.setScalar(0.72 + (data.index % 3) * 0.13 + pulse * 0.1 + chordHit * 0.06);
        object.children.forEach((child) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp(0.13 + state.wireGlow * 0.07 + percussionHit * 0.09, 0.05, 0.4);
        });
      } else if (data.kind === "tapeRibbon") {
        object.rotation.z = Math.sin(phase * 0.08 + data.seed) * state.morph * 0.18;
        object.position.y = Math.sin(phase * (0.23 + data.index * 0.01) + data.seed) * 0.34 + melodyHit * 0.12;
        object.position.z = Math.cos(phase * 0.09 + data.seed) * state.depth * 0.5;
        object.scale.x = 1 + chordHit * 0.08 + pointer.pressure * state.interaction * 0.06;
        if (object.material) object.material.opacity = clamp(0.1 + state.wireGlow * 0.07 + melodyHit * 0.08 + percussionHit * 0.06, 0.04, 0.42);
      } else if (data.kind === "tapeSlice") {
        const angle = data.angle + phase * activeSpeed * (0.055 + state.spin * 0.035);
        object.position.x = Math.cos(angle) * data.radius + Math.sin(phase * 0.9 + data.seed) * percussionHit * 0.22;
        object.position.y = Math.sin(angle * 1.1 + data.seed) * 3.1 + chordHit * 0.18;
        object.position.z = -2.9 - (data.index % 8) * 1.45 - state.depth * 2.5 + Math.sin(angle) * 1.2;
        object.rotation.z += dt * activeSpeed * (0.2 + state.spin * 0.12);
        object.rotation.y = angle + Math.sin(phase * 0.32 + data.seed) * state.morph * 0.35;
        object.scale.setScalar(0.88 + (data.index % 4) * 0.16 + melodyHit * 0.12);
        if (object.material) object.material.opacity = clamp(0.1 + state.wireGlow * 0.06 + melodyHit * 0.1 + percussionHit * 0.09, 0.04, 0.38);
      } else if (data.kind === "mothLantern") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.2 + data.seed) * state.morph * 0.18;
        object.position.y = data.anchor.y + Math.cos(phase * 0.28 + data.seed) * state.breath * 0.34 + chordHit * 0.14;
        object.position.z = data.anchor.z + Math.sin(phase * 0.12 + data.seed) * state.depth * 0.54;
        object.rotation.z += dt * activeSpeed * (0.05 + state.spin * 0.04);
        object.scale.setScalar(1.02 + (data.index % 4) * 0.15 + pulse * 0.18 + melodyHit * 0.18);
        object.children.forEach((child, childIndex) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp((childIndex === 0 ? 0.5 : 0.24) + state.wireGlow * 0.1 + melodyHit * 0.14, 0.08, 0.72);
          if (child.material?.emissive) child.material.emissiveIntensity = 0.58 + state.wireGlow * 0.58 + melodyHit * 0.58;
        });
      } else if (data.kind === "mothBody") {
        const orbit = data.angle + phase * activeSpeed * (0.6 + state.spin * 0.28 + (data.index % 5) * 0.04);
        const flutter = Math.sin(phase * (7.0 + state.speed * 2.0) + data.seed);
        object.position.x = data.anchor.x + Math.cos(orbit) * data.radius + (pointer.x - 0.5) * state.pointer * 0.25;
        object.position.y = data.anchor.y + Math.sin(orbit * 1.3 + data.seed) * data.radius * 0.62 + flutter * 0.16 + arpHit * 0.18;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.95;
        object.rotation.y = orbit + Math.PI * 0.5;
        object.rotation.x = flutter * 0.42;
        object.rotation.z += dt * activeSpeed * (1.1 + arpHit * 0.6);
        object.scale.setScalar(0.38 + (data.index % 4) * 0.075 + arpHit * 0.18 + pulse * 0.07);
        object.children.forEach((child, childIndex) => {
          child.rotation.z = (childIndex === 0 ? -1 : 1) * (0.42 + flutter * 0.36);
          if (child.material?.opacity !== undefined) child.material.opacity = clamp(0.2 + state.wireGlow * 0.08 + arpHit * 0.14, 0.06, 0.54);
        });
      } else if (data.kind === "circuitBoard") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.13 + data.seed) * state.morph * 0.12;
        object.position.y = data.anchor.y + percussionHit * 0.12;
        object.position.z = data.anchor.z + Math.cos(phase * 0.1 + data.seed) * state.depth * 0.45;
        object.rotation.y = Math.sin(phase * 0.08 + data.seed) * state.perspectiveWarp * 0.18 + (data.index % 4 - 1.5) * 0.16;
        object.rotation.z = Math.sin(phase * 0.16 + data.seed) * 0.04;
        object.scale.setScalar(0.94 + (data.index % 3) * 0.14 + beatHit * 0.08 + percussionHit * 0.1);
        object.children.forEach((child, childIndex) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp((childIndex === 1 ? 0.4 : 0.18) + state.wireGlow * 0.09 + percussionHit * 0.14, 0.06, 0.76);
          if (child.material?.emissive) child.material.emissiveIntensity = 0.22 + state.wireGlow * 0.44 + beatHit * 0.38;
        });
      } else if (data.kind === "circuitPulse") {
        const travel = (phase * activeSpeed * (0.32 + state.rhythm * 0.25) + data.seed) % 1;
        object.position.x = data.anchor.x + Math.sin(travel * twoPi + data.seed) * 0.2;
        object.position.y = -2.35 + travel * 4.7 + percussionHit * 0.18;
        object.position.z = data.anchor.z + Math.sin(phase * 0.14 + data.seed) * 0.72;
        object.scale.setScalar(0.72 + beatHit * 0.3 + percussionHit * 0.26);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.44 + state.wireGlow * 0.58 + percussionHit * 0.72;
      } else if (data.kind === "icePipe") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.05 + data.seed) * state.morph * 0.08;
        object.position.y = data.anchor.y + chordHit * 0.12;
        object.position.z = data.anchor.z + Math.cos(phase * 0.08 + data.seed) * state.depth * 0.42;
        object.rotation.y = (data.index % 6 - 2.5) * 0.07 + Math.sin(phase * 0.06 + data.seed) * state.perspectiveWarp * 0.12;
        object.scale.y = 0.94 + data.heightScale * 0.08 + chordHit * 0.12 + pulse * 0.04;
        object.children.forEach((child, childIndex) => {
          if (childIndex > 1) child.rotation.z += dt * activeSpeed * (0.05 + childIndex * 0.02 + chordHit * 0.08);
          if (child.material?.opacity !== undefined) child.material.opacity = clamp(0.14 + state.wireGlow * 0.07 + chordHit * 0.1 + melodyHit * 0.04, 0.06, 0.5);
          if (child.material?.emissive) child.material.emissiveIntensity = 0.18 + state.wireGlow * 0.34 + chordHit * 0.34;
        });
      } else if (data.kind === "iceShard") {
        const angle = data.angle + phase * activeSpeed * (0.035 + state.spin * 0.02);
        object.position.x = Math.cos(angle) * data.radius;
        object.position.y = -0.6 + Math.sin(angle * 1.3 + data.seed) * 2.6 + melodyHit * 0.12;
        object.position.z = -2.9 - (data.index % 9) * 1.25 - state.depth * 2.4 + Math.sin(angle) * 0.9;
        object.rotation.x += dt * activeSpeed * 0.08;
        object.rotation.y += dt * activeSpeed * 0.12;
        object.scale.setScalar(0.52 + (data.index % 4) * 0.13 + chordHit * 0.08);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.16 + state.wireGlow * 0.34 + melodyHit * 0.22;
      } else if (data.kind === "myceliumFungus") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.16 + data.seed) * state.morph * 0.16;
        object.position.y = data.anchor.y + Math.sin(phase * 0.22 + data.seed) * state.breath * 0.18 + chordHit * 0.12;
        object.position.z = data.anchor.z + Math.cos(phase * 0.11 + data.seed) * state.depth * 0.44;
        object.rotation.y = data.seed * 0.08 + Math.sin(phase * 0.08 + data.seed) * state.perspectiveWarp * 0.18;
        object.scale.setScalar(0.92 + data.height * 0.08 + melodyHit * 0.12 + pulse * 0.08);
        object.children.forEach((child, childIndex) => {
          if (childIndex === 2) child.rotation.z += dt * activeSpeed * (0.14 + arpHit * 0.2);
          if (child.material?.opacity !== undefined) child.material.opacity = clamp((childIndex === 1 ? 0.34 : 0.18) + state.wireGlow * 0.08 + melodyHit * 0.12, 0.06, 0.62);
          if (child.material?.emissive) child.material.emissiveIntensity = 0.26 + state.wireGlow * 0.42 + melodyHit * 0.4;
        });
      } else if (data.kind === "myceliumRoot") {
        object.rotation.y = Math.sin(phase * 0.05) * state.perspectiveWarp * 0.08;
        if (object.material) object.material.opacity = clamp(0.09 + state.connectivity * 0.08 + chordHit * 0.12 + pulse * 0.04, 0.04, 0.34);
      } else if (data.kind === "myceliumSpore") {
        const rise = (phase * activeSpeed * (0.08 + state.shimmer * 0.08) + data.seed) % 1;
        object.position.x = data.anchor.x + Math.sin(phase * 0.42 + data.seed) * state.morph * 0.32;
        object.position.y = -0.2 + rise * 4.8 + arpHit * 0.16;
        object.position.z = data.anchor.z + Math.cos(phase * 0.2 + data.seed) * 0.62;
        object.scale.setScalar(0.58 + (data.index % 5) * 0.08 + arpHit * 0.18);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.24 + state.wireGlow * 0.44 + arpHit * 0.44;
      } else if (data.kind === "thunderCloud") {
        const strike = Math.max(percussionHit, beatHit * 0.8);
        object.position.x = data.anchor.x + Math.sin(phase * 0.24 + data.seed) * state.morph * 0.24;
        object.position.y = data.anchor.y + Math.cos(phase * 0.31 + data.seed) * 0.18 + strike * 0.16;
        object.position.z = data.anchor.z + Math.sin(phase * 0.08 + data.seed) * state.depth * 0.55;
        object.rotation.x += dt * activeSpeed * 0.08;
        object.rotation.y += dt * activeSpeed * 0.12;
        if (data.scale) object.scale.set(data.scale.x * (1 + strike * 0.08), data.scale.y * (1 + strike * 0.12), data.scale.z * (1 + strike * 0.06));
        if (object.material?.emissive) object.material.emissiveIntensity = 0.28 + state.wireGlow * 0.42 + strike * 0.72;
      } else if (data.kind === "thunderBolt") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.8 + data.seed) * percussionHit * 0.24;
        object.position.z = data.anchor.z + Math.sin(phase * 0.16 + data.seed) * state.depth * 0.72;
        object.scale.y = 0.9 + beatHit * 0.22 + percussionHit * 0.48;
        if (object.material) object.material.opacity = clamp(0.1 + percussionHit * 0.54 + beatHit * 0.22 + state.wireGlow * 0.06, 0.04, 0.78);
      } else if (data.kind === "thunderBoltMesh") {
        object.rotation.z = Math.sin(phase * 0.34 + data.seed) * 0.06;
        object.scale.y = 0.94 + beatHit * 0.18 + percussionHit * 0.36;
        object.children.forEach((child, childIndex) => {
          if (child.material?.opacity !== undefined) child.material.opacity = clamp(0.26 + state.wireGlow * 0.1 + beatHit * 0.22 + percussionHit * 0.38, 0.08, 0.8);
          if (child.material?.emissive) child.material.emissiveIntensity = 0.58 + state.wireGlow * 0.64 + percussionHit * 0.9 + (childIndex % 2) * 0.12;
        });
      } else if (data.kind === "thunderRing") {
        object.rotation.z += dt * activeSpeed * (0.08 + state.spin * 0.1);
        object.scale.setScalar(0.9 + data.index * 0.08 + pulse * 0.22 + bassHit * 0.16);
        if (object.material) object.material.opacity = clamp(0.06 + bassHit * 0.16 + state.wireGlow * 0.06, 0.03, 0.32);
      } else if (data.kind === "thunderBead") {
        const fall = (phase * activeSpeed * (0.18 + state.rhythm * 0.18) + data.seed) % 1;
        object.position.x = data.anchor.x + Math.sin(phase * 0.28 + data.seed) * 0.2;
        object.position.y = 2.9 - fall * 5.8;
        object.position.z = data.anchor.z + Math.sin(phase * 0.12 + data.seed) * 0.42;
        object.scale.setScalar(0.42 + melodyHit * 0.08 + percussionHit * 0.12);
      } else if (data.kind === "railTrack" || data.kind === "railSleeper" || data.kind === "railArch") {
        const travel = (phase * activeSpeed * (0.72 + state.tunnel * 0.9) + data.index * (data.kind === "railArch" ? 2.15 : 1.12)) % 25;
        object.position.z = 4.2 - travel;
        object.position.x = data.anchor.x * (1 + travel * 0.004);
        object.scale.setScalar((data.kind === "railArch" ? 0.9 + data.index * 0.05 : 1) * (1 + bassHit * 0.04 + beatHit * 0.03));
        if (object.material?.emissive) object.material.emissiveIntensity = 0.18 + state.wireGlow * 0.34 + beatHit * 0.36;
        if (object.material?.opacity !== undefined) object.material.opacity = clamp(0.16 + state.wireGlow * 0.08 + beatHit * 0.1, 0.05, 0.54);
      } else if (data.kind === "railCar") {
        const travel = (phase * activeSpeed * (1.05 + state.rhythm * 0.5) + data.index * 2.2 + data.seed) % 21;
        object.position.z = 3.3 - travel;
        object.position.x = data.anchor.x + Math.sin(phase * 1.2 + data.seed) * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 4.2 + data.seed) * 0.025 + beatHit * 0.05;
        object.rotation.z = Math.sin(phase * 1.8 + data.seed) * 0.035;
        object.scale.setScalar(0.9 + bassHit * 0.12 + beatHit * 0.08);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.34 + state.wireGlow * 0.46 + beatHit * 0.5;
      } else if (data.kind === "typewriterKey") {
        const clack = (Math.sin(phase * (10 + state.rhythm * 12) + data.seed) > 0.72 ? 1 : 0) * (0.35 + percussionHit * 0.95 + beatHit * 0.28);
        object.position.x = data.anchor.x + Math.sin(phase * 1.4 + data.seed) * 0.018;
        object.position.y = data.anchor.y - clack * 0.12 + beatHit * 0.025;
        object.position.z = data.anchor.z + clack * 0.03;
        object.rotation.x = -0.22 - Math.floor(data.index / 10) * 0.04 - clack * 0.24;
        object.rotation.z = Math.sin(phase * 0.7 + data.seed) * 0.025;
        object.scale.set(1 + clack * 0.06, 1 - clack * 0.2, 1 + clack * 0.05);
        if (object.material) object.material.opacity = clamp(0.34 + state.wireGlow * 0.18 + clack * 0.42 + beatHit * 0.08, 0.22, 0.92);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.24 + state.wireGlow * 0.32 + clack * 0.82 + melodyHit * 0.22;
      } else if (data.kind === "typewriterRail") {
        object.position.x = Math.sin(phase * (0.8 + state.groove) + data.seed) * 0.72 * state.fieldSpread;
        object.rotation.x += dt * activeSpeed * (0.35 + state.rhythm * 0.5);
        object.rotation.z = Math.PI * 0.5 + Math.sin(phase * 1.6) * 0.03;
        object.scale.set(1 + bassHit * 0.08, 1, 1);
        if (object.material) object.material.opacity = clamp(0.28 + state.wireGlow * 0.1 + percussionHit * 0.18, 0.14, 0.62);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.3 + state.wireGlow * 0.44 + percussionHit * 0.48;
      } else if (data.kind === "typewriterRibbon") {
        object.position.y = 0.82 + Math.sin(phase * 2.6 + data.seed) * 0.12 + chordHit * 0.05;
        object.position.z = -2 + Math.sin(phase * 1.1) * 0.09;
        object.rotation.z = Math.sin(phase * 3.4 + data.seed) * 0.05;
        object.scale.x = 1 + Math.sin(phase * 2.2) * 0.06 + state.morph * 0.04;
        if (object.material) object.material.opacity = clamp(0.22 + state.wireGlow * 0.08 + percussionHit * 0.22 + chordHit * 0.12, 0.1, 0.62);
      } else if (data.kind === "typewriterMainPaper") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.6 + data.seed) * 0.06;
        object.position.y = data.anchor.y + Math.sin(phase * 0.44 + data.seed) * 0.1 + melodyHit * 0.08;
        object.position.z = data.anchor.z + Math.sin(phase * 0.28) * 0.08;
        object.rotation.x = -0.08 + Math.sin(phase * 0.35) * 0.025;
        object.rotation.z = Math.sin(phase * 0.48 + data.seed) * 0.025;
        object.scale.setScalar(1 + chordHit * 0.04 + pulse * 0.02);
        if (object.material) object.material.opacity = clamp(0.48 + state.wireGlow * 0.12 + chordHit * 0.16 + melodyHit * 0.1, 0.36, 0.86);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.12 + state.wireGlow * 0.18 + chordHit * 0.18;
      } else if (data.kind === "typewriterHammer") {
        const strike = (Math.sin(phase * (8 + state.rhythm * 10) + data.seed) > 0.68 ? 1 : 0) * (0.25 + percussionHit * 0.9);
        object.position.x = data.anchor.x + strike * Math.sin(data.seed) * 0.06;
        object.position.y = data.anchor.y + strike * 0.2;
        object.position.z = data.anchor.z - strike * 0.16;
        object.rotation.x = -0.48 - strike * 0.34;
        object.rotation.z = (data.index - 10) * 0.035 + Math.sin(phase * 1.2 + data.seed) * 0.015;
        object.scale.y = 1 + strike * 0.12;
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.1 + strike * 0.36, 0.08, 0.62);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.22 + state.wireGlow * 0.34 + strike * 0.58;
      } else if (data.kind === "typewriterPaper") {
        const drift = data.angle + phase * activeSpeed * (0.14 + data.index * 0.004);
        object.position.x = Math.cos(drift) * data.radius + Math.sin(phase * 0.8 + data.seed) * 0.16;
        object.position.y = data.anchor.y + Math.sin(phase * 0.54 + data.seed) * 0.52 + melodyHit * 0.12;
        object.position.z = data.anchor.z + Math.sin(drift * 1.3) * 0.62 + chordHit * 0.18;
        object.rotation.x = Math.sin(phase * 0.31 + data.seed) * 0.42;
        object.rotation.y = drift + Math.PI;
        object.rotation.z = Math.cos(phase * 0.27 + data.seed) * 0.34;
        object.scale.setScalar(0.82 + (data.index % 4) * 0.06 + pulse * 0.04);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.08 + melodyHit * 0.12 + chordHit * 0.1, 0.08, 0.48);
      } else if (data.kind === "mazeWall") {
        const turn = Math.sin(phase * 0.38 + data.seed);
        object.position.x = data.anchor.x + turn * state.morph * 0.08 + chordHit * Math.sin(data.seed) * 0.05;
        object.position.y = data.anchor.y + Math.sin(phase * 0.22 + data.seed) * 0.16 + bassHit * 0.04;
        object.position.z = data.anchor.z + Math.cos(phase * 0.18 + data.seed) * state.depth * 0.16;
        object.rotation.y += dt * activeSpeed * state.spin * (0.035 + (data.index % 5) * 0.008) + chordHit * 0.002;
        object.scale.y = 0.82 + (data.index % 4) * 0.18 + Math.abs(turn) * 0.2 + chordHit * 0.08;
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.08 + chordHit * 0.18 + beatHit * 0.04, 0.06, 0.48);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.22 + state.wireGlow * 0.42 + chordHit * 0.46;
      } else if (data.kind === "mazePath") {
        object.rotation.y = Math.sin(phase * 0.16 + data.seed) * 0.12;
        object.position.y = Math.sin(phase * 0.7) * 0.08 + melodyHit * 0.12;
        object.scale.setScalar(1 + chordHit * 0.08 + pulse * 0.04);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.1 + melodyHit * 0.24 + chordHit * 0.2, 0.05, 0.62);
      } else if (data.kind === "mazeOrb") {
        const angle = data.angle + phase * activeSpeed * (0.22 + state.spin * 0.12 + data.index * 0.01);
        object.position.x = Math.cos(angle) * data.radius + Math.sin(phase * 0.6 + data.seed) * 0.16;
        object.position.y = data.anchor.y + Math.sin(angle * 1.8 + data.seed) * 0.72 + melodyHit * 0.18;
        object.position.z = data.anchor.z + Math.sin(angle) * 1.35 + chordHit * 0.18;
        object.rotation.x += dt * activeSpeed * (0.5 + state.spin * 0.8);
        object.rotation.y += dt * activeSpeed * (0.7 + state.spin);
        object.scale.setScalar(0.76 + (data.index % 3) * 0.08 + melodyHit * 0.24 + chordHit * 0.1);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.4 + state.wireGlow * 0.54 + melodyHit * 0.64 + chordHit * 0.36;
      } else if (data.kind === "marbleRamp") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.54 + data.seed) * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 0.32 + data.seed) * 0.08 + bassHit * 0.04;
        object.rotation.z = (data.index % 2 ? -0.18 : 0.18) + Math.sin(phase * 1.1 + data.seed) * 0.035 + beatHit * 0.02;
        object.rotation.y = Math.sin(data.index) * 0.12 + Math.sin(phase * 0.6 + data.seed) * 0.08;
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.1 + bassHit * 0.16 + beatHit * 0.1, 0.1, 0.58);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.26 + state.wireGlow * 0.36 + bassHit * 0.28 + beatHit * 0.28;
      } else if (data.kind === "marbleHoop") {
        object.rotation.x += dt * activeSpeed * (0.16 + state.spin * 0.28);
        object.rotation.y += dt * activeSpeed * (0.28 + state.spin * 0.46);
        object.rotation.z += dt * activeSpeed * (0.34 + data.index * 0.02);
        object.scale.setScalar(0.86 + (data.index % 3) * 0.08 + arpHit * 0.22 + pulse * 0.06);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.12 + arpHit * 0.28 + beatHit * 0.08, 0.05, 0.68);
      } else if (data.kind === "marbleBall") {
        const roll = (phase * activeSpeed * (0.64 + state.rhythm * 0.58) + data.seed) % 1;
        const angle = data.angle + roll * twoPi + Math.floor(data.index % 5) * 0.18;
        object.position.x = Math.cos(angle) * data.radius + Math.sin(roll * Math.PI * 5 + data.seed) * 0.24;
        object.position.y = 1.95 - roll * 4.4 + Math.abs(Math.sin(roll * Math.PI * 6 + data.seed)) * 0.28 + arpHit * 0.16;
        object.position.z = data.anchor.z + Math.sin(angle) * 0.9;
        object.rotation.x += dt * activeSpeed * (3.2 + data.index * 0.08);
        object.rotation.z += dt * activeSpeed * (2.7 + state.spin);
        object.scale.setScalar(0.88 + arpHit * 0.22 + percussionHit * 0.14);
        if (object.material) object.material.opacity = clamp(0.28 + state.wireGlow * 0.16 + arpHit * 0.24 + percussionHit * 0.1, 0.16, 0.76);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.42 + state.wireGlow * 0.48 + arpHit * 0.68 + percussionHit * 0.3;
      } else if (data.kind === "marblePin") {
        object.position.y = data.anchor.y + Math.sin(phase * 1.7 + data.seed) * 0.035 + percussionHit * 0.05;
        object.rotation.x += dt * activeSpeed * (0.4 + data.index * 0.01);
        object.rotation.z = Math.sin(data.index * 1.7) * 0.26 + Math.sin(phase * 2.4 + data.seed) * 0.08;
        object.scale.setScalar(0.82 + beatHit * 0.08 + percussionHit * 0.18);
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.08 + percussionHit * 0.16, 0.08, 0.46);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.2 + state.wireGlow * 0.32 + percussionHit * 0.5;
      } else if (data.kind === "diceWheel" || data.kind === "diceArc") {
        object.rotation.z += dt * activeSpeed * (0.22 + data.index * 0.045 + percussionHit * 0.18);
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.18 + data.seed) * state.perspectiveWarp * 0.22;
        object.scale.setScalar(0.92 + data.index * 0.1 + pulse * 0.12 + arpHit * 0.1);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.1 + arpHit * 0.16 + percussionHit * 0.08, 0.04, 0.52);
      } else if (data.kind === "diceCube") {
        const tumble = phase * activeSpeed * (0.48 + state.rhythm * 0.34) + data.seed;
        object.position.x = data.anchor.x + Math.sin(tumble * 0.7) * 0.22 + (pointer.x - 0.5) * state.pointer * 0.25;
        object.position.y = data.anchor.y + Math.abs(Math.sin(tumble * 1.7)) * 0.34 + percussionHit * 0.18;
        object.position.z = data.anchor.z + Math.cos(tumble * 0.43) * 0.62;
        object.rotation.x += dt * activeSpeed * (0.9 + data.index * 0.04 + percussionHit * 0.4);
        object.rotation.y += dt * activeSpeed * (1.2 + state.spin * 0.5 + arpHit * 0.25);
        object.rotation.z += dt * activeSpeed * (0.7 + melodyHit * 0.22);
        object.scale.setScalar(0.82 + (data.index % 4) * 0.08 + percussionHit * 0.16 + arpHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.24 + state.wireGlow * 0.12 + percussionHit * 0.18 + arpHit * 0.1, 0.12, 0.78);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.3 + state.wireGlow * 0.44 + percussionHit * 0.46 + arpHit * 0.22;
      } else if (data.kind === "diceCard") {
        const drift = data.angle + phase * activeSpeed * (0.1 + data.index * 0.003);
        object.position.x = Math.cos(drift) * data.radius + Math.sin(phase * 0.5 + data.seed) * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 0.36 + data.seed) * 0.42 + melodyHit * 0.12;
        object.position.z = data.anchor.z + Math.sin(drift) * 0.6;
        object.rotation.y = drift + Math.PI;
        object.rotation.z = Math.sin(phase * 0.42 + data.seed) * 0.28;
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.08 + melodyHit * 0.12 + arpHit * 0.08, 0.08, 0.42);
      } else if (data.kind === "diceChip") {
        object.position.y = data.anchor.y + Math.sin(phase * 1.4 + data.seed) * 0.08 + percussionHit * 0.08;
        object.rotation.z += dt * activeSpeed * (1.6 + data.index * 0.04 + beatHit * 0.4);
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.8 + data.seed) * 0.08;
        object.scale.setScalar(0.86 + percussionHit * 0.18 + beatHit * 0.08);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.28 + state.wireGlow * 0.38 + percussionHit * 0.42;
      } else if (data.kind === "kitchenBurner") {
        object.rotation.z += dt * activeSpeed * (0.3 + state.groove * 0.4);
        object.scale.setScalar(0.86 + pulse * 0.18 + bassHit * 0.22 + percussionHit * 0.12);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.1 + bassHit * 0.2 + percussionHit * 0.12, 0.04, 0.58);
      } else if (data.kind === "kitchenFlame") {
        const flicker = 0.5 + Math.sin(phase * (4.2 + data.index * 0.08) + data.seed) * 0.5;
        object.position.x = data.anchor.x + Math.sin(phase * 1.8 + data.seed) * 0.035;
        object.position.y = data.anchor.y + flicker * 0.08 + percussionHit * 0.12;
        object.position.z = data.anchor.z + Math.cos(phase * 1.2 + data.seed) * 0.035;
        object.rotation.y += dt * activeSpeed * (1.2 + flicker * 0.8);
        object.rotation.z = Math.sin(phase * 2.5 + data.seed) * 0.22;
        object.scale.set(0.78 + flicker * 0.16, 0.9 + flicker * 0.38 + percussionHit * 0.16, 0.78 + flicker * 0.16);
        if (object.material) object.material.opacity = clamp(0.24 + state.wireGlow * 0.12 + flicker * 0.22 + percussionHit * 0.16, 0.12, 0.82);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.36 + state.wireGlow * 0.52 + flicker * 0.36 + percussionHit * 0.28;
      } else if (data.kind === "kitchenPot" || data.kind === "kitchenLid" || data.kind === "kitchenBowl") {
        const knock = Math.max(percussionHit, beatHit * 0.5);
        object.position.x = data.anchor.x + Math.sin(phase * 1.8 + data.seed) * knock * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 2.4 + data.seed) * 0.035 + knock * 0.06;
        object.position.z = data.anchor.z + Math.cos(phase * 1.2 + data.seed) * knock * 0.08;
        object.rotation.z = Math.sin(phase * 1.5 + data.seed) * 0.08 + knock * Math.sin(data.seed) * 0.05;
        object.scale.setScalar(0.92 + knock * 0.08 + pulse * 0.03);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.1 + knock * 0.16, 0.08, 0.62);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.22 + state.wireGlow * 0.32 + knock * 0.36;
      } else if (data.kind === "kitchenSpoon") {
        const swing = Math.sin(phase * (0.62 + state.groove * 0.4) + data.seed);
        object.position.x = data.anchor.x + swing * 0.18 + percussionHit * Math.sin(data.seed) * 0.06;
        object.position.y = data.anchor.y + Math.cos(phase * 0.5 + data.seed) * 0.12;
        object.position.z = data.anchor.z + Math.sin(phase * 0.38 + data.seed) * 0.26;
        object.rotation.x = Math.PI * 0.48 + swing * 0.26;
        object.rotation.y = data.angle + Math.sin(phase * 0.3 + data.seed) * 0.22;
        object.rotation.z = Math.cos(phase * 0.7 + data.seed) * 0.24 + percussionHit * 0.05;
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.08 + percussionHit * 0.12, 0.05, 0.46);
      } else if (data.kind === "kitchenSteam") {
        object.position.y = Math.sin(phase * 0.32 + data.seed) * 0.18 + chordHit * 0.08;
        object.rotation.y = Math.sin(phase * 0.2 + data.seed) * 0.24;
        object.scale.set(1 + state.breath * 0.18 + chordHit * 0.08, 1 + pulse * 0.12 + chordHit * 0.18, 1);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.08 + chordHit * 0.14 + melodyHit * 0.06, 0.04, 0.42);
      } else if (data.kind === "kitchenDroplet") {
        const rise = (phase * activeSpeed * (0.18 + state.breath * 0.2) + data.seed) % 1;
        object.position.x = data.anchor.x + Math.sin(phase * 0.48 + data.seed) * 0.16;
        object.position.y = -1.2 + rise * 4.9 + percussionHit * 0.08;
        object.position.z = data.anchor.z + Math.cos(phase * 0.32 + data.seed) * 0.38;
        object.scale.setScalar(0.56 + (data.index % 4) * 0.06 + pulse * 0.08);
      } else if (data.kind === "radioDish") {
        const sweep = data.angle + Math.sin(phase * 0.22 + data.seed) * 0.62 + melodyHit * 0.08;
        object.rotation.x = Math.PI * 0.72 + Math.sin(phase * 0.18 + data.seed) * 0.16;
        object.rotation.y = sweep + Math.PI;
        object.rotation.z = Math.cos(phase * 0.16 + data.seed) * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 0.24 + data.seed) * 0.12 + chordHit * 0.08;
        object.scale.setScalar(0.86 + chordHit * 0.08 + melodyHit * 0.12);
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.1 + chordHit * 0.16 + melodyHit * 0.08, 0.06, 0.52);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.2 + state.wireGlow * 0.36 + chordHit * 0.38;
      } else if (data.kind === "radioCore") {
        object.rotation.x += dt * activeSpeed * (0.34 + chordHit * 0.08);
        object.rotation.y += dt * activeSpeed * (0.48 + melodyHit * 0.12);
        object.position.y = data.anchor.y + Math.sin(phase * 0.32 + data.seed) * 0.12 + chordHit * 0.12;
        object.scale.setScalar(1.08 + pulse * 0.18 + chordHit * 0.18 + melodyHit * 0.12);
        if (object.material) object.material.opacity = clamp(0.28 + state.wireGlow * 0.14 + chordHit * 0.18 + melodyHit * 0.12, 0.12, 0.86);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.42 + state.wireGlow * 0.56 + chordHit * 0.48 + melodyHit * 0.28;
      } else if (data.kind === "radioMast" || data.kind === "radioAntenna") {
        object.rotation.z = Math.sin(phase * 0.2 + data.seed) * 0.16 + melodyHit * 0.04;
        object.scale.y = 1 + chordHit * 0.08 + pulse * 0.04;
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.08 + melodyHit * 0.08, 0.05, 0.42);
      } else if (data.kind === "radioBeam") {
        const scan = 0.5 + Math.sin(phase * (0.86 + data.index * 0.04) + data.seed) * 0.5;
        object.rotation.z = Math.sin(phase * 0.18 + data.seed) * 0.06;
        object.scale.setScalar(1 + scan * 0.08 + melodyHit * 0.06 + chordHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.08 + scan * 0.16 + melodyHit * 0.12 + chordHit * 0.08, 0.04, 0.62);
      } else if (data.kind === "radioSignal") {
        const travel = (phase * activeSpeed * (0.12 + state.shimmer * 0.12) + data.index * 0.07) % 1;
        object.position.z = data.anchor.z + travel * 1.2;
        object.rotation.z += dt * activeSpeed * (0.04 + data.index * 0.01);
        object.scale.setScalar(0.62 + data.index * 0.17 + travel * 0.35 + chordHit * 0.18);
        if (object.material) object.material.opacity = clamp(0.04 + state.wireGlow * 0.08 + (1 - travel) * 0.16 + chordHit * 0.14, 0.03, 0.48);
      } else if (data.kind === "radioDot") {
        const drift = (phase * activeSpeed * (0.08 + state.shimmer * 0.08) + data.seed) % 1;
        object.position.x = data.anchor.x + Math.sin(phase * 0.2 + data.seed) * 0.24;
        object.position.y = data.anchor.y + Math.sin(phase * 0.16 + data.seed) * 0.34 + melodyHit * 0.12;
        object.position.z = data.anchor.z + drift * 2.2;
        object.scale.setScalar(0.46 + (data.index % 5) * 0.05 + melodyHit * 0.18 + chordHit * 0.1);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.26 + state.wireGlow * 0.42 + melodyHit * 0.44 + chordHit * 0.26;
      } else if (data.kind === "stitchFabric") {
        object.rotation.z = Math.sin(phase * 0.12 + data.seed) * 0.04;
        object.scale.set(1 + pulse * 0.03, 1 + Math.sin(phase * 0.24) * 0.035, 1);
        if (object.material) object.material.opacity = clamp(0.06 + state.wireGlow * 0.07 + arpHit * 0.12, 0.03, 0.36);
      } else if (data.kind === "stitchSpool") {
        object.rotation.x += dt * activeSpeed * (0.9 + data.index * 0.05 + arpHit * 0.42);
        object.rotation.z = data.angle + Math.sin(phase * 0.28 + data.seed) * 0.18;
        object.position.y = data.anchor.y + Math.sin(phase * 0.42 + data.seed) * 0.08 + beatHit * 0.04;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.24 + state.wireGlow * 0.36 + arpHit * 0.36;
      } else if (data.kind === "stitchHoop") {
        object.rotation.z += dt * activeSpeed * (0.18 + data.index * 0.02);
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.2 + data.seed) * 0.28;
        object.scale.setScalar(0.84 + pulse * 0.1 + melodyHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.09 + melodyHit * 0.16, 0.04, 0.46);
      } else if (data.kind === "stitchNeedle") {
        const jab = Math.abs(Math.sin(phase * (1.8 + state.rhythm * 1.5) + data.seed));
        object.position.y = data.anchor.y - jab * (0.5 + state.rhythm * 0.34) + percussionHit * 0.12;
        object.position.x = data.anchor.x + Math.sin(phase * 0.6 + data.seed) * 0.06;
        object.rotation.z = Math.sin(phase * 0.72 + data.seed) * 0.24;
        object.scale.setScalar(0.82 + jab * 0.18 + percussionHit * 0.1);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.12 + jab * 0.24 + percussionHit * 0.14, 0.08, 0.78);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.28 + state.wireGlow * 0.46 + jab * 0.34;
      } else if (data.kind === "stitchThread") {
        object.position.y = Math.sin(phase * 0.38 + data.seed) * 0.16 + melodyHit * 0.08;
        object.rotation.z = Math.sin(phase * 0.18 + data.seed) * 0.12;
        object.scale.set(1 + arpHit * 0.08, 1 + pulse * 0.08, 1);
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.11 + arpHit * 0.18 + melodyHit * 0.08, 0.05, 0.54);
      } else if (data.kind === "stitchKnot") {
        object.position.y = data.anchor.y + Math.sin(phase * 0.9 + data.seed) * 0.08 + arpHit * 0.08;
        object.scale.setScalar(0.66 + (data.index % 5) * 0.05 + pulse * 0.12 + arpHit * 0.18);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.22 + state.wireGlow * 0.42 + arpHit * 0.38;
      } else if (data.kind === "stitchShuttle") {
        const slide = Math.sin(phase * (0.75 + state.groove * 0.7) + data.seed);
        object.position.x = data.anchor.x + slide * (0.34 + state.groove * 0.22);
        object.position.y = data.anchor.y + Math.abs(slide) * 0.08 + percussionHit * 0.08;
        object.rotation.y = slide * 0.42;
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.1 + percussionHit * 0.14, 0.08, 0.6);
      } else if (data.kind === "archiveShelf") {
        object.position.y = data.anchor.y + Math.sin(phase * 0.12 + data.seed) * 0.025;
        if (object.material) object.material.opacity = clamp(0.1 + state.wireGlow * 0.08 + bassHit * 0.08, 0.05, 0.42);
      } else if (data.kind === "archiveBook") {
        object.rotation.z = Math.sin(phase * 0.28 + data.seed) * 0.12 + bassHit * 0.04;
        object.position.y = data.anchor.y + Math.sin(phase * 0.18 + data.seed) * 0.05;
        object.scale.setScalar(0.9 + pulse * 0.04 + chordHit * 0.08);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.18 + state.wireGlow * 0.32 + chordHit * 0.32;
      } else if (data.kind === "archivePage") {
        const flip = Math.sin(phase * (0.42 + state.breath * 0.32) + data.seed);
        object.position.x = data.anchor.x + Math.sin(phase * 0.2 + data.seed) * 0.2;
        object.position.y = data.anchor.y + Math.sin(phase * 0.34 + data.seed) * 0.3 + melodyHit * 0.12;
        object.position.z = data.anchor.z + Math.cos(phase * 0.18 + data.seed) * 0.36;
        object.rotation.y = data.angle + flip * 0.92;
        object.rotation.z = Math.cos(phase * 0.26 + data.seed) * 0.22;
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.1 + Math.abs(flip) * 0.12 + melodyHit * 0.12, 0.06, 0.58);
      } else if (data.kind === "archiveEmber") {
        const rise = (phase * activeSpeed * (0.06 + state.shimmer * 0.12) + data.seed) % 1;
        object.position.x = data.anchor.x + Math.sin(phase * 0.34 + data.seed) * 0.22;
        object.position.y = -1.35 + rise * 4.1 + chordHit * 0.08;
        object.position.z = data.anchor.z + Math.cos(phase * 0.26 + data.seed) * 0.28;
        object.scale.setScalar(0.48 + (data.index % 6) * 0.05 + pulse * 0.16 + bassHit * 0.12);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.38 + state.wireGlow * 0.56 + bassHit * 0.42;
      } else if (data.kind === "archiveRing") {
        object.rotation.z += dt * activeSpeed * (0.08 + data.index * 0.012);
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.13 + data.seed) * 0.24;
        object.scale.setScalar(0.74 + data.index * 0.18 + chordHit * 0.12);
        if (object.material) object.material.opacity = clamp(0.05 + state.wireGlow * 0.08 + chordHit * 0.12, 0.03, 0.42);
      } else if (data.kind === "liftShaft" || data.kind === "liftRail") {
        object.position.x = data.anchor.x + Math.sin(phase * 0.12 + data.seed) * 0.06;
        object.scale.y = 1 + Math.sin(phase * 0.18 + data.seed) * 0.04 + bassHit * 0.05;
        if (object.material) object.material.opacity = clamp(0.1 + state.wireGlow * 0.08 + chordHit * 0.1, 0.04, 0.48);
      } else if (data.kind === "liftCar") {
        const travel = Math.sin(phase * (0.32 + state.speed * 0.16) + data.seed);
        object.position.x = data.anchor.x + Math.sin(phase * 0.13 + data.seed) * 0.08;
        object.position.y = data.anchor.y + travel * (1.8 + state.depth * 0.8);
        object.position.z = data.anchor.z + Math.cos(phase * 0.16 + data.seed) * 0.12;
        object.rotation.z = Math.sin(phase * 0.18 + data.seed) * 0.05;
        object.scale.setScalar(0.86 + chordHit * 0.08 + melodyHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.11 + melodyHit * 0.16, 0.08, 0.68);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.24 + state.wireGlow * 0.42 + melodyHit * 0.36;
      } else if (data.kind === "liftDoor") {
        const open = Math.max(0, Math.sin(phase * 0.74 + data.seed));
        const travel = Math.sin(phase * (0.32 + state.speed * 0.16) + data.seed);
        object.position.x = data.anchor.x + data.side * open * (0.2 + melodyHit * 0.08);
        object.position.y = data.anchor.y + travel * (1.65 + state.depth * 0.72);
        object.scale.x = 1 - open * 0.12;
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.09 + open * 0.16 + melodyHit * 0.08, 0.05, 0.58);
      } else if (data.kind === "liftCounterweight") {
        object.position.y = data.anchor.y - Math.sin(phase * (0.32 + state.speed * 0.16) + data.seed) * 1.4;
        object.rotation.z = Math.sin(phase * 0.22 + data.seed) * 0.08;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.16 + state.wireGlow * 0.3 + bassHit * 0.3;
      } else if (data.kind === "liftLamp") {
        const blink = euclideanHit((Math.floor(phase * 8) + data.index) % 16, 5, data.index % 16) ? 1 : 0;
        object.position.y = data.anchor.y + Math.sin(phase * 0.2 + data.seed) * 0.08;
        object.scale.setScalar(0.5 + (data.index % 4) * 0.05 + blink * 0.22 + chordHit * 0.1);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.24 + state.wireGlow * 0.42 + blink * 0.6 + melodyHit * 0.22;
      } else if (data.kind === "switchPanel") {
        object.rotation.y = Math.sin(phase * 0.12 + data.seed) * 0.04;
        object.scale.set(1 + pulse * 0.015, 1 + beatHit * 0.02, 1);
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.08 + chordHit * 0.1, 0.06, 0.46);
      } else if (data.kind === "switchJack") {
        const blink = euclideanHit((Math.floor(phase * 12) + data.index) % 16, 6, data.index % 16) ? 1 : 0;
        object.scale.setScalar(0.78 + blink * 0.18 + percussionHit * 0.12);
        object.rotation.z += dt * activeSpeed * (0.3 + data.index * 0.005);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.2 + state.wireGlow * 0.36 + blink * 0.5 + percussionHit * 0.3;
      } else if (data.kind === "switchBulb") {
        const blink = euclideanHit((Math.floor(phase * 16) + data.index) % 16, 7, data.index % 16) ? 1 : 0;
        object.position.y = data.anchor.y + Math.sin(phase * 0.7 + data.seed) * 0.025;
        object.scale.setScalar(0.62 + blink * 0.36 + arpHit * 0.16 + beatHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.22 + state.wireGlow * 0.12 + blink * 0.28 + arpHit * 0.12, 0.1, 0.9);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.38 + state.wireGlow * 0.6 + blink * 0.8 + arpHit * 0.34;
      } else if (data.kind === "switchCable") {
        object.position.y = Math.sin(phase * 0.55 + data.seed) * 0.08 + arpHit * 0.06;
        object.scale.set(1 + beatHit * 0.02, 1 + pulse * 0.08, 1);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.14 + arpHit * 0.2 + percussionHit * 0.1, 0.08, 0.74);
      } else if (data.kind === "switchPlug") {
        object.position.z = data.anchor.z + Math.sin(phase * 0.8 + data.seed) * 0.05 + percussionHit * 0.06;
        object.rotation.z += dt * activeSpeed * (0.7 + data.index * 0.02 + beatHit * 0.2);
        if (object.material) object.material.opacity = clamp(0.2 + state.wireGlow * 0.11 + percussionHit * 0.16, 0.08, 0.68);
      } else if (data.kind === "switchLever") {
        const throwAmount = Math.sin(phase * (1.1 + state.rhythm * 0.9) + data.seed);
        object.rotation.z = throwAmount * 0.42;
        object.position.y = data.anchor.y + Math.abs(throwAmount) * 0.05 + percussionHit * 0.06;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.2 + state.wireGlow * 0.34 + percussionHit * 0.42;
      } else if (data.kind === "switchDial") {
        object.rotation.z += dt * activeSpeed * (0.42 + data.index * 0.04 + arpHit * 0.18);
        object.scale.setScalar(0.88 + pulse * 0.08 + chordHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.12 + chordHit * 0.16, 0.06, 0.62);
      } else if (data.kind === "courtFloor") {
        object.rotation.y += dt * activeSpeed * 0.08;
        object.scale.setScalar(0.98 + chordHit * 0.04 + pulse * 0.02);
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.08 + chordHit * 0.1, 0.06, 0.48);
      } else if (data.kind === "courtStand") {
        object.position.y = data.anchor.y + Math.sin(phase * 0.2 + data.seed) * 0.05 + bassHit * 0.08;
        object.rotation.y = data.angle + Math.sin(phase * 0.12 + data.seed) * 0.18;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.28 + state.wireGlow * 0.38 + chordHit * 0.38;
      } else if (data.kind === "courtPrism") {
        object.rotation.x += dt * activeSpeed * (0.24 + data.index * 0.015);
        object.rotation.y += dt * activeSpeed * (0.34 + melodyHit * 0.1);
        object.position.y = data.anchor.y + Math.sin(phase * 0.22 + data.seed) * 0.14 + chordHit * 0.12;
        object.scale.setScalar(0.9 + chordHit * 0.12 + melodyHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.28 + state.wireGlow * 0.14 + chordHit * 0.18, 0.12, 0.88);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.42 + state.wireGlow * 0.58 + chordHit * 0.5;
      } else if (data.kind === "courtBeam") {
        object.rotation.y = Math.sin(phase * 0.16 + data.seed) * 0.26;
        object.rotation.z = Math.cos(phase * 0.13 + data.seed) * 0.14;
        object.scale.z = 1 + chordHit * 0.16 + pulse * 0.06;
        if (object.material) object.material.opacity = clamp(0.2 + state.wireGlow * 0.12 + chordHit * 0.16, 0.08, 0.66);
      } else if (data.kind === "courtScale") {
        object.rotation.z += dt * activeSpeed * (0.12 + data.index * 0.01);
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.18 + data.seed) * 0.28;
        object.position.y = data.anchor.y + Math.sin(phase * 0.24 + data.seed) * 0.08;
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.12 + melodyHit * 0.16, 0.07, 0.64);
      } else if (data.kind === "courtShard") {
        const orbit = data.angle + phase * activeSpeed * (0.08 + state.morph * 0.06);
        object.position.x = Math.cos(orbit) * data.radius + Math.sin(phase * 0.22 + data.seed) * 0.12;
        object.position.y = data.anchor.y + Math.sin(phase * 0.2 + data.seed) * 0.24 + melodyHit * 0.1;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.36;
        object.rotation.x += dt * activeSpeed * (0.4 + data.index * 0.01);
        object.rotation.y += dt * activeSpeed * 0.35;
        object.scale.setScalar(0.72 + (data.index % 4) * 0.06 + pulse * 0.08);
      } else if (data.kind === "weatherGauge") {
        object.rotation.z += dt * activeSpeed * (0.08 + data.index * 0.006);
        object.scale.setScalar(0.88 + pulse * 0.1 + bassHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.14 + bassHit * 0.18, 0.08, 0.7);
      } else if (data.kind === "weatherNeedle") {
        object.rotation.z = Math.sin(phase * (0.8 + state.breath * 0.8) + data.seed) * 1.2 + percussionHit * 0.2;
        object.position.y = data.anchor.y + Math.sin(phase * 0.2 + data.seed) * 0.04;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.34 + state.wireGlow * 0.44 + percussionHit * 0.48;
      } else if (data.kind === "weatherVane") {
        object.rotation.z = data.angle + phase * activeSpeed * (0.65 + state.spin * 0.5) + melodyHit * 0.12;
        object.position.y = data.anchor.y + Math.sin(phase * 0.34 + data.seed) * 0.18;
        if (object.material) object.material.opacity = clamp(0.26 + state.wireGlow * 0.12 + melodyHit * 0.14, 0.1, 0.76);
      } else if (data.kind === "weatherDrum") {
        object.scale.set(1 + bassHit * 0.12, 1 + pulse * 0.08 + bassHit * 0.12, 1 + bassHit * 0.12);
        object.rotation.y += dt * activeSpeed * (0.16 + data.index * 0.01);
        object.position.y = data.anchor.y + bassHit * 0.08 + Math.sin(phase * 0.24 + data.seed) * 0.04;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.3 + state.wireGlow * 0.42 + bassHit * 0.5;
      } else if (data.kind === "weatherPipe") {
        object.rotation.z = Math.sin(phase * 0.2 + data.seed) * 0.34;
        object.scale.y = 1 + chordHit * 0.08 + pulse * 0.04;
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.11 + chordHit * 0.13, 0.07, 0.58);
      } else if (data.kind === "weatherDrop") {
        const fall = (phase * activeSpeed * (0.12 + state.breath * 0.18) + data.seed) % 1;
        object.position.x = data.anchor.x + Math.sin(phase * 0.28 + data.seed) * 0.2;
        object.position.y = 1.9 - fall * 4.2 + melodyHit * 0.08;
        object.position.z = data.anchor.z + Math.cos(phase * 0.2 + data.seed) * 0.26;
        object.scale.setScalar(0.46 + (data.index % 5) * 0.05 + pulse * 0.1);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.36 + state.wireGlow * 0.48 + melodyHit * 0.34;
      } else if (data.kind === "semaMast") {
        object.rotation.z = Math.sin(phase * 0.18 + data.seed) * 0.04;
        object.scale.y = 1 + beatHit * 0.04;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.24 + state.wireGlow * 0.34 + beatHit * 0.3;
      } else if (data.kind === "semaFlag") {
        const snap = euclideanHit((Math.floor(phase * 10) + data.index) % 16, 7, data.index % 16) ? 1 : 0;
        const throwAngle = Math.sin(phase * (0.95 + state.rhythm * 0.7) + data.seed) * (0.42 + state.morph * 0.2) + snap * data.side * 0.34;
        object.position.x = data.anchor.x + data.side * (snap * 0.06 + percussionHit * 0.04);
        object.position.y = data.anchor.y + Math.cos(phase * 0.35 + data.seed) * 0.035;
        object.rotation.z = data.side * throwAngle;
        object.scale.set(1 + snap * 0.16 + arpHit * 0.08, 1 + pulse * 0.08, 1);
        if (object.material) object.material.opacity = clamp(0.28 + state.wireGlow * 0.13 + snap * 0.18 + arpHit * 0.12, 0.12, 0.86);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.4 + state.wireGlow * 0.52 + snap * 0.56 + percussionHit * 0.3;
      } else if (data.kind === "semaLamp") {
        const flash = euclideanHit((Math.floor(phase * 12) + data.index) % 16, 5, data.index % 16) ? 1 : 0;
        object.scale.setScalar(0.74 + flash * 0.34 + chordHit * 0.16);
        object.position.y = data.anchor.y + Math.sin(phase * 0.5 + data.seed) * 0.04;
        if (object.material) object.material.opacity = clamp(0.26 + state.wireGlow * 0.14 + flash * 0.22, 0.12, 0.9);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.42 + state.wireGlow * 0.64 + flash * 0.9 + chordHit * 0.32;
      } else if (data.kind === "semaBeam") {
        object.rotation.y = Math.sin(phase * 0.22 + data.seed) * 0.54;
        object.rotation.z = Math.cos(phase * 0.18 + data.seed) * 0.26;
        object.scale.z = 1 + pulse * 0.1 + chordHit * 0.16;
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.11 + chordHit * 0.14, 0.06, 0.58);
      } else if (data.kind === "semaRing") {
        object.rotation.z += dt * activeSpeed * (0.22 + data.index * 0.025 + arpHit * 0.16);
        object.position.y = data.anchor.y + Math.sin(phase * 0.24 + data.seed) * 0.12;
        object.scale.setScalar(0.88 + pulse * 0.1 + beatHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.12 + beatHit * 0.14, 0.05, 0.56);
      } else if (data.kind === "pendulumArch") {
        object.rotation.z += dt * activeSpeed * 0.035;
        object.scale.y = 0.44 + data.index * 0.08 + chordHit * 0.02;
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.1 + chordHit * 0.12, 0.04, 0.5);
      } else if (data.kind === "pendulumString") {
        const swing = Math.sin(phase * (0.28 + data.index * 0.018 + state.breath * 0.1) + data.seed) * (0.26 + state.morph * 0.12) + bassHit * 0.04;
        object.rotation.z = swing;
        object.position.x = data.anchor.x + Math.sin(swing) * data.anchor.length * 0.28;
        object.position.y = data.anchor.topY - Math.cos(swing) * data.anchor.length * 0.5;
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.08 + chordHit * 0.08, 0.06, 0.48);
      } else if (data.kind === "pendulumBob") {
        const swing = Math.sin(phase * (0.28 + data.index * 0.018 + state.breath * 0.1) + data.seed) * (0.42 + state.morph * 0.16) + bassHit * 0.06;
        object.position.x = data.anchor.x + Math.sin(swing) * data.anchor.length * 0.78;
        object.position.y = data.anchor.topY - Math.cos(swing) * data.anchor.length;
        object.position.z = data.anchor.z + Math.sin(phase * 0.12 + data.seed) * 0.08;
        object.scale.setScalar(0.82 + bassHit * 0.16 + pulse * 0.05);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.3 + state.wireGlow * 0.42 + bassHit * 0.46;
      } else if (data.kind === "pendulumBell") {
        object.rotation.z = Math.sin(phase * 0.16 + data.seed) * 0.12 + bassHit * 0.08;
        object.scale.set(1 + bassHit * 0.08, 1 + chordHit * 0.08, 1 + bassHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.1 + bassHit * 0.12, 0.08, 0.62);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.28 + state.wireGlow * 0.38 + chordHit * 0.36;
      } else if (data.kind === "pendulumHalo") {
        object.rotation.z += dt * activeSpeed * (0.08 + data.index * 0.012);
        object.scale.setScalar(0.82 + chordHit * 0.12 + pulse * 0.06);
        if (object.material) object.material.opacity = clamp(0.1 + state.wireGlow * 0.12 + melodyHit * 0.12, 0.05, 0.54);
      } else if (data.kind === "abacusFrame") {
        object.rotation.z = Math.sin(phase * 0.12 + data.seed) * 0.02;
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.08 + chordHit * 0.08, 0.08, 0.52);
      } else if (data.kind === "abacusRail") {
        object.scale.x = 1 + pulse * 0.04;
        object.rotation.x = Math.sin(phase * 0.18 + data.seed) * 0.03;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.24 + state.wireGlow * 0.34 + arpHit * 0.22;
      } else if (data.kind === "abacusBead") {
        const active = euclideanHit((Math.floor(phase * 9) + data.col + data.row * 2) % 16, 6 + (data.row % 3), (data.row * 3 + data.col) % 16) ? 1 : 0;
        const slide = Math.sin(phase * (0.52 + data.row * 0.08 + state.rhythm * 0.18) + data.seed) * (0.2 + state.morph * 0.12) + active * (data.col % 2 ? 0.24 : -0.24);
        object.position.x = data.anchor.x + slide + arpHit * 0.04;
        object.position.y = data.anchor.y + Math.sin(phase * 0.22 + data.seed) * 0.025;
        object.rotation.y += dt * activeSpeed * (0.32 + data.row * 0.03 + active * 0.16);
        object.scale.setScalar(0.76 + active * 0.18 + beatHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.24 + state.wireGlow * 0.12 + active * 0.16 + arpHit * 0.12, 0.12, 0.84);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.38 + state.wireGlow * 0.5 + active * 0.5 + arpHit * 0.32;
      } else if (data.kind === "abacusGlyph") {
        const orbit = data.angle + phase * activeSpeed * (0.06 + state.morph * 0.04);
        object.position.x = Math.cos(orbit) * data.radius + Math.sin(phase * 0.18 + data.seed) * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 0.26 + data.seed) * 0.16 + melodyHit * 0.08;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.26;
        object.rotation.x += dt * activeSpeed * (0.36 + data.index * 0.01);
        object.rotation.y += dt * activeSpeed * 0.28;
        object.scale.setScalar(0.66 + pulse * 0.08 + melodyHit * 0.08);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.28 + state.wireGlow * 0.4 + melodyHit * 0.28;
      } else if (data.kind === "cipherBasin") {
        object.rotation.z += dt * activeSpeed * (0.08 + pulse * 0.05);
        object.scale.setScalar(0.94 + chordHit * 0.08 + pulse * 0.04);
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.12 + chordHit * 0.14, 0.06, 0.62);
      } else if (data.kind === "cipherColumn") {
        object.position.y = data.anchor.y + Math.sin(phase * 0.2 + data.seed) * 0.06 + bassHit * 0.05;
        object.scale.y = 1 + pulse * 0.08;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.22 + state.wireGlow * 0.34 + bassHit * 0.28;
      } else if (data.kind === "cipherStream") {
        object.scale.y = 0.88 + pulse * 0.16 + melodyHit * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 0.36 + data.seed) * 0.08;
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.11 + melodyHit * 0.16, 0.06, 0.58);
      } else if (data.kind === "cipherGlyph") {
        const fall = (phase * activeSpeed * (0.09 + state.breath * 0.18) + data.seed) % 1;
        const laneWave = Math.sin(phase * 0.34 + data.lane + data.seed) * (0.1 + state.morph * 0.08);
        object.position.x = data.anchor.x + laneWave + arpHit * 0.04;
        object.position.y = 2.1 - fall * 4.4 + melodyHit * 0.08;
        object.position.z = data.anchor.z + Math.cos(phase * 0.2 + data.seed) * 0.18;
        object.rotation.y += dt * activeSpeed * (0.5 + data.lane * 0.02);
        object.rotation.z = Math.sin(phase * 0.42 + data.seed) * 0.35;
        object.scale.setScalar(0.68 + (data.index % 5) * 0.04 + pulse * 0.08);
        if (object.material) object.material.opacity = clamp(0.2 + state.wireGlow * 0.1 + melodyHit * 0.14, 0.08, 0.72);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.32 + state.wireGlow * 0.42 + melodyHit * 0.32;
      } else if (data.kind === "cipherDrop") {
        const orbit = data.angle + phase * activeSpeed * (0.08 + state.morph * 0.05);
        object.position.x = Math.cos(orbit) * data.radius;
        object.position.y = data.anchor.y + Math.sin(phase * 0.32 + data.seed) * 0.22 + melodyHit * 0.08;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.3;
        object.rotation.x += dt * activeSpeed * (0.45 + data.index * 0.01);
        object.rotation.y += dt * activeSpeed * 0.36;
        object.scale.setScalar(0.72 + pulse * 0.1);
      } else if (data.kind === "orreryCore") {
        object.rotation.y += dt * activeSpeed * (0.22 + chordHit * 0.12);
        object.rotation.x += dt * activeSpeed * 0.11;
        object.scale.setScalar(0.82 + pulse * 0.16 + chordHit * 0.18);
        if (object.material) object.material.opacity = clamp(0.46 + state.wireGlow * 0.12 + chordHit * 0.2, 0.24, 0.86);
      } else if (data.kind === "orreryRay") {
        object.rotation.z += dt * activeSpeed * (0.08 + state.spin * 0.04);
        object.rotation.y = Math.sin(phase * 0.16 + data.seed) * 0.16;
        object.scale.setScalar(0.92 + pulse * 0.08 + melodyHit * 0.1);
        if (object.material) object.material.opacity = clamp(0.28 + state.wireGlow * 0.16 + melodyHit * 0.18, 0.14, 0.72);
      } else if (data.kind === "orreryRing") {
        object.rotation.z += dt * activeSpeed * (0.08 + data.index * 0.014);
        object.rotation.y += dt * activeSpeed * 0.025;
        object.scale.setScalar(1.1 + data.index * 0.28 + chordHit * 0.03);
        if (object.material) object.material.opacity = clamp(0.24 + state.wireGlow * 0.14 + chordHit * 0.14, 0.12, 0.78);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.36 + state.wireGlow * 0.52 + chordHit * 0.4;
      } else if (data.kind === "orreryArm") {
        const orbit = data.angle + phase * activeSpeed * (0.08 + data.index * 0.006 + state.spin * 0.025);
        object.position.x = Math.cos(orbit) * data.radius * 0.5;
        object.position.y = data.anchor.y + Math.sin(orbit) * 0.18;
        object.rotation.z = orbit;
        object.scale.x = 1 + pulse * 0.06;
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.1 + beatHit * 0.12, 0.08, 0.62);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.3 + state.wireGlow * 0.42 + beatHit * 0.34;
      } else if (data.kind === "orreryPlanet") {
        const orbit = data.angle + phase * activeSpeed * (0.12 + data.index * 0.008 + state.spin * 0.03);
        object.position.x = Math.cos(orbit) * data.radius;
        object.position.y = data.anchor.y + Math.sin(phase * 0.22 + data.seed) * 0.12 + chordHit * 0.08;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.42;
        object.rotation.y += dt * activeSpeed * (0.32 + data.index * 0.015);
        object.scale.setScalar(0.86 + chordHit * 0.16 + pulse * 0.08);
        if (object.material) object.material.opacity = clamp(0.36 + state.wireGlow * 0.13 + chordHit * 0.18, 0.16, 0.9);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.46 + state.wireGlow * 0.62 + chordHit * 0.5;
      } else if (data.kind === "orrerySpire") {
        object.position.y = data.anchor.y + Math.sin(phase * 0.18 + data.seed) * 0.06;
        object.rotation.y = data.angle + Math.sin(phase * 0.12 + data.seed) * 0.14;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.22 + state.wireGlow * 0.32 + bassHit * 0.24;
      } else if (data.kind === "orreryDial") {
        object.rotation.z += dt * activeSpeed * (0.1 + data.index * 0.018);
        object.position.y = data.anchor.y + Math.sin(phase * 0.24 + data.seed) * 0.08;
        object.scale.setScalar(0.86 + pulse * 0.08 + melodyHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.22 + state.wireGlow * 0.13 + melodyHit * 0.14, 0.1, 0.72);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.34 + state.wireGlow * 0.48 + melodyHit * 0.42;
      } else if (data.kind === "reactorShell") {
        const throb = 1 + pulse * 0.08 + bassHit * 0.06 + data.index * 0.34;
        object.scale.setScalar(throb);
        object.rotation.y += dt * activeSpeed * (0.04 + data.index * 0.012);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.045 + bassHit * 0.08, 0.04, 0.38);
      } else if (data.kind === "reactorRing") {
        object.rotation.z += dt * activeSpeed * (0.16 + data.index * 0.028);
        object.rotation.x += dt * activeSpeed * 0.035;
        object.scale.setScalar(0.8 + data.index * 0.18 + pulse * 0.08 + bassHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.12 + bassHit * 0.16, 0.06, 0.68);
      } else if (data.kind === "reactorRod") {
        const orbit = data.angle + phase * activeSpeed * (0.1 + state.spin * 0.04);
        object.position.x = Math.cos(orbit) * data.radius * 0.52;
        object.position.y = Math.sin(orbit) * data.radius * 0.32 + bassHit * 0.06;
        object.rotation.z = orbit;
        object.scale.y = 1 + pulse * 0.12;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.28 + state.wireGlow * 0.42 + bassHit * 0.42;
      } else if (data.kind === "reactorCore") {
        object.rotation.x += dt * activeSpeed * (0.42 + data.index * 0.06);
        object.rotation.y += dt * activeSpeed * (0.58 + bassHit * 0.24);
        object.scale.setScalar(0.84 + pulse * 0.22 + bassHit * 0.18);
        if (object.material) object.material.opacity = clamp(0.32 + state.wireGlow * 0.12 + bassHit * 0.18, 0.12, 0.92);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.48 + state.wireGlow * 0.68 + bassHit * 0.72;
      } else if (data.kind === "reactorSpark") {
        const orbit = data.angle + phase * activeSpeed * (0.14 + state.morph * 0.08);
        object.position.x = Math.cos(orbit) * data.radius + Math.sin(phase * 0.3 + data.seed) * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 0.4 + data.seed) * 0.26 + beatHit * 0.1;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.36;
        object.rotation.x += dt * activeSpeed * (0.58 + data.index * 0.01);
        object.rotation.y += dt * activeSpeed * 0.5;
        object.scale.setScalar(0.62 + pulse * 0.12 + beatHit * 0.12);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.34 + state.wireGlow * 0.44 + beatHit * 0.38;
      } else if (data.kind === "phaseHalo") {
        object.rotation.z += dt * activeSpeed * (0.08 + data.index * 0.012 + arpHit * 0.04);
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.11 + data.seed) * 0.18 + data.index * 0.035;
        object.rotation.y = Math.sin(phase * 0.09 + data.seed) * 0.12;
        object.scale.setScalar(data.baseScale + Math.sin(phase * 0.14 + data.seed) * 0.035 + pulse * 0.08 + chordHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.08 + state.wireGlow * 0.055 + pulse * 0.08 + chordHit * 0.14, 0.05, 0.42);
      } else if (data.kind === "phaseNode") {
        const hit = euclideanHit((Math.floor(phase * 10) + data.col * 2 + data.row) % 16, 5 + (data.row % 3), data.col % 16) ? 1 : 0;
        object.position.z = data.anchor.z + Math.sin(phase * 0.28 + data.seed) * 0.1 + hit * 0.05;
        object.scale.setScalar(0.7 + hit * 0.28 + pulse * 0.08 + arpHit * 0.1);
        if (object.material) object.material.opacity = clamp(0.24 + state.wireGlow * 0.13 + hit * 0.2 + arpHit * 0.12, 0.1, 0.88);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.38 + state.wireGlow * 0.5 + hit * 0.66 + arpHit * 0.3;
      } else if (data.kind === "phaseDish") {
        const sweep = Math.sin(phase * (0.45 + data.col * 0.03) + data.seed);
        object.rotation.z += dt * activeSpeed * (0.16 + data.index * 0.004 + arpHit * 0.1);
        object.rotation.x = Math.PI * 0.5 + sweep * 0.2;
        object.scale.setScalar(0.84 + Math.abs(sweep) * 0.08 + pulse * 0.08);
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.12 + melodyHit * 0.16, 0.07, 0.62);
      } else if (data.kind === "phaseBeam") {
        object.rotation.z = Math.sin(phase * 0.12 + data.seed) * 0.04;
        object.scale.setScalar(0.96 + pulse * 0.04 + chordHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.14 + chordHit * 0.2 + arpHit * 0.12, 0.08, 0.7);
      } else if (data.kind === "phaseCursor") {
        const orbit = data.angle + phase * activeSpeed * (0.12 + data.index * 0.006 + state.morph * 0.05);
        object.position.x = Math.cos(orbit) * data.radius + Math.sin(phase * 0.26 + data.seed) * 0.08;
        object.position.y = data.anchor.y + Math.sin(phase * 0.34 + data.seed) * 0.22 + melodyHit * 0.1;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.34;
        object.rotation.x += dt * activeSpeed * (0.42 + data.index * 0.01);
        object.rotation.y += dt * activeSpeed * 0.36;
        object.scale.setScalar(0.64 + pulse * 0.12 + melodyHit * 0.12);
      } else if (data.kind === "forgeSlab") {
        object.position.y = data.anchor.y + bassHit * (0.08 + data.layer * 0.02) + Math.sin(phase * 0.16 + data.seed) * 0.035;
        object.rotation.x = Math.sin(phase * 0.12 + data.seed) * 0.04 + bassHit * 0.03;
        object.scale.y = 1 + bassHit * 0.18;
        if (object.material) object.material.opacity = clamp(0.28 + state.wireGlow * 0.1 + bassHit * 0.18, 0.12, 0.82);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.32 + state.wireGlow * 0.46 + bassHit * 0.5;
      } else if (data.kind === "forgeRing") {
        object.rotation.z += dt * activeSpeed * (0.1 + data.index * 0.02 + bassHit * 0.18);
        object.rotation.x += dt * activeSpeed * 0.025;
        object.scale.setScalar(0.78 + data.index * 0.22 + pulse * 0.1 + bassHit * 0.12);
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.12 + bassHit * 0.18, 0.06, 0.72);
      } else if (data.kind === "forgeCore") {
        object.rotation.x += dt * activeSpeed * (0.3 + data.index * 0.04);
        object.rotation.y += dt * activeSpeed * (0.5 + bassHit * 0.28);
        object.scale.setScalar(0.84 + pulse * 0.2 + bassHit * 0.2);
        if (object.material) object.material.opacity = clamp(0.36 + state.wireGlow * 0.13 + bassHit * 0.2, 0.14, 0.94);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.5 + state.wireGlow * 0.68 + bassHit * 0.82;
      } else if (data.kind === "forgePress") {
        const drop = Math.max(0, Math.sin(phase * (0.8 + data.index * 0.08) + data.seed));
        object.position.y = data.anchor.y - drop * (0.24 + state.morph * 0.12) - bassHit * 0.14;
        object.rotation.z = Math.sin(phase * 0.14 + data.seed) * 0.08;
        object.scale.y = 0.86 + drop * 0.18 + bassHit * 0.18;
        if (object.material?.emissive) object.material.emissiveIntensity = 0.28 + state.wireGlow * 0.42 + bassHit * 0.58;
      } else if (data.kind === "forgeSpark") {
        const orbit = data.angle + phase * activeSpeed * (0.16 + state.morph * 0.08);
        object.position.x = Math.cos(orbit) * data.radius + Math.sin(phase * 0.36 + data.seed) * 0.1;
        object.position.y = data.anchor.y + Math.sin(phase * 0.48 + data.seed) * 0.28 + percussionHit * 0.18;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.38;
        object.rotation.x += dt * activeSpeed * (0.64 + data.index * 0.01);
        object.rotation.y += dt * activeSpeed * 0.54;
        object.scale.setScalar(0.56 + pulse * 0.12 + percussionHit * 0.18);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.36 + state.wireGlow * 0.48 + percussionHit * 0.5;
      } else if (data.kind === "oracleSheet") {
        const fold = Math.sin(phase * (0.22 + data.ring * 0.03) + data.seed) * (0.42 + state.morph * 0.16);
        const orbit = data.angle + phase * activeSpeed * (0.035 + data.ring * 0.008);
        object.position.x = Math.cos(orbit) * data.radius + melodyHit * 0.05;
        object.position.y = data.anchor.y + Math.sin(phase * 0.2 + data.seed) * 0.12 + chordHit * 0.06;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.26;
        object.rotation.y = -orbit + Math.PI * 0.5 + fold;
        object.rotation.z = Math.cos(phase * 0.18 + data.seed) * 0.24;
        object.scale.setScalar(0.82 + pulse * 0.06 + melodyHit * 0.08);
        if (object.material) object.material.opacity = clamp(0.24 + state.wireGlow * 0.12 + melodyHit * 0.14, 0.1, 0.78);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.34 + state.wireGlow * 0.46 + melodyHit * 0.36;
      } else if (data.kind === "oracleFold") {
        const fold = Math.sin(phase * (0.22 + data.ring * 0.03) + data.seed) * (0.42 + state.morph * 0.16);
        const orbit = data.angle + phase * activeSpeed * (0.035 + data.ring * 0.008);
        object.position.x = Math.cos(orbit) * data.radius;
        object.position.y = data.anchor.y + Math.sin(phase * 0.2 + data.seed) * 0.12;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.26;
        object.rotation.y = -orbit + Math.PI * 0.5 + fold;
        object.rotation.z += dt * activeSpeed * 0.04;
        if (object.material) object.material.opacity = clamp(0.14 + state.wireGlow * 0.12 + chordHit * 0.14, 0.06, 0.58);
      } else if (data.kind === "oracleSpine") {
        object.rotation.z += dt * activeSpeed * (0.08 + data.index * 0.018);
        object.scale.setScalar(0.72 + data.index * 0.26 + chordHit * 0.1 + pulse * 0.05);
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.12 + chordHit * 0.16, 0.05, 0.62);
      } else if (data.kind === "oracleGlyph") {
        const orbit = data.angle - phase * activeSpeed * (0.08 + state.morph * 0.05);
        object.position.x = Math.cos(orbit) * data.radius;
        object.position.y = data.anchor.y + Math.sin(phase * 0.28 + data.seed) * 0.2 + melodyHit * 0.1;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.3;
        object.rotation.x += dt * activeSpeed * (0.38 + data.index * 0.01);
        object.rotation.y -= dt * activeSpeed * 0.34;
        object.scale.setScalar(0.62 + pulse * 0.08 + melodyHit * 0.12);
      } else if (data.kind === "sporeStem") {
        const sway = Math.sin(phase * (0.18 + data.ring * 0.04) + data.seed) * (0.08 + state.morph * 0.08);
        object.position.x = data.anchor.x + sway * 0.2 + pointer.pressure * state.interaction * 0.04;
        object.position.y = data.anchor.y + Math.sin(phase * 0.22 + data.seed) * 0.04 + bassHit * 0.04;
        object.rotation.z = sway;
        object.scale.y = data.height * (1 + pulse * 0.08 + bassHit * 0.1);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.24 + state.wireGlow * 0.38 + bassHit * 0.28;
      } else if (data.kind === "sporeCap") {
        const flash = euclideanHit((Math.floor(phase * 8) + data.index) % 16, 5 + (data.ring % 3), data.index % 16) ? 1 : 0;
        object.position.y = data.anchor.y + Math.sin(phase * 0.25 + data.seed) * 0.08 + flash * 0.06 + percussionHit * 0.08;
        object.rotation.x = Math.sin(phase * 0.18 + data.seed) * 0.2;
        object.rotation.y += dt * activeSpeed * (0.08 + data.ring * 0.01);
        object.scale.x = 1.1 + Math.sin(phase * 0.2 + data.seed) * 0.08 + flash * 0.18;
        object.scale.y = 0.44 + pulse * 0.08 + flash * 0.12;
        object.scale.z = 1.0 + Math.cos(phase * 0.16 + data.seed) * 0.06;
        if (object.material) object.material.opacity = clamp(0.3 + state.wireGlow * 0.12 + flash * 0.22 + percussionHit * 0.12, 0.14, 0.88);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.38 + state.wireGlow * 0.5 + flash * 0.6 + percussionHit * 0.35;
      } else if (data.kind === "sporePod") {
        object.rotation.x += dt * activeSpeed * (0.25 + data.ring * 0.02);
        object.rotation.y += dt * activeSpeed * 0.18;
        object.position.y = data.anchor.y + Math.sin(phase * 0.34 + data.seed) * 0.12 + melodyHit * 0.1;
        object.scale.setScalar(0.78 + pulse * 0.08 + melodyHit * 0.16);
      } else if (data.kind === "sporeTendril") {
        object.rotation.z = Math.sin(phase * 0.1 + data.seed) * 0.05;
        object.scale.setScalar(1 + pulse * 0.04 + melodyHit * 0.06);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.11 + melodyHit * 0.16 + percussionHit * 0.08, 0.08, 0.58);
      } else if (data.kind === "sporeDust") {
        const drift = data.angle + phase * activeSpeed * (0.07 + (data.index % 5) * 0.006);
        object.position.x = Math.cos(drift) * data.radius + Math.sin(phase * 0.23 + data.seed) * 0.1;
        object.position.y = data.anchor.y + Math.sin(phase * 0.32 + data.seed) * 0.24 + percussionHit * 0.12;
        object.position.z = data.anchor.z + Math.sin(drift) * 0.34;
        object.rotation.x += dt * activeSpeed * (0.35 + data.index * 0.006);
        object.rotation.y += dt * activeSpeed * 0.28;
        object.scale.setScalar(0.48 + pulse * 0.08 + percussionHit * 0.14);
      } else if (data.kind === "cartoIsland") {
        const bob = Math.sin(phase * (0.12 + data.ring * 0.025) + data.seed);
        object.position.y = data.anchor.y + bob * 0.08 + chordHit * 0.05;
        object.rotation.y += dt * activeSpeed * (0.025 + data.ring * 0.008);
        object.scale.x = 1 + Math.abs(bob) * 0.04 + chordHit * 0.05;
        object.scale.z = 0.82 + Math.sin(phase * 0.1 + data.seed) * 0.04;
        if (object.material) object.material.opacity = clamp(0.24 + state.wireGlow * 0.11 + chordHit * 0.14, 0.1, 0.76);
      } else if (data.kind === "cartoPin") {
        const blink = euclideanHit((Math.floor(phase * 7) + data.index) % 16, 4 + data.ring, data.index % 16) ? 1 : 0;
        object.position.y = data.anchor.y + blink * 0.12 + Math.sin(phase * 0.22 + data.seed) * 0.05;
        object.rotation.y += dt * activeSpeed * (0.18 + data.index * 0.004);
        object.scale.setScalar(0.78 + blink * 0.24 + melodyHit * 0.1);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.34 + state.wireGlow * 0.44 + blink * 0.54 + melodyHit * 0.32;
      } else if (data.kind === "cartoLabel") {
        object.position.y = data.anchor.y + Math.sin(phase * 0.18 + data.seed) * 0.035 + arpHit * 0.04;
        object.scale.x = 0.82 + (data.index % 4) * 0.18 + arpHit * 0.22;
        if (object.material) object.material.opacity = clamp(0.16 + state.wireGlow * 0.12 + arpHit * 0.18, 0.06, 0.62);
      } else if (data.kind === "cartoRoute") {
        object.rotation.z = Math.sin(phase * 0.08 + data.seed) * 0.03;
        object.scale.setScalar(1 + chordHit * 0.04 + pulse * 0.03);
        if (object.material) object.material.opacity = clamp(0.18 + state.wireGlow * 0.14 + chordHit * 0.22 + arpHit * 0.08, 0.08, 0.72);
      } else if (data.kind === "cartoBeacon") {
        const t = (phase * activeSpeed * (0.08 + state.morph * 0.04) + data.seed) % 1;
        object.position.x = lerp(data.from.x, data.to.x, t);
        object.position.y = lerp(data.from.y, data.to.y, t) + 0.18 + Math.sin(t * Math.PI) * 0.28 + melodyHit * 0.08;
        object.position.z = lerp(data.from.z, data.to.z, t);
        object.scale.setScalar(0.58 + Math.sin(t * Math.PI) * 0.34 + pulse * 0.1);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.48 + state.wireGlow * 0.58 + melodyHit * 0.4;
      } else if (data.kind === "quartzPlate") {
        const wave = Math.sin(phase * (0.08 + data.layer * 0.012) + data.seed);
        object.position.y = data.anchor.y + wave * 0.04 + chordHit * 0.05;
        object.rotation.x = 0.14 + data.layer * 0.03 + wave * 0.07;
        object.rotation.z = Math.sin(phase * 0.07 + data.seed) * 0.08;
        object.scale.y = 1 + chordHit * 0.18;
        if (object.material) object.material.opacity = clamp(0.22 + state.wireGlow * 0.13 + chordHit * 0.16, 0.08, 0.74);
        if (object.material?.emissive) object.material.emissiveIntensity = 0.34 + state.wireGlow * 0.5 + chordHit * 0.28;
      } else if (data.kind === "quartzShard") {
        const orbit = data.angle + phase * activeSpeed * (0.035 + state.morph * 0.018);
        object.position.x = Math.cos(orbit) * data.radius + Math.sin(phase * 0.12 + data.seed) * 0.06;
        object.position.y = data.anchor.y + Math.sin(phase * 0.16 + data.seed) * 0.14 + melodyHit * 0.06;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.22;
        object.rotation.y += dt * activeSpeed * (0.12 + data.index * 0.006);
        object.rotation.x += dt * activeSpeed * 0.05;
        object.scale.setScalar(0.72 + pulse * 0.08 + melodyHit * 0.1);
      } else if (data.kind === "quartzEcho") {
        object.rotation.z += dt * activeSpeed * (0.045 + data.index * 0.011);
        object.rotation.x = Math.PI * 0.5 + Math.sin(phase * 0.06 + data.seed) * 0.13;
        object.scale.setScalar(data.baseScale + Math.sin(phase * 0.09 + data.seed) * 0.03 + chordHit * 0.1 + pulse * 0.05);
        if (object.material) object.material.opacity = clamp(0.12 + state.wireGlow * 0.12 + chordHit * 0.16 + melodyHit * 0.08, 0.05, 0.62);
      } else if (data.kind === "quartzMote") {
        const orbit = data.angle - phase * activeSpeed * (0.045 + (data.index % 7) * 0.004);
        object.position.x = Math.cos(orbit) * data.radius;
        object.position.y = data.anchor.y + Math.sin(phase * 0.2 + data.seed) * 0.2 + arpHit * 0.08;
        object.position.z = data.anchor.z + Math.sin(orbit) * 0.24;
        object.rotation.x += dt * activeSpeed * (0.24 + data.index * 0.006);
        object.rotation.y -= dt * activeSpeed * 0.2;
        object.scale.setScalar(0.46 + pulse * 0.07 + arpHit * 0.12);
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
      gravityWell: ["shader", "caustics", "shafts", "well", "shards", "field", "hypersphere", "ripples", "interaction"],
      neonReef: ["shader", "caustics", "reef", "ribbons", "field", "shards", "ripples", "interaction"],
      dreamLoom: ["shader", "caustics", "loom", "ribbons", "hypersphere", "field", "ripples", "interaction"],
      signalLab: ["shader", "caustics", "shafts", "signals", "shards", "connectors", "polytope", "field", "ripples", "interaction"],
      crystalRain: ["shader", "caustics", "rain", "field", "shards", "ripples", "interaction"],
      clockworkRoom: ["shader", "caustics", "clockwork", "connectors", "field", "ripples", "interaction"],
      voidBloom: ["shader", "caustics", "bloom", "field", "hypersphere", "ribbons", "ripples", "interaction"],
      magneticInk: ["shader", "caustics", "ink", "connectors", "field", "ripples", "interaction"],
      solarHarp: ["shader", "caustics", "harp", "shafts", "ribbons", "field", "ripples", "interaction"],
      dataOrchard: ["caustics", "orchard", "field", "ripples", "interaction"],
      mirrorChoir: ["caustics", "choir", "field", "ripples", "interaction"],
      tidalEngine: ["caustics", "tide", "field", "ripples", "interaction"],
      cometRunes: ["caustics", "comet", "field", "ripples", "interaction"],
      origamiStorm: ["caustics", "origami", "field", "ripples", "interaction"],
      jellyfishChapel: ["caustics", "jellyfish", "field", "ripples", "interaction"],
      obsidianSpires: ["caustics", "shafts", "spires", "field", "ripples", "interaction"],
      tapeSpirits: ["caustics", "tape", "field", "ripples", "interaction"],
      mothLanterns: ["caustics", "moths", "field", "ripples", "interaction"],
      circuitShrine: ["caustics", "circuit", "connectors", "field", "ripples", "interaction"],
      iceOrgan: ["caustics", "ice", "shafts", "field", "ripples", "interaction"],
      myceliumRadio: ["caustics", "mycelium", "connectors", "field", "ripples", "interaction"],
      thunderLoom: ["shader", "caustics", "shafts", "thunder", "field", "ripples", "interaction"],
      railCathedral: ["shader", "caustics", "rail", "field", "ripples", "interaction"],
      typewriterSeance: ["caustics", "typewriter", "field", "ripples", "interaction"],
      glassLabyrinth: ["shader", "caustics", "labyrinth", "field", "ripples", "interaction"],
      marbleArcade: ["caustics", "marble", "field", "ripples", "interaction"],
      diceChapel: ["shader", "caustics", "dice", "field", "ripples", "interaction"],
      steamKitchen: ["caustics", "kitchen", "field", "ripples", "interaction"],
      radioGarden: ["shader", "caustics", "radio", "connectors", "field", "ripples", "interaction"],
      stitchMachine: ["shader", "caustics", "stitch", "field", "ripples", "interaction"],
      lavaLibrary: ["shader", "caustics", "archive", "field", "ripples", "interaction"],
      elevatorForest: ["shader", "caustics", "elevator", "field", "ripples", "interaction"],
      switchboardChoir: ["shader", "caustics", "switchboard", "field", "ripples", "interaction"],
      prismCourt: ["shader", "caustics", "court", "field", "ripples", "interaction"],
      weatherFactory: ["shader", "caustics", "weather", "field", "ripples", "interaction"],
      semaphoreBloom: ["shader", "caustics", "semaphore", "field", "ripples", "interaction"],
      pendulumTemple: ["shader", "caustics", "shafts", "pendulum", "field", "ripples", "interaction"],
      neonAbacus: ["shader", "caustics", "abacus", "field", "ripples", "interaction"],
      cipherFountain: ["shader", "caustics", "cipher", "field", "ripples", "interaction"],
      orreryCathedral: ["shader", "caustics", "shafts", "orrery", "field", "ripples", "interaction"],
      velvetReactor: ["shader", "caustics", "reactor", "field", "ripples", "interaction"],
      phaseArray: ["shader", "caustics", "phaseArray", "connectors", "field", "ripples", "interaction"],
      tectonicForge: ["shader", "caustics", "forge", "field", "ripples", "interaction"],
      paperOracle: ["shader", "caustics", "oracle", "ribbons", "field", "ripples", "interaction"],
      sporeSemaphore: ["shader", "caustics", "spore", "ribbons", "connectors", "field", "ripples", "interaction"],
      cartogramChoir: ["shader", "caustics", "cartogram", "connectors", "field", "ripples", "interaction"],
      quartzArchive: ["shader", "caustics", "shafts", "quartz", "ribbons", "field", "ripples", "interaction"],
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
    const glitchMode = state.musicMode === "glitch";
    const ritualMode = state.musicMode === "ritual";
    const driftMode = state.musicMode === "drift";
    const swarmMode = state.musicMode === "swarm";
    const rainMode = state.musicMode === "rain";
    const clockMode = state.musicMode === "clockwork";
    const bloomMode = state.musicMode === "bloom";
    const ferroMode = state.musicMode === "ferro";
    const harpMode = state.musicMode === "harp";
    const orchardMode = state.musicMode === "orchard";
    const choirMode = state.musicMode === "choir";
    const tideMode = state.musicMode === "tide";
    const cometMode = state.musicMode === "comet";
    const foldMode = state.musicMode === "fold";
    const jellyMode = state.musicMode === "jelly";
    const spireMode = state.musicMode === "spire";
    const tapeMode = state.musicMode === "tape";
    const mothMode = state.musicMode === "moth";
    const circuitMode = state.musicMode === "circuit";
    const iceMode = state.musicMode === "ice";
    const myceliumMode = state.musicMode === "mycelium";
    const stormMode = state.musicMode === "storm";
    const railMode = state.musicMode === "rail";
    const typewriterMode = state.musicMode === "typewriter";
    const mazeMode = state.musicMode === "maze";
    const marbleMode = state.musicMode === "marble";
    const chanceMode = state.musicMode === "chance";
    const kitchenMode = state.musicMode === "kitchen";
    const radioMode = state.musicMode === "radio";
    const stitchMode = state.musicMode === "stitch";
    const archiveMode = state.musicMode === "archive";
    const liftMode = state.musicMode === "lift";
    const switchboardMode = state.musicMode === "switchboard";
    const courtMode = state.musicMode === "court";
    const weatherMode = state.musicMode === "weather";
    const semaphoreMode = state.musicMode === "semaphore";
    const pendulumMode = state.musicMode === "pendulum";
    const abacusMode = state.musicMode === "abacus";
    const cipherMode = state.musicMode === "cipher";
    const orreryMode = state.musicMode === "orrery";
    const reactorMode = state.musicMode === "reactor";
    const phaseMode = state.musicMode === "phase";
    const forgeMode = state.musicMode === "forge";
    const oracleMode = state.musicMode === "oracle";
    const sporeMode = state.musicMode === "spore";
    const cartogramMode = state.musicMode === "cartogram";
    const quartzMode = state.musicMode === "quartz";
    const length = driftMode || bloomMode || orchardMode || choirMode || tideMode || jellyMode || iceMode || myceliumMode || mazeMode || radioMode || archiveMode || courtMode || weatherMode || pendulumMode || cipherMode || orreryMode || oracleMode || cartogramMode || quartzMode
      ? 96
      : glitchMode || spireMode || circuitMode || stormMode || typewriterMode || kitchenMode || stitchMode || switchboardMode || semaphoreMode || abacusMode || reactorMode || forgeMode || sporeMode
        ? 48
        : (state.rhythm > 0.72 || swarmMode || clockMode || ferroMode || harpMode || cometMode || foldMode || tapeMode || mothMode || railMode || marbleMode || chanceMode || liftMode || phaseMode ? 64 : 32);
    const phrase = [];
    for (let i = 0; i < length; i += 1) {
      const bar = Math.floor(i / 16);
      const stepInBar = i % 16;
      const contour = Math.sin((i / length) * twoPi * (choirMode ? 0.42 : courtMode ? 0.38 : pendulumMode ? 0.31 : orreryMode ? 0.52 : oracleMode ? 0.58 : jellyMode ? 0.36 : iceMode ? 0.28 : archiveMode ? 0.44 : radioMode ? 0.5 : mazeMode ? 0.62 : spireMode ? 0.85 : tideMode ? 1.05 : phaseMode ? 1.72 : liftMode ? 1.4 : weatherMode ? 1.8 : cipherMode ? 2.15 : driftMode || bloomMode || orchardMode ? 0.7 : myceliumMode ? 1.9 : kitchenMode ? 2.7 : tapeMode ? 2.8 : harpMode ? 3.2 : reactorMode ? 4.4 : forgeMode ? 4.9 : mothMode ? 4.8 : chanceMode ? 4.9 : railMode ? 6.0 : marbleMode ? 5.2 : cometMode ? 6.4 : semaphoreMode ? 6.8 : circuitMode ? 7.2 : abacusMode ? 7.6 : stitchMode ? 7.8 : switchboardMode ? 8.6 : typewriterMode ? 8.4 : stormMode ? 9.4 : foldMode ? 5.8 : ferroMode ? 4.6 : rainMode ? 2.4 : 1.5 + state.harmony * 0.7) + rand() * (glitchMode || ferroMode || cometMode || foldMode || tapeMode || mothMode || circuitMode || stormMode || railMode || typewriterMode || marbleMode || chanceMode || kitchenMode || stitchMode || switchboardMode || semaphoreMode || abacusMode || reactorMode || forgeMode ? 3.4 : mazeMode || radioMode || archiveMode || liftMode || courtMode || weatherMode || pendulumMode || cipherMode || orreryMode || phaseMode || oracleMode ? 0.7 : 1.2));
      const cross = Math.sin((i / length) * twoPi * (stormMode ? 15 : typewriterMode ? 14 : circuitMode ? 12 : chanceMode ? 12 : stitchMode ? 11 : switchboardMode ? 13 : semaphoreMode ? 12 : cometMode ? 11 : mothMode ? 10 : reactorMode ? 10 : forgeMode ? 9.5 : marbleMode ? 9 : abacusMode ? 8.5 : foldMode ? 13 : kitchenMode ? 7 : tapeMode ? 8 : cipherMode ? 6.6 : phaseMode ? 5.5 : ferroMode ? 9 : railMode ? 4.2 : clockMode ? 5 : swarmMode ? 7 : liftMode ? 3.6 : weatherMode ? 3.1 : myceliumMode ? 2.7 : orchardMode ? 2.2 : mazeMode ? 1.6 : archiveMode ? 1.2 : oracleMode ? 1.05 : pendulumMode ? 0.7 : orreryMode ? 0.95 : courtMode ? 0.85 : radioMode ? 1.1 : choirMode ? 1.2 : jellyMode ? 1.4 : iceMode ? 0.9 : tideMode ? 2.6 : spireMode ? 1.8 : 3 + state.rhythm * 2) + state.musicSeed * 0.001);
      const chordDegree = progressionDegreeForBar(bar);
      const nextChordDegree = progressionDegreeForBar(bar + 1);
      const chord = chordToneDegrees(chordDegree, bar);
      const nextChord = chordToneDegrees(nextChordDegree, bar + 1);
      const leap = glitchMode
        ? Math.floor(rand() * chord.length * 2.6)
        : Math.floor(rand() * chord.length * lerp(0.8, 1.45, state.harmony));
      const chordIndex = Math.abs(Math.round(stepInBar / 2 + contour * 2.2 + cross * state.rhythm + leap)) % chord.length;
      const cadenceStep = stepInBar >= 12 && state.harmony > 0.72 && rand() < 0.34;
      const anchor = cadenceStep
        ? nextChordDegree - chordDegree + nextChord[(chordIndex + 1) % nextChord.length]
        : chord[chordIndex];
      const passing = state.harmony > 0.56 && [3, 7, 11, 15].includes(stepInBar) && rand() < 0.52
        ? (rand() > 0.5 ? 1 : -1)
        : 0;
      const rupture = glitchMode && [1, 6, 11, 14].includes(stepInBar) && rand() < 0.58
        ? (rand() > 0.48 ? 7 : -5)
        : 0;
      const ritualLock = ritualMode ? (stepInBar % 6 === 0 ? 0 : stepInBar % 5 === 0 ? 3 : 0) : 0;
      const rainFall = rainMode && stepInBar % 4 === 3 ? (rand() > 0.5 ? 2 : -2) : 0;
      const clockSnap = clockMode ? (stepInBar % 4 === 0 ? 0 : stepInBar % 4 === 2 ? 4 : 1) : 0;
      const bloomLift = bloomMode && stepInBar >= 8 ? Math.floor(stepInBar / 4) : 0;
      const ferroPull = ferroMode && [2, 5, 9, 14].includes(stepInBar) ? (rand() > 0.45 ? 6 : -4) : 0;
      const harpCascade = harpMode ? (stepInBar % 4) * 2 + (stepInBar >= 8 ? 3 : 0) : 0;
      const orchardFork = orchardMode && stepInBar % 5 === 0 ? (bar % 3) * 2 : 0;
      const choirDrift = choirMode ? (stepInBar >= 8 ? -2 : 2) + (bar % 2 ? 1 : 0) : 0;
      const tidePush = tideMode ? Math.round(Math.sin((stepInBar / 16) * twoPi + bar * 0.5) * 3) : 0;
      const cometJump = cometMode && [1, 4, 10, 15].includes(stepInBar) ? (rand() > 0.5 ? 9 : -6) : 0;
      const foldFlip = foldMode && [1, 5, 9, 13].includes(stepInBar) ? (rand() > 0.5 ? 8 : -3) : 0;
      const jellySway = jellyMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.18) * 2) : 0;
      const spireWeight = spireMode ? (stepInBar >= 8 ? -5 : 0) + (stepInBar % 6 === 0 ? 1 : 0) : 0;
      const tapeWarp = tapeMode && [2, 7, 12, 15].includes(stepInBar) ? (rand() > 0.55 ? 5 : -4) : 0;
      const mothFlutter = mothMode && [1, 3, 6, 10, 14].includes(stepInBar) ? (rand() > 0.5 ? 7 : -2) : 0;
      const circuitJolt = circuitMode && stepInBar % 3 === 1 ? (rand() > 0.5 ? 6 : -5) : 0;
      const iceStill = iceMode ? (stepInBar >= 8 ? -1 : 1) + (bar % 4 === 3 ? 4 : 0) : 0;
      const myceliumFork = myceliumMode && [4, 9, 13].includes(stepInBar) ? (bar % 2 ? 3 : -2) + (rand() > 0.68 ? 7 : 0) : 0;
      const stormCrack = stormMode && [1, 2, 6, 9, 12, 15].includes(stepInBar) ? (rand() > 0.42 ? 8 : -7) : 0;
      const railTurn = railMode ? (stepInBar % 4 === 0 ? 0 : stepInBar % 4 === 2 ? 4 : -1) + (bar % 4 === 3 && stepInBar > 10 ? 5 : 0) : 0;
      const typewriterClack = typewriterMode ? (stepInBar % 2 === 0 ? 0 : 1) + ([5, 11, 15].includes(stepInBar) ? 5 : 0) + (rand() > 0.78 ? 7 : 0) : 0;
      const mazeTurn = mazeMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.09 + state.musicSeed * 0.002) * 4) + ([7, 11].includes(stepInBar) ? 3 : 0) : 0;
      const marbleBounce = marbleMode && [1, 4, 6, 9, 12, 14].includes(stepInBar) ? (stepInBar % 4) * 2 + (rand() > 0.62 ? 7 : 0) : 0;
      const chanceThrow = chanceMode && [1, 4, 7, 10, 13, 15].includes(stepInBar) ? (rand() > 0.5 ? 6 : -3) + (bar % 3) : 0;
      const kitchenHit = kitchenMode ? (stepInBar % 4 === 0 ? -1 : stepInBar % 4 === 2 ? 3 : 0) + ([3, 9, 14].includes(stepInBar) ? 5 : 0) : 0;
      const radioSweep = radioMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.055 + state.musicSeed * 0.001) * 5) + ([5, 13].includes(stepInBar) ? 7 : 0) : 0;
      const stitchNeedle = stitchMode ? (stepInBar % 2 === 0 ? 1 : -1) + ([3, 7, 12, 15].includes(stepInBar) ? 6 : 0) : 0;
      const archiveTurn = archiveMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.075 + state.musicSeed * 0.001) * 3) + ([2, 9, 14].includes(stepInBar) ? -2 : 0) : 0;
      const liftRise = liftMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.12 + state.musicSeed * 0.001) * 5) + ([0, 7, 12].includes(stepInBar) ? 7 : 0) : 0;
      const switchThrow = switchboardMode ? (stepInBar % 2 === 0 ? 0 : 1) + ([2, 5, 9, 13].includes(stepInBar) ? 6 : 0) + (rand() > 0.72 ? 7 : 0) : 0;
      const courtStrike = courtMode ? ([0, 8].includes(stepInBar) ? -5 : 0) + ([5, 13].includes(stepInBar) ? 4 : 0) : 0;
      const weatherBend = weatherMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.14 + state.musicSeed * 0.001) * 4) + ([3, 11, 15].includes(stepInBar) ? 5 : 0) : 0;
      const semaphoreSignal = semaphoreMode ? (stepInBar % 2 === 0 ? 2 : -1) + ([1, 4, 9, 14].includes(stepInBar) ? 7 : 0) + (rand() > 0.74 ? -5 : 0) : 0;
      const pendulumArc = pendulumMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.045 + state.musicSeed * 0.001) * 5) + ([0, 8].includes(stepInBar) ? -7 : 0) : 0;
      const abacusCarry = abacusMode ? (stepInBar % 3) * 2 + ([2, 6, 10, 15].includes(stepInBar) ? 6 : 0) + (bar % 2 ? 1 : -1) : 0;
      const cipherFall = cipherMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.11 + state.musicSeed * 0.001) * 4) + ([3, 7, 11, 15].includes(stepInBar) ? 6 : 0) : 0;
      const orrerySweep = orreryMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.055 + state.musicSeed * 0.001) * 5) + ([0, 8].includes(stepInBar) ? -5 : 0) : 0;
      const reactorPulse = reactorMode ? (stepInBar % 4 === 0 ? -3 : 0) + ([2, 6, 10, 14].includes(stepInBar) ? 7 : 0) + (bar % 2 ? 2 : 0) : 0;
      const phaseShift = phaseMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.17 + state.musicSeed * 0.001) * 5) + ([2, 5, 9, 14].includes(stepInBar) ? 4 : 0) : 0;
      const forgeWeight = forgeMode ? (stepInBar % 4 === 0 ? -6 : 0) + ([3, 10, 15].includes(stepInBar) ? 5 : 0) + (bar % 3 === 2 ? -2 : 0) : 0;
      const oracleFold = oracleMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.07 + state.musicSeed * 0.001) * 6) + ([4, 12].includes(stepInBar) ? 7 : 0) + (bar % 2 ? -2 : 2) : 0;
      const sporeScatter = sporeMode ? (euclideanHit(stepInBar, 7, (bar + state.musicSeed) % 16) ? (rand() > 0.52 ? 5 : -2) : 0) + ([5, 13].includes(stepInBar) ? 7 : 0) : 0;
      const cartogramTurn = cartogramMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.065 + state.musicSeed * 0.001) * 6) + ([3, 8, 14].includes(stepInBar) ? 5 : 0) : 0;
      const quartzGlint = quartzMode ? Math.round(Math.sin((bar * 16 + stepInBar) * 0.042 + state.musicSeed * 0.001) * 5) + ([2, 10].includes(stepInBar) ? 9 : 0) + (bar % 4 === 3 ? -3 : 0) : 0;
      const degree = anchor + passing + rupture + ritualLock + rainFall + clockSnap + bloomLift + ferroPull + harpCascade + orchardFork + choirDrift + tidePush + cometJump + foldFlip + jellySway + spireWeight + tapeWarp + mothFlutter + circuitJolt + iceStill + myceliumFork + stormCrack + railTurn + typewriterClack + mazeTurn + marbleBounce + chanceThrow + kitchenHit + radioSweep + stitchNeedle + archiveTurn + liftRise + switchThrow + courtStrike + weatherBend + semaphoreSignal + pendulumArc + abacusCarry + cipherFall + orrerySweep + reactorPulse + phaseShift + forgeWeight + oracleFold + sporeScatter + cartogramTurn + quartzGlint;
      const syncopated = euclideanHit(i % 16, Math.round((stormMode ? 9 : typewriterMode ? 8 : switchboardMode ? 9 : marbleMode ? 7 : chanceMode ? 7 : stitchMode ? 8 : reactorMode ? 8 : forgeMode ? 7 : kitchenMode ? 6 : phaseMode ? 6 : swarmMode ? 5 : ferroMode ? 6 : cometMode ? 7 : foldMode ? 8 : circuitMode ? 7 : railMode ? 6 : tapeMode ? 6 : mothMode ? 6 : cipherMode ? 5 : spireMode ? 4 : myceliumMode ? 4 : weatherMode ? 4 : orchardMode ? 4 : liftMode ? 4 : mazeMode ? 3 : orreryMode ? 3 : oracleMode ? 3 : radioMode ? 2 : archiveMode ? 2 : courtMode ? 2 : tideMode ? 3 : iceMode ? 2 : 3) + state.rhythm * (stormMode ? 8 : typewriterMode ? 9 : switchboardMode ? 10 : marbleMode ? 8 : chanceMode ? 8 : stitchMode ? 9 : reactorMode ? 9 : forgeMode ? 7 : kitchenMode ? 7 : phaseMode ? 7 : swarmMode ? 9 : ferroMode ? 8 : cometMode ? 8 : foldMode ? 7 : circuitMode ? 8 : railMode ? 9 : tapeMode ? 7 : mothMode ? 8 : cipherMode ? 6 : spireMode ? 5 : myceliumMode ? 5 : weatherMode ? 5 : orchardMode ? 5 : liftMode ? 5 : mazeMode ? 4 : orreryMode ? 3 : oracleMode ? 3 : radioMode ? 3 : archiveMode ? 2 : courtMode ? 2 : tideMode ? 4 : iceMode ? 2 : 6)), state.musicSeed % 16);
      phrase.push({
        degree,
        octave: choirMode ? (stepInBar % 5 === 0 ? 1 : 0) : iceMode ? (rand() > 0.82 ? 2 : 1) : stormMode ? ([1, 6, 12].includes(stepInBar) ? 3 : 1) : typewriterMode ? (stepInBar % 4 === 0 ? 1 : 2) : semaphoreMode ? (stepInBar % 4 === 1 ? 3 : 1) : pendulumMode ? (rand() > 0.72 ? 1 : 0) : abacusMode ? (stepInBar % 3 === 0 ? 2 : 1) : cipherMode ? (rand() > 0.54 ? 2 : 1) : orreryMode ? (stepInBar % 8 === 0 ? 0 : 1) : reactorMode ? (stepInBar % 4 === 0 ? 0 : 2) : phaseMode ? (stepInBar % 5 === 0 ? 2 : 1) : forgeMode ? (stepInBar % 4 === 0 ? -1 : 0) : oracleMode ? (stepInBar % 8 === 4 ? 2 : 1) : sporeMode ? (stepInBar % 3 === 0 ? 2 : 1) : cartogramMode ? (stepInBar >= 8 ? 2 : 1) : quartzMode ? (rand() > 0.68 ? 3 : 1) : switchboardMode ? (stepInBar % 3 === 0 ? 2 : 1) : stitchMode ? (stepInBar % 2 === 0 ? 2 : 1) : chanceMode ? (rand() > 0.45 ? 2 : 1) : kitchenMode ? (stepInBar % 4 === 0 ? 0 : 1) : radioMode ? (rand() > 0.72 ? 3 : 1) : archiveMode || courtMode ? (rand() > 0.76 ? 1 : 0) : liftMode ? (stepInBar >= 8 ? 3 : 1) : weatherMode ? (rand() > 0.58 ? 2 : 1) : marbleMode ? (rand() > 0.38 ? 3 : 2) : railMode ? (stepInBar % 4 === 0 ? 0 : 1) : mazeMode ? (rand() > 0.7 ? 2 : 1) : myceliumMode ? (rand() > 0.62 ? 2 : 1) : jellyMode ? (rand() > 0.78 ? 2 : 1) : spireMode ? (stepInBar % 8 === 0 ? -1 : 0) : tapeMode ? (rand() > 0.58 ? 1 : 0) : circuitMode ? (stepInBar % 4 === 0 ? 2 : 1) : mothMode ? (rand() > 0.42 ? 3 : 2) : foldMode ? (stepInBar % 4 === 1 ? 3 : 2) : tideMode ? (rand() > 0.7 ? 1 : 0) : driftMode || bloomMode || orchardMode ? (rand() > 0.66 ? 2 : 1) : harpMode ? (stepInBar % 6 === 0 ? 3 : 2) : rainMode ? (rand() > 0.42 ? 2 : 1) : rand() > lerp(0.82, 0.48, state.harmony) ? 2 : 1,
        rest: choirMode
          ? (stepInBar % 4 === 0 || stepInBar === 10 || cadenceStep)
          : tideMode
            ? (stepInBar === 0 || stepInBar === 7 || stepInBar === 12 || rand() > 0.78)
          : foldMode
            ? ([1, 2, 5, 9, 13, 15].includes(stepInBar) || syncopated)
          : jellyMode
            ? (stepInBar === 0 || stepInBar === 5 || stepInBar === 11 || rand() > 0.84)
          : spireMode
            ? (stepInBar === 0 || stepInBar === 8 || syncopated)
          : tapeMode
            ? ([0, 3, 7, 10, 12, 15].includes(stepInBar) || rand() > 0.72)
          : mothMode
            ? ([1, 3, 6, 10, 14].includes(stepInBar) || syncopated)
          : circuitMode
            ? (stepInBar % 2 === 0 || syncopated || rand() > 0.68)
          : iceMode
            ? (stepInBar === 0 || stepInBar === 6 || stepInBar === 11 || cadenceStep)
          : semaphoreMode
            ? ([1, 4, 6, 9, 12, 14].includes(stepInBar) || syncopated)
          : pendulumMode
            ? (stepInBar === 0 || stepInBar === 8 || stepInBar === 13 || cadenceStep)
          : abacusMode
            ? (stepInBar % 2 === 1 || [4, 10, 14].includes(stepInBar) || syncopated)
          : cipherMode
            ? (stepInBar === 0 || stepInBar === 3 || stepInBar === 7 || stepInBar === 11 || stepInBar === 15 || syncopated)
          : orreryMode
            ? (stepInBar === 0 || stepInBar === 5 || stepInBar === 8 || stepInBar === 13 || cadenceStep)
          : reactorMode
            ? (stepInBar % 2 === 0 || [3, 6, 10, 14].includes(stepInBar) || syncopated)
          : phaseMode
            ? ([0, 2, 5, 9, 14].includes(stepInBar) || syncopated)
          : forgeMode
            ? (stepInBar % 4 === 0 || [3, 10, 15].includes(stepInBar) || syncopated)
          : oracleMode
            ? (stepInBar === 0 || stepInBar === 4 || stepInBar === 8 || stepInBar === 12 || cadenceStep)
          : sporeMode
            ? (stepInBar % 2 === 0 || [3, 5, 10, 13].includes(stepInBar) || syncopated)
          : cartogramMode
            ? (stepInBar === 0 || stepInBar === 3 || stepInBar === 7 || stepInBar === 11 || stepInBar === 15 || cadenceStep)
          : quartzMode
            ? (stepInBar === 0 || stepInBar === 2 || stepInBar === 8 || stepInBar === 10 || cadenceStep)
          : myceliumMode
            ? ([0, 5, 9, 13].includes(stepInBar) || (syncopated && rand() > 0.2))
          : stormMode
            ? ([0, 1, 2, 6, 9, 12, 15].includes(stepInBar) || syncopated)
          : railMode
            ? (stepInBar % 2 === 0 || stepInBar === 7 || stepInBar === 11 || syncopated)
          : typewriterMode
            ? ([0, 1, 3, 5, 8, 10, 12, 15].includes(stepInBar) || syncopated)
          : mazeMode
            ? (stepInBar === 0 || stepInBar === 7 || stepInBar === 11 || cadenceStep)
          : marbleMode
            ? ([1, 4, 6, 9, 12, 14].includes(stepInBar) || syncopated)
          : chanceMode
            ? ([1, 4, 7, 10, 13, 15].includes(stepInBar) || syncopated || rand() > 0.76)
          : kitchenMode
            ? ([0, 3, 6, 9, 12, 14].includes(stepInBar) || syncopated)
          : radioMode
            ? (stepInBar === 0 || stepInBar === 5 || stepInBar === 13 || cadenceStep || rand() > 0.82)
          : stitchMode
            ? (stepInBar % 2 === 0 || [3, 7, 12, 15].includes(stepInBar) || syncopated)
          : archiveMode
            ? (stepInBar === 2 || stepInBar === 9 || stepInBar === 14 || cadenceStep || rand() > 0.84)
          : liftMode
            ? (stepInBar === 0 || stepInBar === 7 || stepInBar === 12 || syncopated || rand() > 0.78)
          : switchboardMode
            ? (stepInBar % 2 === 1 || [2, 5, 9, 13].includes(stepInBar) || syncopated)
          : courtMode
            ? (stepInBar === 0 || stepInBar === 5 || stepInBar === 8 || stepInBar === 13 || cadenceStep)
          : weatherMode
            ? (stepInBar === 0 || stepInBar === 3 || stepInBar === 7 || stepInBar === 11 || stepInBar === 15 || syncopated)
          : driftMode || bloomMode || orchardMode
            ? (stepInBar % 4 === 0 || cadenceStep || rand() > 0.7)
          : ritualMode
            ? (stepInBar === 0 || stepInBar === 6 || stepInBar === 10 || syncopated)
            : rainMode
              ? (stepInBar % 3 !== 1 && rand() > 0.28)
              : clockMode
                ? (stepInBar % 2 === 0 || syncopated)
                : ferroMode
                  ? ([0, 2, 5, 9, 13].includes(stepInBar) || syncopated)
                  : harpMode
                    ? (stepInBar % 2 === 0 || stepInBar % 5 === 0 || cadenceStep)
                    : cometMode
                      ? ([0, 1, 4, 7, 10, 15].includes(stepInBar) || syncopated)
            : syncopated || cadenceStep || rand() > lerp(glitchMode ? 0.34 : 0.46, 0.08, state.complexity),
        accent: cadenceStep || syncopated || glitchMode || rand() > lerp(0.84, 0.56, state.rhythm),
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
    const fastCycle = state.rhythm > 0.74 || ["polyrhythm", "swarm", "glitch", "clockwork", "ferro", "comet", "fold", "tape", "moth", "circuit", "storm", "rail", "typewriter", "marble", "chance", "kitchen", "stitch", "lift", "switchboard", "semaphore", "abacus", "cipher", "reactor", "phase", "forge", "spore", "cartogram"].includes(state.musicMode);
    const chordCycle = state.musicMode === "drift"
      ? Math.floor(bar / 4)
      : state.musicMode === "choir"
        ? Math.floor(bar / 4)
      : state.musicMode === "ice"
        ? Math.floor(bar / 4)
      : state.musicMode === "tide"
        ? Math.floor(bar / 3 + (bar % 8 === 7 ? 1 : 0))
      : state.musicMode === "jelly"
        ? Math.floor(bar / 4 + (bar % 8 === 6 ? 1 : 0))
      : state.musicMode === "spire"
        ? Math.floor(bar / 2 + (bar % 6 === 5 ? 1 : 0))
      : state.musicMode === "moth"
        ? Math.floor(bar / 2)
      : state.musicMode === "circuit"
        ? bar
      : state.musicMode === "mycelium"
        ? Math.floor(bar / 3 + (bar % 6 === 4 ? 1 : 0))
      : state.musicMode === "storm"
        ? Math.floor(bar * 1.25 + (bar % 4 === 3 ? 1 : 0))
      : state.musicMode === "rail"
        ? bar + (bar % 4 === 3 ? 1 : 0)
      : state.musicMode === "typewriter"
        ? bar
      : state.musicMode === "maze"
        ? Math.floor(bar / 4 + (bar % 8 === 7 ? 1 : 0))
      : state.musicMode === "marble"
        ? Math.floor(bar / 2 + (bar % 4 === 3 ? 1 : 0))
      : state.musicMode === "chance"
        ? Math.floor(bar * 1.5 + (bar % 3 === 2 ? 1 : 0))
      : state.musicMode === "kitchen"
        ? bar + (bar % 4 === 2 ? 1 : 0)
      : state.musicMode === "radio"
        ? Math.floor(bar / 4 + (bar % 8 === 5 ? 1 : 0))
      : state.musicMode === "stitch"
        ? bar + (bar % 4 === 1 ? 1 : 0)
      : state.musicMode === "archive"
        ? Math.floor(bar / 4 + (bar % 8 === 6 ? 1 : 0))
      : state.musicMode === "lift"
        ? Math.floor(bar / 2 + (bar % 4 === 3 ? 1 : 0))
      : state.musicMode === "switchboard"
        ? bar + (bar % 4 === 3 ? 1 : 0)
      : state.musicMode === "court"
        ? Math.floor(bar / 4 + (bar % 8 === 7 ? 1 : 0))
      : state.musicMode === "weather"
        ? Math.floor(bar / 3 + (bar % 6 === 5 ? 1 : 0))
      : state.musicMode === "semaphore"
        ? bar + (bar % 3 === 2 ? 1 : 0)
      : state.musicMode === "pendulum"
        ? Math.floor(bar / 4 + (bar % 8 === 7 ? 1 : 0))
      : state.musicMode === "abacus"
        ? Math.floor(bar * 1.25 + (bar % 4 === 3 ? 1 : 0))
      : state.musicMode === "cipher"
        ? Math.floor(bar / 2 + (bar % 4 === 3 ? 1 : 0))
      : state.musicMode === "orrery"
        ? Math.floor(bar / 4 + (bar % 8 === 7 ? 1 : 0))
      : state.musicMode === "reactor"
        ? bar + (bar % 4 === 0 ? 0 : bar % 4 === 2 ? 1 : 0)
      : state.musicMode === "phase"
        ? Math.floor(bar / 2 + (bar % 4 === 1 ? 1 : 0))
      : state.musicMode === "forge"
        ? Math.floor(bar * 0.75 + (bar % 4 === 3 ? 1 : 0))
      : state.musicMode === "oracle"
        ? Math.floor(bar / 4 + (bar % 8 === 4 ? 1 : 0))
      : state.musicMode === "spore"
        ? bar + (bar % 3 === 2 ? 1 : 0)
      : state.musicMode === "cartogram"
        ? Math.floor(bar / 2 + (bar % 4 === 3 ? 1 : 0))
      : state.musicMode === "quartz"
        ? Math.floor(bar / 4 + (bar % 8 === 6 ? 1 : 0))
      : state.musicMode === "bloom"
        ? Math.floor(bar / 3)
        : state.musicMode === "rain"
          ? Math.floor(bar / 2 + (bar % 4 === 3 ? 1 : 0))
      : state.musicMode === "harp"
        ? Math.floor(bar / 2)
      : state.musicMode === "orchard"
        ? Math.floor(bar / 3 + (bar % 6 === 5 ? 1 : 0))
      : state.musicMode === "ritual"
        ? Math.floor(bar * 1.5)
        : fastCycle
          ? bar
          : Math.floor(bar / 2);
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
    const glitchMode = state.musicMode === "glitch";
    const ritualMode = state.musicMode === "ritual";
    const driftMode = state.musicMode === "drift";
    const swarmMode = state.musicMode === "swarm";
    const rainMode = state.musicMode === "rain";
    const clockMode = state.musicMode === "clockwork";
    const bloomMode = state.musicMode === "bloom";
    const ferroMode = state.musicMode === "ferro";
    const harpMode = state.musicMode === "harp";
    const orchardMode = state.musicMode === "orchard";
    const choirMode = state.musicMode === "choir";
    const tideMode = state.musicMode === "tide";
    const cometMode = state.musicMode === "comet";
    const foldMode = state.musicMode === "fold";
    const jellyMode = state.musicMode === "jelly";
    const spireMode = state.musicMode === "spire";
    const tapeMode = state.musicMode === "tape";
    const mothMode = state.musicMode === "moth";
    const circuitMode = state.musicMode === "circuit";
    const iceMode = state.musicMode === "ice";
    const myceliumMode = state.musicMode === "mycelium";
    const stormMode = state.musicMode === "storm";
    const railMode = state.musicMode === "rail";
    const typewriterMode = state.musicMode === "typewriter";
    const mazeMode = state.musicMode === "maze";
    const marbleMode = state.musicMode === "marble";
    const chanceMode = state.musicMode === "chance";
    const kitchenMode = state.musicMode === "kitchen";
    const radioMode = state.musicMode === "radio";
    const stitchMode = state.musicMode === "stitch";
    const archiveMode = state.musicMode === "archive";
    const liftMode = state.musicMode === "lift";
    const switchboardMode = state.musicMode === "switchboard";
    const courtMode = state.musicMode === "court";
    const weatherMode = state.musicMode === "weather";
    const semaphoreMode = state.musicMode === "semaphore";
    const pendulumMode = state.musicMode === "pendulum";
    const abacusMode = state.musicMode === "abacus";
    const cipherMode = state.musicMode === "cipher";
    const orreryMode = state.musicMode === "orrery";
    const reactorMode = state.musicMode === "reactor";
    const phaseMode = state.musicMode === "phase";
    const forgeMode = state.musicMode === "forge";
    const oracleMode = state.musicMode === "oracle";
    const sporeMode = state.musicMode === "spore";
    const cartogramMode = state.musicMode === "cartogram";
    const quartzMode = state.musicMode === "quartz";
    const rhythmPulse = euclideanHit(
      stepInBar,
      Math.round((stormMode ? 9 : switchboardMode ? 9 : semaphoreMode ? 8 : typewriterMode ? 8 : stitchMode ? 8 : sporeMode ? 8 : abacusMode ? 8 : reactorMode ? 7 : forgeMode ? 7 : marbleMode ? 7 : chanceMode ? 7 : kitchenMode ? 6 : cartogramMode ? 6 : phaseMode ? 6 : swarmMode ? 5 : ferroMode ? 6 : cometMode ? 7 : foldMode ? 8 : circuitMode ? 7 : railMode ? 6 : tapeMode ? 6 : mothMode ? 6 : cipherMode ? 5 : quartzMode ? 4 : spireMode ? 4 : clockMode ? 4 : myceliumMode ? 4 : liftMode ? 4 : weatherMode ? 4 : mazeMode ? 3 : orreryMode ? 3 : oracleMode ? 3 : radioMode ? 2 : archiveMode ? 2 : courtMode ? 2 : pendulumMode ? 2 : orchardMode ? 4 : tideMode ? 3 : jellyMode ? 2 : iceMode ? 2 : 3) + state.rhythm * (stormMode ? 8 : switchboardMode ? 10 : semaphoreMode ? 9 : typewriterMode ? 9 : stitchMode ? 9 : sporeMode ? 9 : abacusMode ? 9 : reactorMode ? 9 : forgeMode ? 8 : marbleMode ? 8 : chanceMode ? 8 : kitchenMode ? 7 : cartogramMode ? 7 : phaseMode ? 7 : swarmMode ? 9 : ferroMode ? 8 : cometMode ? 8 : foldMode ? 7 : circuitMode ? 8 : railMode ? 9 : tapeMode ? 7 : mothMode ? 8 : cipherMode ? 6 : quartzMode ? 4 : spireMode ? 5 : clockMode ? 8 : myceliumMode ? 5 : liftMode ? 5 : weatherMode ? 5 : mazeMode ? 4 : orreryMode ? 3 : oracleMode ? 3 : radioMode ? 3 : archiveMode ? 2 : courtMode ? 2 : pendulumMode ? 2 : orchardMode ? 5 : tideMode ? 4 : jellyMode ? 3 : iceMode ? 2 : 7)),
      (bar + state.musicSeed) % 16,
    );

    if (stepInBar === 0 || (state.harmony > 0.64 && stepInBar === 8)) {
      scheduleHarmonyVoicing(swungTime, stepInBar >= 8 && state.harmony > 0.72 ? nextChordDegree : chordDegree, bar, 0.12);
    }

    if (stepInBar === 0 || (stepInBar === 8 && state.complexity > 0.42) || (state.harmony > 0.72 && stepInBar === 12)) {
      const padDegree = stepInBar >= 12 && state.harmony > 0.78 ? nextChordDegree : chordDegree;
      playChordPad(swungTime, padDegree, beat * (ambient || driftMode || bloomMode || orchardMode || choirMode || jellyMode || iceMode || myceliumMode || mazeMode || radioMode || archiveMode || courtMode || pendulumMode || orreryMode || oracleMode || quartzMode ? 9.6 : cartogramMode ? 8.2 : spireMode ? 8.4 : tideMode ? 7.8 : weatherMode ? 7.2 : harpMode ? 7.2 : cipherMode ? 6.8 : rainMode ? 6.8 : phaseMode ? 6.2 : stormMode ? 5.8 : kitchenMode ? 5.4 : tapeMode ? 5.2 : chanceMode ? 5.0 : marbleMode ? 4.8 : reactorMode ? 4.8 : forgeMode ? 4.2 : sporeMode ? 4.0 : liftMode ? 4.6 : railMode ? 4.2 : stitchMode ? 3.8 : switchboardMode ? 3.2 : semaphoreMode ? 2.8 : abacusMode ? 3.0 : typewriterMode ? 3.6 : euphoric ? 5.6 : ritualMode ? 6.4 : 4.4), stepInBar >= 12 ? bar + 1 : bar);
      hitMusicReactive("chord", 0.9 + state.drone * 0.2);
      sequencerPulse = Math.max(sequencerPulse, 0.75);
    }

    if (state.harmony > 0.48 && (stepInBar === 3 || stepInBar === 10 || (euphoric && stepInBar === 14))) {
      playChordStab(swungTime + beat * 0.015, stepInBar > 8 ? nextChordDegree : chordDegree, beat, stepInBar > 8 ? bar + 1 : bar);
      hitMusicReactive("chord", 0.42 + state.harmony * 0.5);
    }

    const bassSteps = ritualMode
      ? [0, 5, 8, 10, 13]
      : ferroMode
        ? [0, 2, 7, 9, 14]
      : circuitMode
        ? [0, 4, 8, 12, 14]
      : mothMode
        ? [0, 7, 11]
      : iceMode
        ? [0]
      : myceliumMode
        ? [0, 5, 9, 13]
      : stormMode
        ? [0, 2, 8, 12, 15]
      : railMode
        ? [0, 3, 6, 8, 11, 14]
      : typewriterMode
        ? [0, 4, 8, 12]
      : mazeMode
        ? [0, 8]
      : marbleMode
        ? [0, 5, 10, 14]
      : chanceMode
        ? [0, 4, 7, 11, 15]
      : kitchenMode
        ? [0, 3, 6, 9, 12, 14]
      : radioMode
        ? [0, 8]
      : stitchMode
        ? [0, 4, 8, 12]
      : archiveMode
        ? [0, 8, 14]
      : liftMode
        ? [0, 7, 12]
      : switchboardMode
        ? [0, 2, 4, 7, 9, 12, 14]
      : courtMode
        ? [0, 8]
      : weatherMode
        ? [0, 5, 10, 15]
      : semaphoreMode
        ? [0, 2, 5, 8, 11, 14]
      : pendulumMode
        ? [0, 8]
      : abacusMode
        ? [0, 3, 6, 9, 12, 15]
      : cipherMode
        ? [0, 5, 9, 13]
      : orreryMode
        ? [0, 8]
      : reactorMode
        ? [0, 2, 6, 8, 10, 14]
      : phaseMode
        ? [0, 5, 9, 14]
      : forgeMode
        ? [0, 3, 8, 12, 15]
      : oracleMode
        ? [0, 8, 12]
      : sporeMode
        ? [0, 3, 6, 10, 13]
      : cartogramMode
        ? [0, 7, 11, 15]
      : quartzMode
        ? [0, 8]
      : spireMode
        ? [0, 8, 12]
      : tapeMode
        ? [0, 5, 10, 14]
      : foldMode
        ? [0, 6, 9, 13]
      : tideMode
        ? [0, 8, 11, 15]
      : jellyMode
        ? [0, 12]
      : cometMode
        ? [0, 3, 8, 13]
      : clockMode
        ? [0, 4, 7, 10, 12, 15]
      : pulseMode || polyMode || glitchMode
        ? [0, 3, 6, 8, 11, 14]
        : [0, 6, 8, 14];
    const bassEuclid = state.rhythm > 0.5 && euclideanHit(stepInBar, Math.round(3 + state.rhythm * 4), (bar * 3 + state.musicSeed) % 16);
    if (state.bass > 0.03 && (bassSteps.includes(stepInBar) || bassEuclid)) {
      const passing = state.harmony > 0.62 && (bassEuclid || stepInBar >= 14) && ![0, 8].includes(stepInBar) ? nextChordDegree : chordDegree;
      playGeneratedBass(swungTime, passing, beat * (pulseMode || polyMode || ritualMode || glitchMode || clockMode || ferroMode || cometMode || foldMode || tapeMode || circuitMode || mothMode || stormMode || railMode || typewriterMode || marbleMode || chanceMode || kitchenMode || stitchMode || switchboardMode || semaphoreMode || abacusMode || reactorMode || forgeMode || sporeMode ? 0.58 : quartzMode ? 3.0 : pendulumMode ? 2.8 : courtMode ? 2.6 : iceMode || orreryMode ? 2.4 : archiveMode ? 2.2 : radioMode ? 2.0 : cartogramMode ? 1.9 : jellyMode ? 1.8 : weatherMode ? 1.6 : mazeMode ? 1.5 : spireMode ? 1.45 : cipherMode ? 1.4 : phaseMode ? 1.25 : liftMode ? 1.35 : myceliumMode ? 1.2 : tideMode ? 1.1 : oracleMode ? 1.8 : 0.78));
      hitMusicReactive("bass", 0.72 + state.bass * 0.42);
      sequencerPulse = Math.max(sequencerPulse, 0.55 + state.bass * 0.3);
    }

    const arpEvery = swarmMode || glitchMode || clockMode || harpMode || cometMode || foldMode || tapeMode || circuitMode || mothMode || stormMode || railMode || typewriterMode || marbleMode || chanceMode || kitchenMode || stitchMode || switchboardMode || semaphoreMode || sporeMode || abacusMode || cipherMode || reactorMode || phaseMode || state.complexity > 0.72 || state.rhythm > 0.82 ? 1 : rainMode || ferroMode || tideMode || myceliumMode || liftMode || weatherMode || cartogramMode ? 2 : iceMode ? 8 : jellyMode || spireMode || mazeMode || radioMode || archiveMode || courtMode || pendulumMode || orreryMode || oracleMode || quartzMode ? 4 : forgeMode ? 8 : state.complexity > 0.38 ? 2 : 4;
    if (state.arp > 0.04 && stepInBar % arpEvery === 0 && (!(ambient || driftMode || bloomMode || orchardMode || choirMode || tideMode || jellyMode || spireMode) || stepInBar % 4 === 0)) {
      const arpPattern = state.harmony > 0.65
        ? (glitchMode ? [0, 5, 1, 8, 2, 10, 4, 11] : mothMode ? [0, 7, 2, 10, 4, 12, 5, 9] : circuitMode ? [0, 1, 6, 2, 8, 3, 11, 5] : iceMode ? [0, 4, 9, 13, 11, 6] : myceliumMode ? [0, 2, 5, 9, 3, 7, 11, 4] : stormMode ? [0, 8, 1, 13, 6, 15, 2, 11] : railMode ? [0, 4, 0, 5, 2, 6, 0, 3] : typewriterMode ? [0, 1, 4, 2, 5, 1, 6, 3] : mazeMode ? [0, 4, 7, 11, 6, 2, 9, 5] : marbleMode ? [0, 5, 2, 9, 4, 11, 6, 13] : chanceMode ? [0, 6, 1, 11, 3, 13, 2, 9] : kitchenMode ? [0, 3, 5, 2, 7, 4, 9, 6] : radioMode ? [0, 7, 11, 4, 13, 6, 9, 2] : stitchMode ? [0, 1, 4, 2, 7, 3, 9, 5] : archiveMode ? [0, 5, 9, 12, 7, 4, 2, 11] : liftMode ? [0, 4, 7, 12, 9, 5, 2, 14] : switchboardMode ? [0, 1, 6, 2, 8, 3, 11, 5] : semaphoreMode ? [0, 7, 1, 8, 2, 9, 4, 11] : pendulumMode ? [0, 4, 7, 12, 7, 4, 0, -5] : abacusMode ? [0, 2, 4, 7, 11, 5, 9, 13] : cipherMode ? [0, 1, 4, 6, 10, 13, 8, 3] : orreryMode ? [0, 4, 7, 11, 14, 7, 4, 0] : reactorMode ? [0, 6, 1, 8, 3, 10, 5, 12] : phaseMode ? [0, 3, 1, 6, 2, 8, 4, 11] : forgeMode ? [0, -5, 0, 6, 1, 0, 5, 2] : oracleMode ? [0, 4, 7, 11, 7, 4, 2, -1] : sporeMode ? [0, 1, 5, 2, 8, 3, 10, 6] : cartogramMode ? [0, 6, 2, 9, 4, 11, 7, 13] : quartzMode ? [0, 4, 9, 16, 11, 6, 2, 14] : courtMode ? [0, 5, 7, 12, 10, 6, 3, 1] : weatherMode ? [0, 2, 5, 9, 4, 8, 11, 6] : foldMode ? [0, 8, 1, 6, 13, 2, 9, 4] : tapeMode ? [0, 3, 7, 2, 8, 1, 6, 10] : cometMode ? [0, 8, 1, 11, 3, 13, 5, 15] : ferroMode ? [0, 6, 1, 8, 3, 10, 2, 7] : harpMode ? [0, 4, 9, 13, 11, 6, 4, 2] : clockMode ? [0, 3, 6, 2, 5, 1, 4, 7] : [0, 2, 4, 6, 8, 6, 4, 2, 5, 7, 9, 7])
        : [0, 2, 4, 6, 4, 2, 5, 7];
      const chordPattern = chordToneDegrees(chordDegree, bar);
      const arpDegree = state.harmony > 0.55
        ? chordPattern[(step + Math.floor(step / 4)) % chordPattern.length]
        : arpPattern[step % arpPattern.length];
      playArpVoice(swungTime, chordDegree + arpDegree, step, beat * 0.72);
      hitMusicReactive("arp", 0.44 + state.arp * 0.46);
    }

    if (glitchMode && state.percussion > 0.04 && (euclideanHit(stepInBar, 7, (bar * 3 + state.musicSeed) % 16) || [2, 13].includes(stepInBar))) {
      playGlitchGrain(swungTime + beat * 0.005, step, beat);
      hitMusicReactive("percussion", 0.52 + state.rhythm * 0.28);
    }

    if (ritualMode && state.percussion > 0.04 && euclideanHit(stepInBar, 5, (bar + 3) % 16)) {
      playRitualHit(swungTime, chordDegree + (stepInBar > 7 ? 3 : 0), beat);
      hitMusicReactive("percussion", 0.7 + state.bass * 0.2);
    }

    if (driftMode && state.drone > 0.2 && (stepInBar === 2 || stepInBar === 10)) {
      playBreathNoise(swungTime + beat * 0.04, beat);
      hitMusicReactive("chord", 0.26 + state.drone * 0.22);
    }

    if (swarmMode && state.arp > 0.08 && euclideanHit(stepInBar, 9, (bar * 5 + state.musicSeed) % 16)) {
      playSwarmPip(swungTime + beat * 0.01, chordDegree + chordToneDegrees(chordDegree, bar)[stepInBar % chordToneDegrees(chordDegree, bar).length], step, beat);
      hitMusicReactive("arp", 0.58 + state.arp * 0.22);
    }

    if (rainMode && state.shimmer > 0.08 && (euclideanHit(stepInBar, 6, (bar * 2 + state.musicSeed) % 16) || stepInBar === 15)) {
      playRainBell(swungTime + beat * 0.02, chordDegree + chordToneDegrees(chordDegree, bar)[(stepInBar + bar) % chordToneDegrees(chordDegree, bar).length], step, beat);
      hitMusicReactive("melody", 0.38 + state.shimmer * 0.3);
    }

    if (clockMode && state.percussion > 0.02) {
      playClockTick(swungTime, step, beat);
      if (stepInBar === 0 || stepInBar === 8 || rhythmPulse) {
        playClockBell(swungTime + beat * 0.02, chordDegree + (stepInBar >= 8 ? 4 : 0), beat);
        hitMusicReactive("percussion", 0.62 + state.rhythm * 0.25);
      }
    }

    if (bloomMode && state.melody > 0.08 && (stepInBar === 4 || stepInBar === 11 || rhythmPulse)) {
      playBloomPulse(swungTime + beat * 0.04, chordDegree, bar, beat);
      hitMusicReactive("chord", 0.46 + state.harmony * 0.28);
    }

    if (ferroMode && (euclideanHit(stepInBar, 7, (bar * 2 + state.musicSeed) % 16) || [2, 9, 14].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playFerroSlide(swungTime + beat * 0.01, chordDegree + chord[(stepInBar + bar * 2) % chord.length], step, beat);
      hitMusicReactive("bass", 0.58 + state.bass * 0.32);
    }

    if (harpMode && state.arp > 0.08 && (stepInBar % 2 === 0 || stepInBar === 15)) {
      const chord = chordToneDegrees(chordDegree, bar);
      const degree = chordDegree + chord[(stepInBar + Math.floor(step / 3)) % chord.length] + (stepInBar >= 8 ? 7 : 0);
      playSolarHarpPluck(swungTime + beat * 0.012, degree, step, beat);
      hitMusicReactive("arp", 0.5 + state.arp * 0.24);
    }

    if (orchardMode && state.melody > 0.08 && (stepInBar === 0 || stepInBar === 5 || stepInBar === 11 || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playOrchardSeed(swungTime + beat * 0.035, chordDegree + chord[(bar + stepInBar) % chord.length], step, beat);
      hitMusicReactive("melody", 0.46 + state.melody * 0.28);
    }

    if (choirMode && state.harmony > 0.12 && (stepInBar === 0 || stepInBar === 6 || stepInBar === 10 || stepInBar === 14)) {
      playChoirVowel(swungTime + beat * 0.02, chordDegree, bar, stepInBar, beat);
      hitMusicReactive("chord", 0.54 + state.harmony * 0.3);
    }

    if (tideMode && (stepInBar === 0 || stepInBar === 8 || rhythmPulse)) {
      playTidalSurge(swungTime + beat * 0.04, chordDegree + (stepInBar >= 8 ? 4 : 0), step, beat);
      hitMusicReactive("bass", 0.48 + state.bass * 0.3);
    }

    if (cometMode && (euclideanHit(stepInBar, 8, (bar * 3 + state.musicSeed) % 16) || [1, 10, 15].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playCometRune(swungTime + beat * 0.005, chordDegree + chord[(step + bar) % chord.length] + (stepInBar > 8 ? 7 : 0), step, beat);
      hitMusicReactive("arp", 0.58 + state.arp * 0.25);
    }

    if (foldMode && (euclideanHit(stepInBar, 9, (bar * 5 + state.musicSeed) % 16) || [2, 6, 11, 15].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playFoldSnap(swungTime + beat * 0.006, chordDegree + chord[(stepInBar + bar) % chord.length] + (stepInBar % 4 === 1 ? 7 : 0), step, beat);
      hitMusicReactive("percussion", 0.44 + state.rhythm * 0.34);
    }

    if (jellyMode && state.harmony > 0.12 && (stepInBar === 0 || stepInBar === 5 || stepInBar === 11 || (rhythmPulse && stepInBar % 4 === 2))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playJellyBloom(swungTime + beat * 0.08, chordDegree + chord[(bar + stepInBar) % chord.length], step, beat);
      hitMusicReactive("chord", 0.38 + state.harmony * 0.3);
    }

    if (spireMode && (stepInBar === 0 || stepInBar === 8 || (state.percussion > 0.35 && rhythmPulse))) {
      playSpireToll(swungTime + beat * 0.02, chordDegree + (stepInBar >= 8 ? -5 : 0), stepInBar, beat);
      hitMusicReactive("bass", 0.64 + state.bass * 0.32);
    }

    if (tapeMode && (euclideanHit(stepInBar, 6, (bar * 7 + state.musicSeed) % 16) || [3, 12, 15].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playTapeSplice(swungTime + beat * 0.012, chordDegree + chord[(step + stepInBar) % chord.length], step, beat);
      hitMusicReactive("melody", 0.46 + state.groove * 0.3);
    }

    if (mothMode && state.arp > 0.08 && (euclideanHit(stepInBar, 8, (bar * 4 + state.musicSeed) % 16) || [1, 6, 14].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playMothFlutter(swungTime + beat * 0.018, chordDegree + chord[(stepInBar + bar * 2) % chord.length] + (stepInBar > 8 ? 7 : 0), step, beat);
      hitMusicReactive("arp", 0.5 + state.arp * 0.32);
    }

    if (circuitMode && (stepInBar % 2 === 0 || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playCircuitBurst(swungTime + beat * 0.004, chordDegree + chord[(step + bar) % chord.length], step, beat);
      hitMusicReactive("percussion", 0.55 + state.rhythm * 0.34);
    }

    if (iceMode && state.harmony > 0.12 && (stepInBar === 0 || stepInBar === 8 || (bar % 4 === 3 && stepInBar === 12))) {
      playIceOrganChord(swungTime + beat * 0.04, stepInBar >= 8 ? nextChordDegree : chordDegree, bar, beat);
      hitMusicReactive("chord", 0.62 + state.harmony * 0.3);
    }

    if (myceliumMode && (euclideanHit(stepInBar, 5, (bar * 3 + state.musicSeed) % 16) || [5, 13].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playMyceliumSpore(swungTime + beat * 0.03, chordDegree + chord[(bar + stepInBar) % chord.length], step, beat);
      hitMusicReactive("melody", 0.42 + state.melody * 0.28);
    }

    if (stormMode && (euclideanHit(stepInBar, 7, (bar * 5 + state.musicSeed) % 16) || [1, 6, 12, 15].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playThunderStrike(swungTime + beat * 0.004, chordDegree + chord[(step + bar) % chord.length] + (stepInBar > 8 ? 7 : 0), step, beat);
      hitMusicReactive("percussion", 0.68 + state.percussion * 0.32);
    }

    if (railMode && (stepInBar % 3 === 0 || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playRailClack(swungTime + beat * 0.01, chordDegree + chord[(stepInBar + Math.floor(step / 2)) % chord.length], step, beat);
      hitMusicReactive(stepInBar % 4 === 0 ? "bass" : "percussion", 0.56 + state.rhythm * 0.26);
    }

    if (typewriterMode && state.percussion > 0.04 && (stepInBar % 2 === 0 || [1, 5, 11, 15].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playTypewriterClack(swungTime + beat * 0.006, chordDegree + chord[(stepInBar + bar) % chord.length], step, beat);
      hitMusicReactive("percussion", 0.62 + state.percussion * 0.3);
    }

    if (mazeMode && state.harmony > 0.15 && (stepInBar === 0 || stepInBar === 7 || stepInBar === 11 || (rhythmPulse && stepInBar % 4 === 1))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playMazeEcho(swungTime + beat * 0.08, chordDegree + chord[(bar + stepInBar) % chord.length], step, beat);
      hitMusicReactive("chord", 0.46 + state.harmony * 0.32);
    }

    if (marbleMode && state.arp > 0.08 && (euclideanHit(stepInBar, 8, (bar * 7 + state.musicSeed) % 16) || [4, 10, 14].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playMarbleBounce(swungTime + beat * 0.008, chordDegree + chord[(step + stepInBar) % chord.length] + (stepInBar >= 8 ? 7 : 0), step, beat);
      hitMusicReactive("arp", 0.56 + state.arp * 0.28);
    }

    if (chanceMode && (euclideanHit(stepInBar, 7, (bar * 9 + state.musicSeed) % 16) || [1, 7, 13, 15].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playChanceThrow(swungTime + beat * 0.006, chordDegree + chord[(step + bar * 3) % chord.length] + (stepInBar > 8 ? 7 : 0), step, beat);
      hitMusicReactive(stepInBar % 4 === 1 ? "arp" : "percussion", 0.58 + state.rhythm * 0.28);
    }

    if (kitchenMode && state.percussion > 0.04 && (stepInBar % 3 === 0 || [4, 10, 14].includes(stepInBar) || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playKitchenClang(swungTime + beat * 0.012, chordDegree + chord[(stepInBar + bar) % chord.length], step, beat);
      hitMusicReactive("percussion", 0.6 + state.percussion * 0.3);
    }

    if (radioMode && state.harmony > 0.12 && (stepInBar === 0 || stepInBar === 5 || stepInBar === 13 || (rhythmPulse && stepInBar % 4 === 1))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playRadioPing(swungTime + beat * 0.04, chordDegree + chord[(bar + stepInBar) % chord.length] + (stepInBar >= 8 ? 7 : 0), step, beat);
      hitMusicReactive("chord", 0.48 + state.harmony * 0.32);
    }

    if (stitchMode && (stepInBar % 2 === 0 || [3, 7, 12, 15].includes(stepInBar) || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playStitchNeedle(swungTime + beat * 0.004, chordDegree + chord[(step + stepInBar) % chord.length] + (stepInBar > 8 ? 7 : 0), step, beat);
      hitMusicReactive(stepInBar % 4 === 0 ? "arp" : "percussion", 0.58 + state.rhythm * 0.3);
    }

    if (archiveMode && state.harmony > 0.12 && (stepInBar === 2 || stepInBar === 9 || stepInBar === 14 || (rhythmPulse && stepInBar % 4 === 2))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playArchivePage(swungTime + beat * 0.06, chordDegree + chord[(bar + stepInBar) % chord.length], step, beat);
      hitMusicReactive("chord", 0.5 + state.harmony * 0.28);
    }

    if (liftMode && (stepInBar === 0 || stepInBar === 7 || stepInBar === 12 || (rhythmPulse && stepInBar % 4 === 3))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playLiftDing(swungTime + beat * 0.02, chordDegree + chord[(stepInBar + bar) % chord.length] + (stepInBar >= 8 ? 7 : 0), step, beat);
      hitMusicReactive("melody", 0.54 + state.melody * 0.3);
    }

    if (switchboardMode && (stepInBar % 2 === 1 || [2, 5, 9, 13].includes(stepInBar) || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playSwitchClick(swungTime + beat * 0.004, chordDegree + chord[(step + bar) % chord.length] + (stepInBar > 8 ? 7 : 0), step, beat);
      hitMusicReactive(stepInBar % 4 === 1 ? "percussion" : "arp", 0.62 + state.rhythm * 0.3);
    }

    if (courtMode && state.harmony > 0.16 && (stepInBar === 0 || stepInBar === 5 || stepInBar === 8 || stepInBar === 13)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playCourtStrike(swungTime + beat * 0.03, chordDegree + chord[(bar + stepInBar) % chord.length] + (stepInBar >= 8 ? -5 : 0), step, beat);
      hitMusicReactive("chord", 0.56 + state.harmony * 0.3);
    }

    if (weatherMode && (stepInBar === 0 || stepInBar === 3 || stepInBar === 7 || stepInBar === 11 || stepInBar === 15 || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playWeatherPressure(swungTime + beat * 0.025, chordDegree + chord[(stepInBar + Math.floor(step / 2)) % chord.length], step, beat);
      hitMusicReactive(stepInBar % 4 === 3 ? "melody" : "chord", 0.48 + state.shimmer * 0.28);
    }

    if (semaphoreMode && (stepInBar % 2 === 0 || [1, 6, 9, 14].includes(stepInBar) || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playSemaphoreFlash(swungTime + beat * 0.006, chordDegree + chord[(step + stepInBar) % chord.length] + (stepInBar >= 8 ? 7 : 0), step, beat);
      hitMusicReactive(stepInBar % 4 === 0 ? "percussion" : "arp", 0.6 + state.rhythm * 0.32);
    }

    if (pendulumMode && state.harmony > 0.14 && (stepInBar === 0 || stepInBar === 8 || stepInBar === 13 || (bar % 4 === 3 && stepInBar === 15))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playPendulumToll(swungTime + beat * 0.07, chordDegree + chord[(bar + stepInBar) % chord.length] + (stepInBar >= 8 ? -7 : 0), step, beat);
      hitMusicReactive("bass", 0.58 + state.harmony * 0.28);
    }

    if (abacusMode && (stepInBar % 3 === 0 || [2, 7, 10, 15].includes(stepInBar) || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playAbacusClick(swungTime + beat * 0.004, chordDegree + chord[(step + bar * 2) % chord.length] + (stepInBar % 4 === 3 ? 6 : 0), step, beat);
      hitMusicReactive(stepInBar % 3 === 0 ? "arp" : "percussion", 0.58 + state.arp * 0.28);
    }

    if (cipherMode && (stepInBar === 0 || stepInBar === 3 || stepInBar === 7 || stepInBar === 11 || stepInBar === 15 || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playCipherDrop(swungTime + beat * 0.018, chordDegree + chord[(stepInBar + bar) % chord.length] + (stepInBar >= 8 ? 7 : 0), step, beat);
      hitMusicReactive(stepInBar % 4 === 3 ? "melody" : "chord", 0.5 + state.shimmer * 0.28);
    }

    if (orreryMode && state.harmony > 0.14 && (stepInBar === 0 || stepInBar === 5 || stepInBar === 8 || stepInBar === 13)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playOrreryChime(swungTime + beat * 0.06, chordDegree + chord[(bar + stepInBar) % chord.length] + (stepInBar >= 8 ? 7 : 0), step, beat);
      hitMusicReactive("chord", 0.52 + state.harmony * 0.28);
    }

    if (reactorMode && (stepInBar % 4 === 0 || [2, 6, 10, 14].includes(stepInBar) || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playReactorPulse(swungTime + beat * 0.006, chordDegree + chord[(step + stepInBar) % chord.length], step, beat);
      hitMusicReactive(stepInBar % 4 === 0 ? "bass" : "percussion", 0.62 + state.bass * 0.3);
    }

    if (phaseMode && (stepInBar === 0 || stepInBar === 2 || stepInBar === 5 || stepInBar === 9 || stepInBar === 14 || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playPhasePing(swungTime + beat * (0.01 + (stepInBar % 3) * 0.018), chordDegree + chord[(stepInBar + bar * 2) % chord.length] + (stepInBar >= 8 ? 7 : 0), step, beat);
      hitMusicReactive(stepInBar % 5 === 0 ? "chord" : "arp", 0.52 + state.shimmer * 0.28);
    }

    if (forgeMode && (stepInBar % 4 === 0 || [3, 10, 15].includes(stepInBar) || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playForgeStrike(swungTime + beat * 0.004, chordDegree + chord[(step + bar) % chord.length] + (stepInBar % 4 === 0 ? -7 : 0), step, beat);
      hitMusicReactive(stepInBar % 4 === 0 ? "bass" : "percussion", 0.7 + state.bass * 0.34);
    }

    if (oracleMode && state.harmony > 0.12 && (stepInBar === 0 || stepInBar === 4 || stepInBar === 8 || stepInBar === 12 || (rhythmPulse && stepInBar % 4 === 2))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playOracleFold(swungTime + beat * 0.055, chordDegree + chord[(bar + 16 - stepInBar) % chord.length] + (stepInBar === 4 || stepInBar === 12 ? 7 : 0), step, beat);
      hitMusicReactive("melody", 0.52 + state.melody * 0.3);
    }

    if (sporeMode && (euclideanHit(stepInBar, 9, (bar * 5 + state.musicSeed) % 16) || [3, 10, 13].includes(stepInBar))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playSporePop(swungTime + beat * (0.006 + (stepInBar % 4) * 0.01), chordDegree + chord[(stepInBar + bar) % chord.length] + (stepInBar > 8 ? 7 : 0), step, beat);
      hitMusicReactive(stepInBar % 3 === 0 ? "percussion" : "melody", 0.56 + state.percussion * 0.28);
    }

    if (cartogramMode && state.harmony > 0.1 && (stepInBar === 0 || stepInBar === 3 || stepInBar === 7 || stepInBar === 11 || stepInBar === 15 || rhythmPulse)) {
      const chord = chordToneDegrees(chordDegree, bar);
      playCartogramCall(swungTime + beat * 0.025, chordDegree + chord[(bar * 2 + stepInBar) % chord.length] + (stepInBar >= 8 ? 7 : 0), step, beat);
      hitMusicReactive(stepInBar % 4 === 3 ? "arp" : "chord", 0.5 + state.shimmer * 0.3);
    }

    if (quartzMode && state.harmony > 0.14 && (stepInBar === 0 || stepInBar === 2 || stepInBar === 8 || stepInBar === 10 || (bar % 4 === 3 && stepInBar === 14))) {
      const chord = chordToneDegrees(chordDegree, bar);
      playQuartzEcho(swungTime + beat * 0.09, chordDegree + chord[(bar + stepInBar) % chord.length] + ([2, 10].includes(stepInBar) ? 7 : 0), step, beat);
      hitMusicReactive("chord", 0.52 + state.harmony * 0.3);
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

    if (state.percussion > 0.02 && !(ambient || driftMode || bloomMode || rainMode || harpMode || orchardMode || choirMode || tideMode)) {
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
    if (state.musicMode === "glitch" && bar % 3 === 1) chord = chord.concat([1, 11]);
    if (state.musicMode === "ritual" && bar % 4 === 3) chord = chord.concat([3, 7]);
    if (state.musicMode === "drift" && state.harmony > 0.72) chord = chord.concat([9, 11]);
    if (state.musicMode === "swarm" && state.rhythm > 0.7) chord = chord.concat([5, 10]);
    if (state.musicMode === "rain" && state.shimmer > 0.7) chord = chord.concat([6, 11]);
    if (state.musicMode === "clockwork" && bar % 2 === 1) chord = chord.concat([1, 7]);
    if (state.musicMode === "bloom" && state.harmony > 0.68) chord = chord.concat([8, 11]);
    if (state.musicMode === "ferro" && state.rhythm > 0.62) chord = chord.concat([1, 6, 12]);
    if (state.musicMode === "harp" && state.shimmer > 0.72) chord = chord.concat([9, 13]);
    if (state.musicMode === "orchard" && bar % 3 === 2) chord = chord.concat([2, 7, 11]);
    if (state.musicMode === "choir" && state.harmony > 0.7) chord = chord.concat([5, 9, 12]);
    if (state.musicMode === "tide" && bar % 4 === 1) chord = chord.concat([3, 8]);
    if (state.musicMode === "comet" && state.rhythm > 0.68) chord = chord.concat([1, 11, 14]);
    if (state.musicMode === "fold" && state.rhythm > 0.62) chord = chord.concat([1, 6, 13]);
    if (state.musicMode === "jelly" && state.harmony > 0.78) chord = chord.concat([9, 11, 14]);
    if (state.musicMode === "spire" && bar % 2 === 0) chord = chord.concat([-5, 1, 12]);
    if (state.musicMode === "tape" && state.groove > 0.5) chord = chord.concat([2, 8, 10]);
    if (state.musicMode === "moth" && state.arp > 0.68) chord = chord.concat([7, 10, 14]);
    if (state.musicMode === "circuit" && state.rhythm > 0.72) chord = chord.concat([1, 6, 11]);
    if (state.musicMode === "ice" && state.harmony > 0.8) chord = chord.concat([9, 13, 16]);
    if (state.musicMode === "mycelium" && state.melody > 0.62) chord = chord.concat([2, 9, 12]);
    if (state.musicMode === "storm" && state.percussion > 0.6) chord = chord.concat([1, 6, 13]);
    if (state.musicMode === "rail" && state.groove > 0.6) chord = chord.concat([0, 5, 10]);
    if (state.musicMode === "typewriter" && state.percussion > 0.6) chord = chord.concat([1, 8, 12]);
    if (state.musicMode === "maze" && state.harmony > 0.75) chord = chord.concat([7, 11, 14]);
    if (state.musicMode === "marble" && state.arp > 0.7) chord = chord.concat([5, 9, 13]);
    if (state.musicMode === "chance" && state.rhythm > 0.62) chord = chord.concat([1, 6, 11, 14]);
    if (state.musicMode === "kitchen" && state.percussion > 0.64) chord = chord.concat([2, 5, 10]);
    if (state.musicMode === "radio" && state.harmony > 0.72) chord = chord.concat([7, 12, 16]);
    if (state.musicMode === "stitch" && state.rhythm > 0.66) chord = chord.concat([1, 6, 9, 12]);
    if (state.musicMode === "archive" && state.harmony > 0.72) chord = chord.concat([5, 11, 14, 16]);
    if (state.musicMode === "lift" && state.melody > 0.58) chord = chord.concat([7, 12, 14]);
    if (state.musicMode === "switchboard" && state.rhythm > 0.68) chord = chord.concat([1, 6, 11, 13]);
    if (state.musicMode === "court" && state.harmony > 0.76) chord = chord.concat([-5, 7, 12, 15]);
    if (state.musicMode === "weather" && state.shimmer > 0.62) chord = chord.concat([2, 9, 11, 14]);
    if (state.musicMode === "semaphore" && state.rhythm > 0.62) chord = chord.concat([1, 6, 8, 13]);
    if (state.musicMode === "pendulum" && state.harmony > 0.72) chord = chord.concat([-7, 7, 12, 16]);
    if (state.musicMode === "abacus" && state.arp > 0.66) chord = chord.concat([1, 5, 9, 14]);
    if (state.musicMode === "cipher" && state.shimmer > 0.62) chord = chord.concat([1, 8, 11, 15]);
    if (state.musicMode === "orrery" && state.harmony > 0.72) chord = chord.concat([7, 12, 16]);
    if (state.musicMode === "reactor" && state.bass > 0.58) chord = chord.concat([1, 6, 13]);
    if (state.musicMode === "phase" && state.shimmer > 0.66) chord = chord.concat([1, 6, 11, 15]);
    if (state.musicMode === "forge" && state.bass > 0.68) chord = chord.concat([-7, 1, 6, 12]);
    if (state.musicMode === "oracle" && state.harmony > 0.7) chord = chord.concat([7, 11, 14, 16]);
    if (state.musicMode === "spore" && state.rhythm > 0.66) chord = chord.concat([1, 5, 8, 12]);
    if (state.musicMode === "cartogram" && state.harmony > 0.7) chord = chord.concat([6, 11, 13, 15]);
    if (state.musicMode === "quartz" && state.shimmer > 0.68) chord = chord.concat([9, 14, 16, 18]);
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
    osc.type = state.musicMode === "ritual" || state.musicMode === "bloom" || state.musicMode === "orchard" || state.musicMode === "tide" || state.musicMode === "jelly" || state.musicMode === "fold" || state.musicMode === "ice" || state.musicMode === "moth" || state.musicMode === "mycelium" || state.musicMode === "maze" || state.musicMode === "marble" || state.musicMode === "radio" || state.musicMode === "archive" || state.musicMode === "lift" || state.musicMode === "court" || state.musicMode === "weather" || state.musicMode === "pendulum" || state.musicMode === "orrery" || state.musicMode === "oracle" || state.musicMode === "cartogram" || state.musicMode === "quartz"
      ? "triangle"
      : state.musicMode === "glitch" || state.musicMode === "clockwork" || state.musicMode === "ferro" || state.musicMode === "comet" || state.musicMode === "spire" || state.musicMode === "tape" || state.musicMode === "circuit" || state.musicMode === "storm" || state.musicMode === "rail" || state.musicMode === "typewriter" || state.musicMode === "chance" || state.musicMode === "kitchen" || state.musicMode === "stitch" || state.musicMode === "switchboard" || state.musicMode === "semaphore" || state.musicMode === "abacus" || state.musicMode === "cipher" || state.musicMode === "reactor" || state.musicMode === "phase" || state.musicMode === "forge" || state.musicMode === "spore"
        ? "square"
        : "sawtooth";
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
    osc.type = state.musicMode === "crystal" || state.musicMode === "swarm" || state.musicMode === "rain" || state.musicMode === "bloom" || state.musicMode === "harp" || state.musicMode === "orchard" || state.musicMode === "choir" || state.musicMode === "tide" || state.musicMode === "jelly" || state.musicMode === "ice" || state.musicMode === "mycelium" || state.musicMode === "maze" || state.musicMode === "radio" || state.musicMode === "archive" || state.musicMode === "lift" || state.musicMode === "court" || state.musicMode === "weather" || state.musicMode === "pendulum" || state.musicMode === "orrery" || state.musicMode === "oracle" || state.musicMode === "cartogram" || state.musicMode === "quartz"
      ? "sine"
      : state.musicMode === "glitch" || state.musicMode === "clockwork" || state.musicMode === "ferro" || state.musicMode === "comet" || state.musicMode === "fold" || state.musicMode === "spire" || state.musicMode === "tape" || state.musicMode === "circuit" || state.musicMode === "storm" || state.musicMode === "rail" || state.musicMode === "typewriter" || state.musicMode === "chance" || state.musicMode === "stitch" || state.musicMode === "switchboard" || state.musicMode === "semaphore" || state.musicMode === "abacus" || state.musicMode === "cipher" || state.musicMode === "reactor" || state.musicMode === "phase" || state.musicMode === "forge" || state.musicMode === "spore"
        ? "square"
        : "triangle";
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

  function playGlitchGrain(time, step, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(0.7 + (step % 9) * 0.19 + state.rhythm * 0.42, time);
    filter.type = step % 3 === 0 ? "notch" : "bandpass";
    filter.frequency.setValueAtTime(620 + (step % 11) * 310 + pointer.x * 1200, time);
    filter.Q.setValueAtTime(8 + state.rhythm * 14, time);
    pan.pan.setValueAtTime(Math.sin(step * 2.17) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.percussion * state.audioLevel, time + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.18);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.compressor);
    source.start(time);
    source.stop(time + beat * 0.24);
  }

  function playRitualHit(time, degree, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const noiseGain = context.createGain();
    const noiseFilter = context.createBiquadFilter();
    const osc = context.createOscillator();
    const bodyGain = context.createGain();
    const freq = noteFrequency(degree, -2);
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(0.58 + state.groove * 0.22, time);
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(180 + state.rhythm * 320, time);
    noiseFilter.Q.setValueAtTime(1.4 + state.bass * 2.4, time);
    noiseGain.gain.setValueAtTime(0.0001, time);
    noiseGain.gain.linearRampToValueAtTime(0.026 * state.percussion * state.audioLevel, time + 0.018);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.9);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq * 1.42, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, time + beat * 0.42);
    bodyGain.gain.setValueAtTime(0.0001, time);
    bodyGain.gain.linearRampToValueAtTime(0.045 * state.bass * state.audioLevel, time + 0.012);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.15);
    source.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audio.compressor);
    osc.connect(bodyGain);
    bodyGain.connect(audio.compressor);
    source.start(time);
    source.stop(time + beat);
    osc.start(time);
    osc.stop(time + beat * 1.2);
  }

  function playBreathNoise(time, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(0.38 + state.shimmer * 0.16, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(420 + state.harmony * 900 + pointer.y * 500, time);
    filter.Q.setValueAtTime(0.8 + state.shimmer * 3.5, time);
    pan.pan.setValueAtTime(Math.sin(phase * 0.7 + time) * state.stereo * 0.62, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.drone * state.audioLevel, time + beat * 0.28);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 4.2);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    source.start(time);
    source.stop(time + beat * 4.6);
  }

  function playSwarmPip(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree + (step % 5 === 0 ? 7 : 0), step % 7 > 3 ? 2 : 1);
    osc.type = step % 4 === 0 ? "square" : "sine";
    osc.frequency.setValueAtTime(freq * (1 + Math.sin(step) * 0.004), time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.2 + state.shimmer * 0.6), time);
    filter.Q.setValueAtTime(5 + state.arp * 11, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.91 + phase) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.012 * state.arp * state.audioLevel, time + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.38);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    osc.start(time);
    osc.stop(time + beat * 0.46);
  }

  function playRainBell(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const carrier = context.createOscillator();
    const overtone = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 5 === 0 ? 3 : 2);
    carrier.type = "sine";
    overtone.type = "sine";
    carrier.frequency.setValueAtTime(freq, time);
    overtone.frequency.setValueAtTime(freq * (2.01 + (step % 4) * 0.12), time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.1 + state.shimmer * 0.72), time);
    filter.Q.setValueAtTime(6 + state.shimmer * 12, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.31 + phase) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.016 * state.shimmer * state.audioLevel, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.4);
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

  function playClockTick(time, step, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(1.6 + (step % 6) * 0.11, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1200 + (step % 8) * 260 + state.shimmer * 900, time);
    filter.Q.setValueAtTime(9 + state.rhythm * 12, time);
    pan.pan.setValueAtTime((step % 2 ? -1 : 1) * state.stereo * 0.55, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.008 * state.percussion * state.audioLevel, time + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.12);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.compressor);
    source.start(time);
    source.stop(time + beat * 0.16);
  }

  function playClockBell(time, degree, beat) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const freq = noteFrequency(degree, 1);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, time);
    osc.detune.setValueAtTime(7 + state.groove * 12, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * 1.5, time);
    filter.Q.setValueAtTime(5 + state.harmony * 8, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.02 * state.percussion * state.audioLevel, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.4);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audio.filter);
    osc.start(time);
    osc.stop(time + beat * 1.5);
  }

  function playBloomPulse(time, chordDegree, bar, beat) {
    if (!audio) return;
    const context = audio.context;
    const chord = chordToneDegrees(chordDegree, bar).slice(0, 5);
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(520 + state.harmony * 1700 + pointer.y * 600, time);
    filter.Q.setValueAtTime(0.9 + state.morph * 0.6, time);
    pan.pan.setValueAtTime(Math.sin(bar + phase) * state.stereo * 0.5, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.024 * state.melody * state.harmony * state.audioLevel, time + beat * 0.24);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 5.2);
    chord.forEach((degree, index) => {
      const osc = context.createOscillator();
      osc.type = index % 2 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(noteFrequency(chordDegree + degree, index > 2 ? 1 : 0), time);
      osc.detune.setValueAtTime((index - 2) * (4 + state.shimmer * 5), time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + beat * 5.4);
    });
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
  }

  function playFerroSlide(time, degree, step, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const sub = context.createOscillator();
    const source = context.createBufferSource();
    const gain = context.createGain();
    const noiseGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const base = noteFrequency(degree, step % 4 === 0 ? -1 : 0);
    const target = noteFrequency(degree + (step % 2 ? 1 : -1), step % 5 === 0 ? 0 : -1);
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(0.48 + (step % 7) * 0.09 + state.rhythm * 0.22, time);
    osc.type = "sawtooth";
    sub.type = "triangle";
    osc.frequency.setValueAtTime(base * 0.72, time);
    osc.frequency.exponentialRampToValueAtTime(target * 1.18, time + beat * 0.62);
    sub.frequency.setValueAtTime(base * 0.36, time);
    sub.frequency.exponentialRampToValueAtTime(target * 0.48, time + beat * 0.7);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(180 + state.bass * 760 + pointer.pressure * 240, time);
    filter.Q.setValueAtTime(2.2 + state.rhythm * 7, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.11 + phase) * state.stereo * 0.66, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.03 * state.bass * state.audioLevel, time + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.18);
    noiseGain.gain.setValueAtTime(0.0001, time);
    noiseGain.gain.linearRampToValueAtTime(0.01 * state.percussion * state.audioLevel, time + 0.006);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.34);
    osc.connect(filter);
    sub.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    source.connect(noiseGain);
    noiseGain.connect(audio.compressor);
    osc.start(time);
    sub.start(time);
    source.start(time);
    osc.stop(time + beat * 1.25);
    sub.stop(time + beat * 1.25);
    source.stop(time + beat * 0.38);
  }

  function playSolarHarpPluck(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const carrier = context.createOscillator();
    const overtone = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 6 === 0 ? 3 : 2);
    carrier.type = "sine";
    overtone.type = "triangle";
    carrier.frequency.setValueAtTime(freq, time);
    overtone.frequency.setValueAtTime(freq * (1.5 + (step % 5) * 0.08), time);
    overtone.detune.setValueAtTime((step % 7 - 3) * 3, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.2 + state.shimmer * 0.7), time);
    filter.Q.setValueAtTime(7 + state.arp * 12, time);
    pan.pan.setValueAtTime(Math.sin(step * phi) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.arp * state.audioLevel, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.8);
    carrier.connect(filter);
    overtone.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    carrier.start(time);
    overtone.start(time);
    carrier.stop(time + beat * 3.0);
    overtone.stop(time + beat * 3.0);
  }

  function playOrchardSeed(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const base = noteFrequency(degree, step % 4 === 0 ? 1 : 0);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(base * (1.1 + state.shimmer * 0.55), time);
    filter.Q.setValueAtTime(3.4 + state.melody * 6, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.91 + phase) * state.stereo * 0.72, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.018 * state.melody * state.audioLevel, time + beat * 0.035);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.1);
    [1, 1.5, 2.02].forEach((ratio, index) => {
      const osc = context.createOscillator();
      osc.type = index === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(base * ratio, time + index * beat * 0.035);
      osc.detune.setValueAtTime((index - 1) * (4 + state.harmony * 4), time);
      osc.connect(filter);
      osc.start(time + index * beat * 0.035);
      osc.stop(time + beat * (1.6 + index * 0.28));
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.filter);
  }

  function playChoirVowel(time, chordDegree, bar, stepInBar, beat) {
    if (!audio) return;
    const context = audio.context;
    const chord = chordToneDegrees(chordDegree, bar).slice(0, 5);
    const vowelCenters = [
      [520, 1080],
      [680, 1320],
      [430, 920],
      [760, 1660],
    ][Math.floor(stepInBar / 4) % 4];
    const output = context.createGain();
    const formantA = context.createBiquadFilter();
    const formantB = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    formantA.type = "bandpass";
    formantB.type = "bandpass";
    formantA.frequency.setValueAtTime(vowelCenters[0] + state.harmony * 220, time);
    formantB.frequency.setValueAtTime(vowelCenters[1] + state.shimmer * 360, time);
    formantA.Q.setValueAtTime(8 + state.harmony * 10, time);
    formantB.Q.setValueAtTime(6 + state.shimmer * 9, time);
    pan.pan.setValueAtTime(Math.sin(bar * 1.3 + stepInBar) * state.stereo * 0.44, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.022 * state.harmony * state.audioLevel, time + beat * 0.28);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 6.0);
    chord.forEach((degree, index) => {
      const osc = context.createOscillator();
      osc.type = index % 2 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(noteFrequency(chordDegree + degree, index < 2 ? 0 : 1), time);
      osc.detune.setValueAtTime((index - 2) * (3 + state.shimmer * 4), time);
      osc.connect(formantA);
      osc.connect(formantB);
      osc.start(time);
      osc.stop(time + beat * 6.2);
    });
    formantA.connect(output);
    formantB.connect(output);
    output.connect(pan);
    pan.connect(audio.filter);
  }

  function playTidalSurge(time, degree, step, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const osc = context.createOscillator();
    const gain = context.createGain();
    const noiseGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, -1);
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(0.32 + state.groove * 0.18 + (step % 5) * 0.035, time);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq * 0.62, time);
    osc.frequency.exponentialRampToValueAtTime(freq * (step % 2 ? 0.86 : 1.12), time + beat * 1.4);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(260 + state.bass * 620 + pointer.y * 260, time);
    filter.Q.setValueAtTime(1.0 + state.groove * 2.4, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.47 + phase) * state.stereo * 0.58, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.032 * (state.bass + state.pulseMix * 0.5) * state.audioLevel, time + beat * 0.18);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 3.4);
    noiseGain.gain.setValueAtTime(0.0001, time);
    noiseGain.gain.linearRampToValueAtTime(0.009 * state.percussion * state.audioLevel, time + beat * 0.08);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.1);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    source.connect(noiseGain);
    noiseGain.connect(audio.compressor);
    osc.start(time);
    source.start(time);
    osc.stop(time + beat * 3.6);
    source.stop(time + beat * 1.2);
  }

  function playCometRune(time, degree, step, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const carrier = context.createOscillator();
    const overtone = context.createOscillator();
    const gain = context.createGain();
    const noiseGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? 2 : 1);
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(1.2 + (step % 9) * 0.11 + state.rhythm * 0.35, time);
    carrier.type = step % 3 === 0 ? "square" : "sine";
    overtone.type = "triangle";
    carrier.frequency.setValueAtTime(freq * 0.55, time);
    carrier.frequency.exponentialRampToValueAtTime(freq * 1.36, time + beat * 0.48);
    overtone.frequency.setValueAtTime(freq * 2.02, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.3 + state.shimmer * 0.8), time);
    filter.Q.setValueAtTime(5 + state.arp * 11, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.73) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.arp * state.audioLevel, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.1);
    noiseGain.gain.setValueAtTime(0.0001, time);
    noiseGain.gain.linearRampToValueAtTime(0.012 * state.percussion * state.audioLevel, time + 0.004);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.18);
    carrier.connect(filter);
    overtone.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    source.connect(noiseGain);
    noiseGain.connect(audio.compressor);
    carrier.start(time);
    overtone.start(time);
    source.start(time);
    carrier.stop(time + beat * 1.2);
    overtone.stop(time + beat * 1.2);
    source.stop(time + beat * 0.24);
  }

  function playFoldSnap(time, degree, step, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const source = context.createBufferSource();
    const osc = context.createOscillator();
    const gain = context.createGain();
    const noiseGain = context.createGain();
    const filter = context.createBiquadFilter();
    const noiseFilter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 5 === 0 ? 2 : 1);
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(0.95 + (step % 7) * 0.19 + state.rhythm * 0.4, time);
    osc.type = step % 4 === 0 ? "square" : "triangle";
    osc.frequency.setValueAtTime(freq * 1.5, time);
    osc.frequency.exponentialRampToValueAtTime(freq * (step % 2 ? 0.72 : 2.1), time + beat * 0.18);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.5 + state.shimmer * 1.4), time);
    filter.Q.setValueAtTime(9 + state.arp * 12, time);
    noiseFilter.type = "highpass";
    noiseFilter.frequency.setValueAtTime(1200 + state.percussion * 2400, time);
    noiseFilter.Q.setValueAtTime(1.2 + state.rhythm * 4, time);
    pan.pan.setValueAtTime(Math.sin(step * phi) * state.stereo * 0.9, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.017 * state.arp * state.audioLevel, time + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.46);
    noiseGain.gain.setValueAtTime(0.0001, time);
    noiseGain.gain.linearRampToValueAtTime(0.012 * state.percussion * state.audioLevel, time + 0.003);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.16);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    source.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audio.compressor);
    osc.start(time);
    source.start(time);
    osc.stop(time + beat * 0.5);
    source.stop(time + beat * 0.22);
  }

  function playJellyBloom(time, degree, step, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const source = context.createBufferSource();
    const bubbleGain = context.createGain();
    const bubbleFilter = context.createBiquadFilter();
    const base = noteFrequency(degree, 0);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(820 + state.harmony * 1500 + state.shimmer * 600, time);
    filter.Q.setValueAtTime(0.8 + state.harmony * 1.6, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.34 + phase) * state.stereo * 0.62, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.018 * state.harmony * state.audioLevel, time + beat * 0.42);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 6.8);
    [0, 2, 5].forEach((offset, index) => {
      const carrier = context.createOscillator();
      const lfo = context.createOscillator();
      const lfoGain = context.createGain();
      carrier.type = "sine";
      lfo.type = "sine";
      carrier.frequency.setValueAtTime(base * Math.pow(2, offset / 12) * (index === 2 ? 2 : 1), time);
      lfo.frequency.setValueAtTime(0.18 + index * 0.07 + state.breath * 0.08, time);
      lfoGain.gain.setValueAtTime(3 + state.shimmer * 9, time);
      lfo.connect(lfoGain);
      lfoGain.connect(carrier.frequency);
      carrier.connect(filter);
      carrier.start(time);
      lfo.start(time);
      carrier.stop(time + beat * 7.0);
      lfo.stop(time + beat * 7.0);
    });
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(0.18 + (step % 4) * 0.035, time);
    bubbleFilter.type = "bandpass";
    bubbleFilter.frequency.setValueAtTime(base * (3.2 + (step % 5) * 0.4), time);
    bubbleFilter.Q.setValueAtTime(11 + state.shimmer * 8, time);
    bubbleGain.gain.setValueAtTime(0.0001, time);
    bubbleGain.gain.linearRampToValueAtTime(0.0045 * state.shimmer * state.audioLevel, time + beat * 0.08);
    bubbleGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.6);
    source.connect(bubbleFilter);
    bubbleFilter.connect(bubbleGain);
    bubbleGain.connect(audio.compressor);
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.filter);
    source.start(time);
    source.stop(time + beat * 1.8);
  }

  function playSpireToll(time, degree, stepInBar, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const root = noteFrequency(degree, -2);
    const low = context.createOscillator();
    const upper = context.createOscillator();
    const strike = context.createBufferSource();
    const gain = context.createGain();
    const strikeGain = context.createGain();
    const filter = context.createBiquadFilter();
    const strikeFilter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    low.type = "square";
    upper.type = "triangle";
    low.frequency.setValueAtTime(root, time);
    upper.frequency.setValueAtTime(root * (stepInBar >= 8 ? 2.72 : 3.01), time);
    low.detune.setValueAtTime(-8 + state.morph * 12, time);
    upper.detune.setValueAtTime(11 + state.shimmer * 8, time);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(260 + state.bass * 880 + state.pulseMix * 320, time);
    filter.Q.setValueAtTime(1.2 + state.bass * 3.2, time);
    pan.pan.setValueAtTime(Math.sin(stepInBar * 0.9) * state.stereo * 0.32, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.038 * state.bass * state.audioLevel, time + beat * 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 5.2);
    strike.buffer = audio.noiseBuffer;
    strike.playbackRate.setValueAtTime(0.52 + state.rhythm * 0.28, time);
    strikeFilter.type = "bandpass";
    strikeFilter.frequency.setValueAtTime(620 + state.percussion * 1800, time);
    strikeFilter.Q.setValueAtTime(4 + state.percussion * 8, time);
    strikeGain.gain.setValueAtTime(0.0001, time);
    strikeGain.gain.linearRampToValueAtTime(0.012 * state.percussion * state.audioLevel, time + 0.006);
    strikeGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.42);
    low.connect(filter);
    upper.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    strike.connect(strikeFilter);
    strikeFilter.connect(strikeGain);
    strikeGain.connect(audio.compressor);
    low.start(time);
    upper.start(time);
    strike.start(time);
    low.stop(time + beat * 5.4);
    upper.stop(time + beat * 5.4);
    strike.stop(time + beat * 0.48);
  }

  function playTapeSplice(time, degree, step, beat) {
    if (!audio?.noiseBuffer) return;
    const context = audio.context;
    const carrier = context.createOscillator();
    const lfo = context.createOscillator();
    const lfoGain = context.createGain();
    const source = context.createBufferSource();
    const gain = context.createGain();
    const noiseGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree + (step % 3 === 0 ? -1 : 0), step % 4 > 1 ? 1 : 0);
    carrier.type = step % 2 ? "sawtooth" : "triangle";
    carrier.frequency.setValueAtTime(freq * (step % 5 === 0 ? 0.5 : 1), time);
    carrier.frequency.exponentialRampToValueAtTime(freq * (step % 2 ? 1.18 : 0.82), time + beat * 0.9);
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(4.5 + state.groove * 5 + (step % 4), time);
    lfoGain.gain.setValueAtTime(5 + state.morph * 16, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.1 + state.shimmer * 0.7), time);
    filter.Q.setValueAtTime(2.8 + state.groove * 6, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.73 + phase) * state.stereo * 0.88, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.melody * state.audioLevel, time + beat * 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.6);
    source.buffer = audio.noiseBuffer;
    source.playbackRate.setValueAtTime(0.65 + state.groove * 0.4 + (step % 6) * 0.05, time);
    noiseGain.gain.setValueAtTime(0.0001, time);
    noiseGain.gain.linearRampToValueAtTime(0.006 * state.percussion * state.audioLevel, time + 0.008);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.7);
    lfo.connect(lfoGain);
    lfoGain.connect(carrier.frequency);
    carrier.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    source.connect(noiseGain);
    noiseGain.connect(audio.compressor);
    carrier.start(time);
    lfo.start(time);
    source.start(time);
    carrier.stop(time + beat * 1.7);
    lfo.stop(time + beat * 1.7);
    source.stop(time + beat * 0.8);
  }

  function playMothFlutter(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const wing = context.createOscillator();
    const glint = context.createOscillator();
    const gain = context.createGain();
    const glintGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const base = noteFrequency(degree, 2 + (step % 5 === 0 ? 1 : 0));
    wing.type = step % 2 ? "triangle" : "sine";
    glint.type = "sine";
    wing.frequency.setValueAtTime(base * 0.98, time);
    wing.frequency.exponentialRampToValueAtTime(base * (step % 3 === 0 ? 1.58 : 1.23), time + beat * 0.28);
    glint.frequency.setValueAtTime(base * 2.01, time + beat * 0.02);
    glint.detune.setValueAtTime((step % 7 - 3) * 8, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(base * (1.25 + state.shimmer * 0.9), time);
    filter.Q.setValueAtTime(6 + state.arp * 10, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.13 + phase) * state.stereo * 0.92, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.016 * state.arp * state.audioLevel * state.sequence, time + beat * 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.78);
    glintGain.gain.setValueAtTime(0.0001, time);
    glintGain.gain.linearRampToValueAtTime(0.006 * state.shimmer * state.audioLevel, time + beat * 0.035);
    glintGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.52);
    wing.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    glint.connect(glintGain);
    glintGain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer && state.percussion > 0.05) {
      const dust = context.createBufferSource();
      const dustGain = context.createGain();
      const dustFilter = context.createBiquadFilter();
      dust.buffer = audio.noiseBuffer;
      dust.playbackRate.setValueAtTime(1.6 + (step % 5) * 0.35, time);
      dustFilter.type = "highpass";
      dustFilter.frequency.setValueAtTime(3200 + state.shimmer * 4600, time);
      dustGain.gain.setValueAtTime(0.0001, time);
      dustGain.gain.linearRampToValueAtTime(0.0035 * state.percussion * state.audioLevel, time + 0.006);
      dustGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.26);
      dust.connect(dustFilter);
      dustFilter.connect(dustGain);
      dustGain.connect(audio.compressor);
      dust.start(time);
      dust.stop(time + beat * 0.3);
    }
    wing.start(time);
    glint.start(time + beat * 0.02);
    wing.stop(time + beat * 0.85);
    glint.stop(time + beat * 0.58);
  }

  function playCircuitBurst(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const base = noteFrequency(degree, step % 8 === 0 ? 0 : 1);
    osc.type = "square";
    osc.frequency.setValueAtTime(base * (step % 4 === 0 ? 0.5 : 1), time);
    osc.frequency.setValueAtTime(base * 1.5, time + beat * 0.08);
    osc.frequency.setValueAtTime(base * (step % 6 === 0 ? 2.25 : 0.75), time + beat * 0.18);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(base * (1.4 + state.shimmer * 1.6), time);
    filter.frequency.exponentialRampToValueAtTime(base * (2.7 + state.rhythm), time + beat * 0.36);
    filter.Q.setValueAtTime(5 + state.rhythm * 12, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.89 + stepHash(degree) * 0.00001) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.019 * state.percussion * state.audioLevel * state.sequence, time + 0.006);
    gain.gain.setValueAtTime(0.007 * state.percussion * state.audioLevel, time + beat * 0.11);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.42);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer && state.percussion > 0.08) {
      const click = context.createBufferSource();
      const clickGain = context.createGain();
      const clickFilter = context.createBiquadFilter();
      click.buffer = audio.noiseBuffer;
      click.playbackRate.setValueAtTime(2.2 + state.rhythm * 2.5 + (step % 3) * 0.6, time);
      clickFilter.type = "bandpass";
      clickFilter.frequency.setValueAtTime(1400 + (step % 8) * 410 + state.shimmer * 2600, time);
      clickFilter.Q.setValueAtTime(8 + state.rhythm * 12, time);
      clickGain.gain.setValueAtTime(0.0001, time);
      clickGain.gain.linearRampToValueAtTime(0.009 * state.percussion * state.audioLevel, time + 0.004);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.18);
      click.connect(clickFilter);
      clickFilter.connect(clickGain);
      clickGain.connect(audio.compressor);
      click.start(time);
      click.stop(time + beat * 0.2);
    }
    osc.start(time);
    osc.stop(time + beat * 0.46);
  }

  function playIceOrganChord(time, chordDegree, bar, beat) {
    if (!audio) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const shimmer = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const chord = chordToneDegrees(chordDegree, bar).slice(0, state.harmony > 0.82 ? 6 : 5);
    const duration = beat * (7.5 + state.drone * 4.8 + state.harmony * 2.4);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(520 + state.harmony * 920 + pointer.y * 260, time);
    filter.frequency.linearRampToValueAtTime(920 + state.shimmer * 1500, time + beat * 2.2);
    filter.Q.setValueAtTime(0.9 + state.harmony * 1.6, time);
    shimmer.type = "highshelf";
    shimmer.frequency.setValueAtTime(2400, time);
    shimmer.gain.setValueAtTime(4 + state.shimmer * 9, time);
    pan.pan.setValueAtTime(Math.sin(bar * 0.47 + chordDegree) * state.stereo * 0.48, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.019 * state.harmony * state.audioLevel * state.sequence * (0.8 + state.drone), time + beat * 0.7);
    output.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    chord.forEach((degree, index) => {
      const osc = context.createOscillator();
      const partial = index === 0 ? 0.5 : index > 3 ? 2 : 1;
      osc.type = index % 3 === 2 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(noteFrequency(chordDegree + degree, index > 4 ? 1 : 0) * partial, time);
      osc.detune.setValueAtTime((index - 2) * (2 + state.shimmer * 4), time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + duration + 0.3);
    });
    filter.connect(shimmer);
    shimmer.connect(output);
    output.connect(pan);
    pan.connect(audio.filter);
  }

  function playMyceliumSpore(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const overtone = context.createOscillator();
    const gain = context.createGain();
    const overtoneGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 6 === 0 ? 1 : 2);
    osc.type = "triangle";
    overtone.type = "sine";
    osc.frequency.setValueAtTime(freq * 0.5, time);
    osc.frequency.exponentialRampToValueAtTime(freq * (step % 4 === 0 ? 1.01 : 1.5), time + beat * 0.6);
    overtone.frequency.setValueAtTime(freq * 2.01, time + beat * 0.04);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (0.8 + state.shimmer * 0.8), time);
    filter.Q.setValueAtTime(2.4 + state.melody * 6, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.63 + phase) * state.stereo * 0.72, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.melody * state.audioLevel * state.sequence, time + beat * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.8);
    overtoneGain.gain.setValueAtTime(0.0001, time);
    overtoneGain.gain.linearRampToValueAtTime(0.005 * state.shimmer * state.audioLevel, time + beat * 0.14);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.2);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    overtone.connect(overtoneGain);
    overtoneGain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer && state.percussion > 0.04) {
      const puff = context.createBufferSource();
      const puffGain = context.createGain();
      const puffFilter = context.createBiquadFilter();
      puff.buffer = audio.noiseBuffer;
      puff.playbackRate.setValueAtTime(0.42 + (step % 5) * 0.05, time);
      puffFilter.type = "lowpass";
      puffFilter.frequency.setValueAtTime(700 + state.shimmer * 900, time);
      puffGain.gain.setValueAtTime(0.0001, time);
      puffGain.gain.linearRampToValueAtTime(0.004 * state.percussion * state.audioLevel, time + 0.02);
      puffGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.1);
      puff.connect(puffFilter);
      puffFilter.connect(puffGain);
      puffGain.connect(audio.reverbGain || audio.filter);
      puff.start(time);
      puff.stop(time + beat * 1.2);
    }
    osc.start(time);
    overtone.start(time + beat * 0.04);
    osc.stop(time + beat * 1.9);
    overtone.stop(time + beat * 1.3);
  }

  function playThunderStrike(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const bolt = context.createOscillator();
    const growl = context.createOscillator();
    const gain = context.createGain();
    const growlGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? 0 : 1);
    bolt.type = "sawtooth";
    growl.type = "square";
    bolt.frequency.setValueAtTime(freq * 3.2, time);
    bolt.frequency.exponentialRampToValueAtTime(freq * 0.74, time + beat * 0.42);
    growl.frequency.setValueAtTime(freq * 0.25, time);
    growl.frequency.exponentialRampToValueAtTime(freq * 0.5, time + beat * 1.1);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.4 + state.shimmer * 2.2), time);
    filter.Q.setValueAtTime(4 + state.percussion * 10, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.31 + phase) * state.stereo * 0.9, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.022 * state.percussion * state.audioLevel * state.sequence, time + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.52);
    growlGain.gain.setValueAtTime(0.0001, time);
    growlGain.gain.linearRampToValueAtTime(0.018 * state.bass * state.audioLevel, time + beat * 0.06);
    growlGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.4);
    bolt.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    growl.connect(growlGain);
    growlGain.connect(audio.filter);
    pan.connect(audio.filter);
    if (audio.noiseBuffer) {
      const crash = context.createBufferSource();
      const crashGain = context.createGain();
      const crashFilter = context.createBiquadFilter();
      crash.buffer = audio.noiseBuffer;
      crash.playbackRate.setValueAtTime(0.85 + state.rhythm * 0.9 + (step % 3) * 0.25, time);
      crashFilter.type = "bandpass";
      crashFilter.frequency.setValueAtTime(900 + state.shimmer * 2800, time);
      crashFilter.Q.setValueAtTime(1.8 + state.percussion * 5, time);
      crashGain.gain.setValueAtTime(0.0001, time);
      crashGain.gain.linearRampToValueAtTime(0.018 * state.percussion * state.audioLevel, time + 0.005);
      crashGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.8);
      crash.connect(crashFilter);
      crashFilter.connect(crashGain);
      crashGain.connect(audio.compressor);
      crash.start(time);
      crash.stop(time + beat * 0.86);
    }
    bolt.start(time);
    growl.start(time);
    bolt.stop(time + beat * 0.58);
    growl.stop(time + beat * 2.6);
  }

  function playRailClack(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const tone = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 === 0 ? -1 : 0);
    tone.type = step % 4 === 0 ? "square" : "triangle";
    tone.frequency.setValueAtTime(freq * (step % 3 === 0 ? 0.5 : 1), time);
    tone.frequency.setValueAtTime(freq * 1.12, time + beat * 0.1);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(520 + (step % 8) * 120 + state.groove * 1200, time);
    filter.Q.setValueAtTime(3 + state.rhythm * 8, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.5) * state.stereo * 0.48, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.bass * state.audioLevel * state.sequence, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.48);
    tone.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer && state.percussion > 0.04) {
      const clack = context.createBufferSource();
      const clackGain = context.createGain();
      const clackFilter = context.createBiquadFilter();
      clack.buffer = audio.noiseBuffer;
      clack.playbackRate.setValueAtTime(1.2 + state.groove * 0.8 + (step % 4) * 0.18, time);
      clackFilter.type = "highpass";
      clackFilter.frequency.setValueAtTime(900 + state.rhythm * 1200, time);
      clackGain.gain.setValueAtTime(0.0001, time);
      clackGain.gain.linearRampToValueAtTime(0.01 * state.percussion * state.audioLevel, time + 0.004);
      clackGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.22);
      clack.connect(clackFilter);
      clackFilter.connect(clackGain);
      clackGain.connect(audio.compressor);
      clack.start(time);
      clack.stop(time + beat * 0.25);
    }
    tone.start(time);
    tone.stop(time + beat * 0.52);
  }

  function playTypewriterClack(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const tone = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? 1 : 2);
    tone.type = "square";
    tone.frequency.setValueAtTime(freq * (step % 3 === 0 ? 0.5 : 1), time);
    tone.frequency.exponentialRampToValueAtTime(freq * 1.8, time + beat * 0.11);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1100 + (step % 8) * 280 + state.shimmer * 900, time);
    filter.Q.setValueAtTime(5 + state.percussion * 10, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.13) * state.stereo * 0.72, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.017 * state.percussion * state.audioLevel * state.sequence, time + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.18);
    tone.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer) {
      const clack = context.createBufferSource();
      const clackGain = context.createGain();
      const clackFilter = context.createBiquadFilter();
      clack.buffer = audio.noiseBuffer;
      clack.playbackRate.setValueAtTime(2.2 + (step % 5) * 0.24 + state.groove * 0.8, time);
      clackFilter.type = "highpass";
      clackFilter.frequency.setValueAtTime(1800 + state.rhythm * 2600, time);
      clackGain.gain.setValueAtTime(0.0001, time);
      clackGain.gain.linearRampToValueAtTime(0.013 * state.percussion * state.audioLevel, time + 0.003);
      clackGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.14);
      clack.connect(clackFilter);
      clackFilter.connect(clackGain);
      clackGain.connect(audio.compressor);
      clack.start(time);
      clack.stop(time + beat * 0.16);
    }
    if (step % 16 === 15) {
      const bell = context.createOscillator();
      const bellGain = context.createGain();
      bell.type = "sine";
      bell.frequency.setValueAtTime(freq * 3.02, time + beat * 0.05);
      bell.detune.setValueAtTime(4 + state.shimmer * 8, time);
      bellGain.gain.setValueAtTime(0.0001, time + beat * 0.05);
      bellGain.gain.linearRampToValueAtTime(0.01 * state.shimmer * state.audioLevel, time + beat * 0.1);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.1);
      bell.connect(bellGain);
      bellGain.connect(audio.filter);
      bell.start(time + beat * 0.05);
      bell.stop(time + beat * 1.2);
    }
    tone.start(time);
    tone.stop(time + beat * 0.22);
  }

  function playMazeEcho(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 === 0 ? 0 : 1);
    const duration = beat * (2.8 + state.trails * 3.2 + state.harmony * 1.8);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (0.82 + state.shimmer * 0.55), time);
    filter.frequency.exponentialRampToValueAtTime(freq * (1.34 + state.shimmer * 0.3), time + duration * 0.72);
    filter.Q.setValueAtTime(2.2 + state.harmony * 7, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.47 + phase) * state.stereo * 0.88, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.018 * state.harmony * state.audioLevel * state.sequence, time + beat * 0.12);
    output.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    ["sine", "triangle", "sine"].forEach((type, index) => {
      const osc = context.createOscillator();
      osc.type = type;
      osc.frequency.setValueAtTime(freq * (index === 0 ? 0.5 : index === 1 ? 1 : 2.01), time + beat * index * 0.08);
      osc.detune.setValueAtTime((index - 1) * (5 + state.shimmer * 8), time);
      osc.connect(filter);
      osc.start(time + beat * index * 0.08);
      osc.stop(time + duration + beat * 0.22);
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
  }

  function playMarbleBounce(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const overtone = context.createOscillator();
    const gain = context.createGain();
    const overtoneGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? 1 : 2);
    osc.type = "sine";
    overtone.type = "triangle";
    osc.frequency.setValueAtTime(freq * 1.45, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.76, time + beat * 0.42);
    overtone.frequency.setValueAtTime(freq * 2.04, time + beat * 0.035);
    overtone.detune.setValueAtTime(Math.sin(step) * 8, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.2 + state.shimmer * 1.4), time);
    filter.Q.setValueAtTime(5 + state.arp * 9, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.91 + phase) * state.stereo * 0.9, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.022 * state.arp * state.audioLevel * state.sequence, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.62);
    overtoneGain.gain.setValueAtTime(0.0001, time);
    overtoneGain.gain.linearRampToValueAtTime(0.007 * state.shimmer * state.audioLevel, time + beat * 0.045);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.78);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    overtone.connect(overtoneGain);
    overtoneGain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer && state.percussion > 0.04) {
      const tap = context.createBufferSource();
      const tapGain = context.createGain();
      const tapFilter = context.createBiquadFilter();
      tap.buffer = audio.noiseBuffer;
      tap.playbackRate.setValueAtTime(1.8 + (step % 6) * 0.18, time);
      tapFilter.type = "bandpass";
      tapFilter.frequency.setValueAtTime(1900 + state.rhythm * 1700, time);
      tapFilter.Q.setValueAtTime(6 + state.percussion * 6, time);
      tapGain.gain.setValueAtTime(0.0001, time);
      tapGain.gain.linearRampToValueAtTime(0.006 * state.percussion * state.audioLevel, time + 0.003);
      tapGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.16);
      tap.connect(tapFilter);
      tapFilter.connect(tapGain);
      tapGain.connect(audio.compressor);
      tap.start(time);
      tap.stop(time + beat * 0.18);
    }
    osc.start(time);
    overtone.start(time + beat * 0.035);
    osc.stop(time + beat * 0.72);
    overtone.stop(time + beat * 0.86);
  }

  function playChanceThrow(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const osc = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 5 === 0 ? 0 : 1);
    osc.type = step % 2 ? "square" : "triangle";
    osc.frequency.setValueAtTime(freq * (step % 3 === 0 ? 0.5 : 1.5), time);
    osc.frequency.exponentialRampToValueAtTime(freq * (step % 4 === 0 ? 2.4 : 0.82), time + beat * 0.36);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(760 + state.rhythm * 2200 + (step % 6) * 180, time);
    filter.Q.setValueAtTime(3 + state.arp * 8, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.97 + phase) * state.stereo * 0.96, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.arp * state.audioLevel * state.sequence, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.5);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer) {
      const dice = context.createBufferSource();
      const diceGain = context.createGain();
      const diceFilter = context.createBiquadFilter();
      dice.buffer = audio.noiseBuffer;
      dice.playbackRate.setValueAtTime(1.3 + (step % 7) * 0.22 + state.groove * 0.5, time);
      diceFilter.type = "bandpass";
      diceFilter.frequency.setValueAtTime(1100 + state.rhythm * 1900, time);
      diceFilter.Q.setValueAtTime(7 + state.percussion * 6, time);
      diceGain.gain.setValueAtTime(0.0001, time);
      diceGain.gain.linearRampToValueAtTime(0.008 * state.percussion * state.audioLevel, time + 0.004);
      diceGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.22);
      dice.connect(diceFilter);
      diceFilter.connect(diceGain);
      diceGain.connect(audio.compressor);
      dice.start(time);
      dice.stop(time + beat * 0.26);
    }
    osc.start(time);
    osc.stop(time + beat * 0.56);
  }

  function playKitchenClang(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const clang = context.createOscillator();
    const body = context.createOscillator();
    const gain = context.createGain();
    const bodyGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? -1 : 0);
    clang.type = "square";
    body.type = "triangle";
    clang.frequency.setValueAtTime(freq * 3.02, time);
    clang.frequency.exponentialRampToValueAtTime(freq * 1.18, time + beat * 0.44);
    body.frequency.setValueAtTime(freq * 0.5, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(520 + state.percussion * 1600 + state.shimmer * 700, time);
    filter.Q.setValueAtTime(4 + state.groove * 8, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.73 + phase) * state.stereo * 0.72, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.percussion * state.audioLevel * state.sequence, time + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.42);
    bodyGain.gain.setValueAtTime(0.0001, time);
    bodyGain.gain.linearRampToValueAtTime(0.014 * state.bass * state.audioLevel, time + beat * 0.06);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.6);
    clang.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    body.connect(bodyGain);
    bodyGain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer) {
      const hiss = context.createBufferSource();
      const hissGain = context.createGain();
      const hissFilter = context.createBiquadFilter();
      hiss.buffer = audio.noiseBuffer;
      hiss.playbackRate.setValueAtTime(0.64 + (step % 4) * 0.08, time);
      hissFilter.type = "highpass";
      hissFilter.frequency.setValueAtTime(1800 + state.shimmer * 2200, time);
      hissGain.gain.setValueAtTime(0.0001, time);
      hissGain.gain.linearRampToValueAtTime(0.005 * state.shimmer * state.audioLevel, time + beat * 0.03);
      hissGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.2);
      hiss.connect(hissFilter);
      hissFilter.connect(hissGain);
      hissGain.connect(audio.reverbGain || audio.filter);
      hiss.start(time);
      hiss.stop(time + beat * 1.3);
    }
    clang.start(time);
    body.start(time);
    clang.stop(time + beat * 0.5);
    body.stop(time + beat * 1.8);
  }

  function playRadioPing(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const carrier = context.createOscillator();
    const overtone = context.createOscillator();
    const gain = context.createGain();
    const overtoneGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 === 0 ? 1 : 2);
    carrier.type = "sine";
    overtone.type = "sine";
    carrier.frequency.setValueAtTime(freq, time);
    carrier.frequency.exponentialRampToValueAtTime(freq * 1.01, time + beat * 1.6);
    overtone.frequency.setValueAtTime(freq * 2.997, time + beat * 0.08);
    overtone.detune.setValueAtTime(Math.sin(step) * 6, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.2 + state.shimmer * 1.6), time);
    filter.Q.setValueAtTime(9 + state.harmony * 8, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.41 + phase) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.016 * state.harmony * state.audioLevel * state.sequence, time + beat * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 3.4);
    overtoneGain.gain.setValueAtTime(0.0001, time);
    overtoneGain.gain.linearRampToValueAtTime(0.005 * state.shimmer * state.audioLevel, time + beat * 0.12);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.4);
    carrier.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    overtone.connect(overtoneGain);
    overtoneGain.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
    carrier.start(time);
    overtone.start(time + beat * 0.08);
    carrier.stop(time + beat * 3.6);
    overtone.stop(time + beat * 2.6);
  }

  function playStitchNeedle(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const tick = context.createOscillator();
    const thread = context.createOscillator();
    const tickGain = context.createGain();
    const threadGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 2 === 0 ? 2 : 1);
    tick.type = step % 4 === 0 ? "square" : "triangle";
    thread.type = "sine";
    tick.frequency.setValueAtTime(freq * 2.1, time);
    tick.frequency.exponentialRampToValueAtTime(freq * 1.34, time + beat * 0.18);
    thread.frequency.setValueAtTime(freq * 0.98, time + beat * 0.025);
    thread.frequency.linearRampToValueAtTime(freq * (1.02 + (step % 5) * 0.02), time + beat * 0.52);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1300 + state.rhythm * 2400 + (step % 6) * 160, time);
    filter.Q.setValueAtTime(7 + state.arp * 10, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.31 + phase) * state.stereo * 0.86, time);
    tickGain.gain.setValueAtTime(0.0001, time);
    tickGain.gain.linearRampToValueAtTime(0.016 * state.arp * state.audioLevel * state.sequence, time + 0.004);
    tickGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.24);
    threadGain.gain.setValueAtTime(0.0001, time);
    threadGain.gain.linearRampToValueAtTime(0.006 * state.shimmer * state.audioLevel, time + beat * 0.035);
    threadGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.7);
    tick.connect(filter);
    filter.connect(tickGain);
    tickGain.connect(pan);
    thread.connect(threadGain);
    threadGain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer && state.percussion > 0.04) {
      const click = context.createBufferSource();
      const clickGain = context.createGain();
      const clickFilter = context.createBiquadFilter();
      click.buffer = audio.noiseBuffer;
      click.playbackRate.setValueAtTime(2.0 + (step % 8) * 0.12, time);
      clickFilter.type = "highpass";
      clickFilter.frequency.setValueAtTime(2500 + state.rhythm * 2200, time);
      clickGain.gain.setValueAtTime(0.0001, time);
      clickGain.gain.linearRampToValueAtTime(0.006 * state.percussion * state.audioLevel, time + 0.003);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.12);
      click.connect(clickFilter);
      clickFilter.connect(clickGain);
      clickGain.connect(audio.compressor);
      click.start(time);
      click.stop(time + beat * 0.14);
    }
    tick.start(time);
    thread.start(time + beat * 0.025);
    tick.stop(time + beat * 0.28);
    thread.stop(time + beat * 0.78);
  }

  function playArchivePage(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const tone = context.createOscillator();
    const overtone = context.createOscillator();
    const gain = context.createGain();
    const overtoneGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 === 0 ? -1 : 0);
    tone.type = "triangle";
    overtone.type = "sine";
    tone.frequency.setValueAtTime(freq * 0.5, time);
    tone.frequency.exponentialRampToValueAtTime(freq * 0.64, time + beat * 2.2);
    overtone.frequency.setValueAtTime(freq * 2.01, time + beat * 0.12);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(520 + state.harmony * 900 + state.shimmer * 500, time);
    filter.Q.setValueAtTime(1.2 + state.harmony * 2.2, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.37 + phase) * state.stereo * 0.72, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * state.harmony * state.audioLevel * state.sequence, time + beat * 0.16);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 3.6);
    overtoneGain.gain.setValueAtTime(0.0001, time);
    overtoneGain.gain.linearRampToValueAtTime(0.005 * state.shimmer * state.audioLevel, time + beat * 0.18);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.2);
    tone.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    overtone.connect(overtoneGain);
    overtoneGain.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
    if (audio.noiseBuffer) {
      const page = context.createBufferSource();
      const pageGain = context.createGain();
      const pageFilter = context.createBiquadFilter();
      page.buffer = audio.noiseBuffer;
      page.playbackRate.setValueAtTime(0.42 + (step % 6) * 0.04 + state.shimmer * 0.12, time);
      pageFilter.type = "bandpass";
      pageFilter.frequency.setValueAtTime(520 + (step % 5) * 180 + state.shimmer * 800, time);
      pageFilter.Q.setValueAtTime(1.1 + state.harmony * 3.2, time);
      pageGain.gain.setValueAtTime(0.0001, time);
      pageGain.gain.linearRampToValueAtTime(0.012 * state.drone * state.audioLevel, time + beat * 0.12);
      pageGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.6);
      page.connect(pageFilter);
      pageFilter.connect(pageGain);
      pageGain.connect(audio.reverbGain || audio.filter);
      page.start(time);
      page.stop(time + beat * 2.8);
    }
    tone.start(time);
    overtone.start(time + beat * 0.12);
    tone.stop(time + beat * 3.8);
    overtone.stop(time + beat * 2.4);
  }

  function playLiftDing(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const ding = context.createOscillator();
    const glide = context.createOscillator();
    const dingGain = context.createGain();
    const glideGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? 1 : 2);
    ding.type = "sine";
    glide.type = "triangle";
    ding.frequency.setValueAtTime(freq * 1.5, time);
    ding.frequency.exponentialRampToValueAtTime(freq * 1.505, time + beat * 1.4);
    glide.frequency.setValueAtTime(freq * (step % 8 < 4 ? 0.5 : 2.0), time);
    glide.frequency.exponentialRampToValueAtTime(freq * (step % 8 < 4 ? 1.0 : 0.74), time + beat * 1.1);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.1 + state.shimmer * 1.2), time);
    filter.Q.setValueAtTime(5 + state.harmony * 8, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.53 + phase) * state.stereo * 0.9, time);
    dingGain.gain.setValueAtTime(0.0001, time);
    dingGain.gain.linearRampToValueAtTime(0.018 * state.melody * state.audioLevel * state.sequence, time + beat * 0.04);
    dingGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.8);
    glideGain.gain.setValueAtTime(0.0001, time);
    glideGain.gain.linearRampToValueAtTime(0.011 * state.harmony * state.audioLevel, time + beat * 0.08);
    glideGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.3);
    ding.connect(filter);
    filter.connect(dingGain);
    dingGain.connect(pan);
    glide.connect(glideGain);
    glideGain.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
    ding.start(time);
    glide.start(time);
    ding.stop(time + beat * 2.0);
    glide.stop(time + beat * 1.4);
  }

  function playSwitchClick(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const relay = context.createOscillator();
    const tone = context.createOscillator();
    const relayGain = context.createGain();
    const toneGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? 1 : 2);
    relay.type = "square";
    tone.type = "triangle";
    relay.frequency.setValueAtTime(freq * (step % 3 === 0 ? 2.0 : 1.0), time);
    relay.frequency.exponentialRampToValueAtTime(freq * 0.72, time + beat * 0.16);
    tone.frequency.setValueAtTime(freq * 1.01, time + beat * 0.018);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1200 + state.rhythm * 2700 + (step % 7) * 180, time);
    filter.Q.setValueAtTime(8 + state.arp * 10, time);
    pan.pan.setValueAtTime(Math.sin(step * 2.21 + phase) * state.stereo, time);
    relayGain.gain.setValueAtTime(0.0001, time);
    relayGain.gain.linearRampToValueAtTime(0.016 * state.percussion * state.audioLevel * state.sequence, time + 0.003);
    relayGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.16);
    toneGain.gain.setValueAtTime(0.0001, time);
    toneGain.gain.linearRampToValueAtTime(0.008 * state.arp * state.audioLevel, time + beat * 0.025);
    toneGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.44);
    relay.connect(filter);
    filter.connect(relayGain);
    relayGain.connect(pan);
    tone.connect(toneGain);
    toneGain.connect(pan);
    pan.connect(audio.filter);
    if (audio.noiseBuffer) {
      const spark = context.createBufferSource();
      const sparkGain = context.createGain();
      const sparkFilter = context.createBiquadFilter();
      spark.buffer = audio.noiseBuffer;
      spark.playbackRate.setValueAtTime(2.2 + (step % 9) * 0.18, time);
      sparkFilter.type = "highpass";
      sparkFilter.frequency.setValueAtTime(2800 + state.rhythm * 2400, time);
      sparkGain.gain.setValueAtTime(0.0001, time);
      sparkGain.gain.linearRampToValueAtTime(0.006 * state.percussion * state.audioLevel, time + 0.002);
      sparkGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.11);
      spark.connect(sparkFilter);
      sparkFilter.connect(sparkGain);
      sparkGain.connect(audio.compressor);
      spark.start(time);
      spark.stop(time + beat * 0.13);
    }
    relay.start(time);
    tone.start(time + beat * 0.018);
    relay.stop(time + beat * 0.2);
    tone.stop(time + beat * 0.5);
  }

  function playCourtStrike(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const body = context.createOscillator();
    const glass = context.createOscillator();
    const bodyGain = context.createGain();
    const glassGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 === 0 ? -1 : 0);
    body.type = "triangle";
    glass.type = "sine";
    body.frequency.setValueAtTime(freq * 0.72, time);
    body.frequency.exponentialRampToValueAtTime(freq * 0.48, time + beat * 0.9);
    glass.frequency.setValueAtTime(freq * 3.02, time + beat * 0.035);
    glass.detune.setValueAtTime(Math.sin(step) * 9, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (0.9 + state.harmony * 1.1), time);
    filter.Q.setValueAtTime(3 + state.harmony * 8, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.49 + phase) * state.stereo * 0.72, time);
    bodyGain.gain.setValueAtTime(0.0001, time);
    bodyGain.gain.linearRampToValueAtTime(0.026 * state.bass * state.audioLevel, time + beat * 0.025);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.1);
    glassGain.gain.setValueAtTime(0.0001, time);
    glassGain.gain.linearRampToValueAtTime(0.01 * state.shimmer * state.audioLevel, time + beat * 0.05);
    glassGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.6);
    body.connect(filter);
    filter.connect(bodyGain);
    bodyGain.connect(pan);
    glass.connect(glassGain);
    glassGain.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
    body.start(time);
    glass.start(time + beat * 0.035);
    body.stop(time + beat * 2.3);
    glass.stop(time + beat * 1.8);
  }

  function playWeatherPressure(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const vane = context.createOscillator();
    const pressure = context.createOscillator();
    const vaneGain = context.createGain();
    const pressureGain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 6 === 0 ? 0 : 1);
    vane.type = "sine";
    pressure.type = "triangle";
    vane.frequency.setValueAtTime(freq * 1.4, time);
    vane.frequency.exponentialRampToValueAtTime(freq * (step % 4 === 0 ? 2.0 : 0.86), time + beat * 0.9);
    pressure.frequency.setValueAtTime(freq * 0.5, time);
    pressure.frequency.linearRampToValueAtTime(freq * 0.56, time + beat * 1.6);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(420 + state.shimmer * 1800 + state.breath * 900, time);
    filter.frequency.exponentialRampToValueAtTime(760 + state.shimmer * 2200, time + beat * 1.3);
    filter.Q.setValueAtTime(1.4 + state.shimmer * 5, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.67 + phase) * state.stereo * 0.9, time);
    vaneGain.gain.setValueAtTime(0.0001, time);
    vaneGain.gain.linearRampToValueAtTime(0.014 * state.melody * state.audioLevel * state.sequence, time + beat * 0.07);
    vaneGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.4);
    pressureGain.gain.setValueAtTime(0.0001, time);
    pressureGain.gain.linearRampToValueAtTime(0.016 * state.drone * state.audioLevel, time + beat * 0.18);
    pressureGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.8);
    vane.connect(filter);
    filter.connect(vaneGain);
    vaneGain.connect(pan);
    pressure.connect(pressureGain);
    pressureGain.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
    if (audio.noiseBuffer) {
      const wind = context.createBufferSource();
      const windGain = context.createGain();
      const windFilter = context.createBiquadFilter();
      wind.buffer = audio.noiseBuffer;
      wind.playbackRate.setValueAtTime(0.5 + state.shimmer * 0.22 + (step % 5) * 0.04, time);
      windFilter.type = "bandpass";
      windFilter.frequency.setValueAtTime(460 + state.breath * 1200 + state.shimmer * 1000, time);
      windFilter.Q.setValueAtTime(0.8 + state.shimmer * 2.4, time);
      windGain.gain.setValueAtTime(0.0001, time);
      windGain.gain.linearRampToValueAtTime(0.008 * state.drone * state.audioLevel, time + beat * 0.2);
      windGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.2);
      wind.connect(windFilter);
      windFilter.connect(windGain);
      windGain.connect(audio.reverbGain || audio.filter);
      wind.start(time);
      wind.stop(time + beat * 2.4);
    }
    vane.start(time);
    pressure.start(time);
    vane.stop(time + beat * 1.6);
    pressure.stop(time + beat * 3.0);
  }

  function playSemaphoreFlash(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const tone = context.createOscillator();
    const ping = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 1 ? 2 : 1);
    tone.type = "square";
    ping.type = step % 3 === 0 ? "sawtooth" : "triangle";
    tone.frequency.setValueAtTime(freq, time);
    ping.frequency.setValueAtTime(freq * (step % 2 ? 1.5 : 2), time);
    ping.detune.setValueAtTime((step % 5 - 2) * 12, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.3 + state.shimmer * 0.5), time);
    filter.Q.setValueAtTime(6 + state.rhythm * 9, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.9) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.02 * (state.percussion + state.arp * 0.7) * state.audioLevel, time + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.36);
    tone.connect(filter);
    ping.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    tone.start(time);
    ping.start(time);
    tone.stop(time + beat * 0.42);
    ping.stop(time + beat * 0.28);
    if (audio.noiseBuffer && state.percussion > 0.04) {
      const click = context.createBufferSource();
      const clickGain = context.createGain();
      click.buffer = audio.noiseBuffer;
      click.playbackRate.setValueAtTime(2.8 + (step % 6) * 0.25, time);
      clickGain.gain.setValueAtTime(0.0001, time);
      clickGain.gain.linearRampToValueAtTime(0.008 * state.percussion * state.audioLevel, time + 0.002);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.12);
      click.connect(clickGain);
      clickGain.connect(audio.compressor);
      click.start(time);
      click.stop(time + beat * 0.16);
    }
  }

  function playPendulumToll(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const root = noteFrequency(degree, -1);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(520 + state.harmony * 680 + state.shimmer * 260, time);
    filter.Q.setValueAtTime(0.8 + state.harmony * 0.6, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.7) * state.stereo * 0.55, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.03 * (state.bass + state.harmony * 0.65) * state.audioLevel, time + beat * 0.08);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 3.4);
    [0.5, 1, 1.5].forEach((ratio, index) => {
      const osc = context.createOscillator();
      osc.type = index === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(root * ratio, time);
      osc.detune.setValueAtTime((index - 1) * (4 + state.shimmer * 8), time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + beat * (3.6 - index * 0.35));
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
    if (audio.noiseBuffer && state.percussion > 0.05) {
      const felt = context.createBufferSource();
      const feltGain = context.createGain();
      felt.buffer = audio.noiseBuffer;
      felt.playbackRate.setValueAtTime(0.36 + (step % 4) * 0.04, time);
      feltGain.gain.setValueAtTime(0.0001, time);
      feltGain.gain.linearRampToValueAtTime(0.006 * state.percussion * state.audioLevel, time + beat * 0.08);
      feltGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.9);
      felt.connect(feltGain);
      feltGain.connect(audio.reverbGain || audio.filter);
      felt.start(time);
      felt.stop(time + beat * 1.1);
    }
  }

  function playAbacusClick(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const clickTone = context.createOscillator();
    const beadTone = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 6 === 0 ? 1 : 2);
    clickTone.type = "square";
    beadTone.type = "triangle";
    clickTone.frequency.setValueAtTime(freq * 1.98, time);
    beadTone.frequency.setValueAtTime(freq, time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.5 + state.shimmer * 0.8), time);
    filter.Q.setValueAtTime(8 + state.arp * 10, time);
    pan.pan.setValueAtTime(Math.sin(step * 2.3 + degree) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.018 * (state.arp + state.percussion * 0.8) * state.audioLevel, time + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.24);
    clickTone.connect(filter);
    beadTone.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.filter);
    clickTone.start(time);
    beadTone.start(time);
    clickTone.stop(time + beat * 0.18);
    beadTone.stop(time + beat * 0.32);
    if (audio.noiseBuffer) {
      const rattle = context.createBufferSource();
      const rattleGain = context.createGain();
      rattle.buffer = audio.noiseBuffer;
      rattle.playbackRate.setValueAtTime(1.8 + (step % 8) * 0.18 + state.groove * 0.5, time);
      rattleGain.gain.setValueAtTime(0.0001, time);
      rattleGain.gain.linearRampToValueAtTime(0.006 * state.percussion * state.audioLevel, time + 0.002);
      rattleGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.11);
      rattle.connect(rattleGain);
      rattleGain.connect(audio.compressor);
      rattle.start(time);
      rattle.stop(time + beat * 0.13);
    }
  }

  function playCipherDrop(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const carrier = context.createOscillator();
    const glint = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 > 4 ? 2 : 1);
    carrier.type = "sine";
    glint.type = "square";
    carrier.frequency.setValueAtTime(freq * 1.52, time);
    carrier.frequency.exponentialRampToValueAtTime(freq * 0.72, time + beat * 0.72);
    glint.frequency.setValueAtTime(freq * 3.04, time);
    glint.detune.setValueAtTime((step % 5 - 2) * (11 + state.shimmer * 9), time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.35 + state.shimmer * 1.4), time);
    filter.Q.setValueAtTime(5 + state.shimmer * 13, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.93 + degree) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.016 * (state.shimmer + state.arp * 0.8) * state.audioLevel, time + beat * 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.86);
    carrier.connect(filter);
    glint.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
    carrier.start(time);
    glint.start(time);
    carrier.stop(time + beat * 0.96);
    glint.stop(time + beat * 0.36);
  }

  function playOrreryChime(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 16 >= 8 ? 1 : 0);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.1 + state.harmony * 0.7), time);
    filter.Q.setValueAtTime(2.6 + state.harmony * 7, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.47 + phase * 0.08) * state.stereo * 0.78, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.018 * (state.harmony + state.drone * 0.5) * state.audioLevel, time + beat * 0.12);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 4.2);
    [0.5, 1, 1.5, 2].forEach((ratio, index) => {
      const osc = context.createOscillator();
      osc.type = index === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq * ratio, time);
      osc.detune.setValueAtTime((index - 1.5) * (4 + state.shimmer * 5), time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + beat * (4.45 - index * 0.24));
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
  }

  function playReactorPulse(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const core = context.createOscillator();
    const edge = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? -1 : 0);
    core.type = "square";
    edge.type = "sawtooth";
    core.frequency.setValueAtTime(freq * 0.5, time);
    edge.frequency.setValueAtTime(freq * (step % 8 > 3 ? 2 : 1), time);
    edge.detune.setValueAtTime((step % 7 - 3) * (8 + state.bass * 12), time);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(190 + state.bass * 620 + state.rhythm * 240, time);
    filter.frequency.exponentialRampToValueAtTime(80 + state.bass * 160, time + beat * 0.52);
    filter.Q.setValueAtTime(1.2 + state.groove * 2.4, time);
    pan.pan.setValueAtTime(Math.sin(step * 2.1) * state.stereo * 0.64, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.032 * (state.bass + state.percussion * 0.5) * state.audioLevel, time + beat * 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.46);
    core.connect(filter);
    edge.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.compressor || audio.filter);
    core.start(time);
    edge.start(time);
    core.stop(time + beat * 0.55);
    edge.stop(time + beat * 0.42);
    if (audio.noiseBuffer && state.percussion > 0.05) {
      const snap = context.createBufferSource();
      const snapGain = context.createGain();
      snap.buffer = audio.noiseBuffer;
      snap.playbackRate.setValueAtTime(0.9 + (step % 4) * 0.21 + state.groove * 0.4, time);
      snapGain.gain.setValueAtTime(0.0001, time);
      snapGain.gain.linearRampToValueAtTime(0.008 * state.percussion * state.audioLevel, time + beat * 0.01);
      snapGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.13);
      snap.connect(snapGain);
      snapGain.connect(audio.compressor || audio.filter);
      snap.start(time);
      snap.stop(time + beat * 0.16);
    }
  }

  function playPhasePing(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const carrier = context.createOscillator();
    const upper = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 > 4 ? 2 : 1);
    carrier.type = "sine";
    upper.type = "square";
    carrier.frequency.setValueAtTime(freq, time);
    upper.frequency.setValueAtTime(freq * 2.01, time);
    upper.detune.setValueAtTime((step % 9 - 4) * (6 + state.shimmer * 6), time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (1.1 + state.shimmer * 1.3), time);
    filter.Q.setValueAtTime(6 + state.arp * 9, time);
    pan.pan.setValueAtTime(Math.sin(step * 1.47 + phase) * state.stereo, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.017 * (state.shimmer + state.arp * 0.7) * state.audioLevel, time + beat * 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 1.35);
    carrier.connect(filter);
    upper.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.delay || audio.filter);
    carrier.start(time);
    upper.start(time);
    carrier.stop(time + beat * 1.45);
    upper.stop(time + beat * 0.42);
  }

  function playForgeStrike(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const body = context.createOscillator();
    const metal = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 4 === 0 ? -2 : -1);
    body.type = "square";
    metal.type = "sawtooth";
    body.frequency.setValueAtTime(freq, time);
    metal.frequency.setValueAtTime(freq * (step % 4 === 0 ? 2.02 : 3.01), time);
    metal.detune.setValueAtTime((step % 5 - 2) * (12 + state.bass * 10), time);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(160 + state.bass * 720 + state.percussion * 280, time);
    filter.frequency.exponentialRampToValueAtTime(70 + state.bass * 160, time + beat * 0.72);
    filter.Q.setValueAtTime(1.1 + state.groove * 2.6, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.73) * state.stereo * 0.46, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.038 * (state.bass + state.percussion * 0.45) * state.audioLevel, time + beat * 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.7);
    body.connect(filter);
    metal.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.compressor || audio.filter);
    body.start(time);
    metal.start(time);
    body.stop(time + beat * 0.8);
    metal.stop(time + beat * 0.45);
    if (audio.noiseBuffer && state.percussion > 0.05) {
      const grit = context.createBufferSource();
      const gritGain = context.createGain();
      const gritFilter = context.createBiquadFilter();
      grit.buffer = audio.noiseBuffer;
      grit.playbackRate.setValueAtTime(0.7 + (step % 6) * 0.18 + state.groove * 0.45, time);
      gritFilter.type = "bandpass";
      gritFilter.frequency.setValueAtTime(520 + state.percussion * 1900, time);
      gritFilter.Q.setValueAtTime(2.4 + state.percussion * 7, time);
      gritGain.gain.setValueAtTime(0.0001, time);
      gritGain.gain.linearRampToValueAtTime(0.014 * state.percussion * state.audioLevel, time + beat * 0.01);
      gritGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.18);
      grit.connect(gritFilter);
      gritFilter.connect(gritGain);
      gritGain.connect(audio.compressor || audio.filter);
      grit.start(time);
      grit.stop(time + beat * 0.22);
    }
  }

  function playOracleFold(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 === 4 ? 2 : 1);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (0.86 + state.shimmer * 0.7), time);
    filter.frequency.exponentialRampToValueAtTime(freq * (1.22 + state.shimmer * 0.5), time + beat * 1.1);
    filter.Q.setValueAtTime(3.2 + state.harmony * 6, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.39 + phase) * state.stereo * 0.84, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.018 * (state.harmony + state.melody * 0.7) * state.audioLevel, time + beat * 0.12);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 3.2);
    [0.5, 1, 1.5].forEach((ratio, index) => {
      const osc = context.createOscillator();
      osc.type = index === 1 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq * ratio, time);
      osc.detune.setValueAtTime((index - 1) * (5 + state.shimmer * 6), time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + beat * (3.35 - index * 0.28));
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
  }

  function playSporePop(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const pop = context.createOscillator();
    const chirp = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 6 > 2 ? 1 : 0);
    pop.type = "square";
    chirp.type = "triangle";
    pop.frequency.setValueAtTime(freq * 0.5, time);
    pop.frequency.exponentialRampToValueAtTime(freq * 0.82, time + beat * 0.18);
    chirp.frequency.setValueAtTime(freq * (1.5 + (step % 5) * 0.09), time);
    chirp.detune.setValueAtTime((step % 7 - 3) * (7 + state.groove * 9), time);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (0.9 + state.shimmer * 1.1), time);
    filter.Q.setValueAtTime(5 + state.percussion * 10, time);
    pan.pan.setValueAtTime(Math.sin(step * 2.17 + degree) * state.stereo * 0.85, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.021 * (state.percussion + state.melody * 0.55) * state.audioLevel, time + beat * 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.44);
    pop.connect(filter);
    chirp.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(audio.compressor || audio.filter);
    pop.start(time);
    chirp.start(time);
    pop.stop(time + beat * 0.46);
    chirp.stop(time + beat * 0.32);
    if (audio.noiseBuffer && state.percussion > 0.04) {
      const dust = context.createBufferSource();
      const dustGain = context.createGain();
      const dustFilter = context.createBiquadFilter();
      dust.buffer = audio.noiseBuffer;
      dust.playbackRate.setValueAtTime(1.2 + (step % 9) * 0.16 + state.groove * 0.42, time);
      dustFilter.type = "highpass";
      dustFilter.frequency.setValueAtTime(620 + state.percussion * 1800, time);
      dustGain.gain.setValueAtTime(0.0001, time);
      dustGain.gain.linearRampToValueAtTime(0.008 * state.percussion * state.audioLevel, time + beat * 0.006);
      dustGain.gain.exponentialRampToValueAtTime(0.0001, time + beat * 0.18);
      dust.connect(dustFilter);
      dustFilter.connect(dustGain);
      dustGain.connect(audio.compressor || audio.filter);
      dust.start(time);
      dust.stop(time + beat * 0.2);
    }
  }

  function playCartogramCall(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 8 >= 4 ? 1 : 0);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (0.96 + state.shimmer * 0.9), time);
    filter.frequency.exponentialRampToValueAtTime(freq * (1.18 + state.shimmer * 0.8), time + beat * 1.3);
    filter.Q.setValueAtTime(2.8 + state.harmony * 6, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.83 + phase * 0.1) * state.stereo, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.018 * (state.harmony + state.melody * 0.65) * state.audioLevel, time + beat * 0.06);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 2.2);
    [1, 1.5, 2].forEach((ratio, index) => {
      const osc = context.createOscillator();
      osc.type = index === 1 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq * ratio, time + index * beat * 0.03);
      osc.detune.setValueAtTime((index - 1) * (5 + state.shimmer * 9), time);
      osc.connect(filter);
      osc.start(time + index * beat * 0.03);
      osc.stop(time + beat * (2.28 - index * 0.2));
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.delay || audio.filter);
  }

  function playQuartzEcho(time, degree, step, beat) {
    if (!audio) return;
    const context = audio.context;
    const output = context.createGain();
    const filter = context.createBiquadFilter();
    const pan = context.createStereoPanner();
    const freq = noteFrequency(degree, step % 16 === 10 ? 2 : 1);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * (0.72 + state.shimmer * 0.8), time);
    filter.frequency.exponentialRampToValueAtTime(freq * (1.42 + state.shimmer * 0.5), time + beat * 2.1);
    filter.Q.setValueAtTime(4.5 + state.harmony * 8, time);
    pan.pan.setValueAtTime(Math.sin(step * 0.31 + phase * 0.12) * state.stereo * 0.88, time);
    output.gain.setValueAtTime(0.0001, time);
    output.gain.linearRampToValueAtTime(0.016 * (state.harmony + state.shimmer * 0.85) * state.audioLevel, time + beat * 0.16);
    output.gain.exponentialRampToValueAtTime(0.0001, time + beat * 4.6);
    [0.5, 1, 1.5, 2, 3].forEach((ratio, index) => {
      const osc = context.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq * ratio, time);
      osc.detune.setValueAtTime((index - 2) * (3 + state.shimmer * 4), time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + beat * (4.8 - index * 0.22));
    });
    filter.connect(output);
    output.connect(pan);
    pan.connect(audio.reverbGain || audio.filter);
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
      gravityWell: [0, 0, 5, 1, 0, 6, 3, 0, 8, 2, 5, 1],
      neonReef: [0, 3, 8, 5, 10, 6, 2, 9, 4, 11],
      dreamLoom: [0, 4, 9, 6, 11, 8, 3, 7, 2, 5, 10, 6],
      signalLab: [0, 7, 1, 9, 2, 11, 4, 8, 3, 10],
      crystalRain: [0, 4, 6, 11, 8, 13, 9, 6, 14, 11, 5, 2],
      clockworkRoom: [0, 3, 6, 2, 8, 1, 7, 4, 10, 5, 11, 6, 1, 9, 4, 12],
      voidBloom: [0, 2, 6, 10, 14, 11, 8, 5, 9, 13, 16, 12, 7, 4],
      magneticInk: [0, 6, 1, 8, 2, 11, 5, 14, 3, 9, 1, 12],
      solarHarp: [0, 4, 8, 13, 11, 9, 6, 4, 2, 7, 11, 16],
      dataOrchard: [0, 2, 4, 7, 9, 4, 11, 7, 5, 2, 8, 12, 9, 5],
      mirrorChoir: [0, 5, 9, 4, 7, 11, 5, 2, 0, 4, 8, 12],
      tidalEngine: [0, 0, 2, 5, 4, 2, 7, 5, 3, 1, 0, 5],
      cometRunes: [0, 8, 1, 11, 4, 13, 2, 9, 5, 15, 3, 12],
      origamiStorm: [0, 8, 1, 6, 13, 2, 9, 4, 11, 3, 7, 14],
      jellyfishChapel: [0, 2, 4, 2, 7, 5, 9, 4, 2, 0, 5, 7],
      obsidianSpires: [0, 0, 1, 5, 0, 6, 1, 3, 0, 5, 2, 1],
      tapeSpirits: [0, 3, 7, 2, 8, 1, 6, 10, 4, 9, 2, 5],
      mothLanterns: [0, 7, 2, 10, 4, 12, 5, 9, 1, 8, 3, 11],
      circuitShrine: [0, 1, 6, 2, 8, 3, 11, 5, 13, 4, 10, 6],
      iceOrgan: [0, 4, 9, 13, 11, 6, 2, 5, 9, 14, 11, 7],
      myceliumRadio: [0, 2, 5, 9, 3, 7, 11, 4, 2, 8, 5, 12],
      thunderLoom: [0, 8, 1, 13, 6, 15, 2, 11, 4, 14, 7, 12],
      railCathedral: [0, 0, 4, 0, 5, 2, 0, 6, 3, 0, 5, 1, 0, 4, 6, 2],
      typewriterSeance: [0, 1, 0, 5, 2, 0, 6, 3, 0, 4, 1, 5],
      glassLabyrinth: [0, 4, 7, 11, 6, 2, 9, 5, 1, 8, 3, 10],
      marbleArcade: [0, 5, 2, 9, 4, 11, 6, 13, 3, 10, 5, 12],
      diceChapel: [0, 6, 1, 11, 3, 13, 2, 9, 5, 12, 4, 10],
      steamKitchen: [0, 3, 5, 2, 7, 4, 9, 6, 0, 5, 1, 8],
      radioGarden: [0, 7, 11, 4, 13, 6, 9, 2, 12, 5, 10, 3],
      stitchMachine: [0, 1, 4, 2, 7, 3, 9, 5, 0, 6, 1, 8],
      lavaLibrary: [0, 5, 9, 12, 7, 4, 2, 11, 5, 1, 8, 13],
      elevatorForest: [0, 4, 7, 12, 9, 5, 2, 14, 0, 7, 3, 11],
      switchboardChoir: [0, 1, 6, 2, 8, 3, 11, 5, 0, 7, 1, 9],
      prismCourt: [0, 5, 7, 12, 10, 6, 3, 1, 0, 4, 8, 11],
      weatherFactory: [0, 2, 5, 9, 4, 8, 11, 6, 0, 7, 3, 10],
      semaphoreBloom: [0, 7, 1, 8, 2, 9, 4, 11, 0, 6, 3, 10],
      pendulumTemple: [0, 4, 7, 12, 7, 4, 0, 5, 9, 5, 2, 11],
      neonAbacus: [0, 2, 4, 7, 11, 5, 9, 13, 3, 6, 10, 14],
      cipherFountain: [0, 1, 4, 8, 3, 10, 5, 12, 0, 6, 2, 11],
      orreryCathedral: [0, 4, 7, 12, 11, 7, 4, 2, 0, 5, 9, 14],
      velvetReactor: [0, 6, 1, 8, 3, 10, 5, 12, 0, 7, 2, 13],
      phaseArray: [0, 3, 1, 6, 2, 8, 4, 11, 0, 5, 9, 14],
      tectonicForge: [0, 0, 5, 0, 1, 0, 6, 0, 3, 0, 5, 2],
      paperOracle: [0, 4, 7, 11, 7, 4, 2, 0, 5, 9, 12, 9],
      sporeSemaphore: [0, 1, 5, 2, 8, 3, 10, 6, 0, 5, 1, 9],
      cartogramChoir: [0, 6, 2, 9, 4, 11, 7, 13, 1, 8, 3, 10],
      quartzArchive: [0, 4, 9, 16, 11, 6, 2, 14, 7, 12, 5, 17],
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
