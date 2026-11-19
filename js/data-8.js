/* 音乐风格谱系 · 数据 7 —— 浩室 / 科技舞曲 / UK Bass / 嘻哈 补充
   字段同 data-1.js */
(function () {
  const G = (window.MG = window.MG || { families: [], genres: [] });

  G.genres.push(
    /* ================= 浩室补充 ================= */
    {
      id: "ghetto-house", n: "Ghetto House", zh: "贫民窟浩室", f: "house", y: 1985, r: "美国·芝加哥", bpm: "130–150", tier: 3,
      d: "芝加哥 house 最粗野的一支：808 鼓机、露骨喊麦与极简 loop，DJ Deeon 与 Dance Mania 厂牌是地下传奇。",
      ch: ["808 鼓机", "喊麦", "极简 loop"],
      ar: ["DJ Deeon", "DJ Funk", "Paul Johnson"],
      tr: [["Freak Like Me", "DJ Deeon", 1996]],
      p: ["chicago-house", "acid-house"]
    },
    {
      id: "ballroom", n: "Ballroom", zh: "舞厅", f: "house", y: 1989, r: "美国·纽约", bpm: "120–140", tier: 3,
      d: "纽约黑人与拉丁裔酷儿舞厅文化的配乐：硬朗的 house 节拍加 vogue 舞步，Masters at Work 的《The Ha Dance》是国歌。",
      ch: ["Vogue 节拍", "喊场", "酷儿文化"],
      ar: ["Masters at Work", "Kevin Aviance", "MikeQ"],
      tr: [["The Ha Dance", "Masters at Work", 1991]],
      p: ["house", "disco"]
    },
    {
      id: "afro-tech", n: "Afro Tech", zh: "非洲科技浩室", f: "house", y: 2010, r: "南非", bpm: "120–126", tier: 2,
      d: "把 afro-house 的鼓组换成更科技、更催眠的合成器与低频，Black Coffee 把它带向全球。",
      ch: ["科技音色", "非洲鼓组", "催眠"],
      ar: ["Black Coffee", "Culoe De Song", "Da Capo"],
      tr: [["Superman", "Black Coffee", 2010]],
      p: ["afro-house", "tech-house"]
    },
    {
      id: "organic-house", n: "Organic House", zh: "有机浩室", f: "house", y: 2012, r: "德国 / 南非", bpm: "110–122", tier: 3,
      d: "把 house 做得更慢、更「有机」：手鼓、原声采样与长段渐变，Keinemusik 是这一波的门面。",
      ch: ["手鼓", "原声采样", "慢速渐变"],
      ar: ["&ME", "Rampa", "Adam Port"],
      tr: [["Muyè", "&ME, Rampa, Adam Port", 2018]],
      p: ["afro-house", "deep-house"]
    },
    {
      id: "lo-fi-house", n: "Lo-Fi House", zh: "低保真浩室", f: "house", y: 2015, r: "英国", bpm: "115–125", tier: 3,
      d: "把 house 录进磁带与采样器再糊上噪点：怀旧、粗糙、卧室制作，Ross from Friends 是代表。",
      ch: ["磁带噪点", "怀旧采样", "卧室制作"],
      ar: ["Ross from Friends", "DJ Seinfeld", "Mall Grab"],
      tr: [["Talk to Me You'll Understand", "Ross from Friends", 2017]],
      p: ["deep-house", "lo-fi-hip-hop"]
    },

    /* ================= 科技舞曲补充 ================= */
    {
      id: "ambient-techno", n: "Ambient Techno", zh: "氛围科技舞曲", f: "techno", y: 1992, r: "英国", bpm: "110–130", tier: 2,
      d: "把 techno 的骨架泡进合成器长音里：仍能跳舞，但更像漂浮；Aphex Twin 的《Xtal》是模板。",
      ch: ["合成器长音", "漂浮感", "节制鼓组"],
      ar: ["Aphex Twin", "B12", "The Orb"],
      tr: [["Xtal", "Aphex Twin", 1992]],
      p: ["techno", "ambient"]
    },
    {
      id: "ghettotech", n: "Ghettotech", zh: "贫民窟科技", f: "techno", y: 1995, r: "美国·底特律", bpm: "140–160", tier: 3,
      d: "底特律与芝加哥的交界：techno 的速度、electro 的鼓机、粗口喊麦，DJ Assault 是标志人物。",
      ch: ["快速", "Electro 鼓机", "喊麦"],
      ar: ["DJ Assault", "DJ Godfather", "Disco D"],
      tr: [["Ass N Titties", "DJ Assault", 1996]],
      p: ["techno", "electro"]
    },

    /* ================= UK Bass 补充 ================= */
    {
      id: "future-garage", n: "Future Garage", zh: "未来车库", f: "bass", y: 2007, r: "英国·伦敦", bpm: "130–140", tier: 2,
      d: "把 2-step garage 拆成碎片再拼回去：人声切片、雨声、低频与留白，Burial 的同名专辑定义了它。",
      ch: ["人声切片", "雨声采样", "留白"],
      ar: ["Burial", "Mount Kimbie", "Synkro"],
      tr: [["Archangel", "Burial", 2007]],
      p: ["uk-garage", "2-step"]
    },
    {
      id: "gqom", n: "Gqom", zh: "格孔", f: "bass", y: 2012, r: "南非·德班", bpm: "120–130", tier: 2,
      d: "德班的极简低音：只有底鼓、拍手与一条阴冷的合成器，比 house 更空旷也更凶。",
      ch: ["极简", "阴冷合成器", "空旷"],
      ar: ["Distruction Boyz", "DJ Lag", "Babes Wodumo"],
      tr: [["Omunye", "Distruction Boyz", 2017]],
      p: ["kwaito", "afro-house"]
    },
    {
      id: "uk-funky", n: "UK Funky", zh: "英国放克", f: "bass", y: 2007, r: "英国·伦敦", bpm: "125–135", tier: 3,
      d: "2000 年代末伦敦的短命场景：house 的节拍加 soca 与非洲鼓，Crazy Cousinz 把它推上电台。",
      ch: ["Soca 鼓", "House 节拍", "人声"],
      ar: ["Crazy Cousinz", "Kyla", "Roska"],
      tr: [["Do You Mind", "Crazy Cousinz", 2008]],
      p: ["uk-garage", "house"]
    },

    /* ================= 嘻哈补充 ================= */
    {
      id: "memphis-rap", n: "Memphis Rap", zh: "孟菲斯说唱", f: "hiphop", y: 1990, r: "美国·孟菲斯", bpm: "70–90", tier: 2,
      d: "低保真鼓机、阴森合成器与地下磁带发行，Three 6 Mafia 把孟菲斯的恐怖感变成后来 trap 与 phonk 的基因。",
      ch: ["低保真", "阴森合成器", "磁带发行"],
      ar: ["Three 6 Mafia", "8Ball & MJG", "Tommy Wright III"],
      tr: [["Tear da Club Up", "Three 6 Mafia", 1997]],
      p: ["southern-hip-hop", "gangsta-rap"]
    },
    {
      id: "alternative-hip-hop", n: "Alternative Hip-Hop", zh: "另类嘻哈", f: "hiphop", y: 1988, r: "美国", bpm: "80–110", tier: 2,
      d: "不走 gangsta 路线的嘻哈：采样古怪、主题内省或玩世不恭，De La Soul 的《3 Feet High and Rising》开了门。",
      ch: ["古怪采样", "内省", "幽默"],
      ar: ["De La Soul", "A Tribe Called Quest", "OutKast"],
      tr: [["Me Myself and I", "De La Soul", 1989]],
      p: ["golden-age", "jazz-rap"]
    },
    {
      id: "political-hip-hop", n: "Political Hip-Hop", zh: "政治嘻哈", f: "hiphop", y: 1982, r: "美国", bpm: "90–110", tier: 3,
      d: "把麦克风当传单：种族、警察与权力结构，Public Enemy 的《Fight the Power》是最高音。",
      ch: ["政治歌词", "采样墙", "喊口号"],
      ar: ["Public Enemy", "KRS-One", "Dead Prez"],
      tr: [["Fight the Power", "Public Enemy", 1989]],
      p: ["conscious-hip-hop", "golden-age"]
    },
    {
      id: "instrumental-hip-hop", n: "Instrumental Hip-Hop", zh: "器乐嘻哈", f: "hiphop", y: 1990, r: "美国", bpm: "80–100", tier: 3,
      d: "没有人声的嘻哈：把采样与鼓组当成作曲，DJ Shadow 的《Endtroducing.....》把它变成一张完整的专辑艺术。",
      ch: ["采样拼贴", "无人声", "电影感"],
      ar: ["DJ Shadow", "Madlib", "J Dilla"],
      tr: [["Midnight in a Perfect World", "DJ Shadow", 1996]],
      p: ["boom-bap", "trip-hop"]
    },
    {
      id: "hyphy", n: "Hyphy", zh: "亢奋", f: "hiphop", y: 2000, r: "美国·旧金山湾区", bpm: "100–110", tier: 3,
      d: "湾区的派对说唱：快速的踩镲、合成器主旋律与「go dumb」的舞蹈文化，E-40 是教父。",
      ch: ["快速踩镲", "合成器主旋律", "派对"],
      ar: ["E-40", "Mac Dre", "Keak da Sneak"],
      tr: [["Tell Me When to Go", "E-40", 2006]],
      p: ["gangsta-rap", "crunk"]
    },
    {
      id: "snap", n: "Snap", zh: "响指说唱", f: "hiphop", y: 2000, r: "美国·亚特兰大", bpm: "70–90", tier: 3,
      d: "用响指与 808 做骨架的南方派对说唱，Lil Jon 的吼叫把它推上 2000 年代榜单。",
      ch: ["响指", "808", "喊场"],
      ar: ["Lil Jon", "Ying Yang Twins", "Dem Franchize Boyz"],
      tr: [["Get Low", "Lil Jon & The East Side Boyz", 2003]],
      p: ["crunk", "southern-hip-hop"]
    },
    {
      id: "mumble-rap", n: "Mumble Rap", zh: "含糊说唱", f: "hiphop", y: 2014, r: "美国", bpm: "70–90", tier: 2,
      d: "咬字被旋律与氛围取代的一代说唱：重点不在歌词而在音色与律动，Future 是最大影响源。",
      ch: ["含糊咬字", "旋律化", "氛围"],
      ar: ["Future", "Lil Uzi Vert", "Playboi Carti"],
      tr: [["Mask Off", "Future", 2017]],
      p: ["trap", "cloud-rap"]
    },
    {
      id: "soundcloud-rap", n: "SoundCloud Rap", zh: "SoundCloud 说唱", f: "hiphop", y: 2015, r: "美国", bpm: "70–90", tier: 2,
      d: "在卧室录制、直接上传的下一代说唱：低保真、情绪化、跨流派，Lil Uzi Vert 与 XXXTentacion 从平台走向榜单。",
      ch: ["宅录", "情绪化", "跨流派"],
      ar: ["Lil Uzi Vert", "XXXTentacion", "Lil Peep"],
      tr: [["XO TOUR Llif3", "Lil Uzi Vert", 2017]],
      p: ["cloud-rap", "trap"]
    },
    {
      id: "emo-rap", n: "Emo Rap", zh: "Emo 说唱", f: "hiphop", y: 2015, r: "美国", bpm: "70–90", tier: 2,
      d: "把 emo 的自我伤害叙事与吉他采样放进 trap 鼓组，Lil Peep 与 XXXTentacion 让两种亚文化在同一个播放列表里相遇。",
      ch: ["吉他采样", "自白", "Trap 鼓组"],
      ar: ["Lil Peep", "XXXTentacion", "Juice WRLD"],
      tr: [["Awful Things", "Lil Peep", 2017]],
      p: ["cloud-rap", "emo"]
    },
    {
      id: "trap-soul", n: "Trap Soul", zh: "Trap 灵魂", f: "hiphop", y: 2014, r: "美国", bpm: "70–90", tier: 3,
      d: "用 trap 的 808 与 hi-hat 唱 R&B 的旋律，Bryson Tiller 的《T R A P S O U L》给这一波命名。",
      ch: ["808", "R&B 旋律", "午夜感"],
      ar: ["Bryson Tiller", "PartyNextDoor", "6LACK"],
      tr: [["Don't", "Bryson Tiller", 2015]],
      p: ["trap", "contemporary-rnb"]
    },
    {
      id: "uk-drill", n: "UK Drill", zh: "英国 Drill", f: "hiphop", y: 2012, r: "英国·伦敦", bpm: "140–145", tier: 2,
      d: "芝加哥 drill 在伦敦的重生：滑音 808、阴冷旋律与街区叙事，形成了英国最锋利的一代说唱。",
      ch: ["滑音 808", "阴冷旋律", "街区叙事"],
      ar: ["Headie One", "Unknown T", "Digga D"],
      tr: [["Homerton B", "Unknown T", 2018]],
      p: ["drill", "grime"]
    },
    {
      id: "afroswing", n: "Afroswing", zh: "非洲摇摆", f: "hiphop", y: 2015, r: "英国·伦敦", bpm: "100–110", tier: 3,
      d: "伦敦的非洲裔青年把 afrobeats 的旋律与 grime 的节奏接在一起，J Hus 是这一波最响亮的名字。",
      ch: ["Afrobeats 旋律", "英式说唱", "夏日感"],
      ar: ["J Hus", "MoStack", "Kojo Funds"],
      tr: [["Did You See", "J Hus", 2017]],
      p: ["afrobeats", "grime"]
    },
    {
      id: "latin-rap", n: "Latin Rap", zh: "拉丁说唱", f: "hiphop", y: 1989, r: "美国·洛杉矶", bpm: "85–105", tier: 3,
      d: "西语与英语混用的美国拉丁裔说唱，Kid Frost 的《La Raza》是西岸拉丁说唱的起点。",
      ch: ["西英混用", "放克采样", "街区"],
      ar: ["Kid Frost", "Cypress Hill", "Mellow Man Ace"],
      tr: [["La Raza", "Kid Frost", 1990]],
      p: ["hip-hop", "gangsta-rap"]
    },
    {
      id: "phonk", n: "Phonk", zh: "Phonk", f: "hiphop", y: 2010, r: "美国 / 网络", bpm: "70–90", tier: 2,
      d: "从孟菲斯说唱采样里长出来的网络亚种：失真 808、牛铃与低保真氛围，后来分裂出 drift phonk。",
      ch: ["失真 808", "牛铃", "低保真"],
      ar: ["SpaceGhostPurrp", "DJ Smokey", "Soudiere"],
      tr: [["Bringing tha Phonk", "SpaceGhostPurrp", 2011]],
      p: ["memphis-rap", "cloud-rap"]
    }
  );
})();
