// First-visit intro: black screen, a white-outlined lionfish from Shipwreck Discovery swims
// through the name and lights each letter it touches, the reef's other creatures fade in,
// then the page opens through a widening hole. Plays once per browser (?intro forces it).
// The class "intro-on" is set by the inline script in <head>; without it this file does nothing.
const html = document.documentElement;
if (html.classList.contains('intro-on')) run().catch(end);

let finished = false;
function end() {
  if (finished) return;
  finished = true;
  document.getElementById('intro')?.remove();
  html.classList.remove('intro-on', 'intro-ready');
}

async function run() {
  try { localStorage.setItem('cc_intro_v1', '1'); } catch (e) {}

  const THREE = await import('three');
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  const { clone } = await import('three/addons/utils/SkeletonUtils.js');
  window.__introStarted = true;

  // ---------- DOM ----------
  const css = `
#intro{position:fixed;inset:0;z-index:9999;background:#000;color:#fff;overflow:hidden;
  --hole:0px;--hx:50%;--hy:50%;
  -webkit-mask:radial-gradient(circle at var(--hx) var(--hy),transparent var(--hole),#000 calc(var(--hole) + 2px));
          mask:radial-gradient(circle at var(--hx) var(--hy),transparent var(--hole),#000 calc(var(--hole) + 2px))}
#intro canvas{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}
#intro .ix-words{position:absolute;inset:0;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  font-family:'Big Shoulders Display',Impact,sans-serif;font-weight:800;text-transform:uppercase;line-height:.86;user-select:none}
#intro .ix-row{display:block;white-space:nowrap;font-size:min(15.5vw,21vh);letter-spacing:.01em}
#intro .ix-row.ix-brand{font-size:min(7.2vw,9.5vh);letter-spacing:.2em;margin:0 0 .35em .2em}
#intro .ix-l{display:inline-block;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,0);transition:-webkit-text-stroke-color 1.2s}
#intro.ix-show .ix-l{-webkit-text-stroke-color:rgba(255,255,255,.2)}
#intro .ix-l.lit{color:#fff;-webkit-text-stroke-color:#fff;animation:ixLit .5s steps(1) both;
  text-shadow:0 0 .12em rgba(255,255,255,.5),0 0 .5em rgba(255,255,255,.18)}
@keyframes ixLit{0%{opacity:1}12%{opacity:.25}24%{opacity:1}36%{opacity:.5}48%,100%{opacity:1}}
#intro .ix-tag{margin:1.1em 0 0;font:600 clamp(11px,1.5vw,17px)/1.4 'Azeret Mono',monospace;letter-spacing:.12em;text-transform:uppercase;
  min-height:1.4em;text-align:center;padding:0 16px}
#intro .ix-tag::after{content:"_";animation:ixBlink .8s steps(1) infinite}
@keyframes ixBlink{50%{opacity:0}}
#intro .ix-skip{position:absolute;right:16px;bottom:16px;z-index:3;background:none;border:1px solid rgba(255,255,255,.35);color:#fff;
  font:600 12px/1 'Azeret Mono',monospace;letter-spacing:.12em;text-transform:uppercase;padding:10px 14px;cursor:pointer}
#intro .ix-skip:hover,#intro .ix-skip:focus-visible{border-color:#fff}`;
  const root = document.createElement('div');
  root.id = 'intro';
  root.setAttribute('role', 'presentation');
  const rows = ['CurioCrafter', 'Andrew', 'Rainsberger'];
  root.innerHTML = `<style>${css}</style><div class="ix-words" aria-hidden="true">${rows.map((w, i) =>
    `<span class="ix-row${i ? '' : ' ix-brand'}">${[...w].map(c => `<span class="ix-l">${c}</span>`).join('')}</span>`).join('')
    }<p class="ix-tag"></p></div><button class="ix-skip" type="button">Skip intro</button>`;
  const canvas = document.createElement('canvas');
  root.prepend(canvas);
  document.body.appendChild(root);
  html.classList.add('intro-ready');

  let skipping = false;
  const skip = () => { if (!skipping) { skipping = true; reveal(0.6); } };
  root.querySelector('.ix-skip').addEventListener('click', skip);
  addEventListener('keydown', e => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') skip(); }, { once: true });
  addEventListener('wheel', skip, { once: true, passive: true });
  addEventListener('touchmove', skip, { once: true, passive: true });

  // ---------- three ----------
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 10, 20000);
  let W = 0, H = 0;
  function resize() {
    W = innerWidth; H = innerHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    camera.position.set(0, 0, (H / 2) / Math.tan(THREE.MathUtils.degToRad(15))); // z=0 plane: 1 unit = 1 CSS px
    camera.updateProjectionMatrix();
  }
  resize();
  addEventListener('resize', resize);

  // White rim ("outline") material: bright where the surface turns away from the camera,
  // black inside. uEdge going down widens the rim until the body fills in.
  function rimMaterial(glow) {
    const m = new THREE.MeshNormalMaterial();
    if (glow) Object.assign(m, { transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }); // outline only, never hides the letters
    m.userData.u = { uEdge: { value: 0.8 }, uGain: { value: 0 } };
    m.onBeforeCompile = s => {
      Object.assign(s.uniforms, m.userData.u);
      s.fragmentShader = 'uniform float uEdge; uniform float uGain;\n' + s.fragmentShader.replace(/}\s*$/,
        `float r = 1.0 - abs(normalize(normal).z);
         float v = smoothstep(uEdge, min(uEdge + 0.25, 1.0), r) + (1.0 - uEdge) * 0.35 * r;
         float c = min(v, 1.0) * uGain;
         gl_FragColor = vec4(vec3(c), c); // alpha = brightness, so the dark body never covers the letters
       }`);
    };
    return m;
  }

  const loader = new GLTFLoader();
  const load = n => loader.loadAsync(`media/intro/${n}.glb`);
  // Models face -Z with +Y up, except the stingray, which faces +Z.
  function creature(gltf, length, top = false, flip = false, glow = true) {
    const model = gltf.scene.userData.__used ? clone(gltf.scene) : gltf.scene;
    gltf.scene.userData.__used = true;
    const mat = rimMaterial(glow);
    model.traverse(o => { if (o.isMesh) { o.material = mat; o.frustumCulled = false; } });
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const s = length / size.z;
    const inner = new THREE.Group();
    inner.add(model);
    model.position.sub(box.getCenter(new THREE.Vector3()));
    inner.scale.setScalar(s);
    inner.rotation.y = flip ? 0 : Math.PI; // face +Z so Object3D.lookAt aims the head
    const wrap = new THREE.Group();
    wrap.add(inner);
    if (top) wrap.up.set(0, 0, 1); // rays: back toward the camera
    const mixer = new THREE.AnimationMixer(model);
    const clip = gltf.animations.find(a => a.name === 'Swim') || gltf.animations[0];
    if (clip) mixer.clipAction(clip).play();
    scene.add(wrap);
    return { wrap, mixer, mat: mat.userData.u, len: length };
  }

  const timeout = new Promise((_, no) => setTimeout(() => no(new Error('slow')), 6000));
  const lion = await Promise.race([load('lionfish'), timeout]);
  await document.fonts.ready;
  if (skipping) return;

  // ---------- lionfish path through the three rows ----------
  const letters = [...root.querySelectorAll('.ix-l')];
  const rowEls = [...root.querySelectorAll('.ix-row')];
  const toWorld = (x, y, z = 0) => new THREE.Vector3(x - W / 2, H / 2 - y, z);
  function serpentine() {
    const r = rowEls.map(e => e.getBoundingClientRect());
    const cy = r.map(b => b.top + b.height * 0.55);
    const L = Math.min(...r.map(b => b.left)) - W * 0.06, R = Math.max(...r.map(b => b.right)) + W * 0.06;
    const bulge = Math.min(W, H) * 0.45;
    return new THREE.CatmullRomCurve3([
      toWorld(-W * 0.25, cy[0] - H * 0.1, -200),
      toWorld(L + (R - L) * 0.25, cy[0]),
      toWorld(R - (R - L) * 0.15, cy[0]),
      toWorld(R + W * 0.04, (cy[0] + cy[1]) / 2, bulge),
      toWorld(R - (R - L) * 0.15, cy[1]),
      toWorld(L + (R - L) * 0.15, cy[1]),
      toWorld(L - W * 0.04, (cy[1] + cy[2]) / 2, bulge),
      toWorld(L + (R - L) * 0.15, cy[2]),
      toWorld(R - (R - L) * 0.2, cy[2]),
      toWorld(W * 1.3, cy[2] + H * 0.15, -300),
    ], false, 'centripetal', 0.5);
  }
  let path = serpentine();
  addEventListener('resize', () => { path = serpentine(); });
  const fishLen = Math.min(W * 0.27, H * 0.38, 420);
  const L1 = creature(lion, fishLen);

  // ---------- the rest of the reef, loaded while the lionfish swims ----------
  const extras = [];
  const far = [
    ['manta_ray', 0.42, true, false, [1.15, 0.2], [-0.2, 0.35], -1500, 8.5],
    ['great_hammerhead_shark', 0.5, false, false, [-0.25, 0.82], [1.25, 0.7], -2300, 9],
    ['southern_stingray', 0.22, true, true, [1.15, 0.88], [-0.2, 0.95], -900, 9.5],
    ['spotted_moray', 0.28, false, false, [-0.2, 0.12], [1.2, 0.2], -1100, 10],
  ];
  Promise.all([...far.map(f => load(f[0])), load('blue_angelfish')]).then(gs => {
    if (finished) return;
    far.forEach((f, i) => {
      const c = creature(gs[i], Math.min(W, 1400) * f[1], f[2], f[3]);
      c.from = toWorld(W * f[4][0], H * f[4][1], f[6]); c.to = toWorld(W * f[5][0], H * f[5][1], f[6]);
      c.dur = f[7]; c.t0 = null; extras.push(c);
    });
    for (let k = 0; k < 5; k++) { // a small school of angelfish
      const c = creature(gs[far.length], Math.min(W, 1400) * 0.06, false, false);
      const dy = (k % 3) * 0.04 + Math.random() * 0.02, dx = k * 0.05;
      c.from = toWorld(W * (1.15 + dx), H * (0.6 + dy), -700); c.to = toWorld(W * (-0.2 + dx), H * (0.5 + dy), -700);
      c.dur = 9 + k * 0.3; c.t0 = null; extras.push(c);
    }
  }).catch(() => {});

  // marine snow
  const N = 260, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = (Math.random() - 0.5) * 2.4; pos[i * 3 + 1] = (Math.random() - 0.5) * 2.4; pos[i * 3 + 2] = -Math.random() * 2500; }
  const snowGeo = new THREE.BufferGeometry();
  snowGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const snowMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false });
  const snow = new THREE.Points(snowGeo, snowMat);
  scene.add(snow);

  // ---------- timeline ----------
  const T_SWIM = 0.7, D_SWIM = 5.6, T_TAG = 5.2, T_OPEN = 7.6;
  const tag = 'AI-assisted tools & pipeline engineer for 3D and VR';
  const tagEl = root.querySelector('.ix-tag');
  const words = root.querySelector('.ix-words');
  const head = new THREE.Vector3(), tmp = new THREE.Vector3(), ahead = new THREE.Vector3();
  const lit = new Set();
  const clock = new THREE.Clock();
  let t = 0, opening = null;
  requestAnimationFrame(() => root.classList.add('ix-show'));

  function reveal(dur) {
    if (opening) return;
    tmp.copy(L1.wrap.position).project(camera);
    const fx = ((tmp.x + 1) / 2) * 100, fy = ((1 - tmp.y) / 2) * 100;
    root.style.setProperty('--hx', (Number.isFinite(fx) && t > T_SWIM ? Math.min(Math.max(fx, 0), 100) : 50) + '%');
    root.style.setProperty('--hy', (Number.isFinite(fy) && t > T_SWIM ? Math.min(Math.max(fy, 0), 100) : 50) + '%');
    opening = { t0: t, dur };
  }

  function light(el) { if (!lit.has(el)) { lit.add(el); el.classList.add('lit'); } }

  function frame(now, fixed) {
    if (finished) return;
    const dt = fixed ?? Math.min(clock.getDelta(), 0.05);
    t += dt;

    // lionfish
    const u = THREE.MathUtils.clamp((t - T_SWIM) / D_SWIM, 0, 1);
    const p = u;
    path.getPointAt(p, L1.wrap.position);
    path.getPointAt(Math.min(p + 0.004, 1), ahead);
    if (p < 1) L1.wrap.lookAt(ahead);
    L1.wrap.updateMatrixWorld();
    L1.mixer.timeScale = 1.4;
    L1.mixer.update(dt);
    L1.mat.uGain.value = THREE.MathUtils.clamp((t - T_SWIM) * 2, 0, 1) * 1.6;
    L1.mat.uEdge.value = THREE.MathUtils.lerp(0.62, 0.2, THREE.MathUtils.smoothstep(t, T_SWIM + 1, T_OPEN));

    // letters the head touches light up
    if (u > 0 && u < 1) {
      head.set(0, 0, L1.len * 0.4).applyMatrix4(L1.wrap.matrixWorld).project(camera);
      const hx = (head.x + 1) / 2 * W, hy = (1 - head.y) / 2 * H;
      const reach = L1.len * 0.35;
      for (const el of letters) {
        if (lit.has(el)) continue;
        const b = el.getBoundingClientRect();
        if (hx > b.left - reach && hx < b.right + reach && hy > b.top - reach * 0.6 && hy < b.bottom + reach * 0.6) light(el);
      }
    }
    if (t > T_SWIM + D_SWIM) letters.forEach(light);

    // tagline types out
    if (t > T_TAG) tagEl.textContent = tag.slice(0, Math.floor((t - T_TAG) * 40));

    // reef + snow
    const reef = THREE.MathUtils.smoothstep(t, 3.2, 6.5);
    for (const c of extras) {
      if (c.t0 === null) c.t0 = Math.max(t, 2.6);
      const k = THREE.MathUtils.clamp((t - c.t0) / c.dur, 0, 1);
      c.wrap.position.lerpVectors(c.from, c.to, k);
      c.wrap.position.y += Math.sin(t * 0.9 + c.dur) * 12;
      c.wrap.lookAt(ahead.copy(c.to).sub(c.from).add(c.wrap.position));
      c.mixer.update(dt);
      const depth = THREE.MathUtils.clamp(1 + c.from.z / 4500, 0.55, 1);
      c.mat.uGain.value = reef * depth * 1.5;
      c.mat.uEdge.value = THREE.MathUtils.lerp(0.75, 0.3, reef);
    }
    snowMat.opacity = 0.15 + reef * 0.45;
    const sp = snowGeo.attributes.position;
    for (let i = 0; i < N; i++) {
      let y = sp.getY(i) + dt * 0.012;
      if (y > 1.2) y = -1.2;
      sp.setY(i, y);
    }
    sp.needsUpdate = true;
    snow.scale.set(W, H, 1);

    if (t > T_OPEN) reveal(1.5);
    if (opening) {
      const k = Math.min((t - opening.t0) / opening.dur, 1);
      const ease = k * k * (3 - 2 * k);
      root.style.setProperty('--hole', (ease * Math.hypot(W, H) * 1.1).toFixed(1) + 'px');
      words.style.opacity = (1 - Math.min(ease * 2.5, 1)).toFixed(3); // the page's own name takes over
      if (k >= 1) { renderer.dispose(); end(); return; }
    }

    renderer.render(scene, camera);
    if (fixed === undefined) requestAnimationFrame(frame);
  }
  window.__introStep = dt => frame(0, dt); // debugging: step the intro by hand
  requestAnimationFrame(frame);
}
