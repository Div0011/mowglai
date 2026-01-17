import ProjectRequestClient from "./ProjectRequestClient";

export const metadata = {
    title: "Project Request | Mowglai - Start Your Web Development Journey",
    description: "Start your web development project with Mowglai. Select your plan, share your vision, and get started on building your extraordinary digital experience. Quick and easy project initiation.",
    keywords: ["project request", "web development plan", "start web project", "website development quote", "request web development", "custom website project", "web application development", "Mowglai project"],
    alternates: {
        canonical: "https://mowglai.in/project-request",
    },
    openGraph: {
        title: "Project Request | Mowglai - Start Your Web Development Journey",
        description: "Start your web development project with Mowglai. Select your plan, share your vision, and get started on building your extraordinary digital experience.",
        url: "https://mowglai.in/project-request",
        images: [
            {
                url: "https://mowglai.in/mowglai-logo-new.jpg",
                width: 1200,
                height: 1200,
                alt: "Mowglai Project Request"
            }
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Request | Mowglai - Start Your Web Development Journey",
        description: "Start your web development project with Mowglai. Select your plan, share your vision, and get started.",
        images: ["https://mowglai.in/mowglai-logo-new.jpg"],
    },
};

export default function ProjectRequest() {
    return <ProjectRequestClient />;
}
