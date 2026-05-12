export const LIUREN_MODE = {
  FATE: "命理師人格",
  LOGIC: "理性分析人格",
  PSYCHO: "心理象徵人格",
} as const;

export type LiurenMode =
  typeof LIUREN_MODE[keyof typeof LIUREN_MODE];