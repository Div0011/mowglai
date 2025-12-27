import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X, Zap, Target, Flame } from "lucide-react";

const InfoPull = () => {
    const [isOpen, setIsOpen] = useState(false);

    const stats = [
        { icon: Zap, label: "Efficiency", value: "99.9%" },
        { icon: Target, label: "Precision", value: "Pixel Perfect" },
        { icon: Flame, label: "Passion", value: "Heart & Soul" },
    ];

    return (
        <div className="fixed top-1/2 -right-4 z-[80] -translate-y-1/2">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center w-16 h-32 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-l-full shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-primary transition-all duration-500"
                whileHover={{ x: -10 }}
                layout
            >
                <div className="flex flex-col items-center gap-4 text-primary group-hover:text-primary-foreground transition-colors">
                    <Info size={24} className={isOpen ? "rotate-90" : ""} />
                    <span className="[writing-mode:vertical-rl] font-display font-bold text-xs uppercase tracking-widest">
                        {isOpen ? "Close" : "Pull Me"}
                    </span>
                </div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, x: -80, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.9 }}
                        className="absolute top-0 right-24 w-80 p-8 glass-card rounded-[3rem] border-primary/30 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-display font-black text-primary uppercase italic">The Pulse</h3>
                                <button onClick={() => setIsOpen(false)} className="text-foreground/40 hover:text-primary">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {stats.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4 group/item">
                                        <div className="p-3 rounded-full bg-primary/5 border border-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all">
                                            <s.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-foreground/40 uppercase tracking-widest">{s.label}</p>
                                            <p className="text-lg font-display font-bold text-foreground">{s.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-primary/10">
                                <p className="text-sm text-foreground/60 leading-relaxed italic">
                                    "Our systems are designed to adapt and thrive in common and complex digital environments."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InfoPull;
