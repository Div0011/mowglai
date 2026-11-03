# Mowglai Hostinger Subdomain & Services Setup Guide

This guide explains how to properly configure subdomains, client portals, APIs, and the official email (`tech@mowglai.com`) on Hostinger.

---

## 1. Subdomain Architecture Overview

| Subdomain | Purpose | Hostinger Document Root | Deployed Files |
| :--- | :--- | :--- | :--- |
| **`mowglai.com`** *(Main)* | Agency Galaxy Landing Page & Services | `/home/u707591712/domains/mowglai.com/public_html/` | Next.js Static Export (`out/*`) |
| **`client.mowglai.com`** | Dedicated Client Portal, Project Onboarding & Status Lookup | `/home/u707591712/domains/mowglai.com/public_html/client/` | `public/client/index.html` |
| **`api.mowglai.com`** | Dedicated Backend API (PHP + MySQL + CORS enabled) | `/home/u707591712/domains/mowglai.com/public_html/api/` | `public/api/*` + `.htaccess` |
| **`preview.mowglai.com`** | Bespoke HTML Template Previews & Demos | `/home/u707591712/domains/mowglai.com/public_html/previews/` | `public/previews/*` |
| **`mail.mowglai.com`** | Hostinger Webmail for `tech@mowglai.com` | Hostinger Managed Mail | Webmail Client |

---

## 2. Step-by-Step Setup in Hostinger hPanel

### Step 1: Create Subdomains in Hostinger
1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com/).
2. Go to **Websites** and select **`mowglai.com`** (Manage).
3. In the left sidebar, click **Domains** > **Subdomains**.
4. Create the following subdomains:

#### A. Client Portal (`client.mowglai.com`):
- **Subdomain Name**: `client`
- **Custom folder for subdomain**: Check the box and set folder to:
  ```text
  public_html/client
  ```
- Click **Create**.

#### B. Dedicated API (`api.mowglai.com`):
- **Subdomain Name**: `api`
- **Custom folder for subdomain**: Check the box and set folder to:
  ```text
  public_html/api
  ```
- Click **Create**.

#### C. Demos / Previews (`preview.mowglai.com`):
- **Subdomain Name**: `preview`
- **Custom folder for subdomain**: Check the box and set folder to:
  ```text
  public_html/previews
  ```
- Click **Create**.

---

### Step 2: Set Up Official Email (`tech@mowglai.com`)
1. In hPanel, go to **Emails** > **Email Accounts**.
2. Select domain **`mowglai.com`**.
3. Click **Create Email Account**:
   - **Email**: `tech` (creates `tech@mowglai.com`)
   - **Password**: Set a strong password.
4. Copy your SMTP credentials:
   - **SMTP Host**: `smtp.hostinger.com` (Port `465` SSL)
   - **Username**: `tech@mowglai.com`
   - **Password**: Your email password.
5. In your GitHub repository:
   - Go to **Settings > Secrets and variables > Actions**.
   - Update `SMTP_USER` to `tech@mowglai.com`.
   - Update `SMTP_PASS` to the mailbox password.

---

### Step 3: Fix 403 Forbidden on Main Domain (`mowglai.com`)
The `403 Forbidden` on `mowglai.com` occurs because `rsync` deploys to the default account root rather than the active domain document root.

1. In GitHub, go to **Settings > Secrets and variables > Actions > Secrets**.
2. Edit **`REMOTE_PATH`**:
   - If it is currently `public_html/` or `/home/u707591712/public_html/`:
   - Change it to the exact Hostinger virtual host path:
     ```text
     /home/u707591712/domains/mowglai.com/public_html/
     ```
   *(Verify this path in Hostinger hPanel under **File Manager** to confirm whether your files reside in `domains/mowglai.com/public_html/`).*
3. Push to `main` or manually trigger the **CI/CD** workflow under the **Actions** tab.

---

### Step 4: Verify Free SSL for All Subdomains
1. In hPanel, go to **Security** > **SSL**.
2. Ensure SSL (Let's Encrypt) is installed and active for:
   - `mowglai.com`
   - `client.mowglai.com`
   - `api.mowglai.com`
   - `preview.mowglai.com`
Hostinger automatically issues free Let's Encrypt certificates for all subdomains within a few minutes of creation.

---

## 3. How Subdomain Routing Works in Codebase

1. **`public/client/index.html`**:
   Directly serves the bespoke Mowglai Client Portal with project status tracking, proposal viewer, AI onboarding flow (`/ai-onboard`), and direct WhatsApp/Email support to `tech@mowglai.com`.

2. **`public/api/.htaccess`**:
   Contains pre-configured CORS rules (`Access-Control-Allow-Origin: *`) allowing any web or mobile client (including Vercel or external dashboards) to call API endpoints (`audit.php`, `create-subscription.php`, `get-purchases.php`, etc.) securely.

3. **Email Routing**:
   Forms submitted via the website and client portal are automatically routed to `tech@mowglai.com` with full message context and client details.

