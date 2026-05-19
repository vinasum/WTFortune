import { NextResponse } from "next/server";
import { buildYishuPrompt } from "@/lib/prompts/yishu";
import { buildLenormandPrompt } from "@/lib/prompts/lenormand";

export const runtime = "edge";

const APP_API_KEY = process.env.APP_API_KEY;

function validateRequest(req: Request) {
  const origin = req.headers.get("origin");
  const key = req.headers.get("x-app-key");

  // ✅ 白名單（production + local）
  const allowedOrigins = [
    "http://localhost:3000",
    "https://wtfortune.vercel.app",
  ];

  // ⚠️ Vercel / mobile / SSR 有時 origin 會是 null
  const originOk =
    !origin || allowedOrigins.includes(origin);

  const keyOk =
    key === APP_API_KEY;

  // 👉 建議：兩者擇一即可通過
  return originOk || keyOk;
}

export async function POST(req: Request) {
  try {
    // 🔒 API 防護
    if (!validateRequest(req)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { type, prompt, payload } = body;

    let systemPrompt = "";

    switch (type) {
      case "yishu":
        systemPrompt = buildYishuPrompt(payload);
        break;

      case "lenormand":
        systemPrompt = buildLenormandPrompt(payload);
        break;

      default:
        return NextResponse.json(
          { error: "invalid type" },
          { status: 400 }
        );
    }

    // =========================
    // Gemini Streaming (SSE safe)
    // =========================

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: systemPrompt + "\n\n" + prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.body) {
      return NextResponse.json(
        { error: "No response body" },
        { status: 500 }
      );
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body!.getReader();

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          const chunk = decoder.decode(value, {
            stream: true,
          });

          // 🔥 SSE 可能跨 chunk → 需要 buffer（簡化安全版）
          const lines = chunk.split("\n");

          for (const line of lines) {
            const trimmed = line.trim();

            if (!trimmed.startsWith("data:")) continue;

            const jsonText = trimmed.replace(/^data:\s*/, "");

            if (jsonText === "[DONE]") continue;

            try {
              const json = JSON.parse(jsonText);

              const text =
                json?.candidates?.[0]?.content?.parts?.[0]?.text;

              if (text) {
                controller.enqueue(
                  encoder.encode(text)
                );
              }
            } catch {
              // ignore malformed chunks
            }
          }
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "server error" },
      { status: 500 }
    );
  }
}