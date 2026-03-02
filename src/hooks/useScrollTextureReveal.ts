import { useEffect, useRef } from 'react';

interface ScrollTextureConfig {
    revealStart?: number; // Scroll percentage where texture starts appearing (0-100)
    revealPeak?: number; // Scroll percentage where texture is fully visible (0-100)
    fadeOutStart?: number; // Scroll percentage where texture starts fading (0-100)
    isMobile?: boolean;
}

export function useScrollTextureReveal(
    maskRef: React.RefObject<HTMLDivElement>,
    config: ScrollTextureConfig = {}
) {
    const {
        revealStart = 10,
        revealPeak = 35,
        fadeOutStart = 75,
        isMobile = false,
    } = config;

    const scrollTickingRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollTickingRef.current) {
                requestAnimationFrame(() => {
                    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrolled = window.scrollY;
                    const scrollPercent = (scrolled / scrollHeight) * 100;

                    if (maskRef.current) {
                        const calculateMaskOpacity = (): number => {
                            if (scrollPercent <= revealStart) {
                                return 0;
                            } else if (scrollPercent <= revealPeak) {
                                return (scrollPercent - revealStart) / (revealPeak - revealStart);
                            } else if (scrollPercent < fadeOutStart) {
                                return 1;
                            } else {
                                const fadeRange = 100 - fadeOutStart;
                                return Math.max(0, 1 - (scrollPercent - fadeOutStart) / fadeRange);
                            }
                        };

                        const maskOpacity = calculateMaskOpacity();

                        // Apply to the texture layer
                        maskRef.current.style.opacity = maskOpacity.toString();

                        // Optional: Adjust parallax based on device type
                        if (!isMobile) {
                            // Slight parallax on desktop for more depth
                            const parallaxOffset = scrollPercent * 0.5;
                            maskRef.current.style.transform = `translateY(${parallaxOffset * -0.2}px)`;
                        }
                    }

                    scrollTickingRef.current = false;
                });
                scrollTickingRef.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [revealStart, revealPeak, fadeOutStart, isMobile, maskRef]);
}
