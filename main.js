// Ink: headings are outlines until they scroll into view, then each letter lights, like the intro.
(() => {
  const root = document.documentElement;
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Split each .ink heading into letter spans (the heading keeps its accessible name).
  document.querySelectorAll(".ink").forEach(h => {
    h.setAttribute("aria-label", h.textContent.replace(/\s+/g, " ").trim());
    let i = 0;
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        for (const tok of n.textContent.split(/(\s+)/)) { // words stay whole so a heading never wraps mid-word
          if (!tok) continue;
          if (/^\s+$/.test(tok)) { frag.append(tok); continue; }
          const w = document.createElement("span");
          w.className = "w"; w.setAttribute("aria-hidden", "true");
          for (const ch of tok) {
            const s = document.createElement("span");
            s.className = "l"; s.textContent = ch; s.style.setProperty("--i", i++);
            w.append(s);
          }
          frag.append(w);
        }
        n.replaceWith(frag);
      } else walk(n);
    });
    walk(h);
  });
  const inks = [...document.querySelectorAll(".ink")];
  if (still || !("IntersectionObserver" in window)) inks.forEach(h => h.classList.add("lit"));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("lit"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -18% 0px" });
    inks.forEach(h => io.observe(h));
  }

  // Bar: rule once scrolled, current section highlighted.
  const navLinks = [...document.querySelectorAll(".bar-links a[href^='#']")];
  const targets = navLinks.map(a => document.querySelector(a.hash)).filter(Boolean);
  const onScroll = () => {
    root.classList.toggle("scrolled", scrollY > 40);
    const y = scrollY + innerHeight * 0.3;
    let cur = null;
    for (const t of targets) if (t.offsetTop <= y) cur = t.id;
    navLinks.forEach(a => a.setAttribute("aria-current", String(a.hash === "#" + cur)));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Footage is the content, so loops play (muted) when in view; every loop can be paused.
  const loops = [...document.querySelectorAll(".clip, .hero-video")];
  const held = new WeakSet();
  const vio = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting && !held.has(e.target)) e.target.play().catch(() => {}); else e.target.pause();
  }), { threshold: 0.25 });
  loops.forEach(v => vio.observe(v));
  const toggle = v => { if (v.paused) { held.delete(v); v.play().catch(() => {}); } else { held.add(v); v.pause(); } };
  document.querySelectorAll(".clip").forEach(v => v.addEventListener("click", () => toggle(v)));

  // Hero footage: phones keep the poster and never download the video.
  const hero = document.querySelector(".hero-video");
  const heroBtn = document.querySelector(".hold");
  const heroSrc = hero.querySelector("source[data-src]");
  if (matchMedia("(max-width: 640px)").matches) heroBtn.hidden = true;
  else if (heroSrc) { heroSrc.src = heroSrc.dataset.src; hero.load(); }
  heroBtn.addEventListener("click", () => toggle(hero));
  hero.addEventListener("play", () => { heroBtn.setAttribute("aria-pressed", "false"); heroBtn.lastChild.textContent = "Pause"; });
  hero.addEventListener("pause", () => { heroBtn.setAttribute("aria-pressed", "true"); heroBtn.lastChild.textContent = "Play"; });

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
  document.querySelectorAll("[data-trailer]").forEach(b => b.addEventListener("click", () => { dialog.showModal(); trailer.play().catch(() => {}); }));
  dialog.addEventListener("close", () => trailer.pause());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

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
      .catch(function (err) { status.textContent = (err && err.message) || 'That didn’t send. Please email me instead.'; })
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
  var bar = document.querySelector('.bar');
  if (!bar || !window.ResizeObserver) return;
  new ResizeObserver(function () { document.documentElement.style.setProperty('--bar-h', bar.offsetHeight + 'px'); }).observe(bar);
})();
