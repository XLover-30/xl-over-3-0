import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { THEME_DATA } from '../config/themeData';
import type { WorldThemeKey } from '../config/themeData';

interface LiquidParticleRibbonsProps {
  currentTheme: WorldThemeKey;
  targetProgress: number; // 0 = xlover, 1 = zoya, 2 = roohani
  mousePos: { x: number; y: number };
  quality: 'high' | 'medium' | 'low';
}

const LiquidRibbons: React.FC<LiquidParticleRibbonsProps> = ({
  targetProgress,
  mousePos,
  quality,
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Determine particle count based on quality
  const particleCount = useMemo(() => {
    switch (quality) {
      case 'low':
        return 4000;
      case 'medium':
        return 9000;
      case 'high':
      default:
        return 16000;
    }
  }, [quality]);

  // Generate procedural organic liquid ribbon and double-helix geometry
  const [positions, ribbonParams, randomSeeds] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const params = new Float32Array(particleCount * 4); // [u, v, ribbonIndex, strandOffset]
    const seeds = new Float32Array(particleCount);

    const ribbons = 5;
    const perRibbon = Math.floor(particleCount / ribbons);

    for (let i = 0; i < particleCount; i++) {
      const ribbonIdx = Math.floor(i / perRibbon) % ribbons;
      const t = (i % perRibbon) / perRibbon; // 0 to 1 along length

      const u = t * Math.PI * 4; // 2 complete loops
      const strand = (i % 2 === 0 ? 1 : -1) * (0.2 + (i % 5) * 0.1);

      // Procedural initial curves (vertical liquid ribbon flow)
      const y = (t - 0.5) * 22;
      const angle = u + (ribbonIdx * (Math.PI * 2 / ribbons));
      const radius = 3.5 + Math.sin(t * Math.PI * 3 + ribbonIdx) * 1.5;

      pos[i * 3] = Math.cos(angle) * radius + strand * 0.5;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius * 0.7;

      params[i * 4] = t;
      params[i * 4 + 1] = strand;
      params[i * 4 + 2] = ribbonIdx;
      params[i * 4 + 3] = Math.sin(i * 0.17);

      seeds[i] = Math.random();
    }

    return [pos, params, seeds];
  }, [particleCount]);

  // Custom GLSL Shader for smooth fluid displacement, touch waves, and theme morphing
  const shaderData = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColXLPri: { value: THEME_DATA.xlover.primary },
        uColXLSec: { value: THEME_DATA.xlover.secondary },
        uColZoyPri: { value: THEME_DATA.zoya.primary },
        uColZoySec: { value: THEME_DATA.zoya.accent },
        uColRooPri: { value: THEME_DATA.roohani.primary },
        uColRooSec: { value: THEME_DATA.roohani.secondary },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uProgress;
        uniform vec2 uMouse;

        attribute vec4 aParams; // [t, strand, ribbonIdx, offset]
        attribute float aSeed;

        varying vec3 vColor;
        varying float vAlpha;
        varying float vDist;

        uniform vec3 uColXLPri;
        uniform vec3 uColXLSec;
        uniform vec3 uColZoyPri;
        uniform vec3 uColZoySec;
        uniform vec3 uColRooPri;
        uniform vec3 uColRooSec;

        void main() {
          float t = aParams.x;
          float strand = aParams.y;
          float ribbonIdx = aParams.z;
          float offset = aParams.w;

          vec3 p = position;

          // Organic flowing wave oscillation (2036 liquid physics)
          float wave1 = sin(uTime * 1.2 + t * 6.28 + ribbonIdx) * 0.8;
          float wave2 = cos(uTime * 0.8 + t * 9.42 + offset) * 0.6;

          // Helix twist morphing with scroll progress
          float helixAngle = t * 12.56 + uTime * 0.5 + uProgress * 3.14159;
          float helixRadius = (2.2 + sin(uTime * 1.5 + t * 4.0) * 0.8);

          p.x += cos(helixAngle) * (strand * 1.2) + wave1;
          p.z += sin(helixAngle) * (strand * 1.2) + wave2;

          // Mouse / Touch wave displacement
          float distToMouse = length(p.xy - vec2(uMouse.x * 6.0, uMouse.y * 6.0));
          float mouseDisplacement = smoothstep(4.0, 0.0, distToMouse) * 1.5;
          p.z += sin(distToMouse * 3.0 - uTime * 4.0) * mouseDisplacement;
          p.x += (uMouse.x * 2.0) * smoothstep(5.0, 0.0, distToMouse);

          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Atmospheric point size attenuation
          float pointSize = (22.0 + sin(uTime * 2.0 + aSeed * 6.28) * 6.0) / -mvPosition.z;
          gl_PointSize = clamp(pointSize, 2.0, 48.0);

          // Color theme interpolation across uProgress (0.0 = xlover, 1.0 = zoya, 2.0 = roohani)
          vec3 col1, col2;
          if (uProgress < 1.0) {
            float blend = smoothstep(0.0, 1.0, uProgress);
            col1 = mix(uColXLPri, uColZoyPri, blend);
            col2 = mix(uColXLSec, uColZoySec, blend);
          } else {
            float blend = smoothstep(1.0, 2.0, uProgress);
            col1 = mix(uColZoyPri, uColRooPri, blend);
            col2 = mix(uColZoySec, uColRooSec, blend);
          }

          float colorFactor = sin(t * 8.0 + uTime + offset) * 0.5 + 0.5;
          vColor = mix(col1, col2, colorFactor);
          vAlpha = clamp(0.4 + sin(t * 3.1415) * 0.5 + mouseDisplacement * 0.3, 0.2, 0.95);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          // Circular particle with smooth glowing aura
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);

          if (dist > 0.5) discard;

          // Glow falloff
          float strength = 1.0 - smoothstep(0.0, 0.5, dist);
          strength = pow(strength, 1.6);

          gl_FragColor = vec4(vColor * 1.3, strength * vAlpha);
        }
      `,
    };
  }, []);

  const currentProgress = useRef(targetProgress);

  useFrame((state, delta) => {
    if (materialRef.current) {
      // Smoothly interpolate progress toward targetProgress
      currentProgress.current = THREE.MathUtils.lerp(
        currentProgress.current,
        targetProgress,
        delta * 3.0
      );

      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uProgress.value = currentProgress.current;

      // Smooth mouse tracking
      const targetMouse = materialRef.current.uniforms.uMouse.value as THREE.Vector2;
      targetMouse.x = THREE.MathUtils.lerp(targetMouse.x, mousePos.x, delta * 4.0);
      targetMouse.y = THREE.MathUtils.lerp(targetMouse.y, mousePos.y, delta * 4.0);
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aParams" args={[ribbonParams, 4]} />
        <bufferAttribute attach="attributes-aSeed" args={[randomSeeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={shaderData.uniforms}
        vertexShader={shaderData.vertexShader}
        fragmentShader={shaderData.fragmentShader}
      />
    </points>
  );
};

// 3D Orbital Floating TXT Icon Logo
export const OrbitalBrandLogo: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return loader.load('/TXT icon.png');
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(time * 1.5) * 0.15;
      meshRef.current.rotation.y = Math.sin(time * 0.8) * 0.15 + mousePos.x * 0.2;
      meshRef.current.rotation.x = mousePos.y * -0.15;
    }
  });

  return (
    <group ref={meshRef} position={[0, 2.5, 0]}>
      <mesh>
        <planeGeometry args={[3.2, 1.2]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Main Export Component with Camera, Lighting, and Canvas
interface LiquidParticleCanvasProps {
  currentTheme: WorldThemeKey;
  targetProgress: number;
  mousePos: { x: number; y: number };
  quality?: 'high' | 'medium' | 'low';
  showOrbitalLogo?: boolean;
}

export const LiquidParticleCanvas: React.FC<LiquidParticleCanvasProps> = ({
  currentTheme,
  targetProgress,
  mousePos,
  quality = 'high',
  showOrbitalLogo = false,
}) => {
  // Graceful fallback for reduced motion / WebGL support
  const [hasWebGL, setHasWebGL] = React.useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setHasWebGL(Boolean(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#05030B] via-[#10061F] to-[#05030B] pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{
          antialias: quality !== 'low',
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.5} />
        <LiquidRibbons
          currentTheme={currentTheme}
          targetProgress={targetProgress}
          mousePos={mousePos}
          quality={quality}
        />
        {showOrbitalLogo && <OrbitalBrandLogo mousePos={mousePos} />}
      </Canvas>
    </div>
  );
};
