import { describe, expect, test } from "bun:test";
import {
  AI_CORE_VERSION,
  AI_PROMPT_VERSION,
  buildGeminiGenerationRequest,
  extractGeminiText,
  parseAiRequest,
  resolveGeminiModel,
} from "./index";

describe("AEMY Unified AI Core request policy", () => {
  test("parses and trims a valid general request", () => {
    expect(parseAiRequest({ prompt: "  hello  " })).toEqual({
      ok: true,
      value: { prompt: "hello", task: "general" },
    });
  });

  test("rejects null, arrays and non-object request bodies", () => {
    expect(parseAiRequest(null).ok).toBe(false);
    expect(parseAiRequest([]).ok).toBe(false);
    expect(parseAiRequest("hello").ok).toBe(false);
  });

  test("rejects missing or non-string prompts", () => {
    expect(parseAiRequest({}).ok).toBe(false);
    expect(parseAiRequest({ prompt: 42 }).ok).toBe(false);
  });

  test("rejects empty prompts", () => {
    expect(parseAiRequest({ prompt: "   " })).toMatchObject({
      ok: false,
      status: 400,
      error: "Prompt cannot be empty.",
    });
  });

  test("rejects prompts over the configured limit", () => {
    expect(parseAiRequest({ prompt: "x".repeat(2001) })).toMatchObject({
      ok: false,
      status: 413,
    });
  });

  test("rejects unknown task names instead of silently routing them", () => {
    expect(parseAiRequest({ prompt: "review", task: "admin" })).toMatchObject({
      ok: false,
      status: 400,
    });
  });

  test("routes reasoning tasks to the server-configured reasoning model", () => {
    expect(resolveGeminiModel("code_review", {
      GEMINI_MODEL: "gemini-2.5-flash",
      GEMINI_MODEL_REASONING: "gemini-reasoning-model",
    })).toBe("gemini-reasoning-model");
  });

  test("uses the safe default model when no model setting is present", () => {
    expect(resolveGeminiModel("general", {})).toBe("gemini-2.5-flash");
  });

  test("builds a versioned request with a task-specific system instruction", () => {
    const payload = buildGeminiGenerationRequest({ prompt: "Review this diff", task: "code_review" });
    expect(payload.systemInstruction.parts[0].text).toContain(AI_CORE_VERSION);
    expect(payload.systemInstruction.parts[0].text).toContain(AI_PROMPT_VERSION);
    expect(payload.systemInstruction.parts[0].text).toContain("Never claim code was run");
    expect(payload.contents[0].parts[0].text).toBe("Review this diff");
    expect(payload.generationConfig.temperature).toBe(0.1);
  });

  test("extracts multiple text parts and handles empty provider responses", () => {
    expect(extractGeminiText({
      candidates: [{ content: { parts: [{ text: "hello" }, { text: "world" }] } }],
    })).toBe("hello\nworld");
    expect(extractGeminiText({})).toBe("");
  });
});
