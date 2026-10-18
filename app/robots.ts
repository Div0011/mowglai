import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/private/',
                    '/offline/',
                ],
            },
            {
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'Applebot',
                    'GPTBot',
                    'PerplexityBot',
                    'ClaudeBot',
                    'Google-Extended',
                    'Applebot-Extended',
                    'CCBot'
                ],
                allow: '/',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/offline/',
                ],
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
        ],
        sitemap: 'https://mowglai.com/sitemap.xml',
        host: 'https://mowglai.com',
    }
}
