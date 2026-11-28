import { detectSectorFromUrlOrText } from './analyzer';
import { generateBespokeWebsiteHtml } from './htmlGenerator';

export interface DemoLandingPageResult {
    domain: string;
    businessName: string;
    extractedFromSource: boolean;
    headline: string;
    html: string;
}

const ICONS = ['⚡', '🚀', '✨', '🛡️'];

function cleanMarkdownLine(line: string): string {
    return line
        .replace(/^#+\s*/, '')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[*_`~>]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

export async function generateDemoLandingPageFromUrl(rawUrl: string): Promise<DemoLandingPageResult> {
    const normalizedUrl = rawUrl.startsWith('http://') || rawUrl.startsWith('https://')
        ? rawUrl.trim()
        : `https://${rawUrl.trim()}`;

    let domain: string;
    try {
        domain = new URL(normalizedUrl).hostname.replace(/^www\./, '');
    } catch {
        domain = rawUrl.replace(/^https?:\/\//, '').split('/')[0];
    }

    const baseName = domain.split('.')[0] || 'Brand';
    const fallbackName = baseName.charAt(0).toUpperCase() + baseName.slice(1);

    let rawText = '';
    let extractedFromSource = false;

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 7500);
        const res = await fetch(`https://r.jina.ai/${normalizedUrl}`, {
            headers: { Accept: 'text/plain' },
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        if (res.ok) {
            rawText = await res.text();
            if (rawText.trim().length > 80) {
                extractedFromSource = true;
            }
        }
    } catch {
        // Fall back to domain-based generation if remote site blocks extraction
    }

    let businessName = fallbackName;
    let headline: string | undefined;
    let subheadline: string | undefined;
    const services: { title: string; desc: string; icon: string }[] = [];

    if (extractedFromSource) {
        const lines = rawText.split('\n').map((l) => l.trim()).filter(Boolean);

        const titleLine = lines.find((l) => l.toLowerCase().startsWith('title:'));
        if (titleLine) {
            const rawTitle = titleLine.replace(/^title:\s*/i, '').trim();
            const shortTitle = rawTitle.split(/\s*[|\-–—:]\s*/)[0]?.trim();
            if (shortTitle && shortTitle.length >= 2 && shortTitle.length <= 40) {
                businessName = shortTitle;
            }
        }

        const markdownStartedIdx = lines.findIndex((l) => l.toLowerCase().startsWith('markdown content:'));
        const contentLines = markdownStartedIdx >= 0 ? lines.slice(markdownStartedIdx + 1) : lines;

        const headings: string[] = [];
        const paragraphs: string[] = [];

        for (const line of contentLines) {
            if (line.startsWith('#')) {
                const cleaned = cleanMarkdownLine(line);
                if (cleaned.length >= 4 && cleaned.length <= 90 && !headings.includes(cleaned)) {
                    headings.push(cleaned);
                }
            } else if (!line.startsWith('http') && !line.startsWith('URL Source:') && !line.startsWith('Published Time:')) {
                const cleaned = cleanMarkdownLine(line);
                if (cleaned.length >= 35 && cleaned.length <= 240 && !cleaned.toLowerCase().includes('cookie')) {
                    paragraphs.push(cleaned);
                }
            }
        }

        if (headings.length > 0) {
            headline = headings[0];
        }
        if (paragraphs.length > 0) {
            subheadline = paragraphs[0];
        }

        for (let i = 1; i < headings.length && services.length < 4; i++) {
            const title = headings[i];
            const desc = paragraphs[i] || `Upgraded, high-conversion ${title.toLowerCase()} experience engineered for speed and clarity.`;
            services.push({
                title: title.slice(0, 48),
                desc: desc.slice(0, 140),
                icon: ICONS[services.length % ICONS.length],
            });
        }
    }

    const sector = detectSectorFromUrlOrText(`${normalizedUrl} ${rawText.slice(0, 2000)}`);
    const html = generateBespokeWebsiteHtml(
        {
            businessName,
            businessSector: sector,
            city: 'India & Global',
            budget: 'Custom',
            primaryGoal: 'Lead Generation',
        },
        {
            name: businessName,
            sector,
            headline,
            subheadline,
            services: services.length >= 2 ? services : undefined,
        }
    );

    return {
        domain,
        businessName,
        extractedFromSource,
        headline: headline || `Upgraded Experience for ${businessName}`,
        html,
    };
}
