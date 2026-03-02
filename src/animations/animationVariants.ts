import { Variants } from 'framer-motion';

// Enhanced button animation variants
export const buttonAnimationVariants = {
    // Primary CTA button
    primaryButton: {
        rest: {
            scale: 1,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        },
        hover: {
            scale: 1.02,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
        },
        tap: {
            scale: 0.98,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        }
    },

    // Secondary button with underline effect
    secondaryButton: {
        rest: {
            opacity: 0.8,
        },
        hover: {
            opacity: 1,
            x: 4,
        },
        tap: {
            x: 2,
        }
    },

    // Icon button with rotation
    iconButton: {
        rest: {
            rotate: 0,
        },
        hover: {
            rotate: 12,
            scale: 1.1,
        },
        tap: {
            rotate: 8,
            scale: 0.95,
        }
    },

    // Ripple effect button
    rippleButton: {
        rest: {
            backgroundPosition: '0% 0%',
        },
        hover: {
            backgroundPosition: '100% 0%',
        }
    }
};

// Section animation variants
export const sectionAnimationVariants = {
    // Fade in with slide up
    slideUpFade: (delay: number = 0): Variants => ({
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: delay * 0.1,
            }
        }
    }),

    // Fade in with slide in from left
    slideInLeft: (delay: number = 0): Variants => ({
        hidden: {
            opacity: 0,
            x: -60,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: delay * 0.1,
            }
        }
    }),

    // Fade in with slide in from right
    slideInRight: (delay: number = 0): Variants => ({
        hidden: {
            opacity: 0,
            x: 60,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: delay * 0.1,
            }
        }
    }),

    // Scale in with fade
    scaleInFade: (delay: number = 0): Variants => ({
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: delay * 0.1,
            }
        }
    }),

    // Staggered container for children
    staggerContainer: (staggerChildren: number = 0.1): Variants => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: 0.1,
            }
        }
    }),
};

// Scroll-triggered reveal animation
export const scrollRevealVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        }
    }
};

// Interactive hover effects for cards
export const cardAnimationVariants = {
    rest: {
        y: 0,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    },
    hover: {
        y: -8,
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    }
};

// Text animation variants
export const textAnimationVariants = {
    // Letter by letter animation
    letterAnimation: (delay: number = 0): Variants => ({
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (i * 0.03) + (delay * 0.1),
                duration: 0.5,
                ease: 'easeOut',
            }
        })
    }),

    // Word animation
    wordAnimation: (delay: number = 0): Variants => ({
        hidden: {
            opacity: 0,
        },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: (i * 0.1) + (delay * 0.1),
                duration: 0.4,
                ease: 'easeOut',
            }
        })
    })
};

// Container animation for cascading effect
export const cascadeContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        }
    }
};

// Item animation for cascade
export const cascadeItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        }
    }
};
