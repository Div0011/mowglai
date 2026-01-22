"use client";

import { ShoppingCart, Eye } from "lucide-react";

interface TemplateActionsProps {
    templateId: string;
    price: string;
}

export default function TemplateActions({ templateId, price }: TemplateActionsProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <div className="w-full sm:w-auto">
                <span className="block text-sm text-muted-foreground mb-1">
                    Price
                </span>
                <span className="text-4xl font-bold text-foreground">
                    {price || "$49"}
                </span>
            </div>
            <button className="w-full sm:flex-1 py-4 px-8 bg-primary text-primary-foreground font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-primary/25">
                <ShoppingCart className="w-5 h-5" />
                Buy Template
            </button>
            <button
                onClick={() => window.open(`/previews/${templateId}.html`, '_blank')}
                className="w-full sm:w-auto py-4 px-8 bg-secondary text-secondary-foreground font-bold rounded-2xl hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
            >
                <Eye className="w-4 h-4" />
                Live Preview
            </button>
        </div>
    );
}
