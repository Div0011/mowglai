// src/animations/heroToAbout.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeroToAboutTransition() {
    const lion = document.querySelector<HTMLElement>("#hero-lion");
    const aboutSlot = document.querySelector<HTMLElement>(".about-lion-slot");
    const wrapper = document.querySelector<HTMLElement>("#hero-about-wrapper");
    const aboutRightContent = document.querySelector<HTMLElement>(".about-right-content");

    if (!lion || !aboutSlot || !wrapper || !aboutRightContent) return;

    // Ensure separate layers state
    gsap.set(aboutRightContent, {
        x: "100%", // Start off-screen right
        opacity: 1 // visible within the section (which we will fade)
    });

    // Initialize About section as invisible
    gsap.set("#about", { opacity: 0 });

    // helper to compute where the lion has to move/scale to match the slot
    const computeTransform = () => {
        // reset any previous transforms so measurements are correct
        gsap.set(lion, { clearProps: "transform" });

        const lionRect = lion.getBoundingClientRect();
        const slotRect = aboutSlot.getBoundingClientRect();

        // With absolute positioning, rects should be correct relative to viewport if both at top:0
        const lionCenterX = lionRect.left + lionRect.width / 2;
        const lionCenterY = lionRect.top + lionRect.height / 2;

        const slotCenterX = slotRect.left + slotRect.width / 2;
        const slotCenterY = slotRect.top + slotRect.height / 2;

        const dx = slotCenterX - lionCenterX;
        const dy = slotCenterY - lionCenterY;

        const scale = slotRect.width / lionRect.width;

        return { dx, dy, scale };
    };

    let { dx, dy, scale } = computeTransform();

    // Recompute on resize/ScrollTrigger refresh
    ScrollTrigger.addEventListener("refreshInit", () => {
        const t = computeTransform();
        dx = t.dx;
        dy = t.dy;
        scale = t.scale;
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrapper,          // pin the wrapper
            start: "top top",
            end: "+=150%",             // Pin for 1.5 screen heights
            pin: true,
            scrub: 1,
            anticipatePin: 1,
        },
    });

    // 1. Fade out HERO content (text + background effects)
    // "Completely disappear it" - fast and clean
    tl.to("#home h1, #home p, #home .hero-background", {
        autoAlpha: 0,
        duration: 1
    }, 0);

    // 2. Fade in ABOUT section
    // Start slightly after hero starts fading
    tl.to("#about", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
    }, 0.2);

    // 3. Move Lion to Slot
    tl.to(lion, {
        x: () => dx,
        y: () => dy,
        scale: () => scale,
        ease: "power1.inOut",
        duration: 1
    }, 0);

    // 4. Slide in About Content from Right
    tl.to(aboutRightContent, {
        x: "0%",
        ease: "power1.inOut",
        duration: 1
    }, 0);
}
