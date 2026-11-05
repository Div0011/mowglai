#!/usr/bin/env node
/**
 * verify-export.js — Build-output integrity & hygiene gate.
 *
 * Runs after `next build` (static export mode). Fails the pipeline if:
 *  1. out/index.html is missing or suspiciously small (blank/broken deploy)
 *  2. Any built HTML contains defacement markers ("hacked", "defaced")
 *     -> this is what let a hacked index.html slip through before
 *  3. Secrets are accidentally baked into static output
 *     (db passwords, Razorpay key SECRET, Gemini keys, private keys)
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'out';

if (!existsSync(OUT)) {
    console.error(`[verify-export] FAIL: ${OUT}/ directory not found. Was EXPORT_MODE=true set?`);
    process.exit(1);
}

const SECRET_PATTERNS = [
    /Mowglai@2025/i,                      // leaked DB password (rotate in prod too!)
    /RAZORPAY_KEY_SECRET\s*[:=]\s*['"]?rzp_secret/i,
    /sk-razorpay-[a-zA-Z0-9]{8,}/i,       // razorpay secrets should NEVER be in client bundle
    /AIza[0-9A-Za-z_\-]{35}/,             // Google/Gemini API keys
    /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/,
];

const DEFACEMENT_PATTERNS = [/you'?ve been hacked/i, /defaced/i];

let htmlFiles = [];
function walk(dir) {
    for (const entry of readdirSync(dir)) {
        const p = join(dir, entry);
        const st = statSync(p);
        if (st.isDirectory()) walk(p);
        else if (entry.endsWith('.html')) htmlFiles.push(p);
    }
}
walk(OUT);

const errors = [];

// 1. Root page sanity
const rootIndex = join(OUT, 'index.html');
if (!existsSync(rootIndex)) {
    errors.push('out/index.html is MISSING — nothing would be served at /');
} else {
    const size = statSync(rootIndex).size;
    if (size < 2000) {
        errors.push(`out/index.html is only ${size} bytes — looks like a blank/broken page`);
    }
}

// 2+3. Scan all HTML for defacement + secrets
for (const file of htmlFiles) {
    const text = readFileSync(file, 'utf8');
    for (const re of DEFACEMENT_PATTERNS) {
        if (re.test(text)) errors.push(`Defacement marker "${re}" found in ${file}`);
    }
    for (const re of SECRET_PATTERNS) {
        if (re.test(text)) errors.push(`Secret pattern ${re} found in static output ${file}`);
    }
}

if (errors.length) {
    console.error('[verify-export] FAILED:\n - ' + errors.join('\n - '));
    process.exit(1);
}

console.log(`[verify-export] OK — ${htmlFiles.length} HTML pages verified, no defacement markers, no leaked secrets.`);
