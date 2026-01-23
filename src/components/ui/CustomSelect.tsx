"use client";

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Option {
    label: string
    value: string
    icon?: React.ReactNode
}

interface CustomSelectProps {
    options: Option[]
    value: string
    onChange: (value: string) => void
    placeholder?: string
    className?: string
    targetClassName?: string
}

export default function CustomSelect({ options, value, onChange, placeholder = "Select...", className, targetClassName }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const selectedOption = options.find(opt => opt.value === value)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={cn("relative min-w-[200px]", className)} ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex items-center justify-between px-5 py-4 rounded-2xl border transition-all duration-300 group",
                    isOpen
                        ? "bg-white/10 border-primary/50 text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)]"
                        : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                )}
            >
                <span className="flex items-center gap-2 font-medium truncate">
                    {selectedOption?.icon && <span className="opacity-70">{selectedOption.icon}</span>}
                    {selectedOption ? selectedOption.label : <span className="text-muted-foreground">{placeholder}</span>}
                </span>
                <ChevronDown className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180 text-primary"
                )} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 w-full mt-2 bg-[#0a1510]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
                    >
                        <div className="max-h-[300px] overflow-y-auto scrollbar-none space-y-1">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        onChange(option.value)
                                        setIsOpen(false)
                                    }}
                                    className={cn(
                                        "w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 text-sm",
                                        value === option.value
                                            ? "bg-primary text-primary-foreground font-bold shadow-lg"
                                            : "text-muted-foreground hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <span className="flex items-center gap-3">
                                        {option.icon && <span>{option.icon}</span>}
                                        {option.label}
                                    </span>
                                    {value === option.value && <Check className="w-4 h-4 ml-2" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
