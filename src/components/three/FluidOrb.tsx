import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sparkles, Sphere } from '@react-three/drei';
import type { Group, Mesh } from 'three';
import CanvasBoundary from './CanvasBoundary';

/** The distorted, slowly-breathing sphere — reads as a droplet of water. */
function DistortedOrb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.getElapsedTime();
    mesh.rotation.x = Math.sin(t / 4) / 5;
    mesh.rotation.y = t / 7;
    mesh.position.y = Math.sin(t / 1.6) * 0.12;
  });

  return (
    <Sphere ref={meshRef} args={[1.35, 128, 128]}>
      <MeshDistortMaterial
        color="#00B4D8"
        attach="material"
        distort={0.42}
        speed={1.6}
        roughness={0.12}
        metalness={0.35}
        emissive="#0B192C"
        emissiveIntensity={0.25}
      />
    </Sphere>
  );
}

/** Rotates the whole rig a few degrees toward the pointer for a parallax feel. */
function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.35 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-pointer.y * 0.2 - group.current.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

const FluidOrb = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <CanvasBoundary>
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 4.4], fov: 40 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[3, 3, 4]} intensity={90} color="#48CAE4" />
          <pointLight position={[-3, -2, -2]} intensity={40} color="#00B4D8" />
          <Suspense fallback={null}>
            <ParallaxRig>
              <DistortedOrb />
              <Sparkles count={40} scale={4.5} size={2} speed={0.3} color="#48CAE4" opacity={0.5} />
            </ParallaxRig>
          </Suspense>
        </Canvas>
      </CanvasBoundary>
    </div>
  );
};

export default FluidOrb;
