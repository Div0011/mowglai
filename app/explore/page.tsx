"use client";

import { useState, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Filter, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import PageLayout from '@/components/PageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { sectors, allTemplates, Template, Sector } from '@/data/templates'

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
        })
    }, [selectedSector, pageRange, websiteTypes, structures, cmsTypes, allTemplatesFlat])

    const filterProps = {
        selectedSector, setSelectedSector,
        pageRange, setPageRange,
        websiteTypes, setWebsiteTypes, uniqueWebsiteTypes,
        structures, setStructures, uniqueStructures,
        cmsTypes, setCmsTypes, uniqueCmsTypes
    }



    return (
        <PageLayout>
            <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-12 bg-background relative">

                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-[40vh] bg-primary/5 blur-3xl -z-10 rounded-b-[50%]" />

                <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                            Explore <span className="text-primary">Templates</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-light">
                            {filteredTemplates.length} templates found matching your criteria.
                        </p>
                    </div>

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-8">
                        <button
                            onClick={() => setIsMobileFiltersOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg font-medium"
                        >
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 relative">

                        {/* Templates Grid (Left Side) */}
                        <div className="flex-1 min-h-[600px]">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                                >
                                    {filteredTemplates.length > 0 ? (
                                        filteredTemplates.map((template) => (
                                            <TemplateCard key={template.id} template={template} />
                                        ))
                                    ) : (
                                        <div className="col-span-full text-center py-20 bg-secondary/20 rounded-3xl">
                                            <p className="text-xl text-muted-foreground">No templates found matching filters.</p>
                                            <button
                                                onClick={() => {
                                                    setSelectedSector('all')
                                                    setPageRange([])
                                                    setWebsiteTypes([])
                                                    setStructures([])
                                                    setCmsTypes([])
                                                }}
                                                className="mt-4 text-primary hover:underline"
                                            >
                                                Clear all filters
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Sidebar Filters (Desktop) */}
                        <div className="hidden lg:block w-[300px] shrink-0">
                            <div className="sticky top-32 space-y-8">
                                <h2 className="text-2xl font-bold mb-6">Filters</h2>
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
                                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                    onClick={() => setIsMobileFiltersOpen(false)}
                                />

                                {/* Sidebar */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="relative w-[85vw] max-w-[320px] ml-auto h-full bg-background shadow-2xl p-6 overflow-y-auto"
                                >
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-border sticky top-0 bg-background z-20 pt-2">
                                        <h2 className="text-2xl font-bold">Filters</h2>
                                        <button
                                            onClick={() => setIsMobileFiltersOpen(false)}
                                            className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full transition-colors text-sm font-medium"
                                        >
                                            <X className="w-4 h-4" /> Close
                                        </button>
                                    </div>
                                    <div className="space-y-8">
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
        <>
            {/* Filter Group: Category */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg border-b border-border pb-2">Category</h3>
                <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="radio"
                            name="sector"
                            checked={selectedSector === 'all'}
                            onChange={() => setSelectedSector('all')}
                            className="w-4 h-4 accent-primary"
                        />
                        <span className="group-hover:text-primary transition-colors">All Categories</span>
                    </label>
                    {sectors.map((sector: Sector) => (
                        <label key={sector.id} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="sector"
                                checked={selectedSector === sector.id}
                                onChange={() => setSelectedSector(sector.id)}
                                className="w-4 h-4 accent-primary"
                            />
                            <span className="group-hover:text-primary transition-colors">{sector.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: No. of Pages */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg border-b border-border pb-2">No. of Pages</h3>
                <div className="space-y-2">
                    {pageRanges.map(range => (
                        <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={pageRange.includes(range.value)}
                                onChange={() => toggleFilter(pageRange, setPageRange, range.value)}
                                className="w-4 h-4 accent-primary rounded"
                            />
                            <span className="group-hover:text-primary transition-colors">{range.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: Type of Website */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg border-b border-border pb-2">Website Type</h3>
                <div className="space-y-2">
                    {uniqueWebsiteTypes.map((type: string) => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={websiteTypes.includes(type)}
                                onChange={() => toggleFilter(websiteTypes, setWebsiteTypes, type)}
                                className="w-4 h-4 accent-primary rounded"
                            />
                            <span className="group-hover:text-primary transition-colors">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: Structure */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg border-b border-border pb-2">Structure</h3>
                <div className="space-y-2">
                    {uniqueStructures.map((structure: string) => (
                        <label key={structure} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={structures.includes(structure)}
                                onChange={() => toggleFilter(structures, setStructures, structure)}
                                className="w-4 h-4 accent-primary rounded"
                            />
                            <span className="group-hover:text-primary transition-colors">{structure}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filter Group: CMS / Tech */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg border-b border-border pb-2">Tech Stack</h3>
                <div className="space-y-2">
                    {uniqueCmsTypes.map((cms: string) => (
                        <label key={cms} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={cmsTypes.includes(cms)}
                                onChange={() => toggleFilter(cmsTypes, setCmsTypes, cms)}
                                className="w-4 h-4 accent-primary rounded"
                            />
                            <span className="group-hover:text-primary transition-colors">{cms}</span>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}

function TemplateCard({ template }: { template: Template }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    // Use gallery images if available, otherwise fallback to generating mocks
    const images = template.gallery && template.gallery.length > 0
        ? template.gallery
        : [
            template.image, // Main Home
            template.image.replace('text=', 'text=Services+%26+Features+'),
            template.image.replace('text=', 'text=Portfolio+%26+Contact+')
        ]

    // Auto-play slider on hover
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length)
            }, 2000)
        } else {
            setCurrentImageIndex(0)
        }
        return () => clearInterval(interval)
    }, [isHovered, images.length])

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Slider */}
            <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <Link
                        href={`/explore/${template.id}`}
                        className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                        View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt={`${template.title} view ${currentImageIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                </AnimatePresence>

                {/* Slider Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all",
                                idx === currentImageIndex ? "bg-white w-3" : "bg-white/50"
                            )}
                        />
                    ))}
                </div>

                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md z-10">
                    {template.pages} Page{template.pages > 1 ? 's' : ''}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {template.type}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                        {template.price}
                    </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {template.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {template.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                    {template.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}


