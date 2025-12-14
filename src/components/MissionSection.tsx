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
        <section id="mission" className="relative w-full py-32 z-20 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* 1. Huge Heading - Left Aligned */}
                <div ref={textRef} className="mb-24" data-aos="fade-up">
                    <h2 className="text-[12vw] font-display font-black tracking-tighter text-foreground opacity-90 flex flex-col">
                        <h2 className="text-[12vw] leading-[0.6] font-display font-black tracking-tighter text-foreground opacity-80 select-none absolute left-0 -top-20 z-0 whitespace-nowrap">
                            DIGITAL
                        </h2>
                        <span className="leading-[0.6] -mt-[12vw] md:-mt-[-12vw]">EXCELLENCE</span>  {/* place them one over another */}
                    </h2>
                </div>

                {/* 2. Content Grid */}
                <div ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
                        <h3 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                            OUR MISSION
                        </h3>
                        <div className="h-px w-full bg-primary/30" />
                    </div>

                    <div className="space-y-8" data-aos="fade-left" data-aos-delay="400">
                        <p className="text-2xl md:text-3xl font-light leading-snug text-foreground/80">
                            To empower businesses with cutting-edge web solutions that drive growth, enhance user engagement, and establish a powerful digital presence.
                        </p>
                        <p className="text-xl text-muted-foreground">
                            We believe great software should be beautiful, fast, and accessible to everyone. We don't just build websites; we craft digital legacies that stand the test of time and technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
