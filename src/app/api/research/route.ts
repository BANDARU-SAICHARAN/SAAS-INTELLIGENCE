import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});
    const prompt = `
Analyze the company "${body.company}".

Return ONLY in this format:

Industry: <industry>

Lead Score: <score out of 100>

Summary: <3-4 line summary>

Outreach Tip: <1 line outreach recommendation>
`;
 

    const result = await model.generateContent(prompt);

    return Response.json({
      success: true,
      response: result.response.text(),
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    });
  }
}
