"use client";

import Link from "next/link";
import { WifiOff, RefreshCw, Home, PhoneCall } from "lucide-react";
import MowglaiLogo from "@/components/MowglaiLogo";

export default function OfflinePage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden bg-background text-foreground">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
                {/* Logo & Offline Icon */}
                <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg">
                        <MowglaiLogo size="sm" className="scale-90" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-destructive/20 border border-destructive/40 text-destructive flex items-center justify-center">
                        <WifiOff className="w-4 h-4" />
                    </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-muted text-muted-foreground border border-border mb-4">
                    Network Disconnected
                </div>

                <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 tracking-tight">
                    You Are Currently Offline
                </h1>

                <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
                    It looks like your connection dropped. Mowglai has cached core pages so you can keep browsing your recent pages.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center mb-10">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm shadow-md"
                    >
                        <RefreshCw className="w-4 h-4" /> Try Reconnecting
                    </button>
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-card border border-border text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors text-sm"
                    >
                        <Home className="w-4 h-4" /> Return Home
                    </Link>
                </div>

                {/* Cached Navigation Links */}
                <div className="w-full pt-6 border-t border-border/60">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                        Available Offline Pages
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-xs font-medium">
                        <Link href="/about" className="px-3 py-1.5 rounded-lg bg-muted/60 hover:bg-muted text-foreground transition-colors">
                            About
                        </Link>
                        <Link href="/services" className="px-3 py-1.5 rounded-lg bg-muted/60 hover:bg-muted text-foreground transition-colors">
                            Services
                        </Link>
                        <Link href="/investment" className="px-3 py-1.5 rounded-lg bg-muted/60 hover:bg-muted text-foreground transition-colors">
                            Pricing
                        </Link>
                        <Link href="/contact" className="px-3 py-1.5 rounded-lg bg-muted/60 hover:bg-muted text-foreground transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Direct Contact info */}
                <div className="mt-8 text-xs text-muted-foreground flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-primary" />
                    <span>Need immediate support? Call us: <a href="tel:+919876543210" className="underline hover:text-primary">+91 98765 43210</a></span>
                </div>
            </div>
        </div>
    );
}
