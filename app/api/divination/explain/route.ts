import { NextResponse } from "next/server";
import { buildYishuPrompt } from "@/lib/prompts/yishu";
import { buildLenormandPrompt } from "@/lib/prompts/lenormand";

const APP_API_KEY = process.env.APP_API_KEY;

function validateRequest(req: Request) {
  const key = req.headers.get("x-app-key");
  return key && key === APP_API_KEY;
}

export async function POST(req: Request) {
  try {
    // 🔒 API KEY CHECK
    if (!validateRequest(req)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
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
          { success: false, error: "invalid type" },
          { status: 400 }
        );
    }

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

    const data = await response.json();
    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "server error" },
      { status: 500 }
    );
  }
}