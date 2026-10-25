// Visitor counts for the Job Desk, on every page. No cookies and no IP address kept; see privacy.html.
// ?notrack=1 leaves this device out, and the browser's Global Privacy Control / Do Not Track settings switch it off.
(function () {
  try {
    if (/[?&]notrack=1/.test(location.search)) localStorage.setItem('notrack', '1');
    if (/[?&]notrack=0/.test(location.search)) localStorage.removeItem('notrack');
    if (localStorage.getItem('notrack') || location.hostname !== 'curiocrafter.github.io') return;
  } catch (e) {}
  if (navigator.globalPrivacyControl || navigator.doNotTrack === '1') return;
  var url = 'https://job-finder.andrewrainsberger.workers.dev/api/visit';
  function send(o) { o.path = location.pathname; o.wd = navigator.webdriver ? 1 : 0; try { navigator.sendBeacon(url, JSON.stringify(o)); } catch (e) {} }
  function hit(kind) { send({ kind: kind, ref: document.referrer }); }
  hit('view');
  var shown = Date.now(), engaged = false;
  function engage() { if (engaged || Date.now() - shown < 1500) return; engaged = true; hit('engaged'); }
  ['scroll', 'pointerdown', 'keydown', 'touchstart'].forEach(function (t) { addEventListener(t, engage, { capture: true, passive: true }); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a, button');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (/Resume\.pdf|resume\.html/i.test(href)) hit('resume');
    else if (a.hasAttribute('data-message')) hit('message');
    else if (/linkedin\.com/i.test(href)) hit('linkedin');
  }, true);

  // Reading time, how far down people scroll and which section they stay on. Counted only while the page is on
  // screen and someone moved, scrolled or typed in the last 30 seconds; sent when the page is hidden or closed.
  var secs = 0, depth = 0, parts = {}, active = Date.now();
  ['scroll', 'pointermove', 'pointerdown', 'keydown', 'touchstart'].forEach(function (t) { addEventListener(t, function () { active = Date.now(); }, { capture: true, passive: true }); });
  setInterval(function () {
    if (document.visibilityState !== 'visible' || Date.now() - active > 30000) return;
    secs++;
    depth = Math.max(depth, Math.min(100, Math.round((scrollY + innerHeight) / document.documentElement.scrollHeight * 100)));
    var el = document.elementFromPoint(innerWidth / 2, innerHeight / 2), s = el && el.closest('section[id], header[id], footer[id], article[id]');
    if (s) parts[s.id] = (parts[s.id] || 0) + 1;
  }, 1000);
  function flush() { if (!secs) return; send({ kind: 'leave', secs: secs, depth: depth, parts: parts }); secs = 0; parts = {}; }
  addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flush(); });
  addEventListener('pagehide', flush);
})();
