// The Descent: scroll position becomes dive depth.
(() => {
  const root = document.documentElement;
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MAX = 86;
  const isDive = () => root.dataset.mode === "dive";
  const modeBtns = [...document.querySelectorAll("button[data-mode]")];
  const setMode = (m, save) => {
    root.dataset.mode = m;
    modeBtns.filter(b => b.closest(".mode")).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.mode === m)));
    if (save) try { localStorage.setItem("mode", m); } catch (e) {}
    if (save) document.querySelectorAll(".stop").forEach(st => st.classList.add("seen"));
    if (save && document.activeElement && !document.activeElement.offsetParent) document.querySelector('.mode-invite button[data-mode="' + (m === "dive" ? "pro" : "dive") + '"]')?.focus();
    requestAnimationFrame(() => { measure(); update(); if (isDive() && !still) requestAnimationFrame(tick); });
  };
  modeBtns.forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode, true))); // depth at the very bottom of the page
  const num = document.querySelector(".gauge-num");
  const name = document.querySelector(".gauge-name");
  const links = [...document.querySelectorAll(".gauge-stops a")];
  links.forEach(a => a.parentElement.style.setProperty("--d", a.dataset.depth));

  const anchors = [...document.querySelectorAll("[data-depth]")].filter(el => !el.closest(".gauge"));
  let marks = [];
  const measure = () => {
    marks = anchors.map(el => ({ y: el.getBoundingClientRect().top + scrollY, d: +el.dataset.depth, id: el.id }));
    marks.push({ y: document.documentElement.scrollHeight - innerHeight * 0.2, d: MAX, id: null });
  };

  let shown = -1;
  const update = () => {
    const probe = scrollY + innerHeight * 0.2 * Math.min(1, scrollY / innerHeight);
    let depth = 0, current = marks[0]?.id;
    for (let i = 0; i < marks.length - 1; i++) {
      const a = marks[i], b = marks[i + 1];
      if (probe >= a.y) {
        current = a.id ?? current;
        depth = probe >= b.y ? b.d : a.d + (b.d - a.d) * (probe - a.y) / Math.max(1, b.y - a.y);
      }
    }
    depth = Math.min(MAX, Math.max(0, depth));
    root.classList.toggle("scrolled", scrollY > 40);
    root.style.setProperty("--p", (depth / MAX).toFixed(4));
    root.style.setProperty("--dark", Math.min(1, Math.max(0, (depth - 34) / 30)).toFixed(3));
    const rounded = Math.round(depth);
    if (rounded !== shown) { num.textContent = rounded; shown = rounded; }
    links.forEach(a => {
      const on = a.hash === "#" + current;
      a.setAttribute("aria-current", on ? "true" : "false");
      if (on && name.textContent !== a.lastChild.textContent) name.textContent = a.lastChild.textContent;
    });
  };

  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false; }); } };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", () => { measure(); update(); });
  addEventListener("load", () => { measure(); update(); });
  measure(); update();

  // Dive light follows the pointer once it gets dark.
  if (matchMedia("(pointer: fine)").matches) {
    addEventListener("pointermove", e => {
      root.style.setProperty("--lx", e.clientX + "px");
      root.style.setProperty("--ly", e.clientY + "px");
    }, { passive: true });
  }

  // Marine snow. ponytail: plain 2D canvas, ~70 particles; WebGL only if this ever shows up in a profile.
  const canvas = document.querySelector(".snow");
  const ctx = canvas.getContext("2d");
  let flakes = [];
  const size = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(90, innerWidth * innerHeight / 16000));
    flakes = Array.from({ length: n }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() * 1.4 + 0.4, v: Math.random() * 0.25 + 0.06, s: Math.random() * Math.PI * 2,
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle = "rgba(220,238,240,0.55)";
    for (const f of flakes) {
      ctx.beginPath(); ctx.arc(f.x + Math.sin(f.s) * 6, f.y, f.r, 0, Math.PI * 2); ctx.fill();
    }
  };
  const tick = () => {
    for (const f of flakes) {
      f.y += f.v; f.s += 0.006;
      if (f.y > innerHeight + 4) { f.y = -4; f.x = Math.random() * innerWidth; }
    }
    draw();
    if (!document.hidden && isDive()) requestAnimationFrame(tick);
  };
  size(); addEventListener("resize", size);
  if (still) draw();
  else { requestAnimationFrame(tick); document.addEventListener("visibilitychange", () => { if (!document.hidden && isDive()) requestAnimationFrame(tick); }); }

  // Footage is the content, so loops play (muted) even with reduced motion; every loop can be paused.
  const loops = [...document.querySelectorAll(".clip, .surface-video")];
  const held = new WeakSet();
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting && !held.has(e.target)) e.target.play().catch(() => {}); else e.target.pause();
  }), { threshold: 0.25 });
  loops.forEach(v => io.observe(v));
  const toggle = v => {
    if (v.paused) { held.delete(v); v.play().catch(() => {}); } else { held.add(v); v.pause(); }
  };
  document.querySelectorAll(".clip").forEach(v => v.addEventListener("click", () => toggle(v)));
  const heroBtn = document.querySelector(".hold");
  const hero = document.querySelector(".surface-video");
  heroBtn.addEventListener("click", () => toggle(hero));
  hero.addEventListener("play", () => { heroBtn.setAttribute("aria-pressed", "false"); heroBtn.lastChild.textContent = " Pause"; });
  hero.addEventListener("pause", () => { heroBtn.setAttribute("aria-pressed", "true"); heroBtn.lastChild.textContent = " Play"; });

  // Shipwreck clip tabs
  const clip = document.querySelector("[data-clips]");
  document.querySelectorAll(".tabs button").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
    clip.poster = btn.dataset.src + ".webp";
    clip.src = btn.dataset.src + ".mp4";
    held.delete(clip); clip.play().catch(() => {});
  }));

  // Trailer
  const dialog = document.querySelector(".trailer");
  const trailer = dialog.querySelector("video");
  document.querySelector("[data-trailer]").addEventListener("click", () => {
    dialog.showModal();
    trailer.play().catch(() => {});
  });
  dialog.addEventListener("close", () => trailer.pause());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

  setMode(root.dataset.mode, false);

  // Demos open in a dialog; the iframe is emptied on close so audio stops.
  const player = document.querySelector(".player");
  const frame = player.querySelector("iframe");
  document.querySelectorAll("[data-play]").forEach(btn => btn.addEventListener("click", () => {
    frame.src = btn.dataset.play;
    player.querySelector(".player-title").textContent = btn.dataset.title;
    player.setAttribute("aria-label", btn.dataset.title + " demo");
    player.querySelector(".player-out").href = btn.dataset.play;
    player.showModal();
  }));
  player.addEventListener("close", () => { frame.src = "about:blank"; });

  // One entrance: each stop rises out of the murk the first time it comes into view.
  if (!still && "IntersectionObserver" in window) {
    const stops = [...document.querySelectorAll(".stop")];
    const below = stops.filter(s => s.getBoundingClientRect().top > innerHeight);
    below.forEach(s => s.classList.add("pending"));
    root.classList.add("rise-ready");
    stops.filter(s => !s.classList.contains("pending")).forEach(s => s.classList.add("seen"));
    const rise = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("seen"); rise.unobserve(e.target); }
    }), { rootMargin: "0px 0px -12% 0px" });
    below.forEach(s => rise.observe(s));
  }
})();
// Contact form: sends through the Job Desk worker to Andrew's inbox.
(function () {
  var dlg = document.getElementById('msg'), form = document.getElementById('msg-form');
  if (!dlg) return;
  var status = form.querySelector('.msg-status'), opened = 0;
  document.querySelectorAll('[data-message]').forEach(function (b) { b.addEventListener('click', function () { opened = Date.now(); status.textContent = ''; dlg.showModal(); }); });
  form.querySelector('[data-close]').addEventListener('click', function () { dlg.close(); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('[type=submit]'); btn.disabled = true; status.textContent = 'Sending…';
    var d = Object.fromEntries(new FormData(form)); d.site = 'andrew'; d.elapsed = Date.now() - opened;
    fetch('https://job-finder.andrewrainsberger.workers.dev/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(d) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error); }); })
      .then(function () { form.reset(); status.textContent = 'Thanks! Your message is on its way.'; })
      .catch(function (err) { status.textContent = (err && err.message) || 'That didn’t send. Please message me on LinkedIn instead.'; })
      .finally(function () { btn.disabled = false; });
  });
})();

// Blog and interactive demos. The Job Desk's GitHub Action copies published posts and approved demos into
// /blog and /demos; nothing unpublished is ever in this repo. Links appear once there is something to show.
(function () {
  function json(u) { return fetch(u).then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; }); }
  json('/blog/posts.json').then(function (p) { if (p.length) document.querySelectorAll('[data-blog-link]').forEach(function (a) { a.hidden = false; }); });
  json('/demos/placements.json').then(function (list) {
    if (!list.length) return;
    document.querySelectorAll('[data-demos-link]').forEach(function (a) { a.hidden = false; });
    var placed = 0;
    list.forEach(function (d) {
      var section = d.place.indexOf('home-') === 0 && document.getElementById(d.place.slice(5));
      if (!section) return;
      var band = document.createElement('section');
      band.className = 'stop demo-slot';
      var mount = document.createElement('div');
      mount.className = 'andrew';
      mount.setAttribute('data-demo', d.id);
      band.appendChild(mount);
      var after = section;
      while (after.nextElementSibling && after.nextElementSibling.classList.contains('demo-slot')) after = after.nextElementSibling;
      after.after(band);
      placed++;
    });
    if (placed) { var s = document.createElement('script'); s.src = '/demos/demos.js'; document.body.appendChild(s); }
  });
})();
// Keep the header art below the fixed top bar, however many rows the bar wraps to on a phone.
(function () {
  var bar = document.querySelector('.topbar');
  if (!bar || !window.ResizeObserver) return;
  new ResizeObserver(function () { document.documentElement.style.setProperty('--bar-h', bar.offsetHeight + 'px'); }).observe(bar);
})();
