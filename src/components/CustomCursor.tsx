import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ripples state for movement trail
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number; opacity: number; radius: number }[]>([]);
  const lastRippleRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);

      // Create ripple on movement
      const now = Date.now();
      if (now - lastRippleRef.current > 50) { // Throttled to every 50ms for smoother trail
        lastRippleRef.current = now;
        setRipples(prev => [
          ...prev.slice(-15), // Keep last 15 ripples
          { x: e.clientX, y: e.clientY, radius: 0, opacity: 0.8, id: now }
        ]);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Animate ripples
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setRipples(prev =>
        prev
          .map(r => ({
            ...r,
            radius: r.radius + 1.5,
            opacity: r.opacity - 0.02
          }))
          .filter(r => r.opacity > 0)
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor - black body with purple outline */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transform: isPointer ? "scale(1.5)" : "scale(1)",
        }}
      >
        <div
          className="w-5 h-5 rounded-full bg-background border-2 border-primary"
          style={{
            boxShadow: "0 0 15px hsl(270 80% 60% / 0.5), 0 0 30px hsl(270 80% 60% / 0.3)",
          }}
        />
      </div>

      {/* Trailing glow */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      >
        <div
          className="w-10 h-10 rounded-full bg-primary/20 blur-md"
          style={{
            boxShadow: "0 0 30px hsl(270 80% 60% / 0.4)",
          }}
        />
      </div>

      {/* Water Ripple Trail */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: ripple.x - ripple.radius,
            top: ripple.y - ripple.radius,
            width: ripple.radius * 2,
            height: ripple.radius * 2,
            borderRadius: '50%',
            opacity: ripple.opacity,
            border: '1.5px solid hsl(270 80% 60%)',
            boxShadow: `0 0 ${ripple.radius}px hsl(270 80% 60% / ${ripple.opacity * 0.5})`,
            backgroundColor: 'transparent',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;