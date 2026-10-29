export type BusinessSector =
    | 'healthcare'
    | 'gym'
    | 'yoga'
    | 'school'
    | 'real-estate'
    | 'restaurant'
    | 'ecommerce'
    | 'portfolio'
    | 'saas'
    | 'services'
    | 'other';

export interface OnboardingInput {
    businessName: string;
    businessSector: BusinessSector;
    customSectorDescription?: string;
    city: string;
    budget: string; // e.g. "₹5,000", "₹9,999", "₹12,999", "₹25,000+"
    primaryGoal: string; // e.g. "WhatsApp Leads", "Online Payments", "Local SEO Rank", "Brand Authority"
    phone?: string;
    email?: string;
}

export interface MatchedTemplateInfo {
    id: string;
    title: string;
    sector: string;
    description: string;
    previewUrl: string;
    matchScore: number;
    matchedReasons: string[];
    features: string[];
    structure: 'Single Page' | 'Multi Page';
    type: string;
}

export interface WebsitePageBlueprint {
    name: string;
    slug: string;
    purpose: string;
    sections: string[];
}

export interface SeoGeoStrategy {
    primaryKeywords: string[];
    localKeywords: string[];
    geoSearchQuestions: string[];
    metaTitle: string;
    metaDescription: string;
    schemaType: string;
    schemaJsonLd: Record<string, unknown>;
}

export interface PricingSuggestion {
    tierName: string;
    priceInr: string;
    priceUsd: string;
    deliveryTime: string;
    features: string[];
    recommendedReason: string;
    planId?: string;
}

export interface OnboardingAnalysisResult {
    id: string;
    createdAt: string;
    businessProfile: {
        name: string;
        sector: string;
        city: string;
        tagline: string;
        targetAudience: string;
        uniqueSellingProposition: string;
        brandTone: string;
    };
    primaryTemplate: MatchedTemplateInfo;
    alternativeTemplates: MatchedTemplateInfo[];
    websiteStructure: {
        recommendedType: 'Single Page Landing' | 'Multi-Page Business Site' | 'E-Commerce Storefront' | 'Custom WebApp';
        pages: WebsitePageBlueprint[];
    };
    seoStrategy: SeoGeoStrategy;
    pricingSuggestion: PricingSuggestion;
}

