import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Star, Heart, Award } from "lucide-react";

const CircularInfoBall = () => {
    const [isOpen, setIsOpen] = useState(false);

    const perks = [
        { icon: Star, text: "Elite Quality Standards" },
        { icon: Heart, text: "Human-Centric Design" },
        { icon: Award, text: "Industry Performance" },
    ];

    return (
        <div className="fixed top-1/2 left-8 z-[80] -translate-y-1/2">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X size={24} /> : <Sparkles size={24} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.3, x: -100 }}
                        animate={{ opacity: 1, scale: 1, x: 80 }}
                        exit={{ opacity: 0, scale: 0.3, x: -100 }}
                        className="absolute top-1/2 -translate-y-1/2 w-64 p-8 glass-card rounded-full border-primary/30 shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)] aspect-square flex flex-col items-center justify-center text-center"
                    >
                        <div className="space-y-4">
                            <h4 className="text-xl font-display font-black text-primary uppercase italic">Perks</h4>
                            <div className="space-y-3">
                                {perks.map((p, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1 group/perk">
                                        <p className="text-[10px] text-foreground/70 font-display font-bold uppercase tracking-widest group-hover/perk:text-primary transition-colors">
                                            {p.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Orbital ring */}
                        <motion.div
                            className="absolute inset-2 border border-primary/10 rounded-full pointer-events-none"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CircularInfoBall;
