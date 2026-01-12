# Mowglai Project Context & Guidelines

## Project Overview
**Mowglai** is a premium, high-performance digital agency website with a galaxy/jungle theme.
**Goal**: Create a stunning, "wow" factor first impression using clean 3D aesthetics, deep dark modes, and fluid animations while maintaining maximum performance.

## Architecture & Performance
Following a major migration to **Next.js (App Router)**, the following rules apply:

1. **Server Components by Default**:
   - Every new page should be a Server Component in the `app/` directory.
   - Use `"use client"` only for small, interactive leaf components to minimize the "JavaScript Tax".

2. **Image Optimization**:
   - NEVER use the standard `<img>` tag. Use `next/image`.
   - Set the `priority` attribute for any image that appears above the fold (Hero logos, main backgrounds) to optimize LCP.

3. **Heavy Library Management**:
   - Components using GSAP or Three.js must be loaded via `next/dynamic` with `{ ssr: false }` to avoid blocking the main thread.

## Device Support & Targets
**Primary Targets**: Latest flagship mobile devices (iPhone 15/16 Pro, Google Pixel 9 Pro, Samsung S24 Ultra).

### Mobile Responsiveness Rules
1. **Safe Area Insets**:
   - All fixed UI elements (Navigation, Toggles, Chatbot buttons) MUST respect `safe-area-inset-*`.
   - Use `env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`, etc.
   - Example padding: `bottom-[calc(2rem+env(safe-area-inset-bottom))]`.

2. **Viewport Fixes**:
   - `viewport-fit=cover` is configured in `layout.tsx` to allow full-bleed backgrounds behind device notches.

## Technology Stack
- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS + Vanilla CSS for granular control.
- **Animation**: GSAP (High-performance), Framer Motion (Interactivity), AOS (Scroll Reveals).
- **Icons**: Lucide React.
