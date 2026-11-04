import { cn } from "@/lib/utils";

interface ScrollTransitionProps {
    children: React.ReactNode;
    className?: string;
    effect?: "zoom-in" | "depth-pull" | "fade-slide" | "curtain";
    id?: string;
}

export const ScrollTransition = ({ children, className, id }: ScrollTransitionProps) => {
    return (
        <div id={id} className={cn("relative w-full", className)}>
            {children}
        </div>
    );
};

export default ScrollTransition;
