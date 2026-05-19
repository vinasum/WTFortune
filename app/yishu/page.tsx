"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import YishuForm from "./components/YishuForm";
import YishuResult from "./components/YishuResult";

export default function YishuPage() {
  const router = useRouter();

  const [startTime] = useState(Date.now());

  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [question, setQuestion] = useState("");

  const [result, setResult] = useState<any>(null);

  // AI state
  const [prompt, setPrompt] = useState<string | null>(null);
  const [aiResult, setAiResult] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [explaining, setExplaining] = useState(false);

  async function handleDivination() {
    setLoading(true);

    const clickTime = Date.now();
    const dwellTime = clickTime - startTime;

    const context = {
      clickTime,
      dwellTime,
      inputLength: question.length,
    };

    const res = await fetch("/api/yishu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        n1: Number(n1),
        n2: Number(n2),
        context,
      }),
    });

    const data = await res.json();

    setResult(data);

    // 👉 保留 prompt（之後送 AI API 用）
    const aiPrompt = `
請根據以下卦象與使用者問題進行整體解讀與創作：

【解讀任務】
請以「高我 / 守護靈 / 守護神」三位一體的視角進行敘述。

語氣需：
- 溫柔但不討好
- 靈性但不浮誇
- 有引導性與洞察感
- 帶有命運觀察者的氣息
- 療癒但克制，不雞湯化

請完成以下內容：

1. 當前狀態與命運走向分析
2. 需要注意的關鍵課題
3. 實際可行的行動方向
4. 情緒安撫與靈性提醒

---

【卦象資訊】

- 卦名：${data.meta?.name}
- 上卦：${data.gua?.upper}
- 下卦：${data.gua?.lower}
- 動爻：第 ${data.gua?.movingLine} 爻
- 卦意：${data.meta?.meaning}

---

【使用者問題】

${question || "無"}
`;

    setPrompt(aiPrompt);

    setLoading(false);
  }

  // ✅ 單一 AI API（已統一架構）
  const handleExplain = async () => {
    if (!prompt || explaining || aiResult) return;

    setExplaining(true);

    try {
      const res = await fetch("/api/divination/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "yishu",
          prompt,
          payload: {
            name: result?.meta?.name,
            upper: result?.gua?.upper,
            lower: result?.gua?.lower,
            movingLine: result?.gua?.movingLine,
            meaning: result?.meta?.meaning,
          },
        }),
      });

      const data = await res.json();

      if (data?.success) {
        setAiResult(data.result);
      } else {
        alert("目前 AI 服務無法使用，請改用複製指令");
      }
    } catch (err) {
      console.error(err);
      alert("目前 AI 服務無法使用，請改用複製指令");
    } finally {
      setExplaining(false);
    }
  };

  // copy prompt
  const copyPrompt = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    alert("已複製指令");
  };

  function resetAll() {
    setN1("");
    setN2("");
    setQuestion("");
    setResult(null);
    setPrompt(null);
    setAiResult(null);
    setLoading(false);
    setExplaining(false);
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-[#f5f1ea]">

      {/* 背景圖 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounds/yishu-bg.png')",
        }}
      />

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-10">

            <button
              onClick={() => router.push("/")}
              className="text-sm tracking-[0.2em] text-[#b8aa8c] hover:text-[#f5f1ea]"
            >
              ← 返回首頁
            </button>

            {result && (
              <button
                onClick={resetAll}
                className="text-sm text-[#7d7668] hover:text-[#f5f1ea]"
              >
                ↻ 重新開始
              </button>
            )}

          </div>

          {/* 標題 */}
          <div className="text-center mb-12">

            <h1 className="text-4xl font-light mb-6">
              易數流卦
            </h1>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left">
              <p className="text-sm leading-relaxed text-[#c8b8a6]/80">
                卦象並非預言，而是當下心念與天地流轉的映照。
              </p>
            </div>

          </div>

          {/* Form */}
          <div className="mb-10">
            <YishuForm
              n1={n1}
              setN1={setN1}
              n2={n2}
              setN2={setN2}
              question={question}
              setQuestion={setQuestion}
              loading={loading}
              onSubmit={handleDivination}
            />
          </div>

          {/* Result */}
          {result && (
            <YishuResult result={result} />
          )}

          {/* AI ACTIONS */}
          {prompt && (
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

              <button
                onClick={handleExplain}
                disabled={explaining || !!aiResult}
                className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-2 hover:bg-white/[0.06] disabled:opacity-40"
              >
                {explaining ? "解讀中..." : aiResult ? "已解讀" : "詳細解說"}
              </button>

              <button
                onClick={copyPrompt}
                className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-2 hover:bg-white/[0.06]"
              >
                複製指令貼至AI
              </button>

            </div>
          )}

          {/* AI RESULT */}
          {aiResult && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-3">神諭解讀</h3>
              <p className="whitespace-pre-line text-[#d6d0c6]">
                {aiResult}
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}