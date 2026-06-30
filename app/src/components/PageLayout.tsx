"use client";

import OriginalLayout from "@/app/src/styles/original/Layout";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <OriginalLayout>{children}</OriginalLayout>
    );
};

export default PageLayout;
