"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { buttonAnimationVariants } from '@/animations/animationVariants';
import { useDeviceOptimization } from '@/hooks/useDeviceOptimization';

interface EnhancedButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'icon' | 'ripple';
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;
    type?: 'button' | 'submit' | 'reset';
}

export const EnhancedPrimaryButton: React.FC<EnhancedButtonProps> = ({
    children,
    onClick,
    href,
    className = '',
    disabled = false,
    ariaLabel,
    type = 'button',
}) => {
    const deviceInfo = useDeviceOptimization();

    if (href) {
        return (
            <motion.a
                href={href}
                initial="rest"
                whileHover={deviceInfo.hasHover ? "hover" : "rest"}
                whileTap="tap"
                variants={buttonAnimationVariants.primaryButton}
                className={`relative inline-block px-8 py-4 font-semibold rounded-lg bg-primary text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
                aria-label={ariaLabel}
            >
                <span className="relative z-10">{children}</span>
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            type={type}
            initial="rest"
            whileHover={deviceInfo.hasHover ? "hover" : "rest"}
            whileTap="tap"
            variants={buttonAnimationVariants.primaryButton}
            className={`relative px-8 py-4 font-semibold rounded-lg bg-primary text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            aria-label={ariaLabel}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

export const EnhancedSecondaryButton: React.FC<EnhancedButtonProps> = ({
    children,
    onClick,
    href,
    className = '',
    disabled = false,
    ariaLabel,
    type = 'button',
}) => {
    const deviceInfo = useDeviceOptimization();

    if (href) {
        return (
            <motion.a
                href={href}
                initial="rest"
                whileHover={deviceInfo.hasHover ? "hover" : "rest"}
                whileTap="tap"
                variants={buttonAnimationVariants.secondaryButton}
                className={`relative inline-block px-6 py-3 font-medium rounded-lg border border-primary/30 text-primary hover:text-primary-foreground hover:bg-primary/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
                aria-label={ariaLabel}
            >
                <span className="relative z-10">{children}</span>
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            type={type}
            initial="rest"
            whileHover={deviceInfo.hasHover ? "hover" : "rest"}
            whileTap="tap"
            variants={buttonAnimationVariants.secondaryButton}
            className={`relative px-6 py-3 font-medium rounded-lg border border-primary/30 text-primary hover:text-primary-foreground hover:bg-primary/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            aria-label={ariaLabel}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

export const EnhancedIconButton: React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;
}> = ({
    children,
    onClick,
    className = '',
    disabled = false,
    ariaLabel,
}) => {
    const deviceInfo = useDeviceOptimization();

    return (
        <motion.button
            initial="rest"
            whileHover={deviceInfo.hasHover ? "hover" : "rest"}
            whileTap="tap"
            variants={buttonAnimationVariants.iconButton}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={`relative inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </motion.button>
    );
};

/**
 * Ripple Button with mouse position-based ripple effect
 */
export const RippleButton: React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}> = ({
    children,
    onClick,
    className = '',
}) => {
    const rippleRef = React.useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = rippleRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        rippleRef.current?.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        onClick?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
        }
    };

    return (
        <div
            ref={rippleRef}
            className={`relative overflow-hidden px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg cursor-pointer transition-colors duration-300 hover:bg-primary/90 ${className}`}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
        >
            {children}
            <style>{`
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple-animation 0.6s ease-out;
                    pointer-events: none;
                }

                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};
