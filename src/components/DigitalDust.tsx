"use client";

import { useEffect, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

interface Particle {
    x: number;
    y: number;
    z: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    blur: number;
}

export default function DigitalDust() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollY } = useScroll();

    // Smooth weighted tracking 
    const smoothScroll = useSpring(scrollY, { stiffness: 45, damping: 18 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        // Particle configuration 
        const particles: Particle[] = [];
        const numParticles = 80;

        for (let i = 0; i < numParticles; i++) {
            const z = Math.random(); // 0 (far) to 1 (near)
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: z, // Depth logic determining speed and visual presence
                size: z * 3.5 + 0.5, // 0.5px (far) to 4px (near)
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: (Math.random() - 0.5) * 0.4,
                opacity: z * 0.4 + 0.1, // 0.1 (far) to 0.5 (near)
                blur: z > 0.7 ? (z - 0.7) * 10 : 0 // Only very close particles blur out of focus
            });
        }

        let mouseX = width / 2;
        let mouseY = height / 2;
        let targetMouseX = mouseX;
        let targetMouseY = mouseY;

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        let lastScrollY = window.scrollY;
        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Interpolate mouse for smoother repel feeling
            mouseX += (targetMouseX - mouseX) * 0.1;
            mouseY += (targetMouseY - mouseY) * 0.1;

            const currentScrollY = smoothScroll.get();
            const scrollDelta = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;

            particles.forEach((p) => {
                // Parallax scroll effect (Z-depth logic)
                // Closer particles (higher z) move faster over the Y axis
                p.y -= scrollDelta * p.z * 1.5;

                // Ambient drift
                p.y += p.speedY;
                p.x += p.speedX;

                // Mouse repel (Friction/Gravity logic)
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const distDistSq = dx * dx + dy * dy;

                // Swirl effect if mouse is close
                if (distDistSq < 40000) { // roughly 200px radius
                    const dist = Math.sqrt(distDistSq);
                    const force = (200 - dist) / 200;
                    // Push particles away based on their depth (closer ones are pushed harder)
                    p.x -= dx * force * 0.04 * (p.z + 0.2);
                    p.y -= dy * force * 0.04 * (p.z + 0.2);
                }

                // Wrap around edges to maintain infinite dust
                if (p.y > height + 20) p.y = -20;
                if (p.y < -20) p.y = height + 20;
                if (p.x > width + 20) p.x = -20;
                if (p.x < -20) p.x = width + 20;

                // Draw Particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(197, 160, 89, ${p.opacity})`;

                if (p.blur > 0) {
                    ctx.shadowBlur = p.blur;
                    ctx.shadowColor = `rgba(197, 160, 89, ${p.opacity})`;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [smoothScroll]);

    // Set z-index to 2 to place it between the deep JungleBackground and the Main Content
    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[2] opacity-80 mix-blend-screen" />;
}
