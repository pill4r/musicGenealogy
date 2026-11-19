/* 音乐风格谱系 · 数据 8 —— 灵魂 / 爵士 / 乡村 / 迪斯科 补充 + 摇滚与拉丁若干
   字段同 data-1.js */
(function () {
  const G = (window.MG = window.MG || { families: [], genres: [] });

  G.genres.push(
    /* ================= 灵魂 / R&B 补充 ================= */
    {
      id: "northern-soul", n: "Northern Soul", zh: "北方灵魂", f: "soul", y: 1967, r: "英国北部", bpm: "120–150", tier: 3,
      d: "英国北方舞厅里被重新发掘的美国灵魂乐 7 寸单曲：快、重拍、稀有，Frank Wilson 那张只压了很少拷贝的唱片成了圣杯。",
      ch: ["快速灵魂", "重拍", "稀有单曲"],
      ar: ["Frank Wilson", "Dobie Gray", "Gloria Jones"],
      tr: [["Do I Love You (Indeed I Do)", "Frank Wilson", 1965]],
      p: ["soul", "motown"]
    },
    {
      id: "southern-soul", n: "Southern Soul", zh: "南方灵魂", f: "soul", y: 1961, r: "美国·孟菲斯", bpm: "70–110", tier: 2,
      d: "美国南方的灵魂乐：更粗粝的管乐、更慢的律动与教堂式的呼喊，Stax 与 Otis Redding 是核心。",
      ch: ["粗粝管乐", "慢律动", "教堂呼喊"],
      ar: ["Otis Redding", "Wilson Pickett", "Sam & Dave"],
      tr: [["These Arms of Mine", "Otis Redding", 1962]],
      p: ["soul", "rhythm-and-blues"]
    },
    {
      id: "deep-soul", n: "Deep Soul", zh: "深沉灵魂", f: "soul", y: 1965, r: "美国南部", bpm: "60–90", tier: 3,
      d: "南方灵魂最慢、最苦的一支：弦乐、撕裂的嗓音与失恋，James Carr 的《The Dark End of the Street》是标本。",
      ch: ["极慢", "弦乐", "苦情"],
      ar: ["James Carr", "Percy Sledge", "O.V. Wright"],
      tr: [["The Dark End of the Street", "James Carr", 1967]],
      p: ["soul"]
    },
    {
      id: "blue-eyed-soul", n: "Blue-Eyed Soul", zh: "蓝眼灵魂", f: "soul", y: 1967, r: "英国 / 美国", bpm: "90–120", tier: 3,
      d: "白人歌手演唱的灵魂乐：Dusty Springfield 与 Righteous Brothers 证明灵魂不是肤色问题。",
      ch: ["白人演唱", "灵魂唱腔", "流行制作"],
      ar: ["Dusty Springfield", "The Righteous Brothers", "Hall & Oates"],
      tr: [["Son of a Preacher Man", "Dusty Springfield", 1968]],
      p: ["soul", "pop"]
    },
    {
      id: "p-funk", n: "P-Funk", zh: "P 放克", f: "soul", y: 1975, r: "美国", bpm: "100–120", tier: 2,
      d: "Parliament-Funkadelic 的宇宙放克：合成器贝斯、太空歌剧概念与一整个乐团的现场，放克在这里变成了神话。",
      ch: ["合成器贝斯", "太空概念", "大乐团"],
      ar: ["Parliament", "Funkadelic", "Bootsy Collins"],
      tr: [["Give Up the Funk (Tear the Roof off the Sucker)", "Parliament", 1976]],
      p: ["funk", "psychedelic-soul"]
    },
    {
      id: "go-go", n: "Go-Go", zh: "GO-GO", f: "soul", y: 1970, r: "美国·华盛顿", bpm: "100–130", tier: 3,
      d: "华盛顿特区的放克变种：康加鼓、call-and-response 与永不落下的律动，Chuck Brown 是教父。",
      ch: ["康加鼓", "Call-and-response", "连续律动"],
      ar: ["Chuck Brown", "Trouble Funk", "E.U."],
      tr: [["Bustin' Loose", "Chuck Brown & The Soul Searchers", 1979]],
      p: ["funk", "rhythm-and-blues"]
    },
    {
      id: "electro-funk", n: "Electro-Funk", zh: "电放克", f: "soul", y: 1982, r: "美国", bpm: "100–120", tier: 2,
      d: "放克遇上合成器与鼓机：Zapp 的 talk box 与慢速机械律动，直接喂养了 electro 与西海岸嘻哈。",
      ch: ["Talk box", "鼓机", "机械律动"],
      ar: ["Zapp", "The Gap Band", "Cameo"],
      tr: [["More Bounce to the Ounce", "Zapp", 1980]],
      p: ["funk", "synth-pop"]
    },
    {
      id: "minneapolis-sound", n: "Minneapolis Sound", zh: "明尼阿波利斯之声", f: "soul", y: 1983, r: "美国·明尼阿波利斯", bpm: "110–130", tier: 2,
      d: "Prince 一手打造的放克、摇滚与合成器混合体，1980 年代最性感的流行声音之一。",
      ch: ["合成器", "放克吉他", "性张力"],
      ar: ["Prince", "The Time", "Sheila E."],
      tr: [["1999", "Prince", 1982]],
      p: ["funk", "synth-pop"]
    },

    /* ================= 爵士补充 ================= */
    {
      id: "latin-jazz", n: "Latin Jazz", zh: "拉丁爵士", f: "jazz", y: 1947, r: "美国·纽约", bpm: "120–200", tier: 2,
      d: "非洲-古巴节奏与 bebop 和声的联姻：Dizzy Gillespie 与 Chano Pozo 的《Manteca》是起点。",
      ch: ["Clave 节奏", "铜管", "即兴"],
      ar: ["Dizzy Gillespie", "Tito Puente", "Machito"],
      tr: [["Manteca", "Dizzy Gillespie", 1947]],
      p: ["bebop", "son-cubano"]
    },
    {
      id: "gypsy-jazz", n: "Gypsy Jazz", zh: "吉普赛爵士", f: "jazz", y: 1930, r: "法国·巴黎", bpm: "120–180", tier: 3,
      d: "Django Reinhardt 与 Stéphane Grappelli 在巴黎做的热爵士：原声吉他、快速琶音与摇摆。",
      ch: ["原声吉他", "快速琶音", "摇摆"],
      ar: ["Django Reinhardt", "Stéphane Grappelli", "Biréli Lagrène"],
      tr: [["Minor Swing", "Django Reinhardt", 1937]],
      p: ["swing"]
    },
    {
      id: "west-coast-jazz", n: "West Coast Jazz", zh: "西海岸爵士", f: "jazz", y: 1952, r: "美国·加州", bpm: "100–160", tier: 3,
      d: "冷爵士的加州版本：编曲精致、音色清凉、室内乐般的克制，Chet Baker 是它的面孔。",
      ch: ["清凉音色", "精致编曲", "克制"],
      ar: ["Chet Baker", "Gerry Mulligan", "Shorty Rogers"],
      tr: [["My Funny Valentine", "Chet Baker", 1954]],
      p: ["cool-jazz"]
    },
    {
      id: "soul-jazz", n: "Soul Jazz", zh: "灵魂爵士", f: "jazz", y: 1956, r: "美国", bpm: "100–140", tier: 3,
      d: "把福音与布鲁斯的律动带进爵士：Hammond 风琴、重复 riff 与舞池感，Jimmy Smith 是代表。",
      ch: ["Hammond 风琴", "重复 riff", "律动"],
      ar: ["Jimmy Smith", "Jimmy McGriff", "Grant Green"],
      tr: [["Back at the Chicken Shack", "Jimmy Smith", 1960]],
      p: ["hard-bop", "blues"]
    },
    {
      id: "jazz-funk", n: "Jazz-Funk", zh: "爵士放克", f: "jazz", y: 1970, r: "美国", bpm: "100–130", tier: 2,
      d: "爵士即兴与放克律动的结合：电钢琴、合成器与不可抗拒的贝斯线，Herbie Hancock 的《Chameleon》是国歌。",
      ch: ["电钢琴", "放克贝斯", "长段即兴"],
      ar: ["Herbie Hancock", "The Crusaders", "Lonnie Liston Smith"],
      tr: [["Chameleon", "Herbie Hancock", 1973]],
      p: ["jazz-fusion", "funk"]
    },
    {
      id: "spiritual-jazz", n: "Spiritual Jazz", zh: "精神爵士", f: "jazz", y: 1965, r: "美国", bpm: "60–120", tier: 3,
      d: "把爵士当作宗教体验：长音、自由即兴与非洲打击乐，Pharoah Sanders 的《The Creator Has a Master Plan》是经文。",
      ch: ["长音", "自由即兴", "灵性"],
      ar: ["Pharoah Sanders", "Alice Coltrane", "Sun Ra"],
      tr: [["The Creator Has a Master Plan", "Pharoah Sanders", 1969]],
      p: ["free-jazz", "modal-jazz"]
    },
    {
      id: "ethio-jazz", n: "Ethio-Jazz", zh: "埃塞俄比亚爵士", f: "jazz", y: 1960, r: "埃塞俄比亚", bpm: "90–140", tier: 3,
      d: "埃塞俄比亚五声音阶与爵士和声的混合：Mulatu Astatke 把传统旋律放进拉丁与爵士的节奏里。",
      ch: ["五声音阶", "拉丁节奏", "铜管"],
      ar: ["Mulatu Astatke", "Getatchew Mekurya", "Hailu Mergia"],
      tr: [["Yegelle Tezeta", "Mulatu Astatke", 1974]],
      p: ["jazz-fusion", "highlife"]
    },

    /* ================= 乡村补充 ================= */
    {
      id: "nashville-sound", n: "Nashville Sound", zh: "纳什维尔之声", f: "country", y: 1958, r: "美国·纳什维尔", bpm: "70–100", tier: 2,
      d: "在乡村歌曲外面包上弦乐与合唱，让它能进流行电台：Patsy Cline 的《Crazy》是完美样本。",
      ch: ["弦乐", "合唱", "平滑制作"],
      ar: ["Patsy Cline", "Jim Reeves", "Eddy Arnold"],
      tr: [["Crazy", "Patsy Cline", 1961]],
      p: ["country", "pop"]
    },
    {
      id: "bakersfield-sound", n: "Bakersfield Sound", zh: "贝克斯菲尔德之声", f: "country", y: 1950, r: "美国·加州", bpm: "110–150", tier: 3,
      d: "对纳什维尔弦乐的反动：电吉他、Telecaster 的尖锐音色与酒吧舞池的硬朗节奏，Buck Owens 是代表。",
      ch: ["Telecaster", "硬朗", "酒吧感"],
      ar: ["Buck Owens", "Merle Haggard", "Wynn Stewart"],
      tr: [["Act Naturally", "Buck Owens", 1963]],
      p: ["honky-tonk", "country"]
    },
    {
      id: "countrypolitan", n: "Countrypolitan", zh: "城市乡村", f: "country", y: 1966, r: "美国·纳什维尔", bpm: "70–100", tier: 3,
      d: "纳什维尔之声的升级版：更厚的弦乐、更城市的编曲，Glen Campbell 的《Wichita Lineman》是巅峰。",
      ch: ["厚弦乐", "城市感", "抒情"],
      ar: ["Glen Campbell", "Tammy Wynette", "Charlie Rich"],
      tr: [["Wichita Lineman", "Glen Campbell", 1968]],
      p: ["nashville-sound", "pop"]
    },
    {
      id: "western-swing", n: "Western Swing", zh: "西部摇摆", f: "country", y: 1930, r: "美国·德州", bpm: "120–180", tier: 3,
      d: "乡村弦乐加爵士大乐队与摇摆节奏：Bob Wills 的乐队在舞厅里把小提琴与铜管一起摇起来。",
      ch: ["小提琴", "摇摆节奏", "大乐队"],
      ar: ["Bob Wills", "Milton Brown", "Asleep at the Wheel"],
      tr: [["San Antonio Rose", "Bob Wills", 1938]],
      p: ["country", "swing"]
    },
    {
      id: "alt-country", n: "Alt-Country", zh: "另类乡村", f: "country", y: 1990, r: "美国", bpm: "90–130", tier: 2,
      d: "用独立摇滚的粗粝与态度唱乡村：Uncle Tupelo 的《No Depression》给一整代人命名。",
      ch: ["粗粝", "独立态度", "乡村根"],
      ar: ["Uncle Tupelo", "Wilco", "Son Volt"],
      tr: [["No Depression", "Uncle Tupelo", 1990]],
      p: ["country-rock", "indie-rock"]
    },
    {
      id: "americana", n: "Americana", zh: "美式音乐", f: "country", y: 1995, r: "美国", bpm: "80–120", tier: 2,
      d: "把乡村、民谣、蓝调与摇滚的根重新缝在一起的当代标签，Wilco 与 Gillian Welch 都在其中。",
      ch: ["根源融合", "叙事", "原声"],
      ar: ["Wilco", "Gillian Welch", "Jason Isbell"],
      tr: [["Jesus, Etc.", "Wilco", 2002]],
      p: ["alt-country", "folk-rock"]
    },
    {
      id: "country-pop", n: "Country Pop", zh: "乡村流行", f: "country", y: 1970, r: "美国", bpm: "90–120", tier: 2,
      d: "把乡村的叙事与嗓音放进流行编曲：Dolly Parton 的《Jolene》既有班卓也有榜单。",
      ch: ["流行编曲", "乡村嗓音", "叙事"],
      ar: ["Dolly Parton", "Shania Twain", "Taylor Swift"],
      tr: [["Jolene", "Dolly Parton", 1973]],
      p: ["country", "pop"]
    },
    {
      id: "bro-country", n: "Bro-Country", zh: "兄弟乡村", f: "country", y: 2010, r: "美国", bpm: "80–110", tier: 3,
      d: "2010 年代美国电台乡村：卡车、啤酒、短裤与说唱化的节奏，Florida Georgia Line 是代表。",
      ch: ["说唱化节奏", "派对主题", "电吉他"],
      ar: ["Florida Georgia Line", "Luke Bryan", "Jason Aldean"],
      tr: [["Cruise", "Florida Georgia Line", 2012]],
      p: ["country-pop", "hip-hop"]
    },

    /* ================= 迪斯科补充 ================= */
    {
      id: "euro-disco", n: "Euro-Disco", zh: "欧陆迪斯科", f: "disco", y: 1975, r: "欧洲", bpm: "110–130", tier: 2,
      d: "欧洲大陆的迪斯科：合成器、四拍底鼓与洗脑副歌，Boney M 把它卖到全世界。",
      ch: ["合成器", "四拍底鼓", "洗脑副歌"],
      ar: ["Boney M", "Silver Convention", "Arabesque"],
      tr: [["Daddy Cool", "Boney M", 1976]],
      p: ["disco", "europop"]
    },
    {
      id: "space-disco", n: "Space Disco", zh: "太空迪斯科", f: "disco", y: 1977, r: "德国 / 意大利", bpm: "120–130", tier: 3,
      d: "用合成器与音序器制造失重感的迪斯科，Giorgio Moroder 与 Donna Summer 的《I Feel Love》几乎发明了电子舞曲。",
      ch: ["合成器音序", "失重感", "机械律动"],
      ar: ["Giorgio Moroder", "Donna Summer", "Cerrone"],
      tr: [["I Feel Love", "Donna Summer", 1977]],
      p: ["disco", "synth-pop"]
    },

    /* ================= 摇滚与拉丁若干 ================= */
    {
      id: "blues-rock", n: "Blues Rock", zh: "布鲁斯摇滚", f: "rock", y: 1965, r: "英国 / 美国", bpm: "100–140", tier: 2,
      d: "把芝加哥布鲁斯交给电吉他、大音量与摇滚鼓组：Cream 与 Led Zeppelin 把它变成体育场的声音。",
      ch: ["电吉他", "布鲁斯音阶", "大音量"],
      ar: ["Cream", "Led Zeppelin", "The Rolling Stones"],
      tr: [["Crossroads", "Cream", 1968]],
      p: ["blues", "rock-and-roll"]
    },
    {
      id: "boogie-rock", n: "Boogie Rock", zh: "布吉摇滚", f: "rock", y: 1970, r: "美国", bpm: "100–140", tier: 3,
      d: "基于布吉低音型的硬摇滚：重复、摇摆、适合开车，ZZ Top 是德州代表。",
      ch: ["布吉低音", "重复 riff", "摇摆"],
      ar: ["ZZ Top", "Status Quo", "Canned Heat"],
      tr: [["La Grange", "ZZ Top", 1973]],
      p: ["blues-rock", "hard-rock"]
    },
    {
      id: "swamp-rock", n: "Swamp Rock", zh: "沼泽摇滚", f: "rock", y: 1967, r: "美国·路易斯安那", bpm: "90–130", tier: 3,
      d: "把路易斯安那的沼泽气息、布鲁斯与摇滚混在一起：Creedence 的《Born on the Bayou》是代表作。",
      ch: ["沼泽感", "布鲁斯", "混响"],
      ar: ["Creedence Clearwater Revival", "Tony Joe White", "Dr. John"],
      tr: [["Born on the Bayou", "Creedence Clearwater Revival", 1969]],
      p: ["rock-and-roll", "blues"]
    },
    {
      id: "tejano", n: "Tejano", zh: "特哈诺", f: "latin", y: 1940, r: "美国·德州", bpm: "100–130", tier: 3,
      d: "德州墨西哥裔的音乐：手风琴、合成器与流行旋律，Selena 把它带向全美。",
      ch: ["手风琴", "合成器", "西班牙语"],
      ar: ["Selena", "Little Joe", "La Mafia"],
      tr: [["Como La Flor", "Selena", 1992]],
      p: ["son-cubano", "country"]
    }
  );
})();
