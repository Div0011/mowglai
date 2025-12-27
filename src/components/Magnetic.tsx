import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

interface MagneticProps {
    children: React.ReactElement;
    amount?: number; // How strong the magnetic pull is (0.1 to 1)
    className?: string;
}

const Magnetic = ({ children, amount = 0.3, className = "" }: MagneticProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * amount);
            yTo(y * amount);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [amount]);

    return (
        <div ref={ref} className={`inline-block ${className}`}>
            {children}
        </div>
    );
};

export default Magnetic;
