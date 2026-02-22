"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Color, MathUtils, AdditiveBlending } from "three";

const Particles = ({ count = 2000 }) => {
    const mesh = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const tempColor = new Color();

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

            tempColor.setHSL(0.95 + Math.random() * 0.05, 0.8, 0.5);
            colors[i * 3] = tempColor.r;
            colors[i * 3 + 1] = tempColor.g;
            colors[i * 3 + 2] = tempColor.b;
        }

        return { positions, colors };
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.y += 0.0005;
        mesh.current.rotation.x += 0.0002;

        mesh.current.position.x = MathUtils.lerp(mesh.current.position.x, state.mouse.x * 0.1, 0.05);
        mesh.current.position.y = MathUtils.lerp(mesh.current.position.y, state.mouse.y * 0.1, 0.05);
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                    args={[particles.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                    args={[particles.colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                vertexColors
                transparent
                opacity={0.2}
                sizeAttenuation
                blending={AdditiveBlending}
            />
        </points>
    );
};

export const ThreeBackground = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-20 pointer-events-none opacity-50">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: false, alpha: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>
        </div>
    );
};
