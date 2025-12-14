import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses getting started online",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Ideal for growing businesses needing more features",
    features: [
      "Multi-page website (up to 10)",
      "Custom animations",
      "Advanced SEO & Analytics",
      "CMS integration",
      "E-commerce ready",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for large organizations",
    features: [
      "Unlimited pages",
      "Custom web applications",
      "API development",
      "Database integration",
      "Priority 24/7 support",
      "Dedicated team",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative w-full py-32 z-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-24">
          <h2 className="text-[15vw] leading-[0.8] font-display font-black tracking-tighter text-foreground opacity-20 select-none absolute left-0 -top-20 z-0 whitespace-nowrap">
            PRICING
          </h2>
          <div className="relative z-10 pt-20">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-4">
              INVESTMENT
            </h2>
            <p className="text-2xl text-primary font-body tracking-wider uppercase">
              Select your path
            </p>
          </div>
        </div>

        {/* Plans List - More typographic, less 'card' */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className={cn(
                "relative p-8 md:p-12 border-t border-primary/20 transition-all duration-500 hover:bg-primary/5 group",
                plan.popular && "lg:-mt-12 bg-primary/5 border-primary/50"
              )}
            >
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {plan.name}
                </h3>
                <div className="text-5xl md:text-6xl font-display font-black text-foreground mb-4">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-lg text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full py-8 text-xl font-display font-bold uppercase tracking-widest bg-transparent border border-foreground hover:bg-foreground hover:text-background transition-all"
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
