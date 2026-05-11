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
      mt-12
      rounded-3xl
      border border-[#b8aa8c]/20
      bg-[#161616]
      p-10
      flex flex-col items-center
      text-[#e8e2d6]
      shadow-[0_0_60px_rgba(0,0,0,0.6)]
    ">

      {/* 🌙 時間 */}
      <p className="text-sm tracking-[0.3em] text-[#b8aa8c] mb-2">
        {lunarInfo}
      </p>

      {/* 🎴 六神 */}
      <h2 className="text-6xl font-light mb-6 tracking-widest text-[#f5f1ea]">
        {result}
      </h2>

      <div className="h-[1px] w-12 bg-[#b8aa8c]/50 mb-6" />

      {/* 📜 解讀 */}
      <p className="text-lg text-center mb-8 leading-relaxed opacity-90">
        {description}
      </p>

      {/* 🧭 解析模式（正確位置：在 copy 前） */}
      <div className="mb-8 w-full">

        <label className="block text-xs tracking-[0.2em] text-[#7d7668] mb-4 text-center">
          解析模式
        </label>

        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={() => setMode("因果說明")}
            className={`p-3 rounded-2xl border text-sm transition ${
              mode === "因果說明"
                ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
            }`}
          >
            🪷 因果
          </button>

          <button
            onClick={() => setMode("理性斷事")}
            className={`p-3 rounded-2xl border text-sm transition ${
              mode === "理性斷事"
                ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
            }`}
          >
            🔥 理性
          </button>

          <button
            onClick={() => setMode("潛意識")}
            className={`p-3 rounded-2xl border text-sm transition ${
              mode === "潛意識"
                ? "bg-[#f5f1ea] text-[#111] border-[#f5f1ea]"
                : "bg-[#111] text-[#f5f1ea] border-[#2a2a2a]"
            }`}
          >
            🌌 潛意識
          </button>

        </div>
      </div>

      {/* 🧿 複製 */}
      <button
        onClick={onCopy}
        className="
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