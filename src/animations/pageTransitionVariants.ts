import { Variants } from 'framer-motion';

/**
 * Page Transition Animations for Home Page Buttons
 * Each button has a unique reveal animation style
 */

// Start Project Button - Vertical expansion with shimmer cascade from top
export const startProjectTransitionVariants: Variants = {
    initial: {
        scaleY: 0,
        opacity: 0,
        originY: 0,
        filter: 'blur(20px)',
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        scaleY: 0,
        opacity: 0,
        originY: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Blueprint Button - Rotational reveal with 3D perspective from center
export const blueprintTransitionVariants: Variants = {
    initial: {
        rotateY: 90,
        rotateZ: 15,
        opacity: 0,
        perspective: '1000px',
    },
    animate: {
        rotateY: 0,
        rotateZ: 0,
        opacity: 1,
        perspective: '1000px',
        transition: {
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        rotateY: -90,
        rotateZ: -15,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Services Button - Diagonal slide-in from top-right with rotation
export const servicesTransitionVariants: Variants = {
    initial: {
        x: 300,
        y: -300,
        rotateZ: -45,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        rotateZ: 0,
        opacity: 1,
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        x: -300,
        y: 300,
        rotateZ: 45,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Contact Button - Circular burst with radial expansion
export const contactTransitionVariants: Variants = {
    initial: {
        scale: 0,
        opacity: 0,
        filter: 'blur(30px)',
    },
    animate: {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.95,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        scale: 0,
        opacity: 0,
        filter: 'blur(30px)',
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Explore Button - Wave/ripple expansion from left side
export const exploreTransitionVariants: Variants = {
    initial: {
        x: -500,
        opacity: 0,
        skewX: 25,
    },
    animate: {
        x: 0,
        opacity: 1,
        skewX: 0,
        transition: {
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        x: 500,
        opacity: 0,
        skewX: -25,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// About Button - Staggered skew + scale from corners
export const aboutTransitionVariants: Variants = {
    initial: {
        scaleX: 0,
        scaleY: 0.5,
        opacity: 0,
        skewX: -20,
    },
    animate: {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        skewX: 0,
        transition: {
            duration: 1.15,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        scaleX: 0,
        scaleY: 0.5,
        opacity: 0,
        skewX: 20,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Default Button - Multi-layer cascade from top with stagger
export const defaultTransitionVariants: Variants = {
    initial: {
        y: -100,
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        y: 100,
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/**
 * Backdrop/Overlay variants - creates the full-page takeover effect
 */
export const pageTransitionBackdropVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

/**
 * Utility function to get transition variant by button type
 */
export function getPageTransitionVariant(buttonType: string): Variants {
    const variantMap: Record<string, Variants> = {
        'start-project': startProjectTransitionVariants,
        'blueprint': blueprintTransitionVariants,
        'services': servicesTransitionVariants,
        'contact': contactTransitionVariants,
        'explore': exploreTransitionVariants,
        'about': aboutTransitionVariants,
    };

    return variantMap[buttonType] || defaultTransitionVariants;
}
