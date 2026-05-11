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
          mode={mode}
          setMode={setMode}   // ← 要加這個
          onCopy={() => navigator.clipboard.writeText(prompt)}
        />


      </div>
    </main>
  );
}