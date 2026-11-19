/* 音乐风格谱系 · 数据 4/4 —— 电子 / 摇滚 / 流行 / 拉丁 */
(function () {
  const G = window.MG;
  G.genres.push(
    /* ---------- 电子 / 氛围 ---------- */
    {
      id: "musique-concrete", n: "Musique Concrète", zh: "具体音乐", f: "electronic", y: 1948, r: "法国·巴黎", bpm: "—", tier: 3,
      d: "用录音带把真实声音剪辑成音乐，Pierre Schaeffer 在巴黎创立，电子音乐的开端之一。",
      ch: ["录音带剪辑", "真实声音", "拼贴"],
      ar: ["Pierre Schaeffer", "Pierre Henry", "Luc Ferrari"],
      tr: [["Étude aux chemins de fer", "Pierre Schaeffer", 1948]],
      p: []
    },
    {
      id: "elektronische-musik", n: "Elektronische Musik", zh: "电子音乐（科隆）", f: "electronic", y: 1953, r: "德国·科隆", bpm: "—", tier: 3,
      d: "科隆 WDR 工作室用振荡器合成纯电子音，与具体音乐相对。",
      ch: ["振荡器", "纯电子音", "序列化"],
      ar: ["Karlheinz Stockhausen", "Gottfried Michael Koenig"],
      tr: [["Gesang der Jünglinge", "Karlheinz Stockhausen", 1956]],
      p: ["musique-concrete"]
    },
    {
      id: "krautrock", n: "Krautrock", zh: "德国摇滚", f: "electronic", y: 1968, r: "德国", bpm: "90–150", tier: 2,
      d: "德国乐队把摇滚、电子、极简与即兴混合；Kraftwerk 从这条线走向合成器流行。",
      ch: ["重复律动", "电子实验", "即兴"],
      ar: ["Kraftwerk", "Can", "Neu!"],
      tr: [["Autobahn", "Kraftwerk", 1974]],
      p: ["psychedelic-rock", "elektronische-musik"]
    },
    {
      id: "ambient", n: "Ambient", zh: "氛围音乐", f: "electronic", y: 1975, r: "英国", bpm: "—", tier: 1,
      d: "用音色和空间取代旋律与节奏；Brian Eno 把它定义为「必须能被打断的音乐」。",
      ch: ["音色优先", "空间感", "无明确节拍"],
      ar: ["Brian Eno", "Aphex Twin", "Stars of the Lid"],
      tr: [["1/1", "Brian Eno", 1978]],
      p: ["elektronische-musik", "krautrock"]
    },
    {
      id: "synth-pop", n: "Synth-Pop", zh: "合成器流行", f: "electronic", y: 1978, r: "英国", bpm: "100–130", tier: 1,
      d: "朋克之后的合成器乐队，把 disco 的舞池感和电子音色带进流行榜。",
      ch: ["合成器", "鼓机", "流行旋律"],
      ar: ["Depeche Mode", "The Human League", "New Order"],
      tr: [["Don't You Want Me", "The Human League", 1981]],
      p: ["new-wave", "elektronische-musik", "disco"]
    },
    {
      id: "downtempo", n: "Downtempo", zh: "慢拍电子", f: "electronic", y: 1990, r: "英国/欧洲", bpm: "80–110", tier: 3,
      d: "90 年代的慢速电子：breakbeat、氛围与灵魂乐混合，适合沙发与耳机。",
      ch: ["慢速", "氛围", "采样"],
      ar: ["Kruder & Dorfmeister", "Bonobo", "Nightmares on Wax"],
      tr: [["High Noon", "Kruder & Dorfmeister", 1998]],
      p: ["ambient", "hip-hop"]
    },
    {
      id: "trip-hop", n: "Trip-Hop", zh: "神游舞曲", f: "electronic", y: 1991, r: "英国·布里斯托", bpm: "80–100", tier: 1,
      d: "布里斯托尔之声：慢速 breakbeat + 黑暗氛围 + 女声。",
      ch: ["慢速 breakbeat", "黑暗氛围", "女声"],
      ar: ["Massive Attack", "Portishead", "Tricky"],
      tr: [["Teardrop", "Massive Attack", 1998]],
      p: ["downtempo", "hip-hop", "soul"]
    },
    {
      id: "chillout", n: "Chillout", zh: "休闲电子", f: "electronic", y: 1990, r: "英国", bpm: "80–110", tier: 3,
      d: "为 chillout room 与日落准备的舒缓电子。",
      ch: ["舒缓", "氛围", "无攻击性"],
      ar: ["The Orb", "Zero 7", "Air"],
      tr: [["Little Fluffy Clouds", "The Orb", 1990]],
      p: ["ambient", "downtempo"]
    },
    {
      id: "idm", n: "IDM", zh: "智能舞曲", f: "electronic", y: 1992, r: "英国", bpm: "90–160", tier: 2,
      d: "为耳机而非舞池做的电子乐：复杂节拍与音色设计。",
      ch: ["复杂节拍", "音色设计", "耳机音乐"],
      ar: ["Aphex Twin", "Boards of Canada", "Autechre"],
      tr: [["Windowlicker", "Aphex Twin", 1999]],
      p: ["techno", "ambient", "breakbeat"]
    },
    {
      id: "synthwave", n: "Synthwave", zh: "合成器浪潮", f: "electronic", y: 2005, r: "网络/法国", bpm: "80–120", tier: 3,
      d: "对 1980 年代电影配乐与 synth-pop 的复古想象。",
      ch: ["复古合成器", "霓虹氛围", "80s 电影感"],
      ar: ["Kavinsky", "Perturbator", "The Midnight"],
      tr: [["Nightcall", "Kavinsky", 2010]],
      p: ["synth-pop", "italo-disco"]
    },
    {
      id: "vaporwave", n: "Vaporwave", zh: "蒸汽波", f: "electronic", y: 2010, r: "网络", bpm: "60–90", tier: 2,
      d: "把 80/90 年代流行与广告音乐放慢、切碎，做成消费主义的梦。",
      ch: ["采样放慢", "怀旧", "拼贴"],
      ar: ["Macintosh Plus", "Saint Pepsi", "Daniel Lopatin"],
      tr: [["リサフランク420 / 現代のコンピュー", "Macintosh Plus", 2011]],
      p: ["chillout", "synth-pop"]
    },

    /* ---------- 摇滚 / 金属 ---------- */
    {
      id: "rock-and-roll", n: "Rock & Roll", zh: "摇滚乐", f: "rock", y: 1954, r: "美国", bpm: "120–170", tier: 1,
      d: "R&B 的节奏 + 乡村的吉他 + 青少年的叛逆，1950 年代把流行乐劈成两半。",
      ch: ["后拍加重", "电吉他", "青少年主题"],
      ar: ["Elvis Presley", "Chuck Berry", "Little Richard"],
      tr: [["Johnny B. Goode", "Chuck Berry", 1958]],
      p: ["rhythm-and-blues", "country", "gospel"]
    },
    {
      id: "rockabilly", n: "Rockabilly", zh: "山区乡村摇滚", f: "rock", y: 1955, r: "美国·孟菲斯", bpm: "130–170", tier: 3,
      d: "乡村歌手玩起 R&B：拍击贝斯、回声吉他、山猫式嗓音。",
      ch: ["拍击贝斯", "回声吉他", "快速"],
      ar: ["Elvis Presley", "Carl Perkins", "Wanda Jackson"],
      tr: [["Blue Suede Shoes", "Carl Perkins", 1956]],
      p: ["rock-and-roll", "country"]
    },
    {
      id: "garage-rock", n: "Garage Rock", zh: "车库摇滚", f: "rock", y: 1965, r: "美国", bpm: "120–150", tier: 3,
      d: "业余乐队在车库里录出的粗糙摇滚，朋克的精神祖先。",
      ch: ["粗糙录音", "简单和弦", "能量"],
      ar: ["The Sonics", "The Stooges", "The Seeds"],
      tr: [["I Wanna Be Your Dog", "The Stooges", 1969]],
      p: ["rock-and-roll"]
    },
    {
      id: "folk-rock", n: "Folk Rock", zh: "民谣摇滚", f: "rock", y: 1965, r: "美国/英国", bpm: "90–130", tier: 3,
      d: "把民谣的歌词与和声接上电吉他，Bob Dylan 与 The Byrds 是关键。",
      ch: ["民谣和声", "电吉他", "文学歌词"],
      ar: ["Bob Dylan", "The Byrds", "Simon & Garfunkel"],
      tr: [["Like a Rolling Stone", "Bob Dylan", 1965]],
      p: ["folk", "rock-and-roll"]
    },
    {
      id: "psychedelic-rock", n: "Psychedelic Rock", zh: "迷幻摇滚", f: "rock", y: 1966, r: "美国/英国", bpm: "80–140", tier: 2,
      d: "用反馈、回声、东方音阶与录音室实验模拟迷幻体验。",
      ch: ["吉他反馈", "录音室实验", "东方音阶"],
      ar: ["The Beatles", "Pink Floyd", "Jimi Hendrix"],
      tr: [["Purple Haze", "Jimi Hendrix", 1967]],
      p: ["folk-rock", "garage-rock"]
    },
    {
      id: "progressive-rock", n: "Progressive Rock", zh: "前卫摇滚", f: "rock", y: 1968, r: "英国", bpm: "—", tier: 2,
      d: "长曲式、概念专辑、古典与爵士影响，把摇滚当交响乐写。",
      ch: ["长曲式", "变拍", "概念专辑"],
      ar: ["Pink Floyd", "King Crimson", "Yes"],
      tr: [["21st Century Schizoid Man", "King Crimson", 1969]],
      p: ["psychedelic-rock", "jazz-fusion"]
    },
    {
      id: "hard-rock", n: "Hard Rock", zh: "硬摇滚", f: "rock", y: 1968, r: "英国/美国", bpm: "100–140", tier: 2,
      d: "更响、更重的布鲁斯摇滚：失真吉他、强力和弦、大嗓门。",
      ch: ["失真吉他", "强力和弦", "重型鼓"],
      ar: ["Led Zeppelin", "Deep Purple", "AC/DC"],
      tr: [["Whole Lotta Love", "Led Zeppelin", 1969]],
      p: ["rock-and-roll", "blues"]
    },
    {
      id: "heavy-metal", n: "Heavy Metal", zh: "重金属", f: "metal", y: 1970, r: "英国", bpm: "100–160", tier: 1,
      d: "把硬摇滚推向更黑暗、更重型的方向：降调吉他、双踩、神秘学与工业意象。",
      ch: ["降调吉他", "重型节奏", "黑暗主题"],
      ar: ["Black Sabbath", "Judas Priest", "Iron Maiden"],
      tr: [["Paranoid", "Black Sabbath", 1970]],
      p: ["hard-rock", "blues"]
    },
    {
      id: "punk-rock", n: "Punk Rock", zh: "朋克摇滚", f: "punk", y: 1976, r: "美国/英国", bpm: "150–200", tier: 1,
      d: "对前卫摇滚的反动：短、快、粗糙、DIY，把摇滚还回车库。",
      ch: ["短快", "粗糙", "DIY"],
      ar: ["Ramones", "Sex Pistols", "The Clash"],
      tr: [["Anarchy in the U.K.", "Sex Pistols", 1976]],
      p: ["garage-rock", "rock-and-roll"]
    },
    {
      id: "new-wave", n: "New Wave", zh: "新浪潮", f: "rock", y: 1977, r: "英国/美国", bpm: "110–150", tier: 2,
      d: "朋克的能量 + 合成器 + 流行旋律，80 年代电台的声音。",
      ch: ["合成器", "流行旋律", "艺术感"],
      ar: ["Blondie", "Talking Heads", "The Cure"],
      tr: [["Heart of Glass", "Blondie", 1978]],
      p: ["punk-rock", "synth-pop"]
    },
    {
      id: "post-punk", n: "Post-Punk", zh: "后朋克", f: "rock", y: 1978, r: "英国", bpm: "100–160", tier: 1,
      d: "更黑暗、更实验：放克贝斯、噪音吉他、冷峻文本。",
      ch: ["放克贝斯", "噪音吉他", "冷峻"],
      ar: ["Joy Division", "Gang of Four", "Siouxsie and the Banshees"],
      tr: [["Love Will Tear Us Apart", "Joy Division", 1980]],
      p: ["punk-rock", "krautrock"]
    },
    {
      id: "gothic-rock", n: "Gothic Rock", zh: "哥特摇滚", f: "rock", y: 1979, r: "英国", bpm: "90–140", tier: 3,
      d: "后朋克最黑暗的分支：低沉嗓音、合唱式吉他、吸血鬼美学。",
      ch: ["低沉嗓音", "合唱式吉他", "黑暗美学"],
      ar: ["Bauhaus", "The Sisters of Mercy", "Siouxsie and the Banshees"],
      tr: [["Bela Lugosi's Dead", "Bauhaus", 1979]],
      p: ["post-punk"]
    },
    {
      id: "industrial", n: "Industrial", zh: "工业音乐", f: "rock", y: 1979, r: "英国", bpm: "90–150", tier: 2,
      d: "噪音、金属敲击、磁带实验 + 摇滚，后来演化出工业金属与工业舞曲。",
      ch: ["噪音", "金属敲击", "磁带实验"],
      ar: ["Throbbing Gristle", "Nine Inch Nails", "Ministry"],
      tr: [["Head Like a Hole", "Nine Inch Nails", 1989]],
      p: ["post-punk", "elektronische-musik"]
    },
    {
      id: "hardcore-punk", n: "Hardcore Punk", zh: "硬核朋克", f: "punk", y: 1980, r: "美国", bpm: "160–220", tier: 2,
      d: "朋克加速、加重、更政治化，是 emo、post-hardcore、thrash 的共同源头。",
      ch: ["极速", "喊叫", "DIY 场景"],
      ar: ["Black Flag", "Minor Threat", "Dead Kennedys"],
      tr: [["Straight Edge", "Minor Threat", 1981]],
      p: ["punk-rock"]
    },
    {
      id: "thrash-metal", n: "Thrash Metal", zh: "鞭击金属", f: "metal", y: 1983, r: "美国", bpm: "160–220", tier: 2,
      d: "重金属的速度 + 硬核朋克的攻击性，湾区金属的起点。",
      ch: ["高速扫弦", "双踩", "攻击性"],
      ar: ["Metallica", "Slayer", "Megadeth"],
      tr: [["Master of Puppets", "Metallica", 1986]],
      p: ["heavy-metal", "hardcore-punk"]
    },
    {
      id: "death-metal", n: "Death Metal", zh: "死亡金属", f: "metal", y: 1987, r: "美国/瑞典", bpm: "160–240", tier: 3,
      d: "thrash 的极端化：低吼、降调、复杂变速与技术化演奏。",
      ch: ["低吼", "降调", "变速"],
      ar: ["Death", "Cannibal Corpse", "Morbid Angel"],
      tr: [["Symbolic", "Death", 1995]],
      p: ["thrash-metal"]
    },
    {
      id: "black-metal", n: "Black Metal", zh: "黑金属", f: "metal", y: 1991, r: "挪威", bpm: "150–220", tier: 3,
      d: "挪威地下场景的极端金属：tremolo 扫弦、尖叫、氛围化的黑暗。",
      ch: ["tremolo 扫弦", "尖叫", "氛围黑暗"],
      ar: ["Mayhem", "Burzum", "Emperor"],
      tr: [["Freezing Moon", "Mayhem", 1994]],
      p: ["thrash-metal", "death-metal"]
    },
    {
      id: "alternative-rock", n: "Alternative Rock", zh: "另类摇滚", f: "rock", y: 1985, r: "美国/英国", bpm: "90–150", tier: 1,
      d: "地下摇滚的总称：从 college rock 到 grunge，90 年代接管主流。",
      ch: ["地下美学", "吉他", "反主流"],
      ar: ["R.E.M.", "Sonic Youth", "Pixies"],
      tr: [["Losing My Religion", "R.E.M.", 1991]],
      p: ["post-punk", "punk-rock"]
    },
    {
      id: "shoegaze", n: "Shoegaze", zh: "盯鞋", f: "indie", y: 1989, r: "英国", bpm: "90–130", tier: 3,
      d: "大量吉他效果器 + 耳语人声，把噪音做成一片雾。",
      ch: ["吉他效果器", "耳语人声", "音墙"],
      ar: ["My Bloody Valentine", "Slowdive", "Ride"],
      tr: [["Only Shallow", "My Bloody Valentine", 1991]],
      p: ["alternative-rock", "ambient"]
    },
    {
      id: "grunge", n: "Grunge", zh: "垃圾摇滚", f: "rock", y: 1988, r: "美国·西雅图", bpm: "90–140", tier: 2,
      d: "西雅图的泥泞摇滚：金属的重 + 朋克的糙 + 一代人的丧。",
      ch: ["脏失真", "半速重音", "丧感"],
      ar: ["Nirvana", "Pearl Jam", "Soundgarden"],
      tr: [["Black Hole Sun", "Soundgarden", 1994]],
      p: ["alternative-rock", "hard-rock"]
    },
    {
      id: "pop-punk", n: "Pop Punk", zh: "流行朋克", f: "punk", y: 1985, r: "美国", bpm: "150–190", tier: 2,
      d: "朋克的速度 + 流行副歌，90 年代末到 2000 年代青少年电台的主流。",
      ch: ["快速", "大副歌", "青少年主题"],
      ar: ["Green Day", "Blink-182", "The Offspring"],
      tr: [["Basket Case", "Green Day", 1994]],
      p: ["punk-rock", "pop"]
    },
    {
      id: "emo", n: "Emo", zh: "情绪硬核", f: "punk", y: 1985, r: "美国", bpm: "120–180", tier: 3,
      d: "从硬核朋克分出的情感表达：自白歌词、动态起伏、后来的黑色眼线。",
      ch: ["自白歌词", "动态起伏", "情感爆发"],
      ar: ["Sunny Day Real Estate", "My Chemical Romance", "Paramore"],
      tr: [["Welcome to the Black Parade", "My Chemical Romance", 2006]],
      p: ["hardcore-punk"]
    },
    {
      id: "post-hardcore", n: "Post-Hardcore", zh: "后硬核", f: "punk", y: 1985, r: "美国", bpm: "130–180", tier: 3,
      d: "硬核的能量 + 实验结构、动态与旋律。",
      ch: ["动态结构", "实验", "喊唱"],
      ar: ["Fugazi", "At the Drive-In", "Thursday"],
      tr: [["One Armed Scissor", "At the Drive-In", 2000]],
      p: ["hardcore-punk"]
    },
    {
      id: "post-rock", n: "Post-Rock", zh: "后摇滚", f: "rock", y: 1994, r: "英国/美国", bpm: "—", tier: 3,
      d: "用摇滚乐器做氛围与渐强，弱化人声，接近古典的叙事。",
      ch: ["渐强", "氛围", "器乐"],
      ar: ["Mogwai", "Explosions in the Sky", "Godspeed You! Black Emperor"],
      tr: [["Your Hand in Mine", "Explosions in the Sky", 2003]],
      p: ["post-punk", "ambient"]
    },
    {
      id: "nu-metal", n: "Nu Metal", zh: "新金属", f: "metal", y: 1994, r: "美国", bpm: "90–130", tier: 2,
      d: "重金属 + hip-hop 节奏 + 降调吉他，2000 年前后统治青少年市场。",
      ch: ["降调吉他", "说唱", "DJ 刮碟"],
      ar: ["Korn", "Limp Bizkit", "Linkin Park"],
      tr: [["In the End", "Linkin Park", 2000]],
      p: ["alternative-rock", "heavy-metal", "hip-hop"]
    },
    {
      id: "metalcore", n: "Metalcore", zh: "金属核", f: "metal", y: 1995, r: "美国", bpm: "140–200", tier: 3,
      d: "硬核朋克 + 死亡金属：breakdown、双踩与旋律副歌。",
      ch: ["breakdown", "双踩", "旋律副歌"],
      ar: ["Killswitch Engage", "Bring Me the Horizon", "August Burns Red"],
      tr: [["My Curse", "Killswitch Engage", 2006]],
      p: ["hardcore-punk", "death-metal"]
    },

    /* ---------- 流行 ---------- */
    {
      id: "pop", n: "Pop", zh: "流行音乐", f: "pop", y: 1950, r: "美国/英国", bpm: "—", tier: 1,
      d: "为榜单与大众市场而写的歌：Tin Pan Alley 的旋律传统 + 摇滚时代的制作。",
      ch: ["强旋律", "短时长", "记忆点"],
      ar: ["The Beatles", "Madonna", "Taylor Swift"],
      tr: [["Billie Jean", "Michael Jackson", 1982]],
      p: []
    },
    {
      id: "dance-pop", n: "Dance-Pop", zh: "舞曲流行", f: "pop", y: 1983, r: "美国/英国", bpm: "110–130", tier: 2,
      d: "为电台和舞池同时设计的流行乐：disco 的节拍 + 流行副歌。",
      ch: ["舞池节拍", "流行副歌", "精致制作"],
      ar: ["Madonna", "Kylie Minogue", "Britney Spears"],
      tr: [["Like a Prayer", "Madonna", 1989]],
      p: ["pop", "disco", "house"]
    },
    {
      id: "city-pop", n: "City Pop", zh: "城市流行", f: "pop", y: 1978, r: "日本", bpm: "95–120", tier: 2,
      d: "泡沫经济前的日本，把 funk/disco/soft rock 做成都市夜景，近年被网络重新发现。",
      ch: ["都市感", "funk 贝斯", "合成器"],
      ar: ["山下達郎", "竹内まりや", "Anri"],
      tr: [["Plastic Love", "竹内まりや", 1984]],
      p: ["pop", "funk", "disco"]
    },
    {
      id: "teen-pop", n: "Teen Pop", zh: "青少年流行", f: "pop", y: 1996, r: "美国", bpm: "100–130", tier: 3,
      d: "面向青少年的偶像流行：舞曲节拍、青春主题、MV 工业。",
      ch: ["偶像", "舞曲节拍", "青春主题"],
      ar: ["Britney Spears", "*NSYNC", "Backstreet Boys"],
      tr: [["...Baby One More Time", "Britney Spears", 1998]],
      p: ["pop", "dance-pop"]
    },
    {
      id: "electropop", n: "Electropop", zh: "电子流行", f: "pop", y: 2007, r: "美国/欧洲", bpm: "110–130", tier: 2,
      d: "2000 年代末的合成器流行回潮：尖锐合成器、夸张人声、俱乐部节拍。",
      ch: ["合成器", "夸张人声", "俱乐部节拍"],
      ar: ["Lady Gaga", "Katy Perry", "La Roux"],
      tr: [["Bad Romance", "Lady Gaga", 2009]],
      p: ["synth-pop", "electro-house"]
    },
    {
      id: "k-pop", n: "K-Pop", zh: "韩国流行", f: "pop", y: 1992, r: "韩国", bpm: "100–130", tier: 2,
      d: "韩国把 pop、R&B、hip-hop 与偶像工业结合，2010 年代成为全球现象。",
      ch: ["偶像团体", "精致制作", "多曲风拼贴"],
      ar: ["BTS", "BLACKPINK", "Girls' Generation"],
      tr: [["Dynamite", "BTS", 2020]],
      p: ["pop", "hip-hop", "contemporary-rnb"]
    },
    {
      id: "hyperpop", n: "Hyperpop", zh: "超流行", f: "pop", y: 2016, r: "英国/网络", bpm: "140–180", tier: 2,
      d: "把 pop、trap、电子与网络梗推到失真的极限。",
      ch: ["失真", "高音人声", "拼贴"],
      ar: ["SOPHIE", "Charli XCX", "100 gecs"],
      tr: [["Immaterial", "SOPHIE", 2018]],
      p: ["electropop", "trap"]
    },

    /* ---------- 拉丁 / 加勒比 / 非洲 ---------- */
    {
      id: "son-cubano", n: "Son Cubano", zh: "古巴颂", f: "latin", y: 1920, r: "古巴", bpm: "90–120", tier: 3,
      d: "古巴东部的音乐：西班牙吉他、非洲节奏与特雷斯琴，是 salsa 的骨架。",
      ch: ["特雷斯琴", "非洲节奏", "呼应对唱"],
      ar: ["Arsenio Rodríguez", "Buena Vista Social Club", "Compay Segundo"],
      tr: [["Chan Chan", "Buena Vista Social Club", 1997]],
      p: []
    },
    {
      id: "mambo", n: "Mambo", zh: "曼波", f: "latin", y: 1940, r: "古巴/美国", bpm: "130–180", tier: 3,
      d: "古巴 son 遇上大乐队爵士：铜管 riff、切分节奏、舞厅狂热。",
      ch: ["铜管 riff", "切分", "舞厅"],
      ar: ["Pérez Prado", "Tito Puente", "Machito"],
      tr: [["Mambo No. 5", "Pérez Prado", 1949]],
      p: ["son-cubano"]
    },
    {
      id: "salsa", n: "Salsa", zh: "萨尔萨", f: "latin", y: 1965, r: "美国·纽约/加勒比", bpm: "150–220", tier: 2,
      d: "古巴 son + 纽约拉丁爵士 + 波多黎各节奏，Fania 厂牌把它变成全球语言。",
      ch: ["钢琴 montuno", "铜管", "复杂打击乐"],
      ar: ["Fania All-Stars", "Celia Cruz", "Héctor Lavoe"],
      tr: [["El Cantante", "Héctor Lavoe", 1978]],
      p: ["son-cubano", "mambo"]
    },
    {
      id: "cumbia", n: "Cumbia", zh: "昆比亚", f: "latin", y: 1945, r: "哥伦比亚", bpm: "90–110", tier: 3,
      d: "哥伦比亚海岸的舞曲：手风琴、刮瓜、稳定低音，遍布拉美。",
      ch: ["手风琴", "刮瓜", "摇摆律动"],
      ar: ["Los Ángeles Azules", "Totó la Momposina", "Los Corraleros"],
      tr: [["Cómo Te Voy a Olvidar", "Los Ángeles Azules", 1996]],
      p: []
    },
    {
      id: "ska", n: "Ska", zh: "斯卡", f: "latin", y: 1959, r: "牙买加", bpm: "120–160", tier: 2,
      d: "牙买加把 R&B 加速、加重反拍，是 reggae 的前身。",
      ch: ["反拍吉他", "铜管", "快步舞"],
      ar: ["The Skatalites", "Toots and the Maytals", "The Specials"],
      tr: [["54-46 That's My Number", "Toots & the Maytals", 1968]],
      p: ["rhythm-and-blues"]
    },
    {
      id: "rocksteady", n: "Rocksteady", zh: "慢摇", f: "latin", y: 1966, r: "牙买加", bpm: "90–110", tier: 3,
      d: "ska 放慢后的过渡形态：更重的贝斯、更 soulful 的人声。",
      ch: ["慢速", "重贝斯", "人声和声"],
      ar: ["Alton Ellis", "The Paragons", "Desmond Dekker"],
      tr: [["The Tide Is High", "The Paragons", 1967]],
      p: ["ska"]
    },
    {
      id: "reggae", n: "Reggae", zh: "雷鬼", f: "latin", y: 1968, r: "牙买加", bpm: "60–90", tier: 1,
      d: "更慢、更重低音，Rastafari 与政治意识；Bob Marley 把它带向世界。",
      ch: ["慢速", "反拍吉他", "重低音"],
      ar: ["Bob Marley", "Peter Tosh", "Burning Spear"],
      tr: [["No Woman, No Cry", "Bob Marley", 1974]],
      p: ["rocksteady"]
    },
    {
      id: "dub", n: "Dub", zh: "回响", f: "latin", y: 1972, r: "牙买加", bpm: "60–90", tier: 2,
      d: "把 reggae 拆成回声与低音；King Tubby 把调音台变成乐器。",
      ch: ["延迟/混响", "低音", "空间"],
      ar: ["King Tubby", "Lee 'Scratch' Perry", "Scientist"],
      tr: [["Blackboard Jungle Dub", "The Upsetters", 1973]],
      p: ["reggae"]
    },
    {
      id: "dancehall", n: "Dancehall", zh: "舞厅雷鬼", f: "latin", y: 1979, r: "牙买加", bpm: "90–110", tier: 2,
      d: "数字节奏 + 更快的 DJ 说唱，牙买加舞厅文化。",
      ch: ["数字节奏", "DJ 说唱", "舞厅"],
      ar: ["Shabba Ranks", "Sean Paul", "Vybz Kartel"],
      tr: [["Get Busy", "Sean Paul", 2003]],
      p: ["reggae"]
    },
    {
      id: "reggaeton", n: "Reggaeton", zh: "雷鬼顿", f: "latin", y: 1994, r: "波多黎各", bpm: "90–100", tier: 2,
      d: "dancehall 的节奏 + hip-hop + 拉丁旋律，dembow 鼓型。",
      ch: ["dembow 鼓型", "西班牙语说唱", "俱乐部"],
      ar: ["Daddy Yankee", "Bad Bunny", "Don Omar"],
      tr: [["Gasolina", "Daddy Yankee", 2004]],
      p: ["dancehall", "hip-hop"]
    },
    {
      id: "latin-trap", n: "Latin Trap", zh: "拉丁陷阱", f: "latin", y: 2015, r: "波多黎各", bpm: "130–150", tier: 3,
      d: "trap 的 808 与暗色旋律 + 西班牙语，2010 年代后期统治全球榜单。",
      ch: ["808", "暗色旋律", "西班牙语"],
      ar: ["Bad Bunny", "J Balvin", "Anuel AA"],
      tr: [["Tití Me Preguntó", "Bad Bunny", 2022]],
      p: ["trap", "reggaeton"]
    },
    {
      id: "highlife", n: "Highlife", zh: "Highlife", f: "latin", y: 1920, r: "加纳", bpm: "100–130", tier: 3,
      d: "西非的舞会音乐：吉他、铜管、多声部旋律，影响了 afrobeat。",
      ch: ["吉他旋律", "铜管", "舞会"],
      ar: ["E.T. Mensah", "Osibisa"],
      tr: [["All for You", "E.T. Mensah", 1953]],
      p: []
    },
    {
      id: "afrobeat", n: "Afrobeat", zh: "非洲节拍", f: "latin", y: 1969, r: "尼日利亚", bpm: "100–120", tier: 2,
      d: "Fela 把 highlife、funk、爵士与政治抗争结合，长篇、催眠、管乐齐奏。",
      ch: ["长曲式", "管乐齐奏", "政治歌词"],
      ar: ["Fela Kuti", "Tony Allen", "Antibalas"],
      tr: [["Zombie", "Fela Kuti", 1976]],
      p: ["highlife", "funk", "jazz-fusion"]
    },
    {
      id: "afrobeats", n: "Afrobeats", zh: "非洲流行", f: "latin", y: 2010, r: "尼日利亚/加纳", bpm: "100–115", tier: 2,
      d: "尼日利亚/加纳的现代流行：更轻、更旋律化，与 afrobeat 拼写不同、声音也不同。",
      ch: ["轻快律动", "旋律人声", "舞曲"],
      ar: ["Wizkid", "Burna Boy", "Davido"],
      tr: [["Essence", "WizKid", 2020]],
      p: ["afrobeat", "dancehall", "house"]
    }
  );
})();
