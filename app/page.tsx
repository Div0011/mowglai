import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import NextPageButton from "@/components/NextPageButton";
import { AestheticShowcase } from "@/components/AestheticShowcase";
import SelectedWork from "@/components/SelectedWork";

export const metadata = {
    title: "Premium Digital Agency - Web Development & Design",
    description: "Mowglai is a premium digital agency creating stunning, high-performance websites and web applications. Expert web development, 3D design, and immersive digital experiences. Transform your brand with cutting-edge technology and creative excellence.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Premium Digital Agency - Web Development & Design",
        description: "Mowglai is a premium digital agency creating stunning, high-performance websites and web applications. Expert web development, 3D design, and immersive digital experiences.",
        url: "/",
        images: [
            {
                url: "/mowglai-logo-new.jpg",
                width: 1200,
                height: 1200,
                alt: "Mowglai - Premium Digital Agency"
            }
        ],
        type: "website",
        siteName: "Mowglai",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Premium Digital Agency - Web Development & Design",
        description: "Mowglai is a premium digital agency creating stunning, high-performance websites and web applications.",
        images: ["/mowglai-logo-new.jpg"],
        creator: "@mowglai",
        site: "@mowglai",
    },
};

const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mowglai.in"
        }
    ]
};

export default function Home() {
    return (
        <PageLayout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
            <div className="relative w-full h-screen">
                <HeroSection />
            </div>

            {/* Extra Introductory Content */}
            <section className="relative py-16 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-2xl sm:text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
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


            <SelectedWork />

            {/* Explore Templates CTA */}
            <section className="relative py-24 overflow-hidden bg-secondary/5">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase" data-aos="fade-up">
                        Purchase <span className="text-primary italic">Templates</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-12" data-aos="fade-up" data-aos-delay="100">
                        Accelerate your launch with our premium, industry-specific website templates. Handcrafted for performance and designed to convert.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <NextPageButton label="EXPLORE TEMPLATES" href="/explore" />
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
