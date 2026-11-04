# Mowglai Unified Company & 56-Project Consolidation

**Status:** Foundation branch / audit-first migration. This document is not a claim that all 56 projects have been imported or tested.

## Decision

The target is one company and one shared technology foundation under **Mowglai**. The eight strategic verticals from the Master Portfolio Executive Blueprint become product groups, not eight separate companies. A product can remain a separately deployed app/service where isolation, reliability, or a distinct customer journey requires it.

The retrieved blueprint declares 56 projects, but explicitly names 47. The other 9 names are not present in the retrieved text and are left unresolved rather than invented. The local `akafolder` and its 44 ZIP archives have not yet been scanned in this execution environment.

## Product groups

1. AI Core & Autonomous Agents — shared agent runtime, model gateway, tool/MCP registry, research and development assistants.
2. Commerce, Retail & MSME — BazaarSync, DukaanMitra, MitraOS and related retail variants.
3. Logistics & Supply Chain — TruckWala variants and vehicle billing analysis.
4. Talent & HR Tech — HireSaathi variants.
5. Cleantech & Energy — SolarHub and Solar Wallet variants.
6. Petcare & Veterinary — PetsJanu and PetGuardian variants.
7. GovTech, Security & Identity — Aether, GovAI, identity and ProofLedger variants.
8. Media, Gaming & Ventures — content, games, research and real-estate systems.

## Shared platform boundaries

- `packages/core-contracts`: typed tenant context, domain-event envelope and application-level tenant boundary guard.
- `packages/ai-core` (implemented, not yet execution-verified): bounded request parsing, explicit task allowlist, server-side Gemini model selection, versioned task-specific system instructions, Gemini request/response helpers, and reciprocal-rank fusion over already-fetched keyword/vector/structured result lists.
- Still missing: verified identity/session adapter, distributed rate limiting and quotas, actual keyword/vector/structured retrieval providers, embeddings, persistent memory, MCP/tool registry and permissioned tool execution, evaluation pipeline, durable audit ledger, usage metering, and production observability.
- Data plane: PostgreSQL/Supabase is a candidate for shared multi-tenant business data; actual migration is conditional on schema review, RLS policies, backups and per-product requirements.
- Runtime: do not force all products into one process. Start with a modular monolith for shared business capabilities and preserve isolated workers/services where needed.

## Migration rules

1. Inventory each local project and archive; record file hashes, source path, Git remote/commit, language/runtime, license, environment-variable *names only*, data stores, test commands, deployment and owner.
2. Classify each item: `canonical`, `merge-candidate`, `reusable-module`, `standalone-service`, `archive-only`, or `needs-investigation`.
3. Choose one canonical codebase per product family after diffing all variants. Keep original repositories intact during migration.
4. Extract reusable code only after reviewing license/provenance, dependencies, secrets, test coverage and data ownership.
5. Put shared code behind explicit typed interfaces. Never let product modules access another tenant's data directly.
6. Run tests/builds in isolated CI; record command, toolchain, exit status and logs. A green README badge or a previous build log is not current evidence.
7. Cut over only after data migration rehearsal, rollback plan, smoke tests and production-owner approval.

## Commercial and IP boundary

A technical monorepo does not automatically transfer IP ownership. Maintain source provenance and use a written assignment/license schedule for pre-existing code and new Mowglai-specific work. Do not publish or commercialize third-party or collaborator code until rights are established.

## First engineering milestone

The initial shared contracts package provides tenant-aware event contracts and a fail-closed application-level tenant comparison helper. The first `packages/ai-core` slice provides bounded request validation, task-aware server-side model routing, prompt-policy versioning and retrieval-result fusion. Retrieval fusion only ranks candidates supplied by adapters; it does not connect to a vector store, search index or database. No persistent memory or tool execution is implemented. The Gemini route fails closed in production because the inspected repository does not yet provide verified user authentication or distributed rate limiting. These modules do **not** constitute complete platform security or a production-ready RAG/agent system.

## Acceptance criteria for this phase

- [ ] Registry is reconciled against the actual 56 local directories and ZIP contents.
- [ ] Every source has a recorded hash/commit and provenance.
- [ ] The 9 currently unnamed entries are resolved from the real inventory.
- [ ] Shared contract and AI-core tests run in CI and the exact result is recorded; at the time of this update, tests are written but no workflow run is available as evidence.
- [ ] No original project or archive is deleted during consolidation.
- [ ] Product-level migration PRs identify imported paths, licensing, data migrations and rollback steps.
