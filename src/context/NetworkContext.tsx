"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useNetworkQuality, NetworkState } from "@/hooks/useNetworkQuality";

interface NetworkContextType extends NetworkState {
    dataSaverOverride: boolean | null;
    effectiveDataSaver: boolean;
    setDataSaverOverride: (value: boolean | null) => void;
    toggleDataSaver: () => void;
}

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

const STORAGE_KEY = "mowglai_data_saver";

export const NetworkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const networkQuality = useNetworkQuality();
    const [dataSaverOverride, setDataSaverOverrideState] = useState<boolean | null>(null);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved !== null) {
                setDataSaverOverrideState(saved === "true");
            }
        } catch {
            // LocalStorage not accessible
        }
    }, []);

    const setDataSaverOverride = (val: boolean | null) => {
        setDataSaverOverrideState(val);
        try {
            if (val === null) {
                localStorage.removeItem(STORAGE_KEY);
            } else {
                localStorage.setItem(STORAGE_KEY, String(val));
            }
        } catch {
            // Ignore storage errors
        }
    };

    const toggleDataSaver = () => {
        const current = dataSaverOverride !== null ? dataSaverOverride : networkQuality.isLowNetwork;
        setDataSaverOverride(!current);
    };

    // If user has explicitly overridden, honor override; otherwise default to automatic low network detection
    const effectiveDataSaver = dataSaverOverride !== null ? dataSaverOverride : networkQuality.isLowNetwork;

    return (
        <NetworkContext.Provider
            value={{
                ...networkQuality,
                dataSaverOverride,
                effectiveDataSaver,
                setDataSaverOverride,
                toggleDataSaver,
            }}
        >
            {children}
        </NetworkContext.Provider>
    );
};

const defaultNetworkState: NetworkContextType = {
    isOnline: true,
    isLowNetwork: false,
    effectiveType: "unknown",
    downlink: null,
    rtt: null,
    saveData: false,
    dataSaverOverride: null,
    effectiveDataSaver: false,
    setDataSaverOverride: () => {},
    toggleDataSaver: () => {},
};

export const useNetwork = (): NetworkContextType => {
    const context = useContext(NetworkContext);
    if (!context) {
        return defaultNetworkState;
    }
    return context;
};
