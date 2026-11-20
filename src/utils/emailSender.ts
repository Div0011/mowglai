const PHP_ENDPOINT = "/send_email.php";
const TARGET_EMAIL = "tech@mowglai.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

/**
 * Sends form data to tech@mowglai.com.
 * Tries the PHP backend endpoint first (for PHP/Hostinger hosting) and
 * automatically falls back to FormSubmit AJAX (for static Vercel hosting).
 */
export const sendEmail = async (
    data: Record<string, string>
): Promise<{ status: "success" | "error"; message: string }> => {
    // 1. Try production PHP endpoint first (when hosted on a PHP server)
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const response = await fetch(PHP_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, to: TARGET_EMAIL }),
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
            const contentType = response.headers.get("content-type") || "";
            if (contentType.includes("application/json")) {
                const result = await response.json();
                if (result.status === "success") {
                    return {
                        status: "success",
                        message: result.message || `Thank you! Your message has been submitted and sent to ${TARGET_EMAIL} successfully.`,
                    };
                }
            }
        }
    } catch {
        // PHP endpoint unavailable (e.g., static hosting on Vercel or local dev) — fall through
    }

    // 2. Fallback to FormSubmit AJAX targeting tech@mowglai.com
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const payload: Record<string, string> = {
            ...data,
            _subject: data.subject || `New Mowglai Website Enquiry${data.name ? ` from ${data.name}` : ""}`,
            _template: "table",
            _captcha: "false",
        };
        if (data.email) {
            payload._replyto = data.email;
        }

        const response = await fetch(FORMSUBMIT_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        const result = await response.json().catch(() => null);
        if (response.ok && result && (result.success === "true" || result.success === true)) {
            return {
                status: "success",
                message: `Thank you! Your details have been submitted and sent to ${TARGET_EMAIL} successfully.`,
            };
        }

        return {
            status: "error",
            message: (result && result.message) || `Unable to complete submission. Please email ${TARGET_EMAIL} directly.`,
        };
    } catch (err: unknown) {
        console.error("[sendEmail] Submission error:", err);
        return {
            status: "error",
            message: `Unable to connect to mail server. Please check your internet connection or email ${TARGET_EMAIL} directly.`,
        };
    }
};
