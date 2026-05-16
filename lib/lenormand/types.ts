export type CardAspect = "dark" | "light";

export type LenormandCard = {
  id: string;

  // 同 archetype 用來做 connection
  archetype: string;

  aspect: CardAspect;

  name: string;
  title: string;

  // 基本牌義（簡短）
  basic: string;

  // AI 用的關鍵詞
  tags: string[];

  // 提醒 AI 重點觀察面向
  aiFocus: string[];

  image: string;
};

export type SpreadRole =
  | "problem"
  | "state"
  | "future";

export type SpreadCard = {
  position: number;
  role: SpreadRole;
  card: LenormandCard;
};

export type CardConnection = {
  type: "evolution" | "conflict" | "amplify";

  archetype: string;

  positions: number[];
};