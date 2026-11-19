/* 音乐风格谱系 · 数据 1/4 —— 家族定义 + 根源 / 乡村 / 爵士 / 灵魂 / 迪斯科
   字段：id, n=英文名, zh=中文名, f=家族, y=起源年, r=地域, bpm, tier=标签层级(1枢纽/2主干/3细分),
        d=简介, ch=听感特征, ar=代表艺人, tr=[曲名, 艺人, 年份], p=直接源头 id 数组 */
(function () {
  const G = (window.MG = window.MG || { families: [], genres: [] });

  G.families.push(
    { id: "roots",      name: "根源",            sub: "福音 · 布鲁斯 · 民谣",        color: "#a58a6f" },
    { id: "country",    name: "乡村 / 民谣",      sub: "纳什维尔与阿巴拉契亚",        color: "#c2a35a" },
    { id: "jazz",       name: "爵士",            sub: "拉格泰姆 → 融合爵士",        color: "#e0b356" },
    { id: "soul",       name: "灵魂 / R&B / 放克", sub: "福音驱动的节奏",              color: "#f0803f" },
    { id: "disco",      name: "迪斯科",           sub: "1970s 舞池革命",             color: "#f2d14e" },
    { id: "house",      name: "浩室 House",       sub: "芝加哥 1980s →",             color: "#3fd6c0" },
    { id: "techno",     name: "科技舞曲 Techno",   sub: "底特律 1985 →",              color: "#59a7f0" },
    { id: "bass",       name: "UK Bass / Garage", sub: "伦敦低音支线",                color: "#b07cf5" },
    { id: "rave",       name: "锐舞 / Trance / DnB", sub: "1990s 英国锐舞",           color: "#8f7cf0" },
    { id: "hiphop",     name: "嘻哈 Hip-Hop",     sub: "布朗克斯 1970s →",           color: "#f06a9b" },
    { id: "electronic", name: "电子 / 氛围",       sub: "从具体音乐到蒸汽波",          color: "#8fce6a" },
    { id: "rock",       name: "摇滚 / 金属",       sub: "1950s →",                   color: "#e3564f" },
    { id: "pop",        name: "流行 Pop",         sub: "榜单与全球流行",              color: "#f2a0c0" },
    { id: "latin",      name: "拉丁 / 加勒比 / 非洲", sub: "跨大西洋节奏",             color: "#d08a3e" }
  );

  G.genres.push(
    /* ---------- 根源 ---------- */
    {
      id: "gospel", n: "Gospel", zh: "福音音乐", f: "roots", y: 1900, r: "美国南部", bpm: "60–90", tier: 2,
      d: "黑人教会的礼拜音乐：领唱与合唱呼应、厚重和声、Hammond 风琴；后来几乎喂养了 soul、R&B 和摇滚乐。",
      ch: ["领唱—合唱呼应", "三度/五度和声", "风琴与拍手"],
      ar: ["Mahalia Jackson", "The Staple Singers", "Aretha Franklin"],
      tr: [["Move On Up a Little Higher", "Mahalia Jackson", 1947], ["I'll Take You There", "The Staple Singers", 1972]],
      p: []
    },
    {
      id: "blues", n: "Blues", zh: "布鲁斯", f: "roots", y: 1895, r: "美国南部", bpm: "60–100", tier: 1,
      d: "12 小节曲式、蓝调音与问答式乐句；从田间号子到电声芝加哥布鲁斯，是现代流行乐的共同祖源。",
      ch: ["12 小节结构", "蓝调音（♭3/♭5/♭7）", "问答式演唱"],
      ar: ["Robert Johnson", "Muddy Waters", "B.B. King"],
      tr: [["Cross Road Blues", "Robert Johnson", 1936], ["The Thrill Is Gone", "B.B. King", 1969]],
      p: []
    },
    {
      id: "delta-blues", n: "Delta Blues", zh: "三角洲布鲁斯", f: "roots", y: 1920, r: "密西西比三角洲", bpm: "70–100", tier: 3,
      d: "密西西比三角洲的原始布鲁斯：滑棒吉他、粗粝人声；Robert Johnson 的录音成了后世所有布鲁斯的圣典。",
      ch: ["滑棒吉他", "单人自弹自唱", "强烈节奏感"],
      ar: ["Robert Johnson", "Son House", "Charley Patton"],
      tr: [["Preachin' the Blues", "Son House", 1930], ["Hellhound on My Trail", "Robert Johnson", 1937]],
      p: ["blues"]
    },
    {
      id: "boogie-woogie", n: "Boogie-Woogie", zh: "布吉伍吉", f: "roots", y: 1925, r: "美国", bpm: "120–160", tier: 3,
      d: "钢琴布鲁斯的分支：左手八分音符固定低音不断推进，直接预示了摇滚乐的节奏。",
      ch: ["八分音符低音", "钢琴独奏", "快节奏"],
      ar: ["Meade 'Lux' Lewis", "Pete Johnson", "Albert Ammons"],
      tr: [["Honky Tonk Train Blues", "Meade 'Lux' Lewis", 1927]],
      p: ["blues"]
    },
    {
      id: "jump-blues", n: "Jump Blues", zh: "跳跃布鲁斯", f: "roots", y: 1940, r: "美国", bpm: "120–160", tier: 3,
      d: "战后把布鲁斯交给大嗓门歌手和管乐 riff，节奏更快、更适合舞池，是 R&B 的前身。",
      ch: ["管乐 riff", "喊唱式人声", "舞池节奏"],
      ar: ["Louis Jordan", "Big Joe Turner", "Wynonie Harris"],
      tr: [["Choo Choo Ch'Boogie", "Louis Jordan", 1946], ["Shake, Rattle and Roll", "Big Joe Turner", 1954]],
      p: ["blues", "boogie-woogie"]
    },
    {
      id: "chicago-blues", n: "Chicago Blues", zh: "芝加哥布鲁斯", f: "roots", y: 1945, r: "美国·芝加哥", bpm: "80–120", tier: 3,
      d: "三角洲布鲁斯北上芝加哥后被电吉他、口琴和乐队放大，成为摇滚乐的直接老师。",
      ch: ["电吉他", "放大口琴", "乐队编制"],
      ar: ["Muddy Waters", "Howlin' Wolf", "Buddy Guy"],
      tr: [["Hoochie Coochie Man", "Muddy Waters", 1954], ["Smokestack Lightnin'", "Howlin' Wolf", 1956]],
      p: ["delta-blues"]
    },
    {
      id: "folk", n: "Folk", zh: "民谣", f: "roots", y: 1900, r: "欧美", bpm: "—", tier: 3,
      d: "以叙事歌和木吉他为核心的民间传统；20 世纪被民谣复兴运动政治化，后来又成了摇滚的养分。",
      ch: ["叙事歌词", "木吉他", "集体合唱"],
      ar: ["Woody Guthrie", "Pete Seeger", "Bob Dylan"],
      tr: [["This Land Is Your Land", "Woody Guthrie", 1944], ["Blowin' in the Wind", "Bob Dylan", 1963]],
      p: []
    },

    /* ---------- 乡村 ---------- */
    {
      id: "country", n: "Country", zh: "乡村音乐", f: "country", y: 1925, r: "美国南部", bpm: "70–120", tier: 2,
      d: "美国南部的乡村叙事：吉他、提琴、钢弦吉他，唱的是酒馆、爱情与乡愁。",
      ch: ["叙事歌词", "钢弦吉他/提琴", "鼻音唱腔"],
      ar: ["Hank Williams", "Johnny Cash", "Dolly Parton"],
      tr: [["I'm So Lonesome I Could Cry", "Hank Williams", 1949], ["Ring of Fire", "Johnny Cash", 1963]],
      p: ["folk", "blues"]
    },
    {
      id: "bluegrass", n: "Bluegrass", zh: "蓝草", f: "country", y: 1946, r: "阿巴拉契亚", bpm: "110–160", tier: 3,
      d: "源自阿巴拉契亚的高能原声音乐：班卓琴、曼陀林、提琴与高亢和声，速度极快。",
      ch: ["班卓琴/曼陀林", "高亢和声", "急速独奏"],
      ar: ["Bill Monroe", "Flatt & Scruggs", "Alison Krauss"],
      tr: [["Blue Moon of Kentucky", "Bill Monroe", 1946], ["Foggy Mountain Breakdown", "Flatt & Scruggs", 1949]],
      p: ["country", "blues"]
    },
    {
      id: "honky-tonk", n: "Honky Tonk", zh: "酒馆乡村", f: "country", y: 1945, r: "美国", bpm: "80–120", tier: 3,
      d: "酒馆里的乡村：电吉他、钢琴、鼓，歌词回到喝酒与失恋。",
      ch: ["电吉他", "酒馆主题", "稳定鼓点"],
      ar: ["Hank Williams", "Lefty Frizzell", "George Jones"],
      tr: [["Your Cheatin' Heart", "Hank Williams", 1953]],
      p: ["country"]
    },
    {
      id: "country-rock", n: "Country Rock", zh: "乡村摇滚", f: "country", y: 1968, r: "美国", bpm: "80–130", tier: 3,
      d: "把乡村的旋律与和声放进摇滚乐队，Gram Parsons 与 The Byrds 开了头。",
      ch: ["乡村旋律", "摇滚编制", "踏板钢弦吉他"],
      ar: ["The Byrds", "Gram Parsons", "Eagles"],
      tr: [["Hickory Wind", "The Byrds", 1968], ["Take It Easy", "Eagles", 1972]],
      p: ["country", "folk-rock"]
    },
    {
      id: "outlaw-country", n: "Outlaw Country", zh: "叛道乡村", f: "country", y: 1973, r: "美国", bpm: "80–120", tier: 3,
      d: "1970 年代纳什维尔体制外的乡村，更粗粝、更摇滚，也更自我。",
      ch: ["粗粝制作", "反体制姿态", "乡村摇滚混合"],
      ar: ["Willie Nelson", "Waylon Jennings", "Kris Kristofferson"],
      tr: [["Mammas Don't Let Your Babies Grow Up to Be Cowboys", "Waylon & Willie", 1978]],
      p: ["country"]
    },

    /* ---------- 爵士 ---------- */
    {
      id: "ragtime", n: "Ragtime", zh: "拉格泰姆", f: "jazz", y: 1897, r: "美国", bpm: "100–140", tier: 3,
      d: "19 世纪末的切分钢琴音乐：左手稳定低音、右手切分旋律，是爵士的直接前身。",
      ch: ["切分节奏", "钢琴独奏", "进行曲结构"],
      ar: ["Scott Joplin", "James Scott"],
      tr: [["Maple Leaf Rag", "Scott Joplin", 1899]],
      p: []
    },
    {
      id: "new-orleans-jazz", n: "New Orleans Jazz", zh: "新奥尔良爵士", f: "jazz", y: 1905, r: "美国·新奥尔良", bpm: "90–140", tier: 2,
      d: "新奥尔良的集体即兴：小号、单簧管、长号同时说话，葬礼与游行都能演奏。",
      ch: ["集体即兴", "铜管编制", "拉格泰姆节奏"],
      ar: ["Louis Armstrong", "King Oliver", "Sidney Bechet"],
      tr: [["West End Blues", "Louis Armstrong", 1928]],
      p: ["ragtime", "blues"]
    },
    {
      id: "swing", n: "Swing", zh: "摇摆乐", f: "jazz", y: 1932, r: "美国", bpm: "120–200", tier: 2,
      d: "大乐队时代的舞厅爵士：节奏组驱动、管乐声部对答，1930 年代统治美国流行乐。",
      ch: ["大乐队", "四拍摇摆", "管乐对答"],
      ar: ["Duke Ellington", "Count Basie", "Benny Goodman"],
      tr: [["Sing, Sing, Sing", "Benny Goodman", 1937]],
      p: ["new-orleans-jazz"]
    },
    {
      id: "bebop", n: "Bebop", zh: "比波普", f: "jazz", y: 1942, r: "美国·纽约", bpm: "160–300", tier: 2,
      d: "二战后的小编制革命：快速、复杂和声、即兴至上，把爵士从舞厅推向艺术音乐。",
      ch: ["高速即兴", "复杂和声", "小编制"],
      ar: ["Charlie Parker", "Dizzy Gillespie", "Thelonious Monk"],
      tr: [["Ko-Ko", "Charlie Parker", 1945], ["Salt Peanuts", "Dizzy Gillespie", 1945]],
      p: ["swing"]
    },
    {
      id: "cool-jazz", n: "Cool Jazz", zh: "冷爵士", f: "jazz", y: 1949, r: "美国·西海岸", bpm: "80–140", tier: 3,
      d: "对比波普的反动：更慢、更克制、重编曲与音色，西海岸爵士的代表。",
      ch: ["克制音色", "编曲化", "室内乐质感"],
      ar: ["Miles Davis", "Chet Baker", "Bill Evans"],
      tr: [["Jeru", "Miles Davis", 1949], ["My Funny Valentine", "Chet Baker", 1954]],
      p: ["bebop"]
    },
    {
      id: "hard-bop", n: "Hard Bop", zh: "硬波普", f: "jazz", y: 1955, r: "美国", bpm: "120–200", tier: 3,
      d: "把布鲁斯与福音的粗粝感带回爵士，鼓与贝斯更放克，是 soul jazz 的温床。",
      ch: ["福音/布鲁斯味", "放克鼓点", "强力和声"],
      ar: ["Art Blakey", "Horace Silver", "John Coltrane"],
      tr: [["Moanin'", "Art Blakey", 1958]],
      p: ["bebop", "blues", "gospel"]
    },
    {
      id: "modal-jazz", n: "Modal Jazz", zh: "调式爵士", f: "jazz", y: 1959, r: "美国", bpm: "100–180", tier: 3,
      d: "用少量调式代替频繁和弦变化，让独奏者可以在一个和声上长时间展开。",
      ch: ["静态和声", "长时间即兴", "调式音阶"],
      ar: ["Miles Davis", "John Coltrane", "McCoy Tyner"],
      tr: [["So What", "Miles Davis", 1959]],
      p: ["hard-bop"]
    },
    {
      id: "free-jazz", n: "Free Jazz", zh: "自由爵士", f: "jazz", y: 1960, r: "美国", bpm: "—", tier: 3,
      d: "放弃固定和声与节拍，把集体即兴推向噪音与能量的边界。",
      ch: ["无固定节拍", "集体即兴", "极端音色"],
      ar: ["Ornette Coleman", "Cecil Taylor", "Albert Ayler"],
      tr: [["Free Jazz", "Ornette Coleman", 1961]],
      p: ["bebop", "modal-jazz"]
    },
    {
      id: "jazz-fusion", n: "Jazz Fusion", zh: "融合爵士", f: "jazz", y: 1969, r: "美国", bpm: "90–160", tier: 2,
      d: "爵士乐手插电：摇滚节拍、放克贝斯、合成器；Miles Davis 的《Bitches Brew》是分水岭。",
      ch: ["电声乐器", "摇滚/放克节拍", "长篇独奏"],
      ar: ["Miles Davis", "Weather Report", "Herbie Hancock"],
      tr: [["Bitches Brew", "Miles Davis", 1970], ["Chameleon", "Herbie Hancock", 1973]],
      p: ["modal-jazz", "rock-and-roll", "funk"]
    },
    {
      id: "smooth-jazz", n: "Smooth Jazz", zh: "平滑爵士", f: "jazz", y: 1980, r: "美国", bpm: "80–110", tier: 3,
      d: "1980 年代的电台爵士：合成器、柔和律动、无攻击性旋律。",
      ch: ["合成器铺底", "柔和律动", "旋律优先"],
      ar: ["Kenny G", "George Benson", "Sade"],
      tr: [["Songbird", "Kenny G", 1986]],
      p: ["jazz-fusion", "quiet-storm"]
    },
    {
      id: "acid-jazz", n: "Acid Jazz", zh: "酸性爵士", f: "jazz", y: 1987, r: "英国·伦敦", bpm: "100–125", tier: 3,
      d: "把爵士采样、放克律动和 house 节拍拼在一起，伦敦俱乐部场景的产物。",
      ch: ["爵士采样", "放克律动", "俱乐部节拍"],
      ar: ["US3", "Jamiroquai", "Incognito"],
      tr: [["Cantaloop (Flip Fantasia)", "US3", 1993]],
      p: ["jazz-fusion", "funk", "hip-hop"]
    },
    {
      id: "nu-jazz", n: "Nu Jazz", zh: "新爵士", f: "jazz", y: 1995, r: "欧洲", bpm: "90–130", tier: 3,
      d: "1990 年代后期，电子制作人与爵士乐手合作，把爵士即兴带进俱乐部与耳机。",
      ch: ["电子制作", "现场爵士器乐", "慢拍律动"],
      ar: ["St Germain", "The Cinematic Orchestra", "Nils Petter Molvær"],
      tr: [["Rose Rouge", "St Germain", 2000]],
      p: ["jazz-fusion", "downtempo", "house"]
    },

    /* ---------- 灵魂 / R&B / 放克 ---------- */
    {
      id: "rhythm-and-blues", n: "Rhythm & Blues", zh: "节奏布鲁斯", f: "soul", y: 1945, r: "美国", bpm: "80–140", tier: 2,
      d: "战后把 jump blues 的管乐、gospel 的人声与 boogie 的律动合并，是 soul、funk 与摇滚乐的共同源头。",
      ch: ["管乐 riff", "福音式唱腔", "强劲节拍"],
      ar: ["Ray Charles", "Ruth Brown", "Louis Jordan"],
      tr: [["What'd I Say", "Ray Charles", 1959]],
      p: ["jump-blues", "gospel"]
    },
    {
      id: "doo-wop", n: "Doo-Wop", zh: "嘟喔普", f: "soul", y: 1948, r: "美国", bpm: "70–110", tier: 3,
      d: "街角人声合唱：无伴奏或轻伴奏、三度和声、浪漫歌词。",
      ch: ["人声和声", "无伴奏", "浪漫主题"],
      ar: ["The Platters", "The Drifters", "The Coasters"],
      tr: [["Only You (And You Alone)", "The Platters", 1955]],
      p: ["rhythm-and-blues", "gospel"]
    },
    {
      id: "soul", n: "Soul", zh: "灵魂乐", f: "soul", y: 1955, r: "美国", bpm: "70–130", tier: 1,
      d: "把福音的激情放进世俗情歌，人声是绝对主角；1960 年代美国黑人音乐的主流。",
      ch: ["福音式唱腔", "铜管/弦乐", "情感直给"],
      ar: ["Ray Charles", "Sam Cooke", "Otis Redding"],
      tr: [["A Change Is Gonna Come", "Sam Cooke", 1964], ["Try a Little Tenderness", "Otis Redding", 1966]],
      p: ["rhythm-and-blues", "gospel"]
    },
    {
      id: "motown", n: "Motown", zh: "摩城", f: "soul", y: 1960, r: "美国·底特律", bpm: "100–130", tier: 2,
      d: "底特律的精致 soul：流行化旋律、紧凑编曲、工厂式制作，为跨种族市场而生。",
      ch: ["精致制作", "流行旋律", "贝斯推进"],
      ar: ["The Supremes", "The Temptations", "Stevie Wonder"],
      tr: [["Reach Out I'll Be There", "Four Tops", 1966], ["Superstition", "Stevie Wonder", 1972]],
      p: ["soul", "pop"]
    },
    {
      id: "funk", n: "Funk", zh: "放克", f: "soul", y: 1965, r: "美国", bpm: "90–120", tier: 1,
      d: "一拍拍重音、贝斯主导、鼓和吉他切成细碎律动；James Brown 把节奏本身变成主角。",
      ch: ["一拍拍重音", "贝斯主导", "切分吉他"],
      ar: ["James Brown", "Sly & the Family Stone", "Parliament-Funkadelic"],
      tr: [["Papa's Got a Brand New Bag", "James Brown", 1965], ["Give Up the Funk", "Parliament", 1975]],
      p: ["soul", "rhythm-and-blues"]
    },
    {
      id: "psychedelic-soul", n: "Psychedelic Soul", zh: "迷幻灵魂", f: "soul", y: 1968, r: "美国", bpm: "90–130", tier: 3,
      d: "灵魂乐遇上迷幻摇滚：失真、回声、社会意识与实验编曲。",
      ch: ["失真/回声", "社会议题", "实验编曲"],
      ar: ["Sly & the Family Stone", "Funkadelic", "Shuggie Otis"],
      tr: [["Family Affair", "Sly & the Family Stone", 1971]],
      p: ["soul", "psychedelic-rock"]
    },
    {
      id: "philadelphia-soul", n: "Philadelphia Soul", zh: "费城灵魂", f: "soul", y: 1968, r: "美国·费城", bpm: "100–125", tier: 3,
      d: "费城的甜美灵魂：弦乐、拉丁打击乐、编曲华丽，是 disco 的直接前身之一。",
      ch: ["弦乐铺陈", "拉丁打击乐", "甜美人声"],
      ar: ["The O'Jays", "Harold Melvin & the Blue Notes", "Gamble & Huff"],
      tr: [["Love Train", "The O'Jays", 1972]],
      p: ["soul", "funk"]
    },
    {
      id: "quiet-storm", n: "Quiet Storm", zh: "安静风暴", f: "soul", y: 1972, r: "美国", bpm: "60–90", tier: 3,
      d: "1970 年代后期的慢板 R&B，浪漫、丝滑，是深夜电台与卧室的配乐。",
      ch: ["慢板", "丝滑人声", "合成器"],
      ar: ["Teddy Pendergrass", "Luther Vandross", "Anita Baker"],
      tr: [["Close the Door", "Teddy Pendergrass", 1978]],
      p: ["philadelphia-soul", "smooth-jazz"]
    },
    {
      id: "contemporary-rnb", n: "Contemporary R&B", zh: "当代 R&B", f: "soul", y: 1983, r: "美国", bpm: "60–110", tier: 2,
      d: "1980 年代后的 R&B：鼓机、合成器、更精致的制作；Michael Jackson 与 Whitney Houston 把它推上全球。",
      ch: ["鼓机/合成器", "精致人声", "流行制作"],
      ar: ["Michael Jackson", "Whitney Houston", "Janet Jackson"],
      tr: [["Nasty", "Janet Jackson", 1986]],
      p: ["rhythm-and-blues", "soul", "funk"]
    },
    {
      id: "new-jack-swing", n: "New Jack Swing", zh: "新杰克摇摆", f: "soul", y: 1987, r: "美国·纽约", bpm: "100–120", tier: 3,
      d: "1980 年代末的 R&B 分支：摇摆鼓机、采样与 hip-hop 态度。",
      ch: ["摇摆鼓机", "采样", "Hip-hop 造型"],
      ar: ["Teddy Riley", "Bobby Brown", "Guy"],
      tr: [["My Prerogative", "Bobby Brown", 1988]],
      p: ["contemporary-rnb", "hip-hop"]
    },
    {
      id: "neo-soul", n: "Neo Soul", zh: "新灵魂", f: "soul", y: 1995, r: "美国", bpm: "70–100", tier: 3,
      d: "1990 年代中后期，把现场乐器、爵士和声与 hip-hop 鼓点带回灵魂乐。",
      ch: ["现场乐器", "爵士和声", "Hip-hop 鼓点"],
      ar: ["Erykah Badu", "D'Angelo", "Lauryn Hill"],
      tr: [["Untitled (How Does It Feel)", "D'Angelo", 2000]],
      p: ["soul", "hip-hop", "contemporary-rnb"]
    },
    {
      id: "alternative-rnb", n: "Alternative R&B", zh: "另类 R&B", f: "soul", y: 2010, r: "美国/英国", bpm: "60–100", tier: 3,
      d: "2010 年代的 R&B：氛围化、电子质感、模糊流派边界。",
      ch: ["氛围化制作", "电子音色", "私密唱腔"],
      ar: ["The Weeknd", "Frank Ocean", "FKA twigs"],
      tr: [["Thinkin Bout You", "Frank Ocean", 2012]],
      p: ["contemporary-rnb", "trip-hop"]
    },

    /* ---------- 迪斯科 ---------- */
    {
      id: "disco", n: "Disco", zh: "迪斯科", f: "disco", y: 1972, r: "美国·纽约", bpm: "100–130", tier: 1,
      d: "1970 年代纽约地下舞池的产物：从 funk、soul、费城灵魂与 salsa 提炼出四拍到底的舞曲；DJ 用 12 英寸加长混音重新创作。1979 年主流反扑后转入地下，却直接催生了 house 与 techno。",
      ch: ["4/4 大鼓", "反拍 hi-hat", "弦乐/铜管", "切分贝斯", "12 英寸加长混音"],
      ar: ["Donna Summer", "Chic", "Sylvester", "Bee Gees"],
      tr: [["Love to Love You Baby", "Donna Summer", 1975], ["I Feel Love", "Donna Summer", 1977], ["Le Freak", "Chic", 1978], ["Good Times", "Chic", 1979]],
      p: ["funk", "soul", "philadelphia-soul", "salsa"]
    },
    {
      id: "boogie", n: "Boogie", zh: "布吉", f: "disco", y: 1978, r: "美国", bpm: "105–120", tier: 3,
      d: "disco 退潮后的轻快分支：合成器贝斯、更松的鼓、R&B 味更重。",
      ch: ["合成器贝斯", "轻快律动", "R&B 人声"],
      ar: ["Evelyn 'Champagne' King", "D-Train", "Kashif"],
      tr: [["I'm in Love", "Evelyn 'Champagne' King", 1981]],
      p: ["disco", "funk"]
    },
    {
      id: "post-disco", n: "Post-Disco", zh: "后迪斯科", f: "disco", y: 1979, r: "美国", bpm: "100–125", tier: 3,
      d: "1979 年之后的过渡期：disco 的舞池基因被拆进 R&B、合成器流行与早期电子。",
      ch: ["电子音色", "R&B 制作", "舞池导向"],
      ar: ["Michael Jackson", "Prince", "The Pointer Sisters"],
      tr: [["Don't Stop 'Til You Get Enough", "Michael Jackson", 1979]],
      p: ["disco", "contemporary-rnb"]
    },
    {
      id: "hi-nrg", n: "Hi-NRG", zh: "高能量舞曲", f: "disco", y: 1978, r: "美国/英国", bpm: "125–145", tier: 3,
      d: "比 disco 更快、更合成器化，1980 年代同志舞池的高能量舞曲。",
      ch: ["高速四拍", "合成器琶音", "高亢人声"],
      ar: ["Sylvester", "Patrick Cowley", "Divine"],
      tr: [["You Make Me Feel (Mighty Real)", "Sylvester", 1978]],
      p: ["disco", "synth-pop"]
    },
    {
      id: "italo-disco", n: "Italo Disco", zh: "意大利迪斯科", f: "disco", y: 1981, r: "意大利/欧洲", bpm: "110–130", tier: 3,
      d: "意大利/欧洲的合成器 disco：机械鼓机、旋律化合成器、机器人声。",
      ch: ["鼓机", "合成器旋律", "机器人声"],
      ar: ["Giorgio Moroder", "Gazebo", "Baltimora"],
      tr: [["Tarzan Boy", "Baltimora", 1985]],
      p: ["disco", "synth-pop"]
    },
    {
      id: "nu-disco", n: "Nu Disco", zh: "新迪斯科", f: "disco", y: 2002, r: "欧洲", bpm: "105–125", tier: 3,
      d: "2000 年代对 disco 的复古再制作：现场贝斯、弦乐与现代化舞曲制作。",
      ch: ["复古音色", "现场贝斯", "现代制作"],
      ar: ["Lindstrøm", "Todd Terje", "Purple Disco Machine"],
      tr: [["Inspector Norse", "Todd Terje", 2012]],
      p: ["disco", "house"]
    }
  );
})();
