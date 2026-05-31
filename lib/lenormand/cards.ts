import { LenormandCard } from "./types";

const DARK_IMAGE_BASE = "/lenormand/dark";
const LIGHT_IMAGE_BASE = "/lenormand/light";

const BASE_CARDS: Omit<LenormandCard, "id" | "aspect" | "image">[] = [
  // =====================
  // RIDER
  // =====================
  {
    id: "rider",
    archetype: "rider",
    aspect: "dark",
    name: "騎士",
    title: "暗影騎士",
    basic: "消息、靠近、推進",
    tags: ["試探", "惡意接近", "突發消息", "急躁", "外來能量"],
    aiFocus: ["從困境解救", "誰正在靠近", "動機與目的"],
    image: `${DARK_IMAGE_BASE}/rider.png`,
  },
  {
    id: "rider_light",
    archetype: "rider",
    aspect: "light",
    name: "騎士",
    title: "光明騎士",
    basic: "行動、訊息、推進、機會",
    tags: ["行動力", "正向消息", "快速進展", "機會", "突破"],
    aiFocus: ["機會來源", "行動方向", "事情推進速度"],
    image: `${LIGHT_IMAGE_BASE}/rider.png`,
  },

  // =====================
  // CLOVER
  // =====================
  {
    id: "clover",
    archetype: "clover",
    aspect: "dark",
    name: "幸運草",
    title: "暗影幸運草",
    basic: "機運、短暫機會、偶然",
    tags: ["短暫", "機會", "僥倖", "不穩定", "假誘惑真哄騙"],
    aiFocus: ["是機會還是哄騙", "運勢起伏", "短期發展"],
    image: `${DARK_IMAGE_BASE}/clover.png`,
  },
  {
    id: "clover_light",
    archetype: "clover",
    aspect: "light",
    name: "幸運草",
    title: "光明幸運草",
    basic: "機會、幸運、輕盈轉機",
    tags: ["機會", "幸運", "小突破", "意外收穫", "轉機"],
    aiFocus: ["機會是否成立", "短期運勢", "幸運來源"],
    image: `${LIGHT_IMAGE_BASE}/clover.png`,
  },

  // =====================
  // SHIP
  // =====================
  {
    id: "ship",
    archetype: "ship",
    aspect: "dark",
    name: "船",
    title: "暗影之船",
    basic: "遠方、移動、變化",
    tags: ["距離", "旅行", "漂泊", "探索", "離開", "航向深淵"],
    aiFocus: ["未來方向", "關係距離", "是否即將改變"],
    image: `${DARK_IMAGE_BASE}/ship.png`,
  },
  {
    id: "ship_light",
    archetype: "ship",
    aspect: "light",
    name: "船",
    title: "光明之船",
    basic: "旅行、拓展、前進、機會流動",
    tags: ["前進", "旅行", "探索", "擴張", "新方向"],
    aiFocus: ["方向選擇", "人生移動", "機會擴張"],
    image: `${LIGHT_IMAGE_BASE}/ship.png`,
  },

  // =====================
  // HOUSE
  // =====================
  {
    id: "house",
    archetype: "house",
    aspect: "dark",
    name: "房子",
    title: "暗影宅邸",
    basic: "家庭、安全、穩定",
    tags: ["保護", "封閉", "安全感", "原生家庭", "內在世界"],
    aiFocus: ["安全感來源", "家庭影響", "穩定性", "親情困擾"],
    image: `${DARK_IMAGE_BASE}/house.png`,
  },
  {
    id: "house_light",
    archetype: "house",
    aspect: "light",
    name: "房子",
    title: "光明宅邸",
    basic: "安全、根基、穩定、歸屬",
    tags: ["安全感", "穩定", "歸屬", "支持系統", "家庭和諧"],
    aiFocus: ["安全來源", "支持系統", "長期穩定性"],
    image: `${LIGHT_IMAGE_BASE}/house.png`,
  },

// =====================
// TREE
// =====================
  {
    id: "tree",
    archetype: "tree",
    aspect: "dark",
    name: "樹",
    title: "暗影之樹",
    basic: "成長、健康、累積",
    tags: ["慢性發展", "生命力", "深層問題", "穩定", "根源"],
    aiFocus: ["長期狀態", "內在能量", "健康與壓力", "固執"],
    image: `${DARK_IMAGE_BASE}/tree.png`,
  },
{
  id: "tree_light",
  archetype: "tree",
  aspect: "light",
  name: "樹",
  title: "光明之樹",
  basic: "成長、健康、累積、穩定發展",
  tags: ["穩定成長", "生命力", "療癒恢復", "長期發展", "根基強化"],
  aiFocus: ["長期狀態改善", "內在能量恢復", "健康與平衡", "成長節奏"],
  image: `${LIGHT_IMAGE_BASE}/tree.png`,
},

// =====================
// CLOUDS
// =====================
  {
    id: "clouds",
    archetype: "clouds",
    aspect: "dark",
    name: "雲",
    title: "暗影之雲",
    basic: "混亂、不明、迷惘",
    tags: ["模糊", "困惑", "情緒遮蔽", "不安", "不確定"],
    aiFocus: ["真相是否被遮蔽", "情緒混亂", "目前盲點"],
    image: `${DARK_IMAGE_BASE}/clouds.png`,
  },

{
  id: "clouds_light",
  archetype: "clouds",
  aspect: "light",
  name: "雲",
  title: "光明之雲",
  basic: "澄清、理解、情緒釐清",
  tags: ["釐清", "真相浮現", "思緒整理", "誤解解除", "情緒穩定"],
  aiFocus: ["真相逐漸明朗", "情緒混亂解除", "決策清晰度", "內在整理"],
  image: `${LIGHT_IMAGE_BASE}/clouds.png`,
},

// =====================
// SNAKE
// =====================
  {
    id: "snake",
    archetype: "snake",
    aspect: "dark",
    name: "蛇",
    title: "暗影之蛇",
    basic: "複雜、誘惑、人際糾葛",
    tags: ["試探", "心機", "誘惑", "迂迴", "嫉妒"],
    aiFocus: ["人際問題", "隱藏情緒", "真正意圖"],
    image: `${DARK_IMAGE_BASE}/snake.png`,
  },

{
  id: "snake_light",
  archetype: "snake",
  aspect: "light",
  name: "蛇",
  title: "光明之蛇",
  basic: "智慧、洞察、策略性理解",
  tags: ["洞察力", "策略思考", "人際智慧", "成熟判斷", "轉化誘惑為理解"],
  aiFocus: ["人際真相理解", "策略選擇", "情緒抽離與觀察", "關係本質"],
  image: `${LIGHT_IMAGE_BASE}/snake.png`,
},

// =====================
// COFFIN
// =====================
  {
    id: "coffin",
    archetype: "coffin",
    aspect: "dark",
    name: "棺材",
    title: "暗影棺木",
    basic: "結束、停滯、轉變",
    tags: ["終結", "低潮", "釋放", "轉化", "黎明前的黑暗最黑"],
    aiFocus: ["什麼正在結束", "需要放下什麼", "轉化契機"],
    image: `${DARK_IMAGE_BASE}/coffin.png`,
  },

{
  id: "coffin_light",
  archetype: "coffin",
  aspect: "light",
  name: "棺材",
  title: "光明之棺",
  basic: "結束、重生、轉化、釋放",
  tags: ["轉化完成", "新階段開始", "釋放舊能量", "重生", "更新"],
  aiFocus: ["結束後的新開始", "轉化完成度", "人生階段轉換", "放下與更新"],
  image: `${LIGHT_IMAGE_BASE}/coffin.png`,
},

// =====================
// BOUQUET
// =====================
  {
    id: "bouquet",
    archetype: "bouquet",
    aspect: "dark",
    name: "花束",
    title: "暗影花束",
    basic: "喜悅、吸引、禮物",
    tags: ["不良魅力", "被喜歡", "假性溫柔", "關注", "情感流動"],
    aiFocus: ["人際吸引力", "不當感情互動", "關係氛圍"],
    image: `${DARK_IMAGE_BASE}/bouquet.png`,
  },

{
  id: "bouquet_light",
  archetype: "bouquet",
  aspect: "light",
  name: "花束",
  title: "光明花束",
  basic: "喜悅、祝福、吸引力、正向關係",
  tags: ["祝福", "正向互動", "被喜歡", "情感流動", "和諧關係"],
  aiFocus: ["人際正向發展", "吸引力來源", "情感交流品質", "關係愉悅度"],
  image: `${LIGHT_IMAGE_BASE}/bouquet.png`,
},

// =====================
// SCYTHE
// =====================
  {
    id: "scythe",
    archetype: "scythe",
    aspect: "dark",
    name: "鐮刀",
    title: "暗影鐮刀",
    basic: "切斷、決定、突發",
    tags: ["果斷", "切割", "危機", "突然", "疼痛", "斷捨離"],
    aiFocus: ["是否該放手", "突發事件", "關係斷裂"],
    image: `${DARK_IMAGE_BASE}/scythe.png`,
  },

{
  id: "scythe_light",
  archetype: "scythe",
  aspect: "light",
  name: "鐮刀",
  title: "光明鐮刀",
  basic: "果斷、清理、切除負擔",
  tags: ["斷捨離", "清理", "決斷", "效率提升", "解放"],
  aiFocus: ["需要切除的事物", "決策清晰度", "人生整理", "快速轉變"],
  image: `${LIGHT_IMAGE_BASE}/scythe.png`,
},

// =====================
// WHIP
// =====================
  {
    id: "whip",
    archetype: "whip",
    aspect: "dark",
    name: "鞭子",
    title: "暗影之鞭",
    basic: "衝突、重複、壓力",
    tags: ["爭執", "焦躁", "循環", "情緒拉扯", "對抗"],
    aiFocus: ["壓力來源", "情緒衝突", "關係拉扯"],
    image: `${DARK_IMAGE_BASE}/whip.png`,
  },

{
  id: "whip_light",
  archetype: "whip",
  aspect: "light",
  name: "鞭子",
  title: "光明之鞭",
  basic: "動能、節奏、重複優化",
  tags: ["訓練", "節奏", "改善循環", "動能", "成長推進"],
  aiFocus: ["壓力轉為動力", "習慣調整", "關係磨合", "能量節奏"],
  image: `${LIGHT_IMAGE_BASE}/whip.png`,
},

// =====================
// BIRDS
// =====================
  {
    id: "birds",
    archetype: "birds",
    aspect: "dark",
    name: "鳥",
    title: "暗影雙鳥",
    basic: "對話、焦慮、訊息",
    tags: ["聊天", "不安", "流言", "快速互動", "神經緊張"],
    aiFocus: ["溝通狀態", "內在焦慮", "訊息真假"],
    image: `${DARK_IMAGE_BASE}/birds.png`,
  },

{
  id: "birds_light",
  archetype: "birds",
  aspect: "light",
  name: "鳥",
  title: "光明雙鳥",
  basic: "交流、溝通、資訊流動",
  tags: ["溝通順暢", "訊息交換", "理解提升", "對話", "社交互動"],
  aiFocus: ["溝通品質", "訊息真實性", "人際互動", "焦慮緩解"],
  image: `${LIGHT_IMAGE_BASE}/birds.png`,
},

// =====================
// CHILD
// =====================
  {
    id: "child",
    archetype: "child",
    aspect: "dark",
    name: "孩子",
    title: "暗影之子",
    basic: "開始、純真、新階段",
    tags: ["脆弱", "單純", "新生", "不成熟", "重新開始"],
    aiFocus: ["新的可能", "是否準備好", "內在狀態"],
    image: `${DARK_IMAGE_BASE}/child.png`,
  },

{
  id: "child_light",
  archetype: "child",
  aspect: "light",
  name: "孩子",
  title: "光明之子",
  basic: "新開始、純真、成長、開放性",
  tags: ["新起點", "純真能量", "學習", "可能性", "重啟"],
  aiFocus: ["新機會", "是否適合開始", "內在純真狀態", "成長潛力"],
  image: `${LIGHT_IMAGE_BASE}/child.png`,
},
// =====================
// FOX
// =====================
  {
    id: "fox",
    archetype: "fox",
    aspect: "dark",
    name: "狐狸",
    title: "暗影狐狸",
    basic: "聰明、懷疑、自保",
    tags: ["算計", "警戒", "觀察", "利益", "隱藏真心"],
    aiFocus: ["是否需要防備", "真實動機", "利益關係"],
    image: `${DARK_IMAGE_BASE}/fox.png`,
  },
  {
  id: "fox_light",
  archetype: "fox",
  aspect: "light",
  name: "狐狸",
  title: "光明狐狸",
  basic: "智慧、策略、清晰判斷",
  tags: ["策略思維", "洞察本質", "理性判斷", "界線感", "自我保護"],
  aiFocus: ["局勢分析能力", "人際真相理解", "是否需要設立界線"],
  image: `${LIGHT_IMAGE_BASE}/fox.png`,
},
// =====================
// BEAR
// =====================
  {
    id: "bear",
    archetype: "bear",
    aspect: "dark",
    name: "熊",
    title: "暗影之熊",
    basic: "力量、控制、權威",
    tags: ["掌控", "保護", "壓迫", "權力", "佔有"],
    aiFocus: ["權力關係", "情緒控制", "誰掌握主導"],
    image: `${DARK_IMAGE_BASE}/bear.png`,
  },
  {
  id: "bear_light",
  archetype: "bear",
  aspect: "light",
  name: "熊",
  title: "光明之熊",
  basic: "力量、穩定、保護與領導",
  tags: ["領導力", "穩定支撐", "成熟權威", "責任感", "資源管理"],
  aiFocus: ["權力如何正向運用", "誰在提供支撐", "是否具備領導能力"],
  image: `${LIGHT_IMAGE_BASE}/bear.png`,
},
// =====================
// STAR
// =====================
  {
    id: "star",
    archetype: "star",
    aspect: "dark",
    name: "星星",
    title: "暗影星辰",
    basic: "希望、指引、靈感",
    tags: ["夢想", "靈性", "遠景", "夜空的指引", "宇宙訊息"],
    aiFocus: ["未來方向", "內在願望", "靈性感知"],
    image: `${DARK_IMAGE_BASE}/star.png`,
  },
  {
  id: "star_light",
  archetype: "star",
  aspect: "light",
  name: "星星",
  title: "光明星辰",
  basic: "希望、方向、靈感與指引",
  tags: ["願景清晰", "靈感實現", "目標感", "精神指引", "未來規劃"],
  aiFocus: ["未來方向是否清晰", "理想是否可落地", "靈感來源"],
  image: `${LIGHT_IMAGE_BASE}/star.png`,
},
// =====================
// STORK
// =====================
  {
    id: "stork",
    archetype: "stork",
    aspect: "dark",
    name: "鸛",
    title: "暗影鸛鳥",
    basic: "改變、轉移、新循環",
    tags: ["遷移", "轉變", "蛻變", "流動", "重新開始"],
    aiFocus: ["變化契機", "是否適合轉換", "未來轉變"],
    image: `${DARK_IMAGE_BASE}/stork.png`,
  },
  {
  id: "stork_light",
  archetype: "stork",
  aspect: "light",
  name: "鸛",
  title: "光明鸛鳥",
  basic: "轉化、更新、正向改變",
  tags: ["進化", "順勢改變", "人生升級", "新階段", "流動性"],
  aiFocus: ["是否進入新階段", "變化是否正向", "轉換時機"],
  image: `${LIGHT_IMAGE_BASE}/stork.png`,
},
// =====================
// DOG
// =====================
  {
    id: "dog",
    archetype: "dog",
    aspect: "dark",
    name: "狗",
    title: "暗影守犬",
    basic: "朋友、忠誠、陪伴",
    tags: ["信任", "依賴", "支持", "守護", "忠誠"],
    aiFocus: ["誰值得信任", "關係忠誠度", "支持來源"],
    image: `${DARK_IMAGE_BASE}/dog.png`,
  },
  {
  id: "dog_light",
  archetype: "dog",
  aspect: "light",
  name: "狗",
  title: "光明守犬",
  basic: "信任、支持、忠誠關係",
  tags: ["可靠支持", "友情連結", "情感穩定", "互相信任", "陪伴力量"],
  aiFocus: ["誰是真正支持者", "關係穩定性", "信任品質"],
  image: `${LIGHT_IMAGE_BASE}/dog.png`,
},
// =====================
// TOWER
// =====================
  {
    id: "tower",
    archetype: "tower",
    aspect: "dark",
    name: "塔",
    title: "暗影高塔",
    basic: "孤立、距離、制度",
    tags: ["疏離", "高牆", "理性", "權威", "保護自己"],
    aiFocus: ["內在距離感", "是否封閉自己", "外在壓力"],
    image: `${DARK_IMAGE_BASE}/tower.png`,
  },
  {
  id: "tower_light",
  archetype: "tower",
  aspect: "light",
  name: "塔",
  title: "光明高塔",
  basic: "界線、結構、獨立與清晰秩序",
  tags: ["清晰界線", "制度結構", "成熟獨立", "理性判斷", "穩定框架"],
  aiFocus: ["是否需要建立界線", "結構是否穩定", "獨立性狀態"],
  image: `${LIGHT_IMAGE_BASE}/tower.png`,
},
// =====================
// GARDEN
// =====================

  {
    id: "garden",
    archetype: "garden",
    aspect: "dark",
    name: "花園",
    title: "暗影花園",
    basic: "社交、公眾、人際圈",
    tags: ["曝光", "社群", "聚會", "外在人設", "互動"],
    aiFocus: ["社交狀態", "外在人際", "群體影響"],
    image: `${DARK_IMAGE_BASE}/garden.png`,
  },
  {
  id: "garden_light",
  archetype: "garden",
  aspect: "light",
  name: "花園",
  title: "光明花園",
  basic: "社交、人際擴展、公開互動",
  tags: ["社群連結", "人際拓展", "曝光機會", "合作交流", "正向互動"],
  aiFocus: ["社交機會", "人脈擴張", "群體支持", "公開場合發展"],
  image: `${LIGHT_IMAGE_BASE}/garden.png`,
},
// =====================
// MOUNTAIN
// =====================
  {
    id: "mountain",
    archetype: "mountain",
    aspect: "dark",
    name: "山",
    title: "暗影之山",
    basic: "阻礙、延遲、壓力",
    tags: ["卡住", "阻擋", "困難", "等待", "壓迫感"],
    aiFocus: ["目前阻礙", "是否能突破", "壓力來源"],
    image: `${DARK_IMAGE_BASE}/mountain.png`,
  },
{
  id: "mountain_light",
  archetype: "mountain",
  aspect: "light",
  name: "山",
  title: "光明之山",
  basic: "挑戰、穩定突破、耐力成長",
  tags: ["克服阻礙", "長期努力", "穩定進展", "韌性", "突破瓶頸"],
  aiFocus: ["突破方法", "阻礙轉化", "耐力考驗", "成長節點"],
  image: `${LIGHT_IMAGE_BASE}/mountain.png`,
},
// =====================
// CROSSROADS
// =====================
  {
    id: "crossroads",
    archetype: "crossroads",
    aspect: "dark",
    name: "十字路口",
    title: "暗影岔路",
    basic: "選擇、分岔、猶豫",
    tags: ["決定", "分歧", "迷惘", "多方向", "未知"],
    aiFocus: ["該如何選擇", "目前猶豫點", "不同未來"],
    image: `${DARK_IMAGE_BASE}/crossroads.png`,
  },
{
  id: "crossroads_light",
  archetype: "crossroads",
  aspect: "light",
  name: "十字路口",
  title: "光明岔路",
  basic: "選擇、方向明朗、未來開展",
  tags: ["清晰決策", "多元機會", "方向選擇", "自由意志", "新路徑"],
  aiFocus: ["最佳選擇", "未來路線", "機會比較", "決策結果"],
  image: `${LIGHT_IMAGE_BASE}/crossroads.png`,
},
// =====================
// MICE
// =====================
  {
    id: "mice",
    archetype: "mice",
    aspect: "dark",
    name: "老鼠",
    title: "暗影鼠群",
    basic: "消耗、焦慮、流失",
    tags: ["侵蝕", "壓力", "疲憊", "失去", "細微問題"],
    aiFocus: ["正在被消耗什麼", "焦慮來源", "能量流失"],
    image: `${DARK_IMAGE_BASE}/mice.png`,
  },
  {
  id: "mice_light",
  archetype: "mice",
  aspect: "light",
  name: "老鼠",
  title: "光明之鼠",
  basic: "釋放壓力、修復消耗、回收能量",
  tags: ["能量回收", "焦慮減輕", "問題修復", "壓力釋放", "清理耗損"],
  aiFocus: ["壓力來源解除", "恢復能量", "問題縮小", "修復進展"],
  image: `${LIGHT_IMAGE_BASE}/mice.png`,
},
// =====================
// HEART
// =====================
  {
    id: "heart",
    archetype: "heart",
    aspect: "dark",
    name: "愛心",
    title: "暗影之心",
    basic: "愛、情感、真心",
    tags: ["情感", "思念", "心動", "痛苦", "真誠", "獲得能量"],
    aiFocus: ["感情真實度", "情緒需求", "關係發展", "獲得動力"],
    image: `${DARK_IMAGE_BASE}/heart.png`,
  },
  {
  id: "heart_light",
  archetype: "heart",
  aspect: "light",
  name: "愛心",
  title: "光明之心",
  basic: "愛、情感連結、真誠流動",
  tags: ["真愛", "情感流動", "關係深化", "心靈連結", "情感支持"],
  aiFocus: ["感情發展", "情緒連結", "愛的來源", "關係深化程度"],
  image: `${LIGHT_IMAGE_BASE}/heart.png`,
},
// =====================
// RING
// =====================
  {
    id: "ring",
    archetype: "ring",
    aspect: "dark",
    name: "戒指",
    title: "暗影之戒",
    basic: "承諾、契約、循環",
    tags: ["關係", "承諾", "約定", "重複", "利益連結"],
    aiFocus: ["關係穩定度", "是否進入承諾", "契約"],
    image: `${DARK_IMAGE_BASE}/ring.png`,
  },
  {
  id: "ring_light",
  archetype: "ring",
  aspect: "light",
  name: "戒指",
  title: "光明之戒",
  basic: "承諾、穩定關係、合作契約",
  tags: ["穩定承諾", "長期關係", "合作關係", "契約成立", "信任建立"],
  aiFocus: ["關係穩定度", "承諾成立", "合作進展", "長期連結"],
  image: `${LIGHT_IMAGE_BASE}/ring.png`,
},
// =====================
// BOOK
// =====================
  {
    id: "book",
    archetype: "book",
    aspect: "dark",
    name: "書",
    title: "暗影之書",
    basic: "秘密、知識、未知",
    tags: ["隱藏", "學習", "內幕", "探索", "未公開"],
    aiFocus: ["是否有隱情", "需要知道什麼", "真相層面"],
    image: `${DARK_IMAGE_BASE}/book.png`,
  },
  {
  id: "book_light",
  archetype: "book",
  aspect: "light",
  name: "書",
  title: "光明之書",
  basic: "知識、理解、真相揭露",
  tags: ["真相顯現", "學習成長", "資訊透明", "理解深化", "知識開啟"],
  aiFocus: ["真相揭露", "學習成果", "資訊取得", "理解程度"],
  image: `${LIGHT_IMAGE_BASE}/book.png`,
},
// =====================
// LETTER
// =====================
  {
    id: "letter",
    archetype: "letter",
    aspect: "dark",
    name: "信",
    title: "暗影書信",
    basic: "訊息、文字、通知",
    tags: ["聯絡", "資訊", "文件", "溝通", "壞消息"],
    aiFocus: ["是否會收到消息", "訊息內容", "溝通結果"],
    image: `${DARK_IMAGE_BASE}/letter.png`,
  },
  {
  id: "letter_light",
  archetype: "letter",
  aspect: "light",
  name: "信",
  title: "光明書信",
  basic: "好消息、訊息流通、溝通順暢",
  tags: ["好消息", "溝通成功", "資訊流動", "訊息確認", "聯繫建立"],
  aiFocus: ["訊息內容", "溝通結果", "消息來源", "資訊流動方向"],
  image: `${LIGHT_IMAGE_BASE}/letter.png`,
},
// =====================
// MAN
// =====================
  {
    id: "man",
    archetype: "man",
    aspect: "dark",
    name: "男人",
    title: "暗影男性",
    basic: "男性能量、自我、角色",
    tags: ["陽性能量", "行動", "角色投射", "現實面", "表面"],
    aiFocus: ["關鍵人物", "主導者", "行動方"],
    image: `${DARK_IMAGE_BASE}/man.png`,
  },
  {
  id: "man_light",
  archetype: "man",
  aspect: "light",
  name: "男人",
  title: "光明男性",
  basic: "行動力、自我實現、明確角色",
  tags: ["主導行動", "責任承擔", "目標導向", "現實推進", "決策力"],
  aiFocus: ["關鍵人物行動", "決策方向", "主導力量來源"],
  image: `${LIGHT_IMAGE_BASE}/man.png`,
},
// =====================
// WOMAN
// =====================
  {
    id: "woman",
    archetype: "woman",
    aspect: "dark",
    name: "女人",
    title: "暗影女性",
    basic: "女性能量、感受、角色",
    tags: ["陰性能量", "感受", "直覺", "情緒", "接收", "隱藏面"],
    aiFocus: ["情感流動", "關鍵人物", "內在感受", "協助"],
    image: `${DARK_IMAGE_BASE}/woman.png`,
  },
  {
  id: "woman_light",
  archetype: "woman",
  aspect: "light",
  name: "女人",
  title: "光明女性",
  basic: "直覺清晰、情緒穩定、內在整合",
  tags: ["情緒平衡", "直覺清晰", "接納能力", "內在穩定", "支持能量"],
  aiFocus: ["情感狀態穩定", "內在直覺指引", "關係支持性"],
  image: `${LIGHT_IMAGE_BASE}/woman.png`,
},
// =====================
// LILY
// =====================
  {
    id: "lily",
    archetype: "lily",
    aspect: "dark",
    name: "百合",
    title: "暗影百合",
    basic: "成熟、平靜、慾望",
    tags: ["成熟", "沉靜", "誘惑", "長久關係", "感官"],
    aiFocus: ["成熟度", "感情深度", "情慾能量"],
    image: `${DARK_IMAGE_BASE}/lily.png`,
  },
  {
  id: "lily_light",
  archetype: "lily",
  aspect: "light",
  name: "百合",
  title: "光明百合",
  basic: "成熟關係、平衡慾望、穩定吸引力",
  tags: ["成熟愛情", "情感穩定", "長期關係", "和諧吸引", "心智成熟"],
  aiFocus: ["關係成熟度", "情感穩定性", "長期吸引力"],
  image: `${LIGHT_IMAGE_BASE}/lily.png`,
},
// =====================
// SUN
// =====================
  {
    id: "sun",
    archetype: "sun",
    aspect: "dark",
    name: "太陽",
    title: "暗影太陽",
    basic: "成功、力量、顯現",
    tags: ["自信", "能量", "聚焦", "熱情", "顯化"],
    aiFocus: ["是否能成功", "能量狀態", "結果走向"],
    image: `${DARK_IMAGE_BASE}/sun.png`,
  },
  {
  id: "sun_light",
  archetype: "sun",
  aspect: "light",
  name: "太陽",
  title: "光明太陽",
  basic: "成功、能量顯化、正向結果",
  tags: ["成功顯化", "自信提升", "正向結果", "能量高峰", "目標達成"],
  aiFocus: ["成功機率", "結果明朗化", "能量狀態上升"],
  image: `${LIGHT_IMAGE_BASE}/sun.png`,
},
// =====================
// MOON
// =====================
  {
    id: "moon",
    archetype: "moon",
    aspect: "dark",
    name: "月亮",
    title: "暗影之月",
    basic: "情緒、潛意識、感受",
    tags: ["直覺", "情緒波動", "夢境", "內在世界", "敏感"],
    aiFocus: ["潛意識訊息", "情感狀態", "內在真相"],
    image: `${DARK_IMAGE_BASE}/moon.png`,
  },
  {
  id: "moon_light",
  archetype: "moon",
  aspect: "light",
  name: "月亮",
  title: "光明之月",
  basic: "直覺清晰、情緒理解、潛意識整合",
  tags: ["情緒理解", "直覺清晰", "內在和解", "感受穩定", "夢境訊息"],
  aiFocus: ["潛意識理解", "情緒整合", "直覺指引清晰化"],
  image: `${LIGHT_IMAGE_BASE}/moon.png`,
},
// =====================
// KEY
// =====================
  {
    id: "key",
    archetype: "key",
    aspect: "dark",
    name: "鑰匙",
    title: "暗影之鑰",
    basic: "答案、開啟、命運",
    tags: ["關鍵", "突破", "命定", "解鎖", "重要性"],
    aiFocus: ["真正關鍵", "突破口", "命運轉折"],
    image: `${DARK_IMAGE_BASE}/key.png`,
  },
  {
  id: "key_light",
  archetype: "key",
  aspect: "light",
  name: "鑰匙",
  title: "光明之鑰",
  basic: "答案揭曉、突破、命運開啟",
  tags: ["突破成功", "答案出現", "命運轉折", "關鍵開啟", "清晰結果"],
  aiFocus: ["問題解答", "突破點", "關鍵機會"],
  image: `${LIGHT_IMAGE_BASE}/key.png`,
},
// =====================
// FISH
// =====================
  {
    id: "fish",
    archetype: "fish",
    aspect: "dark",
    name: "魚",
    title: "暗影之魚",
    basic: "金錢、流動、資源",
    tags: ["財務", "自由", "流動性", "價值", "交換"],
    aiFocus: ["財運狀態", "資源流向", "價值觀"],
    image: `${DARK_IMAGE_BASE}/fish.png`,
  },
  {
  id: "fish_light",
  archetype: "fish",
  aspect: "light",
  name: "魚",
  title: "光明之魚",
  basic: "資源流動、財務成長、自由擴張",
  tags: ["財富增長", "資源流動", "機會增加", "自由度提升", "價值交換"],
  aiFocus: ["財運提升", "資源流向", "機會擴張"],
  image: `${LIGHT_IMAGE_BASE}/fish.png`,
},
// =====================
// ANCHOR
// =====================
  {
    id: "anchor",
    archetype: "anchor",
    aspect: "dark",
    name: "錨",
    title: "暗影之錨",
    basic: "穩定、執著、停留",
    tags: ["固定", "堅持", "安全感", "停滯", "長期"],
    aiFocus: ["是否該堅持", "穩定程度", "長期發展"],
    image: `${DARK_IMAGE_BASE}/anchor.png`,
  },
  {
  id: "anchor_light",
  archetype: "anchor",
  aspect: "light",
  name: "錨",
  title: "光明之錨",
  basic: "穩定成長、長期成功、持續性",
  tags: ["穩定發展", "長期成功", "可靠基礎", "持續進展", "安全感"],
  aiFocus: ["穩定程度提升", "長期成果", "持續性發展"],
  image: `${LIGHT_IMAGE_BASE}/anchor.png`,
},
// =====================
// CROSS
// =====================
  {
    id: "cross",
    archetype: "cross",
    aspect: "dark",
    name: "十字架",
    title: "暗影十字",
    basic: "命運、課題、承受",
    tags: ["宿命", "壓力", "因果", "考驗", "靈魂課題", "決策"],
    aiFocus: ["人生課題", "需要學習什麼", "命運安排", "是否該決策"],
    image: `${DARK_IMAGE_BASE}/cross.png`,
  },
  {
  id: "cross_light",
  archetype: "cross",
  aspect: "light",
  name: "十字架",
  title: "光明十字",
  basic: "命運完成、課題理解、靈性成長",
  tags: ["課題完成", "命運理解", "成長突破", "靈性覺醒", "壓力轉化"],
  aiFocus: ["人生課題完成度", "命運轉化", "學習結果"],
  image: `${LIGHT_IMAGE_BASE}/cross.png`,
},
];

export const LENORMAND_CARDS: LenormandCard[] = BASE_CARDS as LenormandCard[];