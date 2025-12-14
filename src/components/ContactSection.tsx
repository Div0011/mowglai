import { useState, useRef } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";


const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" ref={sectionRef} className="relative w-full py-32 z-20 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Huge Header */}
        <div className="mb-24 relative">
          <h2 className="text-[10vw] leading-[0.8] font-display font-black tracking-tighter text-foreground select-none relative z-10">
            GET IN <br />
            <span className="text-primary ml-[38vw]">TOUCH</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* Contact Info - Minimal & Large */}
          <div className="space-y-12">
            <p className="text-3xl font-light text-foreground/80 max-w-lg leading-snug">
              Ready to start your project? Let's create something amazing together.
            </p>

            <div className="space-y-8">
              <div className="group cursor-pointer">
                <p className="text-sm text-foreground/50 uppercase tracking-widest mb-1">Email</p>
                <p className="text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">hello@mowglai.com</p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-sm text-foreground/50 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">+1 (555) 123-4567</p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-sm text-foreground/50 uppercase tracking-widest mb-1">Location</p>
                <p className="text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Form - Clean & underlined */}
          <div className="glass-card p-10 md:p-14 rounded-[2rem]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <Input
                  required
                  placeholder="Your Name"
                  className="bg-transparent border-0 border-b-2 border-foreground/20 rounded-none px-0 py-6 text-xl focus:border-primary focus:ring-0 placeholder:text-foreground/30 transition-all font-display font-bold"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-0 border-b-2 border-foreground/20 rounded-none px-0 py-6 text-xl focus:border-primary focus:ring-0 placeholder:text-foreground/30 transition-all font-display font-bold"
                />
                <Textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-0 border-b-2 border-foreground/20 rounded-none px-0 py-6 text-xl focus:border-primary focus:ring-0 placeholder:text-foreground/30 resize-none transition-all font-display font-bold"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-background hover:text-foreground border-2 border-foreground font-display font-black text-xl py-8 rounded-xl transition-all uppercase tracking-widest"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
