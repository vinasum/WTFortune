import { 
  SpreadCard,
  CardConnection,
  EnergyField,
 } from "./types";


/**
 * Detect connections between cards
 */
export function detectConnections(
  cards: SpreadCard[]
): CardConnection[] {
  const connections: CardConnection[] = [];

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const a = cards[i].card;
      const b = cards[j].card;

      if (!a || !b) continue;

      /**
       * mirror
       * same archetype + opposite aspect
       */
      if (
        a.archetype === b.archetype &&
        a.aspect !== b.aspect
      ) {
        connections.push({
          type: "mirror",
          archetype: a.archetype,
          positions: [i, j],
        });

        continue;
      }

      /**
       * evolution
       * same archetype
       */
      if (a.archetype === b.archetype) {
        connections.push({
          type: "evolution",
          archetype: a.archetype,
          positions: [i, j],
        });

        continue;
      }

      /**
       * shadow
       * light + dark pair
       */
      if (a.aspect !== b.aspect) {
        connections.push({
          type: "shadow",
          archetype: "mixed",
          positions: [i, j],
        });
      }

      /**
       * amplify
       * tag overlap
       */
      const overlap =
        a.tags?.some((tag) => b.tags?.includes(tag));

      if (overlap) {
        connections.push({
          type: "amplify",
          archetype: "mixed",
          positions: [i, j],
        });
      }
    }
  }

  /**
   * bridge
   * card0 + card2 same archetype
   */
  if (
    cards.length === 3 &&
    cards[0].card.archetype ===
      cards[2].card.archetype
  ) {
    connections.push({
      type: "bridge",
      archetype: cards[0].card.archetype,
      positions: [0, 1, 2],
    });
  }

  return connections;
}

/**
 * Destiny Axis
 */
function analyzeDestinyAxis(cards: SpreadCard[]) {
  const aspects = cards.map((c) => c.card.aspect);

  const pattern = aspects.join("-");

  switch (pattern) {
    case "dark-dark-light":
      return "RISING";

    case "light-dark-dark":
      return "FALLING";

    case "light-dark-light":
      return "REBIRTH";

    case "dark-light-dark":
      return "TRIAL";

    case "light-light-light":
      return "ASCENSION";

    case "dark-dark-dark":
      return "DESCENT";

    default:
      return "STABLE";
  }
}

/**
 * Resonance Engine
 * 找出重複出現最多的 tag
 */
function analyzeResonance(cards: SpreadCard[]) {
  const tagMap: Record<string, number> = {};

  cards.forEach((c) => {
    c.card.tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });

  return Object.entries(tagMap)
    .filter(([_, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
}

/**
 * Energy Field Engine v3
 */
export function analyzeField(cards: SpreadCard[]) {
  const lightCards: string[] = [];
  const darkCards: string[] = [];

  let lightScore = 0;
  let darkScore = 0;

  const weights = [0.8, 1.5, 1.2];

  cards.forEach((c, index) => {
    const weight = weights[index] ?? 1;

    if (c.card.aspect === "light") {
      lightScore += weight;
      lightCards.push(c.card.title);
    } else {
      darkScore += weight;
      darkCards.push(c.card.title);
    }
  });

  let dominant = "BALANCED";

  if (lightScore > darkScore) {
    dominant = "LIGHT";
  }

  if (darkScore > lightScore) {
    dominant = "DARK";
  }

  let fieldType = "MIXED_FIELD";

  if (lightScore >= 3.2) {
    fieldType = "PURE_LIGHT_FLOW";
  } else if (darkScore >= 3.2) {
    fieldType = "PURE_SHADOW_FLOW";
  } else if (lightScore > darkScore) {
    fieldType = "LIGHT_DOMINANT_FIELD";
  } else if (darkScore > lightScore) {
    fieldType = "SHADOW_DOMINANT_FIELD";
  }

  const resonance = analyzeResonance(cards);

  return {
    fieldType,

    dominant,

    lightScore: Number(lightScore.toFixed(2)),
    darkScore: Number(darkScore.toFixed(2)),

    lightCards,
    darkCards,

    destinyAxis: analyzeDestinyAxis(cards),

    resonance,

    tensionAxis:
      Math.abs(lightScore - darkScore) < 0.5
        ? ["LIGHT vs DARK"]
        : [],
  };
}