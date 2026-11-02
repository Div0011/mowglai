import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
  fuseHybridResults,
  RetrievalTenantBoundaryError,
  type HybridRetrievalCandidates,
  type RetrievedDocument,
} from "./retrieval.ts";

const doc = (id: string, tenantId = "tenant-a", content = "content " + id): RetrievedDocument => ({
  id,
  tenantId,
  content,
});

const empty: HybridRetrievalCandidates = { keyword: [], vector: [], structured: [] };

describe("hybrid retrieval fusion", () => {
  test("merges channel results and ranks documents found in multiple channels higher", () => {
    const results = fuseHybridResults("tenant-a", {
      keyword: [doc("shared"), doc("keyword-only")],
      vector: [doc("shared"), doc("vector-only")],
      structured: [doc("shared")],
    });
    assert.equal(results[0].id, "shared");
    assert.deepEqual(results[0].matchedChannels, ["keyword", "vector", "structured"]);
    const keywordOnly = results.find((x) => x.id === "keyword-only");
    assert.ok(keywordOnly);
    assert.ok(results[0].score > keywordOnly.score);
  });

  test("does not return duplicate IDs twice from the same channel", () => {
    const results = fuseHybridResults("tenant-a", {
      ...empty,
      keyword: [doc("same"), doc("same")],
    });
    assert.equal(results.length, 1);
    assert.ok(Math.abs(results[0].score - 1 / 61) < 1e-6);
  });

  test("fails closed when any candidate belongs to another tenant", () => {
    assert.throws(
      () =>
        fuseHybridResults("tenant-a", {
          ...empty,
          vector: [doc("private", "tenant-b")],
        }),
      RetrievalTenantBoundaryError,
    );
  });

  test("fails closed when the requested tenant is empty", () => {
    assert.throws(() => fuseHybridResults(" ", empty), /non-empty tenantId/);
  });

  test("rejects invalid limits and RRF constants", () => {
    assert.throws(() => fuseHybridResults("tenant-a", empty, 0), RangeError);
    assert.throws(() => fuseHybridResults("tenant-a", empty, 5, 0), RangeError);
  });

  test("applies the requested output limit", () => {
    const results = fuseHybridResults(
      "tenant-a",
      {
        ...empty,
        keyword: [doc("a"), doc("b"), doc("c")],
      },
      2,
    );
    assert.equal(results.length, 2);
  });

  test("orders equal-score results deterministically by ID", () => {
    const results = fuseHybridResults(
      "tenant-a",
      {
        ...empty,
        keyword: [doc("b")],
        vector: [doc("a")],
      },
      10,
      60,
    );
    assert.deepEqual(results.map((x) => x.id), ["a", "b"]);
  });

  test("rejects malformed candidates", () => {
    assert.throws(
      () =>
        fuseHybridResults("tenant-a", {
          ...empty,
          keyword: [{ id: "", tenantId: "tenant-a", content: "x" }],
        }),
      /non-empty id/,
    );
  });
});
