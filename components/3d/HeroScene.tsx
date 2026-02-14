import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const CoreGeometry = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2.5, 1]} />
                <meshBasicMaterial
                    color="#3b82f6"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>
            {/* Inner core */}
            <mesh>
                <icosahedronGeometry args={[1, 0]} />
                <meshBasicMaterial color="#f97316" wireframe transparent opacity={0.3} />
            </mesh>
        </group>
    );
};

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0 bg-secondary-950">
            <Canvas className="w-full h-full" camera={{ position: [0, 0, 8], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />

                    {/* Neural Network Particles */}
                    <Sparkles
                        count={400}
                        scale={12}
                        size={2}
                        speed={0.4}
                        opacity={0.7}
                        color="#ff8e3c" // Orange
                    />
                    <Sparkles
                        count={300}
                        scale={15}
                        size={3}
                        speed={0.3}
                        opacity={0.5}
                        color="#3b82f6" // Blue
                    />

                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <CoreGeometry />
                    </Float>

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        enablePan={false}
                    />
                </Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-950/20 to-secondary-950 pointer-events-none"></div>
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] pointer-events-none opacity-80"></div>
        </div>
    );
};

export default HeroScene;
