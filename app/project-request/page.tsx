import ProjectRequestClient from "./ProjectRequestClient";

export const metadata = {
    title: "Project Request: Start Your Journey",
    description: "Start your web development project with Mowglai. Select your plan, share your vision, and get started on building your extraordinary digital experience. Quick and easy project initiation.",
    keywords: ["project request", "web development plan", "start web project", "website development quote", "request web development", "custom website project", "web application development", "Mowglai project"],
    alternates: {
        canonical: "/project-request",
    },
    openGraph: {
        title: "Project Request: Start Your Journey",
        description: "Start your web development project with Mowglai. Select your plan, share your vision, and get started on building your extraordinary digital experience.",
        url: "/project-request",
        images: [
            {
                url: "/mowglai-logo-new.jpg",
                width: 1200,
                height: 1200,
                alt: "Mowglai Project Request"
            }
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Request: Start Your Journey",
        description: "Start your web development project with Mowglai. Select your plan, share your vision, and get started.",
        images: ["/mowglai-logo-new.jpg"],
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
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Project Request",
            "item": "https://mowglai.in/project-request"
        }
    ]
};

export default function ProjectRequest() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
            <ProjectRequestClient />
        </>
    );
}
