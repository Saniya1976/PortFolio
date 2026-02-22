"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code2, GraduationCap, Target } from "lucide-react";
import { CountUp } from "./CountUp";
import { TiltCard } from "./TiltCard";

export const About = () => {
    return (
        <section id="about" className="py-12 bg-transparent relative overflow-hidden ">

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-6xl mx-auto">

                    <div className="grid lg:grid-cols-12 gap-4 items-stretch">
                        {/* Bio Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-[#8e1c2a]/50 relative flex flex-col justify-center shadow-[0_0_15px_rgba(142,28,42,0.1)] hover:border-[#8e1c2a]/80 transition-colors duration-500"
                        >
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#8e1c2a] mb-4 block">Background</span>
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6 font-outfit uppercase leading-none">
                                Education & <span className="text-gradient-rose">Projects.</span>
                            </h2>
                            <div className="space-y-4 text-[#9ca3af] text-sm md:text-base font-medium leading-relaxed">
                                <p>
                                    I am a <span className="text-white font-bold">Full Stack Developer</span> pursuing BCA at MSI (2024-2027), focusing on modern, scalable web applications.
                                </p>
                                <p>
                                    Maintaining academic excellence (9.55 CGPA) while building practical projects with the MERN stack and Next.js.
                                </p>
                                <p>
                                    Solved over <span className="text-[#8e1c2a] font-bold">300+ DSA problems</span>, building a solid foundation in algorithm design.
                                </p>
                            </div>
                        </motion.div>

                        {/* Minimal Stats */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                            {[
                                { label: "DSA Problems", val: "300+", icon: <Code2 size={18} /> },
                                { label: "Academic Record", val: "9.55", icon: <GraduationCap size={18} /> },
                                { label: "Hackathon Won", val: "1st", icon: <Trophy size={18} /> },
                                { label: "Live Builds", val: "10+", icon: <Target size={18} /> },
                            ].map((stat, i) => (
                                <TiltCard key={stat.label}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="h-full p-6 bg-white/5 backdrop-blur-sm rounded-[1.5rem] border border-[#8e1c2a]/50 group hover:border-[#8e1c2a] transition-all text-center flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-[#8e1c2a]/10"
                                    >
                                        <div className="text-[#8e1c2a] opacity-90 group-hover:opacity-100 transition-opacity">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                                                <CountUp to={stat.val} delay={i * 0.2} />
                                            </h4>
                                            <p className="text-[8px] font-black uppercase tracking-widest text-[#9ca3af] mt-1">{stat.label}</p>
                                        </div>
                                    </motion.div>
                                </TiltCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
