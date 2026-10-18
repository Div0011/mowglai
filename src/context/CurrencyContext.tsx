"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyType = "USD" | "INR" | "EUR" | "GBP";

interface CurrencyContextProps {
    currency: CurrencyType;
    setCurrency: (currency: CurrencyType) => void;
    country: string;
    formatPrice: (priceStr: string | number, planKey?: string) => string;
    convertVal: (usdVal: number) => { val: number; symbol: string };
}

// Exchange rates for general arbitrary amount calculations
const rates: Record<CurrencyType, number> = {
    USD: 1,
    INR: 86.5,
    EUR: 0.92,
    GBP: 0.79,
};

const symbols: Record<CurrencyType, string> = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
};

// Clean localized pricing table for Mowglai service tiers
export const TIER_PRICING: Record<string, Record<CurrencyType, { amount: number; formatted: string }>> = {
    // Basic service (starts at INR 5000 / USD 55)
    basic: {
        INR: { amount: 5000, formatted: "₹5,000" },
        USD: { amount: 55, formatted: "$55" },
        EUR: { amount: 50, formatted: "€50" },
        GBP: { amount: 45, formatted: "£45" },
    },
    // Advanced service
    advanced: {
        INR: { amount: 9999, formatted: "₹9,999" },
        USD: { amount: 110, formatted: "$110" },
        EUR: { amount: 100, formatted: "€100" },
        GBP: { amount: 90, formatted: "£90" },
    },
    // Store Essential
    store_essential: {
        INR: { amount: 12999, formatted: "₹12,999" },
        USD: { amount: 149, formatted: "$149" },
        EUR: { amount: 139, formatted: "€139" },
        GBP: { amount: 119, formatted: "£119" },
    },
    // Commerce Pro
    commerce_pro: {
        INR: { amount: 24999, formatted: "₹24,999" },
        USD: { amount: 299, formatted: "$299" },
        EUR: { amount: 279, formatted: "€279" },
        GBP: { amount: 239, formatted: "£239" },
    },
    // Apex Architecture tier
    apex: {
        INR: { amount: 49999, formatted: "₹49,999+" },
        USD: { amount: 599, formatted: "$599+" },
        EUR: { amount: 549, formatted: "€549+" },
        GBP: { amount: 479, formatted: "£479+" },
    },
    // Care maintenance monthly plans
    care: {
        INR: { amount: 1299, formatted: "₹1,299/mo" },
        USD: { amount: 15, formatted: "$15/mo" },
        EUR: { amount: 14, formatted: "€14/mo" },
        GBP: { amount: 12, formatted: "£12/mo" },
    },
    growth: {
        INR: { amount: 3499, formatted: "₹3,499/mo" },
        USD: { amount: 39, formatted: "$39/mo" },
        EUR: { amount: 36, formatted: "€36/mo" },
        GBP: { amount: 32, formatted: "£32/mo" },
    },
    elite: {
        INR: { amount: 6999, formatted: "₹6,999/mo" },
        USD: { amount: 79, formatted: "$79/mo" },
        EUR: { amount: 75, formatted: "€75/mo" },
        GBP: { amount: 65, formatted: "£65/mo" },
    },
    // Brand Evolution
    brand_evolution: {
        INR: { amount: 12999, formatted: "FROM ₹12,999" },
        USD: { amount: 149, formatted: "FROM $149" },
        EUR: { amount: 139, formatted: "FROM €139" },
        GBP: { amount: 119, formatted: "FROM £119" },
    },
};

const EU_COUNTRIES = new Set([
    "AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR",
    "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL",
    "PT", "RO", "SE", "SI", "SK"
]);

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currency, setCurrencyState] = useState<CurrencyType>("USD");
    const [country, setCountry] = useState<string>("US");

    // Auto-detect country & currency on mount with user override support
    useEffect(() => {
        // 1. Check user explicit preference
        const stored = localStorage.getItem("mowglai_currency") as CurrencyType;
        if (stored && rates[stored]) {
            setCurrencyState(stored);
            return;
        }

        // 2. Instant client detection via Intl timezone & browser locale (0ms network delay)
        let detectedCurrency: CurrencyType = "USD";
        let detectedCountry = "US";

        try {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
            const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || "";

            if (
                timeZone.includes("Kolkata") ||
                timeZone.includes("Calcutta") ||
                navLang.endsWith("-IN") ||
                navLang === "hi"
            ) {
                detectedCurrency = "INR";
                detectedCountry = "IN";
            } else if (timeZone.includes("London") || navLang.endsWith("-GB")) {
                detectedCurrency = "GBP";
                detectedCountry = "GB";
            } else if (timeZone.startsWith("Europe/")) {
                detectedCurrency = "EUR";
                detectedCountry = "EU";
            }
        } catch {
            // ignore error
        }

        setCurrencyState(detectedCurrency);
        setCountry(detectedCountry);

        // 3. Fallback Geo-IP verification if not set in localStorage
        fetch("https://ipapi.co/json/", { cache: "force-cache" })
            .then((res) => {
                if (!res.ok) throw new Error("Geo lookup error");
                return res.json();
            })
            .then((data) => {
                const userCountryCode = (data.country_code || "").toUpperCase();
                setCountry(userCountryCode);

                // If user didn't manually pick currency during load
                if (!localStorage.getItem("mowglai_currency")) {
                    if (userCountryCode === "IN") {
                        setCurrencyState("INR");
                    } else if (userCountryCode === "GB") {
                        setCurrencyState("GBP");
                    } else if (EU_COUNTRIES.has(userCountryCode)) {
                        setCurrencyState("EUR");
                    } else {
                        setCurrencyState("USD");
                    }
                }
            })
            .catch(() => {
                // Silently fallback to detected currency
            });
    }, []);

    const setCurrency = (cur: CurrencyType) => {
        setCurrencyState(cur);
        localStorage.setItem("mowglai_currency", cur);
    };

    const convertVal = (usdVal: number) => {
        const rate = rates[currency];
        const symbol = symbols[currency];
        return {
            val: Math.round(usdVal * rate),
            symbol,
        };
    };

    const formatPrice = (priceStr: string | number, planKey?: string): string => {
        if (typeof priceStr === "number") {
            // Direct numerical conversion if planKey not passed
            if (planKey && TIER_PRICING[planKey]) {
                return TIER_PRICING[planKey][currency].formatted;
            }
            const { val, symbol } = convertVal(priceStr);
            return `${symbol}${val.toLocaleString()}`;
        }

        const cleanStr = priceStr.trim();

        // Check for non-numeric states
        const upper = cleanStr.toUpperCase();
        if (
            upper === "CUSTOM" ||
            upper === "COMING SOON" ||
            upper === "WAITLIST" ||
            upper === "PER FEATURE" ||
            upper === "FREE"
        ) {
            return cleanStr;
        }

        // Check for tier match via planKey or string detection
        const normalized = (planKey || cleanStr).toLowerCase().replace(/[\s-_]+/g, "");

        if (normalized.includes("basic") || cleanStr === "$55" || cleanStr === "$499" || cleanStr === "55") {
            return TIER_PRICING.basic[currency].formatted;
        }
        if (normalized.includes("advanced") || cleanStr === "$110" || cleanStr === "$999" || cleanStr === "110") {
            return TIER_PRICING.advanced[currency].formatted;
        }
        if (normalized.includes("storeessential") || cleanStr === "$149" || cleanStr === "149") {
            return TIER_PRICING.store_essential[currency].formatted;
        }
        if (normalized.includes("commercepro") || cleanStr === "$299" || cleanStr === "$1,999" || cleanStr === "299") {
            return TIER_PRICING.commerce_pro[currency].formatted;
        }
        if (normalized.includes("apex") || cleanStr.includes("4,999") || cleanStr.includes("599")) {
            return TIER_PRICING.apex[currency].formatted;
        }
        if (normalized.includes("care") || cleanStr === "$15/mo") {
            return TIER_PRICING.care[currency].formatted;
        }
        if (normalized.includes("growth") || cleanStr === "$39/mo" || cleanStr === "$49/mo") {
            return TIER_PRICING.growth[currency].formatted;
        }
        if (normalized.includes("elite") || cleanStr === "$79/mo" || cleanStr === "$99/mo") {
            return TIER_PRICING.elite[currency].formatted;
        }
        if (normalized.includes("brandevolution") || cleanStr.toUpperCase().includes("FROM $149") || cleanStr.toUpperCase().includes("FROM $1499")) {
            return TIER_PRICING.brand_evolution[currency].formatted;
        }

        // Generic numeric amount fallback
        const numericMatch = cleanStr.replace(/,/g, "").match(/\d+/);
        if (!numericMatch) {
            return cleanStr;
        }

        const usdAmount = parseFloat(numericMatch[0]);
        const { val, symbol } = convertVal(usdAmount);

        let suffix = "";
        if (cleanStr.toLowerCase().includes("/mo")) {
            suffix = "/mo";
        } else if (cleanStr.includes("+")) {
            suffix = "+";
        }

        if (cleanStr.toLowerCase().includes("from")) {
            return `FROM ${symbol}${val.toLocaleString()}${suffix}`;
        }

        return `${symbol}${val.toLocaleString()}${suffix}`;
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, country, formatPrice, convertVal }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
};
