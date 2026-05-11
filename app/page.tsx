export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111] text-[#f5f1ea]">

      {/* 背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* 主內容 */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20">

        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <img
            src="/logo.png"
            alt="What the Fortune"
            className="w-24 md:w-32 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          />

          <p className="mt-5 text-sm tracking-[0.35em] text-[#c6b89a]">
            WHAT THE FORTUNE
          </p>
        </div>

        {/* 標題 */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-wide">
            聽聽未來怎麼說？
          </h1>

          <p className="mt-6 text-[#b3ab9d] text-lg md:text-xl leading-relaxed">
            東方命理 × AI 神諭系統
          </p>

          <p className="mt-4 text-sm text-[#8f8779]">
            輸入數字 → 起卦 → 生成 AI 解讀與圖像提示
          </p>
        </div>

        {/* 卡片區 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 w-full max-w-5xl">

          {/* 小六壬 */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 flex flex-col">
            <div className="text-4xl mb-5">🌙</div>

            <h2 className="text-2xl font-light mb-4">小六壬占問</h2>

            <p className="text-[#a8a091]">
              適合感情、工作、人際與近期事件。
            </p>

            <a href="/liuren" className="mt-10 h-12 flex items-center justify-center rounded-full border border-[#5a5246]">
              開始占問
            </a>
          </div>

          {/* 易數流卦 */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 flex flex-col">
            <div className="text-4xl mb-5">🔢</div>

            <h2 className="text-2xl font-light mb-4">易數流卦</h2>

            <p className="text-[#a8a091]">
              數字起卦 × AI 解讀生成系統。
            </p>

            <a href="/yishu" className="mt-10 h-12 flex items-center justify-center rounded-full border border-[#5a5246]">
              開始起卦
            </a>
          </div>

        </div>

        {/* Coming Soon */}
        <div className="mt-28 w-full max-w-5xl text-center text-[#7d7668]">
          COMING SOON
        </div>

      </div>
    </main>
  );
}