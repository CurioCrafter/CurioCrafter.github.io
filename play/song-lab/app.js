const canvas = document.querySelector("#analysisCanvas");
const ctx = canvas.getContext("2d");
const playButton = document.querySelector("#playButton");
const meterFill = document.querySelector("#meterFill");
const tempoValue = document.querySelector("#tempoValue");
const keyValue = document.querySelector("#keyValue");
const timeValue = document.querySelector("#timeValue");
const segmentValue = document.querySelector("#segmentValue");
const energyValue = document.querySelector("#energyValue");
const energyBar = document.querySelector("#energyBar");
const chromaValue = document.querySelector("#chromaValue");
const peakValue = document.querySelector("#peakValue");

const chromaNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const analysis = {
  title: "Signal Sketch 04",
  tempo: 128,
  key: "D Dorian",
  duration: 96,
  segments: [
    { label: "Intro", start: 0, end: 13.5, color: "#65d6b2" },
    { label: "Build", start: 13.5, end: 29.5, color: "#9ed184" },
    { label: "Hook", start: 29.5, end: 50.5, color: "#f5b166" },
    { label: "Break", start: 50.5, end: 64, color: "#7aa6dd" },
    { label: "Bridge", start: 64, end: 78, color: "#e98970" },
    { label: "Final Hook", start: 78, end: 96, color: "#d779aa" },
  ],
};

const state = {
  time: 0,
  playing: true,
  lastFrame: performance.now(),
  width: 0,
  height: 0,
  dragging: false,
  layers: {
    beats: true,
    chroma: true,
    peaks: true,
    segments: true,
  },
};

const beatStep = 60 / analysis.tempo;
const beats = Array.from(
  { length: Math.floor(analysis.duration / beatStep) + 1 },
  (_, index) => index * beatStep,
);

const frames = Array.from({ length: 360 }, (_, index) => {
  const progress = index / 359;
  const time = progress * analysis.duration;
  const phraseLift = Math.sin(progress * Math.PI * 6) * 0.14;
  const transient = Math.sin(time * 5.7) * 0.08 + Math.sin(time * 9.9) * 0.04;
  const energy = clamp(0.42 + phraseLift + transient + getSegmentLift(time), 0.08, 0.95);
  const chroma = chromaNames.map((_, noteIndex) => {
    const center = (2 + Math.round(time / 8) + noteIndex * 0.04) % 12;
    const distance = Math.abs(noteIndex - center);
    const wrapped = Math.min(distance, 12 - distance);
    return clamp(1 - wrapped / 5 + Math.sin(time * 0.12 + noteIndex) * 0.12, 0.04, 1);
  });
  const spectralPeak = Math.round(220 + energy * 620 + Math.sin(time * 0.33) * 120);

  return { time, energy, chroma, spectralPeak };
});

tempoValue.textContent = `${analysis.tempo} BPM`;
keyValue.textContent = analysis.key;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getSegmentLift(time) {
  const segment = getSegment(time);
  if (segment.label === "Hook" || segment.label === "Final Hook") {
    return 0.23;
  }
  if (segment.label === "Bridge") {
    return 0.08;
  }
  if (segment.label === "Break") {
    return -0.16;
  }
  return 0;
}

function getSegment(time) {
  return (
    analysis.segments.find((segment) => time >= segment.start && time < segment.end) ??
    analysis.segments.at(-1)
  );
}

function getFrame(time) {
  const index = clamp(
    Math.round((time / analysis.duration) * (frames.length - 1)),
    0,
    frames.length - 1,
  );
  return frames[index];
}

function formatTime(time) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  const tenths = Math.floor((time % 1) * 10);
  return `${minutes}:${seconds}.${tenths}`;
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const bounds = canvas.getBoundingClientRect();
  state.width = Math.max(320, Math.floor(bounds.width));
  state.height = Math.max(360, Math.floor(bounds.height));
  canvas.width = Math.floor(state.width * dpr);
  canvas.height = Math.floor(state.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  draw();
}

function timeToX(time) {
  const pad = getPadding();
  return pad.left + (time / analysis.duration) * (state.width - pad.left - pad.right);
}

function xToTime(x) {
  const pad = getPadding();
  const progress = (x - pad.left) / (state.width - pad.left - pad.right);
  return clamp(progress * analysis.duration, 0, analysis.duration);
}

function getPadding() {
  const narrow = state.width < 620;
  return {
    left: narrow ? 22 : 54,
    right: narrow ? 18 : 34,
    top: narrow ? 84 : 92,
    bottom: narrow ? 52 : 72,
  };
}

function draw() {
  const pad = getPadding();
  const contentWidth = state.width - pad.left - pad.right;
  const contentHeight = state.height - pad.top - pad.bottom;

  ctx.clearRect(0, 0, state.width, state.height);
  drawBackground();
  drawGrid(pad, contentWidth, contentHeight);

  if (state.layers.segments) {
    drawSegments(pad, contentWidth, contentHeight);
  }

  drawWaveform(pad, contentWidth, contentHeight);
  drawEnergyLane(pad, contentWidth, contentHeight);

  if (state.layers.beats) {
    drawBeats(pad, contentHeight);
  }

  if (state.layers.chroma) {
    drawChroma(pad, contentWidth, contentHeight);
  }

  if (state.layers.peaks) {
    drawPeaks(pad, contentWidth, contentHeight);
  }

  drawPlayhead(pad, contentHeight);
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, state.width, state.height);
  gradient.addColorStop(0, "#071116");
  gradient.addColorStop(0.55, "#111816");
  gradient.addColorStop(1, "#17120f");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, state.width, state.height);

  ctx.globalAlpha = 0.34;
  for (let i = 0; i < 18; i += 1) {
    const x = (i / 17) * state.width;
    const y = state.height * (0.2 + Math.sin(i * 1.7) * 0.08);
    const radius = 140 + Math.sin(i) * 42;
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
    glow.addColorStop(0, i % 2 ? "rgba(245,177,102,0.1)" : "rgba(101,214,178,0.12)");
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }
  ctx.globalAlpha = 1;
}

function drawGrid(pad, contentWidth, contentHeight) {
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  ctx.fillStyle = "rgba(237,244,239,0.42)";
  ctx.font = "700 11px Inter, sans-serif";

  for (let time = 0; time <= analysis.duration; time += 8) {
    const x = timeToX(time);
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, pad.top + contentHeight);
    ctx.stroke();

    if (time % 16 === 0) {
      ctx.fillText(formatTime(time).slice(0, 5), x + 4, pad.top + contentHeight + 22);
    }
  }

  const laneNames = ["wave", "energy", "chroma", "peaks"];
  laneNames.forEach((name, index) => {
    const y = pad.top + (contentHeight / laneNames.length) * index;
    ctx.strokeStyle = "rgba(255,255,255,0.09)";
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + contentWidth, y);
    ctx.stroke();
    ctx.fillStyle = "rgba(237,244,239,0.5)";
    ctx.fillText(name.toUpperCase(), pad.left, y + 16);
  });
}

function drawSegments(pad, contentWidth, contentHeight) {
  analysis.segments.forEach((segment) => {
    const x = timeToX(segment.start);
    const width = ((segment.end - segment.start) / analysis.duration) * contentWidth;
    ctx.fillStyle = hexToRgba(segment.color, 0.12);
    ctx.fillRect(x, pad.top, width, contentHeight);
    ctx.fillStyle = hexToRgba(segment.color, 0.88);
    ctx.fillRect(x, pad.top, Math.max(2, width), 3);
    ctx.fillStyle = "rgba(255,248,236,0.7)";
    ctx.font = "800 12px Inter, sans-serif";
    ctx.fillText(segment.label, x + 9, pad.top + 34);
  });
}

function drawWaveform(pad, contentWidth, contentHeight) {
  const laneTop = pad.top + contentHeight * 0.08;
  const laneHeight = contentHeight * 0.23;
  const centerY = laneTop + laneHeight / 2;

  ctx.strokeStyle = "rgba(101,214,178,0.9)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  frames.forEach((frame, index) => {
    const x = pad.left + (index / (frames.length - 1)) * contentWidth;
    const wave =
      Math.sin(frame.time * 4.4) * frame.energy * 0.62 +
      Math.sin(frame.time * 13.2) * frame.energy * 0.24;
    const y = centerY + wave * laneHeight * 0.48;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.strokeStyle = "rgba(101,214,178,0.24)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  frames.forEach((frame, index) => {
    const x = pad.left + (index / (frames.length - 1)) * contentWidth;
    const y = centerY - frame.energy * laneHeight * 0.45;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();
}

function drawEnergyLane(pad, contentWidth, contentHeight) {
  const laneTop = pad.top + contentHeight * 0.31;
  const laneHeight = contentHeight * 0.19;
  const gradient = ctx.createLinearGradient(pad.left, 0, pad.left + contentWidth, 0);
  gradient.addColorStop(0, "rgba(101,214,178,0.82)");
  gradient.addColorStop(0.55, "rgba(245,177,102,0.84)");
  gradient.addColorStop(1, "rgba(231,111,101,0.82)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(pad.left, laneTop + laneHeight);
  frames.forEach((frame, index) => {
    const x = pad.left + (index / (frames.length - 1)) * contentWidth;
    const y = laneTop + laneHeight - frame.energy * laneHeight;
    ctx.lineTo(x, y);
  });
  ctx.lineTo(pad.left + contentWidth, laneTop + laneHeight);
  ctx.closePath();
  ctx.fill();
}

function drawBeats(pad, contentHeight) {
  beats.forEach((beat, index) => {
    const x = timeToX(beat);
    const accent = index % 4 === 0;
    ctx.strokeStyle = accent ? "rgba(245,177,102,0.65)" : "rgba(245,177,102,0.22)";
    ctx.lineWidth = accent ? 2 : 1;
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, pad.top + contentHeight);
    ctx.stroke();
  });
}

function drawChroma(pad, contentWidth, contentHeight) {
  const laneTop = pad.top + contentHeight * 0.56;
  const laneHeight = contentHeight * 0.22;
  const barWidth = contentWidth / frames.length;

  frames.forEach((frame, index) => {
    const strongest = getStrongestChroma(frame);
    const x = pad.left + index * barWidth;
    const hue = (strongest.index / 12) * 360;
    ctx.fillStyle = `hsla(${hue}, 72%, 62%, ${0.2 + strongest.value * 0.54})`;
    ctx.fillRect(x, laneTop, Math.ceil(barWidth) + 1, laneHeight);
  });

  chromaNames.forEach((name, index) => {
    if (index % 2 !== 0) {
      return;
    }
    const y = laneTop + laneHeight - (index / chromaNames.length) * laneHeight;
    ctx.fillStyle = "rgba(237,244,239,0.5)";
    ctx.font = "700 10px Inter, sans-serif";
    ctx.fillText(name, pad.left + 7, y - 4);
  });
}

function drawPeaks(pad, contentWidth, contentHeight) {
  const laneTop = pad.top + contentHeight * 0.82;
  const laneHeight = contentHeight * 0.16;

  ctx.strokeStyle = "rgba(122,166,221,0.86)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  frames.forEach((frame, index) => {
    const x = pad.left + (index / (frames.length - 1)) * contentWidth;
    const normalized = clamp((frame.spectralPeak - 200) / 900, 0, 1);
    const y = laneTop + laneHeight - normalized * laneHeight;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  frames.forEach((frame, index) => {
    if (index % 26 !== 0) {
      return;
    }
    const x = pad.left + (index / (frames.length - 1)) * contentWidth;
    const normalized = clamp((frame.spectralPeak - 200) / 900, 0, 1);
    const y = laneTop + laneHeight - normalized * laneHeight;
    ctx.fillStyle = "rgba(122,166,221,0.88)";
    ctx.beginPath();
    ctx.arc(x, y, 3.4, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawPlayhead(pad, contentHeight) {
  const x = timeToX(state.time);
  const frame = getFrame(state.time);
  const segment = getSegment(state.time);

  ctx.strokeStyle = "#fff8ec";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, pad.top - 12);
  ctx.lineTo(x, pad.top + contentHeight + 10);
  ctx.stroke();

  ctx.fillStyle = segment.color;
  ctx.beginPath();
  ctx.arc(x, pad.top - 15, 7 + frame.energy * 5, 0, Math.PI * 2);
  ctx.fill();
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getStrongestChroma(frame) {
  return frame.chroma.reduce(
    (best, value, index) => (value > best.value ? { value, index } : best),
    { value: 0, index: 0 },
  );
}

function updateReadout() {
  const frame = getFrame(state.time);
  const segment = getSegment(state.time);
  const strongest = getStrongestChroma(frame);
  const progress = state.time / analysis.duration;

  timeValue.textContent = formatTime(state.time);
  segmentValue.textContent = segment.label;
  energyValue.textContent = frame.energy.toFixed(2);
  chromaValue.textContent = chromaNames[strongest.index];
  peakValue.textContent = `${frame.spectralPeak} Hz`;
  energyBar.style.width = `${Math.round(frame.energy * 100)}%`;
  meterFill.style.width = `${Math.round(progress * 1000) / 10}%`;
}

function tick(now) {
  const delta = Math.min(0.08, (now - state.lastFrame) / 1000);
  state.lastFrame = now;

  if (state.playing && !state.dragging) {
    state.time = (state.time + delta * 5.8) % analysis.duration;
  }

  updateReadout();
  draw();
  requestAnimationFrame(tick);
}

function setTime(time) {
  state.time = clamp(time, 0, analysis.duration);
  updateReadout();
  draw();
}

function jumpTo(label) {
  const segment = analysis.segments.find((entry) => entry.label === label);
  if (segment) {
    setTime(segment.start);
  }
}

function getPointerX(event) {
  const rect = canvas.getBoundingClientRect();
  const source = event.touches?.[0] ?? event;
  return source.clientX - rect.left;
}

canvas.addEventListener("pointerdown", (event) => {
  state.dragging = true;
  setTime(xToTime(getPointerX(event)));
});

canvas.addEventListener("pointermove", (event) => {
  if (state.dragging) {
    setTime(xToTime(getPointerX(event)));
  }
});

window.addEventListener("pointerup", () => {
  state.dragging = false;
});

playButton.addEventListener("click", () => {
  state.playing = !state.playing;
  playButton.textContent = state.playing ? "Pause scan" : "Play scan";
});

document.querySelector("#introButton").addEventListener("click", () => jumpTo("Intro"));
document.querySelector("#hookButton").addEventListener("click", () => jumpTo("Hook"));
document.querySelector("#bridgeButton").addEventListener("click", () => jumpTo("Bridge"));

document.querySelectorAll("[data-layer]").forEach((input) => {
  input.addEventListener("change", () => {
    state.layers[input.dataset.layer] = input.checked;
    draw();
  });
});

const resizeObserver = new ResizeObserver(resize);
resizeObserver.observe(canvas);
playButton.textContent = "Pause scan";
resize();
updateReadout();
requestAnimationFrame(tick);
