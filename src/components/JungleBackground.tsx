"use client";

import { useEffect, useRef } from "react";
import { useDiagonalTextureSweep } from "@/hooks/useDiagonalTextureSweep";
import { useDeviceOptimization, getAnimationOptimizations } from "@/hooks/useDeviceOptimization";

const JungleBackground = () => {
    const maskRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textureLayerRef = useRef<HTMLDivElement>(null);
    
    const deviceInfo = useDeviceOptimization();
    const animationOptimizations = getAnimationOptimizations(deviceInfo);

    // Initialize diagonal texture sweep animation
    useDiagonalTextureSweep(textureLayerRef as React.RefObject<HTMLDivElement>, {
        revealStart: deviceInfo.isMobile ? 5 : 8,
        revealPeak: deviceInfo.isMobile ? 25 : 35,
        fadeOutStart: deviceInfo.isMobile ? 70 : 75,
    });

    useEffect(() => {
        let mouseTicking = false;
        let scrollTicking = false;
        let animationFrameId: number;
        let handleMouseMove: ((e: MouseEvent) => void) | undefined;
        let handleMouseLeave: (() => void) | undefined;

        // Check if device is mobile/touch (no real mouse)
        const isMobile = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

        if (isMobile) {
            // --- MOBILE AUTO "WIND" EFFECT ---
            let t = 0;
            const animateWind = () => {
                t += 0.003; // Wind speed
                // Complex Lissajous curve for organic, random-feeling wind sweeps
                const vw = window.innerWidth;
                const vh = window.innerHeight;

                // Moves in a sweeping pattern
                const x = (vw / 2) + Math.sin(t) * (vw * 0.6) * Math.cos(t * 0.7);
                const y = (vh / 2) + Math.cos(t * 1.1) * (vh * 0.5) * Math.sin(t * 0.4);

                if (maskRef.current) {
                    // Soft, elongated ellipse for wind
                    const maskStr = `radial-gradient(ellipse 400px 300px at ${x}px ${y}px, transparent 0%, black 70%)`;
                    maskRef.current.style.webkitMaskImage = maskStr;
                    maskRef.current.style.maskImage = maskStr;
                }

                animationFrameId = requestAnimationFrame(animateWind);
            };
            animationFrameId = requestAnimationFrame(animateWind);

        } else {
            // --- DESKTOP MOUSE FOLLOW EFFECT ---
            handleMouseMove = (e: MouseEvent) => {
                if (!mouseTicking) {
                    requestAnimationFrame(() => {
                        if (maskRef.current) {
                            const maskStr = `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, transparent 0%, black 60%)`;
                            maskRef.current.style.webkitMaskImage = maskStr;
                            maskRef.current.style.maskImage = maskStr;
                        }
                        mouseTicking = false;
                    });
                    mouseTicking = true;
                }
            };

            handleMouseLeave = () => {
                requestAnimationFrame(() => {
                    if (maskRef.current) {
                        const maskStr = `radial-gradient(circle 250px at -1000px -1000px, transparent 0%, black 60%)`;
                        maskRef.current.style.webkitMaskImage = maskStr;
                        maskRef.current.style.maskImage = maskStr;
                    }
                });
            };

            window.addEventListener("mousemove", handleMouseMove, { passive: true });
            document.documentElement.addEventListener("mouseleave", handleMouseLeave, { passive: true });
            handleMouseLeave(); // Hide initially until mouse enters
        }

        // --- GLOBAL SCROLL PARALLAX ---
        const handleScroll = () => {
            if (!scrollTicking) {
                requestAnimationFrame(() => {
                    if (bgRef.current) {
                        bgRef.current.style.backgroundPosition = `center ${-window.scrollY * 0.4}px`;
                    }
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            if (!isMobile) {
                if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
                if (handleMouseLeave) document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-[100] overflow-hidden pointer-events-none bg-background">
            {/* 0. Base Gradient Layer - Always visible, solid color at footer */}
            <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-b transition-colors duration-1000 
                /* Dark Mode: Palm Leaf -> Dark Green -> Deep Green */
                dark:from-[#799851] dark:via-[#47622A] dark:to-[#374426] 
                /* Light Mode: Off-white/Peach (#FDF3E7) -> Golden (#D4AF37) */
                from-[#FDF3E7] via-[#EBD5B3] to-[#D4AF37]"
            />

            {/* 1. Scroll-Triggered Textured Background Layer */}
            <div
                ref={textureLayerRef}
                className="absolute inset-0 pointer-events-none w-full h-full transition-opacity duration-500"
                style={{
                    opacity: 0,
                    willChange: 'opacity, transform',
                }}
            >
                {/* Textured Overlay */}
                <div
                    ref={bgRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                        backgroundImage: 'url(/floral_texture_custom.jpg)',
                        backgroundSize: '400px',
                        backgroundRepeat: 'repeat',
                        filter: "brightness(0.85) contrast(1.15)",
                        opacity: 1,
                        willChange: "background-position",
                    }}
                />
                
                {/* Texture Gradient Overlay for smoother blending */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b 
                    dark:from-[#799851]/80 dark:via-[#47622A]/70 dark:to-[#374426]/60
                    from-[#FDF3E7]/70 via-[#EBD5B3]/60 to-[#D4AF37]/50 
                    pointer-events-none"
                />
            </div>

            {/* 2. Fog Cover: Contains the Gradient and Atmosphere layers */}
            <div
                ref={maskRef}
                className="absolute inset-0 pointer-events-none w-full h-full transition-opacity duration-300"
                style={{
                    willChange: "mask-image, -webkit-mask-image",
                }}
            >
                {/* Atmosphere Layer - Overlays that stay with the viewport */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Dappled light effects - Subtle pulses */}
                    {!animationOptimizations.disableHeavyEffects && (
                        <>
                            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 dark:bg-green-900/10 rounded-full blur-[120px] animate-pulse will-change-[opacity]" />
                            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 dark:bg-emerald-900/10 rounded-full blur-[150px] animate-bounce-slow will-change-transform" />
                        </>
                    )}

                    {/* Subtle leaf/texture overlay */}
                    <div className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />

                    {/* Vignette for depth - Stronger in dark mode */}
                    <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
                </div>
            </div>

            {/* 3. Floating Yellow Fireflies (Independent of mask, floats in front) */}
            {animationOptimizations.firefliesEnabled && (
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Firefly 1 - Smooth wandering path with glow */}
                    <div className="absolute w-2 h-2 rounded-full bg-[#E6B93D] blur-[1px] animate-firefly-1 shadow-[0_0_8px_rgba(230,185,61,0.8)]" />
                    
                    {/* Firefly 2 - Figure-8 pattern */}
                    <div className="absolute w-3 h-3 rounded-full bg-[#F5D061] blur-[2px] animate-firefly-2 shadow-[0_0_12px_rgba(245,208,97,0.9)]" />
                    
                    {/* Firefly 3 - Diagonal drift */}
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-[#FFFFFF] blur-[1px] animate-firefly-3 shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
                    
                    {/* Firefly 4 - Spiral motion */}
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#E6B93D] blur-[2px] animate-firefly-4 shadow-[0_0_10px_rgba(230,185,61,0.8)]" />
                    
                    {/* Firefly 5 - Pendulum swing */}
                    <div className="absolute w-2 h-2 rounded-full bg-[#F5D061] blur-[1px] animate-firefly-5 shadow-[0_0_8px_rgba(245,208,97,0.9)]" />
                </div>
            )}

            {/* 4. Interactive Floating Fireflies Canvas */}
            {animationOptimizations.firefliesEnabled && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none z-20"
                    style={{ mixBlendMode: 'screen' }}
                />
            )}

            <style>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translate3d(0, 0, 0); }
                    50% { transform: translate3d(0, -30px, 0); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 15s ease-in-out infinite;
                }
                
                /* Enhanced Firefly Animations with Organic Stitch Patterns */
                
                @keyframes fly-1 {
                    0% { top: 10%; left: -10%; transform: scale(0.8) rotate(0deg); opacity: 0; }
                    8% { opacity: 0.7; }
                    25% { top: 25%; left: 15%; transform: scale(1) rotate(45deg); }
                    50% { top: 40%; left: 35%; transform: scale(1.1) rotate(90deg); opacity: 0.9; }
                    75% { top: 20%; left: 65%; transform: scale(0.9) rotate(180deg); opacity: 0.8; }
                    92% { opacity: 0.3; }
                    100% { top: 50%; left: 110%; transform: scale(1.2) rotate(360deg); opacity: 0; }
                }
                
                @keyframes fly-2 {
                    0% { top: 80%; left: 110%; transform: scale(0.9) rotate(0deg); opacity: 0; }
                    10% { opacity: 0.6; }
                    30% { top: 60%; left: 70%; transform: scale(1.2) rotate(-60deg); }
                    50% { top: 35%; left: 40%; transform: scale(1) rotate(-120deg); opacity: 1; }
                    70% { top: 15%; left: 20%; transform: scale(1.1) rotate(-180deg); opacity: 0.8; }
                    90% { opacity: 0.4; }
                    100% { top: 5%; left: -15%; transform: scale(0.8) rotate(-360deg); opacity: 0; }
                }
                
                @keyframes fly-3 {
                    0% { top: -10%; left: 30%; transform: scale(1) rotate(0deg); opacity: 0; }
                    12% { opacity: 0.8; }
                    25% { top: 20%; left: 35%; transform: scale(1.05) rotate(90deg); }
                    42% { top: 50%; left: 50%; transform: scale(0.95) rotate(180deg); opacity: 1; }
                    68% { top: 75%; left: 65%; transform: scale(1.15) rotate(270deg); opacity: 0.7; }
                    88% { opacity: 0.2; }
                    100% { top: 110%; left: 75%; transform: scale(1.1) rotate(360deg); opacity: 0; }
                }
                
                @keyframes fly-4 {
                    0% { top: 110%; left: 60%; transform: scale(1.1) rotate(0deg); opacity: 0; }
                    15% { opacity: 0.7; }
                    30% { top: 70%; left: 55%; transform: scale(1) rotate(60deg); }
                    50% { top: 30%; left: 40%; transform: scale(1.2) rotate(120deg); opacity: 0.95; }
                    70% { top: -5%; left: 25%; transform: scale(0.9) rotate(240deg); opacity: 0.6; }
                    88% { opacity: 0.3; }
                    100% { top: -20%; left: 15%; transform: scale(1.05) rotate(360deg); opacity: 0; }
                }
                
                @keyframes fly-5 {
                    0% { top: 50%; left: -10%; transform: scale(0.95) rotate(0deg); opacity: 0; }
                    18% { opacity: 0.75; }
                    35% { top: 30%; left: 20%; transform: scale(1.1) rotate(-90deg); }
                    55% { top: 60%; left: 45%; transform: scale(1.05) rotate(-180deg); opacity: 0.9; }
                    75% { top: 85%; left: 80%; transform: scale(1.15) rotate(-270deg); opacity: 0.7; }
                    92% { opacity: 0.25; }
                    100% { top: 95%; left: 115%; transform: scale(1) rotate(-360deg); opacity: 0; }
                }

                .animate-firefly-1 { animation: fly-1 24s cubic-bezier(0.4, 0.0, 0.2, 1) infinite; filter: drop-shadow(0 0 8px rgba(230,185,61,0.6)); }
                .animate-firefly-2 { animation: fly-2 28s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite 2s; filter: drop-shadow(0 0 12px rgba(245,208,97,0.7)); }
                .animate-firefly-3 { animation: fly-3 26s cubic-bezier(0.34, 1.56, 0.64, 1) infinite 3s; filter: drop-shadow(0 0 6px rgba(255,255,255,0.8)); }
                .animate-firefly-4 { animation: fly-4 30s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite 1s; filter: drop-shadow(0 0 10px rgba(230,185,61,0.7)); }
                .animate-firefly-5 { animation: fly-5 25s cubic-bezier(0.42, 0, 0.58, 1) infinite 4s; filter: drop-shadow(0 0 8px rgba(245,208,97,0.8)); }
            `}</style>
        </div>
    );
};

export default JungleBackground;
