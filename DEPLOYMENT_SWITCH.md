# Deployment Switch Guide

## Host on GitHub Pages

1. Keep the GitHub Pages workflow steps in `.github/workflows/ci-cd.yml`.
2. Use these permissions in the job:
   - `contents: read`
   - `pages: write`
   - `id-token: write`
3. Keep the Pages deploy flow:
   - `actions/configure-pages`
   - `actions/upload-pages-artifact`
   - `actions/deploy-pages`
4. Keep `next.config.mjs` using `output: 'export'` and `trailingSlash: true`.
5. Keep `basePath` enabled through `GITHUB_PAGES_BASE_PATH` for repo-based Pages hosting.
6. Run `bun run build` before publishing.

## Host On Your Own Server Again

1. Remove or comment out the GitHub Pages steps in `.github/workflows/ci-cd.yml`.
2. Restore the SSH/rsync deploy step for your server.
3. Remove these GitHub Pages-only permissions:
   - `pages: write`
   - `id-token: write`
4. Remove the Pages-only job blocks if you no longer need them:
   - `environment: github-pages`
   - `concurrency: github-pages`
5. Remove the `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` steps.
6. Keep or remove `basePath` in `next.config.mjs` depending on where the server hosts the site:
   - Root domain: no `basePath`
   - Subpath: set the appropriate `basePath`
7. Restore the server secrets in GitHub Actions if needed:
   - `SSH_PRIVATE_KEY`
   - `SSH_HOST`
   - `SSH_USERNAME`
   - `SSH_PORT`
   - `REMOTE_PATH`
8. Run `bun run build` to verify the static export still works.

## Notes

- The site is already configured for static export.
- GitHub Pages works best when the output is fully static.
- If you switch back and forth often, consider keeping both deploy paths in the workflow and selecting one with an input or environment variable.
