import { describe, expect, test } from "bun:test";
import {
  fuseHybridResults,
  RetrievalTenantBoundaryError,
  type HybridRetrievalCandidates,
  type RetrievedDocument,
} from "./retrieval";

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
    expect(results[0].id).toBe("shared");
    expect(results[0].matchedChannels).toEqual(["keyword", "vector", "structured"]);
    expect(results[0].score).toBeGreaterThan(results.find((x) => x.id === "keyword-only")!.score);
  });

  test("does not return duplicate IDs twice from the same channel", () => {
    const results = fuseHybridResults("tenant-a", {
      ...empty,
      keyword: [doc("same"), doc("same")],
    });
    expect(results).toHaveLength(1);
    expect(results[0].score).toBeCloseTo(1 / 61);
  });

  test("fails closed when any candidate belongs to another tenant", () => {
    expect(() => fuseHybridResults("tenant-a", {
      ...empty,
      vector: [doc("private", "tenant-b")],
    })).toThrow(RetrievalTenantBoundaryError);
  });

  test("fails closed when the requested tenant is empty", () => {
    expect(() => fuseHybridResults(" ", empty)).toThrow("non-empty tenantId");
  });

  test("rejects invalid limits and RRF constants", () => {
    expect(() => fuseHybridResults("tenant-a", empty, 0)).toThrow(RangeError);
    expect(() => fuseHybridResults("tenant-a", empty, 5, 0)).toThrow(RangeError);
  });

  test("applies the requested output limit", () => {
    const results = fuseHybridResults("tenant-a", {
      ...empty,
      keyword: [doc("a"), doc("b"), doc("c")],
    }, 2);
    expect(results).toHaveLength(2);
  });

  test("orders equal-score results deterministically by ID", () => {
    const results = fuseHybridResults("tenant-a", {
      ...empty,
      keyword: [doc("b")],
      vector: [doc("a")],
    }, 10, 60);
    expect(results.map((x) => x.id)).toEqual(["a", "b"]);
  });

  test("rejects malformed candidates", () => {
    expect(() => fuseHybridResults("tenant-a", {
      ...empty,
      keyword: [{ id: "", tenantId: "tenant-a", content: "x" }],
    })).toThrow("non-empty id");
  });
});
