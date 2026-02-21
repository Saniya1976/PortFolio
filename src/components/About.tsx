"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code2, GraduationCap, ArrowUpRight, Target } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-16 bg-[#0f0a0d] relative overflow-hidden">

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-6xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Bio Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1a0f14] p-8 md:p-10 rounded-3xl border border-white/5 relative"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#be185d] mb-4 block">Background</span>
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6 font-outfit uppercase">
                                Education & <span className="text-gradient-burgundy">Projects.</span>
                            </h2>
                            <div className="space-y-4 text-[#9ca3af] text-sm md:text-base font-medium leading-relaxed opacity-80">
                                <p>
                                    I am a <span className="text-white font-bold">Full Stack Developer</span> currently pursuing my BCA at MSI (2024-2027), focusing on modern, scalable web applications.
                                </p>
                                <p>
                                    Maintaining academic excellence (9.55 CGPA) while building practical projects with the MERN stack and Next.js.
                                </p>
                                <p>
                                    Solved over <span className="text-white font-bold text-gradient-rose">300+ DSA problems</span>, building a solid foundation in algorithm design.
                                </p>
                            </div>
                        </motion.div>

                        {/* Minimal Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "DSA Problems", val: "300+", icon: <Code2 size={18} /> },
                                { label: "Academic Record", val: "9.55", icon: <GraduationCap size={18} /> },
                                { label: "Hackathon Won", val: "1st", icon: <Trophy size={18} /> },
                                { label: "Live Builds", val: "15+", icon: <Target size={18} /> },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-[#1a0f14] rounded-2xl border border-white/5 group hover:border-[#be185d]/30 transition-all text-center"
                                >
                                    <div className="text-[#be185d] mb-3 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-1 tracking-tighter">{stat.val}</h4>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#9ca3af]">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
