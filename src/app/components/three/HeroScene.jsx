"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

const MODEL_PATH = "/models/chocolate.glb";

function ChocolateModel() {
  const model = useGLTF(MODEL_PATH);
  const group = useRef(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25;
      group.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.8}>
      <group ref={group} rotation={[0.1, -0.5, 0.05]}>
        <Center>
          <primitive object={model.scene} scale={0.48} />
        </Center>
      </group>
    </Float>
  );
}

function ChocolateBarFallback() {
  const mesh = useRef(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.8}>
      <mesh ref={mesh} rotation={[0.1, -0.5, 0.05]} castShadow>
        <boxGeometry args={[2, 0.32, 1.1]} />
        <meshStandardMaterial color="#321610" roughness={0.28} metalness={0.08} />
      </mesh>
      <mesh position={[0, 0.24, 0]} rotation={[0.1, -0.5, 0.05]}>
        <boxGeometry args={[1.5, 0.03, 0.75]} />
        <meshStandardMaterial color="#bd9254" roughness={0.4} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.4, 5], fov: 35 }} shadows>
      <color attach="background" args={["#eee4d8"]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 4, 5]} intensity={3} castShadow />
      <pointLight position={[-3, 1, 2]} color="#bd9254" intensity={2} />
      <Suspense fallback={<ChocolateBarFallback />}>
        <ChocolateModel />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
