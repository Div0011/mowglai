"use client";

import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { useMenuOpen } from "@/hooks/use-menu-open";

const ContactToggle = () => {
    const { resolvedTheme } = useTheme();
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const isMenuOpen = useMenuOpen();

    const phoneNumber = "919452476331";
    const email = "amitsharmaanxt@gmail.com";
    const message = "Hi, I'm interested in Mowglai's web & digital experience services. I'd like a quote and next steps.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const telUrl = `tel:+${phoneNumber}`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent("Inquiry regarding Mowglai Services")}`;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
                <div
                    aria-hidden={isMenuOpen}
                    className={cn(
                        "fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(0.875rem+env(safe-area-inset-right))] md:bottom-[calc(2rem+env(safe-area-inset-bottom))] md:right-[calc(2rem+env(safe-area-inset-right))] z-[60] flex items-center justify-center transition-all duration-300",
                        isMenuOpen ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
                    )}
                >
                    <button
                        className={cn(
                            "w-14 h-14 md:w-16 md:h-16 rounded-full border border-primary/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]",
                            resolvedTheme === "light"
                                ? "bg-primary/20 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                        )}
                        aria-label={isPopoverOpen ? "Close menu" : "Contact Options"}
                    >
                        <div className="relative w-5 h-5 flex items-center justify-center">
                            {/* Close X Icon - Shows when popover is open */}
                            <div
                                className={cn(
                                    "absolute inset-0 transition-all duration-300 transform flex items-center justify-center",
                                    isPopoverOpen
                                        ? "rotate-0 opacity-100 scale-100"
                                        : "-rotate-90 opacity-0 scale-50"
                                )}
                            >
                                <X className="w-5 h-5 md:w-6 md:h-6" />
                            </div>

                            {/* WhatsApp Icon - Shows when popover is closed */}
                            <div
                                className={cn(
                                    "absolute inset-0 transition-all duration-300 transform flex items-center justify-center",
                                    isPopoverOpen
                                        ? "rotate-90 opacity-0 scale-50"
                                        : "rotate-0 opacity-100 scale-100"
                                )}
                            >
                                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                            </div>
                        </div>
                    </button>
                </div>
            </PopoverTrigger>
            <PopoverContent
                side="top"
                align="end"
                sideOffset={12}
                className="w-[280px] bg-background/95 backdrop-blur-xl border-primary/10 rounded-xl p-4 shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]"
            >
                <div className="space-y-3">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        Connect with Mowglai
                    </h4>

                    {/* WhatsApp Option */}
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors shrink-0">
                            <MessageCircle className="w-5 h-5 text-[#25D366] fill-current" />
                        </div>
                        <div className="text-left">
                            <div className="font-medium text-sm">WhatsApp</div>
                            <div className="text-xs text-muted-foreground">Quick response • Direct chat</div>
                        </div>
                    </motion.a>

                    {/* Direct Call Option */}
                    <motion.a
                        href={telUrl}
                        className="flex items-center gap-3 p-3 rounded-xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0">
                            <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                            <div className="font-medium text-sm">Call Direct</div>
                            <div className="text-xs text-muted-foreground">+91 94524 76331</div>
                        </div>
                    </motion.a>

                    {/* Email Option */}
                    <motion.a
                        href={mailtoUrl}
                        className="flex items-center gap-3 p-3 rounded-xl border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors shrink-0">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                            <div className="font-medium text-sm">Email Lead</div>
                            <div className="text-xs text-muted-foreground">Detailed project scope</div>
                        </div>
                    </motion.a>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ContactToggle;
