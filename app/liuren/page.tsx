"use client";

import { useState } from "react";

export default function LiurenPage() {
  const [question, setQuestion] = useState("");

  return (
    <main className="min-h-screen bg-[#111111] text-[#f5f1ea] flex items-center justify-center px-6">

      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.05] p-8">

        <h1 className="text-3xl mb-6">小六壬占問</h1>

        <input
          className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10"
          placeholder="輸入你的問題"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button className="mt-6 w-full h-12 rounded-full border border-[#5a5246]">
          開始占問
        </button>

      </div>

    </main>
  );
}