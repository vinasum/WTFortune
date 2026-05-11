const bagua = ["乾","兌","離","震","巽","坎","艮","坤"];

export function generateGua(seed: number) {
  // 上卦：穩定取模
  const upper = bagua[Math.abs(seed) % 8];

  // 下卦：加入擾動
  const lower = bagua[Math.abs(Math.floor(seed / 3)) % 8];

  // 動爻：6爻系統
  const movingLine = (Math.abs(seed) % 6) + 1;

  // 卦序（64卦映射）
  const index = Math.abs(seed) % 64;

  return {
    upper,
    lower,
    movingLine,
    index
  };
}