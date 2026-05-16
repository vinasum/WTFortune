import Image from "next/image";

type Props = {
  card: any;
};

export default function LenormandCard({ card }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-4">
      <Image
        src={card.image}
        alt={card.title}
        width={300}
        height={500}
        className="rounded-2xl"
      />

      <div className="mt-4">
        <h2 className="text-xl">
          {card.title}
        </h2>

        <p className="mt-2 text-sm text-white/60">
          {card.basic}
        </p>
      </div>
    </div>
  );
}