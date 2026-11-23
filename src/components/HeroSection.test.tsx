import { describe, expect, it, mock } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';

mock.module('./TextReveal', () => ({
    default: ({ text }: { text: string }) => <span>{text}</span>,
}));

mock.module('./Magnetic', () => ({
    default: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

mock.module('../context/LanguageContext', () => ({
    useLanguage: () => ({
        t: {
            Common: {
                deliveringElegance: 'Delivering digital elegance.',
            },
        },
    }),
}));

const { default: HeroSection } = await import('./HeroSection');

describe('HeroSection', () => {
    it('renders MOWGLAI title and underlined CTA links', () => {
        const html = renderToStaticMarkup(<HeroSection />);

        expect(html).toContain('MOWGLAI');
        expect(html).toContain('AI Analyze');
        expect(html).toContain('AI Onboard');
        expect(html).toContain('href="/ai-analyze"');
        expect(html).toContain('href="/ai-onboard"');
    });
});
