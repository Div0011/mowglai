"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Simplex noise implementation (simplified version)
class SimplexNoise {
  noise3d(x: number, y: number, z: number): number {
    return (
      Math.sin(x * 1.5 + z * 0.5) * Math.cos(y * 1.2 + z * 0.3) * 0.5 +
      Math.sin(x * 0.8 + y * 0.5 + z * 1.2) * 0.3 +
      Math.cos(y * 2.0 + x * 0.3) * 0.2
    );
  }
}

const simplex = new SimplexNoise();

// Jellyfish body shader
const jellyfishVertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vDisplacement;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);

    // Pulsing animation
    float pulse = sin(uTime * 2.0 + position.y * 3.0) * 0.1;
    vec3 newPos = position + normal * pulse;

    vDisplacement = pulse;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

const jellyfishFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorCore;
  uniform vec3 uColorEdge;
  uniform float uOpacity;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vDisplacement;

  void main() {
    // Fresnel for translucent edge glow
    vec3 viewDir = normalize(cameraPosition - (modelMatrix * vec4(vUv, 0.0, 1.0)).xyz);
    float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.0);

    // Pulsing glow
    float pulse = sin(uTime * 1.5) * 0.5 + 0.5;

    // Color gradient from core to edge
    vec3 color = mix(uColorCore, uColorEdge, fresnel + vDisplacement);

    // Add brightness at edges
    color += uColorEdge * fresnel * pulse * 2.0;

    // Soft transparency
    float alpha = uOpacity * (0.3 + fresnel * 0.7);

    gl_FragColor = vec4(color, alpha);
  }
`;

// Tendril shader
const tendrilVertexShader = `
  uniform float uTime;
  attribute float aOffset;
  attribute float aScale;
  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // Wave motion along tendril
    float wave = sin(pos.y * 8.0 - uTime * 3.0 + aOffset) * 0.1 * aScale;
    float wave2 = cos(pos.y * 6.0 - uTime * 2.0 + aOffset * 1.3) * 0.08 * aScale;

    pos.x += wave;
    pos.z += wave2;

    vAlpha = 1.0 - smoothstep(0.0, 1.0, pos.y);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const tendrilFragmentShader = `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    gl_FragColor = vec4(uColor, vAlpha * 0.6);
  }
`;


// Number of jellyfish
const INSTANCE_COUNT = 5;
const REPULSION_RADIUS = 1.2;
const REPULSION_STRENGTH = 0.3;

interface CreatureData {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  target: THREE.Vector3;
  offset: number;
  scale: number;
  tendrilPhase: number;
}

const AtokirinaSystem: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const bodyMeshRef = useRef<THREE.InstancedMesh>(null);
  const tendrilLinesRef = useRef<THREE.InstancedMesh>(null);
  const { pointer, viewport } = useThree();
  const [isVisible, setIsVisible] = useState(true);

  const creatures = useRef<CreatureData[]>([]);
  const cursorWorldPos = useRef(new THREE.Vector3());
  const mousePos = useRef({ x: 0, y: 0 });

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const canvas = document.querySelector("canvas");
    if (canvas) observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  // Track mouse natively since canvas has pointerEvents: none
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize creatures
  useEffect(() => {
    creatures.current = Array.from({ length: INSTANCE_COUNT }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * viewport.width * 0.95,
        (Math.random() - 0.5) * viewport.height * 0.95,
        (Math.random() - 0.5) * 1.5
      ),
      velocity: new THREE.Vector3(),
      target: new THREE.Vector3(
        (Math.random() - 0.5) * viewport.width,
        (Math.random() - 0.5) * viewport.height,
        (Math.random() - 0.5) * 1.5
      ),
      offset: Math.random() * 100,
      scale: 0.06 + Math.random() * 0.04, // much smaller
      tendrilPhase: Math.random() * Math.PI * 2,
    }));
  }, [viewport]);

  const bodyUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorCore: { value: new THREE.Color(0xb3e6ff) }, // Softer light blue
      uColorEdge: { value: new THREE.Color(0xffe066) }, // Soft golden yellow
      uOpacity: { value: 0.45 },
    }),
    []
  );

  const tendrilUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0xffe066) }, // Soft golden yellow
    }),
    []
  );

  // Body geometry - smaller, more jellyfish-like
  const bodyGeometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 32, 32);
    geo.scale(0.7, 0.45, 0.7); // smaller and more squished
    return geo;
  }, []);

  // Simplified tendril geometry - using line segments
  const tendrilGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 8; i++) {
      points.push(
        new THREE.Vector3(
          Math.sin(i * 0.5) * 0.05,
          -i * 0.1,
          Math.cos(i * 0.5) * 0.05
        )
      );
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeo = new THREE.TubeGeometry(curve, 8, 0.015, 4, false);

    // Add attributes for animation
    const count = tubeGeo.attributes.position.count;
    const offsetArray = new Float32Array(count).fill(Math.random() * 10);
    const scaleArray = new Float32Array(count).fill(0.5 + Math.random() * 0.5);

    tubeGeo.setAttribute(
      "aOffset",
      new THREE.BufferAttribute(offsetArray, 1)
    );
    tubeGeo.setAttribute(
      "aScale",
      new THREE.BufferAttribute(scaleArray, 1)
    );

    return tubeGeo;
  }, []);

  useFrame((state) => {
    if (!isVisible || !bodyMeshRef.current || !groupRef.current) return;

    const time = state.clock.elapsedTime;
    const dt = Math.min(state.clock.getDelta(), 0.1);

    // Update uniforms
    // eslint-disable-next-line react-hooks/immutability
    bodyUniforms.uTime.value = time;
    // eslint-disable-next-line react-hooks/immutability
    tendrilUniforms.uTime.value = time;

    // Update cursor position in world space
    cursorWorldPos.current.set(
      mousePos.current.x * viewport.width * 0.5,
      mousePos.current.y * viewport.height * 0.5,
      0
    );

    const dummy = new THREE.Object3D();
    const bodyMesh = bodyMeshRef.current;

    creatures.current.forEach((creature, i) => {
      // Gentle floating movement
      const noiseX = simplex.noise3d(
        creature.position.x * 0.2,
        creature.position.y * 0.2,
        time * 0.1 + creature.offset
      );
      const noiseY = simplex.noise3d(
        creature.position.x * 0.2 + 50,
        creature.position.y * 0.2,
        time * 0.1 + creature.offset
      );
      
      const floatForce = new THREE.Vector3(noiseX, noiseY, 0).multiplyScalar(0.005);
      
      const toTarget = new THREE.Vector3().subVectors(creature.target, creature.position);
      if (toTarget.length() < 1) {
        creature.target.set(
          (Math.random() - 0.5) * viewport.width * 1.2,
          (Math.random() - 0.5) * viewport.height * 1.2,
          (Math.random() - 0.5) * 2
        );
      }
      const seekForce = toTarget.normalize().multiplyScalar(0.002);

      const verticalPulse = Math.sin(time * 1.0 + creature.offset) * 0.005;
      const pulseForce = new THREE.Vector3(0, verticalPulse, 0);

      const toCursor = new THREE.Vector3().subVectors(cursorWorldPos.current, creature.position);
      const dist = toCursor.length();

      if (dist < REPULSION_RADIUS && dist > 0.1) {
        const repulsionForce = toCursor.normalize().multiplyScalar(-REPULSION_STRENGTH / (dist * dist));
        creature.velocity.add(repulsionForce);
      }

      creature.velocity.add(floatForce);
      creature.velocity.add(seekForce);
      creature.velocity.add(pulseForce);
      creature.velocity.multiplyScalar(0.98);
      creature.position.add(creature.velocity.clone().multiplyScalar(dt * 60));

      const boundX = viewport.width * 0.7;
      const boundY = viewport.height * 0.7;
      if (creature.position.x > boundX) creature.position.x = -boundX;
      if (creature.position.x < -boundX) creature.position.x = boundX;
      if (creature.position.y > boundY) creature.position.y = -boundY;
      if (creature.position.y < -boundY) creature.position.y = boundY;

      dummy.position.copy(creature.position);
      if (creature.velocity.length() > 0.001) {
        const targetRotation = Math.atan2(creature.velocity.y, creature.velocity.x) - Math.PI / 2;
        dummy.rotation.z = THREE.MathUtils.lerp(dummy.rotation.z, targetRotation, 0.05);
      }
      dummy.scale.setScalar(creature.scale);
      dummy.updateMatrix();

      bodyMesh.setMatrixAt(i, dummy.matrix);
      if (tendrilLinesRef.current) {
        tendrilLinesRef.current.setMatrixAt(i, dummy.matrix);
      }
    });

    bodyMesh.instanceMatrix.needsUpdate = true;
    if (tendrilLinesRef.current) {
      tendrilLinesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh
        ref={bodyMeshRef}
        args={[bodyGeometry, undefined, INSTANCE_COUNT]}
        frustumCulled={false}
      >
        <shaderMaterial
          vertexShader={jellyfishVertexShader}
          fragmentShader={jellyfishFragmentShader}
          uniforms={bodyUniforms}
          transparent={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </instancedMesh>

      {/* Tendrils - simplified as instanced mesh */}
      <instancedMesh
        ref={tendrilLinesRef}
        args={[tendrilGeometry, undefined, INSTANCE_COUNT]}
        frustumCulled={false}
      >
        <shaderMaterial
          vertexShader={tendrilVertexShader}
          fragmentShader={tendrilFragmentShader}
          uniforms={tendrilUniforms}
          transparent={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </instancedMesh>
    </group>
  );
};

export const AtokirinaCreatures: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.04} />
        <AtokirinaSystem />
        <EffectComposer>
          <Bloom
            intensity={0.55} // Softer, less harsh bloom
            luminanceThreshold={0.18}
            luminanceSmoothing={0.95}
            mipmapBlur={true}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default AtokirinaCreatures;
