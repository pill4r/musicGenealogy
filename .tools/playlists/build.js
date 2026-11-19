// 合并 curated/<family>.json → music-genealogy/js/playlists.js
// 规则：每个风格 5–8 首；原有 tr 代表作必须在内（放最前）；同曲名去重；年份必填。
// 用法: node music-genealogy/.tools/playlists/build.js
const fs = require("fs");
const path = require("path");

const HERE = __dirname;
const SITE = path.join(HERE, "..", "..");
const OUT = path.join(SITE, "js", "playlists.js");
const REPORT = path.join(HERE, "build-report.json");

const families = JSON.parse(fs.readFileSync(path.join(HERE, "genres.json"), "utf8"));
// genres.json 是 17 个家族对象组成的数组：{id,name,sub,color,genres:[{id,...}]}
const genres = families.flatMap((f) => (f.genres || []).map((g) => Object.assign({}, g, { f: f.id })));
const gById = new Map(genres.map((g) => [g.id, g]));

const norm = (s) =>
  String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2018\u2019']/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, " ")
    .trim();

const problems = [];
const out = {};
let totalTracks = 0;

function cleanTrack(t, where) {
  if (!t || typeof t !== "object") return null;
  const title = String(t.t || t.title || "").trim();
  const artist = String(t.a || t.artist || "").trim();
  let year = t.y != null ? t.y : t.year;
  year = parseInt(year, 10);
  if (!title || !artist) {
    problems.push({ where, type: "missing-title-or-artist", t });
    return null;
  }
  if (!isFinite(year) || year < 1850 || year > 2026) {
    problems.push({ where, type: "bad-year", title, artist, year });
    year = 0;
  }
  return [title, artist, year];
}

const curatedDir = path.join(HERE, "curated");
const files = fs.existsSync(curatedDir) ? fs.readdirSync(curatedDir).filter((f) => f.endsWith(".json")) : [];

for (const f of files) {
  let doc;
  try {
    doc = JSON.parse(fs.readFileSync(path.join(curatedDir, f), "utf8"));
  } catch (e) {
    problems.push({ where: f, type: "json-parse", err: String(e.message) });
    continue;
  }
  const fam = doc.family || f.replace(/\.json$/, "");
  const list = doc.genres || [];
  for (const item of list) {
    const g = gById.get(item.id);
    if (!g) {
      problems.push({ where: fam + "/" + item.id, type: "unknown-genre" });
      continue;
    }
    if (out[item.id]) {
      problems.push({ where: fam + "/" + item.id, type: "duplicate-genre" });
      continue;
    }
    const seen = new Set();
    const tracks = [];
    // 1) 原有代表作（含 30 秒试听的那首）放最前，确保不丢
    for (const t of g.tr || []) {
      const ct = cleanTrack({ t: t[0], a: t[1], y: t[2] }, fam + "/" + item.id + "/orig");
      if (!ct) continue;
      const k = norm(ct[0]);
      if (seen.has(k)) continue;
      seen.add(k);
      tracks.push(ct);
    }
    // 2) 策展曲目
    for (const t of item.tracks || []) {
      const ct = cleanTrack(t, fam + "/" + item.id);
      if (!ct) continue;
      const k = norm(ct[0]);
      if (seen.has(k)) continue;
      seen.add(k);
      tracks.push(ct);
    }
    const where = fam + "/" + item.id;
    if (tracks.length < 5) problems.push({ where, type: "too-few", n: tracks.length, zh: g.zh });
    if (tracks.length > 8) {
      problems.push({ where, type: "too-many", n: tracks.length, zh: g.zh });
      tracks.length = 8;
    }
    out[item.id] = tracks;
    totalTracks += tracks.length;
  }
}

const missing = genres.filter((g) => !out[g.id]);
for (const g of missing) problems.push({ where: g.id, type: "no-curation", family: g.f, zh: g.zh });

const ids = Object.keys(out).sort();
const body = ids
  .map((id) => "  " + JSON.stringify(id) + ": [\n" + out[id].map((t) => "    " + JSON.stringify(t)).join(",\n") + "\n  ]")
  .join(",\n");

const header =
  "// 自动生成 —— 每个风格的 YouTube 歌单（5–8 首公认代表曲，含原有代表作）\n" +
  "// 由 music-genealogy/.tools/playlists/build.js 从 curated/*.json 合并而成，勿手改。\n" +
  "// 结构: window.MG_PLAYLISTS[genreId] = [[曲名, 艺人, 年份], ...]\n" +
  "// 生成时间: " + new Date().toISOString() + "\n";

fs.writeFileSync(OUT, header + "window.MG_PLAYLISTS = {\n" + body + "\n};\n", "utf8");

fs.writeFileSync(
  REPORT,
  JSON.stringify(
    {
      at: new Date().toISOString(),
      families: files,
      covered: ids.length,
      totalGenres: genres.length,
      missingGenres: missing.map((g) => g.id),
      totalTracks,
      problems
    },
    null,
    1
  ),
  "utf8"
);

console.log("covered", ids.length, "/", genres.length, "| tracks", totalTracks, "| problems", problems.length);
if (missing.length) console.log("MISSING:", missing.map((g) => g.f + "/" + g.id).join(", "));
const byType = {};
for (const p of problems) byType[p.type] = (byType[p.type] || 0) + 1;
console.log("problem types:", JSON.stringify(byType));
if (problems.length) console.log("see", REPORT);
