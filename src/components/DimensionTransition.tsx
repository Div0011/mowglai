import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DimensionTransitionProps {
    children: ReactNode;
}

const DimensionTransition = ({ children }: DimensionTransitionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const video = videoRef.current;
        const content = contentRef.current;
        const missionSection = document.querySelector("#mission");

        if (!container || !video || !content) return;

        // Force video to top/start
        video.currentTime = 0;
        video.pause();

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                // PAUSED initially, triggered by scroll event
                paused: true,
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=3000", // "Distance" to hold user
                    pin: true,
                    scrub: false, // Time-based
                    anticipatePin: 1,
                    onEnter: () => tl.play(),
                    onLeaveBack: () => tl.reverse(),
                }
            });

            // 1. Mission Fades OUT, Video Fades IN
            if (missionSection) {
                tl.fromTo(missionSection, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.5 }, 0);
            }
            tl.fromTo(video, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, 0);

            // 2. Play Video
            tl.call(() => {
                video.play();
            }, undefined, 0.5);

            // 3. WAIT for video duration
            const videoDuration = video.duration || 4; // fallback
            tl.to({}, { duration: videoDuration * 0.8 }, 0.5);

            // 4. Video Fades OUT
            tl.to(video, { autoAlpha: 0, duration: 1 });

            // 5. Pricing Fades IN
            tl.fromTo(content,
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=0.5"
            );

        }, containerRef);

        const loadMetadata = () => {
            ScrollTrigger.refresh();
        };
        video.onloadedmetadata = loadMetadata;

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-screen bg-transparent -mt-[100vh]"
            style={{ zIndex: 10 }}
        >
            {/* Video Overlay - Fixed to cover screen when active */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <video
                    ref={videoRef}
                    src="/video/Purple_Fog_Animation_Generation.mp4"
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="auto"
                    style={{ opacity: 0, visibility: 'hidden' }}
                />
            </div>

            {/* Content (Pricing) */}
            <div
                ref={contentRef}
                className="relative z-10 w-full min-h-screen flex items-center justify-center opacity-0 pointer-events-auto bg-background"
            >
                {children}
            </div>
        </div>
    );
};

export default DimensionTransition;
