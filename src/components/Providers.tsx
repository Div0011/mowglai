"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { usePerformanceMonitor } from "@/hooks/use-performance";
import { CurrencyProvider } from "@/context/CurrencyContext";

export function Providers({ children }: { children: React.ReactNode }) {
    // Initialize performance monitoring
    usePerformanceMonitor();

    return (
        <CurrencyProvider>
            <TooltipProvider delayDuration={0}>
                {children}
                <Toaster />
            </TooltipProvider>
        </CurrencyProvider>
    );
}
