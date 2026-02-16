"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Clock, CheckCircle, AlertCircle, ShoppingBag, CreditCard, Search, Loader2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Purchase {
    id: string; // or number depending on DB, treating as string for safety
    plan_name: string;
    purchase_date: string;
    expiration_date: string | null;
    status: string;
    details: string;
}

export default function UserPurchasesSection() {
    const [email, setEmail] = useState("");
    const [searchedEmail, setSearchedEmail] = useState("");
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setError("");
        setPurchases([]);
        setHasSearched(true);
        setSearchedEmail(email);

        try {
            const res = await fetch(`/api/get-purchases.php?email=${encodeURIComponent(email)}`);
            const data = await res.json();

            if (data.success) {
                setPurchases(data.purchases);
            } else {
                setError(data.message || "Failed to fetch purchases.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "active": return "text-green-500 bg-green-500/10 border-green-500/20";
            case "completed": return "text-blue-500 bg-blue-500/10 border-blue-500/20";
            case "expired": return "text-red-500 bg-red-500/10 border-red-500/20";
            case "cancelled": return "text-gray-500 bg-gray-500/10 border-gray-500/20";
            default: return "text-primary bg-primary/10 border-primary/20";
        }
    };

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "N/A";
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div id="your-assets" className="w-full max-w-7xl mx-auto py-24 relative z-10 scroll-mt-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary/10 pb-8 gap-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-4 text-foreground">
                        Your <span className="text-primary italic">Assets</span>
                    </h2>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
                        Access your purchase history and subscription details.
                    </p>
                </div>
            </div>

            {/* Email Search Form */}
            <div className="max-w-xl mx-auto mb-20">
                <form onSubmit={handleSearch} className="relative group">
                    <div className="relative flex items-center bg-secondary/10 border border-primary/20 rounded-full p-2 backdrop-blur-sm transition-all focus-within:border-primary/50 focus-within:bg-secondary/20 hover:border-primary/30">
                        <div className="pl-6 text-primary/50">
                            <Search className="w-5 h-5" />
                        </div>
                        <Input
                            type="email"
                            placeholder="Enter your registered email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent border-none shadow-none focus-visible:ring-0 text-lg placeholder:text-muted-foreground/40 h-14"
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                            className="rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Access"}
                        </Button>
                    </div>
                </form>
            </div>

            {/* Results Area */}
            <AnimatePresence mode="wait">
                {hasSearched && !loading && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-8"
                    >
                        {error ? (
                            <div className="text-center p-12 rounded-[2.5rem] bg-red-500/5 border border-red-500/10">
                                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h3 className="text-xl font-display font-bold text-red-500 mb-2">Access Error</h3>
                                <p className="text-muted-foreground">{error}</p>
                            </div>
                        ) : purchases.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6">
                                {purchases.map((purchase) => (
                                    <motion.div
                                        key={purchase.id}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="group relative overflow-hidden rounded-[2rem] bg-secondary/5 border border-primary/10 hover:border-primary/30 transition-all p-6 md:p-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                            {/* Icon & Name */}
                                            <div className="md:col-span-4 flex items-center gap-6">
                                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                                    <ShoppingBag className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase leading-tight mb-2">
                                                        {purchase.plan_name}
                                                    </h3>
                                                    <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border", getStatusColor(purchase.status))}>
                                                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                                        {purchase.status}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Details Columns */}
                                            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                <div className="p-4 rounded-xl bg-background/30 border border-primary/5">
                                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">
                                                        <Calendar className="w-3 h-3" /> Purchase Date
                                                    </div>
                                                    <div className="text-sm font-mono font-medium">
                                                        {formatDate(purchase.purchase_date)}
                                                    </div>
                                                </div>

                                                <div className="p-4 rounded-xl bg-background/30 border border-primary/5">
                                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">
                                                        <Clock className="w-3 h-3" /> Expiration
                                                    </div>
                                                    <div className={cn("text-sm font-mono font-medium",
                                                        purchase.status === 'expired' ? "text-red-400" : "text-primary"
                                                    )}>
                                                        {formatDate(purchase.expiration_date)}
                                                    </div>
                                                </div>

                                                <div className="p-4 rounded-xl bg-background/30 border border-primary/5">
                                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">
                                                        <CreditCard className="w-3 h-3" /> Details
                                                    </div>
                                                    <div className="text-xs text-muted-foreground leading-relaxed">
                                                        {purchase.details || "No additional details available."}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center p-12">
                                <p className="text-xl text-muted-foreground font-light">
                                    No purchases found for <span className="text-foreground font-bold">{searchedEmail}</span>.
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
