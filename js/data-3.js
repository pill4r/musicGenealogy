/* 音乐风格谱系 · 数据 3/4 —— 锐舞 / Trance / DnB / 嘻哈 */
(function () {
  const G = window.MG;
  G.genres.push(
    /* ---------- Rave / Trance / DnB ---------- */
    {
      id: "uk-rave", n: "UK Rave", zh: "英国锐舞", f: "rave", y: 1988, r: "英国", bpm: "125–145", tier: 2,
      d: "acid house 传入英国后，仓库派对与非法 rave 引爆「第二次爱之夏」。",
      ch: ["仓库派对", "酸性音色", "碎拍/四拍"],
      ar: ["The Prodigy", "Orbital", "808 State"],
      tr: [["Chime", "Orbital", 1989]],
      p: ["acid-house", "techno"]
    },
    {
      id: "hardcore", n: "Hardcore", zh: "硬核锐舞", f: "rave", y: 1990, r: "英国", bpm: "150–180", tier: 2,
      d: "rave 加速到 150+ BPM，碎拍 + 合成器 stabs，是 jungle 与 happy hardcore 的共同前身。",
      ch: ["高速碎拍", "合成器 stab", "采样"],
      ar: ["The Prodigy", "SL2", "Altern 8"],
      tr: [["Charly", "The Prodigy", 1991]],
      p: ["uk-rave", "techno"]
    },
    {
      id: "happy-hardcore", n: "Happy Hardcore", zh: "快乐硬核", f: "rave", y: 1991, r: "英国", bpm: "160–180", tier: 3,
      d: "硬核的明亮版：钢琴、女声、极度欢快。",
      ch: ["钢琴 riff", "高亢女声", "高速"],
      ar: ["Hixxy", "Dougal", "Scooter"],
      tr: [["Toytown", "Hixxy & Sharkey", 1996]],
      p: ["hardcore"]
    },
    {
      id: "gabber", n: "Gabber", zh: "加伯", f: "rave", y: 1992, r: "荷兰", bpm: "180–220", tier: 3,
      d: "荷兰的极端硬核：200+ BPM、失真底鼓、反社会美学。",
      ch: ["200+ BPM", "失真底鼓", "黑暗"],
      ar: ["Paul Elstak", "Rotterdam Terror Corps", "Angerfist"],
      tr: [["Rainbow in the Sky", "Paul Elstak", 1995]],
      p: ["hardcore"]
    },
    {
      id: "hardstyle", n: "Hardstyle", zh: "硬派", f: "rave", y: 2001, r: "荷兰/意大利", bpm: "150–160", tier: 3,
      d: "gabber 的底鼓 + trance 的旋律，荷兰/意大利的大型舞池音乐。",
      ch: ["硬底鼓", "旋律 breakdown", "大型舞台"],
      ar: ["Headhunterz", "Showtek", "Da Tweekaz"],
      tr: [["FTS", "Showtek", 2008]],
      p: ["hardcore", "trance"]
    },
    {
      id: "breakbeat", n: "Breakbeat", zh: "碎拍", f: "rave", y: 1991, r: "英国", bpm: "120–140", tier: 2,
      d: "以碎拍为核心的电子舞曲，90 年代英国俱乐部与广告配乐的常客。",
      ch: ["碎拍", "采样", "放克感"],
      ar: ["The Chemical Brothers", "Fatboy Slim", "Stanton Warriors"],
      tr: [["Block Rockin' Beats", "The Chemical Brothers", 1997]],
      p: ["uk-rave", "hip-hop"]
    },
    {
      id: "big-beat", n: "Big Beat", zh: "大节拍", f: "rave", y: 1995, r: "英国", bpm: "110–140", tier: 3,
      d: "碎拍 + 摇滚采样 + hip-hop 态度，90 年代末的商业高峰。",
      ch: ["大碎拍", "摇滚采样", "hook"],
      ar: ["Fatboy Slim", "The Chemical Brothers", "The Prodigy"],
      tr: [["Praise You", "Fatboy Slim", 1998]],
      p: ["breakbeat", "hip-hop"]
    },
    {
      id: "jungle", n: "Jungle", zh: "丛林", f: "rave", y: 1992, r: "英国·伦敦", bpm: "160–175", tier: 2,
      d: "碎拍加速 + reggae/dub 低音 + 采样，英国黑人舞池的发明。",
      ch: ["高速碎拍", "reggae 低音", "采样"],
      ar: ["Goldie", "LTJ Bukem", "Shy FX"],
      tr: [["Inner City Life", "Goldie", 1994]],
      p: ["hardcore", "dub", "hip-hop"]
    },
    {
      id: "drum-and-bass", n: "Drum & Bass", zh: "鼓打贝斯", f: "rave", y: 1994, r: "英国", bpm: "168–180", tier: 1,
      d: "jungle 的进化版：170 BPM 的碎拍与巨型低音，90 年代后期英国主流。",
      ch: ["170 BPM", "巨型低音", "复杂鼓组"],
      ar: ["Roni Size", "Andy C", "Noisia"],
      tr: [["Brown Paper Bag", "Roni Size / Reprazent", 1997]],
      p: ["jungle"]
    },
    {
      id: "liquid-dnb", n: "Liquid DnB", zh: "液体 DnB", f: "rave", y: 1997, r: "英国", bpm: "172–176", tier: 3,
      d: "更 soulful、旋律化的 DnB，适合耳机与深夜。",
      ch: ["soulful 和弦", "旋律", "柔和鼓组"],
      ar: ["LTJ Bukem", "Calibre", "High Contrast"],
      tr: [["Horizons", "LTJ Bukem", 1995]],
      p: ["drum-and-bass", "soul"]
    },
    {
      id: "neurofunk", n: "Neurofunk", zh: "神经放克", f: "rave", y: 1998, r: "英国", bpm: "172–178", tier: 3,
      d: "技术化、黑暗、电影感的 DnB，声音设计是主角。",
      ch: ["声音设计", "黑暗", "技术化"],
      ar: ["Noisia", "Ed Rush & Optical", "Black Sun Empire"],
      tr: [["The Tide", "Noisia", 2007]],
      p: ["drum-and-bass", "techno"]
    },
    {
      id: "trance", n: "Trance", zh: "迷幻舞曲", f: "rave", y: 1991, r: "德国/英国", bpm: "130–145", tier: 1,
      d: "从 techno/house 里抽出旋律与 breakdown，用长铺陈制造情绪高潮。",
      ch: ["旋律 breakdown", "4/4 推进", "情绪化"],
      ar: ["Paul van Dyk", "Armin van Buuren", "Tiësto"],
      tr: [["For an Angel", "Paul van Dyk", 1994]],
      p: ["techno", "house", "ambient"]
    },
    {
      id: "goa-trance", n: "Goa Trance", zh: "果阿迷幻", f: "rave", y: 1989, r: "印度·果阿", bpm: "135–150", tier: 3,
      d: "印度果阿海滩派对 + acid house，迷幻、密集、层层叠叠。",
      ch: ["密集音序", "迷幻", "印度元素"],
      ar: ["Astral Projection", "Hallucinogen", "Goa Gil"],
      tr: [["LSD", "Hallucinogen", 1994]],
      p: ["trance", "psychedelic-rock"]
    },
    {
      id: "psytrance", n: "Psytrance", zh: "迷幻 Trance", f: "rave", y: 1994, r: "以色列/全球", bpm: "138–148", tier: 3,
      d: "goa 的进化：催眠低音、层层音效、整夜的能量曲线。",
      ch: ["催眠低音", "层层音效", "高速"],
      ar: ["Infected Mushroom", "Vini Vici", "Astrix"],
      tr: [["Becoming Insane", "Infected Mushroom", 2007]],
      p: ["goa-trance"]
    },
    {
      id: "progressive-trance", n: "Progressive Trance", zh: "前卫 Trance", f: "rave", y: 1993, r: "英国", bpm: "128–136", tier: 3,
      d: "更慢、更渐进的 trance，强调长时间的氛围铺垫。",
      ch: ["渐进", "氛围", "长 set"],
      ar: ["Sasha", "BT", "Nick Warren"],
      tr: [["Flaming June", "BT", 1997]],
      p: ["trance", "progressive-house"]
    },
    {
      id: "uplifting-trance", n: "Uplifting Trance", zh: "昂扬 Trance", f: "rave", y: 1995, r: "英国/荷兰", bpm: "136–142", tier: 3,
      d: "trance 最「煽情」的分支：大旋律、大 breakdown、大合唱。",
      ch: ["大旋律", "情感 breakdown", "史诗感"],
      ar: ["Above & Beyond", "Gareth Emery", "Aly & Fila"],
      tr: [["Sun & Moon", "Above & Beyond", 2011]],
      p: ["trance"]
    },
    {
      id: "edm", n: "EDM", zh: "电子舞曲", f: "rave", y: 2010, r: "美国/全球", bpm: "126–132", tier: 1,
      d: "2010 年代美国把 electro/progressive house 变成音乐节主舞台的统称，drop 文化席卷全球。",
      ch: ["大 drop", "音乐节", "流行合作"],
      ar: ["Avicii", "Calvin Harris", "David Guetta"],
      tr: [["Levels", "Avicii", 2011]],
      p: ["electro-house", "progressive-house", "big-room"]
    },
    {
      id: "big-room", n: "Big Room", zh: "大房间", f: "rave", y: 2010, r: "荷兰", bpm: "128–132", tier: 2,
      d: "为万人场馆设计的极简 drop 与号角式合成器。",
      ch: ["极简 drop", "号角合成器", "场馆感"],
      ar: ["Martin Garrix", "Hardwell", "Blasterjaxx"],
      tr: [["Animals", "Martin Garrix", 2013]],
      p: ["electro-house", "progressive-house"]
    },
    {
      id: "future-bass", n: "Future Bass", zh: "未来贝斯", f: "rave", y: 2013, r: "美国/澳大利亚", bpm: "130–150", tier: 3,
      d: "trap 的鼓 + 合成器和弦 + 人声切片，2010 年代中期的网络流行。",
      ch: ["trap 鼓", "合成器和弦", "人声切片"],
      ar: ["Flume", "Louis the Child", "San Holo"],
      tr: [["Never Be Like You", "Flume", 2016]],
      p: ["trap", "synth-pop"]
    },

    /* ---------- Hip-Hop ---------- */
    {
      id: "hip-hop", n: "Hip-Hop", zh: "嘻哈", f: "hiphop", y: 1975, r: "美国·纽约布朗克斯", bpm: "80–110", tier: 1,
      d: "1970 年代布朗克斯：DJ 截取 funk/disco 的 break，MC 在台上带动气氛；从街头派对长成全球最大的流行文化之一。",
      ch: ["breakbeat", "MC", "采样", "街头文化"],
      ar: ["DJ Kool Herc", "Grandmaster Flash", "Afrika Bambaataa"],
      tr: [["Rapper's Delight", "Sugarhill Gang", 1979]],
      p: ["funk", "disco", "soul"]
    },
    {
      id: "old-school-hip-hop", n: "Old-School Hip-Hop", zh: "老派嘻哈", f: "hiphop", y: 1979, r: "美国", bpm: "95–115", tier: 3,
      d: "1979–1984 的早期录音：迪斯科式节拍、简单押韵、派对主题。",
      ch: ["disco 节拍", "派对主题", "简单押韵"],
      ar: ["Sugarhill Gang", "Kurtis Blow", "Grandmaster Flash"],
      tr: [["The Breaks", "Kurtis Blow", 1980]],
      p: ["hip-hop"]
    },
    {
      id: "golden-age", n: "Golden Age Hip-Hop", zh: "黄金年代", f: "hiphop", y: 1987, r: "美国", bpm: "85–105", tier: 2,
      d: "1980 年代末到 90 年代初：采样密集、歌词复杂、专辑概念化。",
      ch: ["密集采样", "复杂歌词", "专辑概念"],
      ar: ["Public Enemy", "Eric B. & Rakim", "A Tribe Called Quest"],
      tr: [["Fight the Power", "Public Enemy", 1989]],
      p: ["hip-hop"]
    },
    {
      id: "gangsta-rap", n: "Gangsta Rap", zh: "匪帮说唱", f: "hiphop", y: 1988, r: "美国·西海岸", bpm: "85–100", tier: 2,
      d: "西海岸的街头叙事与暴力美学，把 hip-hop 推向争议与主流。",
      ch: ["街头叙事", "暴力美学", "funk 采样"],
      ar: ["N.W.A", "Ice-T", "Ice Cube"],
      tr: [["Straight Outta Compton", "N.W.A", 1988]],
      p: ["hip-hop"]
    },
    {
      id: "g-funk", n: "G-Funk", zh: "黑帮放克", f: "hiphop", y: 1992, r: "美国·西海岸", bpm: "90–100", tier: 3,
      d: "P-funk 采样 + 缓慢律动 + 合成器；Dr. Dre 定义了 90 年代西海岸声音。",
      ch: ["P-funk 采样", "缓慢律动", "合成器"],
      ar: ["Dr. Dre", "Snoop Dogg", "Warren G"],
      tr: [["Nuthin' but a 'G' Thang", "Dr. Dre", 1992]],
      p: ["gangsta-rap", "funk"]
    },
    {
      id: "boom-bap", n: "Boom Bap", zh: "Boom Bap", f: "hiphop", y: 1990, r: "美国·纽约", bpm: "85–95", tier: 2,
      d: "硬底鼓 + 采样 chop，纽约地下 hip-hop 的标准声音。",
      ch: ["硬底鼓", "采样 chop", "东岸"],
      ar: ["Mobb Deep", "Nas", "Gang Starr"],
      tr: [["Shook Ones, Pt. II", "Mobb Deep", 1995]],
      p: ["hip-hop", "hard-bop"]
    },
    {
      id: "jazz-rap", n: "Jazz Rap", zh: "爵士说唱", f: "hiphop", y: 1988, r: "美国", bpm: "85–100", tier: 3,
      d: "爵士采样 + 慵懒 flow，把 hip-hop 变成室内乐。",
      ch: ["爵士采样", "慵懒 flow", "有机质感"],
      ar: ["A Tribe Called Quest", "Gang Starr", "Digable Planets"],
      tr: [["Jazz (We've Got)", "A Tribe Called Quest", 1991]],
      p: ["hip-hop", "hard-bop"]
    },
    {
      id: "conscious-hip-hop", n: "Conscious Hip-Hop", zh: "良知说唱", f: "hiphop", y: 1988, r: "美国", bpm: "85–105", tier: 3,
      d: "以社会议题、种族政治与自我教育为核心的 hip-hop。",
      ch: ["社会议题", "政治意识", "叙事"],
      ar: ["Public Enemy", "Common", "Kendrick Lamar"],
      tr: [["Alright", "Kendrick Lamar", 2015]],
      p: ["hip-hop"]
    },
    {
      id: "southern-hip-hop", n: "Southern Hip-Hop", zh: "南方说唱", f: "hiphop", y: 1991, r: "美国南部", bpm: "70–100", tier: 2,
      d: "美国南部的 hip-hop：更慢的节奏、更强的低音、独特的口音与舞步。",
      ch: ["慢速", "重低音", "南方口音"],
      ar: ["OutKast", "UGK", "Ludacris"],
      tr: [["Ms. Jackson", "OutKast", 2000]],
      p: ["hip-hop"]
    },
    {
      id: "crunk", n: "Crunk", zh: "旷课乐", f: "hiphop", y: 1997, r: "美国·亚特兰大", bpm: "70–80", tier: 3,
      d: "孟菲斯/亚特兰大的高能量 club rap：喊叫、808、极简 hook。",
      ch: ["喊叫", "808", "俱乐部能量"],
      ar: ["Lil Jon", "Three 6 Mafia", "Ying Yang Twins"],
      tr: [["Get Low", "Lil Jon & the East Side Boyz", 2003]],
      p: ["southern-hip-hop"]
    },
    {
      id: "trap", n: "Trap", zh: "陷阱说唱", f: "hiphop", y: 2003, r: "美国·亚特兰大", bpm: "130–150（半速 65–75）", tier: 1,
      d: "808 低音 + 快速 hi-hat + 黑暗合成器，2010 年代统治全球。",
      ch: ["808 低音", "快速 hi-hat", "黑暗合成器"],
      ar: ["T.I.", "Future", "Migos"],
      tr: [["Mask Off", "Future", 2017]],
      p: ["southern-hip-hop", "crunk"]
    },
    {
      id: "drill", n: "Drill", zh: "钻头", f: "hiphop", y: 2010, r: "美国·芝加哥/英国", bpm: "130–145", tier: 2,
      d: "芝加哥/伦敦的 trap 分支：阴暗旋律、滑音 808、街头叙事。",
      ch: ["滑音 808", "阴暗旋律", "街头"],
      ar: ["Chief Keef", "Pop Smoke", "Headie One"],
      tr: [["Dior", "Pop Smoke", 2019]],
      p: ["trap"]
    },
    {
      id: "cloud-rap", n: "Cloud Rap", zh: "云说唱", f: "hiphop", y: 2008, r: "美国", bpm: "60–80", tier: 3,
      d: "2000 年代末的网络说唱：氛围采样、慢速、模糊人声。",
      ch: ["氛围采样", "慢速", "模糊人声"],
      ar: ["Lil B", "Clams Casino", "A$AP Rocky"],
      tr: [["I'm God", "Clams Casino", 2010]],
      p: ["trap"]
    },
    {
      id: "lo-fi-hip-hop", n: "Lo-Fi Hip-Hop", zh: "低保真嘻哈", f: "hiphop", y: 2010, r: "全球/网络", bpm: "70–90", tier: 3,
      d: "爵士采样 + 黑胶噪声 + 慢速鼓，学习和放松的背景音。",
      ch: ["爵士采样", "黑胶噪声", "慢速鼓"],
      ar: ["Nujabes", "Idealism", "J Dilla"],
      tr: [["Feather", "Nujabes", 2005]],
      p: ["hip-hop", "hard-bop"]
    }
  );
})();
