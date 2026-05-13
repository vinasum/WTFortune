"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function YishuPage() {
  const router = useRouter();

  const [startTime] = useState(Date.now());

  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [question, setQuestion] = useState("");

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleDivination() {
    setLoading(true);

    const clickTime = Date.now();
    const dwellTime = clickTime - startTime;

    const context = {
      clickTime,
      dwellTime,
      inputLength: question.length
    };

    const res = await fetch("/api/yishu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        n1: Number(n1),
        n2: Number(n2),
        context
      })
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  function resetAll() {
    setN1("");
    setN2("");
    setQuestion("");
    setResult(null);
  }

  // ✅ 已替換成你新版本 prompt（高我 + 圖像 + 海報輸出）
  const aiPrompt = result
    ? `請根據以下卦象與使用者問題進行整體解讀與創作：

【解讀任務】

請以「高我 / 守護靈 / 守護神」三位一體的視角進行敘述。

語氣需：
- 溫柔但不討好
- 靈性但不浮誇
- 有引導性與洞察感
- 帶有命運觀察者的氣息
- 療癒但克制，不雞湯化

根據卦象與使用者問題進行整體詮釋；
若無使用者問題，則改為分析使用者當前整體能量、運勢與生命狀態。

請完成以下內容：

1. 當前狀態與命運走向分析
- 使用象徵、趨勢、能量流動角度描述
- 避免過度直白預測
- 強調「正在形成中的命運方向」

2. 需要注意的關鍵課題
- 可包含內在狀態、人際、情緒、選擇、阻力
- 使用帶有洞察感的方式表達

3. 實際可行的行動方向
- 提供能落地的建議
- 不可像命令
- 不可僵硬說教

4. 情緒安撫與靈性提醒
- 適度溫柔
- 不過度誇張
- 不灌雞湯
- 像守護神低聲提醒般自然

---

【圖像生成任務｜守護神神諭模式】

請生成一張：
「守護神正在向使用者傳遞卦象與命運指引」的神諭感場景。

畫面主角不是使用者本人，
而是 AI 根據使用者氣質、能量與命運感所映射出的「守護神形象」。

守護神需具備：
- 理解使用者命運的感覺
- 神聖感
- 靜謐感
- 命運觀察者氣息
- 彷彿早已知曉一切

可為：
- 東方神祇
- 靈性存在
- 半人半神
- 象徵性人格
- 夢境般守護者

---

【命運傳遞方式】

守護神正在向使用者傳遞指引，
但不可像對話、聊天或簡報。

請以以下方式呈現：

- 光
- 能量流
- 符文
- 卦象結構
- 靈性文字
- 神諭投影
- 命運軌跡
- 天體排列
- 發光符印

整體感覺需像：
「命運正在被揭示」
而不是「有人正在解說」。

---

【卦象資訊神諭化呈現】

請將以下卦象資訊自然融入畫面中：

- 卦名：${result.meta?.name}
- 上卦：${result.gua?.upper}
- 下卦：${result.gua?.lower}
- 動爻：第 ${result.gua?.movingLine} 爻
- 卦意：${result.meta?.meaning}

呈現方式可包含：

- 古代卷軸
- 漂浮金色文字
- 東方書法
- 玉石刻印
- 神殿銘文
- 光之符文
- 天空投影
- 靈性幾何
- 能量法陣

允許文字直接出現在畫面中，
但必須具備：

- 神秘感
- 儀式感
- 電影感
- 美術設計感

不可像：

- UI 面板
- PowerPoint
- 報表
- 字幕
- 現代資訊框

---

【場景生成規則】

請依卦象狀態決定場景氛圍：

若為順勢：
- 光明
- 開展
- 流動
- 天空裂開
- 神殿甦醒
- 能量擴張

若為阻滯：
- 霧氣
- 靜止空間
- 結界感
- 內觀感
- 壓抑但神聖

若為變動：
- 分岔道路
- 時空裂縫
- 門扉
- 過渡空間
- 命運轉換感

---

【視覺風格】

- 電影級寫實
- 東方神秘學
- 神話感
- 夢境感
- volumetric lighting
- 體積光
- 高細節
- 8K
- 神聖感
- 靜謐感
- 命運感
- 儀式感

整體畫面需具備：
「可以當成命運神諭海報收藏」的質感。

---

【禁止事項】

絕對不可出現：

- 使用者問題文字
- 聊天對話框
- UI 面板
- 簡報感
- 現代資訊框
- 過度科幻 UI
- 可愛卡通風
- 搞笑感
- 廉價 AI 圖感

---

【海報文字要求】

文字需自然融入畫面氛圍，
不可像字幕或海報標題。

---

【標語】

請生成一句：

- 短
- 詩意
- 有命運預示感
- 像神諭降下的一句話

---

【解說】

請生成 2～4 句解說。

需具備：

- 命運感
- 留白感
- 內在對話感
- 靈性觀察感
- 可隱喻
- 不直白說教

像是：
守護神對靈魂的低聲提醒。

---

【使用者問題】

${question || "無"}

---

【輸出格式】

請嚴格依序輸出：

1. 圖像生成 Prompt（可直接用於 AI 繪圖）
2. 標語
3. 解說內容

`
    : "";

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f1ea] flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-2xl relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.04)]">

        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent" />

        <div className="relative z-10">

          <div className="flex justify-between items-center mb-6 text-sm text-[#bdb6aa]">
            <button onClick={() => router.push("/")}>
              ← 返回首頁
            </button>

            <button onClick={resetAll}>
              重新開始
            </button>
          </div>

          <h1 className="text-3xl font-light tracking-wide mb-8">
            易數流卦
          </h1>

          {/* 提示文字 */}
<div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="text-sm leading-relaxed text-[#c8b8a6]/80">
    卦象並非預言，而是當下心念與天地流轉的映照。<br />
    當念頭成形之際，卦亦隨之成立。請保持專注與真誠，避免執念反覆測算。
  </p>
</div>

          <div className="space-y-3 mb-6">

            <input
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10"
              placeholder="數字1"
              value={n1}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                setN1(onlyNumbers);
              }}
              onBlur={() => setN1((prev) => prev.replace(/[^0-9]/g, ""))}
            />

            <input
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10"
              placeholder="數字2"
              value={n2}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                setN2(onlyNumbers);
              }}
              onBlur={() => setN2((prev) => prev.replace(/[^0-9]/g, ""))}
            />

            <input
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10"
              placeholder="問題（可選）"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

          </div>

          <button
            onClick={handleDivination}
            disabled={loading}
            className="w-full h-12 rounded-full border border-[#5a5246] bg-white/[0.04] text-[#f5f1ea] hover:border-[#cdbb94] hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(205,187,148,0.12)] transition-all duration-300"
          >
            {loading ? "測算中..." : "執行測算"}
          </button>

          {result && (
            <div className="mt-8">

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                <div className="text-lg mb-4">卦象結果</div>

                <div className="flex justify-between mb-6">

                  <div className="text-center">
                    <div className="text-sm text-[#a8a091]">上卦</div>
                    <div className="text-2xl">{result.gua?.upper}</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs text-[#7f776b]">卦名</div>
                    <div className="text-xl">{result.meta?.name}</div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm text-[#a8a091]">下卦</div>
                    <div className="text-2xl">{result.gua?.lower}</div>
                  </div>

                </div>

                <div className="text-sm mb-2">
                  動爻：第 {result.gua?.movingLine} 爻
                </div>

                <div className="text-sm mb-4 text-[#bfb7a8]">
                  {result.meta?.meaning}
                </div>

                <div className="pt-4 border-t border-white/10">

                  <div className="text-sm mb-3">
                    取得卦象
                  </div>

                  <button
                    onClick={() => navigator.clipboard.writeText(aiPrompt)}
                    className="w-full h-11 rounded-full border border-[#5a5246] bg-white/[0.04] hover:border-[#cdbb94] hover:bg-white/[0.08] transition"
                  >
                    複製你的AI神諭貼到ChatGPT
                  </button>

                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}