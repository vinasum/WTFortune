export function createSeed(params: {
  n1: number;
  n2: number;
  context?: {
    clickTime?: number;
    dwellTime?: number;
    inputLength?: number;
  };
}) {
  const { n1, n2, context } = params;

  // 分桶時間（避免過度飄動）
  const timeBucket = Math.floor(Date.now() / 1000 / 30);

  // 基礎數值（穩定核心）
  const base = n1 * 131 + n2 * 97;

  // 行為熵（弱影響）
  const behavior =
    (context?.clickTime ?? 0) * 0.001 +
    (context?.dwellTime ?? 0) * 0.002 +
    (context?.inputLength ?? 0) * 17;

  // 壓縮避免爆炸
  const normalizedBehavior = Math.floor(behavior % 997);

  return base + timeBucket + normalizedBehavior;
}