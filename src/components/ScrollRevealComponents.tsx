"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionAnimationVariants, cascadeContainerVariants, cascadeItemVariants } from '@/animations/animationVariants';
import { useDeviceOptimization } from '@/hooks/useDeviceOptimization';

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: 'slideUpFade' | 'slideInLeft' | 'slideInRight' | 'scaleInFade';
    delay?: number;
    className?: string;
    once?: boolean; // Only trigger animation once
    threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    variant = 'slideUpFade',
    delay = 0,
    className = '',
    once = true,
    threshold = 0.2,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });
    const deviceInfo = useDeviceOptimization();
    const animationDuration = deviceInfo.isMobile ? 0.5 : 0.7;

    const getVariants = () => {
        const variants = sectionAnimationVariants[variant as keyof typeof sectionAnimationVariants];
        if (typeof variants === 'function') {
            return variants(delay);
        }
        return variants;
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={className}
            style={{
                transitionDuration: `${animationDuration}s`,
            }}
        >
            {children}
        </motion.div>
    );
};

interface CascadeContainerProps {
    children: React.ReactNode;
    className?: string;
    once?: boolean;
    threshold?: number;
    staggerChildren?: number;
}

export const CascadeContainer: React.FC<CascadeContainerProps> = ({
    children,
    className = '',
    once = true,
    threshold = 0.2,
    staggerChildren = 0.12,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cascadeContainerVariants}
            custom={{ staggerChildren }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const CascadeItem: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => {
    return (
        <motion.div variants={cascadeItemVariants} className={className}>
            {children}
        </motion.div>
    );
};

/**
 * Parallax scroll effect component
 * Text moves at different speeds relative to scroll
 */
interface ParallaxProps {
    children: React.ReactNode;
    offset?: number; // Parallax offset in pixels
    className?: string;
}

export const ParallaxScroll: React.FC<ParallaxProps> = ({
    children,
    offset = 50,
    className = '',
}) => {
    const ref = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const element = ref.current as HTMLElement;
                const rect = element.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const screenCenter = window.innerHeight / 2;
                const distance = (screenCenter - elementCenter) / 100;
                setScrollY(distance * offset);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [offset]);

    return (
        <motion.div
            ref={ref}
            style={{
                y: scrollY,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/**
 * Text reveal animation for headings and paragraphs
 * Reveals text character by character or word by word
 */
interface TextRevealAnimationProps {
    text: string;
    type?: 'char' | 'word';
    className?: string;
    delay?: number;
}

export const TextRevealAnimation: React.FC<TextRevealAnimationProps> = ({
    text,
    type = 'word',
    className = '',
    delay = 0,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const items = type === 'word'
        ? text.split(' ').map((word, i) => ({ text: word + ' ', i }))
        : text.split('').map((char, i) => ({ text: char, i }));

    return (
        <span ref={ref} className={className}>
            {items.map((item, i) => (
                <motion.span
                    key={`${item.i}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : "hidden"}
                    transition={{
                        duration: 0.4,
                        delay: (i * 0.05) + (delay * 0.1),
                        ease: 'easeOut',
                    }}
                >
                    {item.text}
                </motion.span>
            ))}
        </span>
    );
};

/**
 * Staggered list item animation
 */
export const StaggeredList: React.FC<{
    items: React.ReactNode[];
    className?: string;
    itemClassName?: string;
    once?: boolean;
}> = ({ items, className = '', itemClassName = '', once = true }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.1 });

    return (
        <motion.ul
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                    }
                }
            }}
            className={className}
        >
            {items.map((item, i) => (
                <motion.li
                    key={i}
                    variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className={itemClassName}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );
};
