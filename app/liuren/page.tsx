"use client";

import { useState } from "react";
import Link from "next/link";
import DivinationForm from "./components/DivinationForm";
import DivinationResult from "./components/DivinationResult";
import { useLiurenEngine } from "./hooks/useLiurenEngine";
import Image from "next/image";

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

  const handle = () => {
    if (!question.trim()) return alert("請輸入問題");
    calculate(question, category, mode);
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#111111]
        text-[#f5f1ea]
        py-20 px-6
      "
    >
      <div className="max-w-xl mx-auto">

        {/* 🔙 返回首頁 */}
        <div className="mb-10">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              tracking-[0.2em]
              text-[#b8aa8c]
              hover:text-[#f5f1ea]
              transition
            "
          >
            ← 返回首頁
          </Link>
        </div>

{/* 🪷 標題 */}
<div className="text-center mb-12">

  {/* 毛筆字 Logo */}
  <div className="flex justify-center mb-6">
    <Image
      src="/liuren-logo.png"
      alt="小六壬"
      width={220}
      height={120}
      className="object-contain opacity-95"
      priority
    />
  </div>

  {/* 副標 */}
  <h1 className="text-4xl font-light">
    小六壬測算
  </h1>

</div>
        {/* 🧿 Form */}
        <div className="mb-10">
          <DivinationForm
            question={question}
            setQuestion={setQuestion}
            category={category}
            setCategory={setCategory}
            onSubmit={handle}
          />
        </div>

        {/* 🔮 Result */}
        {result && (
          <div
            className="
              rounded-3xl
              border border-[#2a2a2a]
              hover:border-[#b8aa8c]
              transition
            "
          >
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
    </main>
  );
}