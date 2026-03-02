import { useEffect, useRef } from 'react';

interface DiagonalTextureSweepConfig {
    revealStart?: number; // Scroll % where texture starts (0-100)
    revealPeak?: number; // Scroll % where texture is fully visible (0-100)
    fadeOutStart?: number; // Scroll % where texture starts disappearing (0-100)
}

export function useDiagonalTextureSweep(
    textureLayerRef: React.RefObject<HTMLDivElement>,
    config: DiagonalTextureSweepConfig = {}
) {
    const {
        revealStart = 5,
        revealPeak = 30,
        fadeOutStart = 70,
    } = config;

    const scrollTickingRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollTickingRef.current) {
                requestAnimationFrame(() => {
                    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrolled = window.scrollY;
                    const scrollPercent = (scrolled / scrollHeight) * 100;

                    if (textureLayerRef.current) {
                        const scrollPercent_ = scrollPercent;
                        let maskOpacity: number;
                        let positionPercent: number;

                        if (scrollPercent_ <= revealStart) {
                            maskOpacity = 0;
                            positionPercent = -50; // Start from top-left (off-screen)
                        } else if (scrollPercent_ <= revealPeak) {
                            // Sweeping phase - diagonal reveal
                            const revealProgress = (scrollPercent_ - revealStart) / (revealPeak - revealStart);
                            maskOpacity = revealProgress;
                            positionPercent = revealProgress * 100; // Move from -50 to 50
                        } else if (scrollPercent_ < fadeOutStart) {
                            // Peak visibility - texture full
                            maskOpacity = 1;
                            positionPercent = 50;
                        } else {
                            // Fade out phase - texture sweeps to bottom-right
                            const fadeRange = 100 - fadeOutStart;
                            const fadeProgress = (scrollPercent_ - fadeOutStart) / fadeRange;
                            maskOpacity = Math.max(0, 1 - fadeProgress);
                            positionPercent = 50 + (fadeProgress * 50); // Move from 50 to 100 (bottom-right)
                        }

                        // Apply opacity
                        textureLayerRef.current.style.opacity = maskOpacity.toString();

                        // Apply diagonal sweep transform
                        const posX = 25 + (positionPercent / 2); // 25% to 75%
                        const posY = 25 + (positionPercent / 2);

                        textureLayerRef.current.style.transform = `
                            translate(0, 0) 
                            scale(${0.8 + (maskOpacity * 0.4)})
                        `;

                        // Update mask gradient for diagonal sweep
                        const maskStr = `
                            radial-gradient(
                                ellipse 800px 800px at ${posX}% ${posY}%,
                                rgba(0,0,0,1) 0%,
                                rgba(0,0,0,0.3) 50%,
                                rgba(0,0,0,0) 100%
                            )
                        `;
                        textureLayerRef.current.style.webkitMaskImage = maskStr;
                        textureLayerRef.current.style.maskImage = maskStr;
                    }

                    scrollTickingRef.current = false;
                });
                scrollTickingRef.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [revealStart, revealPeak, fadeOutStart]);
}
