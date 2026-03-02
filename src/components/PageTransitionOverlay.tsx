'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { getPageTransitionVariant, pageTransitionBackdropVariants } from '@/animations/pageTransitionVariants';

export type PageTransitionType = 'start-project' | 'blueprint' | 'services' | 'contact' | 'explore' | 'about';

interface TransitionPageContent {
    [key: string]: {
        title: string;
        href: string;
        description?: string;
    };
}

const pageContents: TransitionPageContent = {
    'start-project': {
        title: 'START YOUR PROJECT',
        href: '/start-project',
        description: 'Launch your vision with our expert team',
    },
    'blueprint': {
        title: 'BLUEPRINT TEMPLATES',
        href: '/explore',
        description: 'Explore our collection of premium templates',
    },
    'services': {
        title: 'OUR SERVICES',
        href: '/services',
        description: 'Discover what we can build for you',
    },
    'contact': {
        title: 'GET IN TOUCH',
        href: '/contact',
        description: 'Let\'s talk about your project',
    },
    'explore': {
        title: 'EXPLORE MORE',
        href: '/explore',
        description: 'Discover our latest work and templates',
    },
    'about': {
        title: 'OUR STORY',
        href: '/about',
    },
};

interface PageTransitionOverlayProps {
    type: PageTransitionType;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (href: string) => void;
}

/**
 * Full-screen page transition overlay with unique animations per button type
 */
export function PageTransitionOverlay({
    type,
    isOpen,
    onClose,
    onNavigate,
}: PageTransitionOverlayProps) {
    const transitionVariant = getPageTransitionVariant(type);
    const pageContent = pageContents[type];

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

                    {/* Transition Content Container */}
                    <motion.div
                        key="content"
                        variants={transitionVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 z-50 overflow-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Content Area - Full Screen */}
                        <div className="w-full h-screen flex flex-col items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-center max-w-3xl"
                            >
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white">
                                    {pageContent.title}
                                </h1>
                                {pageContent.description && (
                                    <p className="text-lg md:text-xl text-white/80 mb-12">
                                        {pageContent.description}
                                    </p>
                                )}

                                <div className="flex gap-6 justify-center flex-wrap">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => onNavigate(pageContent.href)}
                                        className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                                    >
                                        Enter
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={onClose}
                                        className="px-8 py-4 bg-white/10 text-white rounded-lg font-bold uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
                                    >
                                        Close
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/**
 * Interactive home page button that triggers page transitions
 */
interface InteractiveHomePageButtonProps {
    label: string;
    transitionType: PageTransitionType;
    tagline?: string;
    onTransitionOpen: (type: PageTransitionType) => void;
}

export function InteractiveHomePageButton({
    label,
    transitionType,
    tagline,
    onTransitionOpen,
}: InteractiveHomePageButtonProps) {
    return (
        <motion.button
            onClick={() => onTransitionOpen(transitionType)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors relative overflow-hidden group"
        >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            <span className="relative">{label}</span>
        </motion.button>
    );
}
