// 风格级 YouTube 歌单：每个风格一张 5–8 首的代表作歌单（按年代升序）。
// 本文件由 .tools/yt-genre-sync.mjs 自动生成，请不要手改。
// 生成时间：2026-11-19T03:17:30.144Z · 已建成 4 / 352 张。
// 结构: window.MG_YT_GENRE_PLAYLISTS[genreId] = { id, title, count, total, span }
window.MG_YT_GENRE_PLAYLISTS = {
  "blues": { id: "PLTDj1oHxLbIQ", title: "谱系 · 布鲁斯 Blues（根源 · 1895 起）", count: 6, total: 6, span: "1936–1969" },
  "folk": { id: "PLXumtTvdmfk8", title: "谱系 · 民谣 Folk（根源 · 1900 起）", count: 6, total: 6, span: "1944–1964" },
  "gospel": { id: "PLBAAHBciVM54", title: "谱系 · 福音音乐 Gospel（根源 · 1900 起）", count: 6, total: 6, span: "1944–1972" },
  "delta-blues": { id: "PLbA4fEJpWJpw", title: "谱系 · 三角洲布鲁斯 Delta Blues（根源 · 1920 起）", count: 6, total: 6, span: "1929–1937" }
};

// 给定风格 id，返回可直接用的链接信息；没有建过就返回 null。
window.MG_YT_GENRE_PLAYLIST = function (genreId) {
  const p = window.MG_YT_GENRE_PLAYLISTS[genreId];
  if (!p || !p.id) return null;
  return {
    id: p.id,
    url: "https://www.youtube.com/playlist?list=" + p.id,
    title: p.title,
    count: p.count,
    total: p.total,
    span: p.span,
    complete: p.count >= p.total
  };
};
