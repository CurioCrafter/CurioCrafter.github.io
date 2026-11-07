// First-visit intro, drawn as white line art on black.
// Black water; light reaches down and the seafloor, the Shipwreck Discovery wreck and its coral draw
// themselves in as the camera descends. A lionfish swims through the name and lights each letter
// it touches, the reef's creatures go about their business, the tagline types, then the page opens
// through a widening hole. Plays once per browser (?intro forces it). The class "intro-on" is set
// by the inline script in <head>; without it this file does nothing.
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
  try { localStorage.setItem('cc_intro_v2', '1'); } catch (e) {}

  const THREE = await import('three');
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  const { clone } = await import('three/addons/utils/SkeletonUtils.js');
  window.__introStarted = true;
  const { MathUtils: M } = THREE;

  // ---------- DOM ----------
  const css = `
#intro{position:fixed;inset:0;z-index:9999;background:#000;color:#fff;overflow:hidden;
  --hole:0px;--hx:50%;--hy:50%;
  -webkit-mask:radial-gradient(circle at var(--hx) var(--hy),transparent var(--hole),#000 calc(var(--hole) + 2px));
          mask:radial-gradient(circle at var(--hx) var(--hy),transparent var(--hole),#000 calc(var(--hole) + 2px))}
#intro canvas{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}
#intro .ix-words{position:absolute;inset:0;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-bottom:30vh;
  font-family:'Big Shoulders Display',Impact,sans-serif;font-weight:800;text-transform:uppercase;line-height:.88;user-select:none;transition:opacity .6s}
#intro .ix-row{display:block;white-space:nowrap;font-size:min(8.6vw,12vh);letter-spacing:.015em}
#intro .ix-row.ix-brand{font-size:min(3.4vw,4.6vh);letter-spacing:.32em;margin:0 0 .7em .32em}
#intro .ix-l{display:inline-block;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,var(--ink,0))}
#intro .ix-l.lit{color:#fff;-webkit-text-stroke-color:#fff;animation:ixLit .6s steps(1) both}
@keyframes ixLit{0%{opacity:1}12%{opacity:.25}24%{opacity:1}36%{opacity:.5}48%,100%{opacity:1}}
#intro .ix-tag{margin:1.4em 0 0;font:600 clamp(11px,1.25vw,15px)/1.4 'Azeret Mono',monospace;letter-spacing:.14em;text-transform:uppercase;
  min-height:1.4em;text-align:center;padding:0 16px}
#intro .ix-tag:not(:empty)::after{content:"_";animation:ixBlink .8s steps(1) infinite}
@keyframes ixBlink{50%{opacity:0}}
#intro .ix-skip{position:absolute;right:16px;bottom:16px;z-index:3;background:none;border:1px solid rgba(255,255,255,.35);color:#fff;
  font:600 12px/1 'Azeret Mono',monospace;letter-spacing:.12em;text-transform:uppercase;padding:12px 14px;cursor:pointer}
#intro .ix-skip:hover,#intro .ix-skip:focus-visible{border-color:#fff}
@media (max-width:640px){#intro .ix-row{font-size:15.5vw}#intro .ix-row.ix-brand{font-size:6vw}#intro .ix-words{padding-bottom:34vh}}`;
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

  let t = 0, opening = null, skipping = false;
  const skip = () => { if (!skipping && new URLSearchParams(location.search).get('intro') !== 'step') { skipping = true; reveal(0.7); } };
  root.querySelector('.ix-skip').addEventListener('click', skip);
  addEventListener('keydown', e => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') skip(); }, { once: true });
  addEventListener('wheel', skip, { once: true, passive: true });
  addEventListener('touchmove', skip, { once: true, passive: true });

  // ---------- renderer: scene -> normals/depth target -> line-art pass ----------
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  const DPR = Math.min(devicePixelRatio, 1.75);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x000000, 0);
  renderer.autoClear = false;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 140);
  const rt = new THREE.WebGLRenderTarget(1, 1, { depthTexture: new THREE.DepthTexture(1, 1), samples: 0 });
  const post = new THREE.ShaderMaterial({
    uniforms: {
      tN: { value: rt.texture }, tD: { value: rt.depthTexture }, uStep: { value: new THREE.Vector2() },
      uNear: { value: camera.near }, uFar: { value: camera.far }, uVis: { value: 0 }, uTime: { value: 0 },
      uShaft: { value: 0 }, uGain: { value: 1 },
    },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: `
      varying vec2 vUv;
      uniform sampler2D tN, tD; uniform vec2 uStep; uniform float uNear, uFar, uVis, uTime, uShaft, uGain;
      float lin(float d){ float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      void main(){
        vec4 c = texture2D(tN, vUv);
        float d0 = texture2D(tD, vUv).r;
        float z0 = lin(d0);
        float nE = 0.0, dE = 0.0, cE = 0.0;
        for (int i = 0; i < 4; i++) {
          vec2 o = (i == 0 ? vec2(1.0, 0.0) : i == 1 ? vec2(0.0, 1.0) : i == 2 ? vec2(1.0, 1.0) : vec2(1.0, -1.0)) * uStep;
          vec4 a = texture2D(tN, vUv + o), b = texture2D(tN, vUv - o);
          float za = lin(texture2D(tD, vUv + o).r), zb = lin(texture2D(tD, vUv - o).r);
          nE = max(nE, length(a.rgb - b.rgb));
          dE = max(dE, abs(za + zb - 2.0 * z0) / z0);          // creases and silhouettes in depth
          dE = max(dE, abs(za - zb) / z0 * 0.35);
          if (c.a < 0.92 && a.a < 0.92 && b.a < 0.92) cE = max(cE, step(0.5, abs(a.a - b.a))); // seafloor contour wrap
        }
        bool bg = d0 > 0.9999;
        float kind = c.a;                                   // 1 = creature, ~.96 = wreck/coral, < .92 = seafloor
        float line = smoothstep(0.32, 0.7, nE) + smoothstep(0.035, 0.09, dE);
        float w = kind > 0.99 ? 1.0 : kind > 0.93 ? 0.95 : 0.5;
        float val = bg ? 0.0 : min(line, 1.0) * w + cE * 0.2 * smoothstep(40.0, 6.0, z0);
        float fill = bg ? 0.0 : (kind > 0.99 ? 0.07 : 0.03) * (1.0 - abs(c.b * 2.0 - 1.0) * 0.5);
        float fog = bg ? 0.0 : exp(-max(z0 - 2.0, 0.0) / max(uVis, 0.001));
        float v = (val + fill) * fog;
        // light shafts from the surface, drifting slowly
        float sh = 0.0;
        for (int k = 0; k < 4; k++) {
          float fk = float(k);
          float x0 = 0.12 + fk * 0.26 + sin(uTime * 0.13 + fk * 1.7) * 0.05;
          float x = vUv.x - x0 - (1.0 - vUv.y) * 0.22;
          sh += exp(-x * x * (180.0 + fk * 60.0)) * (0.6 + 0.4 * sin(uTime * 0.4 + fk));
        }
        v += sh * pow(vUv.y, 1.6) * 0.055 * uShaft;
        v = min(v * uGain, 1.0);
        gl_FragColor = vec4(vec3(v), v);
      }`,
    depthTest: false, depthWrite: false,
  });
  const quadScene = new THREE.Scene();
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  quadScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), post));

  let W = 0, H = 0;
  function resize() {
    W = innerWidth; H = innerHeight;
    renderer.setSize(W, H, false);
    const bw = Math.round(W * DPR), bh = Math.round(H * DPR);
    rt.setSize(bw, bh);
    post.uniforms.uStep.value.set(Math.max(1, DPR * 0.8) / bw, Math.max(1, DPR * 0.8) / bh);
    camera.aspect = W / H;
    camera.fov = W / H < 0.8 ? 58 : 40;
    camera.updateProjectionMatrix();
  }
  resize();

  // Every surface writes view normals into RGB and a "kind" into alpha for the line pass.
  function inkMaterial(kind, flat = false) {
    const m = new THREE.MeshNormalMaterial({ flatShading: flat, side: THREE.DoubleSide });
    m.blending = THREE.NoBlending;
    m.onBeforeCompile = s => {
      s.uniforms.uKind = { value: kind };
      s.vertexShader = 'varying float vWY;\n' + s.vertexShader.replace('#include <project_vertex>',
        '#include <project_vertex>\n vWY = (modelMatrix * vec4(transformed, 1.0)).y;');
      s.fragmentShader = 'uniform float uKind; varying float vWY;\n' + s.fragmentShader.replace(/}\s*$/,
        ' gl_FragColor.a = uKind < 0.0 ? fract(vWY / 0.16) * 0.9 : uKind;\n}');
    };
    return m;
  }
  const CREATURE = inkMaterial(1), ENV = inkMaterial(0.96), ROCK = inkMaterial(0.96, true), FLOOR = inkMaterial(-1);

  // ---------- seafloor ----------
  const hash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
  const vnoise = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    return M.lerp(M.lerp(hash(xi, yi), hash(xi + 1, yi), u), M.lerp(hash(xi, yi + 1), hash(xi + 1, yi + 1), u), v);
  };
  const fbm = (x, y) => { let a = 0, f = 1, s = 0.5; for (let i = 0; i < 5; i++) { a += vnoise(x * f, y * f) * s; f *= 2.1; s *= 0.5; } return a; };
  const WRECK = new THREE.Vector3(21, 0, -27);
  const ARCH = new THREE.Vector3(0, 0, -10);    // the camera flies through this arch as the page opens
  const floorY = (x, z) => {
    let y = (fbm(x * 0.045 + 3, z * 0.045 + 7) - 0.5) * 6 + (fbm(x * 0.2, z * 0.2) - 0.5) * 0.8;
    const dw = Math.hypot(x - WRECK.x, z - WRECK.z);
    y += Math.exp(-dw * dw / 300) * 1.2;      // sand piled against the wreck
    y -= Math.max(0, -z - 50) * 0.05;          // falls away into the deep
    y = M.lerp(y, -0.4, Math.exp(-(x * x) / 30) * M.clamp((z + 22) / 8, 0, 1) * M.clamp((6 - z) / 6, 0, 1)); // a sandy channel to the arch
    return y;
  };
  {
    const g = new THREE.PlaneGeometry(150, 150, 200, 200);
    g.rotateX(-Math.PI / 2);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, floorY(p.getX(i), p.getZ(i) - 30));
    g.translate(0, 0, -30);
    g.computeVertexNormals();
    scene.add(new THREE.Mesh(g, FLOOR));
  }
  // rocks: faceted, so they read as drawn stones
  for (let i = 0; i < 44; i++) {
    const g = new THREE.IcosahedronGeometry(1, 2);
    const p = g.attributes.position;
    for (let j = 0; j < p.count; j++) {
      const v = new THREE.Vector3().fromBufferAttribute(p, j);
      v.multiplyScalar(0.75 + fbm(v.x * 1.3 + i, v.y * 1.3 + v.z) * 0.6);
      p.setXYZ(j, v.x, v.y * 0.6, v.z);
    }
    g.computeVertexNormals();
    const r = new THREE.Mesh(g, ROCK);
    const x = (hash(i, 1) - 0.5) * (i < 18 ? 18 : 50), z = (i < 18 ? 2 : -4) - hash(i, 2) * (i < 18 ? 12 : 40);
    r.position.set(x, floorY(x, z) - 0.2, z);
    r.scale.setScalar(0.3 + hash(i, 3) * 1.4);
    r.rotation.y = hash(i, 4) * 6;
    scene.add(r);
  }

  // ---------- models ----------
  const loader = new GLTFLoader();
  const load = n => loader.loadAsync(`media/intro/${n}.glb`);
  const used = new WeakSet();
  function placeModel(gltf, length, mat, forwardPlusZ = false) {
    const model = used.has(gltf) ? clone(gltf.scene) : gltf.scene;
    used.add(gltf);
    model.traverse(o => { if (o.isMesh) { o.material = mat; o.frustumCulled = false; } });
    const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3());
    const inner = new THREE.Group();
    inner.add(model);
    model.position.sub(box.getCenter(new THREE.Vector3()));
    inner.scale.setScalar(length / Math.max(size.z, 1e-6));
    inner.rotation.y = forwardPlusZ ? 0 : Math.PI; // head along +Z so lookAt aims it
    const wrap = new THREE.Group();
    wrap.add(inner);
    scene.add(wrap);
    let mixer = null;
    const clip = gltf.animations.find(a => a.name === 'Swim') || gltf.animations[0];
    if (clip) { mixer = new THREE.AnimationMixer(model); mixer.clipAction(clip).play(); mixer.update(Math.random() * 2); }
    return { wrap, mixer, len: length };
  }

  const timeout = new Promise((_, no) => setTimeout(() => no(new Error('slow')), 8000));
  const [lion, wreckG, archG] = await Promise.race([Promise.all([load('lionfish'), load('wreck'), load('arch')]), timeout]);
  await document.fonts.ready;
  if (skipping) return;

  // the wreck: listing, half buried
  {
    const w = placeModel(wreckG, 38, ENV, true);
    w.wrap.position.set(WRECK.x, floorY(WRECK.x, WRECK.z) + 3.2, WRECK.z);
    w.wrap.rotation.set(0.05, 0.75, 0.16);
  }

  // the reef arch: its hole runs along the model's X axis, a little below centre
  let holeY;
  {
    const a = placeModel(archG, 0.44 * 12, ENV, true);  // X span 0.44 of a 1-unit-long model -> 12 m long arch
    a.wrap.children[0].scale.setScalar(12);
    a.wrap.rotation.y = Math.PI / 2;                 // hole along world Z
    a.wrap.position.set(ARCH.x, floorY(ARCH.x, ARCH.z) + 0.373 * 12 - 0.3, ARCH.z);
    holeY = a.wrap.position.y - 0.164 * 12;
  }
  const swimmers = [];
  // fish that follow a path in world space: f(t) -> position
  function swim(c, f, rate = 1) { c.f = f; c.rate = rate; swimmers.push(c); }

  Promise.all(['manta_ray', 'great_hammerhead_shark', 'southern_stingray', 'spotted_moray', 'blue_angelfish', 'brain_coral', 'staghorn'].map(load)).then(([manta, ham, ray, moray, angel, brain, stag]) => {
    if (finished) return;
    // coral gardens in the foreground and along the wreck
    for (let i = 0; i < 34; i++) {
      const g = i % 2 ? brain : stag;
      const near = i < 22;
      const x = near ? (hash(i, 9) - 0.5) * 22 : WRECK.x + (hash(i, 8) - 0.5) * 26;
      const z = near ? -1 - hash(i, 7) * 16 : WRECK.z + 6 + (hash(i, 6) - 0.5) * 8;
      const c = placeModel(g, (i % 2 ? 0.9 : 1.2) * (0.6 + hash(i, 5) * 0.9), ENV, true);
      c.wrap.position.set(x, floorY(x, z) - 0.15, z);
      c.wrap.rotation.y = hash(i, 4) * 6.28;
    }
    swim(placeModel(manta, 3.6, CREATURE), s => new THREE.Vector3(M.lerp(22, -26, s), 8.5 + Math.sin(s * 3) * 0.8, M.lerp(-16, -6, s)), 1 / 16);
    swim(placeModel(ham, 3.2, CREATURE), s => new THREE.Vector3(M.lerp(-34, 30, s), 5.5, M.lerp(-44, -36, s)), 1 / 17);
    swim(placeModel(ray, 1.3, CREATURE, true), s => { const x = M.lerp(-14, 9, s), z = M.lerp(-7, -15, s); return new THREE.Vector3(x, floorY(x, z) + 0.45, z); }, 1 / 15);
    swim(placeModel(moray, 1.5, CREATURE), s => { const x = M.lerp(1, 12, s), z = WRECK.z + 7 + Math.sin(s * 9) * 0.6; return new THREE.Vector3(x, floorY(x, z) + 0.5, z); }, 1 / 18);
    for (let k = 0; k < 9; k++) { // a school circling the near coral
      const ph = k / 9 * Math.PI * 2, rr = 2.2 + (k % 3) * 0.45, yy = 1.3 + (k % 4) * 0.3;
      swim(placeModel(angel, 0.26, CREATURE), s => new THREE.Vector3(-3 + Math.cos(ph + s * 6.28) * rr, yy + Math.sin(s * 12 + k) * 0.15, -11 + Math.sin(ph + s * 6.28) * rr * 0.6), 1 / 14);
    }
  }).catch(() => {});

  // marine snow, drawn after the line pass
  const N = 420, snowPos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { snowPos[i * 3] = (Math.random() - 0.5) * 40; snowPos[i * 3 + 1] = Math.random() * 16; snowPos[i * 3 + 2] = -Math.random() * 40 + 8; }
  const snowGeo = new THREE.BufferGeometry();
  snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
  const snowMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.045, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const snowScene = new THREE.Scene();
  snowScene.add(new THREE.Points(snowGeo, snowMat));

  // ---------- the lionfish swims a path through the letters, in screen space ----------
  const letters = [...root.querySelectorAll('.ix-l')];
  const rowEls = [...root.querySelectorAll('.ix-row')];
  let pathPts = [];
  function serpentine() {
    const r = rowEls.map(e => e.getBoundingClientRect());
    const cy = r.map(b => b.top + b.height * 0.55);
    const L = Math.min(...r.map(b => b.left)) - W * 0.05, R = Math.max(...r.map(b => b.right)) + W * 0.05;
    // [screen x, screen y, distance from camera]
    pathPts = [
      [-W * 0.2, cy[0] - H * 0.12, 6], [L + (R - L) * 0.2, cy[0], 4], [R - (R - L) * 0.12, cy[0], 4],
      [R + W * 0.03, (cy[0] + cy[1]) / 2, 2.6], [R - (R - L) * 0.12, cy[1], 4], [L + (R - L) * 0.12, cy[1], 4],
      [L - W * 0.03, (cy[1] + cy[2]) / 2, 2.6], [L + (R - L) * 0.12, cy[2], 4], [R - (R - L) * 0.15, cy[2], 4],
      [W * 1.25, cy[2] + H * 0.2, 7],
    ];
  }
  const screenCurve = () => new THREE.CatmullRomCurve3(pathPts.map(p => new THREE.Vector3(p[0], p[1], p[2])), false, 'centripetal', 0.5);
  serpentine();
  let curve = screenCurve();
  addEventListener('resize', () => { resize(); serpentine(); curve = screenCurve(); });
  const toWorld = (sp, out) => { // screen px + distance -> world point in front of the camera
    const v = out.set(sp.x / W * 2 - 1, -(sp.y / H) * 2 + 1, 0.5).unproject(camera).sub(camera.position).normalize();
    return v.multiplyScalar(sp.z).add(camera.position);
  };
  const L1 = placeModel(lion, 0.42, CREATURE);

  // ---------- timeline (seconds) ----------
  const T_SWIM = 5.2, D_SWIM = 7.4, T_TAG = 11.2, T_OPEN = 16.6, D_OPEN = 1.6;
  const tag = 'AI-assisted tools & pipeline engineer for 3D and VR';
  const tagEl = root.querySelector('.ix-tag');
  const words = root.querySelector('.ix-words');
  const T_FLY = 15.0, D_FLY = 3.0;
  const camFrom = new THREE.Vector3(-3, 16, 24), camMid = new THREE.Vector3(0, holeY + 0.3, 12), camTo = new THREE.Vector3(0.4, holeY + 0.1, 6);
  const camEnd = new THREE.Vector3(0, holeY - 0.1, ARCH.z - 7);
  const lookFrom = new THREE.Vector3(-1, 4, -10), lookArch = new THREE.Vector3(0, holeY, ARCH.z), lookEnd = new THREE.Vector3(0, holeY - 0.3, ARCH.z - 30);
  const look = new THREE.Vector3(), sp = new THREE.Vector3(), sp2 = new THREE.Vector3(), w1 = new THREE.Vector3(), w2 = new THREE.Vector3(), head = new THREE.Vector3();
  const lit = new Set();
  const clock = new THREE.Clock();
  const ease = x => x * x * (3 - 2 * x);

  function reveal(dur) {
    if (opening) return;
    let fx = 50, fy = 50;
    if (L1 && t > T_SWIM && t < T_FLY) { head.copy(L1.wrap.position).project(camera); fx = M.clamp((head.x + 1) * 50, 0, 100); fy = M.clamp((1 - head.y) * 50, 0, 100); }
    root.style.setProperty('--hx', fx + '%');
    root.style.setProperty('--hy', fy + '%');
    opening = { t0: t, dur };
  }
  const light = el => { if (!lit.has(el)) { lit.add(el); el.classList.add('lit'); } };

  function frame(now, fixed) {
    if (finished) return;
    const dt = fixed ?? Math.min(clock.getDelta(), 0.05);
    t += dt;

    // camera: a slow descent out of dark water toward the reef arch, a drift, then the flight through it
    const a = ease(M.clamp(t / 7, 0, 1)), b = ease(M.clamp((t - 7) / 8, 0, 1)), f = M.clamp((t - T_FLY) / D_FLY, 0, 1);
    const fe = f * f * f * (f * (f * 6 - 15) + 10);
    camera.position.lerpVectors(camFrom, camMid, a).lerp(camTo, b).lerp(camEnd, fe);
    const sway = 1 - fe;
    camera.position.x += Math.sin(t * 0.35) * 0.2 * sway; camera.position.y += Math.sin(t * 0.5) * 0.1 * sway;
    look.lerpVectors(lookFrom, lookArch, a).lerp(lookEnd, fe);
    camera.lookAt(look);
    camera.updateMatrixWorld();

    // light reaches down: how far you can see
    post.uniforms.uVis.value = M.lerp(0.4, 24, ease(M.clamp((t - 0.6) / 6.5, 0, 1)));
    post.uniforms.uShaft.value = M.clamp((t - 0.4) / 3, 0, 1);
    post.uniforms.uTime.value = t;
    snowMat.opacity = M.clamp(t / 2.5, 0, 1) * 0.7;
    snowGeo.attributes.position.array.forEach((_, i, arr) => { if (i % 3 === 1) { arr[i] -= dt * 0.12; if (arr[i] < -1) arr[i] = 16; } });
    snowGeo.attributes.position.needsUpdate = true;
    root.style.setProperty('--ink', M.clamp((t - 3.6) / 2, 0, 1) * 0.3);

    // lionfish
    const u = M.clamp((t - T_SWIM) / D_SWIM, 0, 1);
    curve.getPointAt(u, sp); curve.getPointAt(Math.min(u + 0.004, 1), sp2);
    toWorld(sp, w1); toWorld(sp2, w2);
    L1.wrap.position.copy(w1);
    if (u > 0 && u < 1) L1.wrap.lookAt(w2);
    L1.wrap.visible = t > T_SWIM - 0.1;
    L1.wrap.updateMatrixWorld();
    L1.mixer && L1.mixer.update(dt * 1.3);
    if (u > 0 && u < 1) { // letters its head touches light up
      head.set(0, 0, L1.len * 0.4).applyMatrix4(L1.wrap.matrixWorld).project(camera);
      const hx = (head.x + 1) / 2 * W, hy = (1 - head.y) / 2 * H;
      const reach = Math.min(W, H) * 0.05;
      for (const el of letters) {
        if (lit.has(el)) continue;
        const r = el.getBoundingClientRect();
        if (hx > r.left - reach && hx < r.right + reach && hy > r.top - reach && hy < r.bottom + reach) light(el);
      }
    }
    if (t > T_SWIM + D_SWIM) letters.forEach(light);
    if (t > T_TAG) tagEl.textContent = tag.slice(0, Math.floor((t - T_TAG) * 26));

    for (const c of swimmers) {
      const s = ((t - 1) * c.rate) % 1;
      c.wrap.position.copy(c.f(Math.max(s, 0)));
      c.wrap.lookAt(c.f(Math.min(Math.max(s, 0) + 0.01, 1)));
      c.mixer && c.mixer.update(dt);
    }

    if (t > T_OPEN) reveal(D_OPEN);
    if (opening) {
      const k = Math.min((t - opening.t0) / opening.dur, 1), e = ease(k);
      root.style.setProperty('--hole', (e * Math.hypot(W, H) * 1.1).toFixed(1) + 'px');
      words.style.opacity = (1 - Math.min(e * 2.5, 1)).toFixed(3);
      if (k >= 1) { renderer.dispose(); rt.dispose(); end(); return; }
    }

    renderer.setRenderTarget(rt);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(quadScene, quadCam);
    renderer.render(snowScene, camera);
    if (fixed === undefined) requestAnimationFrame(frame);
  }
  window.__introStep = dt => frame(0, dt); // debugging: step the intro by hand
  if (new URLSearchParams(location.search).get('intro') !== 'step') requestAnimationFrame(frame); // ?intro=step: frozen, only __introStep moves it
}
