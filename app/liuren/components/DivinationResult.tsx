import { LiurenMode } from "@/lib/liurenMode";

type Props = {
  result: string | null;
  lunarInfo: string;
  description: string;

  // 保留型別避免其他地方噴錯
  mode: LiurenMode;
  setMode: (v: LiurenMode) => void;
  onCopy: () => void;
};

export default function DivinationResult({
  result,
  lunarInfo,
  description,
}: Props) {
  if (!result) return null;

  return (
    <div
      className="
        relative mt-12 rounded-3xl overflow-hidden
        border border-[#2a2a2a]
        bg-[#161616]
        p-10 flex flex-col items-center
        text-[#e8e2d6]
        transition-all duration-300
        shadow-[0_0_40px_rgba(0,0,0,0.45)]
        hover:border-[#b8aa8c]/70
        hover:shadow-[0_0_65px_rgba(184,170,140,0.12)]
      "
    >

      {/* 光層 */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]
        "
      />

      {/* 時間 */}
      <p className="relative text-sm tracking-[0.3em] text-[#b8aa8c] mb-2">
        {lunarInfo}
      </p>

      {/* 結果 */}
      <h2 className="relative text-6xl font-light mb-6 tracking-widest text-[#f5f1ea]">
        {result}
      </h2>

      <div className="h-[1px] w-12 bg-[#b8aa8c]/50 mb-6 relative" />

      {/* 解讀 */}
      <p className="relative text-lg text-center leading-relaxed opacity-90">
        {description}
      </p>

    </div>
  );
}