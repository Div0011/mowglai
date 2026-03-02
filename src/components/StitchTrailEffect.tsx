"use client";

import { useEffect, useRef } from 'react';
import { useDeviceOptimization } from '@/hooks/useDeviceOptimization';

interface StitchPoint {
    x: number;
    y: number;
    age: number;
    maxAge: number;
}

export function StitchTrailEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const deviceInfo = useDeviceOptimization();
    const stitchPointsRef = useRef<StitchPoint[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>(0);

    useEffect(() => {
        if (deviceInfo.isMobile || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Track mouse position
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Add stitch point
            if (stitchPointsRef.current.length === 0 || 
                Math.hypot(
                    e.clientX - (stitchPointsRef.current[stitchPointsRef.current.length - 1]?.x || 0),
                    e.clientY - (stitchPointsRef.current[stitchPointsRef.current.length - 1]?.y || 0)
                ) > 12) {
                stitchPointsRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    age: 0,
                    maxAge: 80 // Frames for point to fade
                });
            }
        };

        // Animation loop
        const animate = () => {
            // Clear canvas with slight fade instead of complete clear (for trail effect)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'; // Very subtle fade
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw stitch points
            stitchPointsRef.current = stitchPointsRef.current.filter(point => point.age < point.maxAge);

            stitchPointsRef.current.forEach((point, index) => {
                point.age++;
                const progress = point.age / point.maxAge;

                // Opacity based on age
                const opacity = Math.cos(progress * Math.PI) * 0.6;

                // Draw glow circle
                const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 8);
                gradient.addColorStop(0, `rgba(230, 185, 61, ${opacity * 0.6})`);
                gradient.addColorStop(0.5, `rgba(230, 185, 61, ${opacity * 0.3})`);
                gradient.addColorStop(1, `rgba(230, 185, 61, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(point.x, point.y, 8 + progress * 4, 0, Math.PI * 2);
                ctx.fill();

                // Draw stitch line between consecutive points
                if (index > 0) {
                    const prevPoint = stitchPointsRef.current[index - 1];
                    ctx.strokeStyle = `rgba(197, 160, 89, ${opacity * 0.4})`;
                    ctx.lineWidth = 1.5;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.setLineDash([4, 4]);
                    ctx.beginPath();
                    ctx.moveTo(prevPoint.x, prevPoint.y);
                    ctx.lineTo(point.x, point.y);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }

                // Draw center dot
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw core glow at current mouse position
            if (stitchPointsRef.current.length > 0) {
                const coreGradient = ctx.createRadialGradient(
                    mouseRef.current.x,
                    mouseRef.current.y,
                    0,
                    mouseRef.current.x,
                    mouseRef.current.y,
                    30
                );
                coreGradient.addColorStop(0, 'rgba(197, 160, 89, 0.3)');
                coreGradient.addColorStop(1, 'rgba(197, 160, 89, 0)');

                ctx.fillStyle = coreGradient;
                ctx.beginPath();
                ctx.arc(mouseRef.current.x, mouseRef.current.y, 30, 0, Math.PI * 2);
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [deviceInfo.isMobile]);

    if (deviceInfo.isMobile) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-30"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
