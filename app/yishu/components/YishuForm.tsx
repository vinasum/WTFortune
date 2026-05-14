type Props = {
  n1: string;
  setN1: (v: string) => void;

  n2: string;
  setN2: (v: string) => void;

  question: string;
  setQuestion: (v: string) => void;

  loading: boolean;

  onSubmit: () => void;
};

export default function YishuForm({
  n1,
  setN1,
  n2,
  setN2,
  question,
  setQuestion,
  loading,
  onSubmit,
}: Props) {
  return (
    <div
      className="
        relative
        space-y-4
        text-left

        bg-white/[0.03]
        backdrop-blur-md

        p-8
        rounded-3xl
        border border-white/10

        transition-all duration-300

        shadow-[0_0_35px_rgba(0,0,0,0.25)]
      "
    >
      {/* 數字1 */}
      <input
        className="
          w-full
          px-4
          py-3
          rounded-2xl

          bg-white/[0.03]
          border border-white/10

          backdrop-blur-sm
        "
        placeholder="數字1"
        value={n1}
        onChange={(e) => {
          const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
          setN1(onlyNumbers);
        }}
        onBlur={() => setN1(n1.replace(/[^0-9]/g, ""))}
      />

      {/* 數字2 */}
      <input
        className="
          w-full
          px-4
          py-3
          rounded-2xl

          bg-white/[0.03]
          border border-white/10

          backdrop-blur-sm
        "
        placeholder="數字2"
        value={n2}
        onChange={(e) => {
          const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
          setN2(onlyNumbers);
        }}
        onBlur={() => setN2(n2.replace(/[^0-9]/g, ""))}
      />

      {/* 問題 */}
      <input
        className="
          w-full
          px-4
          py-3
          rounded-2xl

          bg-white/[0.03]
          border border-white/10

          backdrop-blur-sm
        "
        placeholder="問題（可選）"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* 按鈕 */}
      <button
        onClick={onSubmit}
        disabled={loading}
        className="
          w-full
          h-12
          rounded-full

          border border-[#5a5246]
          bg-white/[0.03]

          text-[#f5f1ea]

          hover:border-[#cdbb94]
          hover:bg-white/[0.06]

          transition-all duration-300
        "
      >
        {loading ? "測算中..." : "執行測算"}
      </button>
    </div>
  );
}