"use client";

import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NextPageButton from "@/components/NextPageButton";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function OriginalAbout() {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setPageLoaded(true);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: pageLoaded ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
        >
            <PageLayout>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <AboutSection />
                </motion.div>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <MissionSection />
                </motion.div>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <TestimonialsSection />
                </motion.div>
                <NextPageButton label="CRAFT" href="/services" />
            </PageLayout>
        </motion.div>
    );
}
