#!/usr/bin/env node
/**
 * Verify static export integrity and scan deployable text assets for secrets.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const OUT = 'out';
if (!existsSync(OUT)) {
    console.error(`[verify-export] FAIL: ${OUT}/ directory not found.`);
    process.exit(1);
}

const SECRET_PATTERNS = [
    /Mowglai@2025/i,
    /RAZORPAY_KEY_SECRET\s*[:=]\s*['"]?rzp_secret/i,
    /sk-razorpay-[a-zA-Z0-9]{8,}/i,
    /AIza[0-9A-Za-z_\-]{35}/,
    /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/,
];
const DEFACEMENT_PATTERNS = [/you'?ve been hacked/i, /defaced/i];

const TEXT_EXTENSIONS = new Set([
    '.html', '.htm', '.js', '.mjs', '.cjs', '.json', '.css', '.map',
    '.xml', '.txt', '.webmanifest', '.svg', '.php', '.yml', '.yaml',
    '.htaccess',
]);
const textFiles = [];
function walk(dir) {
    for (const entry of readdirSync(dir)) {
        const path = join(dir, entry);
        const stat = statSync(path);
        if (stat.isDirectory()) walk(path);
        else if (TEXT_EXTENSIONS.has(extname(entry).toLowerCase())) textFiles.push(path);
    }
}
walk(OUT);

const errors = [];
const rootIndex = join(OUT, 'index.html');
if (!existsSync(rootIndex)) {
    errors.push('out/index.html is missing.');
} else if (statSync(rootIndex).size < 2000) {
    errors.push(`out/index.html is only ${statSync(rootIndex).size} bytes.`);
}

for (const file of textFiles) {
    const contents = readFileSync(file, 'utf8');
    for (const pattern of DEFACEMENT_PATTERNS) {
        if (pattern.test(contents)) errors.push(`Defacement marker ${pattern} found in ${file}`);
    }
    for (const pattern of SECRET_PATTERNS) {
        if (pattern.test(contents)) errors.push(`Secret pattern ${pattern} found in deployable text asset ${file}`);
    }
}

if (errors.length > 0) {
    console.error('[verify-export] FAILED:\n - ' + errors.join('\n - '));
    process.exit(1);
}
console.log(`[verify-export] OK — ${textFiles.length} deployable text assets scanned.`);
