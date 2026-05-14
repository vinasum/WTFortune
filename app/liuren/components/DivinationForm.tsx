type Props = {
  question: string;
  setQuestion: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  onSubmit: () => void;
};

export default function DivinationForm({
  question,
  setQuestion,
  category,
  setCategory,
  onSubmit
}: Props) {
  return (
    <div className="
      relative
      space-y-8
      text-left

      bg-[#181818]/30
      backdrop-blur-md

      p-8
      rounded-3xl
      border border-[#2a2a2a]

      transition-all duration-300

      shadow-[0_0_35px_rgba(0,0,0,0.35)]

      hover:border-[#b8aa8c]/70
      hover:shadow-[0_0_55px_rgba(184,170,140,0.12)]
    ">

      {/* ✨ 霧面光層 */}
      <div className="
        absolute inset-0
        rounded-3xl
        pointer-events-none
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%)]
      " />

      {/* 🧠 輸入問題 */}
      <div className="relative">
        <label className="block text-sm tracking-[0.2em] text-[#b8aa8c] mb-4">
          輸入問題
        </label>

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="
            w-full
            rounded-2xl

            bg-[#111]/70
            backdrop-blur-sm

            border border-[#2a2a2a]
            p-4
            text-[#f5f1ea]

            focus:outline-none
            focus:border-[#b8aa8c]/30
            transition
          "
        />
      </div>

      {/* 🧭 分類 */}
      <div className="relative">
        <label className="block text-sm tracking-[0.2em] text-[#b8aa8c] mb-4">
          分類項目
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            w-full
            rounded-2xl

            bg-[#111]/70
            backdrop-blur-sm

            border border-[#2a2a2a]
            p-4
            text-[#f5f1ea]

            focus:outline-none
            focus:border-[#b8aa8c]/30
            transition
          "
        >
          <option>感情</option>
          <option>工作</option>
          <option>財運</option>
          <option>人際</option>
          <option>其他</option>
        </select>
      </div>

      {/* 🚀 執行測算 */}
      <button
        onClick={onSubmit}
        className="
          relative
          w-full
          rounded-full

          bg-[#181818]/30
          backdrop-blur-sm

          border border-[#3a2f1f]
          py-4
          text-[#f5f1ea]

          hover:border-[#b8aa8c]/70
          hover:bg-[#1f1f1f]/70

          transition
        "
      >
        執行測算
      </button>
    </div>
  );
}