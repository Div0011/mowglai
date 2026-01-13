import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme || "dark";

        setTheme(initialTheme);
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
        <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-[calc(1rem+env(safe-area-inset-left))] md:bottom-[calc(2rem+env(safe-area-inset-bottom))] md:left-[calc(2rem+env(safe-area-inset-left))] z-[60] flex items-center justify-center">
            <button
                onClick={toggleTheme}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background/5 border border-primary/20 backdrop-blur-md flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]"
                aria-label="Toggle Theme"
            >
                {theme === "dark" ? (
                    <Moon className="w-5 h-5 md:w-6 md:h-6 animate-in fade-in rotate-0 transition-transform duration-500 hover:rotate-12" />
                ) : (
                    <Sun className="w-5 h-5 md:w-6 md:h-6 animate-in fade-in rotate-0 transition-transform duration-500 hover:rotate-90" />
                )}
            </button>
        </div>
    );
};

export default ThemeToggle;
