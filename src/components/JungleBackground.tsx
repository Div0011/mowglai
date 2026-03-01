"use client";

import { useEffect, useRef } from "react";

const JungleBackground = () => {
    const maskRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let scrollTicking = false;

        const handleScroll = () => {
            if (!scrollTicking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;

                    // --- FOG CLEARING ON SCROLL ---
                    // Compute exactly how far down the user has scrolled globally
                    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
                    const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

                    const vw = window.innerWidth;
                    const vh = window.innerHeight;
                    const maxRadius = Math.hypot(vw, vh);

                    // Easing mechanism: 
                    // 1) Radius grows rapidly at the top half (fog clears)
                    // 2) Radius shrinks dramatically back to 0 at the bottom half (fog returns)
                    // We square the clearFactor to make the fog aggressively return near the end
                    const clearFactor = Math.pow(Math.sin(scrollProgress * Math.PI), 2);
                    const baseRadius = 250 * clearFactor; // Base radius also dies at the bottom
                    const currentRadius = baseRadius + (maxRadius * 2 * clearFactor);

                    // Position is permanently anchored at Top-Right (100% 0%).
                    // - When radius grows, transparency expands from TR to BL (Fog clears from TR)
                    // - When radius shrinks, transparency shrinks to TR (Fog encroaches/returns from BL)
                    const currentX = 100;
                    const currentY = 0;

                    if (maskRef.current) {
                        const maskStr = `radial-gradient(circle ${currentRadius}px at ${currentX}% ${currentY}%, transparent 0%, transparent ${Math.max(0, currentRadius - 500)}px, black ${currentRadius}px)`;
                        maskRef.current.style.webkitMaskImage = maskStr;
                        maskRef.current.style.maskImage = maskStr;
                        maskRef.current.style.display = 'block';
                    }

                    // --- GLOBAL SCROLL PARALLAX ---
                    if (bgRef.current) {
                        bgRef.current.style.backgroundPosition = `center ${-scrollY * 0.4}px`;
                    }

                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial trigger to lock the starting position
        handleScroll();

        // --- INTERACTIVE FIREFLIES (CANVAS) ---
        const canvas = canvasRef.current;
        let fireflyFrameId: number;

        if (canvas) {
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Mouse tracking for fireflies
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let targetMouseX = mouseX;
            let targetMouseY = mouseY;

            const handleMouseMove = (e: MouseEvent) => {
                targetMouseX = e.clientX;
                targetMouseY = e.clientY;
            };

            window.addEventListener('mousemove', handleMouseMove, { passive: true });

            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            window.addEventListener('resize', resizeCanvas, { passive: true });

            // Firefly particle definition
            const fireflies = Array.from({ length: 45 }).map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2.5 + 0.5,
                baseSpeedX: (Math.random() - 0.5) * 0.5,
                baseSpeedY: (Math.random() - 0.5) * 0.5,
                speedX: 0,
                speedY: 0,
                life: Math.random() * Math.PI * 2,
                color: Math.random() > 0.8 ? '#ffffff' : (Math.random() > 0.4 ? '#F5D061' : '#E6B93D')
            }));

            const animateFireflies = () => {
                if (!ctx) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Smoothly lerp mouse tracker for organic movement
                mouseX += (targetMouseX - mouseX) * 0.05;
                mouseY += (targetMouseY - mouseY) * 0.05;

                fireflies.forEach(f => {
                    f.life += 0.02;

                    // Calculate distance to mouse
                    const dx = mouseX - f.x;
                    const dy = mouseY - f.y;
                    const dist = Math.hypot(dx, dy);

                    // If firefly gets too close to the cursor, scatter away! (Afraid effect)
                    if (dist < 180) {
                        const repelForce = (180 - dist) / 180; // Gets much stronger as the cursor gets closer
                        const pushX = -(dx / dist) * repelForce * 4; // Push forcefully away 
                        const pushY = -(dy / dist) * repelForce * 4;
                        f.speedX += pushX;
                        f.speedY += pushY;

                        // Add erratic, panicked flitting movement when scared
                        f.speedX += (Math.random() - 0.5) * 2.5;
                        f.speedY += (Math.random() - 0.5) * 2.5;

                        // Flash its light rapidly due to panic
                        f.life += 0.3;
                    } else {
                        // Drift smoothly back to their normal lazy wandering
                        f.speedX += (f.baseSpeedX - f.speedX) * 0.03;
                        f.speedY += (f.baseSpeedY - f.speedY) * 0.03;
                    }

                    // Apply friction and limits
                    f.speedX *= 0.95;
                    f.speedY *= 0.95;

                    f.x += f.speedX + Math.sin(f.life) * 0.5;
                    f.y += f.speedY + Math.cos(f.life * 0.8) * 0.5;

                    // Wrap around screen
                    if (f.x < -10) f.x = canvas.width + 10;
                    if (f.x > canvas.width + 10) f.x = -10;
                    if (f.y < -10) f.y = canvas.height + 10;
                    if (f.y > canvas.height + 10) f.y = -10;

                    // Pulsing glow effect
                    const pulse = Math.sin(f.life * 3) * 0.4 + 0.6;

                    ctx.beginPath();
                    ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
                    ctx.fillStyle = f.color;
                    ctx.globalAlpha = pulse * 0.8;
                    ctx.fill();

                    // Soft ambient blur rendered as secondary larger circle for performance
                    ctx.beginPath();
                    ctx.arc(f.x, f.y, f.size * 3, 0, Math.PI * 2);
                    ctx.fillStyle = f.color;
                    ctx.globalAlpha = pulse * 0.15;
                    ctx.fill();
                });

                fireflyFrameId = requestAnimationFrame(animateFireflies);
            };
            animateFireflies();

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('resize', resizeCanvas);
                cancelAnimationFrame(fireflyFrameId);
            };
        }
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-[100] overflow-hidden pointer-events-none bg-background" style={{ isolation: "isolate", transform: "translateZ(0)", contain: "paint" }}>
            {/* 0. Hidden 3D Floral Texture (Bottom-most Layer) - Infinite Parallax Wall */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Single Continuous Texture Wall */}
                <div
                    ref={bgRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                        backgroundImage: 'url(/floral_texture_custom.jpg)',
                        backgroundSize: '400px',
                        backgroundRepeat: 'repeat',
                        filter: "brightness(0.6) contrast(1.3)",
                        opacity: 0.25,
                        willChange: "background-position",
                    }}
                />
            </div>

            <div
                ref={maskRef}
                className="absolute inset-0 pointer-events-none w-full h-full transition-opacity duration-300"
                style={{
                    willChange: "mask-image, -webkit-mask-image",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden"
                }}
            >
                {/* 1. Base Gradient Layer - Spans entire page height */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b transition-colors duration-1000 
                    /* Dark Mode: Palm Leaf -> Dark Green -> Deep Green */
                    dark:from-[#799851] dark:via-[#47622A] dark:to-[#374426] 
                    /* Light Mode: Off-white/Peach (#FDF3E7) -> Golden (#D4AF37) */
                    from-[#FDF3E7] via-[#EBD5B3] to-[#D4AF37]"
                />

                {/* 2. Fixed Atmosphere Layer - Overlays that stay with the viewport */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Dappled light effects - Subtle pulses */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 dark:bg-green-900/10 rounded-full blur-[120px] animate-pulse will-change-[opacity]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 dark:bg-emerald-900/10 rounded-full blur-[150px] animate-bounce-slow will-change-transform" />

                    {/* Subtle leaf/texture overlay */}
                    <div className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />

                    {/* Vignette for depth - Stronger in dark mode */}
                    <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
                </div>
            </div>

            {/* 3. Interactive Floating Fireflies Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                style={{ mixBlendMode: 'screen' }}
            />

            <style>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translate3d(0, 0, 0); }
                    50% { transform: translate3d(0, -30px, 0); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 15s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default JungleBackground;
