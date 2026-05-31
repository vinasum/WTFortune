import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-[#f5f1ea] px-6 py-16 flex flex-col items-center">
      
      {/* Banner */}
      <section className="w-full max-w-4xl mb-12">
        <div className="rounded-2xl border border-[#c8b68a33] bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-lg">
          
          <h1 className="text-2xl md:text-3xl font-semibold text-[#f5e6c8] mb-6 text-center">
            探索命運，而非被命運束縛
          </h1>

          <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#d0d0d0]">
            <p>
              山、醫、命、相、卜，自古即為華人文化中認識人生的五種途徑。
            </p>

            <p>
              本站所提供的小六壬、易數流、雷諾曼等占卜服務，屬於「卜」的範疇。
              占卜著重於觀察當下能量與象、事件趨勢與潛在發展，
              以多重視角協助您做選擇。
            </p>

            <p>
              論命則屬於「命」的範疇，透過出生資訊解析人生結構與長期軌跡，
              用以理解人生課題與生命節奏。
            </p>

            <p>
              無論占卜或論命，皆非命運的答案，而是理解自身與世界的工具。
            </p>
          </div>

          <div className="mt-6 text-center text-lg text-[#9a9a9a]">
            <p>『命運從來都不是被預言，</p>
            <p>而是在每一次選擇中逐漸形成。』</p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 紫微斗數 */}
        <div className="rounded-2xl border border-[#c8b68a33] bg-white/5 backdrop-blur-md p-6 hover:translate-y-[-4px] transition-all duration-300 shadow-lg">
          
          <div className="text-2xl mb-3">🔮</div>

          <h2 className="text-lg font-semibold text-[#f5e6c8] mb-2">
            紫微斗數一對一論命
          </h2>

          <p className="text-sm text-[#d0d0d0] leading-relaxed mb-6">
            透過紫微斗數命盤解析人生格局、事業留學方向、感情發展、財富趨勢與流年運勢，及剖腹擇命等專業服務。
          </p>

          <Link
            href="https://vina-wtf.setmore.com/"
            target="_blank"
            className="inline-block text-sm px-4 py-2 rounded-lg border border-[#c8b68a55] hover:border-[#f5e6c8] text-[#f5e6c8] transition"
          >
            立即預約 →
          </Link>
        </div>

        {/* YouTube */}
        <div className="rounded-2xl border border-[#c8b68a33] bg-white/5 backdrop-blur-md p-6 hover:translate-y-[-4px] transition-all duration-300 shadow-lg">
          
          <div className="text-2xl mb-3">📺</div>

          <h2 className="text-lg font-semibold text-[#f5e6c8] mb-2">
            See The Voice
          </h2>

          <p className="text-sm text-[#d0d0d0] leading-relaxed mb-6">
            分享與佛經、道教經典、咒文及東方靈性文化相關的原創音樂創作。
            透過現代編曲與數位音樂製作，將傳統智慧轉化為當代語境下的情感共鳴與療癒體驗。
          </p>

          <Link
            href="https://www.youtube.com/@seethevoice-01"
            target="_blank"
            className="inline-block text-sm px-4 py-2 rounded-lg border border-[#c8b68a55] hover:border-[#f5e6c8] text-[#f5e6c8] transition"
          >
            前往YT頻道 →
          </Link>
        </div>
      </section>
    </main>
  );
}