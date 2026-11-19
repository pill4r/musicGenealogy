/* ============================================================
   音乐风格谱系 · Music Genealogy
   时间轴 × 家族分道 的流派 DAG，点击节点查看知识卡片与试听
   ============================================================ */
(function () {
  "use strict";

  const MG = window.MG;
  const I18N = window.MG_I18N;
  const t = (key, vars) => I18N.t(key, vars);
  // 先做语言识别 + 套用静态文案；下面所有动态文案都走 t()
  I18N.init();

  // 家族的纵向排列顺序（不依赖数据文件加载顺序，后加入的家族也能插到合适位置）
  const FAMILY_ORDER = [
    "roots", "country", "jazz", "soul", "disco", "house", "techno", "bass",
    "rave", "hiphop", "electronic", "rock", "punk", "metal", "indie", "pop", "latin"
  ];
  const families = MG.families.slice().sort((a, b) => {
    const ia = FAMILY_ORDER.indexOf(a.id);
    const ib = FAMILY_ORDER.indexOf(b.id);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
  });
  const genres = MG.genres;

  // 侧栏数据统计（随数据文件自动更新）
  const statEl = document.getElementById("dataStat");
  function renderStat() {
    if (!statEl) return;
    const nTracks = genres.reduce((a, g) => a + (g.tr || []).length, 0);
    const plCount = Object.keys(window.MG_PLAYLISTS || {}).length;
    statEl.textContent = t(plCount ? "side.stat" : "side.statNoPl", {
      genres: genres.length,
      tracks: nTracks,
      playlists: plCount
    });
  }
  renderStat();
  const byId = new Map(genres.map((g) => [g.id, g]));
  const famById = new Map(families.map((f) => [f.id, f]));
  const children = new Map(genres.map((g) => [g.id, []]));

  genres.forEach((g) => {
    (g.p || []).forEach((pid) => {
      if (children.has(pid)) children.get(pid).push(g.id);
    });
  });

  /* ---------- 布局常量 ---------- */
  const X0 = 1885;
  const YEAR_W = 48;
  const LANE_H = 36;
  const BAND_GAP = 34;
  const TOP = 96;
  const MIN_GAP = 4.5;
  const BAND_LABEL_X = -210;

  const state = {
    activeFams: new Set(families.map((f) => f.id)),
    selected: null,
    nodes: [],
    links: [],
    bands: [],
    zoom: 1,
    baseZoom: 1,
    playingKey: null,
    sparse: false
  };

  const $ = (id) => document.getElementById(id);
  const chartEl = $("chart");
  const chart = echarts.init(chartEl, null, { renderer: "canvas" });
  window.__chart = chart;
  window.__state = state;
  window.__refresh = () => refreshLabels();
  window.__playing = () => ({
    title: $("pTitle").textContent,
    sub: $("pSub").textContent,
    queue: previewQueue ? previewQueue.pos + 1 + "/" + previewQueue.list.length : null,
    audio: { src: (audio.src || "").slice(0, 60), paused: audio.paused, t: +audio.currentTime.toFixed(1), d: +(audio.duration || 0).toFixed(1) }
  });
  window.__findYouTube = (t, a) => findYouTube(t, a);
  window.__ytStats = () => ({ total: Object.keys(VID_DB).length, missing: (window.MG.genres || []).reduce((n, g) => n + (g.tr || []).filter((t) => !findYouTube(t[0], t[1])).length, 0) });

  /* ---------- 小工具 ---------- */
  function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function visibleGenres() {
    return genres.filter((g) => state.activeFams.has(g.f));
  }

  /* ---------- 布局：时间轴 + 家族分道 + 车道 ---------- */
  function computeLayout() {
    const list = visibleGenres();
    list.forEach((g) => { g._lane = null; });
    const activeFams = families.filter((f) => state.activeFams.has(f.id));
    const bands = [];
    let y = TOP;

    activeFams.forEach((fam) => {
      const items = list
        .filter((g) => g.f === fam.id)
        .sort((a, b) => a.y - b.y || a.id.localeCompare(b.id));
      if (!items.length) return;

      const laneLast = [];
      items.forEach((g) => {
        const parentLanes = (g.p || [])
          .map((id) => byId.get(id))
          .filter((p) => p && p.f === fam.id && p._lane != null)
          .map((p) => p._lane);
        const target = parentLanes.length
          ? parentLanes.reduce((a, b) => a + b, 0) / parentLanes.length
          : 0;

        let lane = -1;
        for (let d = 0; d <= 12 && lane < 0; d++) {
          const cands = d === 0 ? [Math.round(target)] : [Math.round(target) + d, Math.round(target) - d];
          for (const c of cands) {
            if (c < 0) continue;
            if (laneLast[c] === undefined || g.y - laneLast[c] >= MIN_GAP) { lane = c; break; }
          }
        }
        if (lane < 0) lane = laneLast.length;
        g._lane = lane;
        laneLast[lane] = g.y;
      });

      const lanes = Math.max(1, laneLast.length);
      const y0 = y;
      let minX = Infinity;
      items.forEach((g) => {
        g._x = (g.y - X0) * YEAR_W;
        g._y = y0 + g._lane * LANE_H;
        if (g._x < minX) minX = g._x;
      });
      const y1 = y0 + (lanes - 1) * LANE_H;
      bands.push({ fam, y0, y1: Math.max(y1, y0 + 30), lanes, minX });
      y = y1 + BAND_GAP;
    });

    return bands;
  }

  /* ---------- 左侧家族轨道名 ---------- */
  function renderBandLayer() {
    const lay = $("bandlay");
    if (!lay) return;
    lay.innerHTML = state.bands
      .map(
        (b) =>
          '<div class="bl" data-band="' + b.fam.id + '" style="color:' + b.fam.color + '">' +
          "<i></i>" + esc(I18N.familyName(b.fam)) + "</div>"
      )
      .join("");
  }

  function placeBands() {
    const lay = $("bandlay");
    if (!lay || !state.bands.length) return;
    const h = chart.getHeight();
    const items = [];
    state.bands.forEach((b) => {
      let p = null;
      try { p = chart.convertToPixel({ seriesIndex: 0 }, [0, (b.y0 + b.y1) / 2]); } catch (e) { p = null; }
      const el = lay.querySelector('[data-band="' + b.fam.id + '"]');
      if (!el) return;
      items.push({ el, y: p && isFinite(p[1]) ? p[1] : null, b });
    });
    items.sort((a, c) => (a.y == null ? 1e9 : a.y) - (c.y == null ? 1e9 : c.y));
    let last = -1e9;
    const GAP = 15;
    items.forEach((it) => {
      if (it.y == null) { it.el.classList.remove("on"); return; }
      it.y = Math.max(it.y, last + GAP);
      const ok = it.y > 44 && it.y < h - 14;
      it.el.style.top = it.y + "px";
      it.el.classList.toggle("on", ok);
      if (ok) last = it.y;
    });
  }

  /* ---------- 顶部年代标尺 ---------- */
  const YEARS = [];
  for (let yr = 1900; yr <= 2020; yr += 10) YEARS.push(yr);

  function renderYearLayer() {
    const lay = $("yearlay");
    if (!lay) return;
    lay.innerHTML = YEARS.map(
      (yr) => '<div class="vl" data-yr="' + yr + '"><b>' + yr + "</b></div>"
    ).join("");
  }

  function placeYears() {
    const lay = $("yearlay");
    if (!lay) return;
    const w = chart.getWidth();
    let unit = 0;
    try {
      const a = chart.convertToPixel({ seriesIndex: 0 }, [(1900 - X0) * YEAR_W, 0]);
      const b = chart.convertToPixel({ seriesIndex: 0 }, [(1910 - X0) * YEAR_W, 0]);
      if (a && b) unit = Math.abs(b[0] - a[0]);
    } catch (e) { unit = 0; }
    let step = 10;
    for (const cand of [10, 20, 50, 100]) {
      step = cand;
      if (unit * (cand / 10) >= 34) break;
    }
    YEARS.forEach((yr) => {
      const el = lay.querySelector('[data-yr="' + yr + '"]');
      if (!el) return;
      let p = null;
      try { p = chart.convertToPixel({ seriesIndex: 0 }, [(yr - X0) * YEAR_W, 0]); } catch (e) { p = null; }
      if (!p || !isFinite(p[0])) { el.classList.remove("on"); return; }
      el.style.left = Math.round(p[0]) + "px";
      const on = p[0] > 16 && p[0] < w - 16 && (yr - 1900) % step === 0;
      el.classList.toggle("on", on);
    });
  }

  /* ---------- 标签显示策略 ---------- */
  function shouldShowLabel(g) {
    if (state.sparse) return true;
    if (g.tier === 1) return state.zoom >= 0.9;
    if (g.tier === 2) return state.zoom >= 1.7;
    return state.zoom >= 2.5;
  }

  function labelColor(g) {
    return g.tier === 1 ? "#eef4fc" : g.tier === 2 ? "#c2cfdf" : "#93a2b6";
  }

  /* ---------- 构建节点 / 连线 ---------- */
  function buildNodes() {
    const list = visibleGenres();
    const nodes = [];

    list.forEach((g) => {
      const fam = famById.get(g.f);
      const size = g.tier === 1 ? 18 : g.tier === 2 ? 11.5 : 7.5;
      nodes.push({
        name: g.id,
        x: g._x,
        y: g._y,
        symbolSize: size,
        itemStyle: {
          color: fam.color,
          borderColor: "#0a0e16",
          borderWidth: 2,
          opacity: 1,
          shadowBlur: g.tier === 1 ? 16 : 0,
          shadowColor: hexA(fam.color, 0.55)
        },
        label: {
          show: shouldShowLabel(g),
          formatter: (p) => p.data._label || "",
          position: "right",
          distance: 7,
          color: labelColor(g),
          fontSize: g.tier === 1 ? 12.5 : 10.5,
          fontWeight: g.tier === 1 ? 700 : 400,
          textShadowColor: "rgba(4,7,12,0.95)",
          textShadowBlur: 5
        },
        _g: g,
        _label: I18N.chartName(g)
      });
    });

    return nodes;
  }

  function buildLinks() {
    const links = [];
    visibleGenres().forEach((g) => {
      (g.p || []).forEach((pid) => {
        const parent = byId.get(pid);
        if (!parent || !state.activeFams.has(parent.f)) return;
        const fam = famById.get(parent.f);
        links.push({
          source: pid,
          target: g.id,
          lineStyle: {
            color: hexA(fam.color, 0.5),
            opacity: parent.f === g.f ? 0.24 : 0.15,
            width: 1.1,
            curveness: 0.14
          },
          _c: hexA(fam.color, 0.5),
          _o: parent.f === g.f ? 0.24 : 0.15
        });
      });
    });
    return links;
  }

  /* ---------- 选项 ---------- */
  function tooltipHTML(p) {
    if (!p.data || !p.data._g) return "";
    const g = p.data._g;
    const fam = famById.get(g.f);
    const alt = I18N.altName(g);
    return (
      '<div class="tt">' +
      '<div class="tt-kicker" style="color:' + fam.color + '">' + esc(I18N.familyName(fam)) + " · " + g.y + "</div>" +
      '<div class="tt-title">' + esc(I18N.name(g)) + (alt ? "<em>" + esc(alt) + "</em>" : "") + "</div>" +
      '<div class="tt-desc">' + esc(I18N.desc(g)) + "</div>" +
      '<div class="tt-foot">' + esc(t("tooltip.foot")) + "</div>" +
      "</div>"
    );
  }

  function baseOption() {
    return {
      animation: false,
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        confine: true,
        backgroundColor: "rgba(13,18,28,0.97)",
        borderColor: "rgba(255,255,255,0.13)",
        borderWidth: 1,
        padding: [11, 13],
        textStyle: { color: "#e8eef7", fontSize: 12 },
        extraCssText: "border-radius:11px;box-shadow:0 20px 60px rgba(0,0,0,.6);max-width:310px;white-space:normal;word-break:break-word;",
        formatter: tooltipHTML
      },
      series: [
        {
          type: "graph",
          layout: "none",
          roam: true,
          draggable: false,
          symbol: "circle",
          nodeScaleRatio: 0.55,
          scaleLimit: { min: 0.45, max: 4.2 },
          zoom: state.zoom,
          center: [0, 0],
          label: {
            show: true,
            position: "right",
            distance: 7,
            formatter: (p) => p.data._label || "",
            color: "#b9c6d8",
            fontSize: 11
          },
          labelLayout: { hideOverlap: false },
          lineStyle: { opacity: 0.2, width: 1, curveness: 0.14 },
          emphasis: {
            focus: "adjacency",
            scale: 1.35,
            label: { show: true, fontSize: 12.5, color: "#ffffff", fontWeight: 600 },
            lineStyle: { opacity: 0.95, width: 2.4 },
            itemStyle: { borderColor: "#ffffff", borderWidth: 2 }
          },
          blur: {
            itemStyle: { opacity: 0.24 },
            label: { opacity: 0.1 },
            lineStyle: { opacity: 0.06 }
          },
          data: state.nodes,
          links: state.links
        }
      ]
    };
  }

  /* ---------- 视图 ---------- */
  function rebuild() {
    state.bands = computeLayout();
    state.sparse = visibleGenres().length <= 58;
    state.nodes = buildNodes();
    state.links = buildLinks();
    renderBandLayer();
    renderYearLayer();
    chart.setOption(baseOption(), true);
    fitView();
    scheduleLabels();
    restyle();
  }

  function fitView() {
    if (!state.nodes.length) return;
    const gs = state.nodes.filter((n) => n._g);
    const use = gs.length ? gs : state.nodes;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    use.forEach((n) => {
      if (n.x < minX) minX = n.x;
      if (n.x > maxX) maxX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.y > maxY) maxY = n.y;
    });
    state.zoom = 0.94;
    state.baseZoom = 1;
    state.unitRef = null;
    requestAnimationFrame(() => { state.unitRef = measureUnit(); });
    chart.setOption({
      series: [{ center: [(minX + maxX) / 2, (minY + maxY) / 2 - 20], zoom: state.zoom }]
    });
    updateZoomUI();
  }

  function centerOn(id) {
    const g = byId.get(id);
    if (!g || g._x == null) return;
    const z = Math.max(state.zoom, 2.05);
    // 右抽屉会遮住舞台右侧，把目标点推到可见区中心
    let shift = 0;
    const drawer = $("drawer");
    if (drawer && drawer.classList.contains("open")) {
      try {
        const a = chart.convertToPixel({ seriesIndex: 0 }, [0, 0]);
        const b = chart.convertToPixel({ seriesIndex: 0 }, [1000, 0]);
        const unit = Math.abs(b[0] - a[0]) / 1000;
        const baseScale = unit / (state.zoom || 1);
        shift = 216 / Math.max(baseScale * z, 0.01);
      } catch (e) { shift = 0; }
    }
    state.zoom = z;
    chart.setOption({ series: [{ center: [g._x + shift, g._y], zoom: z }] });
    resetUnitRef();
    updateZoomUI();
    scheduleLabels();
  }

  let labelTimer = null;
  function scheduleLabels() {
    syncAxes();
    clearTimeout(labelTimer);
    labelTimer = setTimeout(refreshLabels, 90);
  }

  function refreshLabels() {
    placeBands();
    placeYears();
    const measure = document.createElement("canvas").getContext("2d");
    const placed = [];
    let scale = 0.2;
    try {
      const a = chart.convertToPixel({ seriesIndex: 0 }, [0, 0]);
      const b = chart.convertToPixel({ seriesIndex: 0 }, [1000, 0]);
      if (a && b && isFinite(a[0]) && isFinite(b[0])) scale = Math.abs(b[0] - a[0]) / 1000;
    } catch (e) { /* ignore */ }

    const list = state.nodes
      .filter((n) => n._g)
      .sort((p, q) => p._g.tier - q._g.tier || p.y - q.y || p.x - q.x);

    list.forEach((n) => {
      const g = n._g;
      if (!shouldShowLabel(g) && g.id !== state.selected) { n.label.show = false; return; }
      let px, py;
      try {
        const pt = chart.convertToPixel({ seriesIndex: 0 }, [n.x, n.y]);
        px = pt[0]; py = pt[1];
      } catch (e) {
        n.label.show = true;
        return;
      }
      if (!isFinite(px) || !isFinite(py)) { n.label.show = true; return; }
      const fs = g.tier === 1 ? 12.5 : 10.5;
      measure.font = (g.tier === 1 ? "700 " : "400 ") + fs + 'px system-ui, "Segoe UI", "Microsoft YaHei", sans-serif';
      const w = measure.measureText(n._label).width;
      const box = { x: px + 8, y: py - fs * 0.62, w: w, h: fs + 4 };
      const hit = placed.some(
        (b) => !(box.x > b.x + b.w || box.x + box.w < b.x || box.y > b.y + b.h || box.y + box.h < b.y)
      );
      if (hit) { n.label.show = false; }
      else { n.label.show = true; placed.push(box); }
    });

    chart.setOption({ series: [{ data: state.nodes }] });
    state.labelScale = scale;
  }

  function updateZoomUI() {
    $("zoomLvl").textContent = Math.round(state.zoom * 100) + "%";
  }

  /* ---------- 谱系高亮 ---------- */
  function lineageOf(id) {
    const anc = new Set();
    const desc = new Set();
    (function up(x) {
      (byId.get(x).p || []).forEach((p) => {
        if (byId.has(p) && !anc.has(p)) { anc.add(p); up(p); }
      });
    })(id);
    (function down(x) {
      (children.get(x) || []).forEach((c) => {
        if (!desc.has(c)) { desc.add(c); down(c); }
      });
    })(id);
    const all = new Set([id]);
    anc.forEach((x) => all.add(x));
    desc.forEach((x) => all.add(x));
    return { anc, desc, all };
  }

  // 选中某个风格时，谱系线按方向分色：
  //   前驱（它的源头 → 它 / 源头之间）用冰蓝，后继（它 → 它的衍生）用暖金，
  //   并且只在这些线上打箭头，方向一眼可读。
  const UP_C = "#63e8ff";
  const DOWN_C = "#ffc857";

  function restyle() {
    const L = state.selected ? lineageOf(state.selected) : null;
    const key = $("linkKey");
    if (key) key.classList.toggle("on", !!state.selected);

    state.nodes.forEach((n) => {
      if (!n._g) return;
      const g = n._g;
      const isSel = state.selected === g.id;
      const inL = L ? L.all.has(g.id) : true;
      const dim = L && !inL;

      n.itemStyle.opacity = dim ? 0.13 : 1;
      n.itemStyle.borderColor = isSel ? "#ffd479" : "#0a0e16";
      n.itemStyle.borderWidth = isSel ? 3 : 2;
      n.itemStyle.shadowBlur = isSel ? 26 : g.tier === 1 ? 16 : 0;
      if (isSel) n.itemStyle.shadowColor = "rgba(255,212,121,.75)";
      else if (L && L.anc.has(g.id)) n.itemStyle.shadowColor = hexA(UP_C, 0.55);
      else if (L && L.desc.has(g.id)) n.itemStyle.shadowColor = hexA(DOWN_C, 0.5);
      else n.itemStyle.shadowColor = hexA(famById.get(g.f).color, 0.55);

      const baseColor = labelColor(g);
      n.label.color = dim ? hexA("#ffffff", 0.1) : isSel ? "#ffffff" : baseColor;
      n.label.fontWeight = isSel || g.tier === 1 ? 700 : 400;
      if (!isSel) n.label.fontSize = g.tier === 1 ? 12.5 : 10.5;
      else n.label.fontSize = 13;
    });

    state.links.forEach((l) => {
      if (!L) {
        l.lineStyle.color = l._c;
        l.lineStyle.opacity = l._o;
        l.lineStyle.width = 1.1;
        l.lineStyle.shadowBlur = 0;
        l.symbol = ["none", "none"];
        return;
      }
      const on = L.all.has(l.source) && L.all.has(l.target);
      if (!on) {
        l.lineStyle.color = l._c;
        l.lineStyle.opacity = 0.035;
        l.lineStyle.width = 0.9;
        l.lineStyle.shadowBlur = 0;
        l.symbol = ["none", "none"];
        return;
      }
      // 线指向「选中点或更上游」＝前驱；否则＝后继（含直接衍生出去的那几条）
      const up = l.target === state.selected || L.anc.has(l.target);
      const c = up ? UP_C : DOWN_C;
      const direct = l.target === state.selected || l.source === state.selected;
      l.lineStyle.color = c;
      l.lineStyle.opacity = direct ? 1 : 0.34;
      l.lineStyle.width = direct ? 2.6 : 1.15;
      l.lineStyle.shadowBlur = direct ? 12 : 0;
      l.lineStyle.shadowColor = hexA(c, 0.85);
      l.symbol = ["none", "arrow"];
      l.symbolSize = direct ? 8 : 4.5;
    });

    chart.setOption({ series: [{ data: state.nodes, links: state.links }] });
  }

  /* ---------- 选择与详情 ---------- */
  function select(id, opts) {
    opts = opts || {};
    const g = byId.get(id);
    if (!g) return;
    if (!state.activeFams.has(g.f)) {
      state.activeFams = new Set(families.map((f) => f.id));
      buildFamList();
      state.selected = null;
      rebuild();
    }
    state.selected = id;
    restyle();
    openDrawer(g);
    closeSidebar();
    scheduleLabels();
    if (opts.center) centerOn(id);
    history.replaceState(null, "", location.pathname + location.search + "#" + id);
  }

  function clearSelection() {
    if (!state.selected) return;
    state.selected = null;
    restyle();
    closeDrawer();
    history.replaceState(null, "", location.pathname + location.search);
  }

  const drawer = $("drawer");
  const stageCover = $("stageCover");

  function closeDrawer() {
    drawer.classList.remove("open");
    drawer.classList.remove("has-cover");
    drawer.style.borderLeftColor = "";
    if (stageCover) stageCover.classList.remove("on");
  }

  function openDrawer(g) {
    const fam = famById.get(g.f);
    const parents = (g.p || []).map((id) => byId.get(id)).filter(Boolean);
    const kids = (children.get(g.id) || []).map((id) => byId.get(id)).filter(Boolean).sort((a, b) => a.y - b.y);

    const chips = (arr) =>
      arr.length
        ? arr
            .map(
              (x) =>
                '<span class="chip link" data-id="' + x.id + '">' + esc(I18N.name(x)) +
                (I18N.altName(x) ? " · " + esc(I18N.altName(x)) : "") + "</span>"
            )
            .join("")
        : '<span class="chip" style="opacity:.45">—</span>';

    const pl = playlistOf(g);
    const genreYt = ytGenrePlaylistOf(g.id);
    const famYt = ytPlaylistOf(g.f);

    // 优先级：这个风格自己的歌单 > 家族整张歌单 > 按这 5–8 首临时拼一张
    const ownYt = genreYt || famYt;
    const ytUrl = ownYt ? ownYt.url : ytPlaylistUrl(pl);
    const ytTip = genreYt
      ? t("drawer.ytTipOwn", { title: genreYt.title, n: genreYt.count })
      : famYt
        ? t("drawer.ytTipFam", { n: famYt.count })
        : t("drawer.ytTipTemp", { n: pl.length });
    const ytNote = genreYt
      ? t("drawer.ytNoteOwn", { title: genreYt.title, n: genreYt.count, span: genreYt.span ? " · " + genreYt.span : "" })
      : famYt
        ? t("drawer.ytNoteFam", { title: famYt.title, n: famYt.count, span: famYt.span })
        : t("drawer.ytNoteTemp", { n: pl.length });

    const tracks = pl
      .map(
        (t, i) =>
          '<li class="track" data-idx="' + i + '" data-title="' + esc(t[0]) + '" data-artist="' + esc(t[1]) + '" data-key="' + esc(t[1] + "|" + t[0]) + '">' +
          '<span class="idx"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg><span class="eq"><i></i><i></i><i></i></span></span>' +
          '<span class="track-info"><span class="track-title">' + esc(t[0]) + '</span>' +
          '<span class="track-sub">' + esc(t[1]) + "</span></span>" +
          '<span class="track-year">' + (t[2] || "") + "</span></li>"
      )
      .join("");

    const q = encodeURIComponent(g.n + " " + g.zh);
    const name = I18N.name(g);
    const alt = I18N.altName(g);
    const showAlt = alt && name.trim().toLowerCase() !== alt.trim().toLowerCase();

    drawer.innerHTML =
      '<div class="dw-cover" id="dwCover" aria-hidden="true"></div>' +
      '<div class="drawer-head">' +
      '<button class="drawer-close" id="drawerClose" aria-label="' + esc(t("aria.closeDrawer")) + '">×</button>' +
      '<div class="dh-row">' +
      '<div class="dh-art off" id="dwArt" aria-hidden="true"></div>' +
      '<div class="dh-txt">' +
      '<div class="kicker" style="color:' + fam.color + '">' + esc(I18N.familyName(fam)) + " · " + esc(name) + "</div>" +
      "<h2>" + esc(name) + (showAlt ? "<em>" + esc(alt) + "</em>" : "") + "</h2>" +
      "</div></div>" +
      '<div class="meta">' +
      "<span>◷ " + esc(t("drawer.since", { year: g.y })) + "</span>" +
      "<span>◉ " + esc(I18N.origin(g) || "—") + "</span>" +
      (g.bpm && g.bpm !== "—" ? "<span>♪ " + esc(g.bpm) + " BPM</span>" : "") +
      "</div></div>" +
      '<div class="drawer-body">' +
      '<p class="desc">' + esc(I18N.desc(g)) + "</p>" +
      '<div class="stat-row">' +
      '<div class="stat"><b>' + parents.length + "</b><span>" + esc(t("drawer.parents")) + "</span></div>" +
      '<div class="stat"><b>' + kids.length + "</b><span>" + esc(t("drawer.kids")) + "</span></div>" +
      '<div class="stat"><b>' + pl.length + "</b><span>" + esc(t("drawer.tracks")) + "</span></div>" +
      "</div>" +
      "<h3>" + esc(t("drawer.traits")) + "</h3><div class='chips traits'>" +
      I18N.traits(g).map((c) => '<span class="chip">' + esc(c) + "</span>").join("") +
      "</div>" +
      "<h3>" + esc(t("drawer.parents")) + " <small>" + esc(t("drawer.jump")) + "</small></h3><div class='chips'>" + chips(parents) + "</div>" +
      "<h3>" + esc(t("drawer.kids")) + " <small>" + esc(t("drawer.jump")) + "</small></h3><div class='chips'>" + chips(kids) + "</div>" +
      "<h3>" + esc(t("drawer.artists")) + "</h3><div class='artists'>" +
      (g.ar || []).map((a) => '<span class="artist">' + esc(a) + "</span>").join("") +
      "</div>" +
      "<h3>" + esc(t("drawer.playlist")) + " <small>" + esc(t("drawer.playlistSub", { n: pl.length })) + "</small></h3>" +
      '<div class="pl-bar">' +
      '<button class="pl-btn primary" id="plPlayAll">' + esc(t("drawer.playAll")) + "</button>" +
      '<a class="pl-btn" href="' + esc(ytUrl) + '" target="_blank" rel="noopener" title="' + esc(ytTip) + '">' + esc(t("drawer.ytLink")) + "</a>" +
      '<button class="pl-btn" id="plCopy">' + esc(t("drawer.copy")) + "</button>" +
      "</div>" +
      "<ol class='tracks'>" + tracks + "</ol>" +
      '<div class="pl-note">' + esc(ytNote) + "</div>" +
      '<div class="dw-links">' +
      '<a href="https://www.youtube.com/results?search_query=' + q + '" target="_blank" rel="noopener">' + esc(t("drawer.ytSearch")) + "</a>" +
      '<a href="https://en.wikipedia.org/w/index.php?search=' + encodeURIComponent(I18N.chartName(g)) + '" target="_blank" rel="noopener">' + esc(t("drawer.wikipedia")) + "</a>" +
      "</div></div>";

    drawer.classList.add("open");
    drawer.classList.remove("has-cover");
    drawer.style.borderLeftColor = hexA(fam.color, 0.45);
    if (stageCover) stageCover.classList.remove("on");
    drawer.scrollTop = 0;
    const body = drawer.querySelector(".drawer-body");
    if (body) body.scrollTop = 0;
    paintCover(g);

    $("drawerClose").addEventListener("click", () => clearSelection());
    drawer.querySelectorAll(".chip.link").forEach((el) => {
      el.addEventListener("click", () => select(el.dataset.id, { center: true }));
    });
    drawer.querySelectorAll(".track").forEach((el) => {
      el.addEventListener("click", () => {
        stopPreviewQueue();
        playTrack(el.dataset.title, el.dataset.artist, el.dataset.key);
      });
    });
    const playAll = drawer.querySelector("#plPlayAll");
    if (playAll) playAll.addEventListener("click", () => playAllPreviews(pl, 0));
    const copyBtn = drawer.querySelector("#plCopy");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        copyText(ytUrl).then((ok) => toast(ok ? t("toast.copied") : t("toast.copyFail")));
      });
    }
  }

  /* ---------- 封面：选中风格时把抽屉背景换成它的代表作封面 ---------- */
  const ART_LS = "mg:art:";

  async function paintCover(g) {
    const cover = drawer.querySelector("#dwCover");
    const art = drawer.querySelector("#dwArt");
    if (!cover || !art) return;
    const pl = playlistOf(g);
    const t = pl && pl[0];
    if (!t) return;

    const apply = (url) => {
      if (!url) return;
      if (state.selected !== g.id) return; // 已经切到别的风格了，别覆盖
      const css = 'url("' + url + '")';
      cover.style.backgroundImage = css;
      art.style.backgroundImage = css;
      art.classList.remove("off");
      drawer.classList.add("has-cover");
      if (stageCover) {
        stageCover.style.backgroundImage = css;
        stageCover.classList.add("on");
      }
    };

    let cached = null;
    try { cached = localStorage.getItem(ART_LS + g.id); } catch (e) {}
    if (cached) { apply(cached); return; }

    const url = await findArtwork(t[0], t[1]);
    if (url) { try { localStorage.setItem(ART_LS + g.id, url); } catch (e) {} }
    apply(url);
  }

  /* ---------- 播放器 ---------- */
  const audio = $("audio");
  const player = $("player");
  const cache = new Map();

  function fmtTime(s) {
    if (!isFinite(s)) return "0:30";
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function jsonp(url) {
    return new Promise((resolve, reject) => {
      const cb = "__itcb_" + Math.random().toString(36).slice(2);
      const s = document.createElement("script");
      const timer = setTimeout(() => { cleanup(); reject(new Error("timeout")); }, 8000);
      function cleanup() {
        clearTimeout(timer);
        delete window[cb];
        if (s.parentNode) s.parentNode.removeChild(s);
      }
      window[cb] = (data) => { cleanup(); resolve(data); };
      s.onerror = () => { cleanup(); reject(new Error("jsonp")); };
      s.src = url + (url.indexOf("?") >= 0 ? "&" : "?") + "callback=" + cb;
      document.head.appendChild(s);
    });
  }

  let jsonpOnly = location.protocol === "file:";

  // iTunes Search API 的唯一入口：同一组关键词只请求一次，试听与封面共用结果。
  const termCache = new Map();
  async function searchItunes(term) {
    if (termCache.has(term)) return termCache.get(term);
    const url = "https://itunes.apple.com/search?term=" + encodeURIComponent(term) + "&entity=song&limit=12&country=US";
    let data = null;
    if (!jsonpOnly) {
      try {
        const r = await fetch(url);
        data = await r.json();
      } catch (e) {
        jsonpOnly = true;
      }
    }
    if (!data) {
      try { data = await jsonp(url); } catch (e2) { data = null; }
    }
    const results = (data && data.results) || [];
    termCache.set(term, results);
    return results;
  }

  // 按艺人匹配度挑一条：优先艺人对得上的，否则第一条。
  function pickBest(results, artist) {
    if (!results.length) return null;
    const first = String(artist || "").toLowerCase().split(" ")[0];
    return results.find((r) => r.artistName && first && r.artistName.toLowerCase().indexOf(first) >= 0) || results[0];
  }

  // 页面里只保留一条试听通路：Apple Music（iTunes Search API）给的 30 秒片段，
  // 免登录、免 key、CORS 全开；直接用 <audio> 播放，不需要任何第三方播放器。
  async function findPreview(title, artist) {
    const key = artist + "|" + title;
    if (cache.has(key)) return cache.get(key);
    const terms = [artist + " " + title, title];
    for (const term of terms) {
      const all = await searchItunes(term);
      const withPrev = all.filter((r) => r.previewUrl);
      if (withPrev.length) {
        const best = pickBest(withPrev, artist);
        cache.set(key, best);
        return best;
      }
    }
    cache.set(key, null);
    return null;
  }

  // 风格封面：用它代表作（歌单第一首）的专辑封面，iTunes 的 100×100 换成 600×600。
  const artCache = new Map();
  function bigArtwork(r) {
    const u = r && r.artworkUrl100;
    return u ? u.replace(/\/\d+x\d+bb\./, "/600x600bb.") : null;
  }
  async function findArtwork(title, artist) {
    const key = artist + "|" + title;
    if (artCache.has(key)) return artCache.get(key);
    let url = null;
    for (const term of [artist + " " + title, title]) {
      const all = await searchItunes(term);
      const withArt = all.filter((r) => r.artworkUrl100);
      if (withArt.length) {
        url = bigArtwork(pickBest(withArt, artist));
        if (url) break;
      }
    }
    artCache.set(key, url);
    return url;
  }

  // ---------- YouTube 歌单链接 ----------
  // 页面里不再嵌播放器：只用 MG_YT_PLAYLISTS 里的家族整张歌单做跳转，
  // 没有整张歌单的家族退回 watch_videos 临时拼一张。
  const VID_DB = (window.MG_VIDEOS || {});
  const VID_ARTIST_INDEX = {};

  // 艺人名的保守归一化，只用来给「没在索引里」的曲目兜底匹配
  function normArtist(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/^the\s+/, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]/g, "");
  }

  function normTitle(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  (function buildVideoIndex() {
    const byArtist = {};
    for (const key of Object.keys(VID_DB)) {
      const parts = key.split("|");
      if (parts.length < 2) continue;
      const artist = parts[0];
      const na = normArtist(artist);
      if (!na) continue;
      (byArtist[na] = byArtist[na] || []).push([key, parts.slice(1).join("|")]);
    }
    Object.keys(byArtist).forEach((na) => {
      VID_ARTIST_INDEX[na] = byArtist[na];
    });
  })();

  function youtubeSearchUrl(title, artist) {
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent(title + " " + artist);
  }

  function findYouTube(title, artist) {
    const key = artist + "|" + title;
    if (VID_DB[key]) return { id: VID_DB[key], exact: true };
    // 兜底 1：同一艺人、曲名归一化后相同（处理撇号 / 大小写 / 括号差异）
    const list = VID_ARTIST_INDEX[normArtist(artist)];
    if (list) {
      const nt = normTitle(title);
      for (const [k, t] of list) {
        if (normTitle(t) === nt) return { id: VID_DB[k], exact: true };
      }
    }
    // 兜底 2：艺人名前缀互相包含（"Bob Marley" vs "Bob Marley & The Wailers"）
    const na = normArtist(artist);
    if (na.length >= 4) {
      const nt = normTitle(title);
      for (const ka of Object.keys(VID_ARTIST_INDEX)) {
        if (ka.length < 4) continue;
        if (ka.indexOf(na) === 0 || na.indexOf(ka) === 0) {
          for (const [k, t] of VID_ARTIST_INDEX[ka]) {
            if (normTitle(t) === nt) return { id: VID_DB[k], exact: false };
          }
        }
      }
    }
    return null;
  }

  /* ---------- 歌单 ---------- */
  const PLAYLISTS = window.MG_PLAYLISTS || {};

  // 每个风格的歌单：优先用整理好的 5–8 首；缺数据时退回原有代表作
  function playlistOf(g) {
    const pl = PLAYLISTS[g.id];
    if (pl && pl.length) return pl;
    return (g.tr || []).map((t) => [t[0], t[1], t[2]]);
  }

  function ytIdsOf(tracks) {
    const ids = [];
    const seen = new Set();
    for (const t of tracks) {
      const hit = findYouTube(t[0], t[1]);
      if (hit && !seen.has(hit.id)) {
        seen.add(hit.id);
        ids.push(hit.id);
      }
    }
    return ids;
  }

  // YouTube 的 watch_videos 免登录就能生成一张临时歌单（上限 50 个视频）
  function ytPlaylistUrl(tracks) {
    const ids = ytIdsOf(tracks);
    if (ids.length >= 2) return "https://www.youtube.com/watch_videos?video_ids=" + ids.slice(0, 50).join(",");
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent(tracks.map((t) => t[0] + " " + t[1]).join(" "));
  }

  // 家族级的整张歌单：js/yt-playlists.js 里的 window.MG_YT_PLAYLISTS，
  // 由插件通过 YouTube Data API 建好（每张 30 首），没有的家族返回 null。
  const YT_PLAYLISTS = window.MG_YT_PLAYLISTS || {};

  function ytPlaylistOf(familyId) {
    const p = YT_PLAYLISTS[familyId];
    if (!p || !p.id) return null;
    return {
      id: p.id,
      url: "https://www.youtube.com/playlist?list=" + p.id,
      title: p.title || t("yt.fallbackTitle"),
      count: p.count || 0,
      span: p.span || ""
    };
  }

  // 风格级的单张歌单：js/yt-genre-playlists.js 里的 window.MG_YT_GENRE_PLAYLISTS，
  // 每个风格一张 5–8 首（批量建单还在进行中，没建过的风格返回 null）。
  const YT_GENRE_PLAYLISTS = window.MG_YT_GENRE_PLAYLISTS || {};

  function ytGenrePlaylistOf(genreId) {
    const p = YT_GENRE_PLAYLISTS[genreId];
    if (!p || !p.id) return null;
    return {
      id: p.id,
      url: "https://www.youtube.com/playlist?list=" + p.id,
      title: p.title || t("yt.fallbackTitle"),
      count: p.count || 0,
      total: p.total || p.count || 0,
      span: p.span || "",
      complete: (p.count || 0) >= (p.total || 0)
    };
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(() => true, () => false);
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return Promise.resolve(ok);
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  function markPlaying(key) {
    state.playingKey = key;
    currentTrack = key
      ? { title: $("pTitle").textContent, artist: ($("pSub").textContent || "").split(" · ")[0] }
      : null;
    drawer.querySelectorAll(".track").forEach((el) => {
      el.classList.toggle("playing", el.dataset.key === key);
    });
  }

  let currentTrack = null;

  // 试听队列：「连播 30 秒」按顺序把整张歌单的 Apple Music 片段放完
  let previewQueue = null;

  function stopPreviewQueue() {
    previewQueue = null;
  }

  function playAllPreviews(tracks, start) {
    if (!tracks || !tracks.length) return;
    previewQueue = { list: tracks.slice(), pos: Math.max(0, Math.min(tracks.length - 1, start || 0)) };
    previewStep();
  }

  function previewNext() {
    if (!previewQueue) return;
    if (previewQueue.pos + 1 < previewQueue.list.length) {
      previewQueue.pos++;
      previewStep();
    } else {
      previewQueue = null;
      toast(t("toast.queueDone"));
    }
  }

  async function previewStep() {
    const q = previewQueue;
    if (!q) return;
    const t = q.list[q.pos];
    if (!t) return;
    const ok = await playTrack(t[0], t[1], t[1] + "|" + t[0]);
    // 这一首没有试听片段：直接跳到下一首，别让连播卡在这儿
    if (!ok && previewQueue === q) previewNext();
  }

  async function playTrack(title, artist, key) {
    player.classList.add("show");
    $("pTitle").textContent = title;
    $("pSub").textContent = t("player.finding", { artist: artist });
    $("pCur").textContent = "0:00";
    $("pDur").textContent = "0:30";
    $("pSeek").value = 0;
    setPlayIcon(false);
    markPlaying(key);
    currentTrack = { title: title, artist: artist };

    const hit = await findPreview(title, artist);
    if (!hit) {
      $("pSub").textContent = t("player.noPreview");
      toast(t("toast.noPreview"));
      markPlaying(null);
      return false;
    }

    $("pSub").textContent =
      hit.artistName +
      (hit.collectionName && hit.collectionName !== title ? " · " + hit.collectionName : " · " + t("player.apple"));
    audio.src = hit.previewUrl;
    audio.currentTime = 0;
    try {
      await audio.play();
      setPlayIcon(true);
    } catch (e) {
      setPlayIcon(false);
      toast(t("toast.blocked"));
    }
    return true;
  }

  function setPlayIcon(playing) {
    $("pIcon").innerHTML = playing
      ? '<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
  }

  audio.addEventListener("timeupdate", () => {
    const d = audio.duration || 30;
    $("pCur").textContent = fmtTime(audio.currentTime);
    $("pDur").textContent = fmtTime(d);
    $("pSeek").value = d ? (audio.currentTime / d) * 100 : 0;
  });
  audio.addEventListener("ended", () => {
    setPlayIcon(false);
    markPlaying(null);
    previewNext();
  });
  audio.addEventListener("error", () => {
    $("pSub").textContent = t("player.failed");
    setPlayIcon(false);
    // 连播时某一首加载失败就跳过去，不打断整张
    if (previewQueue) previewNext();
    else toast(t("toast.previewFail"));
  });

  $("pToggle").addEventListener("click", () => {
    if (!audio.src) return;
    if (audio.paused) { audio.play(); setPlayIcon(true); }
    else { audio.pause(); setPlayIcon(false); }
  });
  $("pSeek").addEventListener("input", (e) => {
    if (audio.duration) audio.currentTime = (Number(e.target.value) / 100) * audio.duration;
  });
  $("pClose").addEventListener("click", () => {
    audio.pause();
    audio.removeAttribute("src");
    player.classList.remove("show");
    setPlayIcon(false);
    markPlaying(null);
    stopPreviewQueue();
    currentTrack = null;
  });

  let toastTimer = null;
  function toast(msg) {
    const el = $("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
  }

  function closeSidebar() {
    const sb = $("sidebar");
    if (sb) sb.classList.remove("open");
  }

  /* ---------- 侧栏 ---------- */
  function buildFamList() {
    const counts = new Map(families.map((f) => [f.id, 0]));
    genres.forEach((g) => counts.set(g.f, (counts.get(g.f) || 0) + 1));
    const solo = state.activeFams.size === 1 ? [...state.activeFams][0] : null;

    $("famList").innerHTML = families
      .map(
        (f) =>
          '<div class="fam' + (solo === f.id ? " active" : "") + '" data-fam="' + f.id + '">' +
          '<span class="dot" style="background:' + f.color + ";color:" + f.color + '"></span>' +
          '<span class="nm">' + esc(I18N.familyName(f)) + "</span>" +
          '<span class="ct">' + counts.get(f.id) + "</span></div>"
      )
      .join("");

    $("famList").querySelectorAll(".fam").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.fam;
        const isSolo = state.activeFams.size === 1 && state.activeFams.has(id);
        state.activeFams = isSolo ? new Set(families.map((f) => f.id)) : new Set([id]);
        state.selected = null;
        closeDrawer();
        closeSidebar();
        buildFamList();
        rebuild();
      });
    });
  }

  $("allBtn").addEventListener("click", () => {
    state.activeFams = new Set(families.map((f) => f.id));
    state.selected = null;
    closeDrawer();
    closeSidebar();
    buildFamList();
    rebuild();
  });

  /* ---------- 歌单总览 ---------- */
  const plPanel = $("plPanel");
  let plBuilt = false;
  let plFamFilter = "";
  let plQuery = "";

  function renderPlFams() {
    const counts = new Map(families.map((f) => [f.id, 0]));
    genres.forEach((g) => counts.set(g.f, (counts.get(g.f) || 0) + 1));
    const items = [{ id: "", name: t("pl.all"), color: "#93a3ba", n: genres.length }].concat(
      families.map((f) => ({ id: f.id, name: I18N.familyName(f), color: f.color, n: counts.get(f.id) || 0 }))
    );
    $("plFams").innerHTML = items
      .map(
        (f) =>
          '<button class="pl-fam' + (plFamFilter === f.id ? " on" : "") + '" data-fam="' + f.id + '">' +
          '<span class="dot" style="background:' + f.color + '"></span>' +
          '<span class="nm">' + esc(f.name) + "</span><b>" + f.n + "</b></button>"
      )
      .join("");
    $("plFams").querySelectorAll(".pl-fam").forEach((el) => {
      el.addEventListener("click", () => {
        plFamFilter = el.dataset.fam;
        renderPlFams();
        renderPlGrid();
      });
    });
  }

  function renderPlGrid() {
    const needle = plQuery.trim().toLowerCase();
    const order = [];
    const byFam = new Map();
    for (const g of genres) {
      if (plFamFilter && g.f !== plFamFilter) continue;
      if (needle && !I18N.aliases(g).some((s) => s.indexOf(needle) >= 0)) continue;
      if (!byFam.has(g.f)) {
        byFam.set(g.f, []);
        order.push(g.f);
      }
      byFam.get(g.f).push(g);
    }
    if (!order.length) {
      $("plGrid").innerHTML = '<div class="pl-empty">' + esc(t("pl.empty")) + "</div>";
      return;
    }
    $("plGrid").innerHTML = order
      .map((fid) => {
        const f = famById.get(fid);
        const list = byFam.get(fid).slice().sort((a, b) => a.y - b.y);
        const cards = list
          .map((g) => {
            const pl = playlistOf(g);
            const own = ytGenrePlaylistOf(g.id);
            const yt = own ? own.url : ytPlaylistUrl(pl);
            // 卡片副标题：去重后的前 3 位艺人（同一风格允许同艺人 2 首，这里不重复显示）
            const artists = [];
            for (const x of pl) {
              const a = (x[1] || "").trim();
              if (a && artists.indexOf(a) < 0) artists.push(a);
              if (artists.length >= 3) break;
            }
            const names = artists.map(esc).join(" · ");
            return (
              '<article class="pl-card" data-id="' + g.id + '">' +
              '<div class="plc-zh">' + esc(I18N.name(g)) + "</div>" +
              '<div class="plc-en">' + esc(I18N.altName(g) || I18N.chartName(g)) + " · " + g.y + "</div>" +
              '<div class="plc-sub">' + esc(t("pl.tracks", { n: pl.length })) + " · " + names + (pl.length > 3 ? esc(t("pl.etc")) : "") + "</div>" +
              (own
                ? '<a class="plc-yt own" href="' + esc(yt) + '" target="_blank" rel="noopener" title="' + esc(t("pl.ytOwnTitle", { n: own.count })) + '">' + esc(t("pl.ytLink")) + "</a>"
                : '<a class="plc-yt" href="' + esc(yt) + '" target="_blank" rel="noopener" title="' + esc(t("pl.ytTempTitle")) + '">' + esc(t("pl.ytLink")) + "</a>") +
              "</article>"
            );
          })
          .join("");
        const famYt = ytPlaylistOf(fid);
        return (
          '<div class="pl-group"><div class="pl-ghead"><span class="dot" style="background:' + f.color + '"></span>' +
          esc(I18N.familyName(f)) + "<b>" + list.length + "</b>" +
          (famYt
            ? '<a class="pl-gyt" href="' + esc(famYt.url) + '" target="_blank" rel="noopener" title="' + esc(famYt.title) + '">' + esc(t("pl.groupYt", { n: famYt.count })) + "</a>"
            : "") +
          "</div><div class='pl-cards'>" + cards + "</div></div>"
        );
      })
      .join("");
    $("plGrid").querySelectorAll(".pl-card").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.closest(".plc-yt")) return;
        closePlPanel();
        select(el.dataset.id, { center: true });
      });
    });
  }

  function openPlPanel() {
    if (!plBuilt) {
      plBuilt = true;
      renderPlFams();
    }
    renderPlGrid();
    plPanel.classList.add("open");
    setTimeout(() => { const s = $("plSearch"); if (s) s.focus(); }, 80);
  }

  // 副标题里带上「已经建了多少张风格歌单」，让批量建单的进度可见
  function renderPlSub() {
    const built = Object.keys(YT_GENRE_PLAYLISTS).filter((id) => YT_GENRE_PLAYLISTS[id] && YT_GENRE_PLAYLISTS[id].id).length;
    const el = $("plSub");
    if (!el) return;
    el.textContent = built > 0
      ? t("pl.subBuilt", { built: built, total: genres.length })
      : t("pl.subDefault");
  }
  renderPlSub();

  function closePlPanel() {
    plPanel.classList.remove("open");
  }

  $("plBtn").addEventListener("click", () => (plPanel.classList.contains("open") ? closePlPanel() : openPlPanel()));
  $("plClose").addEventListener("click", closePlPanel);
  $("plSearch").addEventListener("input", (e) => {
    plQuery = e.target.value;
    renderPlGrid();
  });

  /* ---------- 搜索 ---------- */
  const q = $("q");
  const qpop = $("qpop");
  let qi = -1;
  let qhits = [];

  function searchHits(text) {
    const needle = text.trim().toLowerCase();
    if (!needle) return [];
    return genres
      .map((g) => {
        let score = 0;
        for (const n of I18N.aliases(g)) {
          if (n === needle) { score = 100; break; }
          if (n.indexOf(needle) === 0) score = Math.max(score, 80);
          else if (n.indexOf(needle) >= 0) score = Math.max(score, 50);
        }
        return { g, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || a.g.y - b.g.y)
      .slice(0, 9)
      .map((x) => x.g);
  }

  function renderSearch() {
    qhits = searchHits(q.value);
    qi = -1;
    if (!q.value.trim()) { qpop.classList.remove("show"); return; }
    if (!qhits.length) {
      qpop.innerHTML = '<div class="search-empty">' + esc(t("search.empty")) + "</div>";
      qpop.classList.add("show");
      return;
    }
    qpop.innerHTML = qhits
      .map((g, i) => {
        const f = famById.get(g.f);
        return (
          '<div class="search-item' + (i === qi ? " sel" : "") + '" data-id="' + g.id + '">' +
          '<span class="dot" style="background:' + f.color + '"></span>' +
          '<span class="nm">' + esc(I18N.name(g)) + "</span>" +
          '<span class="en">' + esc(I18N.altName(g) || I18N.chartName(g)) + " · " + g.y + "</span></div>"
        );
      })
      .join("");
    qpop.classList.add("show");
  }

  q.addEventListener("input", renderSearch);
  q.addEventListener("focus", renderSearch);
  q.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!qhits.length) return;
      qi = (qi + (e.key === "ArrowDown" ? 1 : -1) + qhits.length) % qhits.length;
      qpop.querySelectorAll(".search-item").forEach((el, i) => el.classList.toggle("sel", i === qi));
    } else if (e.key === "Enter") {
      const g = qhits[qi >= 0 ? qi : 0];
      if (g) { qpop.classList.remove("show"); q.blur(); select(g.id, { center: true }); }
    } else if (e.key === "Escape") {
      qpop.classList.remove("show"); q.blur();
    }
  });
  qpop.addEventListener("mousedown", (e) => {
    const item = e.target.closest(".search-item");
    if (!item) return;
    e.preventDefault();
    qpop.classList.remove("show");
    q.blur();
    select(item.dataset.id, { center: true });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search")) qpop.classList.remove("show");
  });

  /* ---------- 图表事件 ---------- */
  chart.on("click", (p) => {
    if (p.dataType === "node" && p.data && p.data._g) select(p.data._g.id, { center: false });
  });

  chart.getZr().on("click", (e) => {
    const pt = [e.offsetX, e.offsetY];
    let hit = false;
    for (const n of state.nodes) {
      if (!n._g) continue;
      let p = null;
      try { p = chart.convertToPixel({ seriesIndex: 0 }, [n.x, n.y]); } catch (err) { p = null; }
      if (!p) continue;
      if (Math.abs(p[0] - pt[0]) < 14 && Math.abs(p[1] - pt[1]) < 14) { hit = true; break; }
    }
    if (!hit) { clearSelection(); closeSidebar(); }
  });

  let lastLabelKey = "";
  let axisRaf = 0;
  // 当前「像素 / 数据单位」，用于反推累计缩放（比 getOption() 便宜得多）
  function measureUnit() {
    try {
      const a = chart.convertToPixel({ seriesIndex: 0 }, [0, 0]);
      const b = chart.convertToPixel({ seriesIndex: 0 }, [1000, 0]);
      const u = Math.abs(b[0] - a[0]) / 1000;
      return u > 0 && isFinite(u) ? u : 0;
    } catch (e) { return 0; }
  }
  function resetUnitRef() {
    state.unitRef = null;
    requestAnimationFrame(() => { state.unitRef = measureUnit(); });
  }
  // 轴（年代标尺 + 家族胶囊）跟手：每一帧都按当前坐标变换重排，不等标签分级
  function syncAxes() {
    if (axisRaf) return;
    axisRaf = requestAnimationFrame(() => {
      axisRaf = 0;
      placeBands();
      placeYears();
    });
  }

  chart.on("graphRoam", (e) => {
    // 累计缩放用相邻两次手势的像素比例相乘，避免每次 getOption() 克隆整份 option
    const u = measureUnit();
    if (state.unitRef == null) state.unitRef = u;
    else if (u > 0 && state.unitRef > 0) {
      const next = state.zoom * (u / state.unitRef);
      if (isFinite(next) && next > 0) state.zoom = Math.min(4.2, Math.max(0.45, next));
      state.unitRef = u;
    }
    const z = state.zoom;
    updateZoomUI();
    syncAxes();
    const key = [0.9 <= z, 1.7 <= z, 2.5 <= z].join(",");
    if (key !== lastLabelKey) {
      lastLabelKey = key;
      refreshLabels();
    }
  });

  window.addEventListener("resize", () => {
    chart.resize();
    fitView();
    syncAxes();
    scheduleLabels();
  });

  /* ---------- 控件 ---------- */
  $("fitBtn").addEventListener("click", () => { fitView(); scheduleLabels(); });
  $("randBtn").addEventListener("click", () => {
    const list = visibleGenres();
    if (!list.length) return;
    const g = list[Math.floor(Math.random() * list.length)];
    select(g.id, { center: true });
  });
  $("zoomIn").addEventListener("click", () => {
    state.zoom = Math.min(4.2, state.zoom * 1.3);
    chart.setOption({ series: [{ zoom: state.zoom }] });
    resetUnitRef();
    updateZoomUI();
    scheduleLabels();
  });
  $("zoomOut").addEventListener("click", () => {
    state.zoom = Math.max(0.45, state.zoom / 1.3);
    chart.setOption({ series: [{ zoom: state.zoom }] });
    resetUnitRef();
    updateZoomUI();
    scheduleLabels();
  });
  $("sideToggle").addEventListener("click", () => $("sidebar").classList.toggle("open"));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (plPanel.classList.contains("open")) {
        closePlPanel();
        return;
      }
      closeDrawer();
      if (state.selected) clearSelection();
    }
    if (e.key === "/" && document.activeElement !== q) {
      e.preventDefault();
      q.focus();
    }
  });

  /* ---------- 切换语言：只重渲文案，不动缩放与位置 ---------- */
  function relabel() {
    renderStat();
    buildFamList();
    renderBandLayer();
    state.nodes.forEach((n) => { if (n._g) n._label = I18N.chartName(n._g); });
    chart.setOption({ series: [{ data: state.nodes }] });
    scheduleLabels();
    renderPlSub();
    if (state.selected && byId.has(state.selected) && drawer.classList.contains("open")) {
      openDrawer(byId.get(state.selected));
    }
    if (plPanel.classList.contains("open")) {
      plBuilt = true;
      renderPlFams();
      renderPlGrid();
    }
    if (q.value.trim()) renderSearch();
  }
  I18N.onChange(relabel);

  /* ---------- 启动 ---------- */
  buildFamList();
  rebuild();

  const plBtnCount = $("plBtnCount");
  if (plBtnCount) plBtnCount.textContent = Object.keys(PLAYLISTS).length;

  const bootEl = document.getElementById("boot");
  if (bootEl) requestAnimationFrame(() => setTimeout(() => bootEl.classList.add("hide"), 60));

  const hash = location.hash.replace("#", "");
  if (hash && byId.has(hash)) {
    setTimeout(() => select(hash, { center: true }), 260);
  }
})();
