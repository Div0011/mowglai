/**
 * Deterministic result fusion for keyword, vector and structured retrieval adapters.
 *
 * This module ranks already-retrieved candidates. It does not query a database,
 * generate embeddings, or establish authorization; callers must enforce access
 * controls in the source adapters and database (for example with PostgreSQL RLS).
 */

export type RetrievalChannel = "keyword" | "vector" | "structured";

export interface RetrievedDocument {
  id: string;
  tenantId: string;
  content: string;
  metadata?: Readonly<Record<string, unknown>>;
}

export interface HybridRetrievalCandidates {
  keyword: readonly RetrievedDocument[];
  vector: readonly RetrievedDocument[];
  structured: readonly RetrievedDocument[];
}

export interface FusedDocument extends RetrievedDocument {
  /** Reciprocal-rank-fusion score; higher scores rank first. */
  score: number;
  matchedChannels: RetrievalChannel[];
}

export class RetrievalTenantBoundaryError extends Error {
  readonly code = "RETRIEVAL_TENANT_BOUNDARY_VIOLATION";

  constructor() {
    super("Retrieval result tenant does not match the requested tenant");
    this.name = "RetrievalTenantBoundaryError";
  }
}

const CHANNELS: readonly RetrievalChannel[] = ["keyword", "vector", "structured"];

/**
 * Merge pre-fetched result lists using Reciprocal Rank Fusion (RRF).
 * Every candidate is checked against the requested tenant before it is used.
 */
export function fuseHybridResults(
  tenantId: string,
  candidates: HybridRetrievalCandidates,
  limit = 10,
  rrfConstant = 60,
): FusedDocument[] {
  if (typeof tenantId !== "string" || tenantId.trim().length === 0) {
    throw new TypeError("A non-empty tenantId is required for retrieval fusion");
  }
  if (!Number.isInteger(limit) || limit < 1) {
    throw new RangeError("Retrieval result limit must be a positive integer");
  }
  if (!Number.isInteger(rrfConstant) || rrfConstant < 1) {
    throw new RangeError("RRF constant must be a positive integer");
  }

  const byId = new Map<string, FusedDocument>();

  for (const channel of CHANNELS) {
    const documents = candidates[channel];
    if (!Array.isArray(documents)) {
      throw new TypeError("Each retrieval channel must provide an array");
    }

    const seenInChannel = new Set<string>();
    let rank = 0;

    for (const document of documents) {
      if (!document || typeof document !== "object") {
        throw new TypeError("Retrieval candidates must be objects");
      }
      if (typeof document.tenantId !== "string" || document.tenantId !== tenantId) {
        throw new RetrievalTenantBoundaryError();
      }
      if (typeof document.id !== "string" || document.id.trim().length === 0) {
        throw new TypeError("Every retrieval candidate requires a non-empty id");
      }
      if (typeof document.content !== "string") {
        throw new TypeError("Every retrieval candidate requires string content");
      }
      if (seenInChannel.has(document.id)) continue;
      seenInChannel.add(document.id);
      rank += 1;

      const contribution = 1 / (rrfConstant + rank);
      const existing = byId.get(document.id);
      if (existing) {
        existing.score += contribution;
        if (!existing.matchedChannels.includes(channel)) existing.matchedChannels.push(channel);
      } else {
        byId.set(document.id, {
          ...document,
          score: contribution,
          matchedChannels: [channel],
        });
      }
    }
  }

  return [...byId.values()]
    .sort((left, right) => right.score - left.score || left.id.localeCompare(right.id))
    .slice(0, limit);
}
