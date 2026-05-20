import { NextResponse } from "next/server";
import { buildYishuPrompt } from "@/lib/prompts/yishu";
import { buildLenormandPrompt } from "@/lib/prompts/lenormand";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
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
    // Gemini NON-STREAMING
    // =========================
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=" +
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