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
    <div className="space-y-8 text-left bg-[#181818] p-8 rounded-3xl border border-[#2a2a2a]">

      <div>
        <label className="block text-sm tracking-[0.2em] text-[#b8aa8c] mb-4">
          輸入問題
        </label>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full rounded-2xl bg-[#111] border border-[#2a2a2a] p-4"
        />
      </div>

      <div>
        <label className="block text-sm tracking-[0.2em] text-[#b8aa8c] mb-4">
          分類項目
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-2xl bg-[#111] border border-[#2a2a2a] p-4"
        >
          <option>感情</option>
          <option>工作</option>
          <option>財運</option>
          <option>人際</option>
          <option>其他</option>
        </select>
      </div>

      <button
        onClick={onSubmit}
        className="w-full rounded-full border border-[#3a3a3a] py-4"
      >
        執行測算
      </button>
    </div>
  );
}