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
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full group"
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted/20">
                            <Image
                                src={image}
                                alt={`${title} - View ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Navigation Arrows - Only show if multiple images */}
            {images.length > 1 && (
                <>
                    <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-border/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CarouselNext className="right-4 bg-background/80 hover:bg-background border-border/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </>
            )}
        </Carousel>
    );
}
