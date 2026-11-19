(function () {
  const G = (window.MG = window.MG || { families: [], genres: [] });
  G.genres.push(
    /* ---------- 拉丁 / 加勒比 / 非洲（之二） ---------- */
    {
      id: "samba", n: "Samba", zh: "桑巴", f: "latin", y: 1916, r: "巴西·里约", bpm: "90–120", tier: 2,
      d: "里约黑人社群把非洲鼓点、呼应与欧洲和声熔成狂欢节游行乐，二拍子上密集的打击层推着人全身摇摆。",
      ch: ["狂欢节游行", "密集打击层", "呼应对唱"],
      ar: ["Donga", "Cartola", "Martinho da Vila"],
      tr: [["Pelo Telefone", "Donga", 1916], ["Aquarela do Brasil", "Ary Barroso", 1939]],
      p: ["son-cubano"]
    },
    {
      id: "bossa-nova", n: "Bossa Nova", zh: "巴萨诺瓦", f: "latin", y: 1958, r: "巴西·里约", bpm: "100–130", tier: 2,
      d: "里约中产把桑巴放慢化简，配上爵士和声与气声吟唱，吉他切分像海浪轻推，安静又慵懒。",
      ch: ["爵士和声", "气声吟唱", "切分吉他"],
      ar: ["João Gilberto", "Antônio Carlos Jobim", "Stan Getz"],
      tr: [["Chega de Saudade", "João Gilberto", 1959]],
      p: ["samba", "cool-jazz"]
    },
    {
      id: "mpb", n: "MPB", zh: "巴西流行乐", f: "latin", y: 1965, r: "巴西", bpm: "70–120", tier: 2,
      d: "军政府年代，巴西音乐人把巴萨诺瓦、桑巴与民谣摇滚熬成有政治锋芒的创作歌手音乐，歌词先于节奏。",
      ch: ["政治歌词", "创作歌手", "多元融合"],
      ar: ["Caetano Veloso", "Gilberto Gil", "Chico Buarque"],
      tr: [["Alegria, Alegria", "Caetano Veloso", 1967], ["Construção", "Chico Buarque", 1971]],
      p: ["bossa-nova", "samba"]
    },
    {
      id: "tango", n: "Tango", zh: "探戈", f: "latin", y: 1905, r: "阿根廷·布宜诺斯艾利斯", bpm: "110–130", tier: 2,
      d: "布宜诺斯艾利斯港口区的移民音乐，手风琴与弦乐奏出忧郁而强硬的步态，双人舞贴身对抗又互相支撑。",
      ch: ["手风琴", "忧郁旋律", "贴身双人舞"],
      ar: ["Carlos Gardel", "Astor Piazzolla", "Juan D'Arienzo"],
      tr: [["Por una Cabeza", "Carlos Gardel", 1935]],
      p: ["son-cubano"]
    },
    {
      id: "forro", n: "Forró", zh: "福罗", f: "latin", y: 1940, r: "巴西·东北部", bpm: "100–140", tier: 3,
      d: "巴西东北旱地的舞会音乐，手风琴、三角铁与扎姆博纳鼓撑起快活的两拍与三拍，唱旱季、迁徙与思念。",
      ch: ["手风琴", "三角铁", "东北方言歌词"],
      ar: ["Luiz Gonzaga", "Dominguinhos", "Jackson do Pandeiro"],
      tr: [["Asa Branca", "Luiz Gonzaga", 1947]],
      p: ["samba"]
    },
    {
      id: "sertanejo", n: "Sertanejo", zh: "塞尔塔内霍", f: "latin", y: 1929, r: "巴西·圣保罗内陆", bpm: "80–130", tier: 3,
      d: "从圣保罗内陆乡野民歌起家，两把木吉他加假声二重唱，九十年代插电后变成巴西最畅销的大众流行。",
      ch: ["双人二重唱", "乡村吉他", "假声"],
      ar: ["Chitãozinho & Xororó", "Zezé Di Camargo & Luciano", "Tião Carreiro"],
      tr: [["É o Amor", "Zezé Di Camargo & Luciano", 1991]],
      p: ["country"]
    },
    {
      id: "bachata", n: "Bachata", zh: "巴恰塔", f: "latin", y: 1962, r: "多米尼加", bpm: "110–140", tier: 3,
      d: "多米尼加乡野的吉他伤情歌，邦戈、刮瓜配清亮高音吉他，讲背叛与思念，从底层标签翻成全球浪漫。",
      ch: ["高音吉他", "邦戈鼓", "伤情歌词"],
      ar: ["Aventura", "Juan Luis Guerra", "Romeo Santos"],
      tr: [["Obsesión", "Aventura", 2002]],
      p: ["son-cubano"]
    },
    {
      id: "merengue", n: "Merengue", zh: "梅伦格", f: "latin", y: 1930, r: "多米尼加", bpm: "120–160", tier: 3,
      d: "多米尼加国舞，二拍子上塔姆博拉鼓与刮瓜推进，铜管短句一压，全场脚步跟着左右拖曳。",
      ch: ["塔姆博拉鼓", "铜管短句", "拖曳舞步"],
      ar: ["Juan Luis Guerra", "Johnny Ventura", "Wilfrido Vargas"],
      tr: [["La Bilirrubina", "Juan Luis Guerra", 1990]],
      p: ["son-cubano"]
    },
    {
      id: "kompa", n: "Kompa", zh: "康帕", f: "latin", y: 1955, r: "海地", bpm: "90–120", tier: 3,
      d: "海地太子港把本土节奏交给电吉他、铜管与康加鼓，摇摆温和克制，是加勒比城市舞曲的雅致版本。",
      ch: ["电吉他旋律", "康加鼓", "温和摇摆"],
      ar: ["Nemours Jean-Baptiste", "Tabou Combo", "Alan Cavé"],
      tr: [["Ti Carole", "Nemours Jean-Baptiste", 1967]],
      p: ["merengue"]
    },
    {
      id: "calypso", n: "Calypso", zh: "卡利普索", f: "latin", y: 1912, r: "特立尼达", bpm: "100–140", tier: 3,
      d: "特立尼达狂欢节的即兴讽刺歌，钢鼓与吉他托着西印度群岛的叙事韵律，既报新闻也讲笑话。",
      ch: ["钢鼓", "讽刺歌词", "狂欢节即兴"],
      ar: ["Harry Belafonte", "Mighty Sparrow", "Lord Kitchener"],
      tr: [["Day-O (Banana Boat Song)", "Harry Belafonte", 1956], ["Jean and Dinah", "Mighty Sparrow", 1956]],
      p: ["son-cubano"]
    },
    {
      id: "soca", n: "Soca", zh: "索卡", f: "latin", y: 1970, r: "特立尼达", bpm: "130–160", tier: 3,
      d: "卡利普索加速后塞进鼓机与合成器，重拍落在地鼓上，为狂欢节游行造出不知疲倦的推力。",
      ch: ["地鼓重拍", "合成器", "游行节奏"],
      ar: ["Arrow", "Machel Montano", "Kes"],
      tr: [["Hot Hot Hot", "Arrow", 1983]],
      p: ["calypso"]
    },
    {
      id: "zouk", n: "Zouk", zh: "祖克", f: "latin", y: 1980, r: "法属安的列斯", bpm: "100–130", tier: 3,
      d: "瓜德罗普与马提尼克乐手把康帕、本土鼓乐和合成器叠成密实舞曲，鼓组急促，人声甜里带韧。",
      ch: ["合成器铺底", "密集鼓组", "克里奥尔语"],
      ar: ["Kassav'", "Zouk Machine", "Jocelyne Béroard"],
      tr: [["Zouk-la Sé Sèl Médikaman Nou Ni", "Kassav'", 1985]],
      p: ["kompa", "soca"]
    },
    {
      id: "kizomba", n: "Kizomba", zh: "基宗巴", f: "latin", y: 1984, r: "安哥拉", bpm: "80–100", tier: 3,
      d: "安哥拉人在祖克的速度上再放慢，混进森巴的贴身律动，鼓点缠绵，被叫作非洲的慢舞情歌。",
      ch: ["慢速贴身", "缠绵鼓点", "葡萄牙语歌词"],
      ar: ["Bonga", "Anselmo Ralph", "C4 Pedro"],
      tr: [["Não Me Toca", "Anselmo Ralph", 2012]],
      p: ["zouk"]
    },
    {
      id: "dembow", n: "Dembow", zh: "登波", f: "latin", y: 1990, r: "牙买加/波多黎各", bpm: "90–110", tier: 3,
      d: "牙买加 dancehall 的三连音鼓型被波多黎各人循环取样、加速堆叠，成了 reggaeton 的骨架节奏。",
      ch: ["三连音鼓型", "循环取样", "低音推进"],
      ar: ["Shabba Ranks", "Nando Boom", "El General"],
      tr: [["Dem Bow", "Shabba Ranks", 1990]],
      p: ["reggaeton", "dancehall"]
    },
    {
      id: "moombahton", n: "Moombahton", zh: "蒙巴顿", f: "latin", y: 2009, r: "美国·华盛顿", bpm: "100–115", tier: 3,
      d: "华盛顿的制作人把登波鼓型降到一百零八拍，再铺浩室低音，慢到能扭、也照样能蹦的混血舞曲。",
      ch: ["一百零八拍", "登波鼓型", "浩室低音"],
      ar: ["Dillon Francis", "Diplo", "Munchi"],
      tr: [["Masta Blasta", "Dillon Francis", 2012]],
      p: ["dembow", "electro-house"]
    },
    {
      id: "nu-cumbia", n: "Nu-Cumbia", zh: "新昆比亚", f: "latin", y: 2005, r: "阿根廷/哥伦比亚", bpm: "90–120", tier: 3,
      d: "阿根廷与墨西哥的电子乐手把昆比亚手风琴采样、合成器和舞池低音拼在一起，怀旧又躁动。",
      ch: ["采样手风琴", "合成器", "舞池低音"],
      ar: ["Bomba Estéreo", "Chancha Vía Circuito", "Dengue Dengue Dengue"],
      tr: [["Soy Yo", "Bomba Estéreo", 2015]],
      p: ["cumbia"]
    },
    {
      id: "juju", n: "Juju", zh: "朱朱", f: "latin", y: 1920, r: "尼日利亚", bpm: "100–140", tier: 3,
      d: "约鲁巴人的吉他乐队音乐，多把吉他交织成对话式旋律，配上说话鼓与合唱团，织体厚而松弛。",
      ch: ["多吉他交织", "说话鼓", "约鲁巴合唱"],
      ar: ["King Sunny Adé", "Chief Ebenezer Obey", "Tunde Nightingale"],
      tr: [["Ja Funmi", "King Sunny Adé", 1982]],
      p: ["highlife"]
    },
    {
      id: "fuji", n: "Fuji", zh: "富士", f: "latin", y: 1960, r: "尼日利亚·拉各斯", bpm: "120–160", tier: 3,
      d: "拉各斯穆斯林社群在阿帕拉与萨卡拉上做出的大乐团音乐，鼓组极密，主唱与合唱来回交锋。",
      ch: ["密集鼓组", "主唱对答", "阿帕拉根源"],
      ar: ["Sikiru Ayinde Barrister", "Kollington Ayinla", "Adewale Ayuba"],
      tr: [["Refined Fuji Garbage", "Sikiru Ayinde Barrister", 1991]],
      p: ["juju"]
    },
    {
      id: "soukous", n: "Soukous", zh: "苏库斯", f: "latin", y: 1960, r: "刚果", bpm: "120–150", tier: 3,
      d: "刚果两把吉他把伦巴拆成轮流重复的短句，鼓组一路推进，八十年代从金沙萨跳到巴黎舞厅。",
      ch: ["双吉他互锁", "快速鼓组", "林加拉语"],
      ar: ["Franco", "Tabu Ley Rochereau", "Papa Wemba"],
      tr: [["Mario", "Franco", 1985]],
      p: ["highlife"]
    },
    {
      id: "makossa", n: "Makossa", zh: "马科萨", f: "latin", y: 1950, r: "喀麦隆·杜阿拉", bpm: "110–140", tier: 3,
      d: "杜阿拉人的节庆舞曲，贝斯自己走一条旋律、铜管齐奏、鼓点硬朗，七十年代被迪邦戈带到世界。",
      ch: ["贝斯旋律", "铜管齐奏", "杜阿拉语"],
      ar: ["Manu Dibango", "Sam Fan Thomas", "Petit Pays"],
      tr: [["Soul Makossa", "Manu Dibango", 1972]],
      p: ["highlife"]
    },
    {
      id: "mbalax", n: "Mbalax", zh: "姆巴拉克斯", f: "latin", y: 1970, r: "塞内加尔·达喀尔", bpm: "120–150", tier: 3,
      d: "塞内加尔的沃洛夫节奏，萨巴尔鼓密集敲击与吉他、铜管并列，人声高亢，跳舞全靠腰腹发力。",
      ch: ["萨巴尔鼓", "沃洛夫语", "腰腹律动"],
      ar: ["Youssou N'Dour", "Baaba Maal", "Étoile de Dakar"],
      tr: [["7 Seconds", "Youssou N'Dour & Neneh Cherry", 1994]],
      p: ["soukous"]
    },
    {
      id: "taarab", n: "Taarab", zh: "塔拉布", f: "latin", y: 1900, r: "坦桑尼亚·桑给巴尔", bpm: "70–110", tier: 3,
      d: "桑给巴尔沿海的婚礼音乐，阿拉伯旋律、印度弦乐与非洲鼓混作一团，歌声婉转悠长，讲究词句。",
      ch: ["阿拉伯旋律", "婚礼场合", "弦乐与鼓"],
      ar: ["Culture Musical Club", "Bi Kidude", "Siti binti Saad"],
      tr: [["Muhogo wa Jang'ombe", "Culture Musical Club & Bi Kidude", 2007]],
      p: ["highlife"]
    },
    {
      id: "benga", n: "Benga", zh: "本加", f: "latin", y: 1960, r: "肯尼亚", bpm: "120–160", tier: 3,
      d: "肯尼亚卢奥人把传统里拉琴的音型搬上吉他与贝斯，节奏轻快跳跃，是独立前后最流行的本土声音。",
      ch: ["里拉琴音型", "轻快跳跃", "卢奥语"],
      ar: ["D.O. Misiani", "Kakai Kilonzo", "Victoria Kings"],
      tr: [["Amuka Salama", "D.O. Misiani", 2010]],
      p: ["highlife"]
    },
    {
      id: "chimurenga", n: "Chimurenga", zh: "奇穆伦加", f: "latin", y: 1970, r: "津巴布韦", bpm: "110–140", tier: 3,
      d: "罗得西亚时代的抗争之声：姆比拉琴音型改用吉他弹，配嘶哑嗓音和政治歌词，名字意为「革命」。",
      ch: ["姆比拉音型", "政治歌词", "吉他替代"],
      ar: ["Thomas Mapfumo", "Stella Chiweshe", "Oliver Mtukudzi"],
      tr: [["Hokoyo", "Thomas Mapfumo", 1978]],
      p: ["benga"]
    },
    {
      id: "kuduro", n: "Kuduro", zh: "库杜罗", f: "latin", y: 1990, r: "安哥拉·罗安达", bpm: "130–150", tier: 3,
      d: "安哥拉内战后在罗安达的街区里长出来，快速电子节拍配粗粝说唱和即兴舞步，名字意为「硬屁股」。",
      ch: ["快速电子节拍", "粗粝说唱", "即兴舞步"],
      ar: ["Buraka Som Sistema", "Dog Murras", "Tony Amado"],
      tr: [["Kalemba (Wegue Wegue)", "Buraka Som Sistema", 2008]],
      p: ["soukous", "house"]
    },
    {
      id: "coupe-decale", n: "Coupé-Décalé", zh: "库佩-德卡莱", f: "latin", y: 2000, r: "科特迪瓦·阿比让", bpm: "120–140", tier: 3,
      d: "科特迪瓦战乱中由 DJ 圈发明，鼓点切得干脆、口号式喊唱、舞步夸张，专为派对解压而生。",
      ch: ["干脆切分", "口号喊唱", "派对舞步"],
      ar: ["DJ Arafat", "Douk Saga", "Serge Beynaud"],
      tr: [["Déranger", "DJ Arafat", 2010]],
      p: ["zouk", "kuduro"]
    }
  );
})();
