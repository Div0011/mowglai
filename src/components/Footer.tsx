import { useRef } from "react";
import LionLogo from "./LionLogo";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  // Background style: Professional dark with small white dots
  const bgStyle = {
    backgroundColor: "black",
    backgroundImage: `
        radial-gradient(white 1px, transparent 1px),
        radial-gradient(white 1px, transparent 1px)
      `,
    backgroundSize: "40px 40px",
    backgroundPosition: "0 0, 20px 20px",
    opacity: 0.9
  };

  return (
    <footer id="footer" ref={footerRef} className="relative py-16 border-t border-glass-border/20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dots Background Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={bgStyle}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">

          {/* Left Column: Info & Socials */}
          <div className="text-center md:text-left space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">MOWGLAI GALAXY</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
                Crafting digital experiences that transcend the ordinary. Journey with us through the cosmos of innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">Working Hours</h4>
              <p className="text-sm text-muted-foreground">Mon - Fri: 9AM - 6PM PST</p>
            </div>

            {/* Socials */}
            <div className="flex justify-center md:justify-start gap-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Center Column: Rotating Logo */}
          <div className="flex flex-col items-center justify-center">
            <div className="hologram-rotate scale-125 my-6 md:my-0">
              <LionLogo size="lg" />
            </div>
          </div>

          {/* Right Section: Split into columns */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">

            {/* Know More */}
            <div>
              <h4 className="font-display font-bold text-lg text-foreground mb-4">Know More</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Our Mission'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium relative group">
                      <span className="relative z-10">{item}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-display font-bold text-lg text-foreground mb-4">Explore</h4>
              <ul className="space-y-3">
                {['Pricing', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium relative group">
                      <span className="relative z-10">{item}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="font-display font-bold text-lg text-foreground mb-4">Get In Touch</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium relative group">
                    <span className="relative z-10">Contact Us</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block px-4 py-2 mt-2 rounded-full border border-primary/30 text-primary text-xs hover:bg-primary/10 transition-colors">
                    Website Walkthrough
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-glass-border/10 text-center">
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Mowglai Galaxy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
