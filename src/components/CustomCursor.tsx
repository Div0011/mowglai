"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const followerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth <= 1024;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile((isCoarse && isSmallScreen) || isMobileUA);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Respect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const followerXRef = useRef<((value: number) => void) | null>(null);
  const followerYRef = useRef<((value: number) => void) | null>(null);

  // Initialize GSAP animations for the ambient follower ring
  useEffect(() => {
    if (isMobile || isReducedMotion) return;

    if (followerRef.current) {
      gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });
      followerXRef.current = gsap.quickTo(followerRef.current, "x", { duration: 0.18, ease: "power2.out" });
      followerYRef.current = gsap.quickTo(followerRef.current, "y", { duration: 0.18, ease: "power2.out" });
    }
  }, [isMobile, isReducedMotion]);

  // Mouse move handler (unthrottled for 60/120Hz monitor smoothness)
  useEffect(() => {
    if (isMobile || isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      followerXRef.current?.(e.clientX);
      followerYRef.current?.(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.getAttribute("role") === "button";

      setIsPointer(prev => prev === isClickable ? prev : isClickable);

      const themeElement = target.closest('[data-theme="gold"]');
      const shouldInvert = !!themeElement;
      setIsInverted(prev => prev === shouldInvert ? prev : shouldInvert);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isMobile, isReducedMotion, isVisible]);

  // Click handler for ripples
  useEffect(() => {
    if (isMobile || isReducedMotion) return;

    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 500);
    };

    window.addEventListener("click", handleClick, { passive: true });
    return () => window.removeEventListener("click", handleClick);
  }, [isMobile, isReducedMotion]);

  // Scale animation on hover state change
  useEffect(() => {
    if (isMobile || isReducedMotion || !followerRef.current) return;

    const scale = isPointer ? 1.4 : 1;

    gsap.to(followerRef.current, {
      scale: scale,
      duration: 0.25,
      ease: "power2.out"
    });
  }, [isPointer, isMobile, isReducedMotion]);

  if (isMobile || isReducedMotion) return null;

  const colors = {
    followerBorder: isInverted ? 'rgba(27, 48, 34, 0.6)' : 'rgba(197, 160, 89, 0.6)',
    followerBg: isPointer 
      ? (isInverted ? 'rgba(27, 48, 34, 0.12)' : 'rgba(197, 160, 89, 0.12)') 
      : 'transparent',
    ripple: isInverted ? 'rgba(27, 48, 34, 0.4)' : 'rgba(197, 160, 89, 0.4)'
  };

  return (
    <>
      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9997] w-12 h-12 rounded-full border animate-ripple bg-transparent"
          style={{
            left: ripple.x,
            top: ripple.y,
            borderColor: colors.ripple,
            borderWidth: '1px'
          }}
        />
      ))}

      {/* Ambient Follower Ring (tracks native cursor smoothly without blocking) */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-[opacity] duration-200 ease-out 
          ${isVisible ? 'opacity-100' : 'opacity-0'} 
          w-9 h-9 rounded-full border`}
        style={{
          borderColor: colors.followerBorder,
          backgroundColor: colors.followerBg,
          willChange: 'transform'
        }}
      />
    </>
  );
};

export default CustomCursor;
