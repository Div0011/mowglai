"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
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
    }
];

interface TestimonialsSectionProps {
    isDark?: boolean;
}

export default function TestimonialsSection({ isDark = true }: TestimonialsSectionProps) {
    return (
        <section id="testimonials" className="w-full relative py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header - Massive Style matching Mission Section */}
                <div className="mb-20 relative text-center" data-aos="fade-up">
                    <h2 className="text-[10vw] leading-[0.8] font-display font-black tracking-tighter text-foreground relative z-10 flex flex-col items-center">
                        <span className="opacity-10">TRUE</span>
                        <span className="text-primary -mt-4">VOICES</span>
                    </h2>

                    {/* Decorative Background Text */}
                    <div className="absolute -top-10 left-0 w-full text-center opacity-[0.03] select-none pointer-events-none font-display font-black text-[25vw] leading-none whitespace-nowrap">
                        ECHOES
                    </div>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="flex overflow-x-auto gap-8 pb-12 pt-4 px-4 snap-x snap-mandatory hide-scrollbar">
                        {testimonials.map((t, i) => (
                            <div
                                key={t.id}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
                            >
                                <div className="h-full relative glass-card p-10 rounded-[2.5rem] border border-primary/20 bg-background/40 hover:bg-background/60 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 group flex flex-col items-center text-center shadow-lg">

                                    <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Quote size={80} className="fill-primary text-primary" />
                                    </div>

                                    <div className="mb-6 relative">
                                        <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/30 group-hover:border-primary transition-colors duration-500">
                                            <Avatar className="w-full h-full">
                                                <AvatarImage src={t.avatar} />
                                                <AvatarFallback className="bg-primary/10 text-primary font-bold text-2xl">
                                                    {t.name.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} size={16} className="fill-primary text-primary" />
                                        ))}
                                    </div>

                                    <p className="text-lg md:text-xl font-light italic leading-relaxed text-foreground/90 mb-8 z-10">
                                        "{t.text}"
                                    </p>

                                    <div className="mt-auto border-t border-primary/10 pt-6 w-full">
                                        <h4 className="font-display font-bold text-foreground text-lg uppercase tracking-wide">{t.name}</h4>
                                        <p className="text-xs text-primary font-medium tracking-widest uppercase mt-1">{t.role} @ {t.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}