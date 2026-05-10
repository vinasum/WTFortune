type Props = {
  result: string | null;
  lunarInfo: string;
  description: string;
  onCopy: () => void;
};

import { PALACE_DESCRIPTIONS } from "@/lib/liurenRules";

export default function DivinationResult({
  result,
  lunarInfo,
  description,
  onCopy
}: Props) {
  if (!result) return null;

  return (
    <div className="mt-12 rounded-3xl border border-[#b8aa8c]/30 bg-[#1a1a1a] p-10 flex flex-col items-center text-[#e8e2d6] shadow-2xl">

      {/* 🌙 時間/命盤資訊 */}
      <p className="text-sm tracking-[0.3em] text-[#b8aa8c] mb-2">
        {lunarInfo}
      </p>

      {/* 🎴 結果主體 */}
      <h2 className="text-6xl font-light mb-6 tracking-widest text-[#f5f1ea]">
        {result}
      </h2>

      <div className="h-[1px] w-12 bg-[#b8aa8c]/50 mb-6" />

      {/* 📜 占卜解讀 */}
      <p className="text-lg text-center mb-10 leading-relaxed opacity-90">
        {description}
      </p>

      {/* 🧿 AI神諭複製 */}
      <button
        onClick={onCopy}
        className="w-full py-4 rounded-full bg-[#f5f1ea] text-[#111] font-medium hover:bg-white transition"
      >
        複製你的AI神諭貼到 ChatGPT
      </button>

    </div>
  );
}