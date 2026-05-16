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
  const [loading, setLoading] = useState(false);

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
    setLoading(false);
  }

  function resetAll() {
    setN1("");
    setN2("");
    setQuestion("");
    setResult(null);
  }

  // ✅ AI Prompt
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
2. 需要注意的關鍵課題
3. 實際可行的行動方向
4. 情緒安撫與靈性提醒

---

【卦象資訊】

- 卦名：${result.meta?.name}
- 上卦：${result.gua?.upper}
- 下卦：${result.gua?.lower}
- 動爻：第 ${result.gua?.movingLine} 爻
- 卦意：${result.meta?.meaning}

---

【使用者問題】

${question || "無"}

---

【輸出格式】

1. 圖像生成 Prompt
2. 標語
3. 解說內容
`
    : "";

  return (
    <main className="relative min-h-screen overflow-hidden text-[#f5f1ea]">

      {/* 背景圖 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounds/yishu-bg.png')",
        }}
      />

      {/* 內容 */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-10">

            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-[#b8aa8c] hover:text-[#f5f1ea] transition"
            >
              ← 返回首頁
            </button>

            {result && (
              <button
                onClick={resetAll}
                className="text-sm tracking-[0.15em] text-[#7d7668] hover:text-[#f5f1ea] transition"
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

            {/* 提示文字 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-5 py-4 text-left">
              <p className="text-sm leading-relaxed text-[#c8b8a6]/80">
                卦象並非預言，而是當下心念與天地流轉的映照。<br />
                請真誠接受答案和指引，毋須執著重覆測算。
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
            <div className="mt-6">
              <YishuResult
                result={result}
                aiPrompt={aiPrompt}
              />
            </div>
          )}

        </div>
      </div>
    </main>
  );
}