const PHP_ENDPOINT = "/send_email.php";

/**
 * Sends form data to info@mowglai.com via the PHP backend endpoint.
 * The site is a static export (`output: 'export'`), so PHP under
 * `public/api/` is the only supported server-side transport — there is no
 * Next.js route handler to fall back to.
 */
export const sendEmail = async (
    data: Record<string, string>
): Promise<{ status: "success" | "error"; message: string }> => {
    // 1. Try production PHP endpoint first
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

        const response = await fetch(PHP_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
            const result = await response.json();
            if (result.status === "success") {
                return {
                    status: "success",
                    message: result.message || "Thank you! Your message has been submitted and sent to info@mowglai.com successfully."
                };
            }
        }
    } catch (err: unknown) {
        console.error("[sendEmail] Submission error:", err);
        return {
            status: "error",
            message: "Unable to connect to mail server. Please check your internet connection or email info@mowglai.com directly.",
        };
    }

    return {
        status: "error",
        message: "Unable to complete submission. Please try again shortly.",
    };
};
