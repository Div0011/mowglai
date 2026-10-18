"use client";

import { useEffect, useState } from "react";
import { useNetwork } from "@/context/NetworkContext";
import { Wifi, WifiOff, Zap, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NetworkStatusIndicator() {
    const { isOnline, isLowNetwork, effectiveType, effectiveDataSaver, toggleDataSaver } = useNetwork();
    const [dismissed, setDismissed] = useState(false);
    const [wasOffline, setWasOffline] = useState(false);
    const [showReconnected, setShowReconnected] = useState(false);

    // Track reconnection toast
    useEffect(() => {
        if (!isOnline) {
            setWasOffline(true);
        } else if (wasOffline) {
            setShowReconnected(true);
            const timer = setTimeout(() => {
                setShowReconnected(false);
                setWasOffline(false);
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [isOnline, wasOffline]);

    // Don't render anything if online with strong network and no data saver
    const shouldShow = (!isOnline || effectiveDataSaver || showReconnected) && !dismissed;

    if (!shouldShow) return null;

    return (
        <aside
            aria-label="Network status"
            className="fixed bottom-4 left-4 z-[9999] pointer-events-auto"
        >
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 px-3.5 py-2 rounded-full border shadow-2xl backdrop-blur-md bg-background/90 text-foreground text-xs font-mono select-none"
                    style={{
                        borderColor: !isOnline
                            ? "rgba(239, 68, 68, 0.4)"
                            : showReconnected
                            ? "rgba(34, 197, 94, 0.4)"
                            : "rgba(230, 185, 61, 0.4)",
                    }}
                >
                    {/* Status Icon */}
                    {!isOnline ? (
                        <div className="flex items-center gap-2 text-destructive">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
                            </span>
                            <WifiOff className="w-3.5 h-3.5" />
                            <span className="font-semibold">Offline Mode</span>
                        </div>
                    ) : showReconnected ? (
                        <div className="flex items-center gap-2 text-green-500">
                            <Wifi className="w-3.5 h-3.5" />
                            <span className="font-semibold">Back Online</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-amber-500 dark:text-[#E6B93D]">
                            <Zap className="w-3.5 h-3.5" />
                            <span>
                                Data Saver Active {effectiveType !== "unknown" ? `(${effectiveType.toUpperCase()})` : ""}
                            </span>
                        </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 pl-1 border-l border-border/60">
                        {isOnline && (
                            <button
                                onClick={toggleDataSaver}
                                className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-muted/80 hover:bg-muted text-foreground/80 transition-colors"
                                title="Toggle Data Saver"
                            >
                                {effectiveDataSaver ? "Turn Off" : "Enable"}
                            </button>
                        )}
                        <button
                            onClick={() => setDismissed(true)}
                            className="p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Dismiss notice"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </aside>
    );
}
