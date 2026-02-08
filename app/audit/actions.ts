'use server'

import { z } from "zod";

const auditSchema = z.object({
    url: z.string().url({ message: "Please enter a valid URL (including http:// or https://)" }),
});

export type AuditDetail = {
    title: string;
    status: "pass" | "fail" | "warning";
    value: string;
    description: string; // Layman explanation
    recommendation?: string;
};

export type AuditCategory = {
    score: number;
    title: string;
    description: string;
    items: AuditDetail[];
}

export type AuditResult = {
    url: string;
    success: boolean;
    error?: string;
    timestamp: string;
    categories: {
        seo: AuditCategory;
        performance: AuditCategory;
        security: AuditCategory;
        content: AuditCategory;
    }
};

export async function analyzeWebsite(formData: FormData): Promise<AuditResult> {
    const rawUrl = formData.get("url") as string;

    // Basic Validation
    const validatedFields = auditSchema.safeParse({ url: rawUrl });

    if (!validatedFields.success) {
        return createErrorResult(rawUrl, validatedFields.error.errors[0].message);
    }

    const url = validatedFields.data.url;
    const startTime = Date.now();

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mowglai-Audit-Bot/1.0',
            },
            next: { revalidate: 0 } // No cache
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
        }

        const html = await response.text();
        const endTime = Date.now();
        const loadTimeMs = endTime - startTime;

        // --- SIMULATED ANALYSIS ---

        // 1. SSL Check
        const isSSL = url.startsWith("https://");

        // 2. SEO Basics
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : null;

        const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
        const description = descMatch ? descMatch[1].trim() : null;

        const h1Matches = [...html.matchAll(/<h1[^>]*>([^<]+)<\/h1>/gi)];

        // 3. Content
        const wordCount = html.replace(/<[^>]*>/g, ' ').split(/\s+/).length;

        // 4. Images
        const imgMatches = [...html.matchAll(/<img[^>]+>/gi)];
        const imageCount = imgMatches.length;
        const altMatches = [...html.matchAll(/<img[^>]+alt=["']([^"']+)["'][^>]*>/gi)];
        const imagesWithAlt = altMatches.length;

        // --- SCORING & CATEGORIZATION ---

        // SEO
        let seoScore = 0;
        const seoItems: AuditDetail[] = [];

        if (title) {
            seoScore += 40;
            seoItems.push({
                title: "Page Title",
                status: "pass",
                value: "Found",
                description: "Your page has a title tag. This is the first thing users see in search results."
            });
        } else {
            seoItems.push({
                title: "Page Title",
                status: "fail",
                value: "Missing",
                description: "Your page is missing a title tag.",
                recommendation: "Add a descriptive title tag (<title>) to the <head> of your page."
            });
        }

        if (description) {
            seoScore += 30;
            seoItems.push({
                title: "Meta Description",
                status: "pass",
                value: "Found",
                description: "A summary of your page is present for search engines."
            });
        } else {
            seoItems.push({
                title: "Meta Description",
                status: "fail",
                value: "Missing",
                description: "No summary found. Search engines will guess what your page is about.",
                recommendation: "Add a <meta name='description'> tag with a concise summary."
            });
        }

        if (h1Matches.length > 0) {
            seoScore += 30;
            seoItems.push({
                title: "Main Heading (H1)",
                status: "pass",
                value: `${h1Matches.length} Found`,
                description: "Your page has a clear main topic heading."
            });
        } else {
            seoItems.push({
                title: "Main Heading (H1)",
                status: "fail",
                value: "Missing",
                description: "No main heading found. It's hard to tell what the main topic is.",
                recommendation: "Add one <h1> tag that describes the main content of the page."
            });
        }


        // PERFORMANCE
        let perfScore = 0;
        const perfItems: AuditDetail[] = [];
        const loadTimeSec = (loadTimeMs / 1000).toFixed(2);

        if (loadTimeMs < 800) {
            perfScore = 100;
            perfItems.push({
                title: "Server Response Time",
                status: "pass",
                value: `${loadTimeSec}s`,
                description: "Incredible! Your website server responds instantly."
            });
        } else if (loadTimeMs < 2000) {
            perfScore = 70;
            perfItems.push({
                title: "Server Response Time",
                status: "warning",
                value: `${loadTimeSec}s`,
                description: "Good, but could be faster. Aim for under 0.8 seconds.",
                recommendation: "Optimize server cache or upgrade hosting."
            });
        } else {
            perfScore = 40;
            perfItems.push({
                title: "Server Response Time",
                status: "fail",
                value: `${loadTimeSec}s`,
                description: "Slow. Users may leave before the page loads.",
                recommendation: "Critical: Investigate server response times."
            });
        }

        // SECURITY
        let secScore = isSSL ? 100 : 0;
        const secItems: AuditDetail[] = [];
        if (isSSL) {
            secItems.push({
                title: "SSL Certificate",
                status: "pass",
                value: "Active",
                description: "Your site is secure. Data is encrypted specifically for your visitors."
            });
        } else {
            secItems.push({
                title: "SSL Certificate",
                status: "fail",
                value: "Missing",
                description: "Not Secure. thoroughBrowsers may warn users not to visit.",
                recommendation: "Install an SSL certificate immediately (HTTPS)."
            });
        }

        // CONTENT / STRUCTURE
        let contentScore = 50;
        const contentItems: AuditDetail[] = [];

        if (wordCount > 300) {
            contentScore += 25;
            contentItems.push({
                title: "Content Volume",
                status: "pass",
                value: "~" + wordCount + " words",
                description: "Good amount of text content for search engines to understand."
            });
        } else {
            contentItems.push({
                title: "Content Volume",
                status: "warning",
                value: "~" + wordCount + " words",
                description: "Thin content. It's hard search engines to rank pages with little text.",
                recommendation: "Add more descriptive text."
            });
        }

        const missingAlt = imageCount - imagesWithAlt;
        if (imageCount === 0) {
            contentScore += 25;
            contentItems.push({
                title: "Images",
                status: "warning",
                value: "None",
                description: "Visuals help engagement, but you have none.",
                recommendation: "Consider adding relevant images."
            });
        } else if (missingAlt === 0) {
            contentScore += 25;
            contentItems.push({
                title: "Image Accessibility",
                status: "pass",
                value: "Perfect",
                description: "All images have descriptions (Alt text). Great for accessibility."
            });
        } else {
            contentItems.push({
                title: "Image Accessibility",
                status: "warning",
                value: `${missingAlt} missing descriptions`,
                description: "Some images are missing descriptions for screen readers.",
                recommendation: "Add 'alt' attributes to describe your images."
            });
        }


        return {
            url,
            success: true,
            timestamp: new Date().toISOString(),
            categories: {
                seo: {
                    score: Math.min(100, Math.max(0, seoScore)),
                    title: "Search Visibility",
                    description: "How easily potential customers can find you on Google.",
                    items: seoItems
                },
                performance: {
                    score: Math.min(100, Math.max(0, perfScore)),
                    title: "Speed & Experience",
                    description: "How fast your site feels. Slow sites lose customers.",
                    items: perfItems
                },
                security: {
                    score: secScore,
                    title: "Trust & Security",
                    description: "Is your site safe for visitors? Essential for trust.",
                    items: secItems
                },
                content: {
                    score: Math.min(100, Math.max(0, contentScore)),
                    title: "Content Health",
                    description: "Does your content follow best practices for engagement?",
                    items: contentItems
                }
            }
        };

    } catch (error: any) {
        return createErrorResult(url, error.message || "Failed to analyze website. It might be blocking bots.");
    }
}

function createErrorResult(url: string, error: string): AuditResult {
    const emptyCategory = { score: 0, title: "", description: "", items: [] };
    return {
        url,
        success: false,
        error: error,
        timestamp: new Date().toISOString(),
        categories: {
            seo: { ...emptyCategory, title: "Search Visibility" },
            performance: { ...emptyCategory, title: "Speed & Experience" },
            security: { ...emptyCategory, title: "Trust & Security" },
            content: { ...emptyCategory, title: "Content Health" }
        }
    };
}
