import React from 'react';
import { motion } from 'framer-motion';

interface CircularDividerProps {
    direction?: 'left' | 'right';
    className?: string;
}

const CircularDivider: React.FC<CircularDividerProps> = ({ direction = 'right', className = "" }) => {
    // Overwhelmingly large circles for a "no section break" feel
    const rows = [
        { size: 'w-[400px] h-[400px]', speed: 50, opacity: 'opacity-[0.03]', border: 'border-primary/10' },
        { size: 'w-[600px] h-[600px]', speed: 80, opacity: 'opacity-[0.02]', border: 'border-primary/5' },
        { size: 'w-[300px] h-[300px]', speed: 40, opacity: 'opacity-[0.05]', border: 'border-primary/20' },
    ];

    return (
        <div className={`relative w-full py-20 flex flex-col items-center justify-center pointer-events-none z-0 ${className}`}>
            {rows.map((row, rowIndex) => (
                <motion.div
                    key={rowIndex}
                    className="flex gap-48 whitespace-nowrap -mt-32"
                    animate={{
                        x: direction === 'right' ? [0, -3000] : [-3000, 0]
                    }}
                    transition={{
                        duration: row.speed,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${row.size} rounded-full border ${row.border} flex items-center justify-center relative`}
                        >
                            <div className={`w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary/5 to-transparent ${row.opacity} blur-3xl animate-pulse`} />

                            {/* Orbital Ring */}
                            <motion.div
                                className="absolute inset-0 border border-primary/10 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10 + rowIndex * 5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    ))}
                </motion.div>
            ))}

            {/* Smooth Top/Bottom Blending */}
            <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        </div>
    );
};

export default CircularDivider;
