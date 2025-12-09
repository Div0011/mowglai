import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initMissionToPricingTransition() {
    const mission = document.querySelector<HTMLElement>("#mission");
    const pricing = document.querySelector<HTMLElement>("#pricing");
    const testimonials = document.querySelector<HTMLElement>("#testimonials-container");
    const wrapper = document.querySelector<HTMLElement>("#mission-pricing-wrapper");

    if (!mission || !pricing || !wrapper || !testimonials) {
        console.warn("Mission-Pricing-Testimonials Transition: Elements not found", { mission, pricing, wrapper, testimonials });
        return;
    }

    // --- Initial States ---

    // Wrapper: Preserves 3D context
    gsap.set(wrapper, {
        perspective: 1500,
        transformStyle: "preserve-3d",
        position: 'relative',
        overflow: 'hidden' // Clip content during transition
    });

    // Mission: Visible initially at z-Index 10
    gsap.set(mission, {
        position: "relative",
        zIndex: 10,
        transformOrigin: "center bottom",
        backfaceVisibility: "hidden"
    });

    // Pricing: Hidden, slightly below viewport, rotated slightly
    gsap.set(pricing, {
        position: "absolute",
        top: "10vh", // Start with some margin as requested (heading visible)
        left: 0,
        width: "100%",
        height: "100%", // Assuming full height for scroll simulation
        opacity: 0,
        zIndex: 20,
        transformOrigin: "center top",
        backfaceVisibility: "hidden",
        pointerEvents: "none" // No interaction until fully visible
    });

    // Testimonials: Hidden behind Pricing
    gsap.set(testimonials, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 30,
        opacity: 0,
        scale: 0.4,
        transformOrigin: "center center",
        pointerEvents: "none"
    });

    // --- Timeline Setup ---
    // User wants "3 scrolls" worth of distance. We'll extend 'end' significantly.
    // Logic:
    // Scroll 1: Mission tilts out -> Pricing slides in to top.
    // Scroll 2: "Scroll" down the Pricing section (move it up relative to viewport).
    // Scroll 3: Zoom Pricing -> Reveal Testimonials.

    // Smooth scrubbing factor (scrub: 1) for snappier, consistent feel
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrapper,
            start: "center center", // Start pinning when wrapper is centered
            end: "+=1200%",         // Shorter scroll distance for faster 3-step sequence
            scrub: 1,               // Smooth scrubbing matching hero transition
            pin: true,
            anticipatePin: 1,
        }
    });

    // Phase 1: Mission Exit (Tilt) & Pricing Entry (Top Header Visible)
    tl.to(mission, {
        rotationX: 45,
        scale: 0.8,
        opacity: 0,
        y: 50, // Gentle pull down
        z: -500,
        duration: 1,
        ease: "power1.inOut"
    }, "phase1")
        .to(pricing, {
            opacity: 1,
            y: 0,            // Moves to top: "10vh" set in CSS/style
            scale: 1,
            rotationX: 0,
            duration: 1,
            ease: "power1.inOut",
            pointerEvents: "auto"
        }, "phase1+=0.2"); // Slight overlap

    // Phase 2: "Scroll" Pricing to bottom
    // We simulate scrolling by moving Pricing content up.
    tl.to(pricing, {
        y: "-10%", // Shift up slightly to show more content if needed
        duration: 1,
        ease: "none"
    }, "phase2"); // Distinct phase

    // Pause for user to read
    tl.to(pricing, { duration: 0.5 }); // Short hold

    // Phase 3: Zoom Effect -> Testimonials
    tl.to(pricing, {
        scale: 15,          // Massive zoom (fly-through)
        opacity: 0,         // Fade out
        filter: "blur(20px)",
        duration: 2,
        ease: "power1.in",
        pointerEvents: "none"
    }, "phase3")
        .to(testimonials, {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power1.out",
            pointerEvents: "auto",
        }, "phase3+=0.5")  // Start revealing slightly after pricing starts zooming
        .to({}, { duration: 1 }); // Hold phase: Keep Testimonials pinned for viewing

    return tl;
}
