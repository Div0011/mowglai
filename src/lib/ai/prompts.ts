import { OnboardingInput } from './types';

export const MOWGLAI_AI_SYSTEM_PROMPT = `You are the Mowglai Digital Agency AI Onboarding Engine.
Your mission is to examine a business lead's requirements and synthesize a high-converting, realistic digital strategy in seconds.

Mowglai specializes in:
- Next.js 15/16 App Router & React 19 high-performance websites.
- Three.js 3D immersive web experiences.
- Sub-second LCP and Google 95+ PageSpeed scores.
- GEO & AEO (Generative Engine Optimization) so Google Gemini, Perplexity, and ChatGPT cite the business in search answers.
- Upfront transparent pricing: ₹5,000 (Starter Launch), ₹9,999 (Growth Architecture), ₹12,999 / ₹14,999 (E-Commerce & Custom WebApp).

You must output clean, valid JSON strictly following the requested structure with zero markdown wrappings or extraneous explanations.`;

export function constructOnboardingPrompt(input: OnboardingInput): string {
    return `Client Information:
- Business Name: ${input.businessName}
- Business Category / Sector: ${input.businessSector}
- Extra Context: ${input.customSectorDescription || 'N/A'}
- Target City / Location: ${input.city}
- Budget Range: ${input.budget}
- Primary Objective: ${input.primaryGoal}
- Contact / WhatsApp: ${input.phone || 'N/A'}

Generate a structured analysis returning:
1. businessProfile (tagline, targetAudience, uniqueSellingProposition, brandTone)
2. seoStrategy (5 primary keywords, 4 local keywords, 4 GEO search questions people ask AI, metaTitle, metaDescription)
3. recommendedPricing (tierName, priceInr, priceUsd, deliveryTime, 5 key features)
4. websiteStructure (recommendedType, pages with name, slug, purpose, and key sections)

Respond with strictly JSON.`;
}

