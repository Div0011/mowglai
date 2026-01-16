import { cn } from "@/lib/utils";
import Image from "next/image";

interface MowglaiLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const MowglaiLogo = ({ className, size = "md" }: MowglaiLogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-32 h-32",
    full: "w-full h-full",
  };

  const dimensions = {
    sm: 40,
    md: 56,
    lg: 80,
    xl: 128,
    full: 500,
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full aspect-square shrink-0",
        "bg-background/5 border border-primary/20 backdrop-blur-sm",
        "transition-transform duration-500 hover:scale-105",
        sizeClasses[size],
        className
      )}
    >
      {/* Mowglai Logo */}
      <div className="relative w-full h-full">
        {/* Mobile: New Logo */}
        <div className="md:hidden w-full h-full">
          <Image
            src="/logo1.png"
            alt="Mowglai"
            width={dimensions[size]}
            height={dimensions[size]}
            className="w-full h-full object-cover"
            priority={size === "lg" || size === "xl"}
          />
        </div>

        {/* Laptop: Original Logo */}
        <div className="hidden md:block w-full h-full">
          <Image
            src="/mowglai-logo-new.jpg"
            alt="Mowglai"
            width={dimensions[size]}
            height={dimensions[size]}
            className="w-full h-full object-cover"
            priority={size === "lg" || size === "xl"}
          />
        </div>
      </div>
    </div>
  );
};

export default MowglaiLogo;
