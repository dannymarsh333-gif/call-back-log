// The seasonal tree and owl. Fall: last leaves, owl reading call notes. Winter: snow, hat and scarf.
// Spring: blossoms. Summer: full green tree, owl in swimwear. Season follows the calendar
// (override with ?season=winter in the address to preview).
(function () {
  const LEAF = "M0 0 C6 -10 16 -10 20 0 C16 10 6 10 0 0 Z";
  const BRANCHES = [
    ["M204 340 C170 290 130 250 70 210", 16], ["M120 248 C100 220 92 190 96 150", 8], ["M84 222 C60 222 40 210 22 192", 6],
    ["M210 330 C206 260 210 190 224 110", 15], ["M214 230 C186 190 170 150 168 100", 8], ["M220 160 C240 120 262 90 288 70", 7],
    ["M218 360 C262 330 310 300 400 282", 15], ["M330 296 C350 260 360 226 362 190", 7], ["M282 316 C300 340 330 352 366 352", 6],
    ["M96 150 L86 128 M96 170 L118 150 M168 100 L156 80 M168 120 L186 98 M224 110 L214 84 M288 70 L304 56 M362 190 L376 170 M362 210 L346 192 M22 192 L10 196 M366 352 L384 360", 3],
  ];
  // places along the branches where leaves and blossoms grow
  const ANCHORS = [[70, 210], [96, 150], [120, 248], [22, 192], [60, 222], [168, 100], [186, 140], [224, 110], [214, 180], [288, 70], [250, 100],
    [362, 190], [350, 240], [400, 282], [366, 352], [150, 270], [100, 190], [260, 140], [190, 60], [240, 62], [130, 120], [60, 170], [380, 320], [140, 210]];
  const OWL = [300, 250];

  function seasonFor(d) {
    const m = d.getMonth();
    if (m === 11 || m <= 1) return "winter";
    if (m <= 4) return "spring";
    if (m <= 7) return "summer";
    return "fall";
  }
  function rng(seed) { return () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }; }
  const leaf = (x, y, rot, sc, fill, cls) => '<path' + (cls ? ' class="' + cls + '"' : "") + ' d="' + LEAF + '" transform="translate(' + x.toFixed(1) + " " + y.toFixed(1) + ") rotate(" + Math.round(rot) + ") scale(" + sc.toFixed(2) + ')" fill="' + fill + '"/>';
  const nearOwl = (x, y) => Math.hypot(x - OWL[0] - 20, y - OWL[1] + 20) < 78;

  function ground(season) {
    const r = rng(7);
    if (season === "winter") {
      let s = '<path d="M0 596 Q210 570 420 596 V640 H0 Z" fill="#ffffff"/><path d="M0 604 Q210 588 420 604" stroke="#d9e3ee" stroke-width="3" fill="none"/>';
      return s;
    }
    if (season === "spring" || season === "summer") {
      let s = '<path d="M0 600 Q210 584 420 600 V640 H0 Z" fill="' + (season === "summer" ? "#7cbf5a" : "#9ccc7a") + '"/>';
      for (let i = 0; i < 26; i++) {
        const x = 20 + r() * 380, y = 600 + r() * 30;
        s += season === "spring"
          ? '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3.2" fill="' + ["#f48fb1", "#fff", "#ffd54f"][i % 3] + '"/>'
          : '<path d="M' + x.toFixed(1) + " " + (y + 6).toFixed(1) + " l3 -10 l3 10" + '" stroke="#4e9a3c" stroke-width="2" fill="none"/>';
      }
      return s;
    }
    // fall: a leaf pile
    let s = '<path d="M0 600 Q210 585 420 600 V640 H0 Z" fill="#e8dcc6"/>';
    const colors = ["#e2672d", "#d99a1e", "#b5481f", "#8c4a22", "#e8a33a"];
    for (let i = 0; i < 70; i++) {
      const x = 60 + r() * 330, spread = 1 - Math.abs(x - 225) / 200;
      s += leaf(x, 604 - r() * 26 * Math.max(0.2, spread), r() * 360, 0.7 + r() * 0.5, colors[i % colors.length]);
    }
    return s;
  }

  function foliage(season) {
    const r = rng(season === "summer" ? 11 : 23);
    let s = "";
    if (season === "summer") {
      const greens = ["#2f7d4a", "#3f9a57", "#5bb36a", "#7cc47a", "#24603a"];
      for (let i = 0; i < 170; i++) {
        const a = ANCHORS[i % ANCHORS.length], x = a[0] + (r() - 0.5) * 70, y = a[1] + (r() - 0.5) * 60;
        if (nearOwl(x, y)) continue;
        s += leaf(x, y, r() * 360, 0.9 + r() * 0.6, greens[i % greens.length]);
      }
    } else if (season === "spring") {
      for (let i = 0; i < 46; i++) {
        const a = ANCHORS[i % ANCHORS.length], x = a[0] + (r() - 0.5) * 50, y = a[1] + (r() - 0.5) * 40;
        if (nearOwl(x, y)) continue;
        if (i % 3 === 0) { s += leaf(x, y, r() * 360, 0.7, "#8fd16a"); continue; }
        let f = "";
        for (let k = 0; k < 5; k++) { const ang = k / 5 * Math.PI * 2; f += '<circle cx="' + (x + Math.cos(ang) * 4).toFixed(1) + '" cy="' + (y + Math.sin(ang) * 4).toFixed(1) + '" r="3.6" fill="' + (i % 2 ? "#f7a8c4" : "#f48fb1") + '"/>'; }
        s += f + '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="2" fill="#fff3a6"/>';
      }
    } else if (season === "fall") {
      [[84, 126, -30, "#e2672d"], [180, 96, 40, "#d99a1e"], [302, 54, -10, "#b5481f"], [344, 190, 70, "#e2672d"], [382, 362, 20, "#d99a1e"]]
        .forEach(([x, y, rot, c]) => { s += leaf(x, y, rot, 1, c); });
      s += leaf(110, 160, 0, 1, "#e2672d", "sz-fall") + leaf(240, 80, 0, 1, "#b5481f", "sz-fall f2") + leaf(160, 120, 0, 1, "#d99a1e", "sz-fall f3");
    } else {
      // winter: snow resting on top of each branch, and a few flakes
      BRANCHES.slice(0, 9).forEach(([d, w]) => { s += '<path d="' + d + '" transform="translate(0 ' + (-w / 2 - 1) + ')" stroke="#ffffff" stroke-width="' + Math.max(3, w * 0.45) + '" stroke-linecap="round" fill="none" stroke-dasharray="40 14"/>'; });
      for (let i = 0; i < 9; i++) s += '<circle class="sz-snow s' + (i % 3) + '" cx="' + (30 + i * 44) + '" cy="' + (20 + (i % 4) * 30) + '" r="' + (3 + (i % 3)) + '" fill="#ffffff" stroke="#c9d6e3" stroke-width="1"/>';
    }
    return s;
  }

  function owl(season) {
    const lids = '<g class="owl-lids" fill="#6e4f33"><circle cx="-12" cy="-38" r="14.5"/><circle cx="12" cy="-38" r="14.5"/></g>';
    const look = season === "fall" ? [3, 3] : [0, 1];
    let s = '<g transform="translate(' + OWL[0] + " " + OWL[1] + ')">' +
      '<path d="M-30 6 C-36 -30 -22 -58 0 -60 C22 -58 36 -30 30 6 C26 30 14 44 0 46 C-14 44 -26 30 -30 6 Z" fill="#6e4f33"/>' +
      '<path d="M-34 -10 C-40 14 -32 34 -18 42 C-26 24 -28 4 -24 -12 Z" fill="#4f3824"/><path d="M34 -10 C40 14 32 34 18 42 C26 24 28 4 24 -12 Z" fill="#4f3824"/>' +
      '<path d="M-17 -6 C-18 18 -10 36 0 38 C10 36 18 18 17 -6 C10 -12 -10 -12 -17 -6 Z" fill="#d9bd92"/>' +
      '<path d="M-8 6 l3 4 3 -4 M2 6 l3 4 3 -4 M-6 18 l3 4 3 -4 M4 18 l3 4 3 -4 M-2 28 l3 4 3 -4" stroke="#8a6a46" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M-26 -50 L-30 -70 L-14 -56 Z M26 -50 L30 -70 L14 -56 Z" fill="#4f3824"/>' +
      '<circle cx="-12" cy="-38" r="14" fill="#f3e6cc"/><circle cx="12" cy="-38" r="14" fill="#f3e6cc"/>' +
      '<circle cx="-12" cy="-38" r="8.5" fill="#ffc93c"/><circle cx="12" cy="-38" r="8.5" fill="#ffc93c"/>' +
      '<circle cx="' + (-12 + look[0]) + '" cy="' + (-37 + look[1]) + '" r="5" fill="#141210"/><circle cx="' + (12 + look[0]) + '" cy="' + (-37 + look[1]) + '" r="5" fill="#141210"/>' +
      '<circle cx="' + (-10 + look[0]) + '" cy="' + (-39.5 + look[1]) + '" r="1.6" fill="#fff"/><circle cx="' + (14 + look[0]) + '" cy="' + (-39.5 + look[1]) + '" r="1.6" fill="#fff"/>' +
      (season === "summer" ? "" : lids) +
      '<path d="M-4 -28 L4 -28 L0 -18 Z" fill="#e2a21e"/>';
    if (season === "summer") {
      // swim trunks, a striped pool float, and sunglasses
      s += '<path d="M-27 26 C-22 40 -10 46 0 46 C10 46 22 40 27 26 Z" fill="#2b7bd6"/><path d="M-24 32 H24" stroke="#ffffff" stroke-width="2.5"/>' +
        '<ellipse cx="0" cy="18" rx="40" ry="12" fill="none" stroke="#e63946" stroke-width="10"/>' +
        '<ellipse cx="0" cy="18" rx="40" ry="12" fill="none" stroke="#ffffff" stroke-width="10" stroke-dasharray="14 14"/>' +
        '<g fill="#141210"><path d="M-27 -44 H-2 Q-2 -28 -14 -28 Q-27 -28 -27 -44 Z"/><path d="M2 -44 H27 Q27 -28 14 -28 Q2 -28 2 -44 Z"/></g>' +
        '<path d="M-2 -42 H2 M-27 -44 L-33 -48 M27 -44 L33 -48" stroke="#141210" stroke-width="2.5"/>' +
        '<path d="M-22 -40 L-16 -36 M7 -40 L13 -36" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity=".7"/>';
    } else if (season === "winter") {
      s += '<path d="M-26 -52 C-26 -78 26 -78 26 -52 Z" fill="#e63946"/><rect x="-28" y="-56" width="56" height="9" rx="4" fill="#ffffff"/><circle cx="0" cy="-78" r="7" fill="#ffffff"/>' +
        '<path d="M-24 -14 C-10 -6 10 -6 24 -14 L24 -4 C10 4 -10 4 -24 -4 Z" fill="#e63946"/><path d="M12 -4 L18 26 L8 24 Z" fill="#c62f3b"/><path d="M-16 -10 V-2 M-6 -8 V0 M6 -8 V0 M16 -10 V-2" stroke="#ffffff" stroke-width="2"/>';
    } else if (season === "spring") {
      let fl = "";
      for (let k = 0; k < 5; k++) { const ang = k / 5 * Math.PI * 2; fl += '<circle cx="' + (24 + Math.cos(ang) * 4).toFixed(1) + '" cy="' + (-60 + Math.sin(ang) * 4).toFixed(1) + '" r="3.8" fill="#f48fb1"/>'; }
      s += fl + '<circle cx="24" cy="-60" r="2.2" fill="#fff3a6"/>';
    } else {
      // fall: reading glasses and a laptop with his call notes
      s += '<g fill="none" stroke="#141210" stroke-width="2.2"><circle cx="-12" cy="-36" r="11"/><circle cx="12" cy="-36" r="11"/><path d="M-1.5 -37 Q0 -40 1.5 -37 M-23 -38 L-30 -42 M23 -38 L30 -42"/></g>' +
        '<g transform="translate(30 50) rotate(-9)"><path d="M-4 0 H70 L64 6 H2 Z" fill="#3a332c"/><rect x="4" y="-44" width="58" height="44" rx="4" fill="#141210"/><rect x="8" y="-40" width="50" height="34" rx="2" fill="#fff6e2"/><rect x="8" y="-40" width="50" height="11" rx="2" fill="#ff6b4a"/>' +
        '<text x="33" y="-31.5" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" letter-spacing=".5" fill="#141210">CALL BACK</text>' +
        '<path d="M12 -23 H44 M12 -17 H52 M12 -11 H36" stroke="#b9ab94" stroke-width="2.4" stroke-linecap="round"/><circle cx="51" cy="-11" r="2.6" fill="#ffc93c"/></g>';
    }
    s += '<path d="M-12 44 l-4 8 M-8 45 l0 9 M-4 44 l4 8 M6 44 l-4 8 M10 45 l0 9 M14 44 l4 8" stroke="#e2a21e" stroke-width="3" stroke-linecap="round"/></g>';
    return s;
  }

  function svg(season) {
    const sky = season === "summer" ? '<circle cx="372" cy="58" r="30" fill="#ffd54f"/><circle cx="372" cy="58" r="40" fill="none" stroke="#ffd54f" stroke-width="3" stroke-dasharray="6 9"/>' : "";
    const label = { fall: "an autumn tree with a few last leaves and an owl in reading glasses reading Call Back notes on a laptop",
      winter: "a snowy tree with an owl in a knit hat and scarf", spring: "a blossoming tree with an owl wearing a flower",
      summer: "a full green summer tree with an owl in sunglasses, swim trunks and a pool float" }[season];
    return '<svg viewBox="0 0 420 640" role="img" aria-label="Seasonal decoration: ' + label + '">' + sky + ground(season) +
      '<path d="M176 610 C186 540 190 470 192 410 C193 380 196 350 202 320 L222 320 C226 352 230 400 236 460 C242 530 252 580 270 610 Z" fill="#2a211b"/>' +
      '<path d="M200 600 C204 520 206 450 207 380" stroke="#4a3a2e" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<g fill="none" stroke="#2a211b" stroke-linecap="round">' + BRANCHES.map(([d, w]) => '<path d="' + d + '" stroke-width="' + w + '"/>').join("") + "</g>" +
      foliage(season) + owl(season) + "</svg>";
  }

  window.SeasonArt = { seasonFor, svg };
})();
