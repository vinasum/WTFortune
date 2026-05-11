import { HEXAGRAM_64 } from "./hexagram64";

export function getHexagramMeta(index: number) {
  return HEXAGRAM_64[index % HEXAGRAM_64.length];
}