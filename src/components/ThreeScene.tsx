import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGem({ position, color, speed = 1, scale = 1 }: { position: [number, number, number]; color: string; speed?: number; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4 * speed;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingRing({ position, color }: { position: [number, number, number]; color: string }) {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.8}>
      <mesh ref={ringRef} position={position}>
        <torusGeometry args={[1.4, 0.12, 16, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.1}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  );
}

export const ThreeHeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFF1F5" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#C4B5FD" />
        <pointLight position={[0, 5, 2]} intensity={1.2} color="#FBCFE8" />

        {/* Floating 3D Elements in Pastel Palette */}
        <FloatingGem position={[-5, 2, -2]} color="#C4B5FD" speed={0.8} scale={0.9} />
        <FloatingGem position={[5.5, -2, -3]} color="#FBCFE8" speed={1.1} scale={0.75} />
        <FloatingRing position={[4.5, 2.5, -4]} color="#E9D5FF" />
        <FloatingRing position={[-4.5, -2.5, -3]} color="#BFDBFE" />
        <FloatingSphere position={[-2, -3.5, -2]} color="#BFDBFE" scale={0.7} />
        <FloatingSphere position={[2.5, 3.5, -3]} color="#FBCFE8" scale={0.6} />

        {/* Pastel Sparkling Dust Particles */}
        <Sparkles
          count={45}
          scale={14}
          size={2.5}
          speed={0.4}
          opacity={0.6}
          color="#7C3AED"
        />
        <Sparkles
          count={35}
          scale={12}
          size={3}
          speed={0.3}
          opacity={0.5}
          color="#F472B6"
        />
      </Canvas>
    </div>
  );
};

