import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

// Boeing 787-style fuselage
const AircraftFuselage = ({ position, rotation, scale = 1 }: { position: [number, number, number]; rotation: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 + rotation[1];
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* Main fuselage body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.3, 4, 16, 32]} />
        <meshStandardMaterial
          color="#1a3a5c"
          metalness={0.9}
          roughness={0.2}
          emissive="#003366"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Cockpit window glow */}
      <mesh position={[0, 0.15, 2.2]}>
        <sphereGeometry args={[0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Wings */}
      <mesh position={[0, -0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 3.5, 0.8]} />
        <meshStandardMaterial
          color="#0d2840"
          metalness={0.95}
          roughness={0.1}
          emissive="#001a33"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Wing tips with lights */}
      <mesh position={[1.75, -0.1, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#ff3333"
          emissive="#ff0000"
          emissiveIntensity={2}
        />
      </mesh>
      <mesh position={[-1.75, -0.1, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#33ff33"
          emissive="#00ff00"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Engines */}
      <mesh position={[0.8, -0.2, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.12, 0.6, 16]} />
        <meshStandardMaterial
          color="#1a3a5c"
          metalness={0.95}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[-0.8, -0.2, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.12, 0.6, 16]} />
        <meshStandardMaterial
          color="#1a3a5c"
          metalness={0.95}
          roughness={0.1}
        />
      </mesh>

      {/* Engine glow */}
      <mesh position={[0.8, -0.2, -0.65]}>
        <circleGeometry args={[0.12, 16]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh position={[-0.8, -0.2, -0.65]}>
        <circleGeometry args={[0.12, 16]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.4, -2]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.8, 0.5]} />
        <meshStandardMaterial
          color="#0d2840"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Horizontal stabilizers */}
      <mesh position={[0, 0.1, -2]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.03, 1.2, 0.4]} />
        <meshStandardMaterial
          color="#0d2840"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};

// Circuit board / PCB element
const CircuitBoard = ({ position, rotation, scale = 1 }: { position: [number, number, number]; rotation: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {/* Main PCB */}
        <mesh>
          <boxGeometry args={[1.5, 0.05, 1]} />
          <meshStandardMaterial
            color="#0a3d0a"
            metalness={0.3}
            roughness={0.6}
          />
        </mesh>
        
        {/* CPU chip */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.3, 0.08, 0.3]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Traces - glowing lines */}
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[(i - 2) * 0.25, 0.03, 0.3]}>
            <boxGeometry args={[0.02, 0.01, 0.3]} />
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}

        {/* Components */}
        {[...Array(6)].map((_, i) => (
          <mesh key={`cap-${i}`} position={[(i % 3 - 1) * 0.4, 0.08, (Math.floor(i / 3) - 0.5) * 0.3]}>
            <cylinderGeometry args={[0.04, 0.04, 0.1, 8]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#333333" : "#4a4a4a"}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

// Microchip / Processor
const Microchip = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Main chip body */}
        <mesh>
          <boxGeometry args={[0.5, 0.1, 0.5]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Die / core with glow */}
        <mesh position={[0, 0.06, 0]}>
          <boxGeometry args={[0.25, 0.02, 0.25]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Pins */}
        {[...Array(8)].map((_, i) => (
          <mesh key={`pin-left-${i}`} position={[-0.35, 0, (i - 3.5) * 0.06]}>
            <boxGeometry args={[0.15, 0.02, 0.03]} />
            <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.2} />
          </mesh>
        ))}
        {[...Array(8)].map((_, i) => (
          <mesh key={`pin-right-${i}`} position={[0.35, 0, (i - 3.5) * 0.06]}>
            <boxGeometry args={[0.15, 0.02, 0.03]} />
            <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.2} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

// Glowing data sphere
const GlowingSphere = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

// Data stream particles
const DataParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 800;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Grid floor with aerospace feel
const GridFloor = () => {
  return (
    <gridHelper
      args={[40, 40, '#00d4ff', '#0a2a3a']}
      position={[0, -4, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const SpaceScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 12], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Ambient and directional lighting */}
          <ambientLight intensity={0.15} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#3b82f6" />
          <spotLight
            position={[0, 15, 0]}
            angle={0.4}
            penumbra={1}
            intensity={0.8}
            color="#00d4ff"
          />
          <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />

          {/* Stars background */}
          <Stars
            radius={60}
            depth={60}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />

          {/* Main Boeing 787-style aircraft */}
          <AircraftFuselage 
            position={[3, 1, -3]} 
            rotation={[0.1, -0.8, 0.05]} 
            scale={1.2} 
          />
          
          {/* Smaller aircraft in background */}
          <AircraftFuselage 
            position={[-5, 3, -8]} 
            rotation={[0, 0.5, 0.1]} 
            scale={0.6} 
          />

          {/* Circuit boards / embedded hardware */}
          <CircuitBoard 
            position={[-4, -1, -2]} 
            rotation={[0.3, 0.5, 0]} 
            scale={0.8} 
          />
          <CircuitBoard 
            position={[4, -2, -4]} 
            rotation={[-0.2, -0.3, 0.1]} 
            scale={0.5} 
          />

          {/* Microchips */}
          <Microchip position={[-2, 2, -3]} scale={1.2} />
          <Microchip position={[5, 0, -5]} scale={0.8} />
          <Microchip position={[-5, -2, -6]} scale={0.6} />

          {/* Glowing data spheres */}
          <GlowingSphere position={[2, 3, -4]} color="#00d4ff" scale={0.4} />
          <GlowingSphere position={[-3, 1, -5]} color="#3b82f6" scale={0.3} />

          {/* Data particles */}
          <DataParticles />
          
          {/* Grid floor */}
          <GridFloor />

          {/* Camera controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceScene;
