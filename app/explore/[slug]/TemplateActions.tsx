"use client";

import { ShoppingCart, Eye } from "lucide-react";

interface TemplateActionsProps {
    templateId: string;
    price: string;
    isMobileBar?: boolean;
}

export default function TemplateActions({ templateId, price, isMobileBar }: TemplateActionsProps) {
    if (isMobileBar) {
        return (
            <div className="w-full flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Price</span>
                    <span className="text-lg font-bold text-white leading-none">{price || "$49"}</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => window.open(`/previews/${templateId}.html`, '_blank')}
                        className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                        <Eye className="w-4 h-4" />
                    </button>
                    <button className="h-10 px-5 bg-primary text-primary-foreground font-bold text-sm rounded-full flex items-center gap-2 shadow-lg shadow-primary/20">
                        <ShoppingCart className="w-4 h-4" />
                        Buy
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-4 pt-4">
            <div className="w-full xl:w-auto flex-1">
                <span className="block text-sm text-muted-foreground mb-1">
                    Price
                </span>
                <span className="text-4xl font-bold text-foreground">
                    {price || "$49"}
                </span>
            </div>
            <div className="flex flex-col-reverse xl:flex-row gap-3 flex-1 min-w-[280px]">
                <button
                    onClick={() => window.open(`/previews/${templateId}.html`, '_blank')}
                    className="group w-full xl:w-auto py-4 px-6 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                >
                    <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Preview
                </button>
                <button className="w-full xl:w-auto flex-1 py-4 px-6 bg-primary text-primary-foreground font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-primary/25 whitespace-nowrap">
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                </button>
            </div>
        </div>
    );
}
