// 把 data-*.js 里的中文内容抽成翻译源文件（每个 data 文件一份 + 家族一份）。
// 用法：node .tools/i18n/extract.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SRC = path.join(ROOT, ".tools", "i18n", "source");
const OUT = path.join(ROOT, ".tools", "i18n", "out");
fs.mkdirSync(SRC, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const ctx = { window: {} };
vm.createContext(ctx);

const files = [];
for (let i = 1; i <= 10; i++) {
  const f = path.join(ROOT, "js", "data-" + i + ".js");
  if (fs.existsSync(f)) files.push(f);
}

const families = [];
const seenFam = new Set();
let total = 0;
const ids = new Set();

files.forEach((file) => {
  const before = ctx.window.MG ? ctx.window.MG.genres.length : 0;
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  const MG = ctx.window.MG;
  const added = MG.genres.slice(before);
  const base = path.basename(file, ".js");
  const rows = added.map((g) => {
    if (ids.has(g.id)) throw new Error("duplicate genre id: " + g.id);
    ids.add(g.id);
    return { id: g.id, n: g.n, zh: g.zh, f: g.f, r: g.r, d: g.d, ch: g.ch || [] };
  });
  total += rows.length;
  fs.writeFileSync(path.join(SRC, base + ".json"), JSON.stringify(rows, null, 1), "utf8");
  console.log(base, rows.length, "genres", "->", rows.reduce((n, r) => n + r.zh.length, 0), "zh chars");

  MG.families.forEach((f) => {
    if (seenFam.has(f.id)) return;
    seenFam.add(f.id);
    families.push({ id: f.id, name: f.name, sub: f.sub });
  });
});

fs.writeFileSync(path.join(SRC, "families.json"), JSON.stringify(families, null, 1), "utf8");
console.log("families:", families.length, "genres total:", total);
