"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    text: string;
    accent: "gold" | "green";
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "Mowglai transformed our online presence completely. Their attention to detail and creative vision exceeded all expectations. Highly recommended!",
        accent: "gold",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Founder",
        company: "NexGen Solutions",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "The team delivered a stunning e-commerce platform that boosted our sales by 200%. Their technical expertise is truly world-class.",
        accent: "green",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "Bloom Agency",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "Working with Mowglai was a pleasure from start to finish. They understood our vision and brought it to life beautifully.",
        accent: "gold",
    },
    {
        id: 4,
        name: "David Thompson",
        role: "CTO",
        company: "Innovate Labs",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "Exceptional work! The web application they built for us is fast, secure, and beautifully designed. Our users love it!",
        accent: "green",
    },
    {
        id: 5,
        name: "Lisa Anderson",
        role: "Founder",
        company: "Creative Studio",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "Mowglai's team is professional, creative, and delivers on time. They turned our ideas into a stunning reality.",
        accent: "gold",
    },
    {
        id: 6,
        name: "James Wilson",
        role: "CEO",
        company: "Digital Ventures",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "Best investment we made. The website they created increased our conversion rate by 150%. Outstanding results!",
        accent: "green",
    },
];

interface TestimonialsSectionProps {
    isDark?: boolean;
}

export default function TestimonialsSection({ isDark = true }: TestimonialsSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextTestimonial = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevTestimonial = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Auto-play removed or customized? User asked for layout. Auto-play is fine.
            nextTestimonial();
        }, 8000);
        return () => clearInterval(interval);
    }, [isAnimating]);

    const getAccentColor = (accent: Testimonial["accent"]) => {
        const colors = {
            gold: "bg-[hsl(var(--accent))/0.1] border-[hsl(var(--accent))/0.3] text-[hsl(var(--accent))]",
            green: "bg-[hsl(var(--primary))/0.1] border-[hsl(var(--primary))/0.3] text-[hsl(var(--primary))]",
        };
        return colors[accent];
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section id="testimonials" className="w-full relative py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Massive Header */}
                {/* Massive Header */}
                <h2 className="text-[10vw] leading-[0.8] font-display font-black tracking-tighter text-foreground mb-24 relative z-10">
                    VOICES <br />
                    <span className="pl-[25vw] md:pl-[40vw] text-foreground/20 block -mt-4 md:-mt-10">OF</span>
                    <span className="pl-[25vw] md:pl-[55vw] text-[10vw] font-display font-black tracking-tighter text-foreground mb-24 relative z-10">
                        TRUST</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                    {/* Testimonial Quote - Huge */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <div className="relative">
                            <Quote size={180} className="absolute -top-20 -left-10 text-primary/10" />
                            <p className={cn(
                                "text-2xl md:text-3xl lg:text-4xl font-display font-normal leading-loose text-foreground transition-all duration-500",
                                isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                            )}>
                                "{activeTestimonial.text}"
                            </p>
                        </div>

                        <div className={cn(
                            "mt-12 flex items-center gap-6 transition-all duration-500 delay-100",
                            isAnimating ? "opacity-0" : "opacity-100"
                        )}>
                            <Avatar className="h-20 w-20 border-2 border-primary">
                                <AvatarImage src={activeTestimonial.avatar} alt={activeTestimonial.name} />
                                <AvatarFallback className="bg-primary text-background text-2xl font-bold">
                                    {activeTestimonial.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-2xl font-display font-bold text-foreground">{activeTestimonial.name}</p>
                                <p className="text-lg text-primary">{activeTestimonial.role}, {activeTestimonial.company}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation - Minimal */}
                    <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
                        <div className="flex gap-4">
                            <button
                                onClick={prevTestimonial}
                                className="w-16 h-16 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-16 h-16 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </div>

                        <div className="mt-8 text-xl font-display font-bold text-foreground/50">
                            {activeIndex + 1} / {testimonials.length}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}