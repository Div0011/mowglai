import { allTemplates, Template } from '@/data/templates';
import { BusinessSector } from './types';

export interface CompetitorAnalysisResult {
    id: string;
    targetUrl: string;
    domain: string;
    detectedSector: BusinessSector;
    estimatedTechStack: {
        frontend: string[];
        cmsOrPlatform: string;
        analytics: string[];
        isBloated: boolean;
    };
    detectedSections: {
        name: string;
        purpose: string;
        mowglaiEnhancement: string;
    }[];
    performanceComparison: {
        competitorScore: number;
        competitorLcp: string;
        mowglaiScore: number;
        mowglaiLcp: string;
        speedAdvantage: string;
    };
    seoAndConversionGaps: string[];
    matchedTemplate: {
        id: string;
        title: string;
        sector: string;
        previewUrl: string;
        matchScore: number;
        features: string[];
    };
    suggestedStartingPrice: string;
    prefillOnboardQuery: {
        businessName: string;
        businessSector: string;
        budget: string;
        primaryGoal: string;
    };
}

export function detectSectorFromUrlOrText(input: string): BusinessSector {
    const text = input.toLowerCase();

    if (text.includes('fit') || text.includes('gym') || text.includes('workout') || text.includes('cult') || text.includes('trainer')) {
        return 'gym';
    }
    if (text.includes('health') || text.includes('clinic') || text.includes('dental') || text.includes('practo') || text.includes('hospital') || text.includes('med')) {
        return 'healthcare';
    }
    if (text.includes('eat') || text.includes('food') || text.includes('rest') || text.includes('cafe') || text.includes('dining') || text.includes('zomato') || text.includes('swiggy')) {
        return 'restaurant';
    }
    if (text.includes('school') || text.includes('academy') || text.includes('edu') || text.includes('learn') || text.includes('course') || text.includes('unacademy') || text.includes('class')) {
        return 'school';
    }
    if (text.includes('estate') || text.includes('realty') || text.includes('property') || text.includes('nobroker') || text.includes('housing') || text.includes('home')) {
        return 'real-estate';
    }
    if (text.includes('shop') || text.includes('store') || text.includes('buy') || text.includes('cart') || text.includes('ecom') || text.includes('cloth') || text.includes('myntra')) {
        return 'ecommerce';
    }
    if (text.includes('yoga') || text.includes('zen') || text.includes('spa') || text.includes('meditat')) {
        return 'yoga';
    }

    return 'portfolio';
}

export function analyzeCompetitorUrl(rawUrl: string): CompetitorAnalysisResult {
    let cleanUrl = rawUrl.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
        cleanUrl = 'https://' + cleanUrl;
    }

    let domain = 'competitor.com';
    try {
        const parsed = new URL(cleanUrl);
        domain = parsed.hostname.replace('www.', '');
    } catch {
        domain = cleanUrl.replace(/https?:\/\//, '').split('/')[0];
    }

    const sector = detectSectorFromUrlOrText(cleanUrl + ' ' + domain);
    const domainNameCapitalized = domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);

    const templatesForSector = allTemplates[sector] || allTemplates['portfolio'] || [];
    const matchedT = templatesForSector[0] || ({
        id: 'port-1',
        title: 'Creative Agency',
        features: ['Modern Next.js', 'Sub-second LCP', 'Lead Form']
    } as Template);

    const detectedSections = [
        {
            name: 'Hero Value Hook',
            purpose: 'Grabs immediate visitor attention and states proposition',
            mowglaiEnhancement: 'Replaced with 3D liquid particle motion & instant 0.6s LCP load time'
        },
        {
            name: 'Core Offerings & Pricing Matrix',
            purpose: 'Shows packages, memberships, or service capabilities',
            mowglaiEnhancement: 'Streamlined into upfront transparent tiers with 1-click WhatsApp/Razorpay checkout'
        },
        {
            name: 'Social Proof & Trust Badges',
            purpose: 'Showcases testimonials, ratings, and Google reviews',
            mowglaiEnhancement: 'Verified review cards with dynamic micro-interactions'
        },
        {
            name: 'Sticky Lead Capture Bar',
            purpose: 'Drives phone calls or WhatsApp chat directly from mobile',
            mowglaiEnhancement: 'Direct WhatsApp click-to-chat + auto-location geotargeting'
        }
    ];

    const seoAndConversionGaps = [
        'Uncompressed legacy scripts causing ~3.8s mobile LCP bottleneck',
        'Missing Local Business JSON-LD schema — invisible to Gemini & ChatGPT answer engines',
        'No direct WhatsApp click-to-chat CTA causing high mobile bounce rate',
        'Unoptimized viewport meta tags leading to layout shifts on modern smartphones'
    ];

    return {
        id: `ana_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        targetUrl: cleanUrl,
        domain,
        detectedSector: sector,
        estimatedTechStack: {
            frontend: ['Legacy Webpack / jQuery', 'Heavy CSS Framework', 'Multiple Tracker Scripts'],
            cmsOrPlatform: 'Monolithic CMS / Custom Heavy Bundle',
            analytics: ['Google Tag Manager', 'Hotjar / Meta Pixel'],
            isBloated: true
        },
        detectedSections,
        performanceComparison: {
            competitorScore: 48,
            competitorLcp: '3.8s',
            mowglaiScore: 98,
            mowglaiLcp: '0.6s',
            speedAdvantage: '6.3x Faster'
        },
        seoAndConversionGaps,
        matchedTemplate: {
            id: matchedT.id,
            title: matchedT.title,
            sector: sector,
            previewUrl: `/previews/${matchedT.id}.html`,
            matchScore: 98,
            features: matchedT.features
        },
        suggestedStartingPrice: '₹5,000',
        prefillOnboardQuery: {
            businessName: `${domainNameCapitalized} Inspired Version`,
            businessSector: sector,
            budget: '₹5,000',
            primaryGoal: 'WhatsApp & Direct Phone Inquiries'
        }
    };
}
