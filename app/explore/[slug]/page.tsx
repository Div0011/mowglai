import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { getTemplateById, allTemplates } from "@/data/templates";
import TemplateActions from "./TemplateActions";
import TemplateGallery from "./TemplateGallery";

// Required for static export
export function generateStaticParams() {
    const params: { slug: string }[] = [];
    for (const sector in allTemplates) {
        allTemplates[sector].forEach((template) => {
            params.push({ slug: template.id });
        });
    }
    return params;
}

export default async function TemplateDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const template = getTemplateById(slug);

    if (!template) {
        notFound();
    }

    return (
        <PageLayout>
            <div className="min-h-screen pt-32 pb-20 px-4 md:px-12 bg-background relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-primary/5 blur-3xl -z-10 rounded-full" />

                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link
                            href="/explore"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Templates
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Image Section */}
                        <TemplateGallery
                            images={[template.image, ...(template.gallery || [])]}
                            title={template.title}
                        />

                        {/* Content Section */}
                        <div className="flex flex-col justify-center">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {template.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-sm font-medium px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                                        {template.title}
                                    </h1>
                                </div>

                                <div className="prose prose-lg dark:prose-invert">
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        {template.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                {template.features && (
                                    <div className="py-6 border-y border-border/40">
                                        <h3 className="text-lg font-semibold mb-4">
                                            Key Features
                                        </h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {template.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-center gap-3 text-muted-foreground"
                                                >
                                                    <div className="p-1 rounded-full bg-primary/10 text-primary">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Purchase Actions (Client Component) */}
                                <TemplateActions templateId={template.id} price={template.price} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
