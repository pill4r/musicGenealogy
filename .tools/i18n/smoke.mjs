/* 无头 DOM 冒烟测试：在 jsdom 里跑真页面（剔除 echarts，用桩替换），
   检查中英两套界面文案、语言切换、搜索与歌单面板是否都换掉了语言。
   用法：node .tools/i18n/smoke.mjs */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { JSDOM } from "jsdom";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const CJK = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
let fails = 0;
const ok = (cond, label, extra) => {
  if (cond) console.log("  ok   " + label);
  else { fails++; console.log("  FAIL " + label + (extra ? " → " + extra : "")); }
};

function buildHtml(withEcharts) {
  // 把 <script src> 换成内联脚本，避免 jsdom 走网络；echarts 用桩替代
  return html.replace(/<script src="([^"]+)"><\/script>/g, (_m, src) => {
    if (/vendor\/echarts\.min\.js$/.test(src)) {
      return withEcharts ? "" : "";
    }
    const code = fs.readFileSync(path.join(root, src), "utf8");
    return "<script>\n" + code + "\n</script>";
  });
}

function fakeEcharts() {
  const chart = {
    setOption() {}, on() {}, off() {}, resize() {}, getWidth: () => 1400, getHeight: () => 800,
    getZr: () => ({ on() {} }),
    convertToPixel: (_f, pt) => [pt[0] * 0.5 + 400, pt[1] + 60],
    dispatchAction() {}
  };
  return { init: () => chart, registerTheme() {}, graphic: {} };
}

function makeDom(urlStr, navLang = "zh") {
  return new JSDOM(buildHtml(true), {
    url: urlStr,
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(window) {
      window.echarts = fakeEcharts();
      const langs = navLang === "zh" ? ["zh-CN", "zh", "en"] : ["en-US", "en"];
      Object.defineProperty(window.navigator, "language", { get: () => langs[0] });
      Object.defineProperty(window.navigator, "languages", { get: () => langs.slice() });
      window.HTMLCanvasElement.prototype.getContext = function () {
        return { font: "", measureText: (s) => ({ width: String(s).length * 6.2 }) };
      };
      window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
    }
  });
}

const text = (node) => (node ? node.textContent.replace(/\s+/g, " ").trim() : "");

console.log("\n[1] 中文默认版");
{
  const dom = makeDom("http://127.0.0.1:8123/");
  const { window } = dom;
  const doc = window.document;
  const I = window.MG_I18N;
  ok(I && I.lang() === "zh", "默认语言 = zh", I && I.lang());
  ok(/音乐风格谱系/.test(doc.title), "页面 title 是中文", doc.title);
  ok(text(doc.querySelector(".brand-title")) === "音乐风格谱系MUSIC GENEALOGY", "品牌名与副标题", text(doc.querySelector(".brand-title")));  const fams = doc.querySelectorAll("#famList .fam");
  ok(fams.length === 17, "侧栏 17 个家族", fams.length);
  ok(/根源/.test(text(fams[0])), "家族名是中文", text(fams[0]));
  ok(/共 352 个风格/.test(text(doc.getElementById("dataStat"))), "数据统计句", text(doc.getElementById("dataStat")));
  ok(/滚轮缩放/.test(text(doc.querySelector(".hint"))), "舞台提示", text(doc.querySelector(".hint")));
  ok(doc.querySelectorAll("#bandlay .bl").length === 17, "家族轨道标签 17 条");
  ok(window.__state.nodes.length === 352, "节点 352 个", window.__state.nodes.length);
  ok(/^[A-Za-z]/.test(window.__state.nodes[0]._label), "图上标签用英文名", window.__state.nodes[0]._label);
  const langBtns = [...doc.querySelectorAll("#langs .lang-btn")];
  ok(langBtns.length === 2, "语言按钮 2 个", langBtns.map((b) => text(b)).join(","));
  ok(langBtns[1].getAttribute("data-lang") === "en", "第二个是 EN");
  ok(text(doc.getElementById("plSub")).includes("风格卡片"), "歌单副标题中文", text(doc.getElementById("plSub")));

  // 搜索
  const q = doc.getElementById("q");
  q.value = "house";
  q.dispatchEvent(new window.Event("input"));
  const hits = doc.querySelectorAll("#qpop .search-item");
  ok(hits.length > 0, "搜索 house 有结果", hits.length);
  ok(/浩室|House|house/i.test(text(hits[0])), "搜索结果首项", text(hits[0]));

  // 随机打开一个风格卡片
  doc.getElementById("randBtn").click();
  const drawer = doc.getElementById("drawer");
  ok(drawer.classList.contains("open"), "随机按钮打开详情抽屉");
  ok(drawer.querySelectorAll(".track").length >= 4, "抽屉里有歌单曲目", drawer.querySelectorAll(".track").length);
  ok(/直接源头/.test(text(drawer)), "抽屉小标题中文");
  ok(/点击跳转/.test(text(drawer)), "抽屉跳转提示中文");

  // 歌单总览
  doc.getElementById("plBtn").click();
  const cards = doc.querySelectorAll("#plGrid .pl-card");
  ok(cards.length === 352, "歌单总览 352 张卡片", cards.length);
  ok(/首 · /.test(text(cards[0].querySelector(".plc-sub"))), "卡片副标题中文", text(cards[0].querySelector(".plc-sub")));
  ok(/YouTube 歌单/.test(text(cards[0].querySelector(".plc-yt"))), "YouTube 链接中文");
  dom.window.close();
}

console.log("\n[2] 切到英文（不刷新页面）");
{
  const dom = makeDom("http://127.0.0.1:8123/");
  const { window } = dom;
  const doc = window.document;
  const I = window.MG_I18N;
  I.setLang("en", { fromUser: true });
  ok(I.lang() === "en", "当前语言 = en");
  ok(/A Family Tree/.test(doc.title), "页面 title 是英文", doc.title);
  ok(text(doc.querySelector(".brand-title")).indexOf("Music Genealogy") === 0, "品牌名英文", text(doc.querySelector(".brand-title")));
  ok(!CJK.test(text(doc.querySelector(".hint"))), "舞台提示无中文", text(doc.querySelector(".hint")));
  ok(!CJK.test(text(doc.querySelector(".side-note"))), "侧栏说明无中文", text(doc.querySelector(".side-note")));
  const fams = [...doc.querySelectorAll("#famList .fam")];
  ok(!CJK.test(fams.map(text).join(" ")), "家族列表无中文", fams.map(text).slice(0, 3).join(" | "));
  ok(/Roots/.test(text(fams[0])), "第一个家族 = Roots", text(fams[0]));
  ok(!CJK.test(text(doc.getElementById("dataStat"))), "数据统计英文", text(doc.getElementById("dataStat")));
  ok(/352 genres/.test(text(doc.getElementById("dataStat"))), "统计句含 352 genres");
  const bands = [...doc.querySelectorAll("#bandlay .bl")].map(text).join(" ");
  ok(!CJK.test(bands), "家族轨道标签英文", bands.slice(0, 60));
  ok(doc.querySelectorAll("#langs .lang-btn.on").length === 1 && text(doc.querySelector("#langs .lang-btn.on")) === "EN", "EN 按钮高亮");
  ok(window.location.search.includes("lang=en"), "地址栏写入 ?lang=en", window.location.search);

  // 图上标签仍然是英文
  const labels = window.__state.nodes.map((n) => n._label).filter(Boolean);
  ok(labels.length > 300 && !labels.some((l) => CJK.test(l)), "图上标签全部英文");

  // 随机卡片
  doc.getElementById("plBtn").click();
  const cards = doc.querySelectorAll("#plGrid .pl-card");
  ok(cards.length === 352, "总览卡片仍是 352 张", cards.length);
  const sample = [...cards].slice(0, 12);
  ok(!sample.some((c) => CJK.test(text(c.querySelector(".plc-zh")))), "卡片主名英文");
  ok(!sample.some((c) => CJK.test(text(c.querySelector(".plc-sub")))), "卡片副标题英文");
  ok(sample.every((c) => /tracks ·/.test(text(c.querySelector(".plc-sub")))), "卡片副标题含 tracks");
  ok(!CJK.test(text(doc.querySelector("#plGrid .pl-ghead"))), "分组标题英文");
  ok(/Family playlist|YouTube playlist/.test(text(doc.querySelector("#plGrid .pl-gyt"))), "家族整张链接英文");
  ok(!CJK.test(text(doc.getElementById("plSub"))), "歌单副标题英文", text(doc.getElementById("plSub")));
  doc.getElementById("plClose").click();

  // 搜索英文
  const q = doc.getElementById("q");
  q.value = "acid";
  q.dispatchEvent(new window.Event("input"));
  const hits = [...doc.querySelectorAll("#qpop .search-item")];
  ok(hits.length > 0, "搜索 acid 有结果", hits.length);
  ok(hits.length > 0 && !CJK.test(text(hits[0].querySelector(".nm"))), "搜索结果主名英文", hits[0] && text(hits[0]));

  // 抽屉（用随机按钮）
  doc.getElementById("randBtn").click();
  const drawer = doc.getElementById("drawer");
  const body = text(drawer.querySelector(".drawer-body"));
  ok(drawer.classList.contains("open"), "抽屉打开");
  const desc = text(drawer.querySelector(".desc"));
  ok(!CJK.test(desc), "详情说明英文", desc.slice(0, 70));
  ok(/playlist tracks/i.test(body) && /Sound & feel/i.test(body), "抽屉小标题英文", body.slice(0, 120));
  ok(/Direct predecessors|Descendants/.test(body), "源头/衍生小标题英文");
  ok(!CJK.test(text(drawer.querySelector(".meta"))), "年代/产地行英文", text(drawer.querySelector(".meta")));
  ok(/Since \d{4}/.test(text(drawer.querySelector(".meta"))), "年代写法 Since YYYY");
  ok(/Play all/.test(text(drawer.querySelector("#plPlayAll"))), "连播按钮英文");
  ok(/Copy link/.test(text(drawer.querySelector("#plCopy"))), "复制按钮英文");
  dom.window.close();
}

console.log("\n[3] 直接访问 ?lang=en（新会话）");
{
  const dom = makeDom("http://127.0.0.1:8123/?lang=en");
  const { window } = dom;
  const I = window.MG_I18N;
  ok(I.lang() === "en", "URL 参数优先识别出 en", I.lang());
  ok(/Music Genealogy/.test(window.document.title), "首屏就是英文 title", window.document.title);
  ok(/Roots/.test(text(window.document.querySelector("#famList .fam"))), "首屏家族英文", text(window.document.querySelector("#famList .fam")));
  ok(window.document.documentElement.lang === "en", "html lang=en", window.document.documentElement.lang);
  dom.window.close();
}

console.log("\n[4] 文案键完整性");
{
  const i18n = fs.readFileSync(path.join(root, "js/i18n.js"), "utf8");
  const baseKeys = [...i18n.matchAll(/"([a-z][a-zA-Z]+(?:\.[a-zA-Z]+)+)":/g)].map((m) => m[1]);
  const enSrc = fs.readFileSync(path.join(root, "js/locales/en.js"), "utf8");
  const enKeys = [...enSrc.matchAll(/"([a-z][a-zA-Z]+(?:\.[a-zA-Z]+)+)":/g)].map((m) => m[1]);
  const used = [...html.matchAll(/data-i18n(?:-html|-attr)?="([^"]+)"/g)]
    .flatMap((m) => (m[0].includes("attr") ? m[1].split(",").map((p) => p.split(":")[1]) : [m[1]]))
    .map((s) => (s || "").trim())
    .filter(Boolean);
  const missingBase = used.filter((k) => !baseKeys.includes(k));
  const missingEn = baseKeys.filter((k) => !enKeys.includes(k));
  ok(missingBase.length === 0, "index.html 用到的键都在中文 BASE 里", missingBase.join(","));
  ok(missingEn.length === 0, "英文包覆盖全部英文键", missingEn.join(","));
  ok(enKeys.length >= baseKeys.length - 2, "英文键数量对齐", enKeys.length + " vs " + baseKeys.length);

  const app = fs.readFileSync(path.join(root, "js/app.js"), "utf8");
  const stripped = app.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/[^\n]*/g, "$1");
  const cjkLines = stripped.split("\n").filter((l) => CJK.test(l));
  ok(cjkLines.length === 0, "app.js 里没有遗留中文字面量", cjkLines.slice(0, 3).join(" || "));
}

console.log(fails ? `\n${fails} 项失败` : "\n全部通过");
process.exitCode = fails ? 1 : 0;
