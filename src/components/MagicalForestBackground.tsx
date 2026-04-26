"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const MagicalPlantVeins = dynamic(
  () => import("@/components/MagicalPlantVeins"),
  { ssr: false }
);

const AtokirinaCreatures = dynamic(
  () => import("@/components/AtokirinaCreatures"),
  { ssr: false }
);

export const MagicalForestBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Background Layer: Atmospheric Atokirina (jellyfish creatures) */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.6,
          zIndex: 1,
        }}
      >
        <Suspense fallback={null}>
          <AtokirinaCreatures />
        </Suspense>
      </div>

      {/* Middle Layer: Growing Plant Veins (cursor following) */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
        }}
      >
        <Suspense fallback={null}>
          <MagicalPlantVeins />
        </Suspense>
      </div>
    </div>
  );
};

export default MagicalForestBackground;
