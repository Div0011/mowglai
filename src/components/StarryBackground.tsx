import { useEffect, useState } from "react";

const StarryBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-100"
                style={{
                    backgroundImage: `
                        radial-gradient(2px 2px at 5% 12%, rgba(255, 255, 255, 1) 2px, transparent 0),
                        radial-gradient(3px 3px at 85% 18%, rgba(167, 139, 250, 1) 2px, transparent 0),
                        radial-gradient(2px 2px at 15% 65%, rgba(255, 255, 255, 1) 2px, transparent 0),
                        radial-gradient(2px 2px at 42% 25%, rgba(139, 92, 246, 1) 2px, transparent 0),
                        radial-gradient(2px 2px at 68% 90%, rgba(255, 255, 255, 1) 2px, transparent 0),
                        radial-gradient(3px 3px at 92% 45%, rgba(167, 139, 250, 1) 2px, transparent 0),
                        radial-gradient(2px 2px at 35% 82%, rgba(255, 255, 255, 1) 2px, transparent 0),
                        radial-gradient(2px 2px at 75% 10%, rgba(139, 92, 246, 1) 2px, transparent 0),
                        radial-gradient(2px 2px at 55% 55%, rgba(255, 255, 255, 1) 2px, transparent 0),
                        radial-gradient(2px 2px at 25% 35%, rgba(255, 255, 255, 1) 2px, transparent 0),
                        radial-gradient(3px 3px at 10% 95%, rgba(167, 139, 250, 1) 2px, transparent 0)
                    `,
                    backgroundSize: '550px 550px'
                }}
            />
            <div className="absolute inset-0 z-0 opacity-80"
                style={{
                    backgroundImage: `
                        radial-gradient(2.5px 2.5px at 18% 25%, rgba(255, 255, 255, 1) 1px, transparent 0),
                        radial-gradient(2.5px 2.5px at 73% 88%, rgba(139, 92, 246, 0.9) 1px, transparent 0),
                        radial-gradient(2.5px 2.5px at 95% 5%, rgba(255, 255, 255, 1) 1px, transparent 0),
                         radial-gradient(3px 3px at 45% 75%, rgba(167, 139, 250, 1) 1px, transparent 0)
                    `,
                    backgroundSize: '400px 400px',
                    transform: 'rotate(15deg)'
                }}
            />
        </div>
    );
};

export default StarryBackground;
