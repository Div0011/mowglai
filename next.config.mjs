import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT_MODE === 'true';

const nextConfig = {
    // Hostinger shared hosting uses a static export. Server deployments retain
    // standalone output and the Next.js response-header configuration.
    ...(isExport ? { output: 'export' } : { output: 'standalone' }),
    trailingSlash: true,
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Next.js does not support headers() in output: 'export'. For Hostinger,
    // the equivalent headers are configured in public/.htaccess instead.
    ...(!isExport ? {
        async headers() {
            return [{
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
                ],
            }];
        },
    } : {}),
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
    transpilePackages: ['gsap', 'three', '@react-three/fiber', '@react-three/drei'],
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    poweredByHeader: false,
    generateEtags: false,
};

export default withBundleAnalyzer(nextConfig);
