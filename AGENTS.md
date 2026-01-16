# Mowglai Project Context & Guidelines

## 1. Project Overview
**Mowglai** is a premium, high-performance digital agency website with a galaxy/jungle theme.
- **Goal**: Create a stunning, "wow" factor first impression using clean 3D aesthetics, deep dark modes, and fluid animations while maintaining maximum performance.
- **Key Experience**: Smooth transitions, immersive 3D elements, and a feeling of "exploring" the agency.

## 2. Architecture & File Structure
This project uses **Next.js 15 (App Router)** with a split structure:

### Directory Structure
- **`app/`**: Contains ONLY routes, layouts, and pages.
  - All files here are **Server Components** by default.
  - `page.tsx`, `layout.tsx`, `not-found.tsx`, `error.tsx`.
- **`src/`**: Contains all source code logic.
  - **`components/`**: All React components (UI, specific features).
  - **`lib/`**: Utilities, helpers, constants.
  - **`hooks/`**: Custom React hooks.
  - **`types/`**: TypeScript type definitions.
  - **`animations/`**: GSAP/Framer Motion animation configurations.
- **`public/`**: Static assets (images, fonts, 3D models).

### Best Practices
- **Colocation**: Keep related logic together, but prefer the `src/` directory for reusable code.
- **Imports**: Use relative imports or configured aliases (check `tsconfig.json`).

## 3. Technology Stack
- **Framework**: Next.js 15 (React 19 RC)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS + Custom CSS Variables (`index.css`)
- **UI Library**: Shadcn UI (Radix Primitives)
- **Animations**: 
  - **GSAP**: For complex, timeline-based sequences and scroll triggers.
  - **Framer Motion**: For simple UI interactions and exit transitions.
  - **AOS**: For simple scroll-into-view reveals.
- **3D**: Three.js (@react-three/fiber, @react-three/drei)
- **Icons**: Lucide React

## 4. Development Guidelines

### Server vs. Client Components
1. **Server Components (Default)**:
   - Use for fetching data, accessing backend resources, and static content.
   - **Do NOT** use `useState`, `useEffect`, or event listeners here.
2. **Client Components**:
   - Add `"use client"` at the very top of the file.
   - Use only when interactivity (state, effects, browser APIs) is strictly necessary.
   - Push client components down the tree (leaf nodes) to maximize server rendering.

### Performance Rules
1. **Images**: ALWAYS use `next/image`. Set `priority` for LCP images (above the fold).
2. **Heavy Libraries**: Load Three.js and heavy GSAP components lazily if possible, or ensure they don't block the main thread.
3. **Fonts**: Use `next/font` to optimize loading and prevent layout shift.

### Styling & Theming
- **Tailwind First**: Use utility classes for 90% of styling.
- **CSS Variables**: Use CSS variables in `index.css` for theme colors to support potential light/dark switch or dynamic theming.
- **Responsiveness**: Mobile-first approach. Test on small screens (iPhone SE/13 mini size) up to large desktops.
  - **Safe Areas**: Respect `safe-area-inset-*` for mobile devices with notches/home bars.

## 5. Commands
- **Development**: `npm run dev` (Starts server on localhost:3000)
- **Build**: `npm run build` (Creates production build)
- **Start**: `npm start` (Runs the production build locally)
- **Lint**: `npm run lint`

## 6. Common Issues & Fixes
- **Hydration Errors**: Usually caused by invalid nesting (e.g., `<div>` inside `<p>`) or random values generated during render (use `useEffect` for randoms).
- **GSAP Context**: Always clean up GSAP animations in `useEffect` (or use `useGSAP` hook) to avoid memory leaks and double-firing in strict mode.
