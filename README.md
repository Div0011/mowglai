# Mowglai Galaxy Landing

This is the Mowglai Galaxy Landing page project, built with **Next.js 15 (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

## Project Info

**URL**: [https://mowglai.in](https://mowglai.in)

## Optimization Features

- **Server Components**: Core pages are rendered on the server to minimize client-side JavaScript (the "JavaScript Tax").
- **Image Optimization**: Powered by `next/image` with automatic WebP conversion and priority loading for LCP.
- **Dynamic Imports**: Heavy animation libraries (GSAP, Three.js) are loaded asynchronously.
- **Advanced SEO**: Automated metadata generation with JSON-LD schema support.

## Getting Started

To run this project locally:

1.  Clone the repository.
2.  Install dependencies:
    ```sh
    npm install
    # or
    bun install
    ```
3.  Start the development server:
    ```sh
    npm run dev
    ```

## Technologies

- **Framework**: Next.js 15
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Interactivity**: Framer Motion
- **Animations**: GSAP
- **3D Visuals**: Three.js (@react-three/fiber, @react-three/drei)
- **Deployment**: Optimized for Vercel/Cloudflare
