# Hostinger Deployment Setup

## Prerequisites
- SSH access to Hostinger server (already configured ✅)
- GitHub repository access

## Step 1: Get Your SSH Private Key

Run this on your local machine to get your private key:
```bash
cat ~/.ssh/id_ed25519
```

Or if you're using a different key:
```bash
ls ~/.ssh
cat ~/.ssh/your_key_name
```

Copy the ENTIRE content (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`)

## Step 2: Add GitHub Secrets

Go to: `https://github.com/Div0011/mowglai/settings/secrets/actions`

Add these 5 secrets:

### 1. SSH_PRIVATE_KEY
Paste your private key content here

### 2. SSH_HOST
```
82.25.120.199
```

### 3. SSH_USERNAME
```
u707591712
```

### 4. SSH_PORT
```
65002
```

### 5. REMOTE_PATH
The directory where your files should be deployed. Common options:
- For main domain: `/home/u707591712/public_html/`
- For subdomain: `/home/u707591712/public_html/your-subdomain/`
- Check your Hostinger file manager if unsure

## Step 3: Test Deployment

Push any change to main branch:
```bash
git add .
git commit -m "Test deployment"
git push origin main
```

Or trigger manually from GitHub Actions tab.

## How It Works

1. **Build**: GitHub Actions builds your Next.js app (outputs to `./out/`)
2. **Transfer**: rsync transfers only changed files over SSH
3. **Speed**: Incremental transfers (seconds for small changes)
4. **Security**: SSH key authentication (no passwords)

## Troubleshooting

**If deployment fails:**
1. Check GitHub Actions logs for errors
2. Verify SSH key is correct and has access
3. Ensure REMOTE_PATH is correct on server
4. Test SSH connection locally: `ssh -p 65002 u707591712@82.25.120.199`

**To see what's being transferred:**
The rsync `-v` flag (verbose) is included, check the workflow logs.

## Cleanup (Optional)

To stop deploying to GitHub Pages, delete the CI workflow:
```bash
rm .github/workflows/ci.yml
```
