import PageLayout from "@/components/PageLayout";

export const metadata = {
    title: "Privacy Policy | Mowglai",
    description: "Privacy Policy for Mowglai Digital Agency and Template Store.",
};

export default function PrivacyPage() {
    return (
        <PageLayout>
            <div className="pt-32 pb-12 px-6 container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-foreground">Privacy Policy</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Transparency in every pixel and practice.</p>
            </div>

            <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert px-6 pb-24">
                <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Who We Are</h2>
                <p>
                    Mowglai ("we", "us", or "our") operates as a premium digital agency and a digital asset store.
                    This privacy policy applies to our services (custom web development, design) and our digital products (website templates, UI kits)
                    available on mowglai.in.
                </p>

                <h2>2. Data We Collect</h2>
                <h3>2.1 For Agency Clients</h3>
                <p>
                    When you engage us for services, we collect professional information including company details, project requirements,
                    and billing information necessary to execute contracts and deliver work.
                </p>

                <h3>2.2 For Template Customers</h3>
                <p>
                    When you purchase a template, we collect:
                </p>
                <ul>
                    <li><strong>Transaction Data:</strong> Payment details (processed securely via our third-party payment providers).</li>
                    <li><strong>Account Data:</strong> Email address for product delivery and license validation.</li>
                    <li><strong>Download Data:</strong> IP address and timestamp of digital product downloads.</li>
                </ul>

                <h2>3. How We Use Your Data</h2>
                <ul>
                    <li><strong>Service Delivery:</strong> To design, develop, and deploy your custom digital projects.</li>
                    <li><strong>Product Access:</strong> To send download links and license keys for purchased templates.</li>
                    <li><strong>Support:</strong> To assist with installation issues or bug fixes.</li>
                    <li><strong>Updates:</strong> To notify you of template version updates or critical security patches.</li>
                </ul>

                <h2>4. Digital Products & Licensing</h2>
                <p>
                    We do not track your end-users or the visitors of websites you build using our templates.
                    However, we may store a record of your domain name if required for license verification (e.g., verifying a "Single Site" license).
                </p>

                <h2>5. Data Security</h2>
                <p>
                    We implement industry-standard security measures to protect your project files and account data.
                    For payment processing, we do not store full credit card numbers on our servers; they are handled directly by our payment processor.
                </p>

                <h2>6. Contact Us</h2>
                <p>
                    For privacy-related inquiries regarding our agency services or digital products, please contact us at: <a href="mailto:info@mowglai.in">info@mowglai.in</a>.
                </p>
            </div>
        </PageLayout>
    );
}
