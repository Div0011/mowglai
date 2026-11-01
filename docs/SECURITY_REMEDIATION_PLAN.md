# Mowglai — Security Remediation Plan

Status: Audit-derived plan; remediation not yet applied to the product repository.  
Date: 2026-11-02

## Severity and handling

A public-source review of the product repository identified high-risk patterns. This document intentionally avoids publishing credentials, exploit payloads, affected record identifiers or detailed attack paths. Treat the findings as confidential operational security work even though this planning repository is public.

## P0 — Credential exposure response

- Treat any credential committed to a public repository as compromised.
- Rotate the affected database credential at the database/provider layer.
- Update runtime configuration through the hosting secret manager or server-only environment configuration.
- Confirm the old credential no longer authenticates.
- Review database access logs for unexpected source addresses, queries or privilege use.
- Check Git history and all branches/tags for other secrets; use secret scanning.
- Remove hardcoded credentials from tracked files and replace them with required environment variables.
- Do not rely on history rewriting as a substitute for rotation.
- Confirm backup access and application connectivity after rotation.

Exit criteria: old credential revoked, new credential loaded at runtime, logs reviewed, secret scan clean or all findings dispositioned.

## P1 — API and data access

- Require authentication for purchase/order history endpoints.
- Authorize access against the authenticated principal and resource ownership; never trust an email address supplied by the caller as authorization.
- Apply tenant scoping in every query.
- Use parameterized SQL and least-privilege database users.
- Add schema validation, request size limits, rate limits and generic error responses.
- Apply CSRF protection to cookie-authenticated state-changing requests.
- Add audit events for reads and mutations of sensitive customer/payment data.

## P1 — Server-side URL fetching

- Allow only required URL schemes (normally HTTPS).
- Prefer a strict hostname allowlist when the business use case permits it.
- Resolve DNS and reject loopback, private, link-local, multicast and reserved IP ranges for IPv4 and IPv6.
- Revalidate every redirect destination; preferably disable redirects.
- Defend against DNS rebinding and time-of-check/time-of-use changes.
- Set connect/read timeouts, response size caps and content-type restrictions.
- Block cloud metadata endpoints and internal network ranges at the egress firewall.
- Do not pass raw user URLs directly to shell commands or privileged services.

## P1 — TLS, CORS and abuse controls

- Keep certificate and hostname verification enabled for every outbound TLS request.
- Replace wildcard CORS with an explicit allowlist of production and staging origins.
- Do not reflect arbitrary Origin values.
- Add per-IP and per-account rate limits with separate budgets for expensive AI and scan endpoints.
- Apply concurrency caps, queue limits and provider spend ceilings.
- Return safe error messages; do not expose stack traces, secrets or upstream response bodies.

## P1 — Payment lifecycle

- Verify checkout/provider signatures on the server.
- Verify webhook signatures using the raw request body and provider secret.
- Persist webhook event IDs and enforce idempotency.
- Reconcile subscription state from verified provider events.
- Verify amount, currency, plan, customer and subscription identifiers.
- Treat browser callbacks and redirect query parameters as untrusted.
- Add replay, duplicate-event, invalid-signature and out-of-order-event tests.

## P2 — AI and data governance

- Keep provider keys server-side.
- Validate task names, prompt sizes, file types and tool arguments.
- Add per-tenant quotas and provider cost budgets.
- Treat retrieved documents, websites and user files as untrusted input.
- Require allowlisted tools and policy checks for every tool invocation.
- Require human approval before external side effects.
- Store model ID, prompt version, source references, policy decision and outcome metadata.
- Avoid logging full prompts, customer documents or personal data by default.

## P2 — CI and release controls

Required checks:
- TypeScript typecheck
- ESLint
- Unit and integration tests
- Production build
- Dependency vulnerability scan
- Secret scan
- Static analysis for PHP and TypeScript
- Migration validation
- API authorization and tenant-isolation tests

Production release requires staging smoke tests, backup verification, rollback plan and an authorized human approval.

## Verification checklist

- [ ] Credential rotated and old credential revoked
- [ ] Repository and history secret scan completed
- [ ] Purchase APIs enforce authentication and ownership
- [ ] Tenant isolation tested
- [ ] URL fetcher blocks private/internal destinations and unsafe redirects
- [ ] TLS verification enabled
- [ ] CORS allowlist configured
- [ ] Rate limits and cost budgets enabled
- [ ] Payment signature and webhook verification tested
- [ ] AI tool permissions and approval gates tested
- [ ] CI checks required before merge
- [ ] Staging validated; production separately approved
