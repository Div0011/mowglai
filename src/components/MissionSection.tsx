import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const text = textRef.current;
        const mission = missionRef.current;
        if (!text || !mission) return;

        // Animate the text color change
        gsap.to(text, {
            backgroundPosition: "200% center",
            ease: "none",
            scrollTrigger: {
                trigger: text,
                start: "top bottom",
                end: "bottom center",
                scrub: 1
            }
        });

        // Fade in mission card
        gsap.fromTo(mission,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: mission,
                    start: "top 85%"
                }
            }
        );
    }, []);

    return (
        <section id="mission" className="py-20 md:py-32 relative flex flex-col items-center justify-center space-y-24 bg-background">
            {/* Text changing effect */}
            <div className="container mx-auto px-6 text-center">
                <h2
                    ref={textRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight bg-gradient-to-r from-muted-foreground via-primary to-muted-foreground bg-[size:200%_auto] bg-clip-text text-transparent select-none"
                    style={{ backgroundPosition: "0% center" }}
                >
                    CRAFTING DIGITAL <br /> EXCELLENCE
                </h2>
            </div>

            {/* Mission Card */}
            <div ref={missionRef} className="container mx-auto px-6 flex justify-center">
                <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden max-w-4xl w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-foreground">
                            Our Mission
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            To empower businesses with cutting-edge web solutions that drive growth, enhance user engagement,
                            and establish a powerful digital presence. We believe great software should be beautiful, fast, and accessible to everyone.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
