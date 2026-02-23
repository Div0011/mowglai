import ServiceRequestForm, { FormField } from "@/components/ServiceRequestForm";
import { MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Request | Mowglai",
    description: "Tell us about your unique project or get a free consultation.",
};

export default function CustomRequestPage() {
    const fields: FormField[] = [
        { id: "name", label: "Full Name", type: "text", required: true, placeholder: "Your Name" },
        { id: "email", label: "Email Address", type: "email", required: true, placeholder: "you@email.com" },
        { id: "phone", label: "Phone Number", type: "text", placeholder: "+91 ...", required: true },
        {
            id: "topics", label: "Consultation Topics (Select up to 3)", type: "checkbox-group",
            options: [
                "Startup Strategy & MVP",
                "Product Tech Stack Selection",
                "Web Performance Audit",
                "Cloud Architecture & AWS",
                "AI/ML Integration",
                "E-commerce Scalability",
                "App Modernization",
                "Team Hiring & Process"
            ],
            required: true,
            maxSelections: 3
        },
        { id: "details", label: "Additional Context", type: "textarea", placeholder: "Any specific challenges you're facing?", required: true },
    ];

    return (
        <ServiceRequestForm
            title="Free Consultation"
            subtitle="Expert advice on your product strategy, tech stack, or roadmap. No strings attached."
            heroImage={<div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center"><MessageSquare className="w-24 h-24 text-primary" /></div>}
            fields={fields}
            serviceName="Free Consultation"
        />
    );
}
