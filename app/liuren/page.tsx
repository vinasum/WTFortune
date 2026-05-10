"use client";

import { useState } from "react";
import DivinationForm from "./components/DivinationForm";
import DivinationResult from "./components/DivinationResult";
import { useLiurenEngine } from "./hooks/useLiurenEngine";

export default function LiurenPage() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("感情");
  const [mode, setMode] = useState("因果說明");

  const {
    result,
    lunarInfo,
    calculate,
    description,
    prompt
  } = useLiurenEngine();

  // 🧠 唯一占卜入口
  const handle = () => {
    if (!question.trim()) return alert("請輸入問題");
    calculate(question, category, mode);
  };

  return (
    <main className="min-h-screen bg-[#111] text-[#f5f1ea] py-20 px-6">

      <div className="max-w-xl mx-auto text-center">

        <h1 className="text-4xl font-light mb-12">
          小六壬測算
        </h1>

        {/* 輸入區 */}
        <DivinationForm
          question={question}
          setQuestion={setQuestion}
          category={category}
          setCategory={setCategory}
          onSubmit={handle}
        />

        {/* 🔮 結果區 */}
        <DivinationResult
          result={result}
          lunarInfo={lunarInfo}
          description={description}
          onCopy={() => navigator.clipboard.writeText(prompt)}
        />

        {/* 🧭 解析模式（只影響 prompt，不重新計算） */}
        {result && (
          <div className="mt-10 text-left">

            <label className="block text-sm tracking-[0.2em] text-[#b8aa8c] mb-4">
              解析模式
            </label>

            <div className="grid grid-cols-3 gap-3">

              <button
                onClick={() => setMode("因果說明")}
                className={`p-4 rounded-2xl border transition text-sm tracking-wide ${
                  mode === "因果說明"
                    ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                    : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
                }`}
              >
                🪷 因果說明
              </button>

              <button
                onClick={() => setMode("理性斷事")}
                className={`p-4 rounded-2xl border transition text-sm tracking-wide ${
                  mode === "理性斷事"
                    ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                    : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
                }`}
              >
                🔥 理性斷事
              </button>

              <button
                onClick={() => setMode("潛意識")}
                className={`p-4 rounded-2xl border transition text-sm tracking-wide ${
                  mode === "潛意識"
                    ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                    : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
                }`}
              >
                🌌 潛意識
              </button>

            </div>

          </div>
        )}

      </div>
    </main>
  );
}