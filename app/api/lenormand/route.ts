import { NextResponse } from "next/server";
import { buildLenormandPrompt } from "@/lib/lenormand/promptBuilder";

export async function POST(req: Request) {
  
  console.log("GEMINI KEY:", process.env.GEMINI_API_KEY);

  try {

    const { question, spread } = await req.json();

    const prompt = buildLenormandPrompt({
      question,
      spread,
    });

    return NextResponse.json({
      success: true,
      prompt,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Lenormand API Error",
      },
      { status: 500 }
    );
  }
}