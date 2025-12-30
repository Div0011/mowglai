import { Home, Users, Mail, DollarSign, Layers } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Users, label: "About", href: "/about" },
    { icon: Layers, label: "Services", href: "/services" },
    { icon: DollarSign, label: "Price", href: "/investment" },
    { icon: Mail, label: "Contact", href: "/contact" },
];

const MobileNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState("Home");

    // Sync active item with location
    useEffect(() => {
        const currentPath = location.pathname;
        const active = navItems.find(item => item.href === currentPath);
        if (active) setActiveItem(active.label);
    }, [location]);

    const handleClick = (e: React.MouseEvent, label: string, href: string) => {
        e.preventDefault();
        setActiveItem(label);
        navigate(href);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 md:hidden flex flex-col gap-4"
            aria-label="Mobile Navigation"
        >
            <div
                className="rounded-full py-6 px-2 flex flex-col justify-center items-center gap-6"
                style={{
                    background: 'hsl(var(--background) / 0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid hsl(var(--border) / 0.2)',
                    boxShadow: '0 0 20px hsl(var(--primary) / 0.15)',
                }}
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
                                "flex flex-col items-center justify-center w-14 transition-all duration-300 relative",
                                isActive ? "text-primary scale-110" : "text-muted-foreground opacity-70 hover:opacity-100"
                            )}
                            aria-label={item.label}
                        >
                            <div className={cn(
                                "p-2 rounded-full transition-all duration-300 mb-1",
                                isActive ? "bg-primary/20 shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]" : "bg-transparent"
                            )}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <span className={cn(
                                "text-xs font-medium tracking-wide",
                                isActive ? "font-bold" : "font-normal"
                            )}>
                                {item.label}
                            </span>

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-l-full shadow-[0_0_10px_var(--primary)] animate-pulse" />
                            )}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNav;
