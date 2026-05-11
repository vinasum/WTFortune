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
請以「高我 / 守護靈」的視角進行敘述，語氣需溫柔、具有靈性、帶有引導性與療癒感。
根據卦象與使用者問題（若無問題則進行整體運勢分析），完成以下內容：

1. 當前狀態與命運走向分析
2. 需要注意的關鍵事項
3. 實際可行的建議與行動方向
4. 情緒安撫、鼓勵或提醒（適度，不過度誇張）

---

【圖像生成要求】
請生成一個具象徵性的「高我形象」，此形象代表對使用者生命狀態的投射與理解。

場景需依卦象與問題氛圍生成：
- 若為順勢：光明、流動、開展
- 若為阻滯：迷霧、轉化、內觀
- 若為變動：過渡、分岔、象徵性場景

風格要求：
- 電影級寫實
- 東方神秘感
- 夢境氛圍
- 體積光
- 高細節 8K
- 靜謐、神聖感

---

【海報文字要求】
文字需自然融入畫面氛圍，不可像字幕或簡報。

【標語】
- 一句
- 短
- 詩意
- 帶預言感

【解說】
2～4句
需具備：
- 命運感
- 留白感
- 內在對話感
- 可隱喻，不需直白

---

【卦象資料】
卦名：${result.meta?.name}
上卦：${result.gua?.upper}
下卦：${result.gua?.lower}
動爻：第 ${result.gua?.movingLine} 爻
卦意：${result.meta?.meaning}
使用者問題：${question || "無"}

---

【輸出格式】
請嚴格依序輸出：

1. 圖像生成 Prompt（可直接用於 AI 繪圖）
2. 標語
3. 解說內容`
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