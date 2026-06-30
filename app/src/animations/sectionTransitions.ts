import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pricing -> Testimonials
 * Curtain-style reveal:
 * - Pricing slightly dims & blurs
 * - Purple overlay fades in briefly
 * - Testimonials fade/slide up through it
 * - Overlay fades out
 */
export function initPricingToTestimonialsTransition() {
    // This transition is now handled by initMissionToPricingTransition in missionToPricing.ts
    // to ensure a continuous pinned sequence.
    // Keeping this empty to prevent conflicts if called.
}

/**
 * Testimonials -> Contact
 * Depth / camera pull-in:
 * - Testimonials scale down slightly & fade
 * - Background (overlay) very subtle
 * - Contact fades in & slides up
 */
export function initTestimonialsToContactTransition() {
    const testimonials = document.querySelector<HTMLElement>("#testimonials");
    const contact = document.querySelector<HTMLElement>("#contact");

    if (!testimonials || !contact) {
        console.warn("Testimonials->Contact: Missing elements", { testimonials, contact });
        return;
    }

    // Initial state for contact
    gsap.set(contact, { autoAlpha: 0, y: 100, scale: 0.99 });

    ScrollTrigger.create({
        trigger: testimonials,
        start: "bottom center",
        once: true,
        onEnter: () => {
            const tl = gsap.timeline();

            // Step 1: Testimonials retreat slightly
            tl.to(testimonials, {
                autoAlpha: 0,
                y: -40,
                scale: 0.95,
                duration: 0.6,
                ease: "power2.inOut",
                transformOrigin: "center center",
            })

                // Step 2: Contact comes into focus
                .to(
                    contact,
                    {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.out",
                    },
                    "-=0.2"
                );
        },
    });
}

/**
 * Contact -> Footer
 * Soft fade/slide:
 * - Contact gently fades + slides up
 * - Footer fades in from below
 */
export function initContactToFooterTransition() {
    const contact = document.querySelector<HTMLElement>("#contact");
    const footer = document.querySelector<HTMLElement>("#footer");

    if (!contact || !footer) {
        console.warn("Contact->Footer: Missing elements", { contact, footer });
        return;
    }

    // Initial footer state
    gsap.set(footer, { autoAlpha: 0, y: 60 });

    ScrollTrigger.create({
        trigger: contact,
        start: "bottom center",
        once: true,
        onEnter: () => {
            const tl = gsap.timeline();

            // Step 1: Contact fades up & out
            tl.to(contact, {
                autoAlpha: 0,
                y: -40,
                duration: 0.4,
                ease: "power2.inOut",
            })

                // Step 2: Footer fades in
                .to(
                    footer,
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out",
                    },
                    "-=0.2"
                );
        },
    });
}

/**
 * Helper to initialize all section transitions at once
 */
export function initAllSectionTransitions() {
    initPricingToTestimonialsTransition();
    initTestimonialsToContactTransition();
    initContactToFooterTransition();
}
