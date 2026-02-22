"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "./Magnetic";

export const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Mouse tilt values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <section
            ref={containerRef}
            id="home"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-[110vh] flex items-center justify-center pt-24 pb-12 overflow-hidden mesh-gradient bg-grid cursor-default"
        >

            {/* Ambient Background Elements - Dramatically Intensified */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

                {/* Random Sparkly Dots */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0.2, scale: 0.5 }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1.2, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}

                {/* Max Intensity Central Burgundy Lights */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[#8e1c2a]/40 rounded-full blur-[160px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#be185d]/30 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#fda4af]/10 rounded-full blur-[80px]" />
                <div className="absolute top-[40%] right-[10%] w-16 h-16 bg-gradient-to-br from-[#8e1c2a]/30 to-transparent rounded-full blur-xl animate-pulse" />
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Text Content Architecture - Interactive 3D Tilt */}
                    <motion.div
                        style={{
                            y,
                            opacity,
                            scale,
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        className="flex flex-col items-center"
                    >
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-12 [transform:translateZ(100px)]">
                            <motion.span
                                initial={{ y: -150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-white block mb-2 font-outfit uppercase"
                            >
                                Saniya
                            </motion.span>
                            <motion.span
                                initial={{ x: -150, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                                className="text-gradient-rose inline-block italic font-outfit uppercase"
                            >
                                Kumari.
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="max-w-2xl text-[#d1d5db] text-xl md:text-2xl font-medium leading-relaxed mb-16 opacity-90 [transform:translateZ(50px)]"
                        >
                            Full Stack Developer specializing in <span className="text-[#8e1c2a] font-bold">high-performance MERN & Next.js applications</span>. I turn complex problems into <span className="text-[#e14d85] font-bold">fluid, user-centric digital solutions.</span>
                        </motion.p>

                        <div className="flex flex-wrap items-center justify-center gap-8 [transform:translateZ(75px)]">
                            <Magnetic>
                                <motion.a
                                    href="#projects"
                                    className="btn-burgundy group flex items-center gap-4 py-7 px-14 text-[12px]"
                                >
                                    Explore Work
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                            </Magnetic>

                            <Magnetic strength={0.2}>
                                <motion.a
                                    href="https://saniya1976.github.io/resume/myresume.pdf"
                                    target="_blank"
                                    className="px-10 py-6 rounded-full font-black tracking-widest uppercase text-[11px] text-white/90 hover:text-white border border-white/20 hover:border-white/60 transition-all relative overflow-hidden group"
                                >
                                    <span className="relative z-10 font-outfit">Resume / CV</span>
                                </motion.a>
                            </Magnetic>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

