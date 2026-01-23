"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface TemplateGalleryProps {
    images: string[];
    title: string;
}

export default function TemplateGallery({ images, title }: TemplateGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <div className="space-y-4">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full group relative"
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                                <Image
                                    src={image}
                                    alt={`${title} - View ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                                {/* Inner Shadow Vignette */}
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Arrows - Inside on Desktop */}
                {images.length > 1 && (
                    <>
                        <CarouselPrevious className="left-6 w-10 h-10 bg-black/50 hover:bg-black/70 border-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all" />
                        <CarouselNext className="right-6 w-10 h-10 bg-black/50 hover:bg-black/70 border-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all" />
                    </>
                )}

                {/* Dots Indicator - Integrated Overlay */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                        {images.map((_, idx) => (
                            <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/50 data-[active=true]:bg-white data-[active=true]:scale-125 transition-all" />
                        ))}
                    </div>
                )}
            </Carousel>
        </div>
    );
}
