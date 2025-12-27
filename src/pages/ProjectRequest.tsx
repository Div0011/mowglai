import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, ArrowLeft } from "lucide-react";
import BrochurePDF from "@/components/BrochurePDF";
import { useToast } from "@/hooks/use-toast";

const ProjectRequest = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        companyName: "",
        workPlan: "",
        name: "",
        email: "",
        startDate: ""
    });

    const plan = location.state?.plan;

    useEffect(() => {
        if (!plan) {
            navigate("/investment");
        }
    }, [plan, navigate]);

    if (!plan) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct mailto link
        const subject = `New Project Request: ${formData.companyName} - ${plan.name} Plan`;
        const body = `
Project Details:
----------------
Plan Selected: ${plan.name} (${plan.price})
Company: ${formData.companyName}
Contact Name: ${formData.name}
Email: ${formData.email}
Target Start Date: ${formData.startDate || "Flexible"}

Vision / Work Plan:
${formData.workPlan}
        `;

        window.location.href = `mailto:info@mowglai.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        toast({
            title: "Email Client Opened",
            description: "Please send the email to complete your request.",
        });
    };

    return (
        <PageLayout>
            <section className="relative min-h-screen py-24 px-6 flex items-center justify-center overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-background z-0" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_70%)] pointer-events-none" />

                <div className="container relative z-10 max-w-6xl">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(-1)}
                        className="mb-8 hover:bg-primary/10 text-primary group"
                    >
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Pricing
                    </Button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>

                        {/* Left: Plan Summary & Brochure */}
                        <div className="space-y-8">
                            <div className="glass-card p-10 rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-background/50 to-primary/5">
                                <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
                                    {plan.name} <span className="text-primary">ASCENT</span>
                                </h1>
                                <p className="text-3xl font-light text-primary mb-8">{plan.price}</p>

                                <div className="space-y-4 mb-10">
                                    <h3 className="text-sm font-display uppercase tracking-widest text-muted-foreground">Included Features</h3>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-center gap-3 text-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
                                    <h4 className="font-display font-bold text-primary mb-2">Before you commit</h4>
                                    <p className="text-sm text-foreground/70 mb-4">
                                        Download the detailed PDF roadmap for the {plan.name} plan to see exactly what we will build for you.
                                    </p>
                                    <BrochurePDF
                                        variant="default"
                                        className="w-full bg-primary text-background hover:bg-foreground hover:text-background border-none"
                                        planName={plan.name}
                                        planPrice={plan.price}
                                        planFeatures={plan.features}
                                        clientName={formData.companyName || formData.name}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Project Form */}
                        <div className="lg:pl-8">
                            <div className="mb-8">
                                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Tell Us More</h2>
                                <p className="text-foreground/70 leading-relaxed">
                                    To initialize the protocol, we need to know who you are and what you want to achieve.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-primary/70 font-display">Company / Entity Name</label>
                                    <Input
                                        required
                                        placeholder="e.g. Acme Corp"
                                        className="bg-background/30 border-primary/20 focus:border-primary h-12 text-lg"
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-primary/70 font-display">Contact Name</label>
                                        <Input
                                            required
                                            placeholder="Your Name"
                                            className="bg-background/30 border-primary/20 focus:border-primary h-12"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-primary/70 font-display">Email Address</label>
                                        <Input
                                            required
                                            type="email"
                                            placeholder="you@company.com"
                                            className="bg-background/30 border-primary/20 focus:border-primary h-12"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-primary/70 font-display">Target Start Date</label>
                                    <Input
                                        placeholder="e.g. Next Month, ASAP, or Specific Date"
                                        className="bg-background/30 border-primary/20 focus:border-primary h-12"
                                        value={formData.startDate}
                                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-primary/70 font-display">Vision / Work Plan</label>
                                    <Textarea
                                        required
                                        placeholder="Describe your goals, requirements, or what you want to achieve..."
                                        className="bg-background/30 border-primary/20 focus:border-primary min-h-[150px] resize-none text-lg p-4"
                                        value={formData.workPlan}
                                        onChange={(e) => setFormData({ ...formData, workPlan: e.target.value })}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full py-8 text-xl font-display font-black uppercase tracking-widest bg-primary text-background hover:bg-foreground hover:text-background transition-all duration-300 rounded-xl"
                                >
                                    <Send className="w-5 h-5 mr-3" />
                                    Send Project Details
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ProjectRequest;
