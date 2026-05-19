import { NextResponse } from "next/server";
import { buildYishuPrompt } from "@/lib/prompts/yishu";
import { buildLenormandPrompt } from "@/lib/prompts/lenormand";

export const runtime = "edge";

const APP_API_KEY = process.env.APP_API_KEY;

// =========================
// Request validation（穩定版）
// =========================
function validateRequest(req: Request) {
  const key = req.headers.get("x-app-key");

  // 🔥 開發環境直接放行（避免 localhost 被卡）
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  // 🔥 production 只驗 API key（穩定、不依賴 origin）
  return key === APP_API_KEY;
}

export async function POST(req: Request) {
  try {
    // 🔒 安全檢查
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
    // NON-STREAMING Gemini
    // =========================
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
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

    if (!response.ok) {
      const errText = await response.text();

      console.error("Gemini API error:", errText);

      return NextResponse.json(
        {
          error: "Gemini API failed",
          detail: errText,
        },
        { status: 500 }
      );
    }

    const data = await response.json();

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "server error" },
      { status: 500 }
    );
  }
}