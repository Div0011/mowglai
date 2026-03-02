import { useEffect, useState } from 'react';

interface DeviceInfo {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    hasHover: boolean;
    hasTouch: boolean;
    viewport: 'mobile' | 'tablet' | 'desktop';
    isSafari: boolean;
    isChrome: boolean;
}

export function useDeviceOptimization(): DeviceInfo {
    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        hasHover: false,
        hasTouch: false,
        viewport: 'desktop',
        isSafari: false,
        isChrome: false,
    });

    useEffect(() => {
        const updateDeviceInfo = () => {
            // Check viewport size
            const width = window.innerWidth;
            const isMobile = width < 768;
            const isTablet = width >= 768 && width < 1024;
            const isDesktop = width >= 1024;

            // Check hover and touch capabilities
            const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
            const hasTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

            // Detect browser
            const userAgent = navigator.userAgent;
            const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
            const isChrome = /Chrome/.test(userAgent);

            setDeviceInfo({
                isMobile,
                isTablet,
                isDesktop,
                hasHover,
                hasTouch,
                viewport: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
                isSafari,
                isChrome,
            });
        };

        updateDeviceInfo();

        const resizeObserver = new ResizeObserver(() => {
            updateDeviceInfo();
        });

        resizeObserver.observe(document.documentElement);

        window.addEventListener('orientationchange', updateDeviceInfo);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('orientationchange', updateDeviceInfo);
        };
    }, []);

    return deviceInfo;
}

// Optimization settings based on device
export function getAnimationOptimizations(deviceInfo: DeviceInfo) {
    if (deviceInfo.isMobile) {
        return {
            reduceMotion: true,
            reducedDuration: 0.4, // Faster animations
            reduceParallax: true,
            disableHeavyEffects: true,
            useGPUAcceleration: true,
            mouseTrackingEnabled: false,
            firefliesEnabled: false, // Disable moving elements on mobile
            textureRevealEnabled: true, // Keep this but optimize
        };
    }

    if (deviceInfo.isTablet) {
        return {
            reduceMotion: false,
            reducedDuration: 0.5,
            reduceParallax: true,
            disableHeavyEffects: false,
            useGPUAcceleration: true,
            mouseTrackingEnabled: false,
            firefliesEnabled: true,
            textureRevealEnabled: true,
        };
    }

    // Desktop/Laptop
    return {
        reduceMotion: false,
        reducedDuration: 0.7,
        reduceParallax: false,
        disableHeavyEffects: false,
        useGPUAcceleration: true,
        mouseTrackingEnabled: true,
        firefliesEnabled: true,
        textureRevealEnabled: true,
    };
}

// Smooth scroll configuration
export const smoothScrollConfig = {
    mobile: {
        speed: 0.5,
        enabled: false, // Disable smooth scroll on mobile for better performance
    },
    tablet: {
        speed: 0.7,
        enabled: true,
    },
    desktop: {
        speed: 1,
        enabled: true,
    },
};
