export type CardAspect = "dark" | "light";

export type LenormandCard = {
  id: string;

  // 用於 archetype 關聯（跨牌連結）
  archetype: string;

  aspect: CardAspect;

  name: string;
  title: string;

  // 基本牌義（簡短描述）
  basic: string;

  // AI 推理用關鍵字
  tags: string[];

  // AI 判斷重點觀察方向
  aiFocus: string[];

  // 圖片路徑
  image: string;
};

export type SpreadRole = "problem" | "state" | "future";

export type SpreadCard = {
  position: number;
  role: SpreadRole;
  card: LenormandCard;
};

export type CardConnection = {
  type: "evolution" | "conflict" | "amplify";

  // 用於牌之間的關聯識別
  archetype: string;

  positions: number[];
};