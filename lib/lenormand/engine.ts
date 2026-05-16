import { LENORMAND_CARDS } from "./cards";

export function drawLenormandCards(count = 3) {
  const shuffled = [...LENORMAND_CARDS]
    .sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count);
}