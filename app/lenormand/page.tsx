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
  const [result, setResult] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [explaining, setExplaining] = useState(false);
  const [revealing, setRevealing] = useState(false);

  const isDrawLocked = spread.length > 0 || loading;

  // 🔒 一次解讀完成就鎖定
  const isExplainLocked = !!result || explaining;

  // =========================
  // 抽牌 + prompt
  // =========================
  const handleDraw = async () => {
    if (isDrawLocked) return;

    setLoading(true);
    setRevealing(true);

    const cards = drawThreeCards();
    detectConnections(cards);

    setSpread(cards);

    await new Promise((r) => setTimeout(r, 2500));

    setLoading(false);
    setRevealing(false);

    const aiPrompt = `
你是一位專業雷諾曼占卜師。

請解讀三張牌的敘事與能量流動。

【牌陣】
1（過去/問題）：${cards[0]?.card?.title}
2（現在）：${cards[1]?.card?.title}
3（未來）：${cards[2]?.card?.title}

【使用者問題】
${question || "無"}

【解讀要求】
請包含：
1. 三牌故事線（敘事式解讀）
2. 能量轉折點
3. 情感 / 事件關係
4. 最終趨勢與建議

語氣需直覺性、象徵性、帶命運流動感。
`;

    setPrompt(aiPrompt);
  };

  // =========================
  // STREAMING AI
  // =========================
  const handleExplain = async () => {
    if (!prompt || isExplainLocked) return;

    setExplaining(true);
    setResult("");

    try {
      const res = await fetch("/api/divination/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "lenormand",
          prompt,
          payload: {
            spread,
            question,
          },
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error("stream failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;

        const chunk = decoder.decode(value || new Uint8Array(), {
          stream: true,
        });

        if (chunk) {
          setResult((prev) => (prev || "") + chunk);
        }
      }
    } catch (err) {
      console.error(err);
      alert("目前 AI 無法使用，請改用複製指令");
    } finally {
      setExplaining(false);
    }
  };

  // =========================
  // copy prompt
  // =========================
  const copyPrompt = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    alert("已複製指令");
  };

  // =========================
  // reset
  // =========================
  const reset = () => {
    setSpread([]);
    setPrompt(null);
    setResult("");
    setQuestion("");
    setLoading(false);
    setExplaining(false);
    setRevealing(false);
  };

  return (
    <main className="relative min-h-screen text-white px-6 py-14 overflow-hidden">

      {/* 背景 */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(184,170,140,0.06),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* TOP NAV */}
        <div className="flex items-center justify-between mb-6">

          <Link
            href="/"
            className="text-sm tracking-[0.2em] text-[#b8aa8c] hover:text-[#f5f1ea]"
          >
            ← 返回首頁
          </Link>

          {(spread.length > 0 || prompt || result) ? (
            <button
              onClick={reset}
              className="text-sm text-[#7d7668] hover:text-[#f5f1ea]"
            >
              ↻ 重新開始
            </button>
          ) : (
            <div className="w-[90px]" />
          )}

        </div>

        {/* HEADER */}
        <div className="text-center mb-6">

          <h1 className="text-4xl font-light tracking-wide">
            雷諾曼占卜
          </h1>

          <div className="mt-4 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[#b8b0a3]">
            請讓心緒沉澱，專注於你的問題。
          </div>

          <p className="mt-4 text-[#a8a091]">
            三張牌：過去 · 現在 · 未來
          </p>

        </div>

        {/* INPUT */}
        <div className="flex justify-center mb-6">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="輸入你的問題"
            className="w-full max-w-2xl rounded-full border border-white/10 bg-white/[0.03] px-6 py-3"
          />
        </div>

        {/* DRAW */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleDraw}
            disabled={isDrawLocked}
            className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 hover:bg-white/[0.06] disabled:opacity-40"
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
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <Image
                  src={item.card.image}
                  alt={item.card.name}
                  width={400}
                  height={700}
                  className={`w-full rounded-2xl transition-all duration-[2500ms] ${
                    revealing ? "blur-xl scale-105 opacity-70" : ""
                  }`}
                />

                <div className="mt-4">
                  <p className="text-sm text-[#9f9687]">{item.role}</p>
                  <h2 className="text-xl">{item.card.title}</h2>
                  <p className="text-sm text-[#c8c0b2]">
                    {item.card.basic}
                  </p>
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
              className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-2 hover:bg-white/[0.06] disabled:opacity-40"
            >
              {explaining
                ? "解讀中..."
                : result
                ? "已解讀"
                : "詳細解說"}
            </button>

            <button
              onClick={copyPrompt}
              className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-2 hover:bg-white/[0.06]"
            >
              複製指令貼至AI
            </button>

          </div>
        )}

        {/* RESULT */}
        {result && (
          <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="mb-3 text-lg">
              神諭解讀
            </h3>

            <p className="whitespace-pre-line text-[#d6d0c6] leading-8">
              {result}
            </p>
          </div>
        )}

        {/* BOTTOM ACTIONS */}
        <div className="flex justify-center gap-4">

          <button
            onClick={reset}
            className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-2"
          >
            重新開始
          </button>

          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-2"
          >
            返回首頁
          </Link>

        </div>

      </div>
    </main>
  );
}