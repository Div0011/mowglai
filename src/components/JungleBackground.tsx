"use client";

import React from "react";

const JungleBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-dvh -z-[100] overflow-hidden pointer-events-none select-none">
            {/* 1. Deep Cosmic Jungle & Galaxy Base Gradient */}
            <div 
                className="fixed inset-0 w-full h-dvh transition-colors duration-1000
                /* Dark Mode: Deep Cosmic Obsidian -> Midnight Canopy -> Bioluminescent Jungle Depth */
                dark:bg-[radial-gradient(ellipse_130%_100%_at_50%_-15%,#0d2e24_0%,#061610_40%,#030906_100%)]
                /* Light Mode: Pristine Organic Ivory -> Soft Peach Mint */
                bg-[radial-gradient(ellipse_130%_100%_at_50%_-15%,#ffffff_0%,#f5fcf8_40%,#edf7f1_100%)]"
            />

            {/* 2. Atmospheric Bioluminescent Glow Layers */}
            <div className="fixed inset-0 w-full h-full pointer-events-none">
                {/* Top Center Emerald Nebula Bloom */}
                <div 
                    className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] lg:w-[1200px] h-[450px] sm:h-[650px] 
                    bg-gradient-to-b from-[#c8f169]/15 via-[#10b981]/10 to-transparent 
                    rounded-full blur-3xl md:blur-[140px] dark:opacity-80 opacity-40 animate-pulse transform-gpu" 
                />

                {/* Left Cosmic Canopy Ambient Orb */}
                <div 
                    className="absolute top-1/4 -left-[10%] w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] 
                    bg-[#10b981]/10 dark:bg-[#10b981]/8 rounded-full blur-3xl md:blur-[160px] 
                    animate-float-slow transform-gpu" 
                />

                {/* Right Starlight Lime Bloom */}
                <div 
                    className="absolute top-2/3 -right-[10%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] 
                    bg-[#c8f169]/10 dark:bg-[#c8f169]/8 rounded-full blur-3xl md:blur-[150px] 
                    animate-float-reverse transform-gpu" 
                />

                {/* Subtle Stardust Grid / Cosmic Mesh */}
                <div 
                    className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(rgba(200, 241, 105, 0.4) 1px, transparent 1px)`,
                        backgroundSize: '36px 36px',
                    }}
                />

                {/* Ultra-Fine Organic Velvet Vignette */}
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.06)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,4,0.65)_100%)] pointer-events-none" />
            </div>

            {/* 3. Floating Bioluminescent Jungle Spores & Fireflies (Desktop & Tablet) */}
            <div className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                {/* Spore 1 - Lime glow */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#c8f169] shadow-[0_0_12px_#c8f169] blur-[0.5px] animate-firefly-1 will-change-transform" />
                {/* Spore 2 - Emerald glow */}
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_14px_#10b981] blur-[1px] animate-firefly-2 will-change-transform" />
                {/* Spore 3 - Stardust white */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#ffffff] shadow-[0_0_8px_#c8f169] blur-[0.5px] animate-firefly-3 will-change-transform" />
                {/* Spore 4 - Vibrant Lime pulse */}
                <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#c8f169] shadow-[0_0_10px_#c8f169] blur-[0.5px] animate-firefly-4 will-change-transform" />
                {/* Spore 5 - Deep bioluminescent cyan */}
                <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_12px_#34d399] blur-[0.5px] animate-firefly-5 will-change-transform" />
            </div>

            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
                    50% { transform: translate3d(40px, -35px, 0) scale(1.08); }
                }
                @keyframes float-reverse {
                    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
                    50% { transform: translate3d(-35px, 30px, 0) scale(1.05); }
                }
                .animate-float-slow {
                    animation: float-slow 20s ease-in-out infinite;
                }
                .animate-float-reverse {
                    animation: float-reverse 22s ease-in-out infinite;
                }

                @keyframes fly-1 {
                    0% { transform: translate3d(-5vw, 15vh, 0) scale(0.8); opacity: 0; }
                    15% { opacity: 0.9; }
                    80% { opacity: 0.7; }
                    100% { transform: translate3d(105vw, 40vh, 0) scale(1.3); opacity: 0; }
                }
                @keyframes fly-2 {
                    0% { transform: translate3d(105vw, 75vh, 0) scale(1.2); opacity: 0; }
                    20% { opacity: 0.8; }
                    80% { opacity: 0.9; }
                    100% { transform: translate3d(-5vw, 18vh, 0) scale(0.8); opacity: 0; }
                }
                @keyframes fly-3 {
                    0% { transform: translate3d(25vw, -8vh, 0) scale(0.8); opacity: 0; }
                    25% { opacity: 1; }
                    75% { opacity: 0.6; }
                    100% { transform: translate3d(75vw, 108vh, 0) scale(1.2); opacity: 0; }
                }
                @keyframes fly-4 {
                    0% { transform: translate3d(65vw, 108vh, 0) scale(1.3); opacity: 0; }
                    20% { opacity: 0.85; }
                    80% { opacity: 0.5; }
                    100% { transform: translate3d(15vw, -8vh, 0) scale(0.9); opacity: 0; }
                }
                @keyframes fly-5 {
                    0% { transform: translate3d(-8vw, 55vh, 0) scale(1); opacity: 0; }
                    20% { opacity: 0.7; }
                    80% { opacity: 0.95; }
                    100% { transform: translate3d(108vw, 85vh, 0) scale(1.3); opacity: 0; }
                }

                .animate-firefly-1 { animation: fly-1 18s ease-in-out infinite; }
                .animate-firefly-2 { animation: fly-2 24s ease-in-out infinite 2s; }
                .animate-firefly-3 { animation: fly-3 20s ease-in-out infinite 5s; }
                .animate-firefly-4 { animation: fly-4 28s ease-in-out infinite 1s; }
                .animate-firefly-5 { animation: fly-5 22s ease-in-out infinite 7s; }

                @media (prefers-reduced-motion: reduce) {
                    .animate-float-slow,
                    .animate-float-reverse,
                    .animate-firefly-1,
                    .animate-firefly-2,
                    .animate-firefly-3,
                    .animate-firefly-4,
                    .animate-firefly-5 {
                        animation: none !important;
                        opacity: 0 !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default JungleBackground;
