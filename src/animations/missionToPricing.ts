import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initMissionToPricingTransition() {
    // We are animating between Section #mission and Section #pricing
    const mission = document.querySelector<HTMLElement>("#mission");
    const pricing = document.querySelector<HTMLElement>("#pricing");
    const container = document.querySelector<HTMLElement>("#mission-pricing-wrapper");

    if (!mission || !pricing || !container) {
        console.warn("Mission-Pricing Transition: Elements not found", { mission, pricing, container });
        return;
    }

    // Set initial 3D perspective on the wrapper
    gsap.set(container, {
        perspective: 1500,
        transformStyle: "preserve-3d",
        position: 'relative',
        overflow: 'hidden'
    });

    // Ensure elements are positioned for overlap/transition
    gsap.set(mission, {
        position: "relative",
        zIndex: 2,
        transformOrigin: "center bottom",
        backfaceVisibility: "hidden"
    });

    gsap.set(pricing, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        opacity: 0,
        zIndex: 1,
        // Start pushed back and down, ready to come forward
        z: -500,
        y: 100,
        rotationX: 20,
        transformOrigin: "center top",
        backfaceVisibility: "hidden"
    });

    // Create the timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "center center", // Start when center of wrapper hits center of viewport
            end: "+=400%", // Scroll distance to complete animation
            scrub: 1, // Smooth scrubbing
            pin: true, // Pin the wrapper during animation
            anticipatePin: 1,
            // markers: true, // Uncomment for debugging
        }
    });

    tl
        // Phase 1: Mission tilts back and fades away
        .to(mission, {
            rotationX: 45,       // Tilt top backwards
            scale: 0.8,          // Shrink slightly
            opacity: 0,          // Fade out
            y: 100,              // Move down ("pull down")
            z: -500,             // Move deep into screen
            duration: 1,
            ease: "power2.inOut"
        })

        // Phase 2: Pricing comes from "behind/inside" to the front
        .to(pricing, {
            opacity: 1,          // Fade in
            scale: 1,            // Restore scale
            z: 0,                // Bring to Z=0
            y: 0,                // Bring to Y=0
            rotationX: 0,        // Flatten rotation
            zIndex: 3,           // Bring to front
            duration: 1,
            ease: "power2.out",  // Smooth Stop
        }, "-=0.8"); // Overlap animations for seamless transition

    return tl;
}
