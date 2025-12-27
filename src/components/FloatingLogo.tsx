import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

const FloatingLogo = () => {

    return (
        <motion.div
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed z-[70] cursor-pointer group"
            style={{
                left: 72,
                top: 72,
                x: "-50%",
                y: "-50%",
            }}
            onMouseMove={(e) => {
                const btn = e.currentTarget as HTMLElement;
                const inner = btn.querySelector('.nav-logo-inner');
                const shell = btn.querySelector('.logo-shell');
                if (inner) gsap.to(inner, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
                if (shell) gsap.to(shell, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
            }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{
                rotate: { duration: 2, ease: "linear", repeat: Infinity },
                scale: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Logo Shell */}
            <div className="logo-shell absolute w-16 h-16 rounded-full bg-transparent group-hover:bg-primary/5 transition-all duration-700 pointer-events-none" />

            {/* Main Logo Container */}
            <div className="nav-logo-inner w-12 h-12 rounded-full bg-transparent overflow-hidden transition-all duration-300 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-colors" />

                <img
                    src={`${import.meta.env.BASE_URL}logo1.png`}
                    alt="Mowglai Logo"
                    className="w-full h-full object-contain hidden dark:block"
                />
                <img
                    src={`${import.meta.env.BASE_URL}logo2.png`}
                    alt="Mowglai Logo"
                    className="w-full h-full object-contain block dark:hidden"
                />
            </div>
        </motion.div>
    );
};

export default FloatingLogo;
