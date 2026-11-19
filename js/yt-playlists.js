// 家族级 YouTube 歌单：每个家族一张 30 首的整张歌单，按年代升序。
// 由 youtube-playlist-plugin 通过 YouTube Data API 创建，链接形如
// https://www.youtube.com/playlist?list=<id>
// 结构: window.MG_YT_PLAYLISTS[familyId] = { id, title, count, span }
window.MG_YT_PLAYLISTS = {
  roots: {
    id: "PLNtC24x8iadY",
    title: "谱系 · 根源 Roots｜福音 · 布鲁斯 · 民谣",
    count: 30,
    span: "1927–1955"
  },
  rock: {
    id: "PLRbh8bgTkTB0",
    title: "谱系 · 摇滚 Rock｜从 Rock'n'Roll 到迷幻",
    count: 30,
    span: "1954–1967"
  },
  soul: {
    id: "PLSO-NG8PUOWI",
    title: "谱系 · 灵魂 Soul｜福音驱动的节奏",
    count: 30,
    span: "1946–1966"
  },
  disco: {
    id: "PLdzTczYJl4Do",
    title: "谱系 · 迪斯科 Disco｜1970s 舞池革命",
    count: 30,
    span: "1975–1982"
  },
  house: {
    id: "PLITFK2wbKVbU",
    title: "谱系 · 浩室 House｜芝加哥 1980s 起源",
    count: 30,
    span: "1984–1991"
  }
};

// 统一的播放列表链接：有正式歌单就用正式歌单，没有就退回 watch_videos 临时拼一张
window.MG_YT_PLAYLIST_URL = function (familyId) {
  const p = window.MG_YT_PLAYLISTS[familyId];
  return p ? "https://www.youtube.com/playlist?list=" + p.id : "";
};
