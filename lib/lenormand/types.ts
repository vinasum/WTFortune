export type CardAspect = "dark" | "light";

export type LenormandCard = {
  id: string;

  // archetype root
  archetype: string;

  aspect: CardAspect;

  name: string;
  title: string;

  // 基礎牌義
  basic: string;

  // AI推理關鍵字
  tags: string[];

  // AI解讀焦點
  aiFocus: string[];

  image: string;
};

export type SpreadRole =
  | "問題與過去"
  | "現在的狀態"
  | "未來和結果";

export type SpreadCard = {
  position: number;
  role: SpreadRole;
  card: LenormandCard;
};

/**
 * Connection Engine v3
 */
export type ConnectionType =
  | "evolution"
  | "conflict"
  | "amplify"
  | "mirror"
  | "shadow"
  | "bridge";

export type CardConnection = {
  type: ConnectionType;

  archetype: string;

  positions: number[];
};

/**
 * Energy Field Engine v3
 */
export type FieldType =
  | "PURE_LIGHT_FLOW"
  | "PURE_SHADOW_FLOW"
  | "LIGHT_OVERCOMING_SHADOW"
  | "SHADOW_OVERCOMING_LIGHT"
  | "BALANCED_FIELD";

export type EnergyField = {
  fieldType: FieldType;

  dominant: "LIGHT" | "DARK" | "BALANCED";

  lightScore: number;
  darkScore: number;

  lightCount: number;
  darkCount: number;

  lightCards: string[];
  darkCards: string[];

  tensionAxis: string[];

  narrativeBias: string;
};