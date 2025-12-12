import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Snowflake component
function Snowflake({ position, scale = 1 }) {
  const snowflakeRef = useRef();
  const rotationSpeed = 0.01 + Math.random() * 0.03;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    snowflakeRef.current.rotation.x = time * rotationSpeed;
    snowflakeRef.current.rotation.y = time * rotationSpeed;
    snowflakeRef.current.position.y += 0.002; // Slowly fall down

    // Reset position when it goes too low
    if (snowflakeRef.current.position.y > 5) {
      snowflakeRef.current.position.y = -5;
    }
  });

  return (
    <group ref={snowflakeRef} position={position}>
      <Sphere args={[0.02 * scale, 8, 6]} position={[-0.02 * scale, 0, 0]}>
        <meshStandardMaterial color="white" transparent opacity={0.8} />
      </Sphere>
      <Sphere args={[0.02 * scale, 8, 6]} position={[0.02 * scale, 0, 0]}>
        <meshStandardMaterial color="white" transparent opacity={0.8} />
      </Sphere>
      <Sphere args={[0.02 * scale, 8, 6]} position={[0, -0.02 * scale, 0]}>
        <meshStandardMaterial color="white" transparent opacity={0.8} />
      </Sphere>
    </group>
  );
}

// Gift box component
function GiftBox({ position }) {
  const boxRef = useRef();
  const ribbonRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    boxRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    ribbonRef.current.rotation.x = Math.cos(time * 0.3) * 0.2;
  });

  return (
    <group position={position}>
      <mesh ref={boxRef}>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
      {/* Ribbon */}
      <mesh ref={ribbonRef}>
        <boxGeometry args={[0.45, 0.02, 0.02]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
      <mesh ref={ribbonRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.02, 0.02, 0.45]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
}

// Christmas tree component
function ChristmasTree({ position }) {
  const treeRef = useRef();
  const lightsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    treeRef.current.rotation.y = time * 0.1;
    lightsRef.current.rotation.y = -time * 0.2;
  });

  return (
    <group ref={treeRef} position={position}>
      {/* Tree trunk */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.4]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      {/* Tree layers */}
      <mesh position={[0, -0.4, 0]}>
        <coneGeometry args={[0.6, 0.8]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <coneGeometry args={[0.45, 0.6]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <coneGeometry args={[0.3, 0.4]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
      {/* Christmas lights */}
      <group ref={lightsRef}>
        <Sphere args={[0.02, 8, 6]} position={[0.3, -0.2, 0.3]}>
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.3} />
        </Sphere>
        <Sphere args={[0.02, 8, 6]} position={[-0.3, 0.1, 0.3]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.3} />
        </Sphere>
        <Sphere args={[0.02, 8, 6]} position={[0.4, 0.3, 0.2]}>
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.3} />
        </Sphere>
        <Sphere args={[0.02, 8, 6]} position={[-0.2, -0.1, 0.2]}>
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </Sphere>
      </group>
    </group>
  );
}

// Floating perfection component
function FloatingPerfection({ position }) {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.sin(time * 1.5) * 0.1;
    groupRef.current.rotation.z = Math.sin(time * 0.8) * 0.05;
  });

  return (
    <group ref={groupRef} position={position}>
      <Torus args={[0.15, 0.05, 16, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#e11d48" wireframe={false} />
      </Torus>
      <Sphere args={[0.08, 16, 16]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#fbbf24" />
      </Sphere>
    </group>
  );
}

// Main scene component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#3b82f6" />
      <directionalLight position={[0, 5, 5]} intensity={0.6} />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      {/* Snowflakes */}
      {[...Array(20)].map((_, i) => (
        <Snowflake
          key={`snow-${i}`}
          position={[
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10
          ]}
          scale={0.5 + Math.random() * 1}
        />
      ))}

      {/* Christmas Elements */}
      <ChristmasTree position={[-8, -3, -5]} />
      <ChristmasTree position={[8, -2, -3]} />

      <GiftBox position={[-4, -1, 2]} />
      <GiftBox position={[4, 0, 1]} />

      {/* Floating decorative elements */}
      <FloatingPerfection position={[2, 2, 3]} />
      <FloatingPerfection position={[-3, 1, -2]} />
      <FloatingPerfection position={[0, -1, 4]} />

      {/* Orbit Controls for interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
}

// Main Three.js background component
export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        style={{ background: 'radial-gradient(ellipse 120% 80% at 50% -20%, rgba(20, 24, 96, 0.6) 0%, rgba(0, 12, 48, 0.4) 50%, rgba(0, 0, 0, 0.3) 100%)' }}
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
