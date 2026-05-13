"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "What the Fortune",
          text: "我發現一個很特別的神諭占卜網站",
          url: window.location.origin,
        });
      } else {
        await navigator.clipboard.writeText(window.location.origin);
        alert("網站網址已複製");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111] text-[#f5f1ea]">

      {/* background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

      {/* share */}
      <div className="absolute right-5 top-5 z-30">
        <button
          onClick={handleShare}
          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
        >
          分享
        </button>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-24">

        {/* HERO block */}
        <div className="flex flex-col items-center pt-6">

          <Image
            src="/logo.png"
            alt="What the Fortune"
            width={200}
            height={200}
            priority
            fetchPriority="high"
            className="w-44 h-auto"
          />

          {/* ✔ BRAND → headline spacing（已加大） */}
          <p className="mt-8 text-sm tracking-[0.35em] text-[#c6b89a]">
            WHAT THE FORTUNE
          </p>
        </div>

        {/* ✔ MIDDLE SPACER（關鍵：改成呼吸段） */}
        <div className="h-10 md:h-14" />

        {/* headline */}
        <div className="max-w-2xl text-center mt-0">
          <h1 className="text-4xl font-light md:text-6xl">
            聽聽未來怎麼說？
          </h1>

          <p className="mt-6 text-lg text-[#b3ab9d] md:text-xl">
            東西方命理快占 × AI 神諭圖卡系統
          </p>
        </div>

        {/* spacer（卡片距離） */}
        <div className="h-6 md:h-10" />

        {/* ================= CARDS ================= */}
        <section className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 opacity-90">

          {/* card 1 */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8">

            <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

            <div className="relative z-10 mb-5 flex justify-center h-[110px] items-center">
              <Image
                src="/icons/divination/liuren.png"
                alt="小六壬"
                width={150}
                height={150}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-24 h-24"
              />
            </div>

            <h2 className="relative z-10 mb-3 text-2xl text-center md:text-left">
              小六壬占卜
            </h2>

            <p className="relative z-10 text-[#a8a091] text-center md:text-left">
              感情 / 工作 / 人際快速觀測
            </p>

            <Link
              href="/liuren"
              className="relative z-10 mt-8 flex h-12 items-center justify-center rounded-full border border-[#5a5246] bg-white/[0.04]"
            >
              開始占卜
            </Link>
          </div>

          {/* card 2 */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8">

            <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

            <div className="relative z-10 mb-5 flex justify-center h-[110px] items-center">
              <Image
                src="/icons/divination/yishu.png"
                alt="易數流卦"
                width={150}
                height={150}
                loading="lazy"
                fetchPriority="low"
                className="w-24 h-24"
              />
            </div>

            <h2 className="relative z-10 mb-3 text-2xl text-center md:text-left">
              易數流卦
            </h2>

            <p className="relative z-10 text-[#a8a091] text-center md:text-left">
              數字起卦 × 複雜狀態卦象解讀
            </p>

            <Link
              href="/yishu"
              className="relative z-10 mt-8 flex h-12 items-center justify-center rounded-full border border-[#5a5246] bg-white/[0.04]"
            >
              開始起卦
            </Link>
          </div>
        </section>

        {/* ================= COMING SOON ================= */}
        <div className="mt-32 w-full max-w-5xl">
          <p className="mb-10 text-center text-sm tracking-[0.35em] text-[#7d7668]">
            COMING SOON
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 opacity-70">
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 text-center">
              🪷 八字命盤
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 text-center">
              🌌 紫微斗數
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 text-center">
              🕯️ 合盤分析
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}