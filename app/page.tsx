export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#f5f1ea]">
      {/* 背景光暈 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 py-20">
        
        {/* 標題區 */}
        <div className="text-center max-w-2xl">
          <p className="text-sm tracking-[0.3em] text-[#b8aa8c] mb-4">
            EASTERN AI ORACLE
          </p>

          <h1 className="text-5xl md:text-6xl font-light leading-tight">
            此時此刻，
            <br />
            想聽聽未來怎麼說嗎？
          </h1>

          <p className="mt-6 text-[#9f9788] text-lg leading-relaxed">
            東方命理 × AI 神諭系統
          </p>
        </div>

        {/* 功能卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 w-full max-w-5xl">
          
          {/* 小六壬 */}
          <div className="rounded-3xl border border-[#2a2a2a] bg-[#181818] p-8 hover:border-[#b8aa8c] transition duration-300 flex flex-col">
            <div className="text-3xl mb-4">🌙</div>

            <h2 className="text-2xl font-light mb-3">
              小六壬占問
            </h2>

            <p className="text-[#9f9788] leading-relaxed">
              適合感情、工作、人際與近期事件觀測。
            </p>

            <a
  href="/liuren"
  className="flex items-center justify-center mt-auto h-12 rounded-full border border-[#3a3a3a] hover:border-[#b8aa8c] transition"
>
  開始占問
</a>
          </div>

          {/* 數字起卦 */}
          <div className="rounded-3xl border border-[#2a2a2a] bg-[#181818] p-8 hover:border-[#b8aa8c] transition duration-300 flex flex-col">
            <div className="text-3xl mb-4">🔢</div>

            <h2 className="text-2xl font-light mb-3">
              數字起卦
            </h2>

            <p className="text-[#9f9788] leading-relaxed">
              請憑直覺輸入三個數字，展開卦象解析。
            </p>

            <a
  href="/numbers"
  className="flex items-center justify-center mt-auto h-12 rounded-full border border-[#3a3a3a] hover:border-[#b8aa8c] transition"
>
  開始起卦
</a>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-24 w-full max-w-5xl">
          <p className="text-sm tracking-[0.3em] text-[#7d7668] mb-8 text-center">
            COMING SOON
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50">
            
            <div className="rounded-3xl border border-[#242424] bg-[#141414] p-6 text-center">
              🪷
              <p className="mt-4 text-lg">八字命盤</p>
            </div>

            <div className="rounded-3xl border border-[#242424] bg-[#141414] p-6 text-center">
              🌌
              <p className="mt-4 text-lg">紫微斗數</p>
            </div>

            <div className="rounded-3xl border border-[#242424] bg-[#141414] p-6 text-center">
              🕯️
              <p className="mt-4 text-lg">合盤分析</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}