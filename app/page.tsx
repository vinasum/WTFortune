export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111] text-[#f5f1ea]">
      
      {/* 背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* 主內容 */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20">
        
        {/* Logo 區 */}
        <div className="mb-10 flex flex-col items-center">
          
          <img
            src="/logo.png"
            alt="What the Fortune"
            className="
              w-24 md:w-32
              drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]
            "
          />

          <p className="mt-5 text-sm tracking-[0.35em] text-[#c6b89a]">
            WHAT THE FORTUNE
          </p>
        </div>

        {/* 標題區 */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-wide">
            聽聽未來怎麼說？
          </h1>

          <p className="mt-6 text-[#b3ab9d] text-lg md:text-xl leading-relaxed">
            東方命理 × AI 神諭系統
          </p>
        </div>

        {/* 功能卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 w-full max-w-5xl">
          
          {/* 小六壬 */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              p-8
              shadow-[0_0_40px_rgba(255,255,255,0.04)]
              hover:border-[#b8aa8c]/60
              hover:bg-white/[0.07]
              hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]
              transition-all duration-300
              flex flex-col
            "
          >
            {/* 內側光 */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent" />

            <div className="relative z-10 text-4xl mb-5">
              🌙
            </div>

            <h2 className="relative z-10 text-2xl font-light mb-4 tracking-wide">
              小六壬占問
            </h2>

            <p className="relative z-10 text-[#a8a091] leading-relaxed">
              適合感情、工作、人際與近期事件快速觀測。
            </p>

            <a
              href="/liuren"
              className="
  relative z-10
  mt-10
  flex items-center justify-center
  h-12
  rounded-full

  border border-[#5a5246]
  bg-white/[0.04]

  text-[#f5f1ea]

  shadow-[0_0_20px_rgba(255,255,255,0.04)]

  hover:border-[#cdbb94]
  hover:bg-white/[0.08]
  hover:shadow-[0_0_30px_rgba(205,187,148,0.12)]

  transition-all duration-300
"
            >
              開始占問
            </a>
          </div>

          {/* 數字起卦 */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              p-8
              shadow-[0_0_40px_rgba(255,255,255,0.04)]
              hover:border-[#b8aa8c]/60
              hover:bg-white/[0.07]
              hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]
              transition-all duration-300
              flex flex-col
            "
          >
            {/* 內側光 */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent" />

            <div className="relative z-10 text-4xl mb-5">
              🔢
            </div>

            <h2 className="relative z-10 text-2xl font-light mb-4 tracking-wide">
              數字起卦
            </h2>

            <p className="relative z-10 text-[#a8a091] leading-relaxed">
              使用易經數字占卜，展開複雜事件解析。
            </p>

            <a
              href="/numbers"
              className="
  relative z-10
  mt-10
  flex items-center justify-center
  h-12
  rounded-full

  border border-[#5a5246]
  bg-white/[0.04]

  text-[#f5f1ea]

  shadow-[0_0_20px_rgba(255,255,255,0.04)]

  hover:border-[#cdbb94]
  hover:bg-white/[0.08]
  hover:shadow-[0_0_30px_rgba(205,187,148,0.12)]

  transition-all duration-300
"
            >
              開始起卦
            </a>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-28 w-full max-w-5xl">
          
          <p className="text-sm tracking-[0.35em] text-[#7d7668] mb-10 text-center">
            COMING SOON
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div
              className="
                rounded-3xl
                border border-white/5
                bg-white/[0.03]
                backdrop-blur-lg
                p-8
                text-center
                opacity-60
              "
            >
              <div className="text-3xl">🪷</div>

              <p className="mt-5 text-lg text-[#c8c0b2]">
                八字命盤
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border border-white/5
                bg-white/[0.03]
                backdrop-blur-lg
                p-8
                text-center
                opacity-60
              "
            >
              <div className="text-3xl">🌌</div>

              <p className="mt-5 text-lg text-[#c8c0b2]">
                紫微斗數
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border border-white/5
                bg-white/[0.03]
                backdrop-blur-lg
                p-8
                text-center
                opacity-60
              "
            >
              <div className="text-3xl">🕯️</div>

              <p className="mt-5 text-lg text-[#c8c0b2]">
                合盤分析
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}