import { cn } from "@/lib/utils";
import Image from "next/image";

interface MowglaiLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const MowglaiLogo = ({ className, size = "md" }: MowglaiLogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-32 h-32",
  };

  const dimensions = {
    sm: 40,
    md: 56,
    lg: 80,
    xl: 128,
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full",
        "bg-background/5 border border-primary/20 backdrop-blur-sm",
        "transition-transform duration-500 hover:scale-105",
        sizeClasses[size],
        className
      )}
    >
      {/* Dark Mode Logo */}
      <div className="relative w-full h-full hidden dark:block">
        <Image
          src="/logo1.png"
          alt="Mowglai"
          width={dimensions[size]}
          height={dimensions[size]}
          className="object-cover"
          priority={size === "lg" || size === "xl"}
        />
      </div>
      {/* Light Mode Logo */}
      <div className="relative w-full h-full block dark:hidden">
        <Image
          src="/logo2.png"
          alt="Mowglai"
          width={dimensions[size]}
          height={dimensions[size]}
          className="object-cover"
          priority={size === "lg" || size === "xl"}
        />
      </div>
    </div>
  );
};

export default MowglaiLogo;
