"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
    useEffect(() => {
        // Initialize AOS with a slight delay to avoid hydration mismatches
        setTimeout(() => {
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true,
                // offset: 50, // Optional: offset (in px) from the original trigger point
            });
        }, 100); // 100ms delay to ensure React hydration is complete
    }, []);

    return null;
};
