"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { usePerformanceMonitor } from "@/hooks/use-performance";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { NetworkProvider } from "@/context/NetworkContext";
import NetworkStatusIndicator from "@/components/NetworkStatusIndicator";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export function Providers({ children }: { children: React.ReactNode }) {
    // Initialize performance monitoring
    usePerformanceMonitor();

    return (
        <NetworkProvider>
            <CurrencyProvider>
                <TooltipProvider delayDuration={0}>
                    {children}
                    <Toaster />
                    <NetworkStatusIndicator />
                    <ServiceWorkerRegister />
                </TooltipProvider>
            </CurrencyProvider>
        </NetworkProvider>
    );
}
