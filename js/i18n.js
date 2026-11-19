/* ============================================================
   多语言支持（i18n）
   - 中文是内置的基准语言（BASE），不额外加载文件；
   - 其他语言在 js/locales/<code>.js 里调 MG_I18N.register(code, pack)；
   - 内容翻译（每个风格的说明/听感/产地）在 js/locales/<code>.genres.js 里
     调 MG_I18N.registerContent(code, {...})，与界面翻译解耦，可单独重生成。
   新增语言：加一个 locales/xx.js（+ 可选 xx.genres.js），在 index.html 里引用即可。
   ============================================================ */
(function (global) {
  "use strict";

  /* ---------- 中文基准文案 ---------- */
  var BASE = {
    "doc.title": "音乐风格谱系 · Music Genealogy",
    "doc.description": "一张可交互的音乐风格家谱：1900 年至今 352 个流派，按年代展开、按家族分道，点开即可看来历、听感特征、代表艺人与 30 秒试听。",
    "boot.loading": "正在展开谱系…",
    "brand.name": "音乐风格谱系",
    "brand.tag": "MUSIC GENEALOGY",
    "lang.label": "语言",

    "aria.menu": "菜单",
    "aria.playlists": "歌单总览",
    "aria.fit": "缩放到全图",
    "aria.random": "随机跳到一个风格",
    "aria.zoomIn": "放大",
    "aria.zoomOut": "缩小",
    "aria.closePanel": "关闭歌单总览",
    "aria.closeDrawer": "关闭详情",
    "aria.playPause": "播放/暂停 30 秒试听",
    "aria.seek": "试听进度",
    "aria.closePlayer": "关闭播放器",

    "search.placeholder": "搜索风格：house / 浩室 / disco",
    "search.empty": "没有找到这个风格，试试英文名",

    "nav.playlists": "歌单",
    "nav.playlistsTitle": "浏览全部风格的歌单",
    "nav.fit": "全图",
    "nav.fitTitle": "缩放到全图",
    "nav.random": "随机漫游",
    "nav.randomShort": "随机",
    "nav.randomTitle": "随机跳到一个风格",

    "sidebar.title": "家族",
    "sidebar.all": "显示全部",
    "side.read": "读图方式",
    "side.readBody": "横轴是年代，纵向按家族分道；箭头由「源头」指向「衍生」。<br />节点大小代表影响力层级，滚轮放大后会出现更细的分支标签。",
    "side.listen": "试听",
    "side.listenBody": "点曲目听 30 秒试听（Apple Music 提供的片段）。想听整首，用歌单栏里的「YouTube 歌单」链接到 YouTube 里连着听。",
    "side.data": "数据",
    "side.dataBody": "综合 Musicmap、Ishkur's Guide、Every Noise at Once、Wikipedia 与 AllMusic。年代与归类为近似值。",
    "side.stat": "共 {genres} 个风格、{tracks} 首代表曲、{playlists} 张歌单",
    "side.statNoPl": "共 {genres} 个风格、{tracks} 首代表曲",

    "stage.hint": "滚轮缩放 · 拖拽平移 · <b>点击节点</b>查看详情与试听",
    "legend.up": "前驱 · 源头",
    "legend.down": "后继 · 演化",

    "pl.title": "歌单总览",
    "pl.subDefault": "风格卡片 5–8 首 · 家族整张 30 首在 YouTube",
    "pl.subBuilt": "风格卡片 5–8 首 · 已建 {built} / {total} 张风格歌单 · 家族整张 30 首",
    "pl.search": "筛选风格：house / 浩室 / techno",
    "pl.all": "全部",
    "pl.empty": "没有匹配的风格，试试英文名",
    "pl.tracks": "{n} 首",
    "pl.etc": " 等",
    "pl.ytOwnTitle": "在 YouTube 打开这个风格的歌单（{n} 首）",
    "pl.ytTempTitle": "在 YouTube 打开这张歌单",
    "pl.ytLink": "YouTube 歌单 ↗",
    "pl.groupYt": "家族整张 · {n} 首在 YouTube ↗",
    "yt.fallbackTitle": "谱系 · YouTube 歌单",

    "tooltip.foot": "点击查看完整卡片与试听 →",

    "drawer.since": "{year} 年起",
    "drawer.parents": "直接源头",
    "drawer.kids": "衍生风格",
    "drawer.tracks": "歌单曲目",
    "drawer.traits": "听感特征",
    "drawer.jump": "点击跳转",
    "drawer.artists": "代表艺人",
    "drawer.playlist": "歌单",
    "drawer.playlistSub": "{n} 首 · 点曲目听 30 秒试听",
    "drawer.playAll": "▶ 连播 30 秒",
    "drawer.copy": "复制链接",
    "drawer.ytSearch": "YouTube 搜风格",
    "drawer.ytLink": "YouTube 歌单 ↗",
    "drawer.wikipedia": "Wikipedia",
    "drawer.ytTipOwn": "在 YouTube 打开「{title}」· {n} 首",
    "drawer.ytTipFam": "在 YouTube 打开本家族的整张歌单（{n} 首）",
    "drawer.ytTipTemp": "在 YouTube 里按这 {n} 首临时拼一张歌单",
    "drawer.ytNoteOwn": "整张在 YouTube：「{title}」· {n} 首{span}",
    "drawer.ytNoteFam": "整张在 YouTube：「{title}」· {n} 首 · {span}",
    "drawer.ytNoteTemp": "整张在 YouTube：点上面的链接会把这 {n} 首拼成一张临时歌单（可在 YouTube 里保存下来）",

    "toast.copied": "歌单链接已复制，可分享到微信/QQ",
    "toast.copyFail": "复制失败，可以右键「YouTube 歌单」复制链接",
    "toast.queueDone": "这张歌单的试听放完了",
    "toast.noPreview": "Apple Music 没有这首的片段；可以点歌单栏的「YouTube 歌单」到 YouTube 听整首",
    "toast.blocked": "浏览器拦截了播放，请再点一次播放键",
    "toast.previewFail": "试听加载失败，可稍后重试或去 YouTube 歌单听整首",

    "player.finding": "{artist} · 正在查找试听…",
    "player.noPreview": "这首没有 30 秒试听 · 用歌单栏的 YouTube 歌单听整首",
    "player.apple": "Apple Music 试听",
    "player.failed": "试听加载失败"
  };

  var PACKS = Object.create(null);   // code -> { code, label, htmlLang, docTitle, docDescription, strings, families }
  var CONTENT = Object.create(null); // code -> { "<genre id>": { n, r, d, ch } }
  var ORDER = ["zh"];                // 语言切换器里的顺序；zh 永远第一
  var LS_KEY = "mg:lang";
  var current = "zh";
  var listeners = [];
  var started = false;

  function norm(code) {
    code = String(code || "").trim().toLowerCase();
    if (!code) return "";
    if (code === "zh" || code.indexOf("zh-") === 0 || code === "cn" || code === "zh_cn") return "zh";
    if (code === "en" || code.indexOf("en-") === 0) return "en";
    return code.split(/[-_]/)[0];
  }

  function has(code) {
    code = norm(code);
    return code === "zh" || !!PACKS[code];
  }

  function packOf(code) {
    return code === "zh" ? null : PACKS[code] || null;
  }

  /* ---------- 注册 ---------- */
  function register(code, pack) {
    code = norm(code);
    if (!code) return;
    pack = pack || {};
    pack.code = code;
    PACKS[code] = pack;
    if (ORDER.indexOf(code) < 0) ORDER.push(code);
    if (pack.genres && !CONTENT[code]) CONTENT[code] = pack.genres;
  }

  function registerContent(code, content) {
    code = norm(code);
    if (!code || !content) return;
    CONTENT[code] = content;
    if (PACKS[code] && !PACKS[code].genres) PACKS[code].genres = content;
  }

  /* ---------- 取文案 ---------- */
  function t(key, vars) {
    var p = packOf(current);
    var s = p && p.strings && p.strings[key] != null ? p.strings[key] : BASE[key];
    if (s == null) s = key;
    if (vars) {
      s = String(s).replace(/\{(\w+)\}/g, function (m, k) {
        return vars[k] != null ? String(vars[k]) : m;
      });
    }
    return s;
  }

  function overlay(g) {
    var c = CONTENT[current];
    return (c && g && c[g.id]) || null;
  }

  /* 当前语言下的风格主名 */
  function name(g) {
    var o = overlay(g);
    if (o && o.n) return o.n;
    if (current === "zh") return g.zh || g.n || "";
    return g.n || g.zh || "";
  }

  /* 次要名（中文界面配英文名 / 英文界面配中文名），没有就空串 */
  function altName(g) {
    if (current === "zh") {
      return g.n && g.n !== g.zh ? g.n : "";
    }
    return g.zh || "";
  }

  /* 图上标签统一用英文名，避免中文标签在不同字号下宽度跳动 */
  function chartName(g) {
    var o = overlay(g);
    return (o && o.n) || g.n || g.zh || "";
  }

  function origin(g) {
    var o = overlay(g);
    return (o && o.r) || g.r || "";
  }

  function desc(g) {
    var o = overlay(g);
    return (o && o.d) || g.d || "";
  }

  function traits(g) {
    var o = overlay(g);
    return o && o.ch && o.ch.length ? o.ch : g.ch || [];
  }

  /* 搜索用的全部别名（中英都算，切换语言不用重新输入） */
  function aliases(g) {
    var out = [];
    [g.zh, g.n, name(g), overlay(g) && overlay(g).n].forEach(function (s) {
      if (s) out.push(String(s).toLowerCase());
    });
    return out;
  }

  function familyName(f) {
    var p = packOf(current);
    var e = p && p.families && p.families[f.id];
    return (e && e.name) || f.name;
  }

  function familySub(f) {
    var p = packOf(current);
    var e = p && p.families && p.families[f.id];
    return (e && e.sub) || f.sub || "";
  }

  function familyById(id, families) {
    for (var i = 0; i < families.length; i++) if (families[i].id === id) return families[i];
    return null;
  }

  /* ---------- 静态标记 ---------- */
  function applyStatic(root) {
    var scope = root || document;
    var els = scope.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) els[i].textContent = t(els[i].getAttribute("data-i18n"));
    var htmls = scope.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmls.length; j++) htmls[j].innerHTML = t(htmls[j].getAttribute("data-i18n-html"));
    var attrs = scope.querySelectorAll("[data-i18n-attr]");
    for (var k = 0; k < attrs.length; k++) {
      var spec = attrs[k].getAttribute("data-i18n-attr").split(",");
      for (var n = 0; n < spec.length; n++) {
        var pair = spec[n].split(":");
        if (pair.length === 2) attrs[k].setAttribute(pair[0].trim(), t(pair[1].trim()));
      }
    }
  }

  function docTitle() {
    var p = packOf(current);
    return (p && p.docTitle) || BASE["doc.title"];
  }

  function docDescription() {
    var p = packOf(current);
    return (p && p.docDescription) || BASE["doc.description"];
  }

  /* ---------- 语言切换器 ---------- */
  function paintSwitcher() {
    var host = document.getElementById("langs");
    if (!host) return;
    var html = "";
    for (var i = 0; i < ORDER.length; i++) {
      var code = ORDER[i];
      var p = packOf(code);
      var label = code === "zh" ? "中文" : (p && p.short) || code.toUpperCase();
      var full = code === "zh" ? "简体中文" : (p && p.label) || label;
      html += '<button type="button" class="lang-btn' + (code === current ? " on" : "") +
        '" data-lang="' + code + '" aria-pressed="' + (code === current) + '" title="' + full + '">' + label + "</button>";
    }
    host.innerHTML = html;
    host.setAttribute("aria-label", t("lang.label"));
    var btns = host.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].addEventListener("click", function (e) {
        setLang(e.currentTarget.getAttribute("data-lang"), { fromUser: true });
      });
    }
  }

  /* ---------- 同步 URL / <html lang> / meta ---------- */
  function syncUrl(code) {
    try {
      var u = new URL(location.href);
      if (code === "zh") u.searchParams.delete("lang");
      else u.searchParams.set("lang", code);
      history.replaceState(null, "", u.pathname + (u.search || "") + (u.hash || ""));
    } catch (e) { /* file:// 下个别浏览器不支持，忽略 */ }
  }

  function paintDocMeta() {
    document.documentElement.lang = current === "zh" ? "zh-CN" : (packOf(current) && packOf(current).htmlLang) || current;
    document.title = docTitle();
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", docDescription());
    var ogT = document.querySelector('meta[property="og:title"]');
    if (ogT) ogT.setAttribute("content", docTitle());
    var ogD = document.querySelector('meta[property="og:description"]');
    if (ogD) ogD.setAttribute("content", docDescription());
  }

  function setLang(code, opts) {
    code = norm(code) || "zh";
    if (!has(code)) return false;
    opts = opts || {};
    current = code;
    try { localStorage.setItem(LS_KEY, code); } catch (e) { /* 隐私模式忽略 */ }
    paintDocMeta();
    applyStatic();
    paintSwitcher();
    if (opts.fromUser) syncUrl(code);
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](code); } catch (e) { /* 一个监听器出错不影响其他 */ }
    }
    return true;
  }

  function detect() {
    var q = "";
    try { q = new URLSearchParams(location.search).get("lang") || ""; } catch (e) { q = ""; }
    var c = norm(q);
    if (c && has(c)) return c;

    var ls = "";
    try { ls = localStorage.getItem(LS_KEY) || ""; } catch (e) { ls = ""; }
    c = norm(ls);
    if (c && has(c)) return c;

    var nav = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < nav.length; i++) {
      var n = norm(nav[i]);
      if (n === "zh") return "zh";
      if (n && PACKS[n]) return n;
      if (n === "en" && PACKS.en) return "en";
    }
    return "zh";
  }

  function onChange(fn) {
    if (typeof fn === "function") listeners.push(fn);
  }

  function init() {
    if (started) return;
    started = true;
    current = detect();
    paintDocMeta();
    applyStatic();
    paintSwitcher();
  }

  global.MG_I18N = {
    t: t,
    text: t,
    lang: function () { return current; },
    setLang: setLang,
    onChange: onChange,
    has: has,
    locales: function () { return ORDER.slice(); },
    register: register,
    registerContent: registerContent,
    content: function (code) { return CONTENT[norm(code)] || null; },
    name: name,
    altName: altName,
    chartName: chartName,
    origin: origin,
    desc: desc,
    traits: traits,
    aliases: aliases,
    familyName: familyName,
    familySub: familySub,
    familyById: familyById,
    applyStatic: applyStatic,
    docTitle: docTitle,
    init: init
  };

  // 延后初始化：各语言包（js/locales/*.js）在本文件之后才注册，
  // 应用启动时 app.js 会主动调用 init()，这里只是兜底。
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
