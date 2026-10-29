---
name: Competitor Architectural Analyzer
description: Deconstruct competitor and inspiration websites into clean Next.js/Tailwind components, detect SEO/speed bottlenecks, and match with Mowglai's bespoke template catalog.
---

# Competitor Architectural Analyzer (Clean-Room Decompiler)

This skill enables agents to inspect public competitor websites or inspiration URLs, deconstruct their user-experience hierarchy, and synthesize original, high-performance Mowglai implementations without copying proprietary code.

## Guiding Principles (Clean Room Engineering)
1. **Never copy proprietary code, JavaScript bundles, or copyrighted assets.**
2. **Deconstruct Intent:** Identify the value propositions, conversion funnels, layout sections, and schema structures.
3. **Diagnose Deficiencies:** Identify PageSpeed bottlenecks (uncompressed scripts, blocking stylesheets, layout shifts) and SEO omissions (missing JSON-LD LocalBusiness schema).
4. **Synthesize Fresh:** Map the requirements to Mowglai's handcrafted templates (`public/previews/*.html` & `src/data/templates.ts`).

## Workflow Steps
1. **Decompile DOM & Layout Sections:**
   - Extract page structure: Hero Header, Offer Grid, Testimonials, Interactive Forms, Sticky CTA.
2. **Sector Classification:**
   - Match industry: Healthcare, Gym/Fitness, Yoga/Wellness, School/Coaching, Real Estate, Restaurant/Cafe, E-Commerce, or Creative Portfolio.
3. **Template Mapping:**
   - Select the primary matching template from `src/data/templates.ts`.
4. **Performance Benchmark:**
   - Contrast competitor's slow performance with Mowglai's 95+ PageSpeed and sub-second LCP benchmark.
5. **Feed Onboarding Engine:**
   - Auto-generate prefilled query parameters for `/ai-onboard` to bridge analysis directly into client proposal and checkout.
