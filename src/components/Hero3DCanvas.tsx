import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface MousePosProps {
  mousePos: { x: number; y: number };
}

// 1. Interactive Core with Glassmorphic Outer Bubble & Cyber Line Art Cage
const CentralCore: React.FC<MousePosProps> = ({ mousePos }) => {
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const bubbleRef = useRef<THREE.Mesh>(null);
  const lineArtMeshRef = useRef<THREE.LineSegments>(null);

  // Create explicit line art geometry (wireframe wire box/dodecahedron edges)
  const lineGeometry = useMemo(() => {
    const geo = new THREE.DodecahedronGeometry(2.3, 1);
    return new THREE.WireframeGeometry(geo);
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y += delta * 0.35;
      coreMeshRef.current.rotation.x = THREE.MathUtils.lerp(
        coreMeshRef.current.rotation.x,
        mousePos.y * 0.4,
        0.08
      );
      coreMeshRef.current.rotation.z = THREE.MathUtils.lerp(
        coreMeshRef.current.rotation.z,
        mousePos.x * 0.3,
        0.08
      );
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.25;
      wireframeRef.current.rotation.x += delta * 0.15;
      const scalePulse = 1 + Math.sin(time * 1.8) * 0.05;
      wireframeRef.current.scale.set(scalePulse * 2.1, scalePulse * 2.1, scalePulse * 2.1);
    }

    if (bubbleRef.current) {
      bubbleRef.current.rotation.y += delta * 0.1;
      bubbleRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    }

    if (lineArtMeshRef.current) {
      lineArtMeshRef.current.rotation.y += delta * 0.2;
      lineArtMeshRef.current.rotation.x -= delta * 0.1;
    }
  });

  return (
    <group>
      {/* Inner Distorted Metallic Energy Core */}
      <Float speed={3} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={coreMeshRef} scale={1.65}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#2e1065"
            emissive="#7e22ce"
            emissiveIntensity={0.8}
            roughness={0.05}
            metalness={0.95}
            distort={0.4}
            speed={2.5}
          />
        </mesh>
      </Float>

      {/* 3D Line-Art Wireframe Outer Cage */}
      <lineSegments ref={lineArtMeshRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#D8B4FE"
          transparent
          opacity={0.45}
          linewidth={1.5}
        />
      </lineSegments>

      {/* Geometric Dynamic Wireframe Cage */}
      <mesh ref={wireframeRef} scale={2.1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#C084FC"
          wireframe
          transparent
          opacity={0.35}
          emissive="#A855F7"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Glassmorphic Outer Gloss Bubble */}
      <mesh ref={bubbleRef} scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#A855F7"
          transmission={0.9}
          opacity={0.3}
          transparent
          roughness={0.05}
          ior={1.5}
          thickness={0.5}
          specularIntensity={1}
          specularColor="#FFFFFF"
        />
      </mesh>
    </group>
  );
};

// 2. Gyroscopic Multi-Axis Line-Art Rings with Touch-Interactive Satellites
const GyroscopicRings: React.FC<MousePosProps> = ({ mousePos }) => {
  const group1Ref = useRef<THREE.Group>(null);
  const group2Ref = useRef<THREE.Group>(null);
  const group3Ref = useRef<THREE.Group>(null);
  const node1Ref = useRef<THREE.Mesh>(null);
  const node2Ref = useRef<THREE.Mesh>(null);
  const node3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (group1Ref.current) {
      group1Ref.current.rotation.z += delta * 0.22 + mousePos.x * 0.01;
      group1Ref.current.rotation.y += delta * 0.18;
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.z -= delta * 0.28 - mousePos.y * 0.01;
      group2Ref.current.rotation.x += delta * 0.2;
    }
    if (group3Ref.current) {
      group3Ref.current.rotation.x -= delta * 0.15;
      group3Ref.current.rotation.y += delta * 0.25;
    }

    // Satellite nodes pathing along torus radius
    if (node1Ref.current) {
      const radius = 2.9;
      node1Ref.current.position.x = Math.cos(time * 1.3) * radius;
      node1Ref.current.position.y = Math.sin(time * 1.3) * radius;
    }
    if (node2Ref.current) {
      const radius = 3.45;
      node2Ref.current.position.x = Math.cos(-time * 1.0) * radius;
      node2Ref.current.position.z = Math.sin(-time * 1.0) * radius;
    }
    if (node3Ref.current) {
      const radius = 4.0;
      node3Ref.current.position.y = Math.cos(time * 0.8) * radius;
      node3Ref.current.position.z = Math.sin(time * 0.8) * radius;
    }
  });

  return (
    <group>
      {/* Ring 1 - Metallic Violet */}
      <group ref={group1Ref}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.9, 0.03, 16, 120]} />
          <meshStandardMaterial
            color="#E9D5FF"
            metalness={0.95}
            roughness={0.08}
            emissive="#C084FC"
            emissiveIntensity={0.7}
          />
        </mesh>
        <mesh ref={node1Ref}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#F43F5E"
            emissiveIntensity={1.5}
          />
        </mesh>
      </group>

      {/* Ring 2 - Deep Cyber Blue Glow */}
      <group ref={group2Ref}>
        <mesh rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
          <torusGeometry args={[3.45, 0.025, 16, 120]} />
          <meshStandardMaterial
            color="#A855F7"
            metalness={0.9}
            roughness={0.1}
            emissive="#7E22CE"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh ref={node2Ref}>
          <sphereGeometry args={[0.085, 16, 16]} />
          <meshStandardMaterial
            color="#E0E7FF"
            emissive="#38BDF8"
            emissiveIntensity={1.5}
          />
        </mesh>
      </group>

      {/* Ring 3 - Glowing Outer Accent Ring */}
      <group ref={group3Ref}>
        <mesh rotation={[Math.PI / 6, -Math.PI / 3, Math.PI / 4]}>
          <torusGeometry args={[4.0, 0.02, 16, 120]} />
          <meshStandardMaterial
            color="#DDD6FE"
            metalness={0.95}
            roughness={0.05}
            emissive="#8B5CF6"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh ref={node3Ref}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#A855F7"
            emissiveIntensity={1.8}
          />
        </mesh>
      </group>
    </group>
  );
};

// 3. Touch-Interactive Glassmorphic Floating Bubbles
const GlassmorphicBubbles: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const groupRef = useRef<THREE.Group>(null);

  const bubbleData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3.2 + (i % 4) * 0.6;
      const scale = 0.25 + (i % 3) * 0.15;
      return {
        pos: [
          Math.cos(angle) * radius,
          (Math.sin(i * 1.2) - 0.5) * 3.0,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale,
        speed: 1.5 + (i % 3) * 0.5,
      };
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15 + mousePos.x * 0.005;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePos.y * 0.1,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {bubbleData.map((b, idx) => (
        <Float key={idx} speed={b.speed} rotationIntensity={1.2} floatIntensity={1.5}>
          <mesh position={b.pos} scale={b.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhysicalMaterial
              color="#D8B4FE"
              transmission={0.85}
              opacity={0.6}
              transparent
              roughness={0.1}
              ior={1.4}
              reflectivity={0.9}
              emissive="#A855F7"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// 4. Interactive Particle Universe
const ParticleUniverse: React.FC<MousePosProps> = ({ mousePos }) => {
  const count = 450;
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
      new THREE.Color('#C084FC'),
    ];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.2 + Math.random() * 9.5;
      const y = (Math.random() - 0.5) * 14;

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
      pointsRef.current.rotation.y += delta * 0.06;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        mousePos.y * 0.2,
        0.04
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        -mousePos.x * 0.2,
        0.04
      );

      const positionAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        const currentY = originalY[i];
        positionAttr.setY(i, currentY + Math.sin(time * 1.8 + i) * 0.2);
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
        size={0.075}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// 5. Lighting Setup
const DynamicLighting: React.FC = () => {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (lightRef.current) {
      lightRef.current.intensity = 2.2 + Math.sin(time * 2.5) * 0.6;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[6, 6, 6]} intensity={2.0} color="#E9D5FF" />
      <pointLight ref={lightRef} position={[-5, -5, -4]} intensity={2.5} color="#A855F7" />
      <pointLight position={[0, 4, 3]} intensity={1.8} color="#38BDF8" />
      <pointLight position={[0, -4, 2]} intensity={1.5} color="#EC4899" />
    </>
  );
};

// Main Canvas Export
export const Hero3DCanvas: React.FC<MousePosProps> = ({ mousePos }) => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <DynamicLighting />
        <CentralCore mousePos={mousePos} />
        <GyroscopicRings mousePos={mousePos} />
        <GlassmorphicBubbles mousePos={mousePos} />
        <ParticleUniverse mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
