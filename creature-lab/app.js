const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");

const ui = {
  modeLabel: document.getElementById("modeLabel"),
  fpsLabel: document.getElementById("fpsLabel"),
  populationLabel: document.getElementById("populationLabel"),
  debugPanel: document.getElementById("debugPanel"),
  foodButton: document.getElementById("foodButton"),
  threatButton: document.getElementById("threatButton"),
  calmButton: document.getElementById("calmButton"),
  resetButton: document.getElementById("resetButton"),
  speedSlider: document.getElementById("speedSlider"),
  debugToggle: document.getElementById("debugToggle"),
  trailToggle: document.getElementById("trailToggle"),
  forageMetric: document.getElementById("forageMetric"),
  avoidMetric: document.getElementById("avoidMetric"),
  cohereMetric: document.getElementById("cohereMetric"),
  energyMetric: document.getElementById("energyMetric"),
};

const world = {
  width: 1,
  height: 1,
  dpr: 1,
  agents: [],
  food: [],
  threats: [],
  ripples: [],
  pointer: { x: 0, y: 0, active: false },
  speed: 1,
  debug: true,
  trails: true,
  time: 0,
  frame: 0,
  fps: 60,
};

const config = {
  agentCount: 24,
  neighborRadius: 118,
  separationRadius: 34,
  foodSense: 230,
  threatSense: 190,
  maxSpeed: 88,
  maxTurn: 74,
};

const palettes = [
  { body: "#51f2e8", fin: "#f7c35b" },
  { body: "#9fe27a", fin: "#51f2e8" },
  { body: "#f4f0e8", fin: "#ff6b5e" },
  { body: "#7bb8ff", fin: "#f7c35b" },
];

function resize() {
  const rect = canvas.getBoundingClientRect();
  world.dpr = Math.min(window.devicePixelRatio || 1, 2);
  world.width = Math.max(1, rect.width);
  world.height = Math.max(1, rect.height);
  canvas.width = Math.floor(world.width * world.dpr);
  canvas.height = Math.floor(world.height * world.dpr);
  ctx.setTransform(world.dpr, 0, 0, world.dpr, 0, 0);
}

function reset() {
  world.agents = [];
  world.food = [];
  world.threats = [];
  world.ripples = [];
  world.time = 0;
  world.frame = 0;

  for (let index = 0; index < config.agentCount; index += 1) {
    world.agents.push(createAgent(index));
  }

  for (let index = 0; index < 9; index += 1) {
    addFood(randomBetween(90, world.width - 90), randomBetween(90, world.height - 90), 48 + Math.random() * 28);
  }

  addThreat(world.width * 0.74, world.height * 0.42, 88);
}

function createAgent(index) {
  const angle = Math.random() * Math.PI * 2;
  const palette = palettes[index % palettes.length];
  return {
    id: index + 1,
    x: randomBetween(world.width * 0.25, world.width * 0.65),
    y: randomBetween(world.height * 0.25, world.height * 0.72),
    vx: Math.cos(angle) * randomBetween(18, 48),
    vy: Math.sin(angle) * randomBetween(18, 48),
    radius: randomBetween(7, 11),
    hunger: randomBetween(0.2, 0.68),
    fear: 0,
    energy: randomBetween(0.72, 1),
    state: "forage",
    target: null,
    palette,
  };
}

function addFood(x, y, value = 70) {
  world.food.push({
    x: clamp(x, 28, world.width - 28),
    y: clamp(y, 28, world.height - 28),
    value,
    pulse: Math.random() * Math.PI * 2,
  });
  addRipple(x, y, "#9fe27a");
}

function addThreat(x, y, power = 95) {
  world.threats.push({
    x: clamp(x, 40, world.width - 40),
    y: clamp(y, 40, world.height - 40),
    power,
    age: 0,
  });
  addRipple(x, y, "#ff6b5e");
}

function addRipple(x, y, color) {
  world.ripples.push({ x, y, color, age: 0, life: 0.82 });
}

function step(dt) {
  const scaledDt = Math.min(dt * world.speed, 0.05);
  world.time += scaledDt;

  for (const threat of world.threats) {
    threat.age += scaledDt;
    threat.power *= 1 - scaledDt * 0.018;
  }
  world.threats = world.threats.filter((threat) => threat.power > 12);

  for (const food of world.food) {
    food.pulse += scaledDt * 3;
  }

  for (const agent of world.agents) {
    updateAgent(agent, scaledDt);
  }

  for (const ripple of world.ripples) {
    ripple.age += scaledDt;
  }
  world.ripples = world.ripples.filter((ripple) => ripple.age < ripple.life);
}

function updateAgent(agent, dt) {
  const nearestFood = findNearest(agent, world.food, config.foodSense);
  const nearestThreat = findNearest(agent, world.threats, config.threatSense);
  const neighbors = world.agents.filter((other) => other !== agent && distance(agent, other) < config.neighborRadius);

  const desired = { x: 0, y: 0 };
  agent.hunger = clamp(agent.hunger + dt * 0.035, 0, 1);
  agent.energy = clamp(agent.energy - dt * (0.012 + agent.hunger * 0.018), 0.12, 1);
  agent.fear = nearestThreat ? clamp(1 - nearestThreat.distance / config.threatSense, 0, 1) : Math.max(0, agent.fear - dt * 0.9);

  if (nearestThreat && agent.fear > 0.18) {
    agent.state = "avoid";
    agent.target = nearestThreat.item;
    steerAway(desired, agent, nearestThreat.item, 1.8 + agent.fear);
  } else if (nearestFood && agent.hunger > 0.28) {
    agent.state = "forage";
    agent.target = nearestFood.item;
    steerToward(desired, agent, nearestFood.item, 1.05 + agent.hunger);
  } else if (neighbors.length > 2) {
    agent.state = "cohere";
    agent.target = null;
    steerCohesion(desired, agent, neighbors, 0.75);
  } else {
    agent.state = "scan";
    agent.target = null;
    desired.x += Math.cos(world.time * 0.7 + agent.id) * 0.4;
    desired.y += Math.sin(world.time * 0.9 + agent.id * 1.7) * 0.4;
  }

  steerSeparation(desired, agent, neighbors, 1.35);
  steerBounds(desired, agent);

  const desiredLength = Math.hypot(desired.x, desired.y) || 1;
  const targetSpeed = config.maxSpeed * (0.58 + agent.energy * 0.34 + agent.fear * 0.42);
  const targetVx = (desired.x / desiredLength) * targetSpeed;
  const targetVy = (desired.y / desiredLength) * targetSpeed;
  const turn = config.maxTurn * dt;

  agent.vx += clamp(targetVx - agent.vx, -turn, turn);
  agent.vy += clamp(targetVy - agent.vy, -turn, turn);

  const speed = Math.hypot(agent.vx, agent.vy);
  if (speed > targetSpeed) {
    agent.vx = (agent.vx / speed) * targetSpeed;
    agent.vy = (agent.vy / speed) * targetSpeed;
  }

  agent.x += agent.vx * dt;
  agent.y += agent.vy * dt;
  agent.x = wrap(agent.x, -20, world.width + 20);
  agent.y = wrap(agent.y, -20, world.height + 20);

  eatFood(agent);
}

function steerToward(out, agent, target, weight) {
  const dx = target.x - agent.x;
  const dy = target.y - agent.y;
  const length = Math.hypot(dx, dy) || 1;
  out.x += (dx / length) * weight;
  out.y += (dy / length) * weight;
}

function steerAway(out, agent, target, weight) {
  const dx = agent.x - target.x;
  const dy = agent.y - target.y;
  const length = Math.hypot(dx, dy) || 1;
  out.x += (dx / length) * weight;
  out.y += (dy / length) * weight;
}

function steerCohesion(out, agent, neighbors, weight) {
  const center = neighbors.reduce(
    (sum, other) => ({ x: sum.x + other.x, y: sum.y + other.y }),
    { x: 0, y: 0 },
  );
  center.x /= neighbors.length;
  center.y /= neighbors.length;
  steerToward(out, agent, center, weight);
}

function steerSeparation(out, agent, neighbors, weight) {
  for (const other of neighbors) {
    const gap = distance(agent, other);
    if (gap > config.separationRadius) continue;
    const force = (1 - gap / config.separationRadius) * weight;
    steerAway(out, agent, other, force);
  }
}

function steerBounds(out, agent) {
  const margin = 70;
  if (agent.x < margin) out.x += 0.9;
  if (agent.x > world.width - margin) out.x -= 0.9;
  if (agent.y < margin) out.y += 0.9;
  if (agent.y > world.height - margin) out.y -= 0.9;
}

function eatFood(agent) {
  for (let index = world.food.length - 1; index >= 0; index -= 1) {
    const food = world.food[index];
    if (distance(agent, food) > agent.radius + 14) continue;
    agent.hunger = clamp(agent.hunger - food.value / 130, 0, 1);
    agent.energy = clamp(agent.energy + food.value / 180, 0, 1);
    world.food.splice(index, 1);
    addRipple(food.x, food.y, "#f7c35b");
  }
}

function findNearest(origin, items, maxDistance) {
  let best = null;
  for (const item of items) {
    const gap = distance(origin, item);
    if (gap > maxDistance || (best && gap >= best.distance)) continue;
    best = { item, distance: gap };
  }
  return best;
}

function render() {
  if (world.trails) {
    ctx.fillStyle = "rgba(5, 9, 13, 0.22)";
    ctx.fillRect(0, 0, world.width, world.height);
  } else {
    ctx.clearRect(0, 0, world.width, world.height);
    drawBackground();
  }

  drawBackgroundDetails();
  for (const ripple of world.ripples) drawRipple(ripple);
  for (const food of world.food) drawFood(food);
  for (const threat of world.threats) drawThreat(threat);
  for (const agent of world.agents) drawAgent(agent);
  if (world.debug) drawDebugVectors();
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, world.width, world.height);
  gradient.addColorStop(0, "#061018");
  gradient.addColorStop(0.5, "#08151a");
  gradient.addColorStop(1, "#05070d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, world.width, world.height);
}

function drawBackgroundDetails() {
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = "#51f2e8";
  ctx.lineWidth = 1;
  const spacing = 64;
  const offset = (world.time * 12) % spacing;
  for (let x = -spacing; x < world.width + spacing; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x + offset, 0);
    ctx.lineTo(x - 140 + offset, world.height);
    ctx.stroke();
  }
  ctx.restore();
}

function drawRipple(ripple) {
  const t = ripple.age / ripple.life;
  ctx.save();
  ctx.globalAlpha = 1 - t;
  ctx.strokeStyle = ripple.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(ripple.x, ripple.y, 16 + t * 86, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawFood(food) {
  const pulse = Math.sin(food.pulse) * 3;
  ctx.save();
  ctx.shadowColor = "#9fe27a";
  ctx.shadowBlur = 18;
  ctx.fillStyle = "#9fe27a";
  ctx.beginPath();
  ctx.arc(food.x, food.y, 8 + pulse, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawThreat(threat) {
  const radius = 22 + Math.sin(world.time * 5 + threat.age) * 4;
  ctx.save();
  ctx.globalAlpha = clamp(threat.power / 95, 0.18, 0.88);
  ctx.shadowColor = "#ff6b5e";
  ctx.shadowBlur = 28;
  ctx.strokeStyle = "#ff6b5e";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(threat.x, threat.y, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(threat.x - radius * 0.72, threat.y - radius * 0.72);
  ctx.lineTo(threat.x + radius * 0.72, threat.y + radius * 0.72);
  ctx.moveTo(threat.x + radius * 0.72, threat.y - radius * 0.72);
  ctx.lineTo(threat.x - radius * 0.72, threat.y + radius * 0.72);
  ctx.stroke();
  ctx.restore();
}

function drawAgent(agent) {
  const angle = Math.atan2(agent.vy, agent.vx);
  const speed = Math.hypot(agent.vx, agent.vy);
  const stateColor = agent.state === "avoid" ? "#ff6b5e" : agent.state === "cohere" ? "#f7c35b" : agent.palette.body;

  ctx.save();
  ctx.translate(agent.x, agent.y);
  ctx.rotate(angle);
  ctx.shadowColor = stateColor;
  ctx.shadowBlur = agent.state === "avoid" ? 20 : 11;

  ctx.fillStyle = stateColor;
  ctx.beginPath();
  ctx.moveTo(agent.radius * 1.8, 0);
  ctx.quadraticCurveTo(-agent.radius * 0.7, agent.radius * 1.05, -agent.radius * 1.45, 0);
  ctx.quadraticCurveTo(-agent.radius * 0.7, -agent.radius * 1.05, agent.radius * 1.8, 0);
  ctx.fill();

  ctx.fillStyle = agent.palette.fin;
  ctx.beginPath();
  ctx.moveTo(-agent.radius * 1.15, 0);
  ctx.lineTo(-agent.radius * 2.2, agent.radius * 0.78);
  ctx.lineTo(-agent.radius * 1.8, 0);
  ctx.lineTo(-agent.radius * 2.2, -agent.radius * 0.78);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#061014";
  ctx.beginPath();
  ctx.arc(agent.radius * 0.78, -agent.radius * 0.26, Math.max(1.5, agent.radius * 0.18), 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (world.debug) {
    ctx.save();
    ctx.globalAlpha = 0.45;
    ctx.strokeStyle = stateColor;
    ctx.beginPath();
    ctx.moveTo(agent.x, agent.y);
    ctx.lineTo(agent.x + (agent.vx / Math.max(speed, 1)) * 28, agent.y + (agent.vy / Math.max(speed, 1)) * 28);
    ctx.stroke();
    ctx.restore();
  }
}

function drawDebugVectors() {
  ctx.save();
  ctx.globalAlpha = 0.16;
  ctx.strokeStyle = "#f4f0e8";
  for (const agent of world.agents) {
    if (!agent.target) continue;
    ctx.beginPath();
    ctx.moveTo(agent.x, agent.y);
    ctx.lineTo(agent.target.x, agent.target.y);
    ctx.stroke();
  }
  ctx.restore();
}

function updateHud() {
  const counts = countStates();
  const avgEnergy = world.agents.reduce((sum, agent) => sum + agent.energy, 0) / world.agents.length;
  const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "forage";

  ui.modeLabel.textContent = `${labelForState(dominant)} mode`;
  ui.fpsLabel.textContent = `${Math.round(world.fps)} fps`;
  ui.populationLabel.textContent = `${world.agents.length} agents`;
  ui.forageMetric.textContent = counts.forage || 0;
  ui.avoidMetric.textContent = counts.avoid || 0;
  ui.cohereMetric.textContent = counts.cohere || 0;
  ui.energyMetric.textContent = `${Math.round(avgEnergy * 100)}%`;
  ui.debugPanel.hidden = !world.debug;

  ui.debugPanel.innerHTML = [
    ["Targeting", `${world.food.length} food nodes`],
    ["Threat field", `${world.threats.length} active`],
    ["Dominant state", labelForState(dominant)],
    ["Input", "Click food / Shift threat"],
  ]
    .map(([label, value]) => `<article class="debug-card"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
}

function countStates() {
  return world.agents.reduce((counts, agent) => {
    counts[agent.state] = (counts[agent.state] || 0) + 1;
    return counts;
  }, {});
}

function labelForState(state) {
  return {
    avoid: "Avoid",
    cohere: "Cohere",
    forage: "Forage",
    scan: "Scan",
  }[state] || "Forage";
}

function bindInput() {
  canvas.addEventListener("pointermove", (event) => {
    const point = canvasPoint(event);
    world.pointer = { ...point, active: true };
  });

  canvas.addEventListener("pointerleave", () => {
    world.pointer.active = false;
  });

  canvas.addEventListener("pointerdown", (event) => {
    const point = canvasPoint(event);
    if (event.shiftKey || event.button === 2) {
      addThreat(point.x, point.y);
    } else {
      addFood(point.x, point.y);
    }
  });

  canvas.addEventListener("contextmenu", (event) => event.preventDefault());

  ui.foodButton.addEventListener("click", () => {
    addFood(randomBetween(world.width * 0.18, world.width * 0.82), randomBetween(world.height * 0.18, world.height * 0.82));
  });

  ui.threatButton.addEventListener("click", () => {
    addThreat(randomBetween(world.width * 0.18, world.width * 0.82), randomBetween(world.height * 0.18, world.height * 0.82));
  });

  ui.calmButton.addEventListener("click", () => {
    world.threats = [];
    addRipple(world.width * 0.5, world.height * 0.5, "#51f2e8");
  });

  ui.resetButton.addEventListener("click", reset);

  ui.speedSlider.addEventListener("input", () => {
    world.speed = Number(ui.speedSlider.value);
  });

  ui.debugToggle.addEventListener("change", () => {
    world.debug = ui.debugToggle.checked;
  });

  ui.trailToggle.addEventListener("change", () => {
    world.trails = ui.trailToggle.checked;
    if (!world.trails) drawBackground();
  });
}

function canvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * world.width,
    y: ((event.clientY - rect.top) / rect.height) * world.height,
  };
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function randomBetween(min, max) {
  if (max <= min) return min;
  return min + Math.random() * (max - min);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function wrap(value, min, max) {
  if (value < min) return max;
  if (value > max) return min;
  return value;
}

let last = performance.now();
let fpsClock = last;
let fpsFrames = 0;

function tick(now) {
  const dt = Math.min((now - last) / 1000, 0.08);
  last = now;
  fpsFrames += 1;
  if (now - fpsClock >= 500) {
    world.fps = (fpsFrames * 1000) / (now - fpsClock);
    fpsFrames = 0;
    fpsClock = now;
  }

  step(dt);
  render();
  if (world.frame % 12 === 0) updateHud();
  world.frame += 1;
  requestAnimationFrame(tick);
}

function init() {
  resize();
  bindInput();
  reset();
  drawBackground();
  updateHud();
  window.__CREATURE_LAB_READY = true;
  document.documentElement.dataset.creatureLabReady = "true";
  requestAnimationFrame(tick);
}

window.addEventListener("resize", () => {
  resize();
  drawBackground();
});

init();
