"use client";

import { useStyle } from "@/context/StyleContext";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const OriginalHome = dynamic(() => import("@/styles/original/Home"), { ssr: false });
const MinimalHome = dynamic(() => import("@/styles/minimal/Home"), { ssr: false });
const CandyHome = dynamic(() => import("@/styles/candy/Home"), { ssr: false });

export default function HomeSwitcher() {
    const { style } = useStyle();

    return (
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading Experience...</div>}>
            {style === "original" && <OriginalHome />}
            {style === "minimal" && <MinimalHome />}
            {style === "candy" && <CandyHome />}
        </Suspense>
    );
}
