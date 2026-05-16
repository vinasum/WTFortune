import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Missing prompt" },
        { status: 400 }
      );
    }

    // ✅ 更新為目前免費額度支援的 2.5 Flash 模型
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // 呼叫語法
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({
      success: true,
      result: text,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}