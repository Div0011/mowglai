"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        category: "Verified Review Management",
        image: "/assets/projects/true-ratings.png",
        description: "A transparency-focused platform for authentic customer feedback. We implemented a robust verification system that ensures trust and credibility in business ratings.",
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
                    className="relative w-full aspect-[4/5] sm:aspect-video md:aspect-[21/9] max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                        maskImage: "radial-gradient(ellipse at center, black 85%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 85%, transparent 100%)"
                    }}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.4 }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <NextImage
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                fill
                                className="object-cover object-center"
                                priority
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

                            {/* TOP LEFT: Website Name and Short Line */}
                            <div className="absolute top-6 left-6 md:top-12 md:left-12 z-30 mr-6">
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {/* Website Name (Title) */}
                                    <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none mb-2 break-words">
                                        {projects[currentIndex].title}
                                    </h3>
                                    {/* Short Line (Category) */}
                                    <span className="text-primary font-display font-bold tracking-widest uppercase block text-sm md:text-base">
                                        {projects[currentIndex].category}
                                    </span>
                                </motion.div>
                            </div>

                            {/* BOTTOM LEFT: Website Description */}
                            <div className="absolute bottom-24 left-6 right-6 md:bottom-12 md:left-12 md:right-auto z-30 max-w-xl">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <p className="text-white/80 text-base md:text-xl font-light line-clamp-3 md:line-clamp-none">
                                        {projects[currentIndex].description}
                                    </p>
                                </motion.div>
                            </div>

                            {/* BOTTOM RIGHT: Explore Button */}
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:right-12 md:left-auto z-30">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full transition-all group hover:opacity-90 shadow-lg hover:shadow-xl">
                                        <span>EXPLORE SITE</span>
                                        <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons - Sides */}
                    <button
                        onClick={() => { prevSlide(); resetAutoplay(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-4 text-white/50 hover:text-primary hover:scale-110 transition-all rounded-full"
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft size={32} />
                    </button>
                    <button
                        onClick={() => { nextSlide(); resetAutoplay(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-4 text-white/50 hover:text-primary hover:scale-110 transition-all rounded-full"
                        aria-label="Next Slide"
                    >
                        <ArrowRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
}
