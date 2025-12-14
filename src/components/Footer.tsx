import { ArrowUp, Minus } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="w-full py-32 flex flex-col items-center justify-center bg-background/5 relative z-10 overflow-hidden">
      <button
        onClick={scrollToTop}
        className="group relative px-12 py-6 rounded-full border-2 border-primary/20 bg-background/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-500 overflow-hidden backdrop-blur-sm"
      >
        <div className="flex items-center gap-1 text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight uppercase leading-none">
          <span>BACK TO TOP</span>
          <div className="relative w-12 h-12 flex items-center justify-center -mb-2">
            {/* Dash - Visible by default, hidden on hover */}
            <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4 font-light text-5xl leading-none">
              -
            </span>

            {/* Arrow - Hidden by default, comes up on hover */}
            <ArrowUp strokeWidth={1.5} className="absolute transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 w-10 h-10" />
          </div>
        </div>
      </button>

      {/* Copyright - Subtle at bottom */}
      <div className="absolute bottom-6 text-xs text-muted-foreground/30 font-display tracking-widest uppercase">
        © {new Date().getFullYear()} Mowglai Galaxy
      </div>
    </footer>
  );
};

export default Footer;
