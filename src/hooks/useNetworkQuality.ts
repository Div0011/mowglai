"use client";

import { useState, useEffect, useCallback } from "react";

export type EffectiveConnectionType = "slow-2g" | "2g" | "3g" | "4g" | "unknown";

export interface NetworkState {
    isOnline: boolean;
    isLowNetwork: boolean;
    effectiveType: EffectiveConnectionType;
    downlink: number | null; // Mbps
    rtt: number | null; // ms
    saveData: boolean;
}

interface NetworkInformation extends EventTarget {
    effectiveType?: EffectiveConnectionType;
    downlink?: number;
    rtt?: number;
    saveData?: boolean;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

export function useNetworkQuality(): NetworkState {
    const [state, setState] = useState<NetworkState>({
        isOnline: true,
        isLowNetwork: false,
        effectiveType: "unknown",
        downlink: null,
        rtt: null,
        saveData: false,
    });

    const updateNetworkStatus = useCallback(() => {
        if (typeof window === "undefined") return;

        const isOnline = navigator.onLine;
        const nav = navigator as unknown as { connection?: NetworkInformation; mozConnection?: NetworkInformation; webkitConnection?: NetworkInformation };
        const conn = nav.connection || nav.mozConnection || nav.webkitConnection;

        const effectiveType = conn?.effectiveType || "unknown";
        const downlink = typeof conn?.downlink === "number" ? conn.downlink : null;
        const rtt = typeof conn?.rtt === "number" ? conn.rtt : null;
        const saveData = Boolean(conn?.saveData);

        // Classify as low network if connection is 2G, 3G, data saver is on, downlink is very low, or high latency
        const isLowBandwidth = downlink !== null && downlink > 0 && downlink < 1.5;
        const isHighLatency = rtt !== null && rtt > 600;
        const isLowType = effectiveType === "slow-2g" || effectiveType === "2g" || effectiveType === "3g";

        const isLowNetwork = !isOnline || isLowType || saveData || isLowBandwidth || isHighLatency;

        setState({
            isOnline,
            isLowNetwork,
            effectiveType,
            downlink,
            rtt,
            saveData,
        });
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        updateNetworkStatus();

        const handleOnline = () => updateNetworkStatus();
        const handleOffline = () => updateNetworkStatus();

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        const nav = navigator as unknown as { connection?: NetworkInformation; mozConnection?: NetworkInformation; webkitConnection?: NetworkInformation };
        const conn = nav.connection || nav.mozConnection || nav.webkitConnection;

        if (conn && typeof conn.addEventListener === "function") {
            conn.addEventListener("change", updateNetworkStatus);
        }

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
            if (conn && typeof conn.removeEventListener === "function") {
                conn.removeEventListener("change", updateNetworkStatus);
            }
        };
    }, [updateNetworkStatus]);

    return state;
}
