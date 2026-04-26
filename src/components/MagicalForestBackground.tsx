"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const MagicalPlantVeins = dynamic(
  () => import("@/components/MagicalPlantVeins"),
  { ssr: false }
);

export const MagicalForestBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
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
