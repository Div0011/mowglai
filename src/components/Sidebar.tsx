import { useState, useEffect } from "react";
import { Home, Users, Mail, DollarSign, MessageSquare, ChevronRight, Sun, Moon } from "lucide-react";
import LionLogo from "./LionLogo";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

interface NavItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Users, label: "About Us", href: "#about" },
    { icon: DollarSign, label: "Pricing", href: "#pricing" },
    { icon: MessageSquare, label: "Testimonials", href: "#testimonials" },
    { icon: Mail, label: "Contact", href: "#contact" },
];

interface SidebarProps {
    isDark: boolean;
    onToggleTheme: () => void;
}

const Sidebar = ({ isDark, onToggleTheme }: SidebarProps) => {
    const [activeItem, setActiveItem] = useState("Home");
    const [isExpanded, setIsExpanded] = useState(false);
    const [trailPosition, setTrailPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrailPosition((prev) => (prev >= 100 ? 0 : prev + 0.3));
        }, 16);
        return () => clearInterval(interval);
    }, []);

    // Scroll spy to update active item
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // 1. Check pinned wrapper navigation first
            const mpWrapper = ScrollTrigger.getAll().find(st => (st.trigger as HTMLElement)?.id === "mission-pricing-wrapper");
            if (mpWrapper) {
                const start = mpWrapper.start;
                const end = mpWrapper.end;

                if (scrollY >= start && scrollY <= end) {
                    const progress = (scrollY - start) / (end - start);
                    if (progress < 0.5) {
                        setActiveItem("Pricing");
                    } else {
                        setActiveItem("Testimonials");
                    }
                    return; // Exit if matched pinned section
                }
            }

            // 2. Standard sections fallback
            const standardSections = [
                { id: 'home', label: 'Home' },
                { id: 'contact', label: 'Contact' }
            ];

            // Explicit check for Hero/About if not in main pin
            const heroAboutWrapper = ScrollTrigger.getAll().find(st => (st.trigger as HTMLElement)?.id === "hero-about-wrapper");
            if (heroAboutWrapper) {
                if (scrollY >= heroAboutWrapper.start && scrollY <= heroAboutWrapper.end) {
                    // Inside Hero/About pin
                    const progress = (scrollY - heroAboutWrapper.start) / (heroAboutWrapper.end - heroAboutWrapper.start);
                    if (progress > 0.5) setActiveItem("About Us");
                    else setActiveItem("Home");
                    return;
                }
            }

            // Fallback for contact or if outside pins
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                if (rect.top < viewportHeight * 0.5) {
                    setActiveItem("Contact");
                    return;
                }
            }

            // Default to Home if at top
            if (scrollY < 100) setActiveItem("Home");
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent, label: string, href: string) => {
        e.preventDefault();
        setActiveItem(label);

        if (href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (href === "#about") {
            const st = ScrollTrigger.getAll().find(st => (st.trigger as HTMLElement)?.id === "hero-about-wrapper");
            if (st) {
                // About is at end of the hero-about pin
                gsap.to(window, { duration: 1, scrollTo: st.end });
            } else {
                gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 0, autoKill: false } });
            }
        } else if (href === "#pricing") {
            const st = ScrollTrigger.getAll().find(st => (st.trigger as HTMLElement)?.id === "mission-pricing-wrapper");
            if (st) {
                // Scroll to start of the pinned section for Pricing
                gsap.to(window, { duration: 1, scrollTo: st.start });
            } else {
                gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 0, autoKill: false } });
            }
        } else if (href === "#testimonials") {
            const st = ScrollTrigger.getAll().find(st => (st.trigger as HTMLElement)?.id === "mission-pricing-wrapper");
            if (st) {
                // Scroll to middle-end of pin for Testimonials
                const testimonialPoint = st.start + (st.end - st.start) * 0.6;
                gsap.to(window, { duration: 1, scrollTo: testimonialPoint });
            } else {
                gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 0, autoKill: false } });
            }
        } else {
            // Contact etc
            const target = document.querySelector(href);
            if (target) {
                gsap.to(window, { duration: 1, scrollTo: target });
            }
        }
    };

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 h-screen hidden md:flex flex-col items-center py-6 z-50 transition-all duration-300 ease-out",
                isExpanded ? "w-64" : "w-20"
            )}
            style={{
                background: isDark ? 'hsl(0, 0%, 2%)' : 'hsl(0, 0%, 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: 'inset 0 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.5)',
                borderRadius: '0 30px 30px 0',
            }}
        >
            {/* Purple trail animation */}
            <div
                className="absolute left-0 w-2 h-full pointer-events-none z-10"
                style={{
                    background: `linear-gradient(to bottom, 
            transparent 0%, 
            transparent ${Math.max(0, trailPosition - 8)}%, 
            hsl(270 80% 60% / 0.7) ${Math.max(0, trailPosition - 4)}%, 
            hsl(270 80% 60% / 0.9) ${trailPosition}%, 
            hsl(270 80% 60% / 0.7) ${Math.min(100, trailPosition + 4)}%, 
            transparent ${Math.min(100, trailPosition + 8)}%, 
            transparent 100%)`,
                    boxShadow: `0 ${trailPosition}% 30px hsl(270 80% 60% / 0.5), 0 ${trailPosition}% 15px hsl(270 80% 60% / 0.7)`,
                    transition: 'none',
                }}
            />

            {/* Logo */}
            <div className="mb-8 relative z-20">
                <LionLogo size="sm" className="w-12 h-12" />
            </div>

            {/* Toggle button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="relative z-20 w-10 h-10 rounded-full flex items-center justify-center mb-8 transition-all duration-300 hover:scale-105"
                style={{
                    background: `linear-gradient(to right, hsl(270 80% 60% / 0.4) 0%, hsl(270 80% 60% / 0.2) 15%, ${isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)'} 40%, ${isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)'} 100%)`,
                    border: '1px solid hsl(270 80% 60% / 0.2)',
                    boxShadow: 'inset -2px 0 8px hsl(270 80% 60% / 0.3), 0 0 0 1px rgba(0, 0, 0, 0.3)',
                }}
            >
                <ChevronRight
                    className={cn(
                        "w-4 h-4 transition-transform duration-300 text-primary",
                        isExpanded && "rotate-180"
                    )}
                />
            </button>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col gap-2 w-full px-3 relative z-20">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.label;

                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.label, item.href)}
                            className={cn(
                                "relative overflow-hidden flex items-center transition-all duration-300 group",
                                isExpanded ? "w-full h-12 rounded-xl justify-start px-4 gap-3" : "w-12 h-12 rounded-full justify-center",
                                isActive && "active"
                            )}
                            style={{
                                background: isActive
                                    ? `linear-gradient(to right, hsl(270 80% 60% / 0.5) 0%, hsl(270 80% 60% / 0.3) 20%, hsl(270 80% 60% / 0.1) 40%, ${isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)'} 70%, ${isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)'} 100%)`
                                    : `linear-gradient(to right, hsl(270 80% 60% / 0.25) 0%, hsl(270 80% 60% / 0.1) 25%, ${isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)'} 60%, ${isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)'} 100%)`,
                                border: '1px solid transparent',
                                boxShadow: isActive
                                    ? 'inset -4px 0 12px hsl(270 80% 60% / 0.4), 0 0 15px hsl(270 80% 60% / 0.2), 0 0 0 1px rgba(0, 0, 0, 0.5)'
                                    : 'inset -3px 0 8px hsl(270 80% 60% / 0.15), 0 0 0 1px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            <Icon
                                className={cn(
                                    "w-5 h-5 transition-all duration-300 flex-shrink-0 relative z-10",
                                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                                )}
                            />

                            {/* Label when expanded */}
                            <span
                                className={cn(
                                    "font-medium text-sm transition-all duration-300 whitespace-nowrap overflow-hidden relative z-10",
                                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                                    isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
                                )}
                            >
                                {item.label}
                            </span>

                            {/* Tooltip when collapsed */}
                            {!isExpanded && (
                                <span
                                    className="absolute left-full ml-4 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50"
                                    style={{
                                        background: 'rgba(0, 0, 0, 0.95)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid hsl(270 80% 60% / 0.2)',
                                        color: '#e5e7eb',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                    }}
                                >
                                    {item.label}
                                </span>
                            )}
                        </a>
                    );
                })}
            </nav>

            {/* Theme toggle */}
            <button
                onClick={onToggleTheme}
                className="relative z-20 w-12 h-12 rounded-full flex items-center justify-center mt-4 transition-all duration-300 group hover:scale-105"
                style={{
                    background: `linear-gradient(to right, hsl(270 80% 60% / 0.4) 0%, hsl(270 80% 60% / 0.2) 15%, ${isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)'} 40%, ${isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)'} 100%)`,
                    border: '1px solid hsl(270 80% 60% / 0.2)',
                    boxShadow: 'inset -2px 0 8px hsl(270 80% 60% / 0.3), 0 0 0 1px rgba(0, 0, 0, 0.3)',
                }}
            >
                {isDark ? (
                    <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300 relative z-10 text-primary" />
                ) : (
                    <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300 relative z-10 text-primary" />
                )}
            </button>
        </aside>
    );
};

export default Sidebar;