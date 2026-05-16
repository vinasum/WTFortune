import {
  CardConnection,
  SpreadCard,
} from "./types";

export function detectConnections(
  spread: SpreadCard[]
): CardConnection[] {
  const map: Record<string, number[]> = {};

  spread.forEach((item, index) => {
    const key = item.card.archetype;

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(index);
  });

  const connections: CardConnection[] = [];

  Object.entries(map).forEach(([archetype, positions]) => {
    if (positions.length >= 2) {
      connections.push({
        type: "evolution",
        archetype,
        positions,
      });
    }
  });

  return connections;
}