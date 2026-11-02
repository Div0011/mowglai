import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
  AI_CORE_VERSION,
  AI_PROMPT_VERSION,
  buildGeminiGenerationRequest,
  extractGeminiText,
  parseAiRequest,
  resolveGeminiModel,
} from "./index.ts";

describe("AEMY Unified AI Core request policy", () => {
  test("parses and trims a valid general request", () => {
    assert.deepEqual(parseAiRequest({ prompt: "  hello  " }), {
      ok: true,
      value: { prompt: "hello", task: "general" },
    });
  });

  test("rejects null, arrays and non-object request bodies", () => {
    assert.equal(parseAiRequest(null).ok, false);
    assert.equal(parseAiRequest([]).ok, false);
    assert.equal(parseAiRequest("hello").ok, false);
  });

  test("rejects missing or non-string prompts", () => {
    assert.equal(parseAiRequest({}).ok, false);
    assert.equal(parseAiRequest({ prompt: 42 }).ok, false);
  });

  test("rejects empty prompts", () => {
    const res = parseAiRequest({ prompt: "   " });
    assert.equal(res.ok, false);
    if (!res.ok) {
      assert.equal(res.status, 400);
      assert.equal(res.error, "Prompt cannot be empty.");
    }
  });

  test("rejects prompts over the configured limit", () => {
    const res = parseAiRequest({ prompt: "x".repeat(2001) });
    assert.equal(res.ok, false);
    if (!res.ok) {
      assert.equal(res.status, 413);
    }
  });

  test("rejects unknown task names instead of silently routing them", () => {
    const res = parseAiRequest({ prompt: "review", task: "admin" });
    assert.equal(res.ok, false);
    if (!res.ok) {
      assert.equal(res.status, 400);
    }
  });

  test("routes reasoning tasks to the server-configured reasoning model", () => {
    const model = resolveGeminiModel("code_review", {
      GEMINI_MODEL: "gemini-2.5-flash",
      GEMINI_MODEL_REASONING: "gemini-reasoning-model",
    });
    assert.equal(model, "gemini-reasoning-model");
  });

  test("uses the safe default model when no model setting is present", () => {
    const model = resolveGeminiModel("general", {});
    assert.equal(model, "gemini-2.5-flash");
  });

  test("builds a versioned request with a task-specific system instruction", () => {
    const payload = buildGeminiGenerationRequest({ prompt: "Review this diff", task: "code_review" });
    assert.ok(payload.systemInstruction.parts[0].text.includes(AI_CORE_VERSION));
    assert.ok(payload.systemInstruction.parts[0].text.includes(AI_PROMPT_VERSION));
    assert.ok(payload.systemInstruction.parts[0].text.includes("Never claim code was run"));
    assert.equal(payload.contents[0].parts[0].text, "Review this diff");
    assert.equal(payload.generationConfig.temperature, 0.1);
  });

  test("extracts multiple text parts and handles empty provider responses", () => {
    const extracted = extractGeminiText({
      candidates: [{ content: { parts: [{ text: "hello" }, { text: "world" }] } }],
    });
    assert.equal(extracted, "hello\nworld");
    assert.equal(extractGeminiText({}), "");
  });
});
