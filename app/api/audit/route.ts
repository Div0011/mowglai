import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import type { Element } from 'domhandler';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const url: string = body?.url;

        if (!url || !/^https?:\/\/.+/.test(url)) {
            return NextResponse.json({ success: false, error: 'Please enter a valid URL (including http:// or https://).' }, { status: 400 });
        }

        let parsedUrl: URL;
        try {
            parsedUrl = new URL(url);
        } catch {
            return NextResponse.json({ success: false, error: 'Please enter a valid URL.' }, { status: 400 });
        }

        // Enforce http/https and block obvious internal/localhost targets to mitigate SSRF.
        if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
            return NextResponse.json({ success: false, error: 'Only http and https URLs are allowed.' }, { status: 400 });
        }

        const hostname = parsedUrl.hostname.toLowerCase();

        // Block localhost-style hostnames.
        if (
            hostname === 'localhost' ||
            hostname === '127.0.0.1' ||
            hostname === '::1'
        ) {
            return NextResponse.json({ success: false, error: 'Localhost URLs are not allowed.' }, { status: 400 });
        }

        // Block common private and link-local IPv4 ranges.
        const isPrivateIpv4 =
            /^10\./.test(hostname) || // 10.0.0.0/8
            /^192\.168\./.test(hostname) || // 192.168.0.0/16
            /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname) || // 172.16.0.0 - 172.31.255.255
            /^169\.254\./.test(hostname); // link-local

        if (isPrivateIpv4) {
            return NextResponse.json({ success: false, error: 'Private network URLs are not allowed.' }, { status: 400 });
        }

        const safeUrl = parsedUrl.toString();

        const startTime = Date.now();

        let html = '';
        const responseHeaders: Record<string, string> = {};
        let statusCode = 0;
        const isSSL = safeUrl.startsWith('https://');

        try {
            const res = await fetch(safeUrl, {
                headers: { 'User-Agent': 'Mowglai-Audit-Bot/1.0' },
                signal: AbortSignal.timeout(12000),
                redirect: 'follow',
            });
            statusCode = res.status;
            res.headers.forEach((v, k) => { responseHeaders[k.toLowerCase()] = v; });
            if (res.ok) {
                html = await res.text();
            } else {
                return NextResponse.json({ success: false, error: `Failed to fetch: HTTP ${statusCode}`, url, timestamp: new Date().toISOString() });
            }
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Network error';
            return NextResponse.json({ success: false, error: `Could not reach the URL: ${msg}`, url, timestamp: new Date().toISOString() });
        }

        const loadTimeMs = Date.now() - startTime;
        const $ = cheerio.load(html);

        // ── Parse ─────────────────────────────────────────────────
        const title = $('title').first().text().trim() || null;
        const description = $('meta[name="description"]').attr('content') || null;
        const h1Count = $('h1').length;
        const canonicalTag = $('link[rel="canonical"]').attr('href') || null;
        const viewportTag = $('meta[name="viewport"]').attr('content') || null;
        const lang = $('html').attr('lang') || null;
        const charset = $('meta[charset]').attr('charset') || $('meta[http-equiv="Content-Type"]').attr('content') || null;
        const favicon = $('link[rel~="icon"]').attr('href') || null;
        const ogTitle = $('meta[property="og:title"]').attr('content') || null;
        const ogImage = $('meta[property="og:image"]').attr('content') || null;
        const scriptCount = $('script').length;
        const cssCount = $('link[rel="stylesheet"]').length;
        const images = $('img');
        const imageCount = images.length;
        const imagesWithAlt = images.filter((_: number, el: Element) => $(el).attr('alt') !== undefined && $(el).attr('alt') !== '').length;
        const wordCount = $('body').text().split(/\s+/).filter(Boolean).length;
        const hsts = responseHeaders['strict-transport-security'] || null;
        const xContentType = responseHeaders['x-content-type-options'] || null;

        // Email privacy
        const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+/g;
        const bodyText = $('body').html() || '';
        const emails = [...new Set(bodyText.match(emailRegex) || [])];

        // ── SEO Score ─────────────────────────────────────────────
        const seoItems: AuditDetail[] = [];
        let seoScore = 0;

        if (title) { seoScore += 15; seoItems.push({ title: 'Page Title', status: 'pass', value: 'Found', description: 'Your page has a title tag — the first thing users see in search results.' }); }
        else { seoItems.push({ title: 'Page Title', status: 'fail', value: 'Missing', description: 'Your page is missing a title tag.', recommendation: 'Add a descriptive <title> to the <head>.' }); }

        if (description) { seoScore += 15; seoItems.push({ title: 'Meta Description', status: 'pass', value: 'Found', description: 'A search-engine summary is present.' }); }
        else { seoItems.push({ title: 'Meta Description', status: 'fail', value: 'Missing', description: 'No meta description — search engines will guess.', recommendation: "Add <meta name='description' content='...'>" }); }

        if (h1Count > 0) { seoScore += 15; seoItems.push({ title: 'H1 Heading', status: 'pass', value: `${h1Count} found`, description: 'Clear main topic heading present.' }); }
        else { seoItems.push({ title: 'H1 Heading', status: 'fail', value: 'Missing', description: 'No H1 heading found.', recommendation: 'Add one H1 tag describing the main content.' }); }

        if (viewportTag) { seoScore += 15; seoItems.push({ title: 'Mobile Optimization', status: 'pass', value: 'Optimized', description: 'Page is configured for mobile devices.' }); }
        else { seoItems.push({ title: 'Mobile Optimization', status: 'fail', value: 'No viewport', description: 'Site may look broken on mobile.', recommendation: "Add <meta name='viewport' content='width=device-width, initial-scale=1'>" }); }

        if (canonicalTag) { seoScore += 15; seoItems.push({ title: 'Canonical Tag', status: 'pass', value: 'Found', description: 'Duplicate content issues are prevented.' }); }
        else { seoScore += 10; seoItems.push({ title: 'Canonical Tag', status: 'warning', value: 'Missing', description: 'May cause duplicate content issues.', recommendation: "Add <link rel='canonical' href='...'>" }); }

        if (lang) { seoScore += 15; seoItems.push({ title: 'Language Tag', status: 'pass', value: lang, description: 'Search engines know your content language.' }); }
        else { seoItems.push({ title: 'Language Tag', status: 'fail', value: 'Missing', description: 'Search engines may guess the wrong language.', recommendation: "Add lang attribute to your <html> tag." }); }

        if (favicon) { seoScore += 10; seoItems.push({ title: 'Favicon', status: 'pass', value: 'Found', description: 'Brand icon present in browser tabs.' }); }
        else { seoItems.push({ title: 'Favicon', status: 'warning', value: 'Missing', description: 'No favicon found.', recommendation: 'Add a favicon for brand recognition.' }); }

        // ── Performance Score ─────────────────────────────────────
        const perfItems: AuditDetail[] = [];
        let perfScore = 0;

        if (loadTimeMs < 800) { perfScore += 60; perfItems.push({ title: 'Server Response', status: 'pass', value: `${(loadTimeMs / 1000).toFixed(2)}s`, description: 'Excellent! Server responds instantly.' }); }
        else if (loadTimeMs < 2000) { perfScore += 40; perfItems.push({ title: 'Server Response', status: 'warning', value: `${(loadTimeMs / 1000).toFixed(2)}s`, description: 'Good, but could be faster. Aim under 0.8s.', recommendation: 'Optimize server cache or upgrade hosting.' }); }
        else { perfScore += 10; perfItems.push({ title: 'Server Response', status: 'fail', value: `${(loadTimeMs / 1000).toFixed(2)}s`, description: 'Slow. Users may leave before the page loads.', recommendation: 'Investigate server response times urgently.' }); }

        if (scriptCount < 15) { perfScore += 20; perfItems.push({ title: 'JavaScript Load', status: 'pass', value: `${scriptCount} scripts`, description: 'Low JS overhead — helps fast rendering.' }); }
        else if (scriptCount < 30) { perfScore += 10; perfItems.push({ title: 'JavaScript Load', status: 'warning', value: `${scriptCount} scripts`, description: 'Moderate JS. Watch out for slowdowns.', recommendation: 'Remove unused scripts.' }); }
        else { perfItems.push({ title: 'JavaScript Load', status: 'fail', value: `${scriptCount} scripts`, description: 'Too many scripts — likely slowing your site.', recommendation: 'Audit and remove unused JavaScript.' }); }

        if (cssCount < 10) { perfScore += 20; perfItems.push({ title: 'CSS Requests', status: 'pass', value: `${cssCount} files`, description: 'Efficient styling structure.' }); }
        else { perfScore += 10; perfItems.push({ title: 'CSS Requests', status: 'warning', value: `${cssCount} files`, description: 'Many CSS files delay rendering.', recommendation: 'Combine CSS files to reduce requests.' }); }

        // ── Security Score ────────────────────────────────────────
        const secItems: AuditDetail[] = [];
        let secScore = 0;

        if (isSSL) { secScore += 40; secItems.push({ title: 'SSL Certificate', status: 'pass', value: 'Active', description: 'Your site is encrypted and secure for visitors.' }); }
        else { secItems.push({ title: 'SSL Certificate', status: 'fail', value: 'Missing', description: 'Not secure — browsers will warn visitors.', recommendation: 'Install an SSL certificate (HTTPS) immediately.' }); }

        if (hsts) { secScore += 20; secItems.push({ title: 'HSTS Header', status: 'pass', value: 'Active', description: 'Enforcing secure connections strictly.' }); }
        else { secItems.push({ title: 'HSTS Header', status: 'warning', value: 'Missing', description: 'HSTS header missing.', recommendation: 'Enable HSTS to prevent protocol downgrade attacks.' }); }

        if (xContentType?.toLowerCase() === 'nosniff') { secScore += 20; secItems.push({ title: 'MIME Protection', status: 'pass', value: 'Active', description: 'Prevents browsers from misreading file types.' }); }
        else { secItems.push({ title: 'MIME Protection', status: 'warning', value: 'Missing', description: 'X-Content-Type-Options header missing.', recommendation: "Add 'X-Content-Type-Options: nosniff' header." }); }

        if (emails.length === 0) { secScore += 20; secItems.push({ title: 'Email Privacy', status: 'pass', value: 'Secure', description: 'No plain-text email addresses exposed.' }); }
        else { secItems.push({ title: 'Email Privacy', status: 'warning', value: `${emails.length} exposed`, description: 'Emails found in source — bots can scrape these.', recommendation: 'Use contact forms or obfuscate email addresses.' }); }

        // ── Content Score ─────────────────────────────────────────
        const contentItems: AuditDetail[] = [];
        let contentScore = 0;

        if (wordCount > 300) { contentScore += 40; contentItems.push({ title: 'Content Volume', status: 'pass', value: `~${wordCount} words`, description: 'Enough text for search engines to understand your page.' }); }
        else { contentScore += 20; contentItems.push({ title: 'Content Volume', status: 'warning', value: `~${wordCount} words`, description: 'Thin content — hard for search engines to rank.', recommendation: 'Add more descriptive text content.' }); }

        if (imageCount === 0) { contentScore += 30; contentItems.push({ title: 'Images', status: 'warning', value: 'None', description: 'No images found. Visuals help engagement.', recommendation: 'Consider adding relevant images.' }); }
        else if (imageCount === imagesWithAlt) { contentScore += 30; contentItems.push({ title: 'Image Accessibility', status: 'pass', value: 'All tagged', description: 'All images have alt text — great for SEO and accessibility.' }); }
        else { contentScore += 10; contentItems.push({ title: 'Image Accessibility', status: 'warning', value: `${imageCount - imagesWithAlt} missing alt`, description: 'Some images lack descriptions.', recommendation: "Add 'alt' attributes to all images." }); }

        if (ogTitle && ogImage) { contentScore += 30; contentItems.push({ title: 'Social Sharing', status: 'pass', value: 'Optimized', description: 'Your site looks good when shared on social media.' }); }
        else if (ogTitle || ogImage) { contentScore += 15; contentItems.push({ title: 'Social Sharing', status: 'warning', value: 'Partial', description: 'Partial Open Graph config.', recommendation: 'Ensure both og:title and og:image are set.' }); }
        else { contentItems.push({ title: 'Social Sharing', status: 'fail', value: 'Missing', description: 'Links will look empty when shared on social media.', recommendation: 'Add Open Graph meta tags.' }); }

        return NextResponse.json({
            url,
            success: true,
            timestamp: new Date().toISOString(),
            categories: {
                seo: { score: Math.min(100, seoScore), title: 'Search Visibility', description: 'How easily potential customers find you on Google.', items: seoItems },
                performance: { score: Math.min(100, perfScore), title: 'Speed & Experience', description: 'How fast your site feels. Slow sites lose customers.', items: perfItems },
                security: { score: Math.min(100, secScore), title: 'Trust & Security', description: 'Is your site safe for visitors?', items: secItems },
                content: { score: Math.min(100, contentScore), title: 'Content Health', description: 'Does content follow best practices for engagement?', items: contentItems },
            },
        });

    } catch (err) {
        return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
    }
}

type AuditDetail = {
    title: string;
    status: 'pass' | 'fail' | 'warning';
    value: string;
    description: string;
    recommendation?: string;
};
