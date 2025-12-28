# How to Deploy to Hostinger using GitHub Actions

Since we previously removed the Hostinger deployment step due to login errors, follow this guide to set it up correctly.

## Step 1: Get FTP Credentials from Hostinger
1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** -> **Manage** (for your domain).
3. On the left sidebar, search for or click on **Files** > **FTP Accounts**.
4. You will see your existing FTP account.
   - **FTP IP/Hostname**: Likely the IP address (e.g., `82.25.120.199` or `ftp.mowglai.in`).
   - **FTP Username**: e.g., `u707591712`.
   - **FTP Password**: If you don't know it, click **Change Password** to create a new one.

## Step 2: Add Secrets to GitHub
1. Go to your GitHub repository: [Div0011/mowglai-galaxy-landing](https://github.com/Div0011/mowglai-galaxy-landing)
2. Click on **Settings** (top tab).
3. On the left sidebar, click **Secrets and variables** -> **Actions**.
4. Click **New repository secret** (green button).
5. Add the following three secrets:

   | Name | Value |
   |------|-------|
   | `FTP_SERVER` | Your FTP IP address (e.g., `82.25.120.199`) |
   | `FTP_USERNAME` | Your FTP Username (e.g., `u707591712.mowglai.in` - check Hostinger for exact match) |
   | `FTP_PASSWORD` | The password you noted/changed in Step 1 |

## Step 3: Update the Workflow File
Once you have saved these secrets, we need to add the deployment code back to `.github/workflows/deploy.yml`.

**I can do this step for you** once you confirm you have added the secrets. Just tell me "I have added the secrets".

### What the code looks like (for reference):
```yaml
      - name: 📂 Sync files to Hostinger
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          protocol: ftp
          port: 21
          local-dir: ./dist/
          server-dir: ./public_html/
```
