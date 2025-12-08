import { cn } from "@/lib/utils";
import gsap from "gsap";
import LionLogo from "./LionLogo";
import { useState, useEffect } from "react";

const HeroSection = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ["Transcend", "Redefine", "Elevate", "Revolutionize", "Amplify", "Ignite"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative z-50 pointer-events-none">
            {/* Background Effects Wrapper - contains overflow */}
            <div className="hero-background absolute inset-0 overflow-hidden pointer-events-none">
                {/* Ripple rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full border border-primary/20"
                            style={{
                                width: `${300 + i * 150}px`,
                                height: `${300 + i * 150}px`,
                                animation: `ripple ${3 + i * 0.5}s ease-out infinite`,
                                animationDelay: `${i * 0.5}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Shooting stars */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + (i % 3) * 30}%`,
                            width: '2px',
                            height: '100px',
                            background: 'linear-gradient(to bottom, transparent, hsl(270 80% 60% / 0.8), transparent)',
                            transform: `rotate(${-45 + i * 10}deg)`,
                            animation: `shooting-star ${3 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.8}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center min-h-screen py-20">
                {/* Brand name with vanishing fog effect - ABOVE lion */}
                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-12 cursor-default relative inline-block z-20 pointer-events-auto"
                >
                    {"MOWGLAI".split("").map((char, index) => (
                        <span
                            key={index}
                            className="relative inline-block group mx-[0.02em]"
                        >
                            <span
                                className={cn(
                                    "inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent glow-text transition-all duration-500",
                                    "group-hover:opacity-0 group-hover:scale-150 group-hover:blur-md"
                                )}
                            >
                                {char}
                            </span>
                            <span
                                className="absolute inset-0 rounded-full bg-purple-600/60 blur-xl opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150 pointer-events-none"
                            />
                        </span>
                    ))}
                </h1>

                {/* Lion Logo - centered with face in center of viewport */}
                <div className="flex justify-center mb-12 animate-pulse-scale">
                    <div
                        id="hero-lion"
                        className="hero-lion-wrapper w-80 h-80 relative pointer-events-auto"
                    >
                        <LionLogo />
                    </div>
                </div>

                {/* Tagline - BELOW lion */}
                <p className="hero-tagline text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto pointer-events-auto">
                    Crafting Digital Experiences That <span key={currentWordIndex} className="text-primary font-semibold inline-block animate-fade-in">{words[currentWordIndex]}</span> Expectations
                </p>

            </div>
        </section>
    );
};

export default HeroSection;
