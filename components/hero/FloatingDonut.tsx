"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Donut() {
  const donutRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!donutRef.current) return;

    const time = state.clock.getElapsedTime();

    // Continuous rotation
    donutRef.current.rotation.x = time * 0.18;
    donutRef.current.rotation.y = time * 0.28;

    // Subtle mouse interaction
    donutRef.current.rotation.x +=
      (state.pointer.y * 0.15 - donutRef.current.rotation.x) * 0.01;

    donutRef.current.rotation.z +=
      (state.pointer.x * 0.15 - donutRef.current.rotation.z) * 0.01;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.35}
      floatIntensity={0.8}
    >
      <Torus
        ref={donutRef}
        args={[2.5, 0.8, 64, 128]}
        scale={1.15}
      >
        <meshStandardMaterial
          metalness={0.85}
          roughness={0.18}
          color="#7c3aed"
        />
      </Torus>
    </Float>
  );
}

export default function FloatingDonut() {
  return (
    <div className="pointer-events-none absolute right-[-8%] top-1/2 z-0 h-[700px] w-[700px] -translate-y-1/2 opacity-70">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.35} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[-5, -2, 3]}
          intensity={8}
          color="#6366f1"
        />

        <pointLight
          position={[4, 2, 1]}
          intensity={6}
          color="#a855f7"
        />

        <Donut />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}