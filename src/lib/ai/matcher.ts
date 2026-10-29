import { allTemplates, Template } from '@/data/templates';
import {
    OnboardingInput,
    OnboardingAnalysisResult,
    MatchedTemplateInfo,
    BusinessSector,
    PricingSuggestion,
    WebsitePageBlueprint,
    SeoGeoStrategy
} from './types';

// Map natural sectors or keywords to template keys
export function resolveSector(input: OnboardingInput): string {
    const text = `${input.businessSector} ${input.customSectorDescription || ''} ${input.businessName}`.toLowerCase();

    if (text.includes('dental') || text.includes('doctor') || text.includes('clinic') || text.includes('hospital') || text.includes('medic') || text.includes('health')) {
        return 'healthcare';
    }
    if (text.includes('gym') || text.includes('fitness') || text.includes('workout') || text.includes('trainer') || text.includes('crossfit')) {
        return 'gym';
    }
    if (text.includes('yoga') || text.includes('wellness') || text.includes('spa') || text.includes('meditation') || text.includes('retreat')) {
        return 'yoga';
    }
    if (text.includes('school') || text.includes('college') || text.includes('coaching') || text.includes('academy') || text.includes('tutor') || text.includes('course') || text.includes('education')) {
        return 'school';
    }
    if (text.includes('estate') || text.includes('property') || text.includes('builder') || text.includes('apartment') || text.includes('architect') || text.includes('interior')) {
        return 'real-estate';
    }
    if (text.includes('restaurant') || text.includes('cafe') || text.includes('food') || text.includes('dining') || text.includes('bakery') || text.includes('burger') || text.includes('kitchen')) {
        return 'restaurant';
    }
    if (text.includes('shop') || text.includes('store') || text.includes('product') || text.includes('ecom') || text.includes('fashion') || text.includes('clothing') || text.includes('gadget')) {
        return 'ecommerce';
    }
    if (text.includes('portfolio') || text.includes('agency') || text.includes('freelance') || text.includes('developer') || text.includes('photographer') || text.includes('consultant')) {
        return 'portfolio';
    }

    return input.businessSector !== 'other' && allTemplates[input.businessSector] ? input.businessSector : 'portfolio';
}

function templateToMatchedInfo(t: Template, sector: string, score: number, reasons: string[]): MatchedTemplateInfo {
    return {
        id: t.id,
        title: t.title,
        sector,
        description: t.description,
        previewUrl: `/previews/${t.id}.html`,
        matchScore: score,
        matchedReasons: reasons,
        features: t.features,
        structure: t.structure,
        type: t.type
    };
}

export function generateSeoStrategy(input: OnboardingInput, sector: string): SeoGeoStrategy {
    const city = input.city.trim() || 'NCR';
    const name = input.businessName.trim() || 'Your Business';
    const sectorClean = sector.replace('-', ' ');

    const primaryKeywords = [
        `${name} ${city}`,
        `Best ${sectorClean} in ${city}`,
        `Top rated ${sectorClean} services ${city}`,
        `Affordable ${sectorClean} solutions ${city}`,
        `Professional ${sectorClean} consultation ${city}`
    ];

    const localKeywords = [
        `${sectorClean} near me in ${city}`,
        `${name} contact number ${city}`,
        `Verified ${sectorClean} in ${city}`,
        `${city} best ${sectorClean} booking`
    ];

    const geoSearchQuestions = [
        `Which is the best ${sectorClean} in ${city}?`,
        `How to book consultation at ${name} in ${city}?`,
        `What are the packages and prices for ${sectorClean} in ${city}?`,
        `Why choose ${name} for ${sectorClean} in ${city}?`
    ];

    const metaTitle = `${name} | Premier ${sectorClean.charAt(0).toUpperCase() + sectorClean.slice(1)} in ${city}`;
    const metaDescription = `Discover ${name}, the premier ${sectorClean} destination in ${city}. Fast online booking, transparent pricing, and 5-star customer experience.`;

    const schemaType = sector === 'healthcare'
        ? 'MedicalBusiness'
        : sector === 'restaurant'
        ? 'FoodEstablishment'
        : sector === 'gym' || sector === 'yoga'
        ? 'HealthAndBeautyBusiness'
        : sector === 'school'
        ? 'EducationalOrganization'
        : sector === 'real-estate'
        ? 'RealEstateAgent'
        : sector === 'ecommerce'
        ? 'Store'
        : 'LocalBusiness';

    const schemaJsonLd = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        name: name,
        description: metaDescription,
        address: {
            '@type': 'PostalAddress',
            addressLocality: city,
            addressCountry: 'IN'
        },
        telephone: input.phone || '+91-9452476331',
        url: `https://mowglai.com/client/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'))}`,
        priceRange: input.budget.includes('5,000') ? '₹₹' : input.budget.includes('9,999') ? '₹₹₹' : '₹₹₹₹'
    };

    return {
        primaryKeywords,
        localKeywords,
        geoSearchQuestions,
        metaTitle,
        metaDescription,
        schemaType,
        schemaJsonLd
    };
}

export function generatePricingTier(input: OnboardingInput, sector: string): PricingSuggestion {
    const budgetRaw = input.budget || '';

    if (budgetRaw.includes('5,000') || budgetRaw.toLowerCase().includes('starter')) {
        return {
            tierName: 'Starter Growth Launch',
            priceInr: '₹5,000',
            priceUsd: '$55',
            deliveryTime: '48 Hours',
            features: [
                'Conversion-Focused Single-Page Design',
                'Direct WhatsApp Click-to-Chat Integration',
                'Mobile & Tablet Ultra-Responsive Layout',
                'Google Local Maps & JSON-LD SEO Schema',
                '1 Month Security & Maintenance Support'
            ],
            recommendedReason: 'Best for getting online instantly with zero friction and maximum local conversion.',
            planId: 'plan_SG1iI7omyDN39z'
        };
    }

    if (budgetRaw.includes('9,999') || budgetRaw.toLowerCase().includes('medium') || budgetRaw.toLowerCase().includes('growth')) {
        return {
            tierName: 'Advanced Architecture Engine',
            priceInr: '₹9,999',
            priceUsd: '$110',
            deliveryTime: '5-7 Days',
            features: [
                'Up to 5 Tailored Next.js Pages',
                'Smooth GSAP & Liquid Micro-Animations',
                'Dynamic Lead Management / Contact CRM',
                'Full Local GEO Keyword Optimization',
                '3 Months Priority Care & Google Analytics 4'
            ],
            recommendedReason: 'Recommended for competitive positioning, authority, and multi-service presentation.',
            planId: 'plan_SG1j6DcHgFk70v'
        };
    }

    // Default to E-Commerce / Full Stack (₹12,999 / ₹14,999)
    return {
        tierName: 'Commerce & Custom WebApp Hub',
        priceInr: '₹12,999',
        priceUsd: '$149',
        deliveryTime: '7-10 Days',
        features: [
            'End-to-End Product / Appointment Engine',
            'Razorpay / UPI / Card Instant Payment Flow',
            'Interactive Customer Booking / Dashboard',
            'Full GEO & AI Engine (LLMs.txt & Rich Schema)',
            '6 Months Dedicated Support + Performance Guarantee'
        ],
        recommendedReason: 'Best for businesses needing automated online transactions, bookings, and scaling.',
        planId: 'plan_SG1jkJ8tcJTgOS'
    };
}

export function generateWebsiteBlueprint(sector: string, businessName: string): { recommendedType: 'Single Page Landing' | 'Multi-Page Business Site' | 'E-Commerce Storefront' | 'Custom WebApp'; pages: WebsitePageBlueprint[] } {
    if (sector === 'ecommerce') {
        return {
            recommendedType: 'E-Commerce Storefront',
            pages: [
                { name: 'Home', slug: '/', purpose: 'Hero showcase, trending catalog, value props', sections: ['Hero Banner', 'Featured Collection', 'Trust Badges', 'Customer Reviews', 'Newsletter'] },
                { name: 'Shop / Catalog', slug: '/shop', purpose: 'Filterable product grid and fast add-to-cart', sections: ['Category Filters', 'Product Matrix', 'Quick View', 'Sorting Drawer'] },
                { name: 'Cart & Checkout', slug: '/checkout', purpose: 'Zero-dropoff instant checkout', sections: ['Order Summary', 'Razorpay / UPI Gateway', 'Instant Invoice'] }
            ]
        };
    }

    if (sector === 'healthcare' || sector === 'real-estate' || sector === 'school') {
        return {
            recommendedType: 'Multi-Page Business Site',
            pages: [
                { name: 'Home', slug: '/', purpose: 'First impression, core offerings, quick booking', sections: ['High-Trust Hero', 'Key Services Grid', 'Doctor/Expert Profiles', 'Direct Booking Form'] },
                { name: 'Services / Facilities', slug: '/services', purpose: 'Detailed breakdown of specializations', sections: ['Treatment Matrix', 'Pricing / Insurance', 'FAQs'] },
                { name: 'About & Credentials', slug: '/about', purpose: 'Establish medical / institution trust', sections: ['Story & Vision', 'Accreditations', 'Patient Reviews'] },
                { name: 'Contact & Location', slug: '/contact', purpose: 'Physical footfall and appointments', sections: ['Interactive Map', 'Emergency Dial', 'Appointment Calendar'] }
            ]
        };
    }

    return {
        recommendedType: 'Single Page Landing',
        pages: [
            {
                name: 'Landing Experience',
                slug: '/',
                purpose: 'Turn visitors into direct inquiries within 60 seconds',
                sections: ['Punchy Hero Offer', 'Problem & Solution', 'Interactive Portfolio / Gallery', 'Pricing Tiers', 'WhatsApp Quick Contact CTA']
            }
        ]
    };
}

export function analyzeClientOnboarding(input: OnboardingInput): OnboardingAnalysisResult {
    const sectorKey = resolveSector(input);
    const sectorTemplates = allTemplates[sectorKey] || allTemplates['portfolio'] || [];

    const primaryT = sectorTemplates[0] || {
        id: 'port-1',
        title: 'Creative Agency',
        description: 'Bold agency site with modern aesthetics.',
        features: ['Responsive', 'Modern Design', 'Lead Capture'],
        structure: 'Multi Page',
        type: 'Full Website'
    } as Template;

    const altTemplates = sectorTemplates.slice(1, 3);

    const primaryInfo = templateToMatchedInfo(
        primaryT,
        sectorKey,
        98,
        [
            `Tailored architecture for ${input.businessSector} with high visual impact`,
            `Pre-optimized for ${input.primaryGoal || 'high conversion'}`,
            `Tested responsive performance with sub-second loading`
        ]
    );

    const alternativesInfo = altTemplates.map((t, idx) =>
        templateToMatchedInfo(
            t,
            sectorKey,
            92 - idx * 4,
            [`Alternative styling for ${input.businessSector}`, `Supports ${t.features.join(', ')}`]
        )
    );

    const seo = generateSeoStrategy(input, sectorKey);
    const pricing = generatePricingTier(input, sectorKey);
    const blueprint = generateWebsiteBlueprint(sectorKey, input.businessName);

    const id = `rec_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    return {
        id,
        createdAt: new Date().toISOString(),
        businessProfile: {
            name: input.businessName || 'Your Business',
            sector: sectorKey,
            city: input.city || 'Delhi NCR',
            tagline: `Leading ${sectorKey.replace('-', ' ')} solutions crafted for measurable growth.`,
            targetAudience: `Customers and clients searching for reliable, premium ${sectorKey.replace('-', ' ')} in ${input.city || 'India'}.`,
            uniqueSellingProposition: `Lightning-fast modern digital presence with instant booking & transparent pricing.`,
            brandTone: 'Modern, Trustworthy, High-Performance'
        },
        primaryTemplate: primaryInfo,
        alternativeTemplates: alternativesInfo,
        websiteStructure: blueprint,
        seoStrategy: seo,
        pricingSuggestion: pricing
    };
}

