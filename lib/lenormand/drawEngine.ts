import { LENORMAND_CARDS } from "./cards";
import { SpreadCard } from "./types";

const ROLES = ["問題與過去", "現在的狀態", "未來和結果"] as const;

export function drawThreeCards(): SpreadCard[] {
  const shuffled = [...LENORMAND_CARDS]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return shuffled.map((card, index) => ({
    position: index,
    role: ROLES[index],
    card,
  }));
}