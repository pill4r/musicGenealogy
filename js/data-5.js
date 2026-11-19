/* 音乐风格谱系 · 数据 5 —— 新增家族（朋克 / 金属 / 独立）+ 朋克 / Emo / 金属
   字段同 data-1.js */
(function () {
  const G = (window.MG = window.MG || { families: [], genres: [] });

  G.families.push(
    { id: "punk",  name: "朋克 / Emo",      sub: "硬核 · Emo · 数学摇滚", color: "#ff6f91" },
    { id: "metal", name: "金属",            sub: "重金属到极端金属",      color: "#93a3b8" },
    { id: "indie", name: "独立 / 另类",      sub: "Indie · Britpop · Dream Pop", color: "#5fcf9a" }
  );

  G.genres.push(
    /* ================= 朋克 / Emo ================= */
    {
      id: "emocore", n: "Emocore", zh: "情绪硬核", f: "punk", y: 1985, r: "美国·华盛顿", bpm: "140–190", tier: 3,
      d: "硬核朋克里的第一代情绪化：歌词从口号转向自白，动态起伏取代一路猛冲，华盛顿特区是起点。",
      ch: ["自白歌词", "动态起伏", "粗粝吉他"],
      ar: ["Rites of Spring", "Embrace", "Moss Icon"],
      tr: [["For Want Of", "Rites of Spring", 1985]],
      p: ["hardcore-punk"]
    },
    {
      id: "midwest-emo", n: "Midwest Emo", zh: "中西部 Emo", f: "punk", y: 1994, r: "美国·中西部", bpm: "90–130", tier: 2,
      d: "第二代 emo：把硬核的激烈收进慢速、错拍的吉他对话里，大学城地下室与 American Football 的同名专辑是分水岭。",
      ch: ["开放和弦", "错拍", "室内感", "低声倾诉"],
      ar: ["American Football", "Cap'n Jazz", "Sunny Day Real Estate"],
      tr: [["Never Meant", "American Football", 1999], ["In Circles", "Sunny Day Real Estate", 1994]],
      p: ["emo", "post-hardcore"]
    },
    {
      id: "emo-pop", n: "Emo Pop", zh: "流行 Emo", f: "punk", y: 2001, r: "美国", bpm: "120–160", tier: 2,
      d: "把 emo 的自白塞进流行朋克的大副歌，2000 年代 MTV 与 Warped Tour 的主流声音。",
      ch: ["大副歌", "崩溃式演唱", "失真吉他"],
      ar: ["Jimmy Eat World", "Fall Out Boy", "Paramore"],
      tr: [["The Middle", "Jimmy Eat World", 2001], ["Sugar, We're Goin Down", "Fall Out Boy", 2005]],
      p: ["emo", "pop-punk"]
    },
    {
      id: "emo-revival", n: "Emo Revival", zh: "Emo 复兴", f: "punk", y: 2010, r: "美国", bpm: "100–150", tier: 3,
      d: "2010 年代地下场景的第四次 emo 浪潮：数学摇滚式吉他加更直白的自我剖白，Modern Baseball 一代把它带回小场地。",
      ch: ["数学吉他", "生活化歌词", "Lo-fi 质感"],
      ar: ["Modern Baseball", "The World Is a Beautiful Place…", "Tiny Moving Parts"],
      tr: [["Your Graduation", "Modern Baseball", 2014]],
      p: ["midwest-emo", "indie-rock"]
    },
    {
      id: "screamo", n: "Screamo", zh: "尖叫 Emo", f: "punk", y: 1991, r: "美国·圣地亚哥", bpm: "150–200", tier: 3,
      d: "emo 与硬核的极端化：尖叫、断裂结构与爆发式动态，90 年代圣地亚哥与法国场景各自成派。",
      ch: ["尖叫", "断裂结构", "爆发"],
      ar: ["Orchid", "Saetia", "Pg.99"],
      tr: [["In Love with an Apparition", "Pg.99", 1999]],
      p: ["emo", "hardcore-punk"]
    },
    {
      id: "math-rock", n: "Math Rock", zh: "数学摇滚", f: "punk", y: 1989, r: "美国 / 日本", bpm: "100–180", tier: 2,
      d: "用节拍做文章：奇数拍、频繁变拍与吉他点弦，把摇滚拆成精密齿轮；Slint 的《Spiderland》立下模板，日本 toe 让它更轻盈。",
      ch: ["奇数拍", "变拍", "点弦", "器乐"],
      ar: ["Slint", "Don Caballero", "Hella", "toe"],
      tr: [["Good Morning, Captain", "Slint", 1991]],
      p: ["post-hardcore", "progressive-rock"]
    },
    {
      id: "mathcore", n: "Mathcore", zh: "数学核", f: "punk", y: 1997, r: "美国", bpm: "150–220", tier: 3,
      d: "math rock 的节拍加金属核的重量与尖叫，Dillinger Escape Plan 把它做成纯粹的肾上腺素。",
      ch: ["复杂节拍", "金属核", "失控感"],
      ar: ["The Dillinger Escape Plan", "Botch", "Converge"],
      tr: [["43% Burnt", "The Dillinger Escape Plan", 1999]],
      p: ["math-rock", "metalcore"]
    },
    {
      id: "grindcore", n: "Grindcore", zh: "碾核", f: "punk", y: 1987, r: "英国", bpm: "200–400", tier: 2,
      d: "朋克与死亡金属的极速杂交：十几秒一首、blast beat 与政治愤怒，Napalm Death 的《Scum》定义了这个词。",
      ch: ["Blast beat", "极短曲目", "政治歌词"],
      ar: ["Napalm Death", "Repulsion", "Terrorizer"],
      tr: [["You Suffer", "Napalm Death", 1987]],
      p: ["hardcore-punk", "death-metal"]
    },
    {
      id: "crust-punk", n: "Crust Punk", zh: "壳朋克", f: "punk", y: 1984, r: "英国", bpm: "150–200", tier: 3,
      d: "硬核加金属加无政府主义：粗糙、低沉、带末日味，Amebix 与 Doom 是源头。",
      ch: ["低沉失真", "无政府主义", "末日感"],
      ar: ["Amebix", "Doom", "Nausea"],
      tr: [["Police Bastard", "Doom", 1989]],
      p: ["hardcore-punk", "anarcho-punk"]
    },
    {
      id: "d-beat", n: "D-Beat", zh: "D 拍硬核", f: "punk", y: 1980, r: "英国", bpm: "160–220", tier: 3,
      d: "Discharge 开创的一拍一击鼓型被无数乐队复制成一种亚流派，速度快、音墙厚、主唱像在喊命令。",
      ch: ["D-beat 鼓型", "音墙", "喊叫"],
      ar: ["Discharge", "Disclose", "Wolfbrigade"],
      tr: [["Protest and Survive", "Discharge", 1980]],
      p: ["hardcore-punk"]
    },
    {
      id: "street-punk", n: "Street Punk", zh: "街头朋克", f: "punk", y: 1979, r: "英国", bpm: "160–200", tier: 3,
      d: "Oi! 与朋克的街头一脉：足球场合唱、工人阶级叙事，英国 80 年代。",
      ch: ["合唱副歌", "街头主题", "快速"],
      ar: ["Cock Sparrer", "Sham 69", "The Business"],
      tr: [["England Belongs to Me", "Cock Sparrer", 1982]],
      p: ["punk-rock", "oi"]
    },
    {
      id: "oi", n: "Oi!", zh: "Oi! 朋克", f: "punk", y: 1977, r: "英国·伦敦", bpm: "150–190", tier: 3,
      d: "1977 年后英国朋克的街头分支，口号式合唱与光头党文化纠缠在一起，简单直接、为球场而写。",
      ch: ["口号合唱", "简单和弦", "街头"],
      ar: ["Cockney Rejects", "Sham 69", "Angelic Upstarts"],
      tr: [["Oi! Oi! Oi!", "Cockney Rejects", 1980]],
      p: ["punk-rock"]
    },
    {
      id: "ska-punk", n: "Ska Punk", zh: "斯卡朋克", f: "punk", y: 1984, r: "美国", bpm: "150–200", tier: 2,
      d: "ska 的跳跃节奏加朋克的速度与失真，80 年代末美国第三波 ska 的核心。",
      ch: ["铜管", "跳跃节奏", "快"],
      ar: ["Operation Ivy", "Less Than Jake", "Reel Big Fish"],
      tr: [["Sound System", "Operation Ivy", 1988]],
      p: ["ska", "punk-rock"]
    },
    {
      id: "anarcho-punk", n: "Anarcho-Punk", zh: "无政府朋克", f: "punk", y: 1977, r: "英国", bpm: "150–190", tier: 3,
      d: "Crass 带起的英国无政府朋克：反战、反消费主义、DIY 厂牌与拼贴视觉，比音乐更是一种组织方式。",
      ch: ["政治宣言", "DIY", "噪音"],
      ar: ["Crass", "Subhumans", "Conflict"],
      tr: [["Do They Owe Us a Living?", "Crass", 1978]],
      p: ["punk-rock"]
    },
    {
      id: "riot-grrrl", n: "Riot Grrrl", zh: "暴女运动", f: "punk", y: 1991, r: "美国", bpm: "140–180", tier: 3,
      d: "90 年代女性主导的朋克运动，把性别政治写进失真与 zine 文化。",
      ch: ["女性主义", "失真", "Zine 文化"],
      ar: ["Bikini Kill", "Sleater-Kinney", "L7"],
      tr: [["Rebel Girl", "Bikini Kill", 1993]],
      p: ["punk-rock", "indie-rock"]
    },
    {
      id: "horror-punk", n: "Horror Punk", zh: "恐怖朋克", f: "punk", y: 1977, r: "美国", bpm: "150–190", tier: 3,
      d: "朋克加 B 级恐怖片美学，Misfits 的怪物形象与旋律副歌定义了它。",
      ch: ["恐怖主题", "旋律副歌", "快速"],
      ar: ["Misfits", "The Damned", "AFI"],
      tr: [["Where Eagles Dare", "Misfits", 1979]],
      p: ["punk-rock"]
    },
    {
      id: "psychobilly", n: "Psychobilly", zh: "心理摇滚", f: "punk", y: 1980, r: "英国", bpm: "150–200", tier: 3,
      d: "rockabilly 的 slapback 贝斯加朋克速度与恐怖片想象，The Cramps 是祖师。",
      ch: ["Slapback 贝斯", "恐怖", "狂野"],
      ar: ["The Cramps", "The Meteors", "Tiger Army"],
      tr: [["Human Fly", "The Cramps", 1978]],
      p: ["rockabilly", "punk-rock"]
    },

    /* ================= 金属 ================= */
    {
      id: "nwobhm", n: "NWOBHM", zh: "英国重金属新浪潮", f: "metal", y: 1979, r: "英国", bpm: "120–180", tier: 2,
      d: "英国重金属新浪潮：Iron Maiden、Saxon 把朋克的速度和双吉他旋律带进金属，1980 年代金属全球化的起点。",
      ch: ["双吉他", "高亢人声", "快速 riff"],
      ar: ["Iron Maiden", "Saxon", "Def Leppard"],
      tr: [["Phantom of the Opera", "Iron Maiden", 1980]],
      p: ["heavy-metal", "punk-rock"]
    },
    {
      id: "speed-metal", n: "Speed Metal", zh: "速度金属", f: "metal", y: 1981, r: "英国 / 美国", bpm: "160–220", tier: 3,
      d: "比传统重金属更快、更狠的过渡形态，Motörhead 的驱动力是原型，直接通向 thrash。",
      ch: ["极速", "鞭击感", "粗糙"],
      ar: ["Motörhead", "Exciter", "Agent Steel"],
      tr: [["Overkill", "Motörhead", 1979]],
      p: ["nwobhm", "heavy-metal"]
    },
    {
      id: "crossover-thrash", n: "Crossover Thrash", zh: "交叉鞭击", f: "metal", y: 1985, r: "美国", bpm: "180–240", tier: 3,
      d: "硬核朋克与 thrash 的交叉，Suicidal Tendencies 的《Institutionalized》是模板。",
      ch: ["硬核", "Thrash riff", "街头"],
      ar: ["Suicidal Tendencies", "D.R.I.", "Cro-Mags"],
      tr: [["Institutionalized", "Suicidal Tendencies", 1983]],
      p: ["thrash-metal", "hardcore-punk"]
    },
    {
      id: "doom-metal", n: "Doom Metal", zh: "末日金属", f: "metal", y: 1970, r: "英国", bpm: "60–100", tier: 2,
      d: "Black Sabbath 开创的慢速重型：降调、沉重、末日感，后来分出 sludge、funeral doom 与 drone。",
      ch: ["慢速", "降调", "沉重 riff"],
      ar: ["Black Sabbath", "Pentagram", "Saint Vitus"],
      tr: [["Black Sabbath", "Black Sabbath", 1970]],
      p: ["heavy-metal", "blues"]
    },
    {
      id: "sludge-metal", n: "Sludge Metal", zh: "泥浆金属", f: "metal", y: 1989, r: "美国·新奥尔良", bpm: "60–110", tier: 2,
      d: "doom 的慢加硬核的脏，新奥尔良的 Eyehategod 与 Crowbar 把它做成泥浆，Mastodon 让它在 2000 年代变清晰。",
      ch: ["泥浆失真", "慢", "痛苦"],
      ar: ["Eyehategod", "Crowbar", "Mastodon"],
      tr: [["Blood and Thunder", "Mastodon", 2004]],
      p: ["doom-metal", "hardcore-punk"]
    },
    {
      id: "stoner-rock", n: "Stoner Rock", zh: "石人摇滚", f: "metal", y: 1992, r: "美国·加州", bpm: "80–120", tier: 2,
      d: "降速、降调、失真开满，配一整套沙漠与迷幻意象；Kyuss 与 Sleep 是圣地。",
      ch: ["降调", "迷幻", "长段 riff"],
      ar: ["Kyuss", "Sleep", "Fu Manchu"],
      tr: [["Green Machine", "Kyuss", 1994]],
      p: ["doom-metal", "psychedelic-rock"]
    },
    {
      id: "desert-rock", n: "Desert Rock", zh: "沙漠摇滚", f: "metal", y: 1992, r: "美国·棕榈沙漠", bpm: "90–130", tier: 3,
      d: "加州沙漠场景的 stoner 分支，Queens of the Stone Age 把它带进主流。",
      ch: ["沙漠感", "律动", "失真"],
      ar: ["Kyuss", "Queens of the Stone Age", "Masters of Reality"],
      tr: [["No One Knows", "Queens of the Stone Age", 2002]],
      p: ["stoner-rock", "garage-rock"]
    },
    {
      id: "power-metal", n: "Power Metal", zh: "力量金属", f: "metal", y: 1983, r: "德国 / 北欧", bpm: "150–200", tier: 2,
      d: "欧洲旋律金属：高速双踩、清亮高音、奇幻史诗主题，Helloween 把它定型。",
      ch: ["双踩", "高音", "史诗"],
      ar: ["Helloween", "Blind Guardian", "Stratovarius"],
      tr: [["Eagle Fly Free", "Helloween", 1988]],
      p: ["heavy-metal", "nwobhm"]
    },
    {
      id: "symphonic-metal", n: "Symphonic Metal", zh: "交响金属", f: "metal", y: 1994, r: "芬兰 / 荷兰", bpm: "100–160", tier: 3,
      d: "金属乐队加管弦乐与合唱，Nightwish 把歌剧女声带进金属，Within Temptation 走更流行的一路。",
      ch: ["管弦乐", "女高音", "宏大"],
      ar: ["Nightwish", "Within Temptation", "Epica"],
      tr: [["Wish I Had an Angel", "Nightwish", 2004]],
      p: ["power-metal", "gothic-metal"]
    },
    {
      id: "gothic-metal", n: "Gothic Metal", zh: "哥特金属", f: "metal", y: 1991, r: "英国 / 挪威", bpm: "80–140", tier: 3,
      d: "哥特摇滚的阴冷加 doom 的重量，Type O Negative 与 Paradise Lost 代表两种路线。",
      ch: ["阴冷", "男女对唱", "沉重"],
      ar: ["Paradise Lost", "Type O Negative", "Theatre of Tragedy"],
      tr: [["Black No. 1", "Type O Negative", 1993]],
      p: ["gothic-rock", "doom-metal"]
    },
    {
      id: "industrial-metal", n: "Industrial Metal", zh: "工业金属", f: "metal", y: 1988, r: "美国 / 德国", bpm: "100–160", tier: 2,
      d: "工业采样与金属 riff 的结合，Ministry 的《Psalm 69》是高峰，Nine Inch Nails 让它更个人化。",
      ch: ["采样", "机械节奏", "重型 riff"],
      ar: ["Ministry", "Nine Inch Nails", "Fear Factory"],
      tr: [["Just One Fix", "Ministry", 1992]],
      p: ["industrial", "thrash-metal"]
    },
    {
      id: "folk-metal", n: "Folk Metal", zh: "民谣金属", f: "metal", y: 1990, r: "欧洲", bpm: "120–180", tier: 3,
      d: "民谣旋律与传统乐器进入金属，Skyclad 开路，Finntroll 把 humppa 舞曲跳进金属。",
      ch: ["民谣旋律", "传统乐器", "异教"],
      ar: ["Skyclad", "Finntroll", "Eluveitie"],
      tr: [["Trollhammaren", "Finntroll", 2004]],
      p: ["black-metal", "folk"]
    },
    {
      id: "viking-metal", n: "Viking Metal", zh: "维京金属", f: "metal", y: 1992, r: "北欧", bpm: "100–160", tier: 3,
      d: "北欧神话与黑金属、民谣的混合，Bathory 的《Hammerheart》立下范式，Amon Amarth 把它做成战歌。",
      ch: ["合唱", "北欧神话", "史诗"],
      ar: ["Bathory", "Enslaved", "Amon Amarth"],
      tr: [["Twilight of the Thunder God", "Amon Amarth", 2008]],
      p: ["folk-metal", "black-metal"]
    },
    {
      id: "melodic-death", n: "Melodic Death Metal", zh: "旋律死亡金属", f: "metal", y: 1990, r: "瑞典·哥德堡", bpm: "140–200", tier: 2,
      d: "死亡金属的 blast beat 加双吉他旋律，哥德堡之声影响了整个 2000 年代金属核。",
      ch: ["旋律吉他", "死亡咆哮", "双踩"],
      ar: ["In Flames", "At the Gates", "Dark Tranquillity"],
      tr: [["Slaughter of the Soul", "At the Gates", 1995]],
      p: ["death-metal", "nwobhm"]
    },
    {
      id: "tech-death", n: "Technical Death Metal", zh: "技术死亡金属", f: "metal", y: 1991, r: "美国", bpm: "160–240", tier: 3,
      d: "死亡金属的技术化：复杂拍号、无调性 solo、极端演奏难度，Death 的《Symbolic》是分界。",
      ch: ["复杂拍号", "技术演奏", "残暴"],
      ar: ["Death", "Cynic", "Necrophagist"],
      tr: [["Symbolic", "Death", 1995]],
      p: ["death-metal", "progressive-rock"]
    },
    {
      id: "brutal-death", n: "Brutal Death Metal", zh: "残死", f: "metal", y: 1991, r: "美国", bpm: "160–260", tier: 3,
      d: "死亡金属里最重的一支：guttural 低吼、极速 blast beat、血腥主题，Suffocation 与 Cannibal Corpse 为代表。",
      ch: ["低吼", "Blast beat", "血腥"],
      ar: ["Cannibal Corpse", "Suffocation", "Cryptopsy"],
      tr: [["Hammer Smashed Face", "Cannibal Corpse", 1992]],
      p: ["death-metal"]
    },
    {
      id: "deathcore", n: "Deathcore", zh: "死核", f: "metal", y: 2002, r: "美国", bpm: "140–220", tier: 2,
      d: "金属核加死亡金属：breakdown 与 blast beat 交替，2000 年代末从美国地下进入主流。",
      ch: ["Breakdown", "Blast beat", "低吼"],
      ar: ["Suicide Silence", "Whitechapel", "Job for a Cowboy"],
      tr: [["You Only Live Once", "Suicide Silence", 2007]],
      p: ["metalcore", "death-metal"]
    },
    {
      id: "djent", n: "Djent", zh: "Djent", f: "metal", y: 2007, r: "瑞典 / 美国", bpm: "100–160", tier: 2,
      d: "Meshuggah 式的切分低音 riff 加干净音色与精密制作，被 Periphery 一代做成一个流派名。",
      ch: ["切分 riff", "低音弦", "干净音色"],
      ar: ["Meshuggah", "Periphery", "Animals as Leaders"],
      tr: [["Bleed", "Meshuggah", 2008]],
      p: ["progressive-rock", "metalcore"]
    },
    {
      id: "post-metal", n: "Post-Metal", zh: "后金属", f: "metal", y: 2000, r: "美国", bpm: "70–130", tier: 2,
      d: "post-rock 的铺陈加 sludge 的重量，Neurosis 与 Isis 把金属做成缓慢移动的地形。",
      ch: ["长结构", "渐强", "重型音墙"],
      ar: ["Neurosis", "Isis", "Cult of Luna"],
      tr: [["Given to the Rising", "Neurosis", 2007]],
      p: ["post-rock", "sludge-metal"]
    },
    {
      id: "blackgaze", n: "Blackgaze", zh: "黑瞪", f: "metal", y: 2007, r: "法国 / 美国", bpm: "140–200", tier: 3,
      d: "黑金属的 tremolo 与 shoegaze 的雾状和声合流，Alcest 与 Deafheaven 让它成为 2010 年代最出圈的金属分支。",
      ch: ["Tremolo", "雾状吉他", "黑嗓"],
      ar: ["Alcest", "Deafheaven", "Wolves in the Throne Room"],
      tr: [["Dream House", "Deafheaven", 2013]],
      p: ["black-metal", "shoegaze"]
    },
    {
      id: "funeral-doom", n: "Funeral Doom", zh: "葬礼末日", f: "metal", y: 1992, r: "芬兰 / 挪威", bpm: "40–70", tier: 3,
      d: "doom 的极慢速版本：一首二十分钟、管风琴与葬礼氛围，Skepticism 与 Thergothon 是源头。",
      ch: ["极慢", "葬礼氛围", "管风琴"],
      ar: ["Skepticism", "Thergothon", "Mournful Congregation"],
      tr: [["The March and the Stream", "Skepticism", 1998]],
      p: ["doom-metal", "death-metal"]
    },
    {
      id: "drone-metal", n: "Drone Metal", zh: "嗡鸣金属", f: "metal", y: 1990, r: "美国 / 日本", bpm: "—", tier: 3,
      d: "把一个和弦拉到极致的金属：音墙、反馈与空间感，Earth 与 Sunn O))) 把它做成一种物理体验。",
      ch: ["持续音", "反馈", "极端音量"],
      ar: ["Earth", "Sunn O)))", "Boris"],
      tr: [["It Took the Night to Believe", "Sunn O)))", 2005]],
      p: ["doom-metal", "ambient"]
    },
    {
      id: "goregrind", n: "Goregrind", zh: "血碾", f: "metal", y: 1987, r: "英国", bpm: "200–300", tier: 3,
      d: "grindcore 与死亡金属的血腥变种，Carcass 早期作品定义了它的音色、主题与病理学封面。",
      ch: ["水喉", "血腥主题", "极速"],
      ar: ["Carcass", "Repulsion", "Impetigo"],
      tr: [["Genital Grinder", "Carcass", 1988]],
      p: ["grindcore", "death-metal"]
    },
    {
      id: "war-metal", n: "War Metal", zh: "战争金属", f: "metal", y: 1993, r: "加拿大", bpm: "160–240", tier: 3,
      d: "黑金属最原始暴戾的一支：粗糙录音、战争主题、几乎没有旋律，Blasphemy 是原点。",
      ch: ["粗糙录音", "战争主题", "无旋律"],
      ar: ["Blasphemy", "Conqueror", "Revenge"],
      tr: [["Fallen Angel of Doom", "Blasphemy", 1990]],
      p: ["black-metal"]
    },
    {
      id: "dsbm", n: "Depressive Suicidal Black Metal", zh: "抑郁黑金属", f: "metal", y: 1993, r: "挪威 / 美国", bpm: "60–140", tier: 3,
      d: "缓慢、尖啸、极简重复的黑金属分支，Burzum 与 Xasthur 代表两种气质：孤独与自我吞噬。",
      ch: ["缓慢", "尖啸", "极简重复"],
      ar: ["Burzum", "Xasthur", "Shining"],
      tr: [["Dunkelheit", "Burzum", 1996]],
      p: ["black-metal"]
    }
  );
})();
