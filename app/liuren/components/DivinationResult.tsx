type Props = {
  result: string | null;
  lunarInfo: string;
  description: string;
  mode: string;
  setMode: (v: string) => void;
  onCopy: () => void;
};

export default function DivinationResult({
  result,
  lunarInfo,
  description,
  mode,
  setMode,
  onCopy
}: Props) {
  if (!result) return null;

  return (
    <div className="
      relative
      mt-12
      rounded-3xl
      border border-[#2a2a2a]
      bg-[#161616]
      p-10
      flex flex-col items-center
      text-[#e8e2d6]

      transition-all duration-300

      shadow-[0_0_40px_rgba(0,0,0,0.45)]

      hover:border-[#b8aa8c]/70
      hover:shadow-[0_0_65px_rgba(184,170,140,0.12)]
    ">

      {/* ✨ 霧面光層（首頁一致關鍵） */}
      <div className="
        absolute inset-0
        rounded-3xl
        pointer-events-none
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]
      " />

      {/* 🌙 時間 */}
      <p className="relative text-sm tracking-[0.3em] text-[#b8aa8c] mb-2">
        {lunarInfo}
      </p>

      {/* 🎴 六神 */}
      <h2 className="relative text-6xl font-light mb-6 tracking-widest text-[#f5f1ea]">
        {result}
      </h2>

      <div className="h-[1px] w-12 bg-[#b8aa8c]/50 mb-6 relative" />

      {/* 📜 解讀 */}
      <p className="relative text-lg text-center mb-8 leading-relaxed opacity-90">
        {description}
      </p>

      {/* 🧭 解析模式 */}
      <div className="mb-8 w-full relative">

        <label className="block text-xs tracking-[0.2em] text-[#7d7668] mb-4 text-center">
          解析模式
        </label>

        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={() => setMode("因果說明")}
            className={`
              p-3 rounded-2xl border text-sm transition
              ${mode === "因果說明"
                ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
              }
            `}
          >
            🪷 因果
          </button>

          <button
            onClick={() => setMode("理性斷事")}
            className={`
              p-3 rounded-2xl border text-sm transition
              ${mode === "理性斷事"
                ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
              }
            `}
          >
            🔥 理性
          </button>

          <button
            onClick={() => setMode("潛意識")}
            className={`
              p-3 rounded-2xl border text-sm transition
              ${mode === "潛意識"
                ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
              }
            `}
          >
            🌌 潛意識
          </button>

        </div>
      </div>

      {/* 🧿 複製 */}
      <button
        onClick={onCopy}
        className="
          relative
          w-full
          py-4
          rounded-full
          border border-[#b8aa8c]/40
          bg-[#f5f1ea]
          text-[#111]
          font-medium

          hover:bg-white
          transition
        "
      >
        複製你的AI神諭貼到 ChatGPT
      </button>

    </div>
  );
}