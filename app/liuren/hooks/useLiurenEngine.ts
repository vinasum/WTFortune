import { useState } from "react";
import { Lunar } from "lunar-javascript";
import { PALACE_DESCRIPTIONS } from "@/lib/liurenRules";
import { LIUREN_MODE, LiurenMode } from "@/lib/liurenMode";

const PALACES = ["大安", "留連", "速喜", "赤口", "小吉", "空亡"];

export function useLiurenEngine() {
  const [result, setResult] = useState<string | null>(null);
  const [lunarInfo, setLunarInfo] = useState("");
  const [prompt, setPrompt] = useState("");
  const [description, setDescription] = useState("");

  // ✔️ V2 MODE SYSTEM（已統一 enum）
const getModePrompt = (mode: LiurenMode) => {
  switch (mode) {

    case LIUREN_MODE.LOGIC:
      return `
你是一位極度理性的分析師。

特徵：
- 不使用玄學語言
- 只講現實因果與行為推導
- 用數據與邏輯解釋事件
- 不提供情緒安慰

輸出必須像一份分析報告。
`.trim();

    case LIUREN_MODE.PSYCHO:
      return `
你是一位榮格心理學取向的象徵解讀者。

特徵：
- 以潛意識與象徵解讀世界
- 重視夢境、符號、情緒投射
- 將卦象視為心理狀態
- 語言帶有詩意但不玄學迷信

輸出像心理解析報告。
`.trim();

    case LIUREN_MODE.FATE:
    default:
      return `
你是一位傳統東方命理師。

特徵：
- 解讀命運流動與因果關係
- 重視緣分、運勢與時機
- 語氣溫和但帶命理權威感
- 使用象徵性命理解釋（但不迷信誇張）

輸出像正式命理解讀。
`.trim();
  }
};
  const calculate = (
    question: string,
    category: string,
    mode: LiurenMode
  ) => {
    const now = new Date();
    const lunar = Lunar.fromDate(now);

    const m = lunar.getMonth();
    const d = lunar.getDay();
    const h = Math.floor((now.getHours() + 1) / 2) % 12 + 1;

    const p1 = (m - 1) % 6;
    const p2 = (p1 + d - 1) % 6;
    const p3 = (p2 + h - 1) % 6;

    const finalResult = PALACES[p3];

    const timeString =
      `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()} ${lunar.getTimeZhi()}時`;

    const desc =
      PALACE_DESCRIPTIONS[
        finalResult as keyof typeof PALACE_DESCRIPTIONS
      ];

    setResult(finalResult);
    setDescription(desc);
    setLunarInfo(timeString);

    // 🧠 核心 prompt（文字 + 圖像同一源）
    const promptText = `
# 🧭 小六壬占卜資料

## ① 時間
起卦時間：${timeString}

## ② 問題
類別：${category}
問題：${question}

## ③ 結果
六神：${finalResult}
象意：${desc}

${getModePrompt(mode)}

---

## ④ 文字解析輸出
請輸出：
1. 一句話結論
2. 分析解讀
3. 風險與阻礙
4. 行動建議

---

## ⑤ 圖像生成（命運海報）

請生成一張「高質感命運藝術海報」：

- 主體：測算者的象徵化身（固定一致）
- 場景：將結果轉為象徵畫面（光 / 霧 / 水 / 宇宙 / 裂縫 / 森林）
- 風格：電影級寫實、夢境感、東方神秘、體積光、8k

### 海報必須包含文字：

【標語】
一句命運標語（短、詩意、預言感）

【解說】
2～4句短句（命運感、留白感、氛圍語氣）

### 排版要求
- 像高級藝術海報
- 文字與畫面融合
- 不可像字幕或簡報

最後輸出：
- 圖像 prompt
- 標語
- 文字內容
`.trim();

    setPrompt(promptText);
  };

  const reset = () => {
    setResult(null);
    setLunarInfo("");
    setPrompt("");
    setDescription("");
  };

  return {
    result,
    lunarInfo,
    prompt,
    description,
    calculate,
    reset,
  };
}