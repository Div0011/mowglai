import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        content: "Mowglai transformed our online presence completely. Their attention to detail and creative vision exceeded all expectations. Highly recommended!",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Founder, NexGen Solutions",
        content: "The team delivered a stunning e-commerce platform that boosted our sales by 200%. Their technical expertise is truly world-class.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Director, Bloom Agency",
        content: "Working with Mowglai was a pleasure from start to finish. They understood our vision and brought it to life beautifully.",
        rating: 5,
    },
    {
        name: "David Thompson",
        role: "CTO, Innovate Labs",
        content: "Exceptional work! The web application they built for us is fast, secure, and beautifully designed. Our users love it!",
        rating: 5,
    },
    {
        name: "Lisa Anderson",
        role: "Founder, Creative Studio",
        content: "Mowglai's team is professional, creative, and delivers on time. They turned our ideas into a stunning reality.",
        rating: 5,
    },
    {
        name: "James Wilson",
        role: "CEO, Digital Ventures",
        content: "Best investment we made. The website they created increased our conversion rate by 150%. Outstanding results!",
        rating: 5,
    },
];

interface TestimonialsSectionProps {
    isDark?: boolean;
}

const TestimonialsSection = ({ isDark = true }: TestimonialsSectionProps) => {
    const sectionRef = useRef<HTMLElement>(null);
    const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-100px',
            threshold: 0.3,
        };

        const observers = testimonialRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleTestimonials((prev) => {
                                if (!prev.includes(index)) {
                                    return [...prev, index];
                                }
                                return prev;
                            });
                        }, index * 200);
                    }
                });
            }, observerOptions);

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    return (
        <section ref={sectionRef} id="testimonials" className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Client Testimonials
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say.
                    </p>
                </div>

                {/* Testimonials grid - Flip Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, i) => {
                        const isVisible = visibleTestimonials.includes(i);

                        return (
                            <div
                                key={i}
                                ref={(el) => {
                                    testimonialRefs.current[i] = el;
                                }}
                                className="group h-[320px] perspective-1000 cursor-pointer"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                                    transition: `opacity 0.6s ease-out ${i * 0.2}s, transform 0.6s ease-out ${i * 0.2}s`,
                                }}
                            >
                                <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

                                    {/* FRONT FACE: Large Dark Purple Lion Logo */}
                                    <div className="absolute inset-0 w-full h-full glass-card rounded-3xl p-8 backface-hidden flex items-center justify-center">
                                        <div className="w-48 h-48 relative">
                                            <img
                                                src={`${import.meta.env.BASE_URL}lionlogo.png`}
                                                alt="Mowglai Lion"
                                                className="w-full h-full object-contain"
                                                style={{
                                                    filter: "brightness(0) saturate(100%) invert(18%) sepia(88%) saturate(3000%) hue-rotate(265deg) brightness(90%) contrast(110%) drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))", // Dark purple filter + drop shadow
                                                }}
                                            />
                                        </div>
                                        {/* Subtle hint to hover */}
                                        <div className="absolute bottom-6 text-muted-foreground/50 text-sm font-medium animate-pulse">
                                            Hover to reveal
                                        </div>
                                    </div>

                                    {/* BACK FACE: Testimonial Content (Flipped) */}
                                    <div className="absolute inset-0 w-full h-full glass-card rounded-3xl p-8 backface-hidden rotate-y-180 overflow-hidden">
                                        {/* Logo watermark in background */}
                                        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <img
                                                    src={`${import.meta.env.BASE_URL}lionlogo.png`}
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                    style={{
                                                        filter: isDark
                                                            ? "brightness(0) saturate(100%) invert(67%) sepia(35%) saturate(496%) hue-rotate(225deg) brightness(95%) contrast(89%) opacity(0.3)"
                                                            : "brightness(0.3) blur(1px)",
                                                        maxWidth: "100%",
                                                        maxHeight: "100%",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Quote icon */}
                                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center opacity-80 z-10">
                                            <Quote className="w-5 h-5 text-primary-foreground" />
                                        </div>

                                        {/* Rating */}
                                        <div className="flex gap-1 mb-6 relative z-10">
                                            {[...Array(testimonial.rating)].map((_, j) => (
                                                <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                                            ))}
                                        </div>

                                        {/* Content */}
                                        <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
                                            "{testimonial.content}"
                                        </p>

                                        {/* Author */}
                                        <div className="absolute bottom-8 left-8 flex items-center gap-4 relative z-10">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                                                <span className="text-lg font-display font-bold text-primary">
                                                    {testimonial.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;