"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if splash screen already ran this session
    try {
      if (sessionStorage.getItem("mowglai_splash_seen")) {
        return;
      }
    } catch {
      // ignore storage access issues
    }

    setShow(true);
    try {
      sessionStorage.setItem("mowglai_splash_seen", "true");
    } catch {
      // ignore
    }

    // Fast reveal: start fadeOut after 450ms
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 450);

    // Completely unmount after 700ms
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  const letters = "MOWGLAI".split("");

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div 
          onClick={() => setShow(false)}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#020804] overflow-hidden cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Ambient Jungle Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-[#22c55e]/15 rounded-full blur-[80px]" />
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[400px] bg-[#F5D061]/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Animated Wordmark Blocks */}
            <div className="flex gap-1.5 sm:gap-3 md:gap-4 overflow-hidden py-2 px-2 sm:px-8">
              {letters.map((letter, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.25, 
                    delay: i * 0.03, 
                    ease: "easeOut" 
                  }}
                  className="w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl sm:rounded-2xl md:rounded-3xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-[#F5D061] drop-shadow-[0_0_15px_rgba(245,208,97,0.5)]">
                    {letter}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Animated Services */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-[90vw] md:max-w-[70vw]">
              {["Web Development", "SaaS MVP", "Digital Agency", "3D Experiences"].map((service, idx) => (
                <span
                  key={idx}
                  className="font-body text-xs md:text-sm font-medium text-[#22c55e] bg-[#22c55e]/10 border border-[#22c55e]/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full backdrop-blur-md tracking-wide"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
