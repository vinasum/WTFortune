"use client";

import { useState } from "react";
import Link from "next/link";

import DivinationForm from "./components/DivinationForm";
import DivinationResult from "./components/DivinationResult";
import { useLiurenEngine } from "./hooks/useLiurenEngine";
import { LIUREN_MODE, LiurenMode } from "@/lib/liurenMode";

export default function LiurenPage() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("感情");

  // ✔️ v2：統一 enum
  const [mode, setMode] = useState<LiurenMode>(LIUREN_MODE.FATE);

  const {
    result,
    lunarInfo,
    calculate,
    description,
    prompt,
    reset,
  } = useLiurenEngine();

  const handle = () => {
    if (!question.trim()) {
      alert("請輸入問題");
      return;
    }

    calculate(question, category, mode);
  };

  // ✔️ Step 4：reset 也要用 enum（已修正）
  const handleReset = () => {
    setQuestion("");
    setMode(LIUREN_MODE.FATE);
    reset();
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111] text-[#f5f1ea]">

      {/* 背景圖（已處理過，不再加任何效果） */}
      <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/backgrounds/liuren-bg.png')",
        }}
      />

      {/* 內容 */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-xl mx-auto">

          {/* 返回首頁 */}
          <div className="flex items-center justify-between mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-[#b8aa8c] hover:text-[#f5f1ea] transition"
            >
              ← 返回首頁
            </Link>

            {result && (
              <button
                onClick={handleReset}
                className="text-sm tracking-[0.15em] text-[#7d7668] hover:text-[#f5f1ea] transition"
              >
                ↻ 重新開始
              </button>
            )}
          </div>

          {/* 標題 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light mb-6">
              小六壬測算
            </h1>

            {/* 提示文字 */}
            <div className="rounded-2xl border border-[#2a2a2a] bg-[#171717]/30 backdrop-blur-sm px-5 py-4 text-left">
              <p className="text-sm leading-relaxed text-[#c8b8a6]/80">
                小六壬以「起心動念」之時起卦。<br />
                同一時辰內結果通常一致，建議避免短時間內重複占問相同問題。
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="mb-10">
            <DivinationForm
              question={question}
              setQuestion={setQuestion}
              category={category}
              setCategory={setCategory}
              onSubmit={handle}
            />
          </div>

          {/* Result */}
          {result && (
            <div className="mt-6">
              <DivinationResult
                result={result}
                lunarInfo={lunarInfo}
                description={description}
                mode={mode}
                setMode={setMode}
                onCopy={() => navigator.clipboard.writeText(prompt)}
              />
            </div>
          )}

        </div>
      </div>
    </main>
  );
}