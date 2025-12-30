import { useEffect, Suspense, useState } from "react";
import GalaxyBackground from "@/components/GalaxyBackground";
import FullScreenNav from "@/components/FullScreenNav";
import MobileNav from "@/components/MobileNav";
import CustomCursor from "@/components/CustomCursor";
import ThemeToggle from "@/components/ThemeToggle";
import ChatbotModal from "@/components/ChatbotModal";
import { Bot } from "lucide-react";

import Footer from "@/components/Footer";
import ScrollToTop from "./ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import JungleBackground from "@/components/JungleBackground";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    const location = useLocation();
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        // Initialize AOS
        import("aos").then((AOS) => {
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true,
            });
        });
    }, []);

    return (
        <div className="min-h-screen relative text-foreground transition-colors duration-500">
            <ScrollToTop />
            <CustomCursor />
            <ThemeToggle />

            {/* Background - Spans entire page height */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <JungleBackground />
            </div>

            <FullScreenNav onOpenChat={() => setIsChatOpen(true)} />
            <MobileNav />

            {/* Permanent Chatbot Trigger - Bottom Right */}
            <div className="fixed bottom-8 right-8 z-[60]">
                <button
                    onClick={() => setIsChatOpen(true)}
                    className="relative group w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] backdrop-blur-md"
                    aria-label="Open AI Assistant"
                >
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20 group-hover:opacity-40" />
                    <Bot className="w-6 h-6 text-primary z-10" />
                </button>
            </div>

            <ChatbotModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

            <main className="relative z-10 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-primary font-display animate-pulse">Loading Content...</div>}>
                            {children}
                            <Footer />
                        </Suspense>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default PageLayout;
