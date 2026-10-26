import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Interface for Mouse Position Prop
interface MousePosProps {
  mousePos: { x: number; y: number };
}

// 1. Central Multi-Layered Core Orb & Outer Wireframe Cage
const CentralCore: React.FC<MousePosProps> = ({ mousePos }) => {
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y += delta * 0.3;
      coreMeshRef.current.rotation.x = THREE.MathUtils.lerp(
        coreMeshRef.current.rotation.x,
        mousePos.y * 0.35,
        0.05
      );
      coreMeshRef.current.rotation.z = THREE.MathUtils.lerp(
        coreMeshRef.current.rotation.z,
        mousePos.x * 0.25,
        0.05
      );
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.2;
      wireframeRef.current.rotation.x += delta * 0.1;
      const scalePulse = 1 + Math.sin(time * 1.5) * 0.04;
      wireframeRef.current.scale.set(scalePulse * 2.1, scalePulse * 2.1, scalePulse * 2.1);
    }
  });

  return (
    <group>
      {/* Distorted Emissive Metallic Core */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh ref={coreMeshRef} scale={1.75}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#1d1035"
            emissive="#581c87"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.95}
            distort={0.3}
            speed={2.0}
          />
        </mesh>
      </Float>

      {/* Geometric Dynamic Wireframe Cage Outer Shield */}
      <mesh ref={wireframeRef} scale={2.1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#C084FC"
          wireframe
          transparent
          opacity={0.35}
          emissive="#A855F7"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

// 2. Gyroscopic Multi-Axis Orbital Rings with Orbiting Satellites
const GyroscopicRings: React.FC = () => {
  const group1Ref = useRef<THREE.Group>(null);
  const group2Ref = useRef<THREE.Group>(null);
  const group3Ref = useRef<THREE.Group>(null);
  const node1Ref = useRef<THREE.Mesh>(null);
  const node2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (group1Ref.current) {
      group1Ref.current.rotation.z += delta * 0.2;
      group1Ref.current.rotation.y += delta * 0.15;
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.z -= delta * 0.25;
      group2Ref.current.rotation.x += delta * 0.18;
    }
    if (group3Ref.current) {
      group3Ref.current.rotation.x -= delta * 0.12;
      group3Ref.current.rotation.y += delta * 0.22;
    }

    // Satellite nodes pathing along torus radius
    if (node1Ref.current) {
      const radius = 2.85;
      node1Ref.current.position.x = Math.cos(time * 1.2) * radius;
      node1Ref.current.position.y = Math.sin(time * 1.2) * radius;
    }
    if (node2Ref.current) {
      const radius = 3.4;
      node2Ref.current.position.x = Math.cos(-time * 0.9) * radius;
      node2Ref.current.position.z = Math.sin(-time * 0.9) * radius;
    }
  });

  return (
    <group>
      {/* Primary Ring & Satellite Node */}
      <group ref={group1Ref}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.85, 0.025, 16, 120]} />
          <meshStandardMaterial
            color="#E9D5FF"
            metalness={0.95}
            roughness={0.08}
            emissive="#C084FC"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh ref={node1Ref}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#F43F5E"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>

      {/* Secondary Ring & Satellite Node */}
      <group ref={group2Ref}>
        <mesh rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
          <torusGeometry args={[3.4, 0.02, 16, 120]} />
          <meshStandardMaterial
            color="#A855F7"
            metalness={0.9}
            roughness={0.12}
            emissive="#7E22CE"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh ref={node2Ref}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color="#E0E7FF"
            emissive="#38BDF8"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>

      {/* Outer Fine Ring */}
      <group ref={group3Ref}>
        <mesh rotation={[Math.PI / 6, -Math.PI / 3, Math.PI / 4]}>
          <torusGeometry args={[3.9, 0.015, 16, 120]} />
          <meshStandardMaterial
            color="#DDD6FE"
            metalness={0.95}
            roughness={0.05}
            emissive="#8B5CF6"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>
    </group>
  );
};

// 3. Orbiting Dynamic Crystal Shards
const FloatingShards: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const shardData = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 3.6 + (i % 3) * 0.5;
      const scale = 0.12 + (i % 4) * 0.04;
      return {
        initialPos: [
          Math.cos(angle) * radius,
          (Math.sin(i * 1.5) - 0.5) * 1.8,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale,
        rotSpeed: 0.5 + Math.random() * 1.2,
      };
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {shardData.map((shard, idx) => (
        <Float key={idx} speed={2} rotationIntensity={1.5} floatIntensity={1}>
          <mesh position={shard.initialPos} scale={shard.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#F3E8FF"
              metalness={0.9}
              roughness={0.1}
              emissive="#A855F7"
              emissiveIntensity={0.7}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// 4. Swirling Particle Dust & Sparkle Universe
const ParticleUniverse: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const count = 350;
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors, originalY] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const origY = new Float32Array(count);

    const palette = [
      new THREE.Color('#A855F7'),
      new THREE.Color('#D8B4FE'),
      new THREE.Color('#EC4899'),
      new THREE.Color('#38BDF8'),
    ];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 8.5;
      const y = (Math.random() - 0.5) * 12;

      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * radius;

      origY[i] = y;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col, origY];
  }, [count]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        mousePos.y * 0.15,
        0.03
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        -mousePos.x * 0.15,
        0.03
      );

      // Subtle pulse effect on buffer geometry position attribute
      const positionAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        const currentY = originalY[i];
        positionAttr.setY(i, currentY + Math.sin(time * 1.5 + i) * 0.15);
      }
      positionAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// 5. Dynamic Lighting Setup with Animated Color & Pulse
const DynamicLighting: React.FC = () => {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (lightRef.current) {
      lightRef.current.intensity = 2.0 + Math.sin(time * 2) * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 6, 6]} intensity={1.8} color="#E9D5FF" />
      <pointLight ref={lightRef} position={[-5, -5, -4]} intensity={2.2} color="#A855F7" />
      <pointLight position={[0, 4, 3]} intensity={1.5} color="#38BDF8" />
      <pointLight position={[0, -4, 2]} intensity={1.2} color="#EC4899" />
    </>
  );
};

// Main Export Component
export const Hero3DCanvas: React.FC<MousePosProps> = ({ mousePos }) => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <DynamicLighting />
        <CentralCore mousePos={mousePos} />
        <GyroscopicRings />
        <FloatingShards />
        <ParticleUniverse mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
