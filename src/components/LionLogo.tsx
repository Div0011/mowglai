import { cn } from "@/lib/utils";

interface LionLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const LionLogo = ({ className, size = "xl" }: LionLogoProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-80 h-80",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full overflow-hidden",
        sizeClasses[size],
        className
      )}
    >
      {/* Background blend layer */}
      <div
        className="absolute inset-0 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Reflective light layers */}
      <div
        className="absolute inset-0 rounded-full opacity-20 animate-pulse-glow"
        style={{
          background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.5) 0%, transparent 50%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute inset-0 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle at 70% 70%, hsl(var(--accent) / 0.4) 0%, transparent 50%)",
          filter: "blur(30px)",
        }}
      />

      {/* Main logo image with fine purple border light */}
      <div className="relative z-10 w-full h-full">
        <img
          src={`${import.meta.env.BASE_URL}assets/logo.png`}
          alt="Mowglai Logo"
          className="w-full h-full object-contain relative z-10"
        />

        {/* Very fine purple light along image border */}

      </div>

      {/* Ambient light particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 45;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          return (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                opacity: 0.4,
                filter: "blur(4px)",
                animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LionLogo;
