"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the open/closed state of the fullscreen navigation overlay.
 *
 * FullScreenNav dispatches a `menuToggle` CustomEvent on `window` whenever the
 * overlay opens or closes. Floating controls (contact / settings / back-to-top
 * orbs) sit at z-60, the same layer as the overlay's z-55 backdrop plus its own
 * z-60 header, so they must hide themselves while the menu is open or they
 * float on top of it and swallow taps.
 */
export function useMenuOpen(): boolean {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleMenuToggle = (event: Event) => {
            setIsMenuOpen((event as CustomEvent)?.detail?.isOpen ?? false);
        };
        window.addEventListener("menuToggle", handleMenuToggle);
        return () => {
            window.removeEventListener("menuToggle", handleMenuToggle);
        };
    }, []);

    return isMenuOpen;
}
