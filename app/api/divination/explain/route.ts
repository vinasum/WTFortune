import { NextResponse } from "next/server";

import { buildYishuPrompt } from "@/lib/prompts/yishu";
import { buildLenormandPrompt } from "@/lib/prompts/lenormand";

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
          {
            success: false,
            error: "invalid type",
          },
          { status: 400 }
        );
    }

    // Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
${systemPrompt}

${prompt}
                  `,
                },
              ],
            },
          ],
        }),
      }
    );

    // API error
    if (!response.ok) {
      const errorText = await response.text();

      console.error("GEMINI ERROR:", errorText);

      return NextResponse.json(
        {
          success: false,
          error: errorText,
        },
        { status: 500 }
      );
    }

    const data = await response.json();

    console.log("GEMINI RESPONSE:", data);

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!result) {
      return NextResponse.json(
        {
          success: false,
          error: "empty ai result",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      result,
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: "server error",
      },
      { status: 500 }
    );
  }
}