# AI Foundation Integration Readiness Audit

**Repository:** `1nsharma/mowglai`  
**Audit branch:** `prep/staging-ai-foundation-audit`  
**Reviewed source branch:** `feat/unified-company-foundation`  
**Review date:** 2026-11-02  
**Status:** Review prepared; integration is not approved yet.

## Executive decision

Do not merge the broad unified-company-foundation change set into the upstream `Div0011/mowglai` main branch as one unit. The earlier repository audit measured 432 changed files (+31,610 / -7,484) against upstream main. That scope mixes the AI foundation with unrelated website, assets, PHP/API, logs, and deployment changes.

The focused AI foundation is worth retaining, but it must be integrated as a narrow, independently testable change set. This audit branch is documentation-only; it does not alter application runtime code or deployment configuration.

## Reviewed implementation

### 1. AI Core request policy

Reviewed: `packages/ai-core/src/index.ts`

Present:
- Runtime validation for JSON object, prompt type, empty prompt, prompt length, and task allow-list.
- Server-environment-controlled model selection.
- Versioned task-specific system instructions.
- Gemini request construction and response text extraction.

Limitations:
- The module explicitly does not implement authentication, distributed rate limiting, persistent memory, tools/MCP execution, evaluation pipelines, or audit persistence.
- Prompt instructions are not a security boundary against prompt injection. Treat model output as untrusted.
- Model IDs should be validated against an allow-list in server configuration; do not accept arbitrary request-supplied model identifiers.

### 2. Hybrid retrieval

Reviewed: `packages/ai-core/src/retrieval.ts`

Present:
- Deterministic Reciprocal Rank Fusion across keyword, vector, and structured result channels.
- Candidate-level tenant ID equality check.
- Duplicate suppression per channel and deterministic ID tie-break.

Critical boundary:
- This function ranks already-fetched candidates. It does not authenticate the caller, authorize access to source records, query a database, or enforce PostgreSQL RLS.
- Tenant filtering must happen inside every retrieval adapter/query before data is returned. Enforce tenant isolation again at the database layer (for example, RLS) and test cross-tenant access at the API boundary.
- Do not describe this helper alone as end-to-end tenant isolation.

### 3. Gemini API route

Reviewed: `app/api/company-ai/route.ts`

Positive controls:
- Production requests fail closed with HTTP 503.
- Gateway requires explicit `AI_GATEWAY_ENABLED=true`.
- API key remains server-side.
- Request body is validated and upstream error bodies are not returned.
- Provider call has a 30-second timeout.

Blockers before any shared staging exposure:
- No caller authentication or authorization is present.
- No distributed rate limiting, quota, cost ceiling, or abuse monitoring is present.
- No request ID / durable audit event is persisted.
- Prompt and response size/cost controls should be enforced at the route boundary.
- Prefer the provider's API-key request header over placing the key in the URL query string, to reduce accidental URL logging.
- Validate configured model names against an approved server-side allow-list.
- Add route-level tests for disabled gateway, production fail-closed behavior, malformed JSON, missing key, provider 429/5xx, timeout, and successful response.

Local-only use must be limited to a trusted developer machine. Do not expose this endpoint on a public preview URL.

### 4. Company OS dashboard

Reviewed: `app/company-os/page.tsx`

- The page is an interactive prototype with local component state and illustrative metrics.
- It sends a POST request to `/api/company-ai` when the command button is used.
- The nearby UI disclaimer says that no live AI request is executed. That statement is inconsistent with the actual `fetch()` call and should be corrected before demo handoff.
- Invoice, logistics, energy, and talent interactions shown in the inspected page are prototypes; do not treat them as persisted business operations or connected integrations.
- Keep all metrics explicitly labelled illustrative until connected to verified data sources.

### 5. CI/CD workflow

Reviewed: `.github/workflows/ci-cd.yml`

Present:
- Contract and AI Core tests, lint, and build steps.
- Hostinger secret injection and rsync deployment are conditionally restricted to `main`, push/manual dispatch, and repository owner `Div0011`.

Risk:
- A manual dispatch on upstream `main` can still enter the production deployment path. The workflow is not a staging-only workflow.
- Before integration, split CI from deployment. CI must run for pull requests and all branches without deployment secrets.
- Create a separate staging workflow with an explicit staging environment and staging-only credentials/target. Remove production deployment from this integration branch.
- Production deployment must remain disabled until explicitly approved by the repository owner.

## Required integration gates

| Gate | Required evidence | Current assessment |
|---|---|---|
| Scope isolation | AI Core + contracts + required dashboard files only | Not met by the broad 432-file diff |
| Unit tests | Bun tests pass on the final integration commit | Not independently executed in this audit |
| Lint | ESLint passes on the final integration commit | Not independently executed in this audit |
| Build | Next.js build passes with non-production placeholders | Not independently executed in this audit |
| API security | Auth, authorization, quota/rate limit, request bounds | Not met |
| Tenant isolation | Adapter-level tenant predicates + DB RLS + negative tests | Not proven by RRF helper |
| Staging boundary | CI-only PR workflow; explicit staging deploy workflow | Not met |
| UI truthfulness | Prototype labels match actual API behavior | Disclaimer correction required |
| Observability | Request IDs, redacted logs, audit events, cost metrics | Not met |

## Recommended merge sequence

1. Create a clean integration branch from the current upstream `Div0011/mowglai:main`.
2. Port only `packages/core-contracts` and `packages/ai-core` with their tests and manifests.
3. Add the Gemini route only after authentication, authorization, rate limiting, and route tests are implemented. Until then, keep the route disabled outside trusted local development.
4. Port Company OS dashboard separately as a demo-only UI; correct the AI request disclaimer and mark all sample data as illustrative.
5. Replace the combined CI/CD workflow with a CI-only PR workflow. Keep deployment out of this change set.
6. Run tests, lint, and build on the exact integration commit. Record commit SHA and workflow run links.
7. Open a draft PR for review. Do not merge or deploy automatically.

## Explicit safety boundary

- No production deployment.
- No production cron or live endpoint calls.
- No force-push, hard reset, or destructive branch rewrite.
- No broad merge of the 432-file candidate diff.
- No claim that tests/build passed until a workflow result proves it.

## Audit evidence

The implementation review was based on the source files listed above in `1nsharma/mowglai` branch `feat/unified-company-foundation`. This document records static review findings only; it is not a substitute for executing the test suite or reviewing the final upstream diff.
