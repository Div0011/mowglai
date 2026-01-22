import PageLayout from "@/components/PageLayout";

export const metadata = {
    title: "Terms of Service | Mowglai",
    description: "Terms of Service for Mowglai Digital Agency and Template Store.",
};

export default function TermsPage() {
    return (
        <PageLayout>
            <div className="pt-32 pb-12 px-6 container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-foreground">Terms of Service</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Defining our digital partnership.</p>
            </div>

            <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert px-6 pb-24">
                <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Services Agreement</h2>
                <h3>1.1 Agency Services</h3>
                <p>
                    Engagements for custom web development, design, and consulting are governed by the specific Master Services Agreement (MSA) or
                    Scope of Work (SOW) signed at the commencement of the project. In the event of a conflict between these Terms and a signed MSA, the MSA controlling.
                </p>

                <h3>1.2 Digital Products (Templates)</h3>
                <p>
                    By purchasing a template from our store, you agree to the licensing terms set forth in Section 2. These terms apply immediately upon download.
                </p>

                <h2>2. Template Usage License</h2>
                <p>
                    When you purchase a digital template from Mowglai, you are granted a non-exclusive, non-transferable license to use the item under the following conditions:
                </p>
                <ul>
                    <li><strong>Single Site License:</strong> You may use the template for one (1) personal or commercial project. You cannot re-sell the template itself.</li>
                    <li><strong>Unlimited License (Agency):</strong> If purchased, you may use the template for unlimited client projects. You still cannot re-sell or redistribute the template source code as a standalone product.</li>
                    <li><strong>Modifications:</strong> You are free to modify the code and design to fit your needs.</li>
                </ul>

                <h2>3. Refunds and Returns</h2>
                <h3>3.1 Digital Products</h3>
                <p>
                    <strong>All sales of digital templates are final.</strong> Due to the nature of downloadable digital assets, we cannot offer refunds once the files have been sent or downloaded,
                    unless the file is technically defective and cannot be fixed by our support team.
                </p>
                <h3>3.2 Agency Services</h3>
                <p>
                    Refunds for service retainers or project deposits are governed by the cancellation clauses in your specific project contract.
                </p>

                <h2>4. Intellectual Property</h2>
                <p>
                    Mowglai retains ownership of all underlying code frameworks and design systems used in our templates until a license is purchased.
                    For custom agency work, copyright transfer occurs upon full payment as defined in your SOW.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                    Mowglai provides templates "as is" without warranty of any kind. We are not liable for any damages arising from the use of our templates,
                    including but not limited to loss of data, loss of profits, or compatibility issues with third-party plugins.
                </p>

                <h2>6. Contact Us</h2>
                <p>
                    For support with a template or questions about our agency services, please contact: <a href="mailto:info@mowglai.in">info@mowglai.in</a>.
                </p>
            </div>
        </PageLayout>
    );
}
