"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { drawThreeCards } from "@/lib/lenormand/drawEngine";
import { SpreadCard } from "@/lib/lenormand/types";
import { detectConnections } from "@/lib/lenormand/linkDetector";

export default function LenormandPage() {
  const [question, setQuestion] = useState("");
  const [spread, setSpread] = useState<SpreadCard[]>([]);

  const [prompt, setPrompt] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [explaining, setExplaining] = useState(false);
  const [revealing, setRevealing] = useState(false);

  const isDrawLocked = spread.length > 0 || loading;
  const isExplainLocked = !!result || explaining;

  const handleDraw = async () => {
    if (isDrawLocked) return;

    setLoading(true);
    setRevealing(true);

    const cards = drawThreeCards();
    detectConnections(cards);

    setSpread(cards);

    await new Promise((r) => setTimeout(r, 2500));

    setRevealing(false);
    setLoading(false);

    try {
      const res = await fetch("/api/lenormand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question || "",
          spread: cards,
        }),
      });

      const data = await res.json();
      setPrompt(data?.prompt ?? null);
    } catch (err) {
      console.error(err);
      setPrompt(null);
    }
  };

  const handleExplain = async () => {
    if (!prompt || isExplainLocked) return;

    setExplaining(true);

    try {
      const res = await fetch("/api/lenormand/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data?.success) {
        setResult(data.result);
      } else {
        alert("目前無 token 或 API 無法使用，請複製 AI 神諭手動解讀");
      }
    } catch (err) {
      console.error(err);
      alert("目前無 token 或 API 無法使用，請複製 AI 神諭手動解讀");
    } finally {
      setExplaining(false);
    }
  };

  const copyPrompt = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    alert("已複製指令");
  };

  const reset = () => {
    setSpread([]);
    setPrompt(null);
    setResult(null);
    setQuestion("");
    setLoading(false);
    setExplaining(false);
    setRevealing(false);
  };

  return (
    <main className="relative min-h-screen text-white px-6 py-14 overflow-hidden">

      {/* 🌫️ 霧感背景（無圖片版） */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(184,170,140,0.06),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-light tracking-wide">
            雷諾曼占卜
          </h1>

          <div className="mt-4 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 text-sm text-[#b8b0a3] leading-relaxed">
            請讓心緒沉澱，呼吸放緩，專注於你的問題。
            抽牌後，能量會逐步展開。
          </div>

          <p className="mt-4 text-[#a8a091]">
            三張牌：問題 · 現況 · 未來
          </p>
        </div>

        {/* INPUT */}
        <div className="flex justify-center mb-6">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="輸入你的問題"
            className="w-full max-w-2xl rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm outline-none backdrop-blur-md"
          />
        </div>

        {/* DRAW BUTTON（霧感化） */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleDraw}
            disabled={isDrawLocked}
            className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 backdrop-blur-md hover:bg-white/[0.06] disabled:opacity-40 transition"
          >
            {loading ? "抽牌中..." : "開始占卜"}
          </button>
        </div>

        {/* CARDS */}
        {spread.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {spread.map((item) => (
              <div
                key={item.position}
                className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5"
              >
                <Image
                  src={item.card.image}
                  alt={item.card.name}
                  width={400}
                  height={700}
                  className={`
                    w-full rounded-2xl transition-all duration-[2500ms]
                    ${revealing ? "blur-xl scale-105 opacity-70" : "blur-0 scale-100 opacity-100"}
                  `}
                />

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-[#9f9687]">{item.role}</p>
                  <h2 className="text-xl">{item.card.title}</h2>
                  <p className="text-[#c8c0b2] text-sm">{item.card.basic}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI ACTIONS */}
        {prompt && (
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

            <button
              onClick={handleExplain}
              disabled={isExplainLocked}
              className="rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md px-6 py-2 hover:bg-white/[0.06] disabled:opacity-40 transition"
            >
              {explaining ? "解讀中..." : result ? "已解讀" : "詳細解說"}
            </button>

            <button
              onClick={copyPrompt}
              className="rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md px-6 py-2 hover:bg-white/[0.06] transition"
            >
              複製指令貼至AI
            </button>
          </div>
        )}

        {/* RESULT */}
        {result && (
          <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
            <h3 className="mb-3 text-lg">神諭解讀</h3>
            <p className="whitespace-pre-line text-[#d6d0c6]">
              {result}
            </p>
          </div>
        )}

        {/* ACTIONS（霧感統一） */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <button
            onClick={reset}
            className="rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md px-6 py-2 hover:bg-white/[0.06] transition"
          >
            重新開始
          </button>

          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md px-6 py-2 text-center hover:bg-white/[0.06] transition"
          >
            返回首頁
          </Link>

        </div>

      </div>
    </main>
  );
}