import { Palette, Rocket, Shield, Globe, BarChart, Headphones } from "lucide-react";
import LionLogo from "./LionLogo";
import { useRef } from "react";
import gsap from "gsap";

const features = [
  { icon: Palette, title: "Stunning Design", description: "Intuitive interfaces that elevate your brand." },
  { icon: Shield, title: "Security Built-In", description: "Enterprise-grade security protocols." },
  { icon: Rocket, title: "Performance", description: "Lightning-fast load times and interactions." },
  { icon: Globe, title: "Global Reach", description: "Infrastructure designed for worldwide scale." },
  { icon: BarChart, title: "Data Driven", description: "Actionable insights with integrated analytics." },
  { icon: Headphones, title: "24/7 Support", description: "Dedicated team ready to assist anytime." },
];

const AboutSection = () => {
  // We will control the 3D scroll via Index.tsx GSAP context or internal useEffect if self-contained
  // For the prompt's request "when user scrolls ... cards scroll vertically nd in 3D manner"
  // We'll set up the structure here.

  return (
    <section id="about" className="relative w-full py-24 z-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Column: Huge Title & Logo */}
        <div className="space-y-12" data-aos="fade-right">
          {/* Diagonal Layout for Heading */}
          <h2 className="text-[11vw] font-display font-black tracking-tighter text-foreground relative z-10 drop-shadow-sm flex flex-col space-y-2">
            <span className="leading-none opacity-50">WHO</span>
            <span className="text-primary opacity-90 leading-none self-end pr-[10vw]">WE</span>
            <span className="text-primary opacity-50 leading-none self-end pr-[10vw]">ARE</span>
          </h2>

          {/* Integrated Logo Element - Magnetic & Full Fill */}
          <div
            className="relative w-[300px] h-[300px] flex items-center justify-center -ml-10 md:justify-start md:pl-20 cursor-pointer"
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              const logo = el.querySelector('.magnetic-logo');
              if (logo) gsap.to(logo, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
            }}
            onMouseLeave={(e) => {
              const logo = e.currentTarget.querySelector('.magnetic-logo');
              if (logo) gsap.to(logo, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            }}
          >
            {/* Decorative Glow */}
            <div className="absolute w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="magnetic-logo relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/20 bg-background/5 overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[0_0_80px_hsl(var(--primary))]">
              {/* Logo 1: For Dark Mode (Green BG) - Default */}
              <img
                src="/mowglai-galaxy-landing/logo1.png"
                alt="Mowglai Logo"
                className="w-full h-full object-cover hidden dark:block transition-all duration-700 hover:scale-110 hover:opacity-80"
              />

              {/* Logo 2: For Light Mode (Peach BG) */}
              <img
                src="/mowglai-galaxy-landing/logo2.png"
                alt="Mowglai Logo"
                className="w-full h-full object-cover block dark:hidden transition-all duration-700 hover:scale-110 hover:opacity-80"
              />
            </div>
          </div>

          <div className="max-w-md ml-auto md:ml-12">
            <p className="text-2xl font-light text-foreground/80 leading-relaxed">
              Architects of the digital future. We blend art and engineering to create immersive web experiences.
            </p>
          </div>
        </div>

        {/* Right Column: Double Column Scroll Cards */}
        <div
          id="about-cards-container"
          className="relative w-full h-[800px] overflow-hidden -mt-10 masking-gradient"
        >
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />

          {/* Double Column Grid Stage */}
          <div
            id="about-cards-stage"
            className="grid grid-cols-2 gap-6 animate-marquee-vertical hover:[animation-play-state:paused] py-10"
          >
            {[...features, ...features, ...features, ...features].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group/card about-card relative w-full aspect-square bg-primary/5 border border-primary/20 hover:bg-card hover:border-primary transition-all duration-500 ease-out rounded-[2rem] flex flex-col items-center justify-center hover:justify-start p-6 cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(252,220,177,0.15)]"
                >
                  {/* Icon & Title Container */}
                  <div className="flex flex-col items-center gap-4 group-hover/card:flex-row group-hover/card:w-full transition-all duration-500">
                    <div className="p-4 rounded-full bg-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-background transition-colors duration-300 shrink-0">
                      <Icon size={32} strokeWidth={1.5} className="group-hover/card:scale-90 transition-transform" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground text-center group-hover/card:text-left transition-all duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description - Hidden by default */}
                  <div className="h-0 opacity-0 group-hover/card:h-auto group-hover/card:opacity-100 transition-all duration-500 delay-100 overflow-hidden text-center group-hover/card:text-left mt-0 group-hover/card:mt-4">
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;