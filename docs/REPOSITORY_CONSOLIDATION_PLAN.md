# Mowglai — Repository Consolidation Plan

Status: Proposed; no repository merge or production migration performed.  
Date: 2026-11-02

## Current state

Two repositories are in scope:

- Product codebase: `Div0011/mowglai`
- AI foundation and shared contracts: `1nsharma/mowglai`

The histories have diverged substantially. A repository comparison reported approximately 206 commits ahead and 288 behind for the inspected refs. This is a warning against merging branches or copying the full tree.

## Strategy: strangler migration

Keep both repositories independent while extracting stable, tested packages across a narrow versioned interface.

### Stage 1 — Inventory
- Freeze scope for the migration baseline.
- Inventory routes, API endpoints, PHP scripts, environment variables, cron jobs, workflows, database tables and external providers.
- Classify every component as keep, secure, replace, extract or retire.
- Map current production dependencies before changing any runtime behaviour.

### Stage 2 — Contract stabilization
- Version the shared AI request/response contracts.
- Define typed interfaces for identity context, tenant context, audit metadata, AI task, source provenance and policy decisions.
- Add contract tests in the AI foundation repository.
- Avoid exposing internal package paths as a public API.

### Stage 3 — Adapter integration
- Add a thin server-side adapter in the product repository.
- Keep the existing UI and workflows intact.
- Route one low-risk, non-customer-facing AI feature through the adapter.
- Add timeout, retry, idempotency, quota and audit handling.
- Maintain a feature flag and a fallback path.

### Stage 4 — Domain extraction
- Extract business modules only after ownership and data contracts are agreed.
- Use versioned APIs/events rather than direct cross-repository database access.
- Migrate one domain at a time: leads, projects, deliverables, then billing.
- Preserve stable IDs and audit history.

### Stage 5 — Cutover
- Run old and new paths in staging.
- Compare outputs and data consistency.
- Test rollback and restore.
- Require explicit release approval before production traffic moves.

## Do not

- Merge entire repositories because they share a product name.
- Copy secrets or environment files.
- change production DNS or hosting as part of architecture work.
- Migrate payments or customer records before idempotency and reconciliation tests exist.
- Introduce autonomous agents with direct production database access.

## Completion criteria

- A route/API/data inventory exists.
- Shared contracts are versioned and tested.
- The product repository consumes one stable AI package through an adapter.
- No direct production database coupling is introduced.
- Rollback and feature-flag paths are verified in staging.
