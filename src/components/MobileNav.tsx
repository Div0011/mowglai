import { Home, Users, Mail, DollarSign, Layers, Menu, X, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Users, label: "About", href: "/about" },
    { icon: Layers, label: "Services", href: "/services" },
    { icon: DollarSign, label: "Purchase", href: "/investment" },
    { icon: Mail, label: "Contact", href: "/contact" },
];

const socialItems = [
    { icon: Instagram, href: "https://www.instagram.com/mowglai.in", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Mowglai11", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mowglai-in-47b3103a6/", label: "LinkedIn" },
];

const glassStyle = {
    background: 'hsl(var(--background) / 0.7)',
    backdropFilter: 'blur(20px)',
    border: '1px solid hsl(var(--border) / 0.2)',
    boxShadow: '0 0 20px hsl(var(--primary) / 0.15)',
};

const MobileNav = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { resolvedTheme } = useTheme();
    const [activeItem, setActiveItem] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    // Sync active item with location
    useEffect(() => {
        const currentPath = pathname;
        const active = navItems.find(item => item.href === currentPath);
        if (active) setActiveItem(active.label);
    }, [pathname]);

    const handleClick = (e: React.MouseEvent, label: string, href: string) => {
        e.preventDefault();
        setActiveItem(label);
        setIsOpen(false);
        router.push(href);
    };

    return (
        <nav
            className="fixed right-[calc(0.875rem+env(safe-area-inset-right))] top-[calc(1rem+env(safe-area-inset-top))] md:right-[calc(2rem+env(safe-area-inset-right))] md:top-[calc(2rem+env(safe-area-inset-top))] z-50 flex flex-col items-end gap-0.5 md:hidden"
            aria-label="Mobile Navigation"
        >
            {/* Top Row: Nav Items (Left) + Toggle (Right) */}
            <div className="flex items-center gap-0.5">

                {/* Regular Nav Items - Expands to the left (Horizontal) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            className="h-14 rounded-full px-0.5 flex items-center justify-center gap-0 overflow-hidden"
                            style={glassStyle}
                        >
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeItem === item.label;

                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => handleClick(e, item.label, item.href)}
                                        className={cn(
                                            "flex flex-col items-center justify-center w-9 h-10 rounded-full transition-all duration-300 relative",
                                            isActive
                                                ? (resolvedTheme === 'light' ? "text-primary-foreground bg-primary/20" : "text-primary bg-primary/10")
                                                : "text-muted-foreground opacity-70 hover:opacity-100 hover:bg-primary/5"
                                        )}
                                        aria-label={item.label}
                                    >
                                        <Icon className="w-5 h-5" />

                                        {/* Active Indicator - Dot at bottom */}
                                        {isActive && (
                                            <div className="absolute bottom-1.5 w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_var(--primary)]" />
                                        )}
                                    </a>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.button
                    layout
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-50 flex-shrink-0 backdrop-blur-md border border-primary/20",
                        resolvedTheme === 'light'
                            ? "bg-primary/20 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary"
                            : "bg-background/70 text-primary hover:bg-primary/10"
                    )}
                    // Removed style={glassStyle} to allow color overrides
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    whileTap={{ scale: 0.95 }}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>
            </div>

            {/* Vertical Social Links - Drops down */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className="w-14 rounded-full py-4 flex flex-col items-center gap-4 overflow-hidden"
                        style={glassStyle}
                    >
                        {socialItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                                aria-label={item.label}
                            >
                                <item.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default MobileNav;
