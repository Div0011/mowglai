import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import NextPageButton from "@/components/NextPageButton";
import { AestheticShowcase } from "@/components/AestheticShowcase";

export const metadata = {
    title: "Mowglai | Crafting Digital Excellence",
    description: "Mowglai creates stunning, high-performance websites and web applications. We transform your digital presence with cutting-edge design and expert development.",
};

export default function Home() {
    return (
        <PageLayout>
            <div className="relative w-full h-screen">
                <HeroSection />
            </div>

            {/* Extra Introductory Content */}
            <section className="relative py-16 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                                WE CREATE <span className="opacity-10">THE</span> <span className="text-primary italic">EXTRAORDINARY</span>
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed mb-12">
                                In a digital landscape crowded with the mundane, Mowglai Wild stands as a beacon of growth. We don't just build websites; we architect digital ecosystems that breathe life into your brand's vision.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-primary font-display font-bold text-lg mb-2 uppercase tracking-widest">Adaptation</h4>
                                    <p className="text-lg text-foreground/70">Evolving with every pixel we place in the wild.</p>
                                </div>
                                <div>
                                    <h4 className="text-primary font-display font-bold text-lg mb-2 uppercase tracking-widest">Survival</h4>
                                    <p className="text-lg text-foreground/70">Resilient codebases that thrive in any environment.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sequential Cards Presentation - Now Client Component */}
                        <AestheticShowcase />
                    </div>
                </div>
            </section>

            <section className="relative py-24 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-4xl md:text-6xl font-display font-black mb-16 uppercase">
                        Beyond <span className="opacity-10 text-foreground">The</span> Horizon
                    </h3>
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <p className="text-2xl md:text-4xl font-light leading-relaxed italic text-foreground/90">
                            "To the deepest jungle and beyond; we explore the uncharted territories of web design to bring back the extraordinary."
                        </p>
                    </div>
                </div>
            </section>

            <NextPageButton label="About Us" href="/about" />
        </PageLayout>
    );
}
