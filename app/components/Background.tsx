import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SpaceBackground = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <mesh>
        <torusGeometry args={[10, 3, 16, 100]} />
        <meshStandardMaterial
          color="#4a90e2"
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 25] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SpaceBackground />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Background; 