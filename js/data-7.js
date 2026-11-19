/* 音乐风格谱系 · 数据 6 —— 独立/另类 + 摇滚补充 + 流行补充
   字段同 data-1.js */
(function () {
  const G = (window.MG = window.MG || { families: [], genres: [] });

  G.genres.push(
    /* ================= 独立 / 另类 ================= */
    {
      id: "indie-rock", n: "Indie Rock", zh: "独立摇滚", f: "indie", y: 1982, r: "美国 / 英国", bpm: "100–150", tier: 1,
      d: "在主流厂牌之外自办厂牌、自己录音的摇滚：吉他为主、制作粗粝、态度疏离，后来成了整个另类音乐的母体。",
      ch: ["自制发行", "吉他主导", "疏离感"],
      ar: ["R.E.M.", "Pavement", "Modest Mouse"],
      tr: [["Cut Your Hair", "Pavement", 1994]],
      p: ["post-punk", "alternative-rock"]
    },
    {
      id: "jangle-pop", n: "Jangle Pop", zh: "叮当流行", f: "indie", y: 1982, r: "英国 / 美国", bpm: "110–150", tier: 3,
      d: "清亮、带回声的 Rickenbacker 吉他叮当作响，The Smiths 与 R.E.M. 把它做成 80 年代独立吉他的标准音色。",
      ch: ["叮当吉他", "清亮音色", "旋律优先"],
      ar: ["The Smiths", "R.E.M.", "The Byrds"],
      tr: [["This Charming Man", "The Smiths", 1983]],
      p: ["indie-rock", "post-punk"]
    },
    {
      id: "twee-pop", n: "Twee Pop", zh: "小清新流行", f: "indie", y: 1986, r: "英国", bpm: "100–140", tier: 3,
      d: "刻意幼稚、旋律甜美的独立流行：手鼓、童声和声、歌词关于暗恋与自行车，Belle and Sebastian 是代表。",
      ch: ["甜美旋律", "小编制", "童趣"],
      ar: ["Talulah Gosh", "Beat Happening", "Belle and Sebastian"],
      tr: [["The State I Am In", "Belle and Sebastian", 1996]],
      p: ["jangle-pop", "indie-pop"]
    },
    {
      id: "c86", n: "C86", zh: "C86 一代", f: "indie", y: 1986, r: "英国", bpm: "120–160", tier: 3,
      d: "NME 的卡带合辑命名了一整代英国独立乐队：嘈杂又甜美、DIY、现场感强，Primal Scream 早期就在其中。",
      ch: ["DIY", "甜美噪音", "现场感"],
      ar: ["Primal Scream", "The Pastels", "McCarthy"],
      tr: [["Velocity Girl", "Primal Scream", 1986]],
      p: ["jangle-pop", "indie-pop"]
    },
    {
      id: "britpop", n: "Britpop", zh: "英式摇滚", f: "indie", y: 1992, r: "英国", bpm: "110–150", tier: 2,
      d: "90 年代英国对 grunge 的反击：披头士式的旋律、工人阶级叙事与媒体大战，Oasis 与 Blur 定义了它。",
      ch: ["旋律副歌", "英式吉他", "时代感"],
      ar: ["Oasis", "Blur", "Pulp"],
      tr: [["Common People", "Pulp", 1995]],
      p: ["indie-rock", "madchester", "jangle-pop"]
    },
    {
      id: "madchester", n: "Madchester", zh: "曼彻斯特之声", f: "indie", y: 1988, r: "英国·曼彻斯特", bpm: "110–130", tier: 3,
      d: "曼彻斯特把独立吉他接上 acid house 的鼓机与舞池律动，Stone Roses 与 Happy Mondays 是旗帜。",
      ch: ["舞池律动", "吉他加鼓机", "宽松感"],
      ar: ["The Stone Roses", "Happy Mondays", "Inspiral Carpets"],
      tr: [["Fools Gold", "The Stone Roses", 1989]],
      p: ["indie-rock", "acid-house"]
    },
    {
      id: "baggy", n: "Baggy", zh: "宽松舞曲", f: "indie", y: 1988, r: "英国", bpm: "110–130", tier: 3,
      d: "Madchester 的松散分支：更重的 funk 贝斯、更随意的穿着与舞步，直接连接后来的 britpop。",
      ch: ["Funk 贝斯", "松散节奏", "舞池"],
      ar: ["Happy Mondays", "The Charlatans", "The Stone Roses"],
      tr: [["Step On", "Happy Mondays", 1990]],
      p: ["madchester", "indie-rock"]
    },
    {
      id: "dream-pop", n: "Dream Pop", zh: "梦幻流行", f: "indie", y: 1984, r: "英国", bpm: "80–120", tier: 2,
      d: "把人声与吉他都裹进混响和延迟里，像隔着雾气听歌；Cocteau Twins 与 Beach House 相隔三十年却同一种温度。",
      ch: ["混响", "气声", "朦胧"],
      ar: ["Cocteau Twins", "Slowdive", "Beach House"],
      tr: [["Cherry-coloured Funk", "Cocteau Twins", 1990]],
      p: ["post-punk", "indie-rock"]
    },
    {
      id: "noise-pop", n: "Noise Pop", zh: "噪音流行", f: "indie", y: 1985, r: "英国 / 美国", bpm: "100–140", tier: 3,
      d: "用噪音墙包住流行旋律，The Jesus and Mary Chain 的《Psychocandy》是分水岭。",
      ch: ["噪音墙", "流行旋律", "反馈"],
      ar: ["The Jesus and Mary Chain", "Yo La Tengo", "No Age"],
      tr: [["Just Like Honey", "The Jesus and Mary Chain", 1985]],
      p: ["indie-rock", "noise-rock"]
    },
    {
      id: "indie-pop", n: "Indie Pop", zh: "独立流行", f: "indie", y: 1980, r: "英国", bpm: "100–140", tier: 2,
      d: "独立厂牌发行的流行乐：旋律优先、制作轻巧，介于 twee 与主流流行之间。",
      ch: ["旋律优先", "轻编制", "DIY"],
      ar: ["The Pastels", "Camera Obscura", "Belle and Sebastian"],
      tr: [["Lloyd, I'm Ready to Be Heartbroken", "Camera Obscura", 2006]],
      p: ["indie-rock", "jangle-pop"]
    },
    {
      id: "bedroom-pop", n: "Bedroom Pop", zh: "卧室流行", f: "indie", y: 2010, r: "全球", bpm: "80–120", tier: 2,
      d: "一台笔记本、一支麦克风在卧室做完的流行乐：低保真、私密、混响很湿，流媒体时代的新独立。",
      ch: ["低保真", "私密感", "宅录"],
      ar: ["Clairo", "Rex Orange County", "Girl in Red"],
      tr: [["Pretty Girl", "Clairo", 2017]],
      p: ["indie-pop", "lo-fi-hip-hop"]
    },

    /* ================= 摇滚补充 ================= */
    {
      id: "surf-rock", n: "Surf Rock", zh: "冲浪摇滚", f: "rock", y: 1961, r: "美国·加州", bpm: "120–160", tier: 2,
      d: "加州的冲浪文化配混响吉他：颤音、滑音与快速拨弦，Dick Dale 的《Misirlou》是终极范本。",
      ch: ["混响吉他", "颤音", "快速拨弦"],
      ar: ["Dick Dale", "The Ventures", "The Surfaris"],
      tr: [["Misirlou", "Dick Dale", 1962]],
      p: ["rock-and-roll", "rockabilly"]
    },
    {
      id: "garage-punk", n: "Garage Punk", zh: "车库朋克", f: "rock", y: 1976, r: "美国", bpm: "140–180", tier: 2,
      d: "车库摇滚的粗糙与朋克的能量合流：失真、喊叫、三和弦，The Stooges 是原型。",
      ch: ["三和弦", "粗糙", "高能量"],
      ar: ["The Stooges", "The Sonics", "Ty Segall"],
      tr: [["I Wanna Be Your Dog", "The Stooges", 1969]],
      p: ["garage-rock", "punk-rock"]
    },
    {
      id: "space-rock", n: "Space Rock", zh: "太空摇滚", f: "rock", y: 1988, r: "英国", bpm: "90–140", tier: 3,
      d: "用长段重复、合成器与回声制造失重感，Hawkwind 开路，Spacemen 3 把它做得更极简。",
      ch: ["重复乐段", "合成器", "失重感"],
      ar: ["Hawkwind", "Spacemen 3", "Spiritualized"],
      tr: [["Silver Machine", "Hawkwind", 1972]],
      p: ["psychedelic-rock", "progressive-rock"]
    },
    {
      id: "noise-rock", n: "Noise Rock", zh: "噪音摇滚", f: "rock", y: 1983, r: "美国", bpm: "100–160", tier: 2,
      d: "把无调性、反馈与结构破坏带进摇滚，Sonic Youth 与 Big Black 让它成为 80 年代纽约/芝加哥的地下语言。",
      ch: ["无调性", "反馈", "结构破坏"],
      ar: ["Sonic Youth", "Big Black", "Lightning Bolt"],
      tr: [["Kool Thing", "Sonic Youth", 1990]],
      p: ["post-punk", "punk-rock"]
    },
    {
      id: "slowcore", n: "Slowcore", zh: "慢核", f: "rock", y: 1990, r: "美国", bpm: "50–80", tier: 3,
      d: "把摇滚降到近乎静止：慢速、留白、低声，Low 与 Codeine 用安静制造压迫感。",
      ch: ["极慢", "留白", "低声"],
      ar: ["Low", "Codeine", "Duster"],
      tr: [["Words", "Low", 1994]],
      p: ["indie-rock", "dream-pop"]
    },
    {
      id: "post-grunge", n: "Post-Grunge", zh: "后垃圾摇滚", f: "rock", y: 1994, r: "美国", bpm: "100–140", tier: 2,
      d: "grunge 的失真与态度被磨平成电台友好型摇滚，Foo Fighters 与 Nickelback 占据整个 2000 年代。",
      ch: ["电台副歌", "失真", "粗嗓"],
      ar: ["Foo Fighters", "Nickelback", "Creed"],
      tr: [["Everlong", "Foo Fighters", 1997]],
      p: ["grunge", "alternative-rock"]
    },
    {
      id: "j-rock", n: "J-Rock", zh: "日式摇滚", f: "rock", y: 1980, r: "日本", bpm: "120–180", tier: 2,
      d: "日本对摇滚的本土化：高旋律密度、动漫与视觉系文化，X Japan 是 80 年代末的顶点。",
      ch: ["高旋律密度", "技术演奏", "视觉系"],
      ar: ["X Japan", "B'z", "RADWIMPS"],
      tr: [["Kurenai", "X Japan", 1989]],
      p: ["alternative-rock", "pop"]
    },
    {
      id: "rock-en-espanol", n: "Rock en Español", zh: "西语摇滚", f: "rock", y: 1985, r: "拉美 / 西班牙", bpm: "110–160", tier: 2,
      d: "用西班牙语唱的摇滚：从阿根廷到墨西哥，把英美摇滚翻译成拉美的政治与青春。",
      ch: ["西语演唱", "拉丁节奏", "政治性"],
      ar: ["Soda Stereo", "Café Tacvba", "Maná"],
      tr: [["De Música Ligera", "Soda Stereo", 1990]],
      p: ["rock-and-roll", "punk-rock"]
    },
    {
      id: "pop-rock", n: "Pop Rock", zh: "流行摇滚", f: "rock", y: 1965, r: "美国 / 英国", bpm: "100–140", tier: 2,
      d: "把摇滚的编制交给流行旋律：副歌清晰、时长三分钟，是 70 年代电台的主力。",
      ch: ["清晰副歌", "三分钟结构", "吉他"],
      ar: ["Cheap Trick", "Tom Petty", "The Cars"],
      tr: [["Surrender", "Cheap Trick", 1978]],
      p: ["rock-and-roll", "pop"]
    },
    {
      id: "soft-rock", n: "Soft Rock", zh: "轻柔摇滚", f: "rock", y: 1970, r: "美国", bpm: "70–110", tier: 2,
      d: "把摇滚的电声收小、旋律放软：钢琴、和声与成人抒情，Fleetwood Mac 是代表。",
      ch: ["柔和编曲", "和声", "抒情"],
      ar: ["Fleetwood Mac", "Air Supply", "Chicago"],
      tr: [["Dreams", "Fleetwood Mac", 1977]],
      p: ["pop-rock", "folk-rock"]
    },
    {
      id: "arena-rock", n: "Arena Rock", zh: "体育场摇滚", f: "rock", y: 1973, r: "美国", bpm: "110–140", tier: 3,
      d: "为几万人合唱而写的摇滚：大副歌、吉他 solo、烟火与体育馆，Journey 与 Bon Jovi 是典型。",
      ch: ["大副歌", "吉他 solo", "体育馆"],
      ar: ["Journey", "Bon Jovi", "Foreigner"],
      tr: [["Don't Stop Believin'", "Journey", 1981]],
      p: ["hard-rock", "pop-rock"]
    },
    {
      id: "southern-rock", n: "Southern Rock", zh: "南方摇滚", f: "rock", y: 1970, r: "美国南部", bpm: "100–150", tier: 3,
      d: "美国南方的摇滚：双吉他、布鲁斯根、长段即兴，Lynyrd Skynyrd 的《Free Bird》是国歌。",
      ch: ["双吉他", "布鲁斯根", "长段即兴"],
      ar: ["Lynyrd Skynyrd", "The Allman Brothers Band", "ZZ Top"],
      tr: [["Free Bird", "Lynyrd Skynyrd", 1973]],
      p: ["rock-and-roll", "blues"]
    },
    {
      id: "art-rock", n: "Art Rock", zh: "艺术摇滚", f: "rock", y: 1967, r: "英国", bpm: "90–140", tier: 2,
      d: "把摇滚当成艺术项目：概念、剧场性、非流行结构，David Bowie 与 Roxy Music 把它做成一种姿态。",
      ch: ["概念性", "剧场感", "非流行结构"],
      ar: ["David Bowie", "Roxy Music", "Peter Gabriel"],
      tr: [["Space Oddity", "David Bowie", 1969]],
      p: ["psychedelic-rock", "progressive-rock"]
    },

    /* ================= 流行补充 ================= */
    {
      id: "bubblegum-pop", n: "Bubblegum Pop", zh: "泡泡糖流行", f: "pop", y: 1967, r: "美国", bpm: "110–140", tier: 3,
      d: "为青少年定制的三分钟甜歌：简单副歌、卡通化制作，The Archies 的《Sugar, Sugar》卖了六百万张。",
      ch: ["简单副歌", "甜", "青少年"],
      ar: ["The Archies", "The Monkees", "Bay City Rollers"],
      tr: [["Sugar, Sugar", "The Archies", 1969]],
      p: ["pop", "rock-and-roll"]
    },
    {
      id: "adult-contemporary", n: "Adult Contemporary", zh: "成人抒情", f: "pop", y: 1965, r: "美国", bpm: "70–100", tier: 3,
      d: "为电台白领时段设计的柔和流行：钢琴、弦乐、无攻击性的爱，Carpenters 是模板。",
      ch: ["柔和", "弦乐", "抒情"],
      ar: ["Carpenters", "Whitney Houston", "Celine Dion"],
      tr: [["(They Long to Be) Close to You", "Carpenters", 1970]],
      p: ["pop", "soft-rock"]
    },
    {
      id: "europop", n: "Europop", zh: "欧陆流行", f: "pop", y: 1970, r: "欧洲", bpm: "110–130", tier: 2,
      d: "欧洲大陆的流行乐： disco 的节奏、合成器与洗脑副歌，ABBA 把它输出到全世界。",
      ch: ["洗脑副歌", "合成器", "舞曲节奏"],
      ar: ["ABBA", "Roxette", "Ace of Base"],
      tr: [["Dancing Queen", "ABBA", 1976]],
      p: ["pop", "disco"]
    },
    {
      id: "cantopop", n: "Cantopop", zh: "粤语流行", f: "pop", y: 1970, r: "香港", bpm: "90–130", tier: 2,
      d: "香港的粤语流行：电视剧主题曲、偶像工业与日本旋律的本地化，张国荣与梅艳芳是黄金时代。",
      ch: ["粤语演唱", "偶像工业", "旋律优先"],
      ar: ["张国荣", "梅艳芳", "Beyond"],
      tr: [["Monica", "张国荣", 1984]],
      p: ["pop"]
    },
    {
      id: "jpop", n: "J-Pop", zh: "日本流行", f: "pop", y: 1960, r: "日本", bpm: "100–140", tier: 2,
      d: "日本流行乐的总称：从歌谣曲到偶像与涩谷系，旋律密度高、编曲精致，宇多田光把它带进百万销量时代。",
      ch: ["高旋律密度", "精致编曲", "偶像"],
      ar: ["宇多田光", "Mr.Children", "YOASOBI"],
      tr: [["Automatic", "宇多田光", 1998]],
      p: ["pop", "city-pop"]
    },
    {
      id: "mandopop", n: "Mandopop", zh: "华语流行", f: "pop", y: 1970, r: "台湾 / 中国大陆", bpm: "80–130", tier: 2,
      d: "国语流行乐：校园民歌、情歌与 R&B 化的制作，周杰伦把节奏与说唱带进华语主流。",
      ch: ["国语演唱", "情歌", "R&B 制作"],
      ar: ["周杰伦", "邓丽君", "王菲"],
      tr: [["晴天", "周杰伦", 2003]],
      p: ["pop", "cantopop"]
    },
    {
      id: "afropop", n: "Afropop", zh: "非洲流行", f: "pop", y: 2000, r: "尼日利亚 / 南非", bpm: "100–120", tier: 2,
      d: "2010 年代 Afrobeats 的全球版本：尼日利亚的旋律、加纳的 highlife 吉他与舞曲节奏，Wizkid 把它送进英美榜单。",
      ch: ["舞曲节奏", "旋律化", "全球合作"],
      ar: ["Wizkid", "Burna Boy", "Tems"],
      tr: [["Ojuelegba", "Wizkid", 2014]],
      p: ["afrobeats", "pop"]
    },
    {
      id: "power-pop", n: "Power Pop", zh: "力量流行", f: "pop", y: 1970, r: "美国 / 英国", bpm: "120–150", tier: 3,
      d: "披头士式的旋律加吉他失真与紧凑鼓点：副歌必须立刻抓住人，Big Star 是未获商业成功的神。",
      ch: ["抓耳副歌", "吉他失真", "紧凑"],
      ar: ["Big Star", "Cheap Trick", "The Raspberries"],
      tr: [["September Gurls", "Big Star", 1974]],
      p: ["pop-rock", "rock-and-roll"]
    },
    {
      id: "art-pop", n: "Art Pop", zh: "艺术流行", f: "pop", y: 1960, r: "英国", bpm: "90–130", tier: 2,
      d: "把流行歌当成实验场：非常规结构、戏剧化演唱与视觉概念，Kate Bush 与 Björk 是代表。",
      ch: ["实验结构", "戏剧化", "视觉概念"],
      ar: ["Kate Bush", "Björk", "David Bowie"],
      tr: [["Running Up That Hill", "Kate Bush", 1985]],
      p: ["pop", "art-rock"]
    }
  );
})();
