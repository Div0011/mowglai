'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { getPageTransitionVariant, pageTransitionBackdropVariants } from '@/animations/pageTransitionVariants';

interface PageTransitionWrapperProps {
    children: ReactNode;
    transitionType: 'start-project' | 'blueprint' | 'services' | 'contact' | 'explore' | 'about';
    isOpen: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

/**
 * PageTransitionWrapper - Wraps page content with full-screen transition animations
 * Creates the expanding/collapsing effect like the audit page button
 */
export function PageTransitionWrapper({
    children,
    transitionType,
    isOpen,
    onOpen,
    onClose,
}: PageTransitionWrapperProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const transitionVariant = getPageTransitionVariant(transitionType);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        variants={pageTransitionBackdropVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={onClose}
                    />

                    {/* Content */}
                    <motion.div
                        key="content"
                        variants={transitionVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 z-50 overflow-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        >
                            <span className="text-white text-2xl leading-none">×</span>
                        </button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/**
 * PageTransitionButton - CTA button that triggers page transition
 */
interface PageTransitionButtonProps {
    label: string;
    transitionType: 'start-project' | 'blueprint' | 'services' | 'contact' | 'explore' | 'about';
    onClick: (isOpen: boolean) => void;
    isOpen: boolean;
}

export function PageTransitionButton({
    label,
    transitionType,
    onClick,
    isOpen,
}: PageTransitionButtonProps) {
    return (
        <motion.button
            onClick={() => onClick(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
            {label}
        </motion.button>
    );
}
