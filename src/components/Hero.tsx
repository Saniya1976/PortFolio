"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0f0a0d]">

            {/* Ambient System */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6d0f1b]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#be185d]/5 blur-[120px] rounded-full" />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 25, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-[10%] right-[-5%] w-[700px] h-[700px] bg-[#be185d]/5 rounded-full blur-[150px]"
                />
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Text Content Architecture */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-10 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                            <div className="w-2 h-2 rounded-full bg-[#fda4af] animate-pulse shadow-[0_0_10px_#fda4af]" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#9ca3af]">Available for Opportunities</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
                            <span className="text-white block mb-2 drop-shadow-2xl font-outfit uppercase">Saniya</span>
                            <span className="text-gradient-rose inline-block italic font-outfit uppercase">Kumari.</span>
                        </h1>

                        <p className="max-w-xl text-[#d1d5db] text-lg md:text-xl font-medium leading-relaxed mb-16 opacity-80">
                            I build <span className="text-[#fda4af] font-bold">user-friendly web applications</span> using the MERN stack and Next.js. I love turning complex problems into simple, functional code.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-burgundy group flex items-center gap-4 py-5 px-10 text-[11px] bg-gradient-to-r from-[#be185d] to-[#fda4af]"
                            >
                                Explorer Work
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="https://saniya1976.github.io/resume/myresume.pdf"
                                target="_blank"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-5 rounded-full font-black tracking-widest uppercase text-[10px] text-white/50 hover:text-white border border-white/10 hover:border-[#fda4af]/30 transition-all backdrop-blur-sm"
                            >
                                Resume / CV
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Portrait Architecture Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-5 relative order-1 lg:order-2"
                    >
                        <div className="relative aspect-[4/5] max-w-[450px] mx-auto group">
                            {/* Visual Frame */}
                            <div className="absolute inset-0 bg-[#1a0f14] rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl transition-all duration-700 group-hover:border-[#fda4af]/30 group-hover:shadow-[0_0_60px_rgba(251,113,133,0.15)]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#be185d]/20 via-transparent to-transparent z-10" />

                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fda4af_1px,transparent_1px)] [background-size:20px_20px]" />

                                {/* User Photo Container */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src="/portfolio-image.jpeg"
                                        alt="Saniya Kumari"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority
                                    />
                                </div>

                                {/* Interactive Overlay Badge */}
                                <div className="absolute bottom-8 left-8 right-8 p-6 glass-rose rounded-3xl border border-white/5 backdrop-blur-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#be185d] to-[#fda4af] flex items-center justify-center shadow-lg flex-shrink-0">
                                            <MousePointer2 size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white">Full Stack Developer</p>
                                            <p className="text-[8px] font-bold uppercase tracking-widest text-[#fda4af]">Turning Ideas Into Code</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Outer Decorative Rings */}
                            <div className="absolute -z-10 -top-10 -right-10 w-full h-full rounded-[4rem] border-2 border-[#fda4af]/10 animate-pulse" />
                            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full rounded-[4rem] border-2 border-[#be185d]/10 animate-pulse delay-500" />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Hero Footnotes / Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:flex flex-col items-center gap-4"
            >
                <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white">Slide to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
};
