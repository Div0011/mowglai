"use client";

import React, { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Custom shader for bioluminescent glow
const veinVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const veinFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorStart;
  uniform vec3 uColorEnd;
  uniform float uPulseSpeed;
  uniform float uIntensity;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    // Fresnel effect for edge glow
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);

    // Pulsing effect
    float pulse = sin(uTime * uPulseSpeed) * 0.5 + 0.5;
    float pulse2 = sin(uTime * uPulseSpeed * 1.3 + 1.0) * 0.5 + 0.5;

    // Color mixing between gold and neon green
    vec3 color = mix(uColorStart, uColorEnd, pulse * fresnel);

    // Add extra brightness at edges
    float glow = fresnel * (1.0 + pulse * 0.5) * uIntensity;

    // Organic variation
    float noise = sin(vUv.x * 20.0 + uTime) * sin(vUv.y * 20.0 + uTime * 0.7) * 0.1;

    gl_FragColor = vec4(color * (glow + noise), fresnel * 0.9 + 0.1);
  }
`;

interface BranchSegment {
  id: number;
  start: THREE.Vector3;
  end: THREE.Vector3;
  thickness: number;
  age: number;
  parent: number | null;
  children: number[];
  targetInfluence: number;
}

const MAX_SEGMENTS = 120;
const GROWTH_RATE = 0.08;
const BRANCH_ANGLE = Math.PI / 6;

const PlantVeinSystem: React.FC = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, pointer } = useThree();
  const [isVisible, setIsVisible] = useState(true);

  // Target position with smoothing
  const targetPos = useRef(new THREE.Vector3(0, 0, 0));
  const currentPos = useRef(new THREE.Vector3(0, 0, 0));
  const branches = useRef<BranchSegment[]>([]);
  const segmentPool = useRef<BranchSegment[]>([]);
  const rafRef = useRef<number>(0);

  // Intersection Observer for performance
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
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert standard screen coordinates to NDC (-1 to 1)
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth cursor following using requestAnimationFrame
  useEffect(() => {
    if (!isVisible) return;

    const updateTarget = () => {
      // Convert pointer to world coordinates
      const x = mousePos.current.x * viewport.width * 0.5;
      const y = mousePos.current.y * viewport.height * 0.5;

      // Smooth spring-like interpolation
      targetPos.current.x += (x - targetPos.current.x) * 0.08;
      targetPos.current.y += (y - targetPos.current.y) * 0.08;
      targetPos.current.z = 0;

      rafRef.current = requestAnimationFrame(updateTarget);
    };

    rafRef.current = requestAnimationFrame(updateTarget);
    return () => cancelAnimationFrame(rafRef.current);
  }, [viewport, isVisible]);

  // Initialize branch pool
  useEffect(() => {
    // Create root segment
    const root: BranchSegment = {
      id: 0,
      start: new THREE.Vector3(0, -viewport.height * 0.4, 0),
      end: new THREE.Vector3(0, -viewport.height * 0.3, 0),
      thickness: 0.04,
      age: 0,
      parent: null,
      children: [],
      targetInfluence: 0.3,
    };

    branches.current = [root];

    // Pre-allocate pool
    for (let i = 1; i < MAX_SEGMENTS; i++) {
      segmentPool.current.push({
        id: i,
        start: new THREE.Vector3(),
        end: new THREE.Vector3(),
        thickness: 0.01,
        age: 0,
        parent: null,
        children: [],
        targetInfluence: 0,
      });
    }
  }, [viewport]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorStart: { value: new THREE.Color(0xffd700) }, // Gold
      uColorEnd: { value: new THREE.Color(0x39ff14) }, // Neon green
      uPulseSpeed: { value: 2.0 },
      uIntensity: { value: 2.5 },
    }),
    []
  );

  // Geometry for each segment (cylinder)
  const geometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(1, 1, 1, 8, 1, true);
    geo.translate(0, 0.5, 0);
    geo.rotateX(Math.PI / 2);
    return geo;
  }, []);

  const updateBranches = useCallback((dt: number) => {
    const branchesList = branches.current;

    // Grow existing branches toward target
    branchesList.forEach((branch) => {
      if (branch.children.length === 0 && branchesList.length < MAX_SEGMENTS) {
        // Extend toward cursor with organic noise
        const growthDir = new THREE.Vector3()
          .subVectors(currentPos.current, branch.end)
          .normalize()
          .multiplyScalar(branch.targetInfluence);

        // Add organic wandering
        const noise = new THREE.Vector3(
          Math.sin(branch.age * 2.0) * 0.3,
          Math.cos(branch.age * 1.5) * 0.3,
          Math.sin(branch.age * 0.7) * 0.2
        );

        const finalDir = new THREE.Vector3()
          .addVectors(growthDir, noise)
          .normalize()
          .multiplyScalar(GROWTH_RATE);

        const newEnd = new THREE.Vector3().addVectors(branch.end, finalDir);

        // Branching logic
        if (
          branch.age > 0.5 &&
          Math.random() < 0.02 &&
          branch.children.length < 2
        ) {
          const angle = (Math.random() - 0.5) * BRANCH_ANGLE * 2;
          const branchDir = finalDir
            .clone()
            .applyAxisAngle(new THREE.Vector3(0, 0, 1), angle);

          const poolSegment = segmentPool.current.pop();
          if (poolSegment) {
            const newBranch: BranchSegment = {
              ...poolSegment,
              start: branch.end.clone(),
              end: new THREE.Vector3().addVectors(branch.end, branchDir),
              thickness: branch.thickness * 0.7,
              age: 0,
              parent: branch.id,
              children: [],
              targetInfluence: branch.targetInfluence * 0.8,
            };

            branch.children.push(newBranch.id);
            branchesList.push(newBranch);
          }
        }

        branch.end.copy(newEnd);
        branch.age += dt;
      }
    });

    // Prune old branches
    if (branchesList.length > MAX_SEGMENTS * 0.9) {
      const removed = branchesList.splice(
        1,
        Math.floor(branchesList.length * 0.2)
      );
      // Return removed segments to pool
      removed.forEach((seg) => segmentPool.current.push(seg));
    }
  }, []);

  useFrame((state) => {
    if (!isVisible || !meshRef.current || !materialRef.current) return;

    const dt = state.clock.getDelta();
    const time = state.clock.elapsedTime;

    // Update shader time
    materialRef.current.uniforms.uTime.value = time;

    // Smooth current position toward target
    currentPos.current.lerp(targetPos.current, 0.05);

    // Grow and update branches
    updateBranches(dt);

    // Update instanced mesh
    const dummy = new THREE.Object3D();
    
    // Hide unused segments
    dummy.scale.set(0, 0, 0);
    dummy.updateMatrix();
    for (let j = 0; j < MAX_SEGMENTS; j++) {
      meshRef.current!.setMatrixAt(j, dummy.matrix);
    }

    let instanceIndex = 0;
    branches.current.forEach((branch, i) => {
      if (instanceIndex >= MAX_SEGMENTS) return;

      const direction = new THREE.Vector3().subVectors(branch.end, branch.start);
      const length = direction.length();
      
      if (length < 0.0001) return; // Prevent lookAt errors

      const midPoint = new THREE.Vector3()
        .addVectors(branch.start, branch.end)
        .multiplyScalar(0.5);

      dummy.position.copy(midPoint);
      dummy.lookAt(branch.end);
      dummy.scale.set(branch.thickness, length, branch.thickness);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
      instanceIndex++;
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, undefined, MAX_SEGMENTS]}
      frustumCulled={false}
    >
      <shaderMaterial
        ref={materialRef}
        vertexShader={veinVertexShader}
        fragmentShader={veinFragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
};

export const MagicalPlantVeins: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.1} />
        <PlantVeinSystem />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur={true}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default MagicalPlantVeins;
