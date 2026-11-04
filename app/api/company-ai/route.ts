import { NextResponse } from "next/server";
import {
  AI_CORE_VERSION,
  AI_PROMPT_VERSION,
  buildGeminiGenerationRequest,
  extractGeminiText,
  parseAiRequest,
  resolveGeminiModel,
  type GeminiResponse,
} from "../../../packages/ai-core/src/index";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  // Fail closed: no production identity/session adapter or distributed rate limiter
  // is present in the audited repository yet. Do not expose a paid unauthenticated
  // model endpoint until those controls are implemented and tested.
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "AI gateway is disabled in production until authenticated access and distributed rate limiting are integrated." },
      { status: 503 },
    );
  }

  if (process.env.AI_GATEWAY_ENABLED !== "true") {
    return NextResponse.json(
      { error: "AI gateway is disabled. For trusted local development only, set AI_GATEWAY_ENABLED=true." },
      { status: 503 },
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI gateway is not configured. Set GEMINI_API_KEY in the server environment, then restart the app." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  const parsed = parseAiRequest(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: parsed.status });
  }

  const { prompt, task } = parsed.value;
  const model = resolveGeminiModel(task, process.env);
  const generationRequest = buildGeminiGenerationRequest(parsed.value);

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/" +
        encodeURIComponent(model) +
        ":generateContent?key=" +
        encodeURIComponent(apiKey),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(generationRequest),
        signal: AbortSignal.timeout(30000),
      },
    );

    if (!response.ok) {
      const status = response.status;
      // Do not return upstream response bodies: they may contain provider details.
      return NextResponse.json(
        {
          error: status === 429
            ? "AI rate limit reached. Try again shortly."
            : "AI provider request failed (HTTP " + status + "). Check the server configuration.",
        },
        { status: status === 429 ? 429 : 502 },
      );
    }

    const data = (await response.json()) as GeminiResponse;
    const text = extractGeminiText(data);
    if (!text) {
      return NextResponse.json({ error: "The AI provider returned no text." }, { status: 502 });
    }

    return NextResponse.json({
      text,
      task,
      model,
      aiCoreVersion: AI_CORE_VERSION,
      promptVersion: AI_PROMPT_VERSION,
    });
  } catch {
    return NextResponse.json({ error: "AI provider timed out or could not be reached." }, { status: 504 });
  }
}
