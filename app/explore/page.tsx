"use client";

import { useState, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Filter, X, Search, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import PageLayout from '@/components/PageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { sectors, allTemplates, Template, Sector } from '@/data/templates'
import PremiumTemplateCard from '@/components/PremiumTemplateCard'
import CustomSelect from '@/components/ui/CustomSelect'
// Filter Constants
const pageRanges = [
    { label: 'Single Page (1)', value: '1' },
    { label: 'Small (2-5)', value: 'small' },
    { label: 'Medium (6-10)', value: 'medium' },
    { label: 'Large (11+)', value: 'large' }
]

const toggleFilter = (state: string[], setState: (val: string[]) => void, value: string) => {
    if (state.includes(value)) {
        setState(state.filter(item => item !== value))
    } else {
        setState([...state, value])
    }
}

export default function ExplorePage() {
    // Filter States
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured')
    const [selectedSector, setSelectedSector] = useState<string>('all')
    const [pageRange, setPageRange] = useState<string[]>([])
    const [websiteTypes, setWebsiteTypes] = useState<string[]>([])
    const [structures, setStructures] = useState<string[]>([])
    const [cmsTypes, setCmsTypes] = useState<string[]>([])
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Derived Data for Filters
    const allTemplatesFlat = useMemo(() => {
        return Object.values(allTemplates).flat()
    }, [])

    const uniqueWebsiteTypes = useMemo(() => Array.from(new Set(allTemplatesFlat.map(t => t.type))), [allTemplatesFlat])
    const uniqueStructures = useMemo(() => Array.from(new Set(allTemplatesFlat.map(t => t.structure))), [allTemplatesFlat])
    const uniqueCmsTypes = useMemo(() => Array.from(new Set(allTemplatesFlat.map(t => t.cms))), [allTemplatesFlat])

    // Filter Logic
    const filteredTemplates = useMemo(() => {
        return allTemplatesFlat.filter(template => {
            // Search Filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase()
                const matchesSearch =
                    template.title.toLowerCase().includes(query) ||
                    template.description.toLowerCase().includes(query) ||
                    template.tags.some(tag => tag.toLowerCase().includes(query))

                if (!matchesSearch) return false
            }

            // Sector Filter
            if (selectedSector !== 'all') {
                // Find which sector array contains this template
                const sectorKey = Object.keys(allTemplates).find(key =>
                    allTemplates[key].some(t => t.id === template.id)
                )
                if (sectorKey !== selectedSector) return false
            }

            // Page Range Filter
            if (pageRange.length > 0) {
                const matchesRange = pageRange.some(range => {
                    if (range === '1') return template.pages === 1
                    if (range === 'small') return template.pages >= 2 && template.pages <= 5
                    if (range === 'medium') return template.pages >= 6 && template.pages <= 10
                    if (range === 'large') return template.pages >= 11
                    return false
                })
                if (!matchesRange) return false
            }

            // Website Type Filter
            if (websiteTypes.length > 0 && !websiteTypes.includes(template.type)) return false

            // Structure Filter
            if (structures.length > 0 && !structures.includes(template.structure)) return false

            // CMS Filter
            if (cmsTypes.length > 0 && !cmsTypes.includes(template.cms)) return false

            return true
            return true
        }).sort((a, b) => {
            if (sortBy === 'price-asc') {
                return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''))
            }
            if (sortBy === 'price-desc') {
                return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''))
            }
            // For featured/newest we just use default order for now as we don't have date
            return 0
        })
    }, [selectedSector, pageRange, websiteTypes, structures, cmsTypes, allTemplatesFlat, searchQuery, sortBy])

    const filterProps = {
        selectedSector, setSelectedSector,
        pageRange, setPageRange,
        websiteTypes, setWebsiteTypes, uniqueWebsiteTypes,
        structures, setStructures, uniqueStructures,
        cmsTypes, setCmsTypes, uniqueCmsTypes
    }



    return (
        <PageLayout>
            <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-12 bg-background relative overflow-hidden">

                {/* Enhanced Ambient Background - Deeper & Richer */}
                <div className="fixed top-0 left-0 w-full h-full bg-[#050a08] -z-20" /> {/* Dark base */}
                <div className="fixed top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen animate-pulse-glow" />
                <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }} />
                <div className="fixed top-[20%] right-[10%] w-[30vw] h-[30vw] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen opacity-50" />

                {/* Noise overlay for texture */}
                <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none -z-10" />

                <div className="max-w-[1500px] mx-auto relative z-10">
                    {/* Header */}
                    <div className="mb-20 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                                Premium Collection
                            </span>
                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight leading-[1.1] md:leading-[0.9]">
                                Explore <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">World Class</span> <span className="text-primary italic">Templates</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
                                A curated selection of {filteredTemplates.length} hand-crafted, high-performance websites designed to convert visitors into customers.
                            </p>
                        </motion.div>
                    </div>

                    {/* Search & Sort Bar Container */}
                    <div className="mb-12 sticky top-24 z-30">
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl -z-10 -mx-4 md:-mx-8 lg:-mx-12 h-full opacity-0 pointer-events-none transition-opacity duration-300" id="sticky-blur" />

                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-start relative">
                            {/* Search Column - Aligns with Templates Grid */}
                            <div className="w-full flex-1">
                                <div className="relative w-full group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    <div className="relative flex items-center">
                                        <Search className="absolute left-6 text-muted-foreground w-6 h-6 group-focus-within:text-primary transition-colors duration-300" />
                                        <input
                                            type="text"
                                            placeholder="Search templates..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-16 pr-6 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none shadow-xl text-lg text-foreground placeholder:text-muted-foreground"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Sort Column - Aligns with Filter Sidebar */}
                            <div className="w-full lg:w-[320px] shrink-0 flex gap-4">
                                <CustomSelect
                                    value={sortBy}
                                    onChange={(val) => setSortBy(val as any)}
                                    options={[
                                        { label: "Featured", value: "featured", icon: "✨" },
                                        { label: "Newest", value: "newest", icon: "🔥" },
                                        { label: "Price: Low to High", value: "price-asc", icon: "💰" },
                                        { label: "Price: High to Low", value: "price-desc", icon: "💎" },
                                    ]}
                                    className="w-full"
                                />

                                {/* Mobile Filter Toggle */}
                                <button
                                    onClick={() => setIsMobileFiltersOpen(true)}
                                    className="lg:hidden flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-bold transition-all whitespace-nowrap shadow-lg active:scale-95"
                                >
                                    <Filter className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 relative">

                        {/* Templates Grid (Left Side) - Adjusted for larger cards */}
                        <div className="flex-1 min-h-[600px]">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                                >
                                    {filteredTemplates.length > 0 ? (
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0 },
                                                show: {
                                                    opacity: 1,
                                                    transition: {
                                                        staggerChildren: 0.08
                                                    }
                                                }
                                            }}
                                            initial="hidden"
                                            animate="show"
                                            className="contents"
                                        >
                                            {filteredTemplates.map((template) => (
                                                <PremiumTemplateCard key={template.id} template={template} />
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <div className="col-span-full text-center py-32 bg-secondary/5 rounded-[3rem] border border-dashed border-border/50">
                                            <p className="text-2xl text-muted-foreground mb-4 font-light">No templates found matching your criteria.</p>
                                            <button
                                                onClick={() => {
                                                    setSearchQuery('')
                                                    setSortBy('featured')
                                                    setSelectedSector('all')
                                                    setPageRange([])
                                                    setWebsiteTypes([])
                                                    setStructures([])
                                                    setCmsTypes([])
                                                }}
                                                className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform font-bold"
                                            >
                                                Reset Filters
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Sidebar Filters (Desktop) */}
                        <div className="hidden lg:block w-[320px] shrink-0">
                            <div className="sticky top-32 space-y-10 p-2">
                                <h2 className="text-2xl font-bold mb-6 font-display flex items-center gap-2">
                                    <Filter className="w-5 h-5 text-primary" /> Filter Results
                                </h2>
                                <FilterContent {...filterProps} />
                            </div>
                        </div>

                        {/* Mobile Filter Portal */}
                        {mounted && isMobileFiltersOpen && createPortal(
                            <div className="fixed inset-0 z-[1000] flex">
                                {/* Backdrop */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                                    onClick={() => setIsMobileFiltersOpen(false)}
                                />

                                {/* Sidebar */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="relative w-[90vw] max-w-[400px] ml-auto h-full bg-background/95 backdrop-blur-xl shadow-2xl p-8 overflow-y-auto border-l border-white/10"
                                >
                                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-border sticky top-0 md:static z-20 pt-2">
                                        <h2 className="text-3xl font-bold font-display">Filters</h2>
                                        <button
                                            onClick={() => setIsMobileFiltersOpen(false)}
                                            className="p-2 bg-secondary/50 rounded-full hover:bg-secondary transition-colors"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <div className="space-y-10">
                                        <FilterContent {...filterProps} />
                                    </div>
                                </motion.div>
                            </div>,
                            document.body
                        )}

                    </div>
                </div>
            </div>
        </PageLayout>
    )
}


function FilterContent({
    selectedSector, setSelectedSector,
    pageRange, setPageRange,
    websiteTypes, setWebsiteTypes, uniqueWebsiteTypes,
    structures, setStructures, uniqueStructures,
    cmsTypes, setCmsTypes, uniqueCmsTypes
}: any) {
    return (
        <div className="space-y-8">
            {/* Filter Group: Category */}
            <div className="space-y-4">
                <h3 className="font-display font-medium text-sm uppercase tracking-widest text-muted-foreground/80">Category</h3>
                <div className="space-y-1">
                    <label className="flex items-center gap-3 cursor-pointer group py-2 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-all">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedSector === 'all' ? 'border-primary bg-primary' : 'border-muted-foreground/50 group-hover:border-primary/50'}`}>
                            {selectedSector === 'all' && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </div>
                        <input
                            type="radio"
                            name="sector"
                            checked={selectedSector === 'all'}
                            onChange={() => setSelectedSector('all')}
                            className="hidden"
                        />
                        <span className={`text-sm transition-colors ${selectedSector === 'all' ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>All Categories</span>
                    </label>
                    {sectors.map((sector: Sector) => (
                        <label key={sector.id} className="flex items-center gap-3 cursor-pointer group py-2 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-all">
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedSector === sector.id ? 'border-primary bg-primary' : 'border-muted-foreground/50 group-hover:border-primary/50'}`}>
                                {selectedSector === sector.id && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                            </div>
                            <input
                                type="radio"
                                name="sector"
                                checked={selectedSector === sector.id}
                                onChange={() => setSelectedSector(sector.id)}
                                className="hidden"
                            />
                            <span className={`text-sm transition-colors ${selectedSector === sector.id ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>{sector.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: No. of Pages */}
            <div className="space-y-4">
                <h3 className="font-display font-medium text-sm uppercase tracking-widest text-muted-foreground/80">No. of Pages</h3>
                <div className="space-y-1">
                    {pageRanges.map(range => (
                        <label key={range.value} className="flex items-center gap-3 cursor-pointer group py-2 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-all">
                            <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-all ${pageRange.includes(range.value) ? 'border-primary bg-primary text-black' : 'border-muted-foreground/50 group-hover:border-primary/50'}`}>
                                {pageRange.includes(range.value) && <Check className="w-3 h-3" />}
                            </div>
                            <input
                                type="checkbox"
                                checked={pageRange.includes(range.value)}
                                onChange={() => toggleFilter(pageRange, setPageRange, range.value)}
                                className="hidden"
                            />
                            <span className={`text-sm transition-colors ${pageRange.includes(range.value) ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>{range.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: Website Type */}
            <div className="space-y-4">
                <h3 className="font-display font-medium text-sm uppercase tracking-widest text-muted-foreground/80">Website Type</h3>
                <div className="flex flex-wrap gap-2">
                    {uniqueWebsiteTypes.map((type: string) => (
                        <label key={type} className={`cursor-pointer px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${websiteTypes.includes(type) ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-foreground'}`}>
                            <input
                                type="checkbox"
                                checked={websiteTypes.includes(type)}
                                onChange={() => toggleFilter(websiteTypes, setWebsiteTypes, type)}
                                className="hidden"
                            />
                            {type}
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: Tech Stack & Structure Combined/Cleaned */}
            <div className="space-y-4">
                <h3 className="font-display font-medium text-sm uppercase tracking-widest text-muted-foreground/80">Tech & CMS</h3>
                <div className="space-y-1">
                    {[...uniqueCmsTypes, ...uniqueStructures].map((item: string) => (
                        <label key={item} className="flex items-center gap-3 cursor-pointer group py-2 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-all">
                            <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-all ${cmsTypes.includes(item) || structures.includes(item) ? 'border-primary bg-primary text-black' : 'border-muted-foreground/50 group-hover:border-primary/50'}`}>
                                {(cmsTypes.includes(item) || structures.includes(item)) && <Check className="w-3 h-3" />}
                            </div>
                            <input
                                type="checkbox"
                                checked={cmsTypes.includes(item) || structures.includes(item)}
                                onChange={() => {
                                    // Dirty check to see which list it belongs to
                                    if (uniqueCmsTypes.includes(item)) toggleFilter(cmsTypes, setCmsTypes, item)
                                    else toggleFilter(structures, setStructures, item)
                                }}
                                className="hidden"
                            />
                            <span className={`text-sm transition-colors ${cmsTypes.includes(item) || structures.includes(item) ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>{item}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Check({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}




