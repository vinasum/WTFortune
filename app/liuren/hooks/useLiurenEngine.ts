import { useState } from "react";
import { Lunar } from "lunar-javascript";
import { PALACE_DESCRIPTIONS } from "@/lib/liurenRules";

const PALACES = ["大安", "留連", "速喜", "赤口", "小吉", "空亡"];

export function useLiurenEngine() {
  const [result, setResult] = useState<string | null>(null);
  const [lunarInfo, setLunarInfo] = useState("");
  const [prompt, setPrompt] = useState("");
  const [description, setDescription] = useState("");
  const [imagePrompt, setImagePrompt] = useState<string>("");

  const getModePrompt = (mode: string) => {
    const m = (mode || "").trim();

    if (m === "理性斷事") {
      return `
## 🔥 理性斷事模式
請用冷靜、直接、現實分析方式解讀，不要修飾語氣。
      `.trim();
    }

    if (m === "潛意識") {
      return `
## 🌌 潛意識模式
請從心理、象徵、潛意識與隱喻角度進行解讀。
      `.trim();
    }

    return `
## 🪷 因果說明模式
請用溫柔、因果推導方式解讀，偏情感與人生脈絡。
    `.trim();
  };

  const calculate = (question: string, category: string, mode: string) => {
    const now = new Date();
    const lunar = Lunar.fromDate(now);

    const m = lunar.getMonth();
    const d = lunar.getDay();
    const h = Math.floor((now.getHours() + 1) / 2) % 12 + 1;

    const p1 = (m - 1) % 6;
    const p2 = (p1 + d - 1) % 6;
    const p3 = (p2 + h - 1) % 6;

    const finalResult = PALACES[p3];

    const timeString = `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()} ${lunar.getTimeZhi()}時`;

    const desc =
      PALACE_DESCRIPTIONS[finalResult as keyof typeof PALACE_DESCRIPTIONS];

    setResult(finalResult);
    setDescription(desc);
    setLunarInfo(timeString);

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

---

${getModePrompt(mode)}

---

## ④ 輸出要求（文字解讀）
請輸出：
1. 🎯 一句話結論
2. 🧩 分析解讀
3. ⚠️ 風險與阻礙
4. 🚀 行動建議

---

## ⑤ 圖像生成（重要）

請根據以上占卜解析，生成一張高質感「命運圖文海報」。

### 圖像要求
- 主角為測算者的象徵化身，具有一致靈魂感
- 畫面需將占卜結果轉化為象徵性場景（光、霧、水、宇宙、裂縫、森林、建築等）
- 使用電影級寫實風格、夢境感、東方神秘氛圍、體積光、高細節、8k

### 文字要求
畫面中需自然融合文字排版，像高級藝術海報。

請包含：

1. 一句命運標語
- 簡短
- 詩意
- 有預言感

2. 2～4句短解說
- 對應此次占卜結果
- 帶有命運感與情緒氛圍
- 文字需有設計感與留白感

### 排版要求
- 文字需與畫面融合
- 不可像字幕或簡報
- 整體需像精品神秘藝術海報

最後請輸出：
1. 圖像生成 prompt
2. 標語
3. 圖中文字內容
`.trim();

    setPrompt(promptText);

    // ✔ 同一段即可用於複製（不做二次轉換）
    setImagePrompt(promptText);
  };

  return {
    result,
    lunarInfo,
    prompt,
    description,
    imagePrompt,
    calculate
  };
}