# Mowglai Deployment Guide (Hostinger + GitHub Actions)

This guide documents the automated Continuous Integration and Continuous Deployment (CI/CD) setup for Mowglai on Hostinger shared hosting.

---

## 1. Architecture Overview

Mowglai is a high-performance Next.js application built as a **static export** (`next build` output to `out/`).
- **Frontend**: Next.js static HTML/JS/CSS assets deployed to Hostinger's web root.
- **Backend API**: PHP microservices located under `public/api/` and `public/send_email.php`.
- **Hosting**: Hostinger shared hosting running LiteSpeed / Apache.
- **Automation**: GitHub Actions workflow (`.github/workflows/ci-cd.yml`) triggers on every push to `main`.

---

## 2. GitHub Repository Secrets

Configure the following secrets in **GitHub > Repository Settings > Secrets and variables > Actions > Repository secrets**:

### Required Deployment Secrets
| Secret Name | Description | Example / Notes |
|---|---|---|
| `SSH_HOST` | Hostinger Server IP (CRITICAL: Do NOT use domain name) | `82.25.120.199` (Use this exact IP so SSH doesn't hit Vercel) |
| `SSH_USERNAME` | Hostinger SSH Username | e.g., `u707591712` |
| `SSH_PORT` | Hostinger SSH Port | `65002` (Hostinger default) |
| `SSH_PRIVATE_KEY` | Ed25519 or RSA Private SSH Key | Generated for GitHub Actions |
| `REMOTE_PATH` | Optional Custom Path | e.g., `/home/u707591712/public_html` |

### Application Environment Secrets
| Secret Name | Description |
|---|---|
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay public key for frontend checkout |
| `RAZORPAY_KEY_ID` | Razorpay API key ID injected into server `.htaccess` |
| `RAZORPAY_KEY_SECRET` | Razorpay API key Secret injected into server `.htaccess` |
| `SMTP_USER` | Hostinger Mailbox address (e.g. `info@mowglai.com`) |
| `SMTP_PASS` | Hostinger Mailbox password |
| `DB_HOST` | MySQL Host (e.g. `localhost`) |
| `DB_NAME` | MySQL Database Name |
| `DB_USER` | MySQL Database Username |
| `DB_PASS` | MySQL Database Password |

---

## 3. Critical DNS Configuration (Hostinger hPanel)

> [!IMPORTANT]
> If your domain's DNS is still pointing to Vercel (`76.76.21.21`), visitors will continue to see the old November 5 cached site!
> To serve the live site from Hostinger, update your DNS in Hostinger:

1. Log in to **Hostinger hPanel** > **Domains** > **mowglai.com** > **DNS / Nameservers**.
2. Find the **A** record for `@` (or `mowglai.com`):
   - Current / Old: `76.76.21.21` (Vercel)
   - Change to Hostinger Server IP: `82.25.120.199`
3. Find the **CNAME** record for `www`:
   - Current / Old: `cname.vercel-dns.com`
   - Change to: `mowglai.com` (or create an A record pointing to `82.25.120.199`)
4. Save the DNS changes. (DNS propagation takes 5-15 minutes).

---

## 4. SSH Key Setup on Hostinger

1. Generate a dedicated SSH key pair on your local machine (or in terminal):
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-mowglai" -f ./hostinger_deploy
   ```
2. Copy the contents of `hostinger_deploy.pub` (public key):
   - Go to Hostinger **hPanel > Advanced > SSH Access > SSH Key Management**.
   - Click **Add SSH Key**, paste the public key, and activate it.
3. Copy the contents of `hostinger_deploy` (private key):
   - Go to **GitHub > Settings > Secrets and variables > Actions**.
   - Add new secret `SSH_PRIVATE_KEY` and paste the entire private key including `-----BEGIN ...-----` and `-----END ...-----`.

---

## 4. How Deployment Works

On push to `main` branch or manual trigger via **Run workflow**:
1. **Lint & Build**: Runs `bun install`, `bun run lint`, and `bun run build` creating static production build in `out/`.
2. **Environment Injection**: Safely injects server environment variables into `out/.htaccess` via `SetEnv`.
3. **Artifact Archive**: Uploads the production build artifact (`mowglai-production-build`) to GitHub for inspection.
4. **Deploy to Hostinger**:
   - Establishes secure SSH connection via port `65002`.
   - Rsyncs built assets to both `/home/<user>/public_html/` and `/home/<user>/domains/mowglai.com/public_html/`.
   - Sets directory permissions to `755` and file permissions to `644`.
   - Verifies `index.html` and `.htaccess` exist on both document roots.

---

## 5. Troubleshooting & Diagnostics

- **404 on API / PHP endpoints**:
  Ensure `public/.htaccess` includes `RewriteCond %{REQUEST_FILENAME} !-f` before the API rewrite rules so existing PHP scripts are never blocked.
- **403 Forbidden**:
  Permissions on Hostinger must be `755` for directories and `644` for files. The CI/CD script automatically enforces this with `--chmod=D755,F644`.
- **Manual Diagnostics**:
  Run the **Diagnose & Fix 403** workflow from the Actions tab on GitHub to inspect the server state and logs directly.
