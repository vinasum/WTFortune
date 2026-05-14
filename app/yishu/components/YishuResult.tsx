type Props = {
  result: any;
  aiPrompt: string;
};

export default function YishuResult({
  result,
  aiPrompt,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl

        border border-white/10
        bg-white/[0.03]

        backdrop-blur-md
        p-6
      "
    >

      <div className="text-lg mb-4">
        卦象結果
      </div>

      <div className="flex justify-between mb-6">

        <div className="text-center">
          <div className="text-sm text-[#a8a091]">
            上卦
          </div>

          <div className="text-2xl">
            {result.gua?.upper}
          </div>
        </div>

        <div className="text-center">
          <div className="text-xs text-[#7f776b]">
            卦名
          </div>

          <div className="text-xl">
            {result.meta?.name}
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-[#a8a091]">
            下卦
          </div>

          <div className="text-2xl">
            {result.gua?.lower}
          </div>
        </div>

      </div>

      <div className="text-sm mb-2">
        動爻：第 {result.gua?.movingLine} 爻
      </div>

      <div className="text-sm mb-4 text-[#bfb7a8]">
        {result.meta?.meaning}
      </div>

      <div className="pt-4 border-t border-white/10">

        <div className="text-sm mb-3">
          取得卦象
        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(aiPrompt)
          }
          className="
            w-full
            h-11
            rounded-full

            border border-[#5a5246]
            bg-white/[0.03]

            hover:border-[#cdbb94]
            hover:bg-white/[0.06]

            transition
          "
        >
          複製你的AI神諭貼到ChatGPT
        </button>

      </div>

    </div>
  );
}