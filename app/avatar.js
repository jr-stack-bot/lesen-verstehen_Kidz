// Lesen & Verstehen – @ Joschy
// Figur-Baukasten: alle Teile als SVG, Kaufen mit Münzen
(function () {
  "use strict";
  var O = 'stroke="rgba(0,0,0,.22)" stroke-width="2"';
  function shade(hex, amt) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    r = Math.max(0, Math.min(255, Math.round(r * (1 + amt)))); g = Math.max(0, Math.min(255, Math.round(g * (1 + amt)))); b = Math.max(0, Math.min(255, Math.round(b * (1 + amt))));
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  function star(cx, cy, r, fill, extra) {
    var p = [];
    for (var k = 0; k < 10; k++) { var rr = k % 2 ? r * 0.45 : r, a = k * Math.PI / 5; p.push((cx + rr * Math.sin(a)).toFixed(1) + "," + (cy - rr * Math.cos(a)).toFixed(1)); }
    return '<polygon points="' + p.join(" ") + '" fill="' + fill + '" ' + (extra || "") + "/>";
  }
  function heart(cx, cy, s, fill, extra) {
    return '<path transform="translate(' + cx + "," + cy + ") scale(" + s + ')" d="M0,4 C-6,-2 -12,4 -6,10 L0,16 L6,10 C12,4 6,-2 0,4Z" fill="' + fill + '" ' + (extra || "") + "/>";
  }
  function flower(cx, cy, r, petal, mid) {
    var s = "";
    for (var k = 0; k < 5; k++) { var a = k * Math.PI * 2 / 5; s += '<circle cx="' + (cx + r * Math.sin(a)).toFixed(1) + '" cy="' + (cy - r * Math.cos(a)).toFixed(1) + '" r="' + (r * 0.75).toFixed(1) + '" fill="' + petal + '"/>'; }
    return s + '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.6).toFixed(1) + '" fill="' + (mid || "#F2B705") + '"/>';
  }
  // Rock-/Kleid-Form: Trapez von der Taille (y=178) bis zum Saum B mit halber Saumbreite W; "from" schneidet oben ab (für Borten)
  var SK_T = 178, SK_H = 36;
  function skirtPath(B, W, from) {
    from = from == null ? SK_T : from;
    var hf = SK_H + (W - SK_H) * (from - SK_T) / (B - SK_T);
    return "M" + (100 - hf).toFixed(1) + "," + from + " L" + (100 + hf).toFixed(1) + "," + from + " L" + (100 + W) + "," + B + " Q100," + (B + 8) + " " + (100 - W) + "," + B + " Z";
  }

  var SLOTS = [
    { id: "haut", name: "Haut", icon: "🎨", optional: false, view: "50 45 100 100" },
    { id: "haare", name: "Frisur", icon: "💇", optional: false, view: "40 20 120 120" },
    { id: "haarfarbe", name: "Haarfarbe", icon: "🖌️", optional: false, view: "40 20 120 120" },
    { id: "outfit", name: "Kleidung", icon: "👕", optional: false, view: "25 115 150 145" },
    { id: "kopf", name: "Hut", icon: "🎩", optional: true, view: "30 0 140 140" },
    { id: "brille", name: "Brille", icon: "🕶️", optional: true, view: "50 50 100 90" },
    { id: "ruecken", name: "Rücken", icon: "🦸", optional: true, view: "0 80 200 180" },
    { id: "hand", name: "In der Hand", icon: "✋", optional: true, view: "90 80 110 170" },
    { id: "tier", name: "Haustier", icon: "🐾", optional: true, view: "0 110 110 150" },
    { id: "hintergrund", name: "Ort", icon: "🏞️", optional: false, view: "0 0 200 260" },
    { id: "effekt", name: "Effekt", icon: "✨", optional: true, view: "0 0 200 260" }
  ];

  // ── Hilfen für Haare ──
  var HAIR_TOP = "M60,96 C58,62 78,50 100,50 C122,50 142,62 140,96 C134,78 120,70 100,70 C80,70 66,78 60,96Z";

  var I = [];
  function add(o) { I.push(o); }

  // Hautfarben (alle gratis)
  [["haut1", "Hell", "#F6D3B3"], ["haut2", "Pfirsich", "#E8B98F"], ["haut3", "Karamell", "#C68E5E"], ["haut4", "Braun", "#9A6440"], ["haut5", "Dunkelbraun", "#6B4428"]]
    .forEach(function (h) { add({ id: h[0], slot: "haut", name: h[1], price: 0, color: h[2] }); });

  // Haarfarben
  [["hf_schwarz", "Schwarz", "#1F1A1C", 0], ["hf_braun", "Braun", "#5A3622", 0], ["hf_blond", "Blond", "#E3B95B", 20], ["hf_rot", "Rot", "#C4502B", 30],
   ["hf_blau", "Blau", "#2F7FD8", 60], ["hf_gruen", "Grün", "#2EAD5B", 60], ["hf_lila", "Lila", "#8A4FD0", 60], ["hf_pink", "Pink", "#EC5FA8", 60], ["hf_silber", "Silber", "#C9CED6", 90], ["hf_gold", "Gold", "#F2B705", 120]]
    .forEach(function (h) { add({ id: h[0], slot: "haarfarbe", name: h[1], price: h[3], color: h[2] }); });

  // Frisuren
  add({ id: "fr_kurz", slot: "haare", name: "Kurz", price: 0, front: function (c) { return '<path d="' + HAIR_TOP + '" fill="' + c.hair + '" ' + O + "/>"; } });
  add({ id: "fr_locken", slot: "haare", name: "Locken", price: 0, front: function (c) {
    return [[66, 80, 13], [78, 63, 14], [97, 55, 15], [117, 57, 14], [132, 69, 13], [139, 86, 9], [61, 95, 8], [88, 66, 10], [108, 64, 10]]
      .map(function (k) { return '<circle cx="' + k[0] + '" cy="' + k[1] + '" r="' + k[2] + '" fill="' + c.hair + '" ' + O + "/>"; }).join("") +
      [[88, 66, 10], [108, 64, 10], [97, 60, 11]].map(function (k) { return '<circle cx="' + k[0] + '" cy="' + k[1] + '" r="' + k[2] + '" fill="' + c.hair + '"/>'; }).join("");
  } });
  add({ id: "fr_scheitel", slot: "haare", name: "Seitenscheitel", price: 25, front: function (c) {
    return '<path d="M60,96 C56,60 80,48 104,50 C130,52 144,66 140,96 C138,84 130,76 118,74 C102,72 84,78 70,70 C64,78 61,86 60,96Z" fill="' + c.hair + '" ' + O + "/>";
  } });
  add({ id: "fr_stacheln", slot: "haare", name: "Stachelkopf", price: 35, front: function (c) {
    return '<path d="M60,94 L60,66 L72,74 L74,48 L89,63 L100,36 L111,63 L126,48 L128,74 L140,66 L140,94 C134,78 118,70 100,70 C82,70 66,78 60,94Z" fill="' + c.hair + '" ' + O + "/>";
  } });
  add({ id: "fr_lang", slot: "haare", name: "Lange Haare", price: 40,
    back: function (c) { return '<path d="M58,92 C58,58 78,50 100,50 C122,50 142,58 142,92 L148,170 C130,180 70,180 52,170 Z" fill="' + c.hair + '" ' + O + "/>"; },
    front: function (c) { return '<path d="' + HAIR_TOP + '" fill="' + c.hair + '" ' + O + "/>"; } });
  add({ id: "fr_dutt", slot: "haare", name: "Dutt", price: 40, front: function (c) {
    return '<circle cx="100" cy="46" r="15" fill="' + c.hair + '" ' + O + '/><path d="' + HAIR_TOP + '" fill="' + c.hair + '" ' + O + "/>";
  } });
  add({ id: "fr_zoepfe", slot: "haare", name: "Zöpfe", price: 45,
    back: function (c) { return '<ellipse cx="54" cy="104" rx="11" ry="20" fill="' + c.hair + '" ' + O + '/><ellipse cx="146" cy="104" rx="11" ry="20" fill="' + c.hair + '" ' + O + "/>"; },
    front: function (c) { return '<path d="' + HAIR_TOP + '" fill="' + c.hair + '" ' + O + '/><circle cx="58" cy="86" r="5" fill="#EC5FA8"/><circle cx="142" cy="86" r="5" fill="#EC5FA8"/>'; } });
  add({ id: "fr_afro", slot: "haare", name: "Afro", price: 50,
    back: function (c) { return '<circle cx="100" cy="78" r="56" fill="' + c.hair + '" ' + O + "/>"; },
    front: function (c) { return '<path d="M62,92 C64,72 80,62 100,62 C120,62 136,72 138,92 C130,80 116,74 100,74 C84,74 70,80 62,92Z" fill="' + c.hair + '"/>'; } });
  add({ id: "fr_irokese", slot: "haare", name: "Irokese", price: 80, front: function (c) {
    return '<path d="' + HAIR_TOP + '" fill="' + c.hair + '" opacity=".35"/><path d="M90,72 C88,52 92,34 100,24 C108,34 112,52 110,72 Z" fill="' + c.hair + '" ' + O + "/>";
  } });
  add({ id: "fr_wild", slot: "haare", name: "Wuschelkopf", price: 60, front: function (c) {
    return '<path d="M56,98 C48,80 54,62 64,58 C62,44 80,38 88,44 C92,32 112,32 116,44 C126,38 142,46 138,60 C150,66 152,84 144,98 C138,80 124,72 100,72 C78,72 62,80 56,98Z" fill="' + c.hair + '" ' + O + "/>";
  } });
  add({ id: "fr_pferd", slot: "haare", name: "Pferdeschwanz", price: 35,
    back: function (c) { return '<path d="M124,58 C156,50 170,92 160,132 C156,148 146,156 140,160 C148,140 150,116 142,96 C138,84 130,76 122,72 Z" fill="' + c.hair + '" ' + O + "/>"; },
    front: function (c) { return '<path d="' + HAIR_TOP + '" fill="' + c.hair + '" ' + O + '/><ellipse cx="134" cy="62" rx="6" ry="8" transform="rotate(-30 134 62)" fill="#EC5FA8" ' + O + "/>"; } });
  add({ id: "fr_zweidutts", slot: "haare", name: "Zwei Dutts", price: 45, front: function (c) {
    return '<circle cx="68" cy="58" r="15" fill="' + c.hair + '" ' + O + '/><circle cx="132" cy="58" r="15" fill="' + c.hair + '" ' + O + '/><path d="M60,52 C66,48 72,50 74,56 M126,56 C128,50 134,48 140,52" stroke="' + shade(c.hair, 0.35) + '" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/><path d="' + HAIR_TOP + '" fill="' + c.hair + '" ' + O + "/>";
  } });
  add({ id: "fr_langlocken", slot: "haare", name: "Lange Locken", price: 55,
    back: function (c) {
      var s = '<path d="M58,92 C58,58 78,50 100,50 C122,50 142,58 142,92 L146,164 C128,174 72,174 54,164 Z" fill="' + c.hair + '" ' + O + "/>";
      [[54, 100], [50, 118], [54, 136], [50, 154], [60, 168], [146, 100], [150, 118], [146, 136], [150, 154], [140, 168], [76, 172], [100, 174], [124, 172]].forEach(function (k) { s += '<circle cx="' + k[0] + '" cy="' + k[1] + '" r="11" fill="' + c.hair + '" ' + O + "/>"; });
      return s + '<path d="M58,92 C58,58 78,50 100,50 C122,50 142,58 142,92 L146,164 C128,172 72,172 54,164 Z" fill="' + c.hair + '"/>';
    },
    front: function (c) {
      return '<path d="' + HAIR_TOP + '" fill="' + c.hair + '" ' + O + '/>' + [[62, 88, 8], [138, 88, 8], [70, 72, 9], [130, 72, 9]].map(function (k) { return '<circle cx="' + k[0] + '" cy="' + k[1] + '" r="' + k[2] + '" fill="' + c.hair + '" ' + O + "/>"; }).join("") +
        '<path d="M80,60 C86,56 92,58 94,62 M106,58 C110,54 118,56 120,60" stroke="' + shade(c.hair, 0.35) + '" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/>';
    } });

  // Kleidung
  function outfit(id, name, price, o) { o.id = id; o.slot = "outfit"; o.name = name; o.price = price; add(o); }
  outfit("kl_blau", "T-Shirt blau", 0, { shirt: "#3A7BD5", sleeve: "short", pants: "#33415C", shoes: "#2B2B33" });
  outfit("kl_rot", "T-Shirt rot", 0, { shirt: "#D9473C", sleeve: "short", pants: "#33415C", shoes: "#2B2B33" });
  outfit("kl_gruen", "T-Shirt grün", 15, { shirt: "#3E9B5F", sleeve: "short", pants: "#5B4A3A", shoes: "#2B2B33" });
  outfit("kl_streifen", "Ringelshirt", 30, { shirt: "#FFFFFF", sleeve: "short", pants: "#33415C", shoes: "#D9473C",
    extra: function () { var s = ""; for (var y = 146; y < 200; y += 12) s += '<rect x="64" y="' + y + '" width="72" height="6" fill="#2F7FC1"/>'; return s; } });
  outfit("kl_hoodie", "Hoodie", 50, { shirt: "#F28C28", sleeve: "long", pants: "#33415C", shoes: "#FFFFFF",
    back: function () { return '<ellipse cx="100" cy="134" rx="30" ry="12" fill="#D9761A" ' + O + "/>"; },
    extra: function () { return '<rect x="80" y="176" width="40" height="18" rx="8" fill="#D9761A"/><line x1="93" y1="138" x2="91" y2="158" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><line x1="107" y1="138" x2="109" y2="158" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>'; } });
  outfit("kl_trikot", "Fußballtrikot", 60, { shirt: "#FFFFFF", sleeve: "short", sleeveColor: "#D9473C", pants: "#1F1F2A", shorts: true, shoes: "#2EAD5B", socks: "#D9473C",
    extra: function () { return '<rect x="64" y="136" width="72" height="8" fill="#D9473C"/><text x="100" y="185" font-family="Nunito,sans-serif" font-weight="900" font-size="30" text-anchor="middle" fill="#D9473C">10</text>'; } });
  outfit("kl_hemd", "Hemd mit Fliege", 80, { shirt: "#F7F7F7", sleeve: "long", pants: "#2E3440", shoes: "#3A2A20",
    extra: function () { return '<path d="M88,138 L100,146 L88,154Z M112,138 L100,146 L112,154Z" fill="#D9473C"/><circle cx="100" cy="146" r="3.5" fill="#B2342B"/><circle cx="100" cy="166" r="2" fill="#999"/><circle cx="100" cy="180" r="2" fill="#999"/><circle cx="100" cy="194" r="2" fill="#999"/>'; } });
  outfit("kl_kurta", "Festkleidung", 90, { shirt: "#E86A1E", sleeve: "long", pants: "#F4EEE3", shoes: "#8A5A2B", long: true,
    extra: function () { return '<path d="M100,136 L100,170" stroke="#F2B705" stroke-width="4"/><rect x="64" y="208" width="72" height="6" fill="#F2B705"/><circle cx="100" cy="148" r="2.5" fill="#F2B705"/><circle cx="100" cy="160" r="2.5" fill="#F2B705"/>'; } });
  outfit("kl_pyjama", "Schlafanzug", 40, { shirt: "#9BC7F0", sleeve: "long", pants: "#9BC7F0", shoes: "#F4EEE3",
    extra: function () { return star(84, 160, 6, "#FFE27A") + star(116, 176, 6, "#FFE27A") + star(92, 192, 5, "#FFE27A") + star(84, 222, 5, "#FFE27A") + star(116, 230, 5, "#FFE27A"); } });
  outfit("kl_dino", "Dino-Kostüm", 150, { shirt: "#5DBB63", sleeve: "long", pants: "#5DBB63", shoes: "#3E8E44",
    back: function () { return '<path d="M64,140 L54,150 L64,158 L52,170 L64,178 L54,190 L66,198" fill="#F2B705" ' + O + "/>"; },
    extra: function () { return '<ellipse cx="100" cy="176" rx="22" ry="24" fill="#D7F0C4"/>'; } });
  outfit("kl_held", "Superhelden-Anzug", 180, { shirt: "#2F5BD3", sleeve: "long", pants: "#2F5BD3", shoes: "#D9473C",
    extra: function () { return '<circle cx="100" cy="164" r="15" fill="#F2B705" ' + O + '/>' + star(100, 165, 11, "#D9473C") + '<rect x="64" y="194" width="72" height="9" fill="#D9473C"/><rect x="94" y="193" width="12" height="11" rx="2" fill="#F2B705"/>'; } });
  outfit("kl_ritter", "Ritterrüstung", 220, { shirt: "#AEB6C0", sleeve: "long", pants: "#8C96A3", shoes: "#6B7480",
    extra: function () { return '<path d="M64,150 L136,150 M64,168 L136,168 M64,186 L136,186" stroke="#7E8894" stroke-width="2"/><path d="M100,152 L112,164 L100,182 L88,164Z" fill="#F2B705" ' + O + "/>"; } });
  outfit("kl_astronaut", "Astronautenanzug", 260, { shirt: "#F1F4F8", sleeve: "long", pants: "#F1F4F8", shoes: "#8C96A3",
    extra: function () { return '<rect x="76" y="150" width="48" height="26" rx="6" fill="#D5DCE6" ' + O + '/><circle cx="86" cy="163" r="4" fill="#D9473C"/><circle cx="100" cy="163" r="4" fill="#2EAD5B"/><circle cx="114" cy="163" r="4" fill="#2F7FC1"/><circle cx="76" cy="190" r="7" fill="#2F7FC1"/>' + star(76, 190, 5, "#fff"); } });
  outfit("kl_koenig", "Königsmantel", 300, { shirt: "#8A2BB0", sleeve: "long", pants: "#5C1C78", shoes: "#F2B705",
    extra: function () { return '<rect x="64" y="136" width="72" height="12" fill="#FFFFFF"/><g fill="#1F1A1C"><circle cx="74" cy="142" r="1.8"/><circle cx="88" cy="142" r="1.8"/><circle cx="102" cy="142" r="1.8"/><circle cx="116" cy="142" r="1.8"/><circle cx="128" cy="142" r="1.8"/></g><rect x="96" y="148" width="8" height="56" fill="#F2B705"/>'; } });

  // Kleider & Röcke (dress:true → Rock statt Hose; skirtB = Saum-y, skirtW = halbe Saumbreite)
  function waist(col) { return '<rect x="64" y="176" width="72" height="9" rx="3" fill="' + col + '" ' + O + "/>"; }
  outfit("kl_kleid", "Kleid", 0, { dress: true, shirt: "#F48FB1", skirt: "#F48FB1", sleeve: "short", shoes: "#C2185B",
    extra: function () {
      return '<path d="M86,137 C86,148 98,148 99,138 Z M114,137 C114,148 102,148 101,138 Z" fill="#FFFFFF" ' + O + "/>" + waist("#E0628F") +
        '<path d="M100,180 L90,174 L90,187 Z M100,180 L110,174 L110,187 Z" fill="#FFFFFF" ' + O + '/><circle cx="100" cy="180" r="3" fill="#FFFFFF" ' + O + "/>";
    } });
  outfit("kl_sommerkleid", "Sommerkleid", 40, { dress: true, shirt: "#FFD54F", skirt: "#FFD54F", sleeve: "none", shoes: "#C68E5E",
    extra: function () {
      return '<path d="M74,136 L74,142 M126,136 L126,142" stroke="#E8B923" stroke-width="5" stroke-linecap="round"/>' + waist("#F2A900") +
        flower(84, 158, 4, "#FFFFFF", "#F28C28") + flower(116, 166, 4, "#FFFFFF", "#F28C28") + flower(70, 206, 5, "#FFFFFF", "#EC5FA8") + flower(100, 214, 5, "#FFFFFF", "#F28C28") + flower(130, 202, 5, "#FFFFFF", "#EC5FA8") + flower(88, 194, 3.5, "#FFFFFF", "#2F7FC1") + flower(116, 192, 3.5, "#FFFFFF", "#2F7FC1");
    } });
  outfit("kl_jeansrock", "Jeansrock & Shirt", 60, { dress: true, shirt: "#C9B6F2", skirt: "#4A6FA5", skirtB: 218, skirtW: 48, sleeve: "short", shoes: "#FFFFFF",
    extra: function () {
      return heart(100, 148, 1.3, "#EC5FA8") + '<rect x="64" y="178" width="72" height="8" fill="#3F5F91" ' + O + '/>' +
        '<path d="M55,212 Q100,220 145,212" fill="none" stroke="#F2C76E" stroke-width="1.5" stroke-dasharray="3 3"/>' +
        '<path d="M100,186 L100,220" stroke="#F2C76E" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="100" cy="182" r="3" fill="#C9A227"/>';
    } });
  outfit("kl_tutu", "Ballerina-Tutu", 90, { dress: true, shirt: "#F7B6C8", sleeve: "none", shoes: "#F7B6C8",
    skirtFn: function () {
      var sc = function (y, w, col, op) { return '<path d="M66,178 L134,178 L' + (100 + w) + "," + y + " " + revScallop(y, w, 8) + 'Z" fill="' + col + '" opacity="' + op + '" ' + O + "/>"; };
      return sc(212, 64, "#FBD3E0", 1) + sc(204, 56, "#F7B6C8", 0.95) + '<path d="M70,190 L80,200 M90,186 L94,204 M110,186 L106,204 M130,190 L120,200" stroke="#FFFFFF" stroke-width="1.5" opacity=".7"/>';
    },
    extra: function () { return waist("#EC8FB0") + star(100, 160, 6, "#FFFFFF", 'opacity=".9"') + '<path d="M84,236 L90,226 M116,236 L110,226" stroke="#EC8FB0" stroke-width="2"/>'; } });
  function revScallop(y, w, n) { var d = "", step = (2 * w) / n, x = 100 + w; for (var i = 0; i < n; i++) { d += "Q" + (x - step / 2).toFixed(1) + "," + (y + 10) + " " + (x - step).toFixed(1) + "," + y + " "; x -= step; } return d; }
  outfit("kl_sari", "Sari", 120, { dress: true, shirt: "#1E7A4C", skirt: "#C2185B", skirtB: 238, skirtW: 54, hem: "#F2B705", sleeve: "short", sleeveColor: "#1E7A4C", shoes: "#B88A00",
    back: function () { return '<path d="M62,140 L48,210 L66,212 L74,146 Z" fill="#C2185B" ' + O + '/><path d="M48,210 L66,212 L65,204 L49,202 Z" fill="#F2B705"/>'; },
    extra: function () {
      return '<path d="M94,190 L92,238 M100,190 L100,240 M106,190 L108,238" stroke="#9A1048" stroke-width="2" opacity=".7"/>' +
        '<path d="M64,140 L82,136 L136,178 L136,192 L118,192 Z" fill="#C2185B" ' + O + "/>" +
        '<path d="M64,140 L82,136 L86,139 L68,144 Z M118,192 L136,192 L136,186 L122,186 Z" fill="#F2B705"/><path d="M82,136 L136,178" stroke="#F2B705" stroke-width="4"/>' +
        '<g fill="#F2B705"><circle cx="96" cy="160" r="1.8"/><circle cx="108" cy="170" r="1.8"/><circle cx="118" cy="178" r="1.8"/><circle cx="84" cy="150" r="1.8"/></g>';
    } });
  outfit("kl_glitzer", "Glitzerkleid", 150, { dress: true, shirt: "#7E57C2", skirt: "#7E57C2", sleeve: "short", sleeveColor: "#9575CD", shoes: "#C9CED6",
    extra: function () {
      return waist("#C9CED6") + star(86, 156, 5, "#FFE27A") + star(114, 150, 4, "#FFFFFF") + star(106, 170, 3.5, "#FFE27A") +
        '<g class="av-twinkle">' + star(74, 206, 6, "#FFE27A") + star(124, 214, 5, "#FFFFFF") + star(98, 200, 4, "#FFFFFF") + "</g>" + star(110, 222, 4.5, "#FFE27A") + star(84, 222, 3.5, "#FFFFFF") + star(136, 198, 3.5, "#FFE27A") +
        '<circle cx="62" cy="214" r="1.5" fill="#fff"/><circle cx="92" cy="186" r="1.5" fill="#fff"/><circle cx="140" cy="218" r="1.5" fill="#fff"/>';
    } });
  outfit("kl_prinzessin", "Prinzessinnenkleid", 280, { dress: true, shirt: "#F3A6D8", skirt: "#F3A6D8", skirtB: 240, skirtW: 62, hem: "#FBD3EE", sleeve: "short", shoes: "#F2B705",
    extra: function () {
      return '<path d="M100,186 L84,240 Q100,244 116,240 Z" fill="#FBD3EE" opacity=".9"/>' +
        '<ellipse cx="56" cy="148" rx="13" ry="11" fill="#F7C1E4" ' + O + '/><ellipse cx="144" cy="148" rx="13" ry="11" fill="#F7C1E4" ' + O + "/>" +
        '<path d="M86,137 Q100,150 114,137" stroke="#FBD3EE" stroke-width="4" fill="none"/>' +
        '<rect x="64" y="175" width="72" height="10" rx="3" fill="#F2B705" stroke="#B88A00" stroke-width="2"/><circle cx="100" cy="180" r="5" fill="#E3384F" stroke="#B88A00" stroke-width="1.5"/>' +
        heart(68, 214, 0.5, "#E0628F") + heart(132, 216, 0.5, "#E0628F") + heart(76, 232, 0.45, "#E0628F") + heart(124, 232, 0.45, "#E0628F");
    } });

  // Hüte
  function hat(id, name, price, fn) { add({ id: id, slot: "kopf", name: name, price: price, front: fn }); }
  hat("h_cap", "Basecap", 30, function () { return '<path d="M58,88 C58,58 78,48 100,48 C122,48 142,58 142,88 Z" fill="#D9473C" ' + O + '/><path d="M98,84 L166,86 C166,95 150,98 100,92 Z" fill="#B2342B" ' + O + '/><circle cx="100" cy="48" r="4" fill="#B2342B"/>'; });
  hat("h_muetze", "Wintermütze", 30, function () { return '<path d="M60,90 C60,56 78,46 100,46 C122,46 140,56 140,90 Z" fill="#157A7A" ' + O + '/><rect x="57" y="80" width="86" height="15" rx="7" fill="#F4EEE3" ' + O + '/><circle cx="100" cy="42" r="10" fill="#F4EEE3" ' + O + "/>"; });
  hat("h_party", "Partyhut", 25, function () { return '<path d="M80,62 L100,14 L120,62 Z" fill="#EC5FA8" ' + O + '/><path d="M86,48 L114,48 M92,34 L108,34" stroke="#FFE27A" stroke-width="5"/><circle cx="100" cy="14" r="6" fill="#FFE27A" ' + O + "/>"; });
  hat("h_kopfhoerer", "Kopfhörer", 70, function () { return '<path d="M58,96 C56,46 144,46 142,96" stroke="#2B2B33" stroke-width="7" fill="none"/><rect x="48" y="84" width="17" height="28" rx="7" fill="#2EAD5B" ' + O + '/><rect x="135" y="84" width="17" height="28" rx="7" fill="#2EAD5B" ' + O + "/>"; });
  hat("h_pirat", "Piratenhut", 120, function () { return '<path d="M66,66 C70,34 130,34 134,66 Z" fill="#1F1F2A" ' + O + '/><path d="M48,74 C60,52 140,52 152,74 C130,64 70,64 48,74 Z" fill="#1F1F2A" ' + O + '/><circle cx="100" cy="52" r="7" fill="#fff"/><circle cx="97.5" cy="51" r="1.6" fill="#1F1F2A"/><circle cx="102.5" cy="51" r="1.6" fill="#1F1F2A"/>'; });
  hat("h_zauber", "Zauberhut", 150, function () { return '<path d="M70,72 L106,6 L130,72 Z" fill="#5B3FB5" ' + O + '/><ellipse cx="100" cy="72" rx="48" ry="9" fill="#46309A" ' + O + "/>" + star(98, 46, 7, "#FFE27A") + star(112, 28, 5, "#FFE27A") + '<circle cx="88" cy="62" r="2.5" fill="#FFE27A"/>'; });
  hat("h_cowboy", "Cowboyhut", 100, function () { return '<path d="M70,70 C70,40 84,34 100,40 C116,34 130,40 130,70 Z" fill="#9A6440" ' + O + '/><path d="M42,70 C56,82 144,82 158,70 C150,62 50,62 42,70Z" fill="#8A5A2B" ' + O + '/><rect x="70" y="62" width="60" height="7" fill="#5A3622"/>'; });
  hat("h_helm", "Astronautenhelm", 200, function (c) { return '<circle cx="100" cy="95" r="54" fill="rgba(170,215,255,.28)" stroke="#E8EEF5" stroke-width="7"/><path d="M68,70 C76,56 90,50 104,50" stroke="#fff" stroke-width="5" fill="none" opacity=".8" stroke-linecap="round"/>'; });
  hat("h_krone", "Krone", 300, function () { return '<polygon points="66,72 66,42 82,58 100,32 118,58 134,42 134,72" fill="#F2B705" stroke="#B88A00" stroke-width="2.5" stroke-linejoin="round"/><circle cx="100" cy="62" r="5" fill="#D9473C"/><circle cx="80" cy="64" r="3.5" fill="#2F7FC1"/><circle cx="120" cy="64" r="3.5" fill="#2EAD5B"/><circle cx="100" cy="32" r="3" fill="#fff"/><circle cx="66" cy="42" r="3" fill="#fff"/><circle cx="134" cy="42" r="3" fill="#fff"/>'; });
  hat("h_hasenohren", "Hasenohren", 60, function () { return '<ellipse cx="82" cy="34" rx="10" ry="26" fill="#F4EEE3" ' + O + '/><ellipse cx="118" cy="34" rx="10" ry="26" fill="#F4EEE3" ' + O + '/><ellipse cx="82" cy="36" rx="5" ry="18" fill="#F7B6C8"/><ellipse cx="118" cy="36" rx="5" ry="18" fill="#F7B6C8"/><path d="M62,66 C70,52 130,52 138,66" stroke="#F4EEE3" stroke-width="6" fill="none"/>'; });

  var BAND = "M62,86 C62,46 138,46 138,86";
  hat("h_schleife", "Haarschleife", 25, function () { return '<g transform="rotate(-18 74 60)"><path d="M74,60 L54,48 L56,74 Z M74,60 L94,48 L92,74 Z" fill="#EC5FA8" ' + O + '/><path d="M60,54 L66,62 M88,54 L82,62" stroke="#C2407F" stroke-width="2" stroke-linecap="round"/><circle cx="74" cy="60" r="6" fill="#D94A93" ' + O + "/></g>"; });
  hat("h_haarreif", "Haarreif", 30, function () { return '<path d="' + BAND + '" stroke="rgba(0,0,0,.22)" stroke-width="9" fill="none" stroke-linecap="round"/><path d="' + BAND + '" stroke="#2F9FD8" stroke-width="6" fill="none" stroke-linecap="round"/>' + '<circle cx="62" cy="86" r="4" fill="#2F9FD8" ' + O + '/><circle cx="138" cy="86" r="4" fill="#2F9FD8" ' + O + '/>'; });
  hat("h_katzenohren", "Katzenohren-Haarreif", 60, function () { return '<path d="M68,62 L72,34 L92,52 Z M132,62 L128,34 L108,52 Z" fill="#2B2B33" ' + O + '/><path d="M74,54 L75.5,42 L85,51 Z M126,54 L124.5,42 L115,51 Z" fill="#F7B6C8"/><path d="' + BAND + '" stroke="#2B2B33" stroke-width="6" fill="none" stroke-linecap="round"/>'; });
  hat("h_blumenkranz", "Blumenkranz", 70, function () {
    var s = '<path d="' + BAND + '" stroke="#3E9B5F" stroke-width="5" fill="none" stroke-linecap="round"/>';
    [[68, 66, -30], [104, 52, 10], [128, 62, 40], [86, 54, -10]].forEach(function (l) { s += '<ellipse cx="' + l[0] + '" cy="' + l[1] + '" rx="7" ry="3.5" transform="rotate(' + l[2] + " " + l[0] + " " + l[1] + ')" fill="#5DBB63"/>'; });
    [[64, 76, "#EC5FA8"], [74, 60, "#FFFFFF"], [92, 52, "#F2B705"], [112, 52, "#EC5FA8"], [127, 60, "#8A4FD0"], [136, 76, "#FFFFFF"]].forEach(function (f) { s += flower(f[0], f[1], 5, f[2], f[2] === "#F2B705" ? "#F28C28" : "#F2B705"); });
    return s;
  });
  hat("h_diadem", "Diadem", 200, function () {
    return '<path d="M70,66 C80,58 120,58 130,66 L124,54 L114,58 L100,38 L86,58 L76,54 Z" fill="#F2B705" stroke="#B88A00" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M100,46 L105,54 L100,60 L95,54 Z" fill="#7FD3F0" stroke="#3E9BC2" stroke-width="1"/><circle cx="80" cy="60" r="2.5" fill="#EC5FA8"/><circle cx="120" cy="60" r="2.5" fill="#EC5FA8"/><circle cx="76" cy="53" r="2" fill="#fff"/><circle cx="124" cy="53" r="2" fill="#fff"/><circle cx="100" cy="38" r="2.2" fill="#fff"/>' +
      '<g class="av-twinkle">' + star(112, 44, 4, "#FFFFFF") + "</g>";
  });

  // Brillen
  function glasses(id, name, price, fn) { add({ id: id, slot: "brille", name: name, price: price, front: fn }); }
  glasses("b_sonne", "Sonnenbrille", 40, function () { return '<rect x="72" y="87" width="24" height="16" rx="6" fill="#1E1E2A"/><rect x="104" y="87" width="24" height="16" rx="6" fill="#1E1E2A"/><path d="M96,93 L104,93 M72,92 L60,90 M128,92 L140,90" stroke="#1E1E2A" stroke-width="3"/><path d="M76,91 L82,91" stroke="#fff" stroke-width="2" opacity=".6"/><path d="M108,91 L114,91" stroke="#fff" stroke-width="2" opacity=".6"/>'; });
  glasses("b_rund", "Runde Brille", 30, function () { return '<circle cx="85" cy="96" r="12" fill="rgba(255,255,255,.18)" stroke="#2B2B33" stroke-width="3"/><circle cx="115" cy="96" r="12" fill="rgba(255,255,255,.18)" stroke="#2B2B33" stroke-width="3"/><path d="M97,95 L103,95 M73,94 L60,91 M127,94 L140,91" stroke="#2B2B33" stroke-width="3"/>'; });
  glasses("b_herz", "Herzbrille", 50, function () { return heart(85, 84, 1.25, "#EC5FA8", 'opacity=".9" ' + O) + heart(115, 84, 1.25, "#EC5FA8", 'opacity=".9" ' + O) + '<path d="M93,95 L107,95" stroke="#EC5FA8" stroke-width="3"/>'; });
  glasses("b_stern", "Sternenbrille", 70, function () { return star(85, 96, 15, "#F2B705", 'opacity=".92" ' + O) + star(115, 96, 15, "#F2B705", 'opacity=".92" ' + O) + '<path d="M96,95 L104,95" stroke="#B88A00" stroke-width="3"/>'; });
  glasses("b_ski", "Skibrille", 60, function () { return '<rect x="58" y="88" width="84" height="8" fill="#2B2B33"/><rect x="68" y="84" width="64" height="22" rx="11" fill="#FF9F1C" opacity=".9" ' + O + '/><path d="M76,90 L92,90" stroke="#fff" stroke-width="3" opacity=".7" stroke-linecap="round"/>'; });
  glasses("b_laser", "Laser-Visier", 140, function () { return '<rect x="64" y="86" width="72" height="18" rx="9" fill="#E3384F" opacity=".85" ' + O + '/><rect x="64" y="93" width="72" height="3" fill="#fff" class="av-scan"/>'; });

  // Rücken
  function back(id, name, price, b, f) { add({ id: id, slot: "ruecken", name: name, price: price, back: b, front: f }); }
  function cape(col, dark) { return function () { return '<path d="M66,138 L134,138 L158,238 C130,250 70,250 42,238 Z" fill="' + col + '" ' + O + '/><path d="M66,138 L134,138 L140,160 C120,152 80,152 60,160Z" fill="' + dark + '"/>'; }; }
  function clasp() { return '<circle cx="72" cy="140" r="5" fill="#F2B705" ' + O + '/><circle cx="128" cy="140" r="5" fill="#F2B705" ' + O + "/>"; }
  back("r_rucksack", "Rucksack", 40, function () { return '<rect x="54" y="146" width="92" height="62" rx="14" fill="#2EAD5B" ' + O + "/>"; },
    function () { return '<rect x="72" y="136" width="8" height="56" rx="3" fill="#1F7A40"/><rect x="120" y="136" width="8" height="56" rx="3" fill="#1F7A40"/>'; });
  back("r_umhang", "Roter Umhang", 120, cape("#D9473C", "#B2342B"), clasp);
  back("r_umhang2", "Sternenumhang", 160, function () { return cape("#3B2F8F", "#2A2170")() + star(56, 222, 6, "#FFE27A") + star(146, 214, 5, "#FFE27A") + star(64, 196, 4, "#FFE27A") + star(138, 186, 4, "#FFE27A"); }, clasp);
  back("r_engel", "Engelsflügel", 250, function () {
    var w = function (s) { return '<g class="av-flap"><g transform="translate(100,0) scale(' + s + ',1) translate(-100,0)"><path d="M68,156 C40,118 6,118 8,150 C10,166 24,170 30,170 C16,178 20,196 38,194 C30,206 46,214 68,192 Z" fill="#FFFFFF" ' + O + '/><path d="M60,160 C42,146 26,146 18,152 M58,174 C44,168 34,170 28,176" stroke="#D8DEE6" stroke-width="2.5" fill="none"/></g></g>'; };
    return w(1) + w(-1);
  });
  back("r_drache", "Drachenflügel", 300, function () {
    var w = function (s) { return '<g class="av-flap"><g transform="translate(100,0) scale(' + s + ',1) translate(-100,0)"><path d="M68,150 L18,110 L22,138 L4,140 L18,160 L6,172 L30,176 L28,194 L68,186 Z" fill="#7B3FC4" ' + O + '/><path d="M68,152 L22,124 M66,168 L14,158 M66,182 L30,186" stroke="#5B2A9A" stroke-width="2"/></g></g>'; };
    return w(1) + w(-1);
  });
  back("r_jetpack", "Jetpack", 220, function () {
    return '<rect x="58" y="142" width="22" height="56" rx="9" fill="#AEB6C0" ' + O + '/><rect x="120" y="142" width="22" height="56" rx="9" fill="#AEB6C0" ' + O + '/>' +
      '<path class="av-flame" d="M60,198 L69,232 L78,198Z" fill="#FF9F1C"/><path class="av-flame" d="M122,198 L131,232 L140,198Z" fill="#FF9F1C"/><path d="M63,198 L69,216 L75,198Z" fill="#FFE27A"/><path d="M125,198 L131,216 L137,198Z" fill="#FFE27A"/>';
  });
  back("r_schild", "Ritterschild", 140, null, function () { return '<path d="M30,150 L66,150 L66,182 C66,198 48,208 48,208 C48,208 30,198 30,182 Z" fill="#2F5BD3" ' + O + '/><path d="M48,154 L48,204 M32,172 L64,172" stroke="#F2B705" stroke-width="5"/>'; });

  // In der Hand
  function hold(id, name, price, fn) { add({ id: id, slot: "hand", name: name, price: price, front: fn }); }
  hold("i_buch", "Buch", 0, function () { return '<g transform="rotate(-12 150 186)"><rect x="136" y="166" width="30" height="36" rx="3" fill="#157A7A" ' + O + '/><rect x="140" y="170" width="22" height="6" rx="2" fill="#FFE27A"/></g>'; });
  hold("i_eis", "Eis", 25, function () { return '<path d="M140,196 L150,226 L160,196Z" fill="#E3B26B" ' + O + '/><circle cx="150" cy="190" r="10" fill="#F7B6C8" ' + O + '/><circle cx="150" cy="176" r="9" fill="#8A5A2B" ' + O + '/><circle cx="150" cy="166" r="3.5" fill="#D9473C"/>'; });
  hold("i_ballon", "Luftballon", 25, function () { return '<path d="M146,200 C150,170 168,150 168,120" stroke="#555" stroke-width="1.5" fill="none"/><ellipse cx="168" cy="98" rx="18" ry="22" fill="#D9473C" ' + O + '/><path d="M160,88 C162,82 166,80 170,80" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/><path d="M165,120 L171,120 L168,125Z" fill="#B2342B"/>'; });
  hold("i_ball", "Fußball", 40, function () { return '<circle cx="164" cy="206" r="14" fill="#fff" ' + O + '/><polygon points="164,199 170,203 168,210 160,210 158,203" fill="#1F1F2A"/><path d="M164,199 L164,193 M170,203 L176,201 M168,210 L172,216 M160,210 L156,216 M158,203 L152,201" stroke="#1F1F2A" stroke-width="1.5"/>'; });
  hold("i_schwert", "Schwert", 100, function () { return '<g transform="rotate(18 144 200)"><rect x="140" y="112" width="9" height="80" rx="2" fill="#DDE3EA" ' + O + '/><path d="M140,112 L144.5,100 L149,112Z" fill="#DDE3EA"/><rect x="130" y="190" width="29" height="7" rx="3" fill="#F2B705" ' + O + '/><rect x="141" y="196" width="7" height="16" fill="#8A5A2B"/></g>'; });
  hold("i_stab", "Zauberstab", 120, function () { return '<line x1="144" y1="206" x2="172" y2="150" stroke="#5A3622" stroke-width="5" stroke-linecap="round"/><g class="av-twinkle">' + star(174, 144, 12, "#FFE27A", O) + '</g><circle cx="186" cy="132" r="2.5" fill="#FFE27A" class="av-twinkle"/><circle cx="160" cy="132" r="2" fill="#FFE27A" class="av-twinkle"/>'; });
  hold("i_leucht", "Leuchtschwert", 160, function () { return '<g transform="rotate(16 144 200)"><rect x="139" y="104" width="11" height="90" rx="5" fill="#7FF3FF" class="av-glow"/><rect x="141.5" y="106" width="6" height="86" rx="3" fill="#FFFFFF"/><rect x="137" y="190" width="15" height="24" rx="3" fill="#5E6672" ' + O + "/></g>"; });
  hold("i_gitarre", "Gitarre", 140, function () { return '<g transform="rotate(-30 160 190)"><ellipse cx="160" cy="212" rx="18" ry="20" fill="#C4502B" ' + O + '/><ellipse cx="160" cy="192" rx="13" ry="13" fill="#C4502B" ' + O + '/><circle cx="160" cy="206" r="6" fill="#3A2A20"/><rect x="156" y="140" width="8" height="56" fill="#5A3622"/><rect x="153" y="132" width="14" height="12" rx="3" fill="#3A2A20"/></g>'; });
  hold("i_pokal", "Pokal", 200, function () { return '<path d="M138,170 L170,170 L166,194 C164,202 144,202 142,194 Z" fill="#F2B705" stroke="#B88A00" stroke-width="2"/><path d="M138,174 C126,174 128,190 141,190 M170,174 C182,174 180,190 167,190" stroke="#F2B705" stroke-width="4" fill="none"/><rect x="150" y="200" width="8" height="10" fill="#F2B705"/><rect x="142" y="208" width="24" height="7" rx="2" fill="#B88A00"/>' + star(154, 184, 6, "#fff"); });
  hold("i_fackel", "Fackel", 90, function () { return '<rect x="142" y="160" width="8" height="52" rx="3" fill="#8A5A2B" transform="rotate(10 146 186)"/><path class="av-flame" d="M140,162 C134,146 146,134 150,124 C154,138 164,146 156,162Z" fill="#FF9F1C"/><path d="M144,160 C142,150 148,146 150,138 C152,148 156,152 152,160Z" fill="#FFE27A"/>'; });

  hold("i_tasche", "Handtasche", 40, function () { return '<path d="M138,212 C138,196 156,196 156,212" stroke="#C2407F" stroke-width="3.5" fill="none"/><path d="M130,212 L164,212 L160,236 C160,240 134,240 134,236 Z" fill="#EC5FA8" ' + O + '/><path d="M131,212 L163,212 L161,222 C150,226 144,226 133,222 Z" fill="#D94A93"/><circle cx="147" cy="222" r="3.5" fill="#F2B705" ' + O + "/>"; });
  hold("i_strauss", "Blumenstrauß", 50, function () {
    return '<path d="M144,200 L140,176 M146,200 L150,170 M148,200 L160,178" stroke="#3E8E44" stroke-width="2.5"/><ellipse cx="136" cy="182" rx="7" ry="3.5" transform="rotate(-40 136 182)" fill="#5DBB63"/><ellipse cx="160" cy="186" rx="7" ry="3.5" transform="rotate(40 160 186)" fill="#5DBB63"/>' +
      flower(140, 172, 6, "#E3384F") + flower(156, 168, 6, "#EC5FA8") + flower(150, 156, 6, "#FFFFFF") + flower(164, 178, 5, "#8A4FD0") + flower(132, 162, 5, "#F2B705", "#F28C28") +
      '<path d="M132,192 L160,192 L150,214 L142,214 Z" fill="#FFF3D6" ' + O + '/><path d="M138,200 L154,200" stroke="#EC5FA8" stroke-width="3"/>';
  });

  // Haustiere
  function pet(id, name, price, fn) { add({ id: id, slot: "tier", name: name, price: price, front: fn }); }
  pet("t_katze", "Katze", 80, function () { return '<g class="av-bob"><path d="M48,236 C62,236 64,216 56,208" stroke="#F28C28" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="32" cy="236" rx="20" ry="14" fill="#F28C28" ' + O + '/><circle cx="20" cy="218" r="13" fill="#F28C28" ' + O + '/><path d="M10,212 L10,198 L20,208Z M30,212 L30,198 L20,208Z" fill="#F28C28" ' + O + '/><circle cx="15" cy="217" r="2.2" fill="#1F1A1C"/><circle cx="25" cy="217" r="2.2" fill="#1F1A1C"/><path d="M18,223 Q20,225 22,223" stroke="#1F1A1C" stroke-width="1.5" fill="none"/><path d="M22,236 L22,248 M40,238 L40,248" stroke="#D9761A" stroke-width="5" stroke-linecap="round"/></g>'; });
  pet("t_hund", "Hund", 80, function () { return '<g class="av-bob"><path d="M50,228 L60,216" stroke="#9A6440" stroke-width="6" stroke-linecap="round" class="av-wag"/><ellipse cx="34" cy="234" rx="21" ry="14" fill="#B47B4C" ' + O + '/><circle cx="20" cy="214" r="14" fill="#B47B4C" ' + O + '/><ellipse cx="9" cy="214" rx="5" ry="10" fill="#7A4E2C"/><ellipse cx="31" cy="214" rx="5" ry="10" fill="#7A4E2C"/><circle cx="16" cy="212" r="2.2" fill="#1F1A1C"/><circle cx="24" cy="212" r="2.2" fill="#1F1A1C"/><ellipse cx="20" cy="220" rx="4" ry="3" fill="#1F1A1C"/><path d="M24,236 L24,248 M42,238 L42,248" stroke="#7A4E2C" stroke-width="5" stroke-linecap="round"/></g>'; });
  pet("t_hamster", "Hamster", 50, function () { return '<g class="av-bob"><ellipse cx="28" cy="236" rx="20" ry="16" fill="#E3B26B" ' + O + '/><circle cx="16" cy="224" r="5" fill="#E3B26B" ' + O + '/><circle cx="38" cy="224" r="5" fill="#E3B26B" ' + O + '/><ellipse cx="28" cy="242" rx="11" ry="8" fill="#F7E3C0"/><circle cx="22" cy="232" r="2" fill="#1F1A1C"/><circle cx="34" cy="232" r="2" fill="#1F1A1C"/><circle cx="28" cy="237" r="1.8" fill="#EC5FA8"/></g>'; });
  pet("t_schildkroete", "Schildkröte", 90, function () { return '<g class="av-bob"><ellipse cx="14" cy="238" rx="9" ry="7" fill="#8BC34A" ' + O + '/><circle cx="12" cy="236" r="1.6" fill="#1F1A1C"/><path d="M18,244 C18,222 56,222 56,244 Z" fill="#3E8E44" ' + O + '/><path d="M28,230 L37,236 L46,230 M37,236 L37,244" stroke="#2C6B30" stroke-width="2" fill="none"/><path d="M24,244 L24,250 M50,244 L50,250" stroke="#8BC34A" stroke-width="5" stroke-linecap="round"/></g>'; });
  pet("t_papagei", "Papagei", 120, function () { return '<g class="av-bob"><path d="M46,140 C40,160 44,170 46,172" stroke="#2F7FC1" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="50" cy="126" rx="11" ry="15" fill="#D9473C" ' + O + '/><circle cx="50" cy="110" r="9" fill="#D9473C" ' + O + '/><path d="M41,110 C36,112 36,118 41,118 Z" fill="#F2B705"/><circle cx="48" cy="108" r="2" fill="#1F1A1C"/><path d="M56,122 C64,126 62,136 56,138" fill="#2EAD5B"/></g>'; });
  pet("t_roboter", "Mini-Roboter", 200, function () { return '<g class="av-bob"><line x1="28" y1="200" x2="28" y2="190" stroke="#5E6672" stroke-width="2.5"/><circle cx="28" cy="188" r="3.5" fill="#E3384F" class="av-blink-light"/><rect x="14" y="200" width="28" height="22" rx="6" fill="#AEB6C0" ' + O + '/><rect x="18" y="205" width="20" height="10" rx="4" fill="#1F2A3A"/><circle cx="23" cy="210" r="2.2" fill="#7FF3FF"/><circle cx="33" cy="210" r="2.2" fill="#7FF3FF"/><rect x="12" y="224" width="32" height="20" rx="5" fill="#8C96A3" ' + O + '/><circle cx="20" cy="248" r="5" fill="#2B2B33"/><circle cx="36" cy="248" r="5" fill="#2B2B33"/></g>'; });
  pet("t_einhorn", "Einhorn", 260, function () { return '<g class="av-bob"><ellipse cx="34" cy="232" rx="22" ry="13" fill="#FFFFFF" ' + O + '/><path d="M14,226 C10,214 14,204 22,200 L30,214 Z" fill="#FFFFFF" ' + O + '/><circle cx="16" cy="206" r="10" fill="#FFFFFF" ' + O + '/><path d="M14,196 L18,178 L22,196Z" fill="#F2B705" ' + O + '/><path d="M24,200 C30,202 34,210 30,218 M26,198 C34,198 38,206 36,214" stroke="#EC5FA8" stroke-width="4" fill="none"/><path d="M56,226 C66,224 66,238 58,240" stroke="#8A4FD0" stroke-width="5" fill="none"/><circle cx="13" cy="205" r="2" fill="#1F1A1C"/><path d="M22,240 L22,250 M44,240 L44,250" stroke="#E0E4EA" stroke-width="5" stroke-linecap="round"/></g>'; });
  pet("t_drache", "Baby-Drache", 300, function () { return '<g class="av-bob"><path d="M30,214 L6,196 L12,214 L2,220 L26,226Z" fill="#7B3FC4" ' + O + ' class="av-flap"/><ellipse cx="34" cy="234" rx="19" ry="14" fill="#5DBB63" ' + O + '/><path d="M52,236 C64,236 64,226 60,222" stroke="#5DBB63" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="22" cy="214" r="12" fill="#5DBB63" ' + O + '/><path d="M16,204 L14,196 L20,202 M26,203 L28,195 L30,204" stroke="#F2B705" stroke-width="3"/><circle cx="18" cy="212" r="2.2" fill="#1F1A1C"/><circle cx="27" cy="212" r="2.2" fill="#1F1A1C"/><ellipse cx="34" cy="238" rx="10" ry="7" fill="#D7F0C4"/><path d="M8,222 C2,220 0,226 4,228" stroke="#FF9F1C" stroke-width="3" fill="none" class="av-flame"/></g>'; });

  pet("t_pony", "Pony", 180, function () {
    return '<g class="av-bob"><path d="M60,220 C74,222 74,240 66,250 C66,238 62,232 58,230 Z" fill="#8A5A2B" ' + O + '/>' +
      [22, 32, 48, 58].map(function (x) { return '<rect x="' + (x - 3.5) + '" y="228" width="7" height="22" rx="3" fill="#D9A877" ' + O + '/><rect x="' + (x - 3.5) + '" y="246" width="7" height="6" rx="1.5" fill="#5A3E2B"/>'; }).join("") +
      '<ellipse cx="40" cy="226" rx="24" ry="13" fill="#E3B88A" ' + O + '/><path d="M18,224 C14,212 14,202 18,194 L32,200 C30,208 30,216 34,222 Z" fill="#E3B88A" ' + O + '/>' +
      '<ellipse cx="16" cy="200" rx="9" ry="13" transform="rotate(40 16 200)" fill="#E3B88A" ' + O + '/><ellipse cx="9" cy="208" rx="7" ry="6" fill="#F2D3B0" ' + O + '/>' +
      '<path d="M18,188 L20,178 L25,189 Z" fill="#E3B88A" ' + O + '/><path d="M19,188 C30,186 36,198 34,222 C30,214 26,204 22,198 Z" fill="#8A5A2B" ' + O + '/><path d="M14,192 C16,186 22,186 24,190 C20,192 16,194 14,196 Z" fill="#8A5A2B"/>' +
      '<circle cx="17" cy="198" r="2.2" fill="#1F1A1C"/><circle cx="6" cy="208" r="1.2" fill="#8A5A2B"/><circle cx="11" cy="209" r="1.2" fill="#8A5A2B"/>' + heart(44, 214, 0.5, "#EC5FA8") + "</g>";
  });

  // Orte (Hintergründe)
  function bg(id, name, price, fn) { add({ id: id, slot: "hintergrund", name: name, price: price, bg: fn }); }
  bg("o_zimmer", "Mein Zimmer", 0, function () { return '<rect width="200" height="260" fill="#F6E7D0"/><rect y="226" width="200" height="34" fill="#C9A57A"/><rect x="16" y="30" width="54" height="58" rx="4" fill="#BDE6FF" stroke="#FFFFFF" stroke-width="5"/><path d="M43,30 L43,88 M16,59 L70,59" stroke="#fff" stroke-width="4"/><rect x="146" y="40" width="38" height="30" rx="3" fill="#FFE27A" stroke="#C99400" stroke-width="3"/>' + star(165, 55, 8, "#F28C28"); });
  bg("o_park", "Park", 40, function () { return '<rect width="200" height="260" fill="#BDE6FF"/><circle cx="168" cy="36" r="18" fill="#FFE27A"/><rect y="206" width="200" height="54" fill="#8BD07A"/><rect x="14" y="140" width="10" height="70" fill="#8A5A2B"/><circle cx="19" cy="128" r="28" fill="#4FA35A"/><rect x="176" y="150" width="8" height="58" fill="#8A5A2B"/><circle cx="180" cy="140" r="22" fill="#4FA35A"/><ellipse cx="60" cy="40" rx="22" ry="9" fill="#fff"/><ellipse cx="74" cy="34" rx="14" ry="9" fill="#fff"/>'; });
  bg("o_strand", "Strand", 60, function () { return '<rect width="200" height="260" fill="#9ED9FF"/><circle cx="40" cy="40" r="18" fill="#FFE27A"/><rect y="164" width="200" height="44" fill="#3FA6E0"/><path d="M0,170 Q12,164 24,170 T48,170 T72,170 T96,170 T120,170 T144,170 T168,170 T192,170 T216,170" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/><rect y="204" width="200" height="56" fill="#F4DC9A"/><path d="M178,206 C176,170 180,140 186,120" stroke="#8A5A2B" stroke-width="7" fill="none"/><path d="M186,120 C170,110 156,116 150,124 M186,120 C200,108 210,112 214,118 M186,120 C186,104 176,96 168,96" stroke="#3E9B5F" stroke-width="7" fill="none" stroke-linecap="round"/>'; });
  bg("o_dschungel", "Dschungel", 100, function () { return '<rect width="200" height="260" fill="#2E7D4F"/><rect y="214" width="200" height="46" fill="#5A3E26"/><path d="M0,40 C30,60 20,100 0,120Z M200,30 C170,60 180,110 200,130Z" fill="#1F5E3A"/><path d="M30,0 C34,40 26,60 32,90 M170,0 C166,30 176,50 168,84" stroke="#3E8E44" stroke-width="4" fill="none"/><ellipse cx="32" cy="92" rx="8" ry="5" fill="#5DBB63"/><ellipse cx="168" cy="86" rx="8" ry="5" fill="#5DBB63"/><path d="M0,220 C20,180 40,200 50,220 M150,220 C160,190 190,190 200,214" fill="#3E9B5F"/><circle cx="150" cy="60" r="5" fill="#EC5FA8"/><circle cx="56" cy="150" r="5" fill="#F2B705"/>'; });
  bg("o_regenbogen", "Regenbogen", 90, function () { var s = "", cols = ["#E3384F", "#FF9F1C", "#FFE27A", "#5DBB63", "#2F7FC1", "#8A4FD0"]; cols.forEach(function (c, i) { s += '<path d="M' + (-10 + i * 8) + ',220 A' + (110 - i * 8) + "," + (110 - i * 8) + " 0 0 1 " + (210 - i * 8) + ',220" stroke="' + c + '" stroke-width="8" fill="none"/>'; }); return '<rect width="200" height="260" fill="#CDEBFF"/>' + s + '<rect y="214" width="200" height="46" fill="#8BD07A"/><ellipse cx="20" cy="214" rx="28" ry="12" fill="#fff"/><ellipse cx="182" cy="214" rx="28" ry="12" fill="#fff"/>'; });
  bg("o_stadion", "Fußballstadion", 120, function () { var s = ""; for (var i = 0; i < 40; i++) s += '<circle cx="' + (6 + (i % 20) * 10) + '" cy="' + (96 + Math.floor(i / 20) * 14) + '" r="4" fill="' + ["#D9473C", "#FFE27A", "#2F7FC1", "#fff"][i % 4] + '"/>'; return '<rect width="200" height="260" fill="#1B2A4A"/><rect y="80" width="200" height="50" fill="#33415C"/>' + s + '<rect y="130" width="200" height="130" fill="#3E9B5F"/><path d="M0,150 L200,150 M0,190 L200,190" stroke="#4FB06F" stroke-width="20" opacity=".5"/><rect x="60" y="134" width="80" height="34" fill="none" stroke="#fff" stroke-width="3"/><circle cx="20" cy="20" r="8" fill="#FFF7C2"/><circle cx="180" cy="20" r="8" fill="#FFF7C2"/>'; });
  bg("o_unterwasser", "Unterwasser", 120, function (c) { return '<defs><linearGradient id="uw' + c.uid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FB3E8"/><stop offset="1" stop-color="#1B4F72"/></linearGradient></defs><rect width="200" height="260" fill="url(#uw' + c.uid + ')"/><rect y="230" width="200" height="30" fill="#E8D39A"/><path d="M16,232 C10,210 22,200 14,180 M28,232 C34,214 24,204 30,188 M182,232 C176,212 188,198 180,176" stroke="#2EAD5B" stroke-width="5" fill="none" stroke-linecap="round"/><g class="av-bubbles"><circle cx="40" cy="120" r="4" fill="none" stroke="#fff" stroke-width="2"/><circle cx="160" cy="80" r="5" fill="none" stroke="#fff" stroke-width="2"/><circle cx="170" cy="140" r="3" fill="none" stroke="#fff" stroke-width="2"/><circle cx="30" cy="60" r="3" fill="none" stroke="#fff" stroke-width="2"/></g><path d="M150,40 C160,32 172,40 172,40 C172,40 160,48 150,40 L142,34 L142,46Z" fill="#FF9F1C"/>'; });
  bg("o_weltall", "Weltall", 150, function () { var s = ""; var pts = [[12, 20], [40, 60], [80, 14], [130, 30], [180, 16], [160, 70], [20, 120], [186, 120], [60, 190], [150, 200], [30, 230], [176, 236], [100, 6], [8, 170]]; pts.forEach(function (p, i) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (i % 3 ? 1.4 : 2.2) + '" fill="#fff" class="' + (i % 4 ? "" : "av-twinkle") + '"/>'; }); return '<rect width="200" height="260" fill="#0B1033"/>' + s + '<circle cx="164" cy="52" r="20" fill="#E3B26B"/><ellipse cx="164" cy="52" rx="34" ry="8" fill="none" stroke="#F7E3C0" stroke-width="3" transform="rotate(-18 164 52)"/><circle cx="30" cy="92" r="12" fill="#C9CED6"/><circle cx="26" cy="88" r="3" fill="#AEB6C0"/><circle cx="34" cy="96" r="2" fill="#AEB6C0"/><ellipse cx="100" cy="262" rx="140" ry="22" fill="#5E6672"/>'; });
  bg("o_burg", "Ritterburg", 180, function () { return '<rect width="200" height="260" fill="#FFD7A8"/><circle cx="100" cy="70" r="26" fill="#FFB86B" opacity=".6"/><g fill="#8C96A3"><rect x="0" y="80" width="40" height="150"/><rect x="160" y="80" width="40" height="150"/><rect x="0" y="70" width="10" height="12"/><rect x="15" y="70" width="10" height="12"/><rect x="30" y="70" width="10" height="12"/><rect x="160" y="70" width="10" height="12"/><rect x="175" y="70" width="10" height="12"/><rect x="190" y="70" width="10" height="12"/><rect x="40" y="130" width="120" height="100"/></g><path d="M20,70 L20,40" stroke="#5E6672" stroke-width="2"/><path d="M20,40 L36,46 L20,52Z" fill="#D9473C"/><path d="M180,70 L180,40" stroke="#5E6672" stroke-width="2"/><path d="M180,40 L196,46 L180,52Z" fill="#2F7FC1"/><rect y="226" width="200" height="34" fill="#8BD07A"/><rect x="14" y="110" width="12" height="18" rx="6" fill="#33415C"/><rect x="174" y="110" width="12" height="18" rx="6" fill="#33415C"/>'; });
  bg("o_schnee", "Winterwald", 80, function () { return '<rect width="200" height="260" fill="#DCEBF7"/><rect y="210" width="200" height="50" fill="#FFFFFF"/><path d="M20,210 L40,150 L60,210Z M8,180 L30,120 L52,180Z" fill="#2E7D4F"/><path d="M150,210 L172,140 L194,210Z" fill="#2E7D4F"/><path d="M30,124 L24,140 L36,140Z M172,144 L166,158 L178,158Z" fill="#fff"/><g fill="#fff" class="av-snow"><circle cx="20" cy="30" r="2.5"/><circle cx="70" cy="60" r="2"/><circle cx="120" cy="20" r="2.5"/><circle cx="170" cy="50" r="2"/><circle cx="100" cy="90" r="2"/><circle cx="150" cy="110" r="2.5"/><circle cx="40" cy="100" r="2"/></g>'; });

  // Effekte
  function fx(id, name, price, fn) { add({ id: id, slot: "effekt", name: name, price: price, front: fn }); }
  fx("e_heiligenschein", "Heiligenschein", 60, function () { return '<ellipse cx="100" cy="40" rx="30" ry="8" fill="none" stroke="#F2B705" stroke-width="5" class="av-glow"/>'; });
  fx("e_herzen", "Herzen", 80, function () { return '<g class="av-float">' + heart(40, 120, 1.1, "#EC5FA8") + heart(160, 90, 0.9, "#E3384F") + heart(150, 160, 0.8, "#EC5FA8") + heart(30, 60, 0.7, "#E3384F") + "</g>"; });
  fx("e_glitzer", "Glitzer", 100, function () { var s = ""; [[30, 70, 7], [170, 60, 6], [40, 170, 5], [168, 150, 7], [100, 20, 5], [150, 110, 4], [50, 120, 4]].forEach(function (p, i) { s += '<g class="av-twinkle" style="animation-delay:' + (i * 0.3) + 's">' + '<path d="M' + p[0] + "," + (p[1] - p[2] * 1.6) + " L" + (p[0] + p[2] * 0.4) + "," + (p[1] - p[2] * 0.4) + " L" + (p[0] + p[2] * 1.6) + "," + p[1] + " L" + (p[0] + p[2] * 0.4) + "," + (p[1] + p[2] * 0.4) + " L" + p[0] + "," + (p[1] + p[2] * 1.6) + " L" + (p[0] - p[2] * 0.4) + "," + (p[1] + p[2] * 0.4) + " L" + (p[0] - p[2] * 1.6) + "," + p[1] + " L" + (p[0] - p[2] * 0.4) + "," + (p[1] - p[2] * 0.4) + 'Z" fill="#FFE27A"/></g>'; }); return s; });
  fx("e_sterne", "Sternenkreis", 120, function () { return '<g class="av-orbit">' + star(100, 34, 7, "#FFE27A", O) + star(150, 70, 6, "#FFE27A", O) + star(50, 70, 6, "#FFE27A", O) + "</g>"; });
  fx("e_blitze", "Blitze", 150, function () { var b = function (x, y, s) { return '<path transform="translate(' + x + "," + y + ") scale(" + s + ')" d="M8,0 L0,18 L7,18 L3,32 L16,12 L9,12 L13,0Z" fill="#FFE27A" stroke="#F28C28" stroke-width="1.5"/>'; }; return '<g class="av-flash">' + b(18, 80, 1.3) + b(164, 100, 1.2) + b(160, 30, 0.9) + "</g>"; });
  fx("e_feuer", "Feuer-Aura", 200, function () { return '<g class="av-flame">' + [52, 70, 88, 112, 130, 148].map(function (x, i) { var h = 26 + (i % 3) * 8; return '<path d="M' + (x - 9) + ",250 C" + (x - 10) + "," + (250 - h * 0.6) + " " + x + "," + (250 - h * 0.6) + " " + x + "," + (250 - h) + " C" + x + "," + (250 - h * 0.6) + " " + (x + 10) + "," + (250 - h * 0.6) + " " + (x + 9) + ',250Z" fill="' + (i % 2 ? "#FF9F1C" : "#E3384F") + '" opacity=".85"/>'; }).join("") + "</g>"; });
  fx("e_regenbogen", "Regenbogen-Aura", 250, function () { return '<g class="av-glow"><circle cx="100" cy="150" r="96" fill="none" stroke="#E3384F" stroke-width="3" opacity=".7"/><circle cx="100" cy="150" r="91" fill="none" stroke="#FF9F1C" stroke-width="3" opacity=".7"/><circle cx="100" cy="150" r="86" fill="none" stroke="#FFE27A" stroke-width="3" opacity=".7"/><circle cx="100" cy="150" r="81" fill="none" stroke="#5DBB63" stroke-width="3" opacity=".7"/><circle cx="100" cy="150" r="76" fill="none" stroke="#2F7FC1" stroke-width="3" opacity=".7"/></g>'; });

  var BY = {}; I.forEach(function (it) { BY[it.id] = it; });
  var DEFAULT = { haut: "haut3", haare: "fr_kurz", haarfarbe: "hf_schwarz", outfit: "kl_blau", hintergrund: "o_zimmer", hand: "i_buch" };
  // Grundfigur je nach Geschlecht ("junge" = DEFAULT, "maedchen" = lange Haare + Kleid)
  function defaultsFor(gender) {
    var d = {}; for (var k in DEFAULT) d[k] = DEFAULT[k];
    if (gender === "maedchen") { d.haare = "fr_lang"; d.outfit = "kl_kleid"; }
    return d;
  }

  var uidc = 0;
  function render(eq, opt) {
    opt = opt || {};
    var girl = opt.gender === "maedchen";
    var e = defaultsFor(opt.gender); for (var k2 in eq) e[k2] = eq[k2];
    function it(slot) { return e[slot] ? BY[e[slot]] : null; }
    var c = { skin: (it("haut") || BY.haut3).color, hair: (it("haarfarbe") || BY.hf_schwarz).color, uid: "a" + (++uidc) };
    var skinD = shade(c.skin, -0.18);
    var of = it("outfit") || BY.kl_blau;
    var s = [];
    if (!opt.noBg && it("hintergrund")) s.push(it("hintergrund").bg(c));
    s.push('<ellipse cx="100" cy="250" rx="46" ry="6" fill="rgba(0,0,0,.18)"/>');
    var fxIt = it("effekt");
    s.push('<g class="av-body">');
    var rk = it("ruecken"); if (rk && rk.back) s.push(rk.back(c));
    var hr = it("haare") || BY.fr_kurz; if (hr.back) s.push(hr.back(c));
    if (of.back) s.push(of.back(c));
    // Beine
    var legTop = 198;
    s.push('<rect x="73" y="' + legTop + '" width="24" height="46" rx="8" fill="' + c.skin + '" ' + O + '/><rect x="103" y="' + legTop + '" width="24" height="46" rx="8" fill="' + c.skin + '" ' + O + "/>");
    if (of.dress) {
      // Kleid/Rock: Beine bleiben sichtbar, Rock folgt nach den Schuhen
    } else if (of.shorts) {
      s.push('<rect x="70" y="196" width="60" height="24" rx="6" fill="' + of.pants + '" ' + O + "/>");
      if (of.socks) s.push('<rect x="73" y="226" width="24" height="16" fill="' + of.socks + '"/><rect x="103" y="226" width="24" height="16" fill="' + of.socks + '"/>');
    } else {
      s.push('<rect x="71" y="196" width="28" height="46" rx="7" fill="' + of.pants + '" ' + O + '/><rect x="101" y="196" width="28" height="46" rx="7" fill="' + of.pants + '" ' + O + "/>");
    }
    s.push('<ellipse cx="84" cy="245" rx="16" ry="8" fill="' + of.shoes + '" ' + O + '/><ellipse cx="116" cy="245" rx="16" ry="8" fill="' + of.shoes + '" ' + O + "/>");
    if (of.dress) {
      if (of.skirtFn) s.push(of.skirtFn(c));
      else {
        var sB = of.skirtB || 224, sW = of.skirtW || 52;
        s.push('<path d="' + skirtPath(sB, sW) + '" fill="' + (of.skirt || of.shirt) + '" ' + O + "/>");
        if (of.hem) s.push('<path d="' + skirtPath(sB, sW, sB - 8) + '" fill="' + of.hem + '"/><path d="' + skirtPath(sB, sW) + '" fill="none" ' + O + "/>");
      }
    }
    // Arme
    var sl = of.sleeveColor || of.shirt, slH = of.sleeve === "long" ? 54 : of.sleeve === "none" ? 0 : 22;
    var slv = function (x) { return slH ? '<rect x="' + x + '" y="142" width="20" height="' + slH + '" rx="10" fill="' + sl + '" ' + O + "/>" : ""; };
    s.push('<g class="av-armL"><rect x="46" y="142" width="20" height="58" rx="10" fill="' + c.skin + '" ' + O + "/>" + slv(46) + '<circle cx="56" cy="201" r="10" fill="' + c.skin + '" ' + O + "/></g>");
    s.push('<rect x="134" y="142" width="20" height="58" rx="10" fill="' + c.skin + '" ' + O + "/>" + slv(134));
    // Hals + Körper
    s.push('<rect x="91" y="122" width="18" height="20" fill="' + skinD + '"/>');
    s.push('<rect x="64" y="136" width="72" height="' + (of.dress ? 50 : of.long ? 82 : 68) + '" rx="16" fill="' + of.shirt + '" ' + O + "/>");
    if (of.extra) s.push(of.extra(c));
    if (rk && rk.front) s.push(rk.front(c));
    // Kopf
    s.push('<g class="av-head"><circle cx="60" cy="99" r="8" fill="' + c.skin + '" ' + O + '/><circle cx="140" cy="99" r="8" fill="' + c.skin + '" ' + O + '/><circle cx="100" cy="95" r="40" fill="' + c.skin + '" ' + O + "/>");
    s.push('<circle cx="76" cy="110" r="6" fill="#F28B82" opacity=".45"/><circle cx="124" cy="110" r="6" fill="#F28B82" opacity=".45"/>');
    s.push('<path d="M77,82 Q85,77 93,82 M107,82 Q115,77 123,82" stroke="' + shade(c.hair, -0.1) + '" stroke-width="3" fill="none" stroke-linecap="round"/>');
    s.push('<g class="av-eyes"><ellipse cx="85" cy="96" rx="7.5" ry="8.5" fill="#fff"/><ellipse cx="115" cy="96" rx="7.5" ry="8.5" fill="#fff"/><circle cx="86" cy="97" r="4.6" fill="#2B1E1A"/><circle cx="116" cy="97" r="4.6" fill="#2B1E1A"/><circle cx="87.5" cy="95" r="1.6" fill="#fff"/><circle cx="117.5" cy="95" r="1.6" fill="#fff"/>' +
      (girl ? '<path d="M78.5,90.5 L73.5,87 M80.5,88.2 L77,84 M121.5,90.5 L126.5,87 M119.5,88.2 L123,84" stroke="#2B1E1A" stroke-width="2" stroke-linecap="round"/>' : "") + "</g>");
    s.push('<path d="M88,111 Q100,125 112,111 Z" fill="#7A2E2E"/><path d="M93,117 Q100,121 107,117" stroke="#E87C7C" stroke-width="3" fill="none" stroke-linecap="round"/>');
    s.push(hr.front(c));
    var br = it("brille"); if (br) s.push(br.front(c));
    var hat = it("kopf"); if (hat) s.push(hat.front(c));
    s.push("</g>");
    var hd = it("hand"); if (hd) s.push(hd.front(c));
    s.push('<circle cx="144" cy="201" r="10" fill="' + c.skin + '" ' + O + "/>");
    s.push("</g>");
    var tr = it("tier"); if (tr) s.push(tr.front(c));
    if (fxIt) s.push(fxIt.front(c));
    var vb = opt.viewBox || "0 0 200 260";
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + vb + '" class="avatar ' + (opt.cls || "") + '" preserveAspectRatio="xMidYMid meet">' + s.join("") + "</svg>";
  }

  window.AVATAR = { SLOTS: SLOTS, ITEMS: I, BY: BY, DEFAULT: DEFAULT, defaultsFor: defaultsFor, render: render };
})();
