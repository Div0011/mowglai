"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import NextImage from "next/image";

const projects = [
    {
        id: 1,
        title: "Clarity Cartel",
        category: "Strategic Business Consultancy",
        image: "/assets/projects/clarity-cartel.png",
        description: "A professional consultancy platform delivering actionable business strategies. We designed a clean, corporate interface that establishes authority and streamlines client engagement.",
        link: "#"
    },
    {
        id: 2,
        title: "iElevate",
        category: "Business Growth & Coaching",
        image: "/assets/projects/ielevate.png",
        description: "A comprehensive platform for professional development and business scaling. We built a dynamic learning hub empowering entrepreneurs with tools, courses, and mentorship.",
        link: "#"
    },
    {
        id: 3,
        title: "Jayhawk",
        category: "Healthcare Services",
        image: "/assets/projects/jayhawk.png",
        description: "A modern healthcare portal prioritizing patient accessibility and care. Features include secure appointment scheduling, medical record access, and virtual doctor consultations.",
        link: "#"
    },
    {
        id: 4,
        title: "More Interior",
        category: "Interior Design Studio",
        image: "/assets/projects/more-interior.png",
        description: "An immersive portfolio showcasing exquisite living spaces. The design emphasizes visual storytelling, allowing users to explore bespoke furniture and architectural elegance.",
        link: "#"
    },
    {
        id: 5,
        title: "True Ratings",
        category: "Movie & TV Ratings Platform",
        image: "/assets/projects/true-ratings.png",
        description: "A comprehensive database for tracking movie and TV show ratings, similar to IMDb. We built a data-driven platform for entertainment discovery and detailed content analysis.",
        link: "#"
    }
];

export default function SelectedWork() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const resetAutoplay = () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(nextSlide, 5000);
    };

    useEffect(() => {
        resetAutoplay();
        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, []);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                prevSlide();
                resetAutoplay();
            } else if (e.key === "ArrowRight") {
                nextSlide();
                resetAutoplay();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -50) {
            nextSlide();
            resetAutoplay();
        } else if (info.offset.x > 50) {
            prevSlide();
            resetAutoplay();
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    return (
        <section className="relative w-full py-24 overflow-hidden bg-transparent">
            {/* Gradient blending removed for seamless look */}

            <div className="container mx-auto px-6 relative z-20">
                <div className="flex flex-col items-center mb-16 space-y-4 text-center" data-aos="fade-up">
                    <h2 className="text-[10vw] md:text-6xl font-display font-black tracking-tighter text-foreground relative z-10 flex flex-col md:block">
                        <span className="opacity-30 uppercase mr-4">Selected</span>
                        <span className="text-primary uppercase">Work</span>
                    </h2>
                    <p className="max-w-2xl text-lg text-foreground/70 font-light">
                        A curated collection of our most impactful digital voyages.
                    </p>
                </div>

                <div
                    className="relative w-full aspect-[2/3] sm:aspect-video md:aspect-[21/9] max-w-6xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                        maskImage: "radial-gradient(ellipse at center, black 85%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 85%, transparent 100%)"
                    }}
                    onMouseEnter={() => {
                        if (autoplayRef.current) clearInterval(autoplayRef.current);
                        autoplayRef.current = null;
                    }}
                    onMouseLeave={resetAutoplay}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={handleDragEnd}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.4 }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {/* IMAGE CONTAINER - Integrated Mobile (Top 50%), Full Desktop */}
                            <div className="relative w-full h-[50%] md:absolute md:inset-0 md:h-full z-0 overflow-hidden">
                                <NextImage
                                    src={projects[currentIndex].image}
                                    alt={projects[currentIndex].title}
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                                <div className="hidden md:block absolute inset-0 bg-black/20" />
                            </div>

                            {/* CONTENT CONTAINER - Integrated Mobile (Bottom 50%), Overlay Desktop */}
                            <div className="relative w-full h-[50%] md:absolute md:inset-0 md:h-full z-10 flex flex-col justify-center items-start md:justify-center md:items-start bg-card md:bg-transparent pointer-events-auto md:pointer-events-none p-5 md:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="w-full h-full md:h-auto md:max-w-lg md:bg-card md:border md:border-border md:p-8 md:rounded-3xl md:shadow-2xl relative overflow-hidden group/card pointer-events-auto flex flex-col justify-between md:block"
                                >
                                    {/* Desktop-only internal container styling elements */}
                                    <div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent opacity-50" />

                                    {/* Content Wrapper for Mobile Alignment */}
                                    <div className="relative z-10 flex flex-col items-start gap-2 md:gap-5">
                                        {/* Header */}
                                        <div className="space-y-1">
                                            <span className="text-primary font-display font-bold tracking-widest uppercase text-[10px] md:text-sm">
                                                {projects[currentIndex].category}
                                            </span>
                                            <h3 className="text-xl md:text-5xl font-display font-black text-card-foreground leading-tight">
                                                {projects[currentIndex].title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-xs md:text-lg font-light leading-relaxed line-clamp-3 md:line-clamp-4">
                                            {projects[currentIndex].description}
                                        </p>
                                    </div>

                                    {/* Actions Row: Anchored to bottom on mobile */}
                                    <div className="flex items-center justify-between w-full mt-2 md:mt-4 relative z-10">
                                        <button className="flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-3 bg-primary text-primary-foreground font-bold rounded-full transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-md hover:shadow-primary/20">
                                            <span className="text-xs md:text-base">EXPLORE CASE</span>
                                            <ExternalLink size={14} className="md:w-5 md:h-5" />
                                        </button>

                                        {/* Mobile Navigation Controls */}
                                        <div className="flex md:hidden items-center gap-2">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); prevSlide(); resetAutoplay(); }}
                                                className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors bg-card/50"
                                                aria-label="Previous Project"
                                            >
                                                <ArrowLeft size={16} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); nextSlide(); resetAutoplay(); }}
                                                className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors bg-card/50"
                                                aria-label="Next Project"
                                            >
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons - Sides (Desktop Only) */}
                    <button
                        onClick={() => { prevSlide(); resetAutoplay(); }}
                        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-40 p-4 text-white/50 hover:text-primary hover:scale-110 transition-all rounded-full"
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft size={32} />
                    </button>
                    <button
                        onClick={() => { nextSlide(); resetAutoplay(); }}
                        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-40 p-4 text-white/50 hover:text-primary hover:scale-110 transition-all rounded-full"
                        aria-label="Next Slide"
                    >
                        <ArrowRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
}
