// 为歌单里所有曲目解析 YouTube videoId，合并进 music-genealogy/js/videos.js
// 用法: node music-genealogy/.tools/playlists/yt_resolve.js [起始索引] [数量]
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const https = require("https");

const HERE = __dirname;
const SITE = path.join(HERE, "..", "..");
const OUT = process.env.YT_OUT ? path.resolve(process.env.YT_OUT) : path.join(SITE, "js", "videos.js");
const MISS_OUT = path.join(HERE, "yt_miss.json");

// --- 载入 playlists.js ---
const sandbox = { window: {} };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);
const plSrc = fs.readFileSync(path.join(SITE, "js", "playlists.js"), "utf8");
vm.runInContext(plSrc.replace(/^\/\/.*$/gm, ""), sandbox, { filename: "playlists.js" });
const PLAYLISTS = sandbox.window.MG_PLAYLISTS || {};

const list = [];
const seen = new Set();
for (const gid of Object.keys(PLAYLISTS)) {
  for (const t of PLAYLISTS[gid]) {
    const key = t[1] + "|" + t[0];
    if (seen.has(key)) continue;
    seen.add(key);
    list.push({ key, title: t[0], artist: t[1] });
  }
}

// --- HTTP ---
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const HEADERS = {
  "User-Agent": UA,
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "identity"
};

function get(url, redirects = 0) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: HEADERS }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 4) {
        res.resume();
        const next = new URL(res.headers.location, url).toString();
        return resolve(get(next, redirects + 1));
      }
      let buf = "";
      res.setEncoding("utf8");
      res.on("data", (d) => (buf += d));
      res.on("end", () => resolve({ status: res.statusCode, body: buf }));
    });
    req.on("error", (e) => resolve({ status: 0, body: "", err: e.message }));
    req.setTimeout(25000, () => { req.destroy(); resolve({ status: 0, body: "", err: "timeout" }); });
  });
}

const BAD = /(full album|full lp|album stream|playlist|megamix|compilation)/i;
const norm = (s) =>
  (s || "")
    .toLowerCase()
    .replace(/[\u2018\u2019']/g, "")
    .replace(/\([^)]*\)|\[[^\]]*\]/g, " ")
    .replace(/[^a-z0-9\u4e00-\u9fa5 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function score(v, item) {
  const title = norm(v.title);
  const channel = norm(v.owner);
  const t = norm(item.title);
  const a = norm(item.artist);
  let s = 0;
  if (t && title.includes(t)) s += 4;
  const firstWord = t.split(" ")[0];
  if (firstWord && title.includes(firstWord)) s += 1;
  if (a && (title.includes(a) || channel.includes(a))) s += 4;
  const artistKey = a.split(" ")[0];
  if (artistKey && (title.includes(artistKey) || channel.includes(artistKey))) s += 1;
  if (/\btopic\b/.test(channel)) s += 3;
  if (v.dur >= 60 && v.dur <= 900) s += 1;
  if (v.dur && v.dur < 45) s -= 1;
  if (BAD.test(v.title)) s -= 4;
  if (/live at|live in|live from|\blive\b/i.test(v.title) && !/\blive\b/i.test(item.title)) s -= 1;
  return s;
}

async function fetchResults(url, tries) {
  let last = { status: 0, body: "" };
  for (let i = 0; i < tries; i++) {
    last = await get(url);
    // 200 且含有 videoRenderer 才算拿到结果页；否则多半是被限流/同意页
    if (last.status === 200 && last.body.indexOf('"videoRenderer"') !== -1) return last;
    await sleep(1500 + Math.random() * 1800);
  }
  return last;
}

async function searchOne(item, qOverride, plain) {
  const q = encodeURIComponent(qOverride || item.title + " " + item.artist);
  // 首选「音乐: 音频」过滤（结果更干净）；重试用普通搜索，冷门风格才有结果
  // 注意：过滤参数必须写成 %3D%3D（写成 %253D%253D 会被 YouTube 返回不含 videoRenderer 的页面）
  const url = "https://www.youtube.com/results?search_query=" + q + (plain ? "" : "&sp=EgIQAQ%3D%3D");
  const r = await fetchResults(url, 2);
  if (r.status !== 200) return { ok: false, why: "http " + r.status };
  const body = r.body;
  const out = [];
  const re = /"videoRenderer":\{"videoId":"([a-zA-Z0-9_-]{11})"/g;
  let m;
  while ((m = re.exec(body))) {
    const id = m[1];
    const start = m.index;
    const chunk = body.slice(start, start + 3000);
    const titleM = chunk.match(/"title":\{"runs":\[\{"text":"(.*?)"\}/) || chunk.match(/"title":\{"simpleText":"(.*?)"\}/);
    const ownerM =
      chunk.match(/"longBylineText":\{"runs":\[\{"text":"(.*?)"/) ||
      chunk.match(/"ownerText":\{"runs":\[\{"text":"(.*?)"/) ||
      chunk.match(/"shortBylineText":\{"runs":\[\{"text":"(.*?)"/);
    const durM = chunk.match(/"lengthText":\{"accessibility":\{"accessibilityData":\{"label":"(.*?)"\}/) || chunk.match(/"lengthText":\{"simpleText":"(.*?)"/);
    const unesc = (s) => (s || "").replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16))).replace(/\\"/g, '"');
    const durStr = unesc(durM && durM[1]);
    let dur = 0;
    if (durStr) {
      const parts = durStr.replace(/[^0-9:]/g, ":").split(":").filter(Boolean).map(Number);
      if (parts.length === 2) dur = parts[0] * 60 + parts[1];
      else if (parts.length === 3) dur = parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    out.push({ id, title: unesc(titleM && titleM[1]), owner: unesc(ownerM && ownerM[1]), dur });
    if (out.length >= 8) break;
  }
  if (!out.length) return { ok: false, why: "no results" };
  let best = null;
  let bestScore = -99;
  for (const v of out) {
    const s = score(v, item);
    if (s > bestScore) { bestScore = s; best = v; }
  }
  return { ok: true, id: best.id, score: bestScore, title: best.title, owner: best.owner, dur: best.dur };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const startAt = parseInt(process.argv[2] || "0", 10);
  const count = parseInt(process.argv[3] || String(list.length), 10);

  let db = {};
  if (fs.existsSync(OUT)) {
    const src = fs.readFileSync(OUT, "utf8");
    const m = src.match(/window\.MG_VIDEOS\s*=\s*(\{[\s\S]*?\});?\s*$/);
    if (m) {
      try { db = JSON.parse(m[1]); } catch (e) { db = {}; }
    }
  }

  const slice = list.slice(startAt, startAt + count);
  let done = 0;
  let idx = 0;
  const CONC = parseInt(process.env.YT_CONC || "5", 10);
  const lowScore = [];

  function writeDb(d) {
    const keys = Object.keys(d).sort();
    const lines = keys.map((k) => "  " + JSON.stringify(k) + ": " + JSON.stringify(d[k]));
    fs.writeFileSync(
      OUT,
      "// 由 .tools/yt_fetch.js / playlists/yt_resolve.js 抓取生成的 YouTube videoId 索引（key = 艺人|曲名）\n" +
        "// 用于页面内嵌入 YouTube 播放完整曲目；找不到的曲目会回落到 YouTube 搜索页。\n" +
        "window.MG_VIDEOS = {\n" + lines.join(",\n") + "\n};\n",
      "utf8"
    );
  }

  async function worker() {
    while (idx < slice.length) {
      const item = slice[idx++];
      if (db[item.key]) { done++; continue; }
      let res = await searchOne(item);
      if (!res.ok || res.score < 5) {
        const retries = [
          [item.title + " " + item.artist + " audio", true],
          [item.title, true],
        ];
        for (const [q, plain] of retries) {
          await sleep(350 + Math.random() * 350);
          const r2 = await searchOne(item, q, plain);
          if (r2.ok && (!res.ok || r2.score > res.score)) res = r2;
          if (res.ok && res.score >= 5) break;
        }
      }
      if (res.ok && res.score >= 5) {
        db[item.key] = res.id;
      } else if (res.ok) {
        lowScore.push({ key: item.key, score: res.score, id: res.id, title: res.title, owner: res.owner });
      }
      done++;
      if (done % 25 === 0) {
        console.log(`[${done}/${slice.length}] saved ${Object.keys(db).length} | ${item.title} → ${db[item.key] || "MISS"} (${res.ok ? "s" + res.score : "none"})`);
        writeDb(db);
      }
      await sleep(120 + Math.random() * 180);
    }
  }

  console.log("playlist tracks", list.length, "| this run", slice.length, "| have", Object.keys(db).length);
  await Promise.all(Array.from({ length: CONC }, () => worker()));
  writeDb(db);
  const miss = list.filter((x) => !db[x.key]);
  fs.writeFileSync(MISS_OUT, JSON.stringify({ miss, lowScore }, null, 1), "utf8");
  console.log("DONE. saved", Object.keys(db).length, "of", list.length, "| miss", miss.length, "| lowScore", lowScore.length);
})();
