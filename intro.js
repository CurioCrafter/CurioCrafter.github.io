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
  const { DRACOLoader } = await import('three/addons/loaders/DRACOLoader.js');
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
  font-family:'Curio Cut','Big Shoulders Display',sans-serif;font-weight:800;text-transform:uppercase;line-height:.88;user-select:none}
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
  const WRECK = new THREE.Vector3(30, 0, -34);
  const ARCH = new THREE.Vector3(0, 0, -10);
  let WRECK_TOP = 10;    // the camera flies through this arch as the page opens
  const floorY = (x, z) => {
    let y = (fbm(x * 0.045 + 3, z * 0.045 + 7) - 0.5) * 6 + (fbm(x * 0.2, z * 0.2) - 0.5) * 0.8;
    const dw = Math.hypot(x - WRECK.x, z - WRECK.z);
    y += Math.exp(-dw * dw / 300) * 1.2;      // sand piled against the wreck
    y -= Math.max(0, -z - 50) * 0.05;          // falls away into the deep
    y = M.lerp(y, -0.4, Math.exp(-(x * x) / 30) * M.clamp((z + 64) / 8, 0, 1) * M.clamp((6 - z) / 6, 0, 1)); // a sandy channel through the arch and on
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
  loader.setDRACOLoader(new DRACOLoader().setDecoderPath('vendor/three/examples/jsm/libs/draco/gltf/')); // the full-detail wreck is Draco-compressed
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
    w.wrap.rotation.set(0.05, 0.12, 0.16);
    w.wrap.updateMatrixWorld(true);
    WRECK_TOP = new THREE.Box3().setFromObject(w.wrap).max.y;  // the flight passes over the wreck
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
    for (let i = 0; i < 52; i++) {
      const g = i % 2 ? brain : stag;
      const near = i < 20;
      const side = hash(i, 3) < 0.5 ? -1 : 1;
      const x = near ? (hash(i, 9) - 0.5) * 22 : side * (2.2 + hash(i, 8) * 7);   // beyond the arch: both sides of the glide
      const z = near ? -1 - hash(i, 7) * 16 : -18 - hash(i, 6) * 36;
      const c = placeModel(g, (i % 2 ? 0.9 : 1.2) * (0.6 + hash(i, 5) * 0.9), ENV, true);
      c.wrap.position.set(x, floorY(x, z) - 0.15, z);
      c.wrap.rotation.y = hash(i, 4) * 6.28;
    }
    swim(placeModel(manta, 3.6, CREATURE), s => new THREE.Vector3(M.lerp(22, -26, s), 8.5 + Math.sin(s * 3) * 0.8, M.lerp(-16, -6, s)), 1 / 16);
    swim(placeModel(ham, 3.2, CREATURE), s => new THREE.Vector3(M.lerp(-34, 30, s), 5.5, M.lerp(-44, -36, s)), 1 / 17);
    swim(placeModel(ray, 1.4, CREATURE, true), s => { const x = M.lerp(-9, 7, s), z = M.lerp(-36, -46, s); return new THREE.Vector3(x, floorY(x, z) + 0.5, z); }, 1 / 15);
    swim(placeModel(moray, 1.5, CREATURE), s => { const x = M.lerp(1, 12, s), z = WRECK.z + 7 + Math.sin(s * 9) * 0.6; return new THREE.Vector3(x, floorY(x, z) + 0.5, z); }, 1 / 18);
    for (let k = 0; k < 14; k++) { // a school circling coral beyond the arch
      const ph = k / 14 * Math.PI * 2, rr = 2.2 + (k % 3) * 0.45, yy = 1.3 + (k % 4) * 0.3;
      swim(placeModel(angel, 0.3, CREATURE), s => new THREE.Vector3(3.5 + Math.cos(ph + s * 6.28) * rr, floorY(3.5, -31) + yy + Math.sin(s * 12 + k) * 0.15, -31 + Math.sin(ph + s * 6.28) * rr * 0.6), 1 / 14);
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
    const turn = (x, y0, y1, side) => { // a round U-turn between two rows, swinging toward the camera
      const r = (y1 - y0) / 2, cyM = (y0 + y1) / 2, pts = [];
      for (let k = 1; k < 6; k++) { const a = -Math.PI / 2 + k / 6 * Math.PI; pts.push([x + side * Math.cos(a) * r * 1.5, cyM + Math.sin(a) * r, 4 - Math.cos(a) * 1.8]); }
      return pts;
    };
    const xL = L + (R - L) * 0.1, xR = R - (R - L) * 0.1;
    pathPts = [
      [-W * 0.18, cy[0] - H * 0.1, 6], [L + (R - L) * 0.05, cy[0], 4.4], [(L + R) / 2, cy[0], 4], [xR, cy[0], 4],
      ...turn(xR, cy[0], cy[1], 1),
      [xR, cy[1], 4], [(L + R) / 2, cy[1], 4], [xL, cy[1], 4],
      ...turn(xL, cy[1], cy[2], -1),
      [xL, cy[2], 4], [(L + R) / 2, cy[2], 4], [xR, cy[2], 4.2], [W * 1.25, cy[2] + H * 0.18, 7],
    ];
  }
  const screenCurve = () => new THREE.CatmullRomCurve3(pathPts.map(p => new THREE.Vector3(p[0], p[1], p[2])), false, 'centripetal');
  serpentine();
  let curve = screenCurve();
  addEventListener('resize', () => { resize(); serpentine(); curve = screenCurve(); });
  const toWorld = (sp, out) => { // screen px + distance -> world point in front of the camera
    const v = out.set(sp.x / W * 2 - 1, -(sp.y / H) * 2 + 1, 0.5).unproject(camera).sub(camera.position).normalize();
    return v.multiplyScalar(sp.z).add(camera.position);
  };
  const L1 = placeModel(lion, 0.42, CREATURE);

  // ---------- timeline (seconds) ----------
  const T_SWIM = 1.2, D_SWIM = 4.8, T_TAG = 5.0, T_OPEN = 19.2, D_OPEN = 1.8, T_WORDS_OUT = 8.4;
  const tag = 'AI-assisted tools & pipeline engineer for 3D and VR';
  const tagEl = root.querySelector('.ix-tag');
  const words = root.querySelector('.ix-words');
  const WRECK_MID = (WRECK_TOP + floorY(WRECK.x, WRECK.z)) / 2;  // after the arch the camera glides beside the hull at mid height
  const T_FLY = 5.6;                       // the fly-through starts here; before it the camera only descends and drifts
  const keys = [ // [time, position]
    [0, new THREE.Vector3(-3, 16, 24)], [2.8, new THREE.Vector3(0, holeY + 0.4, 12)], [5.6, new THREE.Vector3(0.3, holeY + 0.1, 5.5)],
    [7.6, new THREE.Vector3(0, holeY - 0.1, ARCH.z)], [9.8, new THREE.Vector3(8, floorY(8, -18) + 3, -18)],
    [12.0, new THREE.Vector3(23, WRECK_TOP + 3, -6)], [14.4, new THREE.Vector3(31, WRECK_TOP + 3.5, -20)], [16.8, new THREE.Vector3(30.5, WRECK_TOP + 4, -38)],
    [19.2, new THREE.Vector3(20, WRECK_TOP + 7, -52)], [21.6, new THREE.Vector3(12, WRECK_TOP + 10, -60)],
  ];
  const camPath = new THREE.CatmullRomCurve3(keys.map(k => k[1]), false, 'centripetal');
  const lens = camPath.getLengths(600), total = lens[lens.length - 1];
  const kd = keys.map((_, i) => lens[Math.round(i / (keys.length - 1) * 600)]); // distance along the path at each key
  const kt = keys.map(k => k[0]);
  // monotone cubic (Fritsch-Carlson) through (time, distance): smooth speed, no stops at the keys
  const sl = kt.slice(1).map((t1, i) => (kd[i + 1] - kd[i]) / (t1 - kt[i]));
  const tan = kt.map((_, i) => i === 0 ? sl[0] : i === kt.length - 1 ? sl[sl.length - 1] : (sl[i - 1] * sl[i] <= 0 ? 0 : 2 / (1 / sl[i - 1] + 1 / sl[i])));
  const distAt = tt => {
    tt = M.clamp(tt, 0, kt[kt.length - 1]);
    let i = 0; while (i < kt.length - 2 && tt > kt[i + 1]) i++;
    const h = kt[i + 1] - kt[i], x = (tt - kt[i]) / h, x2 = x * x, x3 = x2 * x;
    return (2 * x3 - 3 * x2 + 1) * kd[i] + (x3 - 2 * x2 + x) * h * tan[i] + (-2 * x3 + 3 * x2) * kd[i + 1] + (x3 - x2) * h * tan[i + 1];
  };
  const archCentre = new THREE.Vector3(0, holeY, ARCH.z), ahead = new THREE.Vector3(), wreckLook = new THREE.Vector3(WRECK.x, WRECK_MID, WRECK.z);
  const fishTarget = new THREE.Object3D();
  const fish = { u: 0, speed: 0.25, bend: 0, oriented: false };
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

    // camera: a brisk descent toward the reef arch, a short drift, then through the arch and out over the drop-off
    const d = distAt(t);
    camPath.getPointAt(Math.min(d / total, 1), camera.position);
    camPath.getPointAt(Math.min((d + 9) / total, 1), ahead);
    const holdArch = 1 - ease(M.clamp((t - 5.4) / 2.2, 0, 1));   // look at the arch until the flight starts
    look.lerpVectors(ahead, archCentre, holdArch * ease(M.clamp(t / 2.6, 0, 1)) + holdArch * (1 - ease(M.clamp(t / 2.6, 0, 1))) * 0.6);
    look.lerp(wreckLook, ease(M.clamp((t - 8.2) / 2, 0, 1)) * (1 - ease(M.clamp((t - 12.6) / 2, 0, 1))) * 0.7); // turn toward the wreck
    const endShot = ease(M.clamp((t - 16) / 2.4, 0, 1));
    look.y -= ease(M.clamp((t - 12) / 2, 0, 1)) * 4.5 * (1 - endShot);    // then look down at the deck while flying over it
    look.lerp(wreckLook, endShot);                                          // and finally pull up and back with the whole ship in frame
    const sway = holdArch;
    camera.position.x += Math.sin(t * 0.35) * 0.15 * sway; camera.position.y += Math.sin(t * 0.5) * 0.08 * sway;
    camera.lookAt(look);
    camera.updateMatrixWorld();

    // light reaches down: how far you can see
    post.uniforms.uVis.value = M.lerp(0.4, 24, ease(M.clamp((t - 0.3) / 3.4, 0, 1)));
    post.uniforms.uShaft.value = M.clamp((t - 0.2) / 2, 0, 1);
    post.uniforms.uTime.value = t;
    snowMat.opacity = M.clamp(t / 1.5, 0, 1) * 0.7;
    snowGeo.attributes.position.array.forEach((_, i, arr) => { if (i % 3 === 1) { arr[i] -= dt * 0.12; if (arr[i] < -1) arr[i] = 16; } });
    snowGeo.attributes.position.needsUpdate = true;
    root.style.setProperty('--ink', M.clamp((t - 0.5) / 1.2, 0, 1) * 0.3);
    if (!opening) words.style.opacity = (1 - M.clamp((t - T_WORDS_OUT) / 1.2, 0, 1)).toFixed(3); // the name clears for the flight

    // lionfish: travels along the path at a living pace (surges and glides, slower in the turns),
    // and its body eases toward where it is heading instead of snapping to it
    if (t > T_SWIM && fish.u < 1) {
      const ta = curve.getTangentAt(Math.max(fish.u - 0.02, 0)), tb = curve.getTangentAt(Math.min(fish.u + 0.04, 1));
      let bend = Math.atan2(tb.y, tb.x) - Math.atan2(ta.y, ta.x); bend = Math.atan2(Math.sin(bend), Math.cos(bend));
      const pace = (1 + 0.22 * Math.sin((t - T_SWIM) * 4.4)) * (1 - 0.45 * Math.min(Math.abs(bend), 1));
      const ease_in = M.clamp((t - T_SWIM) / 0.6, 0.25, 1);
      fish.speed = M.lerp(fish.speed, pace * ease_in, 1 - Math.exp(-dt * 3));
      fish.u = Math.min(fish.u + dt * fish.speed / D_SWIM, 1);
      fish.bend = M.lerp(fish.bend, bend, 1 - Math.exp(-dt * 4));
    }
    const u = fish.u;
    curve.getPointAt(u, sp);
    toWorld(sp, w1);
    w1.y += Math.sin(t * 2.3) * 0.025;                                         // a slow bob
    L1.wrap.position.copy(w1);
    if (u > 0 && u < 1) {
      curve.getPointAt(Math.min(u + 0.04, 1), sp2); toWorld(sp2, w2);
      w2.sub(w1); w2.y *= 0.25; w2.add(w1);                                    // fish stay level: turn sideways, never nose-down
      fishTarget.position.copy(w1); fishTarget.lookAt(w2);
      if (!fish.oriented) { L1.wrap.quaternion.copy(fishTarget.quaternion); fish.oriented = true; }
      else L1.wrap.quaternion.slerp(fishTarget.quaternion, 1 - Math.exp(-dt * 5));
      L1.wrap.children[0].rotation.z = M.clamp(-fish.bend * 0.8, -0.55, 0.55);  // lean into the turns
    }
    L1.wrap.visible = t > T_SWIM - 0.1;
    L1.wrap.updateMatrixWorld();
    L1.mixer && L1.mixer.update(dt * (0.7 + 0.6 * fish.speed));             // tail beat follows the pace
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
    if (fish.u >= 1 || t > T_SWIM + D_SWIM * 1.6) letters.forEach(light);
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
      words.style.opacity = Math.min(1 - M.clamp((t - T_WORDS_OUT) / 1.2, 0, 1), 1 - Math.min(e * 2.5, 1)).toFixed(3);
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
