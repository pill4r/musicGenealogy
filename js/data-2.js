/* 音乐风格谱系 · 数据 2/4 —— 浩室 / 科技舞曲 / UK Bass */
(function () {
  const G = window.MG;
  G.genres.push(
    /* ---------- House ---------- */
    {
      id: "house", n: "House", zh: "浩室", f: "house", y: 1982, r: "美国·芝加哥", bpm: "118–130", tier: 1,
      d: "1980 年代初的芝加哥：Frankie Knuckles 在 The Warehouse 把 disco 重新剪接、叠上鼓机，做出为舞池循环而生的音乐，名字就来自这家俱乐部。它继承 disco 的 4/4 与灵魂人声，也直接分出了 deep、acid、garage 等支线。",
      ch: ["4/4 底鼓", "反拍开镲", "合成贝斯", "人声切片", "loop 结构"],
      ar: ["Frankie Knuckles", "Marshall Jefferson", "Larry Heard", "Jesse Saunders"],
      tr: [["On and On", "Jesse Saunders", 1984], ["Your Love", "Frankie Knuckles", 1986], ["Move Your Body (The House Music Anthem)", "Marshall Jefferson", 1986]],
      p: ["disco", "funk", "soul", "synth-pop"]
    },
    {
      id: "chicago-house", n: "Chicago House", zh: "芝加哥浩室", f: "house", y: 1984, r: "美国·芝加哥", bpm: "118–128", tier: 2,
      d: "早期 house 的具体形态：TR-808/909 鼓机、粗糙采样与灵魂人声；Trax 与 DJ International 两个厂牌定义了它的声音。",
      ch: ["808/909 鼓机", "粗糙采样", "灵魂人声"],
      ar: ["Jesse Saunders", "Chip E.", "Adonis"],
      tr: [["Like This", "Chip E.", 1985], ["No Way Back", "Adonis", 1986]],
      p: ["house"]
    },
    {
      id: "acid-house", n: "Acid House", zh: "酸性浩室", f: "house", y: 1986, r: "美国·芝加哥", bpm: "120–130", tier: 1,
      d: "用 Roland TB-303 的滑音与共振做出「吱吱」声；1987 年 Phuture 的《Acid Tracks》为它定名，1988 年传入英国，引爆第二次爱之夏。",
      ch: ["TB-303 酸性音色", "迷幻感", "重复推进"],
      ar: ["Phuture", "DJ Pierre", "Josh Wink"],
      tr: [["Acid Tracks", "Phuture", 1987], ["Higher State of Consciousness", "Josh Wink", 1995]],
      p: ["chicago-house"]
    },
    {
      id: "deep-house", n: "Deep House", zh: "深度浩室", f: "house", y: 1987, r: "美国·芝加哥", bpm: "110–125", tier: 1,
      d: "更慢、更 soulful 的 house：重视和弦、氛围与低频；Larry Heard 的《Can You Feel It》是模板。",
      ch: ["柔和和弦", "低频氛围", "灵魂人声"],
      ar: ["Larry Heard", "Kerri Chandler", "Theo Parrish"],
      tr: [["Can You Feel It", "Mr. Fingers", 1986]],
      p: ["chicago-house", "soul"]
    },
    {
      id: "garage-house", n: "Garage House", zh: "车库浩室", f: "house", y: 1987, r: "美国·纽约/新泽西", bpm: "115–125", tier: 2,
      d: "纽约/新泽西的 house 分支，名字来自 Paradise Garage 的 Larry Levan；福音式人声与更 Swing 的鼓，后来东渡英国变成 UK garage。",
      ch: ["福音人声", "Swing 鼓感", "俱乐部感"],
      ar: ["Larry Levan", "Tony Humphries", "Masters at Work"],
      tr: [["Devotion", "Ten City", 1987]],
      p: ["house", "soul", "gospel"]
    },
    {
      id: "hip-house", n: "Hip House", zh: "嘻哈浩室", f: "house", y: 1988, r: "美国", bpm: "120–130", tier: 3,
      d: "house 节拍 + rap，两种黑人舞池文化的第一次正式联姻。",
      ch: ["house 节拍", "说唱", "采样"],
      ar: ["Jungle Brothers", "Fast Eddie", "Technotronic"],
      tr: [["I'll House You", "Jungle Brothers", 1988]],
      p: ["house", "hip-hop"]
    },
    {
      id: "vocal-house", n: "Vocal House", zh: "人声浩室", f: "house", y: 1991, r: "美国/欧洲", bpm: "118–128", tier: 3,
      d: "以歌手为核心的传统 house，副歌与和声冲向舞池。",
      ch: ["强副歌", "福音式和声", "钢琴/弦乐"],
      ar: ["CeCe Peniston", "Robin S.", "Ultra Naté"],
      tr: [["Finally", "CeCe Peniston", 1991], ["Show Me Love", "Robin S.", 1993]],
      p: ["house", "soul"]
    },
    {
      id: "progressive-house", n: "Progressive House", zh: "前卫浩室", f: "house", y: 1992, r: "英国/欧洲", bpm: "120–130", tier: 2,
      d: "长段落、渐进铺垫、强调氛围与张力，受 trance 影响，后来成为 EDM 主舞台的骨架。",
      ch: ["渐进结构", "氛围铺陈", "长 breakdown"],
      ar: ["Sasha", "John Digweed", "Eric Prydz"],
      tr: [["Xpander", "Sasha", 1999]],
      p: ["house", "trance"]
    },
    {
      id: "tech-house", n: "Tech House", zh: "科技浩室", f: "house", y: 1994, r: "英国/美国", bpm: "120–128", tier: 1,
      d: "house 的律动 + techno 的冷硬音色，极简循环，适合长时间 DJ set。",
      ch: ["循环律动", "冷硬音色", "极简编排"],
      ar: ["Mr. G", "Jamie Jones", "Fisher"],
      tr: [["Losing It", "Fisher", 2018]],
      p: ["house", "techno"]
    },
    {
      id: "funky-house", n: "Funky House", zh: "放克浩室", f: "house", y: 1996, r: "英国", bpm: "120–128", tier: 3,
      d: "采样 disco/funk 的过滤式 house，2000 年代前后进入主流。",
      ch: ["disco/funk 采样", "滤波", "欢快人声"],
      ar: ["Basement Jaxx", "Armand Van Helden", "Roger Sanchez"],
      tr: [["Rendez-Vu", "Basement Jaxx", 1999]],
      p: ["house", "disco"]
    },
    {
      id: "microhouse", n: "Microhouse", zh: "微型浩室", f: "house", y: 1999, r: "德国/智利", bpm: "115–125", tier: 3,
      d: "极简、点击声、低频留白，把 house 拆到只剩呼吸。",
      ch: ["微采样", "点击声", "留白"],
      ar: ["Akufen", "Ricardo Villalobos", "Luomo"],
      tr: [["My Way", "Akufen", 2002]],
      p: ["minimal-techno", "house"]
    },
    {
      id: "minimal-house", n: "Minimal House", zh: "极简浩室", f: "house", y: 2003, r: "德国", bpm: "118–125", tier: 3,
      d: "2000 年代中期的极简 house，靠细微变化维持律动。",
      ch: ["极简", "细微变化", "低频驱动"],
      ar: ["Âme", "Isolée", "Ricardo Villalobos"],
      tr: [["Rej", "Âme", 2006]],
      p: ["minimal-techno", "house"]
    },
    {
      id: "electro-house", n: "Electro House", zh: "电击浩室", f: "house", y: 2005, r: "欧洲", bpm: "125–130", tier: 1,
      d: "加入失真合成器、摇滚式 drop 的 house，2010 年前后统治音乐节。",
      ch: ["失真合成器", "大 drop", "摇滚能量"],
      ar: ["Justice", "deadmau5", "Boys Noize"],
      tr: [["D.A.N.C.E.", "Justice", 2007], ["Ghosts 'n' Stuff", "deadmau5", 2009]],
      p: ["house", "electro"]
    },
    {
      id: "afro-house", n: "Afro House", zh: "非洲浩室", f: "house", y: 2003, r: "南非/全球", bpm: "118–126", tier: 3,
      d: "house 与非洲打击乐、部落人声结合，Black Coffee 等人把它推向全球。",
      ch: ["非洲打击乐", "部落人声", "深沉低频"],
      ar: ["Black Coffee", "Osunlade", "Culoe De Song"],
      tr: [["Superman", "Black Coffee", 2010]],
      p: ["deep-house", "afrobeat"]
    },
    {
      id: "kwaito", n: "Kwaito", zh: "夸伊托", f: "house", y: 1993, r: "南非", bpm: "100–115", tier: 3,
      d: "南非街头的 house 变体：慢速、口语说唱、ghetto 文化。",
      ch: ["慢速 house", "口语说唱", "南非街头"],
      ar: ["Mandoza", "Arthur Mafokate", "TKZee"],
      tr: [["Nkalakatha", "Mandoza", 2000]],
      p: ["house", "hip-hop"]
    },
    {
      id: "amapiano", n: "Amapiano", zh: "阿马皮亚诺", f: "house", y: 2019, r: "南非", bpm: "108–118", tier: 1,
      d: "deep house + kwaito + gqom 的南非新声：钢琴和弦、log drum 低音，2020 年代全球走红。",
      ch: ["钢琴和弦", "log drum 低音", "慢速律动"],
      ar: ["Kabza De Small", "DJ Maphorisa", "Focalistic"],
      tr: [["Ke Star", "Focalistic", 2021]],
      p: ["deep-house", "kwaito"]
    },
    {
      id: "tropical-house", n: "Tropical House", zh: "热带浩室", f: "house", y: 2013, r: "北欧/全球", bpm: "100–115", tier: 3,
      d: "轻快的 house 节拍 + 热带音色，Kygo 把它变成全球流行。",
      ch: ["热带音色", "轻快节拍", "流行人声"],
      ar: ["Kygo", "Thomas Jack", "Sigala"],
      tr: [["Firestone", "Kygo", 2014]],
      p: ["house", "pop"]
    },
    {
      id: "slap-house", n: "Slap House", zh: "拍击浩室", f: "house", y: 2019, r: "欧洲", bpm: "120–130", tier: 3,
      d: "拍击式贝斯 + 流行人声，TikTok 时代的欧洲舞曲。",
      ch: ["拍击贝斯", "流行人声", "短视频节奏"],
      ar: ["Meduza", "Alle Farben", "Imanbek"],
      tr: [["Piece of Your Heart", "Meduza", 2019]],
      p: ["house", "pop"]
    },
    {
      id: "future-house", n: "Future House", zh: "未来浩室", f: "house", y: 2013, r: "荷兰/英国", bpm: "122–128", tier: 3,
      d: "弹性贝斯、切碎人声，介于 house 与 EDM 之间。",
      ch: ["弹性贝斯", "人声切片", "俱乐部感"],
      ar: ["Tchami", "Oliver Heldens", "Don Diablo"],
      tr: [["Gecko (Overdrive)", "Oliver Heldens", 2014]],
      p: ["house", "electro-house"]
    },
    {
      id: "french-house", n: "French House", zh: "法国浩室", f: "house", y: 1993, r: "法国", bpm: "110–125", tier: 1,
      d: "用 disco/funk 采样 + 滤波器做出的「法式触感」，Daft Punk 让它成为全球现象。",
      ch: ["disco 采样", "滤波器", "循环片段"],
      ar: ["Daft Punk", "Cassius", "Stardust"],
      tr: [["Around the World", "Daft Punk", 1997], ["Music Sounds Better with You", "Stardust", 1998]],
      p: ["house", "disco", "funk"]
    },
    {
      id: "disco-house", n: "Disco House", zh: "迪斯科浩室", f: "house", y: 1994, r: "美国/欧洲", bpm: "118–126", tier: 3,
      d: "直接把 disco 的弦乐、人声与 house 鼓结合，是 disco 的「回流」。",
      ch: ["disco 弦乐", "house 鼓", "人声采样"],
      ar: ["Masters at Work", "Joey Negro", "Purple Disco Machine"],
      tr: [["The Bomb! (These Sounds Fall into My Mind)", "Kenny Dope", 1995]],
      p: ["house", "disco"]
    },

    /* ---------- Techno ---------- */
    {
      id: "techno", n: "Techno", zh: "科技舞曲", f: "techno", y: 1985, r: "美国·底特律", bpm: "120–150", tier: 1,
      d: "1985 年底特律：Belleville 三人组把 Kraftwerk 的合成器、funk 的律动与未来主义想象拼在一起，做出没有人声、持续推进的机器音乐。",
      ch: ["4/4 推进", "合成器和弦", "无人声", "循环"],
      ar: ["Juan Atkins", "Derrick May", "Kevin Saunderson"],
      tr: [["No UFO's", "Model 500", 1985], ["Strings of Life", "Rhythim Is Rhythim", 1987]],
      p: ["house", "electro", "synth-pop", "krautrock"]
    },
    {
      id: "acid-techno", n: "Acid Techno", zh: "酸性科技", f: "techno", y: 1988, r: "欧洲", bpm: "130–150", tier: 3,
      d: "acid house 的 303 音色进入 techno，更硬、更迷幻。",
      ch: ["303 酸性线", "硬鼓", "催眠"],
      ar: ["Hardfloor", "Dave Clarke", "D.A.V.E. The Drummer"],
      tr: [["Acperience 1", "Hardfloor", 1992]],
      p: ["acid-house", "techno"]
    },
    {
      id: "minimal-techno", n: "Minimal Techno", zh: "极简科技", f: "techno", y: 1991, r: "美国/德国", bpm: "120–135", tier: 2,
      d: "去掉一切多余，只剩脉冲与空间；底特律与柏林两路发展。",
      ch: ["极简", "脉冲", "空间感"],
      ar: ["Robert Hood", "Richie Hawtin", "Plastikman"],
      tr: [["Spastik", "Plastikman", 1993]],
      p: ["techno"]
    },
    {
      id: "dub-techno", n: "Dub Techno", zh: "回响科技", f: "techno", y: 1992, r: "德国·柏林", bpm: "115–130", tier: 3,
      d: "把 dub 的延迟、混响灌进 techno，Basic Channel 定下模板。",
      ch: ["延迟/混响", "低沉和弦", "空间"],
      ar: ["Basic Channel", "Deepchord", "Rod Modell"],
      tr: [["Phylyps Trak", "Basic Channel", 1993]],
      p: ["techno", "dub"]
    },
    {
      id: "hard-techno", n: "Hard Techno", zh: "硬科技", f: "techno", y: 1993, r: "欧洲", bpm: "140–160", tier: 3,
      d: "更快、更硬、更工业化的 techno，为大型仓库派对而生。",
      ch: ["高速", "硬鼓", "工业音色"],
      ar: ["Jeff Mills", "Adam Beyer", "Charlotte de Witte"],
      tr: [["The Bells", "Jeff Mills", 1996]],
      p: ["techno"]
    },
    {
      id: "melodic-techno", n: "Melodic Techno", zh: "旋律科技", f: "techno", y: 2012, r: "欧洲", bpm: "120–126", tier: 3,
      d: "把 trance 的旋律感带回 techno，2010 年代后半成为大型俱乐部主流。",
      ch: ["旋律化", "情绪铺陈", "大型俱乐部"],
      ar: ["Tale of Us", "Stephan Bodzin", "Adriatique"],
      tr: [["Nova", "Tale of Us", 2018]],
      p: ["techno", "trance"]
    },
    {
      id: "electro", n: "Electro", zh: "电子放克", f: "techno", y: 1982, r: "美国", bpm: "110–140", tier: 1,
      d: "808 鼓机 + 机器人声；Afrika Bambaataa 的《Planet Rock》把 Kraftwerk 变成街头音乐。",
      ch: ["808 鼓机", "机器人声", "合成器旋律"],
      ar: ["Afrika Bambaataa", "Egyptian Lover", "Cybotron"],
      tr: [["Planet Rock", "Afrika Bambaataa", 1982], ["Clear", "Cybotron", 1983]],
      p: ["hip-hop", "synth-pop", "krautrock"]
    },
    {
      id: "freestyle", n: "Freestyle", zh: "自由风格", f: "techno", y: 1983, r: "美国·纽约/迈阿密", bpm: "110–125", tier: 3,
      d: "electro + 拉丁旋律 + 合成器，纽约/迈阿密的拉丁裔舞池。",
      ch: ["合成器旋律", "拉丁情感", "舞池节拍"],
      ar: ["Shannon", "Lisa Lisa", "Debbie Deb"],
      tr: [["Let the Music Play", "Shannon", 1983]],
      p: ["electro", "salsa"]
    },
    {
      id: "miami-bass", n: "Miami Bass", zh: "迈阿密低音", f: "techno", y: 1985, r: "美国·迈阿密", bpm: "120–140", tier: 3,
      d: "808 低音 + 快节奏 rap，2 Live Crew 把它变成争议符号。",
      ch: ["808 低音", "快速说唱", "派对主题"],
      ar: ["2 Live Crew", "DJ Magic Mike", "Luke Skyywalker"],
      tr: [["Me So Horny", "2 Live Crew", 1989]],
      p: ["electro", "hip-hop"]
    },
    {
      id: "baile-funk", n: "Baile Funk", zh: "巴西放克", f: "techno", y: 1989, r: "巴西·里约", bpm: "125–140", tier: 3,
      d: "迈阿密低音传到里约，变成贫民窟的派对音乐，后来全球走红。",
      ch: ["碎拍", "重低音", "MC 喊唱"],
      ar: ["DJ Marlboro", "MC João", "Anitta"],
      tr: [["Baile de Favela", "MC João", 2015]],
      p: ["miami-bass", "salsa"]
    },

    /* ---------- UK Bass / Garage ---------- */
    {
      id: "uk-garage", n: "UK Garage", zh: "英国车库", f: "bass", y: 1994, r: "英国·伦敦", bpm: "130–140", tier: 2,
      d: "美国 garage house 传到伦敦，加上 jungle 的低音与切分，变成 UK garage。",
      ch: ["切分鼓组", "低音", "人声切片"],
      ar: ["MJ Cole", "Artful Dodger", "Tuff Jam"],
      tr: [["Re-Rewind", "Artful Dodger", 1999]],
      p: ["garage-house", "jungle"]
    },
    {
      id: "speed-garage", n: "Speed Garage", zh: "速度车库", f: "bass", y: 1996, r: "英国", bpm: "130–140", tier: 3,
      d: "UK garage 加速版：更重的低音、更快的节奏。",
      ch: ["高速", "重低音", "跳跃"],
      ar: ["Double 99", "Armand Van Helden", "Tuff Jam"],
      tr: [["Ripgroove", "Double 99", 1997]],
      p: ["uk-garage", "jungle"]
    },
    {
      id: "2-step", n: "2-Step", zh: "两步车库", f: "bass", y: 1999, r: "英国·伦敦", bpm: "130–138", tier: 3,
      d: "去掉四拍底鼓、留下切分鼓组与人声，是 dubstep 的直接前身。",
      ch: ["切分鼓组", "人声", "留白"],
      ar: ["Craig David", "MJ Cole", "Artful Dodger"],
      tr: [["Fill Me In", "Craig David", 2000]],
      p: ["uk-garage"]
    },
    {
      id: "dubstep", n: "Dubstep", zh: "回响贝斯", f: "bass", y: 2001, r: "英国·伦敦", bpm: "138–142", tier: 1,
      d: "2-step 的节奏 + dub 的低音，伦敦南部的 FWD>> 场景；2010 年 Skrillex 把它带到全球。",
      ch: ["低频 wobble", "半速鼓", "空间感"],
      ar: ["Skream", "Benga", "Burial"],
      tr: [["Midnight Request Line", "Skream", 2005], ["Archangel", "Burial", 2007]],
      p: ["2-step", "dub", "drum-and-bass"]
    },
    {
      id: "grime", n: "Grime", zh: "污垢", f: "bass", y: 2002, r: "英国·伦敦", bpm: "138–142", tier: 2,
      d: "UK garage 加速 + 硬核 rap，东伦敦的 MC 文化。",
      ch: ["快速 MC", "冰冷合成器", "碎拍"],
      ar: ["Dizzee Rascal", "Wiley", "Skepta"],
      tr: [["I Luv U", "Dizzee Rascal", 2003]],
      p: ["uk-garage", "hip-hop"]
    },
    {
      id: "bassline", n: "Bassline", zh: "贝斯线", f: "bass", y: 2003, r: "英国·谢菲尔德", bpm: "130–140", tier: 3,
      d: "谢菲尔德的 speed garage 后代，以跳跃的低音线得名。",
      ch: ["跳跃低音", "4/4 鼓", "女声采样"],
      ar: ["T2", "DJ Q", "Jamie Duggan"],
      tr: [["Heartbroken", "T2", 2007]],
      p: ["speed-garage", "uk-garage"]
    }
  );
})();
