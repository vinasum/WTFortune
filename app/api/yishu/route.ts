import { createSeed } from "@/lib/yishu/seed";
import { generateGua } from "@/lib/yishu/gua";
import { getHexagramMeta } from "@/lib/yishu/hexagram";

export async function POST(req: Request) {
  const body = await req.json();

  const seed = createSeed({
    n1: body.n1,
    n2: body.n2,
    context: body.context
  });

  const gua = generateGua(seed);
  const meta = getHexagramMeta(gua.index);

  return Response.json({
    seed,
    gua,
    meta
  });
}