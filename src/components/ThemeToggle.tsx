import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        // Check system preference or localStorage on mount
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme || "dark";

        setTheme(initialTheme);
        document.documentElement.className = initialTheme;
        // We add the 'dark' class by default in index.html usually, but here we control via class on html
        // However, shadcn/tailwind often uses 'dark' class for dark mode.
        // Our CSS uses .light class to override variables. So if theme is light, add 'light' class.
        if (initialTheme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    };

    return (
        <div className="fixed bottom-3 left-3 z-[100] flex items-center justify-center">
            <button
                onClick={toggleTheme}
                className={`
                    relative w-20 h-10 rounded-full transition-all duration-500 ease-out p-1
                    bg-gradient-to-b from-background/50 to-background/80
                    backdrop-blur-xl border border-primary/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2),0_10px_30px_rgba(0,0,0,0.2)]
                    group hover:border-primary/40
                `}
                aria-label="Toggle Theme"
            >
                {/* Visual Track Indicators */}
                <div className="absolute inset-0 flex justify-between items-center px-3 opacity-50">
                    <Moon size={14} className="text-primary" />
                    <Sun size={14} className="text-primary" />
                </div>

                {/* The Sliding Knob */}
                <div
                    className={`
                        absolute top-1 left-1 w-8 h-8 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)]
                        transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        flex items-center justify-center
                        ${theme === "dark" ? "translate-x-0" : "translate-x-10"}
                    `}
                >
                    {/* Glossy Donut Design */}
                    <div className={`
                        w-full h-full rounded-full border-[6px] 
                        transition-colors duration-500
                        bg-transparent
                        ${theme === "dark"
                            ? "border-primary shadow-[0_0_15px_rgba(252,220,177,0.4)]"
                            : "border-primary shadow-[0_0_15px_rgba(20,50,30,0.4)]"
                        }
                    `}>
                        {/* Inner Hole */}
                        <div className="w-full h-full rounded-full bg-background/80 backdrop-blur-sm" />
                    </div>
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;
