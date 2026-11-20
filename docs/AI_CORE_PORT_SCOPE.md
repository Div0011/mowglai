# AI Core focused port

## Scope

This branch is based on the upstream product repository's `main` commit and ports only:

- `packages/core-contracts/`
- `packages/ai-core/`
- A focused GitHub Actions test workflow for those packages.

No Company OS dashboard, API route, PHP endpoint, website redesign, assets, production workflow, deployment secrets, or cron job is included.

## Security boundaries

- The AI Core module validates request shape and chooses a model from server environment configuration.
- It does not provide authentication, authorization, distributed rate limiting, persistent audit logging, or MCP/tool execution.
- Hybrid retrieval fusion ranks candidates already fetched by adapters. It is not a database authorization mechanism.
- Retrieval adapters must enforce tenant scoping in each query, with database-level isolation such as PostgreSQL RLS.
- Treat model output as untrusted input.

## Validation

The focused CI workflow runs Bun tests for the two packages. It does not build or deploy the Next.js application and does not access production services.

## Integration status

This is an isolated code port for review. It is not approved for public AI gateway exposure or production use. A later integration step must add authenticated server-side adapters, quotas/rate limits, request bounds, audit events, and tenant isolation tests before exposing any model endpoint.
