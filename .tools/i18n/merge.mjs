/* 合并 10 个分片的英文内容翻译，校验后生成 js/locales/en.genres.js
   用法：node .tools/i18n/merge.mjs */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const SRC = path.join(here, "source");
const OUT = path.join(here, "out");
const TARGET = path.resolve(here, "../../js/locales/en.genres.js");
const CJK = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3000-\u303f\uff00-\uffef]/;

const files = fs.readdirSync(SRC).filter((f) => /^data-\d+\.json$/.test(f));

let sourceCount = 0;
const merged = {};
const problems = [];

for (const f of files) {
  const src = JSON.parse(fs.readFileSync(path.join(SRC, f), "utf8"));
  const outPath = path.join(OUT, f);
  if (!fs.existsSync(outPath)) {
    problems.push(`${f}: 缺少翻译文件 out/${f}`);
    continue;
  }
  const out = JSON.parse(fs.readFileSync(outPath, "utf8"));
  for (const g of src) {
    sourceCount++;
    const e = out[g.id];
    if (!e) { problems.push(`${f}: 缺 ${g.id}`); continue; }
    if (!e.n || !String(e.n).trim()) problems.push(`${g.id}: n 为空`);
    if (!e.d || String(e.d).length < 20) problems.push(`${g.id}: d 太短 (${(e.d || "").length})`);
    if (!e.r || !String(e.r).trim()) problems.push(`${g.id}: r 为空`);
    if (!Array.isArray(e.ch)) problems.push(`${g.id}: ch 不是数组`);
    else if (e.ch.length !== (g.ch || []).length) problems.push(`${g.id}: ch 数量 ${e.ch.length} ≠ 源 ${(g.ch || []).length}`);
    for (const [k, v] of Object.entries({ n: e.n, r: e.r, d: e.d })) {
      if (CJK.test(String(v || ""))) problems.push(`${g.id}: ${k} 里还有中文 → ${String(v).slice(0, 60)}`);
    }
    for (const c of e.ch || []) {
      if (CJK.test(String(c))) problems.push(`${g.id}: ch 里还有中文 → ${c}`);
    }
    merged[g.id] = {
      n: String(e.n).trim(),
      r: String(e.r).trim(),
      d: String(e.d).trim(),
      ch: (e.ch || []).map((c) => String(c).trim())
    };
    // 只差连字符/空格的译名统一回数据里的英文名，避免图和卡片上两种写法
    const flat = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
    if (flat(merged[g.id].n) === flat(g.n)) merged[g.id].n = g.n;
  }
}

const ids = Object.keys(merged);
console.log("源风格数:", sourceCount, "合并:", ids.length);
if (problems.length) {
  console.log("问题", problems.length, "条:");
  problems.slice(0, 40).forEach((p) => console.log(" -", p));
} else {
  console.log("校验通过：文案齐全、无中文残留、ch 数量一致");
}

const body = JSON.stringify(merged, null, 1);
const js = `/* 自动生成，勿手改：node .tools/i18n/merge.mjs
   英文内容翻译（每个风格的名称/产地/说明/听感标签），由 .tools/i18n/out/*.json 合并而来。 */
(function () {
  "use strict";
  if (!window.MG_I18N) return;
  window.MG_I18N.registerContent("en", ${body});
})();
`;
fs.mkdirSync(path.dirname(TARGET), { recursive: true });
fs.writeFileSync(TARGET, js, "utf8");
console.log("已写入", TARGET, (js.length / 1024).toFixed(1) + "KB");

fs.writeFileSync(path.join(here, "report.json"), JSON.stringify({ sourceCount, merged: ids.length, problems }, null, 2), "utf8");
if (problems.length) process.exitCode = 1;
