# Mowglai Project Context & Guidelines

## 1. Project Overview
**Mowglai** is a premium, high-performance digital agency website with a galaxy/jungle theme.
- **Goal**: Create a strong first impression with clean 3D aesthetics, deep dark modes, and fluid animations while maintaining performance.

## 2. Architecture & File Structure
This project uses **Next.js 16 (App Router)**.
- `app/`: route files, layouts, pages, server components.
- `src/`: reusable components, libraries, hooks, types and animations.
- `public/`: static assets and PHP API endpoints for Hostinger shared hosting.
- `packages/`: shared domain logic.

## 3. Deployment Architecture

### Hostinger shared hosting (current target)
- The frontend is a **Next.js static export** in `out/`.
- PHP endpoints under `public/api/` are copied into the export and run by Apache/PHP.
- There is no Node.js runtime on this hosting target.
- `npm run export` sets `EXPORT_MODE=true`; Next.js server-only routes are omitted from this deployment and must not be advertised as available on Hostinger.

### Node.js server deployment (separate target)
- Use `npm run build` with the default standalone output.
- The `app/api/company-ai/route.ts` route requires a Node.js server runtime.
- Do not switch the Hostinger workflow to static export while expecting this route to work there.

### Security response headers
- In static export mode, configure headers in `public/.htaccess`.
- Next.js `headers()` is enabled only for standalone/server builds.

### Backend rules
- Hostinger API logic must use PHP and live under `public/api/`.
- Never place secrets in client-side code or committed files.
- Do not commit real credentials. Use GitHub Actions secrets and Hostinger environment configuration.

## 4. Development Commands
- `npm run dev`: local development server.
- `npm run build`: standalone Node.js build.
- `npm run export`: static export and integrity verification.
- `npm run lint`: ESLint.
- `npm test`: Node test runner.

## 5. Code and Security Practices
- TypeScript strict mode; prefer explicit types and avoid `any`.
- Keep client components as leaf nodes.
- Validate and bound all user input.
- For user-supplied URLs, allow HTTPS only, reject private/reserved DNS answers, pin cURL to the validated IP, and never follow redirects.
- Never disable TLS certificate or hostname verification.
- Never expose provider, database, stack trace, or credential details to clients.
- Security checks must scan JavaScript bundles and other deployable text assets, not only HTML.
- Keep credentials out of generated static output.

## 6. Hostinger Deployment Configuration
The deployment workflow is intentionally gated to pushes to `main` and manual runs on the canonical repository. It must verify deployment configuration before syncing.

Required GitHub configuration:
- Secrets: `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USERNAME`, `SSH_PORT`, `REMOTE_PATH`, `DB_NAME`, `DB_USER`, `DB_PASS`.
- Variables: `DB_HOST` (optional; defaults to `localhost`).
- Add payment secrets only when the corresponding server-side integration is enabled.

Database credentials previously committed to Git history must be rotated at the provider. Removing credentials from current files does not erase Git history.
- Do not include real server IPs, usernames, or credentials in public documentation.

## 7. Verification
Before deploying:
- Run `npm ci`.
- Run `npm run lint`.
- Run `npm test`.
- Run `npm run export`.
- Review the complete generated `out/` tree.
- Confirm all required deployment secrets are present.
- Do not deploy automatically from pull_request events.

## 8. Production Safety
- Do not deploy to production as part of review remediation.
- Do not merge a pull request without explicit authorization.
- Keep all remediation in a separate branch and validate in CI/staging first.
