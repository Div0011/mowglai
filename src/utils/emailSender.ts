export const sendEmail = async (data: Record<string, string>): Promise<{ status: 'success' | 'error', message: string }> => {
    try {
        const response = await fetch('/send_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Email sending failed:", error);
        // Fallback or rethrow
        return { status: 'error', message: 'Network or server error' };
    }
};
