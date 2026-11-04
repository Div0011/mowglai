import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT_MODE === 'true';

const nextConfig = {
    // Hostinger deploy = static export (out/); Vercel/server deploy = standalone
    ...(isExport ? { output: 'export' } : { output: 'standalone' }),
    trailingSlash: true,
    images: {
        unoptimized: true, // required for static export
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // SECURITY: consistent headers on every page (server + static export)
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
                ],
            },
        ];
    },
    // Experimental optimizations for better performance
    experimental: {
        optimizePackageImports: [
            'lucide-react',
            '@radix-ui/react-icons',
            'recharts',
            'framer-motion',
            'gsap',
            '@gsap/react',
        ],
        webpackBuildWorker: true,
        parallelServerBuildTraces: true,
    },
    // Ensure that GSAP and Three.js work correctly
    transpilePackages: ['gsap', 'three', '@react-three/fiber', '@react-three/drei'],
    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Performance optimizations for static export
    poweredByHeader: false,
    generateEtags: false,
};

export default withBundleAnalyzer(nextConfig);
