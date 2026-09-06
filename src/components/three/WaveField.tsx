import { Suspense, useMemo, useRef } from 'react';
import { Canvas, extend, useFrame, type ThreeElement } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import CanvasBoundary from './CanvasBoundary';

const WaveMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorA: new THREE.Color('#00B4D8'),
    uColorB: new THREE.Color('#0B192C'),
  },
  /* vertex */
  `
    uniform float uTime;
    varying float vElevation;
    void main() {
      vec3 pos = position;
      float elevation = sin(pos.x * 1.1 + uTime * 0.5) * 0.28
                       + sin(pos.y * 1.6 + uTime * 0.35) * 0.16;
      pos.z += elevation;
      vElevation = elevation;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  /* fragment */
  `
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying float vElevation;
    void main() {
      float mixFactor = clamp((vElevation + 0.4) / 0.8, 0.0, 1.0);
      vec3 color = mix(uColorB, uColorA, mixFactor);
      gl_FragColor = vec4(color, 0.55);
    }
  `
);

extend({ WaveMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    waveMaterial: ThreeElement<typeof WaveMaterial>;
  }
}

function WavePlane() {
  const materialRef = useRef<InstanceType<typeof WaveMaterial>>(null);
  const geometry = useMemo(() => new THREE.PlaneGeometry(9, 6, 56, 40), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh geometry={geometry} rotation={[-0.9, 0, 0.15]} position={[0, -0.6, 0]}>
      <waveMaterial
        ref={materialRef}
        transparent
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/** Flowing 3D wave surface, used as an ambient background layer — never interactive, always aria-hidden. */
const WaveField = () => {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <CanvasBoundary>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 1.4, 4.2], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Suspense fallback={null}>
            <WavePlane />
          </Suspense>
        </Canvas>
      </CanvasBoundary>
    </div>
  );
};

export default WaveField;
