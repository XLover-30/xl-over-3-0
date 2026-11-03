import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/useTheme';

// Advanced GLSL Vertex Shader for Organic 3D Liquid Particle Formations & Luminous Ribbons
const particleVertexShader = `
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform float uMorph;
  uniform float uDpr;

  attribute float aScale;
  attribute float aPhase;
  attribute float aLayer;
  attribute float aSpeed;

  varying vec3 vColor;
  varying float vAlpha;
  varying float vDist;

  // Optimized Simplex 3D noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Identity Color Uniforms
  uniform vec3 uColorTheme1Primary;    // #8B35FF Electric Purple
  uniform vec3 uColorTheme1Secondary;  // #B66BFF Neon Violet
  uniform vec3 uColorTheme1Accent;     // #246BFF Electric Blue
  uniform vec3 uColorTheme1Highlight;  // #65C7FF Ice Blue

  uniform vec3 uColorTheme2Primary;    // #087A50 Emerald
  uniform vec3 uColorTheme2Secondary;  // #16B978 Bright Green
  uniform vec3 uColorTheme2Accent;     // #C8A45D Champagne Gold
  uniform vec3 uColorTheme2Highlight;  // #E4CA8A Soft Gold

  uniform vec3 uColorTheme3Primary;    // #FF2D96 Hot Pink
  uniform vec3 uColorTheme3Secondary;  // #FF55B7 Neon Pink
  uniform vec3 uColorTheme3Accent;     // #C52B91 Magenta
  uniform vec3 uColorTheme3Highlight;  // #F08BC6 Rose

  void main() {
    vec3 pos = position;
    float t = uTime * (0.35 * aSpeed);

    // Dynamic Twisted Ribbons & Double Helix Formations
    float ribbonAngle = pos.y * 0.45 + aPhase + t * 0.7;
    float ribbonRadius = 4.2 + sin(pos.y * 0.35 + t) * 2.0;

    // Formation 1: Electric Fluid Vortex (XL OVER 3.0)
    vec3 shape0 = vec3(
      cos(ribbonAngle) * ribbonRadius + sin(pos.z * 0.3 + t * 0.8) * 1.8,
      pos.y + sin(pos.x * 0.4 + t * 0.6) * 1.5,
      sin(ribbonAngle) * ribbonRadius + cos(pos.x * 0.3 + t * 0.7) * 2.0
    );

    // Formation 2: Flowing Emerald Waves (ZOYA NOOR)
    float waveX = pos.x * 0.35 + t * 0.5;
    vec3 shape1 = vec3(
      pos.x + sin(pos.y * 0.5 + t) * 2.5,
      pos.y + cos(waveX) * 2.5 + sin(pos.z * 0.4 + t) * 1.5,
      pos.z + sin(waveX * 1.2) * (ribbonRadius * 0.9)
    );

    // Formation 3: Dynamic Pulsing Sphere & Rings (ROOHANI NOORANI)
    float ringAngle = pos.y * 0.8 + aPhase * 2.0 + t;
    float ringR = 5.0 + sin(pos.y * 0.6 + t * 1.5) * 2.2;
    vec3 shape2 = vec3(
      cos(ringAngle) * ringR + sin(pos.z * 0.5 + t) * 1.4,
      pos.y + sin(ringAngle * 2.0 + t) * 2.0,
      sin(ringAngle) * ringR + cos(pos.x * 0.5 + t) * 1.4
    );

    // Continuous morph between the 3 formations based on uMorph
    vec3 morphedPos;
    if (uMorph < 1.0) {
      morphedPos = mix(shape0, shape1, smoothstep(0.0, 1.0, uMorph));
    } else {
      morphedPos = mix(shape1, shape2, smoothstep(1.0, 2.0, uMorph));
    }

    // Organic 3D Simplex noise turbulence
    float noise = snoise(morphedPos * 0.16 + vec3(0.0, t * 0.25, 0.0));
    morphedPos += normalize(morphedPos + vec3(0.001)) * (noise * 1.6);

    // Touch and mouse magnetic interaction & repulsion ripple
    vec2 screenPos = vec2(morphedPos.x, morphedPos.y);
    vec2 mouseDelta = screenPos - uMouse * 8.5;
    float distToMouse = length(mouseDelta);
    float mouseRepel = smoothstep(6.0, 0.0, distToMouse);
    morphedPos.xy += normalize(mouseDelta + vec2(0.001)) * (mouseRepel * 3.2);

    // Scroll reactive depth movement
    morphedPos.y -= (uScroll - 0.5) * 16.0;

    vec4 mvPosition = modelViewMatrix * vec4(morphedPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Point size calculation with distance attenuation & DPR
    float sizeFactor = (aScale * 42.0 * uDpr) / -mvPosition.z;
    gl_PointSize = clamp(sizeFactor, 1.5, 48.0);

    // Seamless Color Blending across palettes
    float colorT = sin(pos.y * 0.3 + pos.x * 0.2 + t) * 0.5 + 0.5;
    vec3 cTheme1 = mix(
      mix(uColorTheme1Primary, uColorTheme1Secondary, colorT),
      mix(uColorTheme1Accent, uColorTheme1Highlight, colorT),
      sin(pos.z * 0.25 + t * 0.5) * 0.5 + 0.5
    );

    vec3 cTheme2 = mix(
      mix(uColorTheme2Primary, uColorTheme2Secondary, colorT),
      mix(uColorTheme2Accent, uColorTheme2Highlight, colorT),
      sin(pos.z * 0.25 + t * 0.5) * 0.5 + 0.5
    );

    vec3 cTheme3 = mix(
      mix(uColorTheme3Primary, uColorTheme3Secondary, colorT),
      mix(uColorTheme3Accent, uColorTheme3Highlight, colorT),
      sin(pos.z * 0.25 + t * 0.5) * 0.5 + 0.5
    );

    vec3 finalColor;
    if (uMorph < 1.0) {
      finalColor = mix(cTheme1, cTheme2, smoothstep(0.0, 1.0, uMorph));
    } else {
      finalColor = mix(cTheme2, cTheme3, smoothstep(1.0, 2.0, uMorph));
    }

    // Multiple particle depth layers boost
    if (aLayer > 1.5) {
      finalColor += vec3(0.2, 0.2, 0.25);
    }

    vColor = finalColor;
    vDist = -mvPosition.z;
    vAlpha = clamp(1.0 - (vDist / 45.0), 0.2, 0.98);
  }
`;

// GLSL Fragment Shader for Luminous Soft Radial Particle Glow
const particleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    float strength = 1.0 - (dist * 2.0);
    strength = pow(strength, 1.7);

    vec3 glow = vColor + vec3(0.35) * pow(strength, 3.0);
    gl_FragColor = vec4(glow, strength * vAlpha);
  }
`;

function seededRandom(seed: number): number {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function createParticleBuffers(count: number) {
  const pos = new Float32Array(count * 3);
  const sc = new Float32Array(count);
  const phase = new Float32Array(count);
  const lay = new Float32Array(count);
  const spd = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const layer = i % 3;
    const t = (i / count) * Math.PI * 22;
    const r1 = seededRandom(i * 4 + 1);
    const r2 = seededRandom(i * 4 + 2);
    const r3 = seededRandom(i * 4 + 3);
    const r4 = seededRandom(i * 4 + 4);

    const spreadX = (Math.sin(t * 0.7) + (r1 - 0.5) * 2.0) * 8.5;
    const spreadY = (i / count - 0.5) * 44.0;
    const spreadZ = (Math.cos(t * 0.5) + (r2 - 0.5) * 2.0) * 8.0;

    pos[i * 3 + 0] = spreadX;
    pos[i * 3 + 1] = spreadY;
    pos[i * 3 + 2] = spreadZ;

    sc[i] = r3 * 0.75 + 0.35;
    phase[i] = (i % 2 === 0 ? 0 : Math.PI) + (r1 - 0.5) * 0.5;
    lay[i] = layer;
    spd[i] = 0.8 + r4 * 0.4;
  }
  return { pos, sc, phase, lay, spd };
}

interface ParticlesMeshProps {
  particleCount: number;
}

const ParticlesMesh: React.FC<ParticlesMeshProps> = ({ particleCount }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { activeWorld, scrollProgress } = useTheme();
  const { viewport } = useThree();

  const mouseTarget = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const targetMorph = useRef<number>(0);
  const currentMorph = useRef<number>(0);

  useEffect(() => {
    if (activeWorld === 'xl-over-3-0') targetMorph.current = 0.0;
    else if (activeWorld === 'zoya-noor') targetMorph.current = 1.0;
    else if (activeWorld === 'roohani-noorani') targetMorph.current = 2.0;
  }, [activeWorld]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseTarget.current.x = x * (viewport.width / 2);
      mouseTarget.current.y = y * (viewport.height / 2);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth) * 2 - 1;
        const y = -(touch.clientY / window.innerHeight) * 2 + 1;
        mouseTarget.current.x = x * (viewport.width / 2);
        mouseTarget.current.y = y * (viewport.height / 2);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [viewport.width, viewport.height]);

  const { pos, sc, phase, lay, spd } = useMemo(() => createParticleBuffers(particleCount), [particleCount]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uMorph: { value: 0 },
      uDpr: { value: Math.min(window.devicePixelRatio || 1, 2) },
      // XL OVER 3.0
      uColorTheme1Primary: { value: new THREE.Color('#8B35FF') },
      uColorTheme1Secondary: { value: new THREE.Color('#B66BFF') },
      uColorTheme1Accent: { value: new THREE.Color('#246BFF') },
      uColorTheme1Highlight: { value: new THREE.Color('#65C7FF') },
      // ZOYA NOOR
      uColorTheme2Primary: { value: new THREE.Color('#087A50') },
      uColorTheme2Secondary: { value: new THREE.Color('#16B978') },
      uColorTheme2Accent: { value: new THREE.Color('#C8A45D') },
      uColorTheme2Highlight: { value: new THREE.Color('#E4CA8A') },
      // ROOHANI NOORANI
      uColorTheme3Primary: { value: new THREE.Color('#FF2D96') },
      uColorTheme3Secondary: { value: new THREE.Color('#FF55B7') },
      uColorTheme3Accent: { value: new THREE.Color('#C52B91') },
      uColorTheme3Highlight: { value: new THREE.Color('#F08BC6') },
    }),
    []
  );

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const mat = pointsRef.current.material as THREE.ShaderMaterial;

    const dt = Math.min(delta, 0.08);
    mat.uniforms.uTime.value += dt;
    mat.uniforms.uScroll.value = scrollProgress;

    currentMouse.current.x += (mouseTarget.current.x - currentMouse.current.x) * 0.08;
    currentMouse.current.y += (mouseTarget.current.y - currentMouse.current.y) * 0.08;
    mat.uniforms.uMouse.value.set(currentMouse.current.x, currentMouse.current.y);

    currentMorph.current += (targetMorph.current - currentMorph.current) * 0.045;
    mat.uniforms.uMorph.value = currentMorph.current;

    pointsRef.current.rotation.y += dt * 0.035;
    pointsRef.current.rotation.x = Math.sin(mat.uniforms.uTime.value * 0.18) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[sc, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phase, 1]} />
        <bufferAttribute attach="attributes-aLayer" args={[lay, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[spd, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const LiquidParticleCanvas: React.FC = () => {
  const { quality, reducedMotion, activeWorld } = useTheme();

  // Optimized particle count based on quality setting & mobile checks
  const count = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (quality === 'low') return isMobile ? 2200 : 3500;
    if (quality === 'medium') return isMobile ? 4500 : 7000;
    return isMobile ? 8000 : 13000;
  }, [quality]);

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-colors duration-1000 ease-out"
        style={{
          background:
            activeWorld === 'xl-over-3-0'
              ? 'radial-gradient(ellipse at 50% 40%, rgba(139, 53, 255, 0.22) 0%, rgba(5, 3, 11, 0.96) 80%)'
              : activeWorld === 'zoya-noor'
              ? 'radial-gradient(ellipse at 50% 40%, rgba(8, 122, 80, 0.22) 0%, rgba(5, 11, 8, 0.96) 80%)'
              : 'radial-gradient(ellipse at 50% 40%, rgba(255, 45, 150, 0.22) 0%, rgba(9, 3, 9, 0.96) 80%)',
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
        gl={{
          antialias: quality === 'high',
          powerPreference: 'high-performance',
          alpha: true,
        }}
      >
        <ambientLight intensity={0.4} />
        <ParticlesMesh particleCount={count} />
      </Canvas>
    </div>
  );
};

export default LiquidParticleCanvas;
