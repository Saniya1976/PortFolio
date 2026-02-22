"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence, MotionValue } from "framer-motion";

export const CustomCursor = () => {
    const [cursorType, setCursorType] = useState("default");
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"]')) {
                setCursorType("pointer");
                setIsHovering(true);
            } else if (target.closest('h1, h2, h3, p')) {
                setCursorType("text");
                setIsHovering(true);
            } else if (target.closest('img, .project-card')) {
                setCursorType("image");
                setIsHovering(true);
            } else {
                setCursorType("default");
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    const variants = {
        default: {
            width: 20,
            height: 20,
            backgroundColor: "transparent",
            border: "1px solid rgba(190, 24, 93, 0.5)",
        },
        pointer: {
            width: 60,
            height: 60,
            backgroundColor: "rgba(190, 24, 93, 0.2)",
            border: "1px solid rgba(253, 164, 175, 0.8)",
            scale: 1.2,
        },
        text: {
            width: 10,
            height: 40,
            backgroundColor: "#fda4af",
            borderRadius: "4px",
            border: "none",
        },
        image: {
            width: 100,
            height: 100,
            backgroundColor: "rgba(190, 24, 93, 0.1)",
            border: "2px solid #fda4af",
            mixBlendMode: "difference" as const,
            content: "'VIEW'",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            fontWeight: "bold",
            letterSpacing: "0.2em",
            color: "white"
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <motion.div
                className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={variants}
                animate={cursorType}
                transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
            >
                {cursorType === "image" && (
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#fda4af]">Explore</span>
                )}
            </motion.div>

            {/* Dot Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#fda4af] rounded-full pointer-events-none"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Trail Particles */}
            <AnimatePresence>
                {isHovering && (
                    <Trail mouseX={mouseX} mouseY={mouseY} />
                )}
            </AnimatePresence>
        </div>
    );
};

const Trail = ({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) => {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles((prev) => [
                ...prev.slice(-15),
                { id: Date.now(), x: mouseX.get(), y: mouseY.get() }
            ]);
        }, 50);
        return () => clearInterval(interval);
    }, [mouseX, mouseY]);

    return (
        <>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 0, opacity: 0 }}
                    className="fixed top-0 left-0 w-1 h-1 bg-gradient-to-r from-[#be185d] to-[#fda4af] rounded-full"
                    style={{
                        x: p.x,
                        y: p.y,
                        translateX: "-50%",
                        translateY: "-50%",
                        left: 0,
                        top: 0
                    }}
                />
            ))}
        </>
    );
};
