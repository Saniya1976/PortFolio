"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle2, Trophy, Code2 } from "lucide-react";

const milestones = [
    {
        title: "Hackathon Winner",
        org: "Maharaja Surajmal Institute",
        desc: "Won 1st place in the Ctrl+Alt+Vibe Hackathon by building a full-featured web application within 24 hours. Managed both frontend and backend development in a high-pressure environment.",
        year: "2025",
        icon: <Trophy size={20} />,
        status: "1st Place"
    },
    {
        title: "Full Stack Development",
        org: "Project Implementation",
        desc: "Developed high-quality web applications using the MERN stack and Next.js. Focused on creating responsive user interfaces and robust backend services with modern best practices.",
        year: "2024",
        icon: <Briefcase size={20} />,
        status: "Featured Projects"
    },
    {
        title: "Problem Solving",
        org: "LeetCode & GFG",
        desc: "Solved 300+ data structures and algorithms problems. Developed a strong foundation in competitive programming and efficient logic implementation.",
        year: "2023 - 2024",
        icon: <Code2 size={20} />,
        status: "300+ Solved"
    },
    {
        title: "BCA Student",
        org: "Maharaja Surajmal Institute",
        desc: "Currently pursuing BCA with a focus on web technologies and software engineering. Maintaining a consistent academic record while building full-stack projects.",
        year: "2024 - 2027",
        icon: <GraduationCap size={20} />,
        status: "9.55 CGPA"
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-[#0f0a0d] relative overflow-hidden">

            {/* Structural Decoration */}
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#6d0f1b]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8">

                {/* Leadership Header */}
                <div className="max-w-4xl mx-auto mb-24 text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#fda4af] mb-4 block">Experience</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-outfit uppercase">
                        Career <span className="text-gradient-rose">Journey.</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto relative mt-12">

                    {/* Vertical Architectural Line */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6d0f1b] via-[#be185d] to-[#fda4af]" />

                    <div className="space-y-16">
                        {milestones.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 group ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >

                                {/* Visual Anchor (The Central Dot System) */}
                                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-2xl bg-[#0f0a0d] border border-[#fda4af]/20 flex items-center justify-center z-10 transition-all duration-500 group-hover:scale-125 group-hover:bg-[#fda4af] group-hover:border-[#fda4af] group-hover:shadow-[0_0_30px_rgba(251,113,133,0.2)]">
                                    <div className="w-2 h-2 rounded-full bg-[#be185d] group-hover:bg-white transition-colors" />
                                </div>

                                {/* Information Component */}
                                <div className={`w-full md:w-[42%] p-8 bg-[#1a0f14] border border-white/5 rounded-3xl relative overflow-hidden transition-all duration-700 hover:border-[#fda4af]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] ${idx % 2 === 0 ? "text-left" : "md:text-right"}`}>

                                    {/* Ghost Background Icon */}
                                    <div className={`absolute top-0 opacity-5 group-hover:opacity-10 transition-all duration-700 scale-[2] ${idx % 2 === 0 ? "right-0" : "left-0"}`}>
                                        {item.icon}
                                    </div>

                                    <div className={`mb-6 flex items-center gap-4 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                                        <div className="w-12 h-12 rounded-xl bg-[#fda4af]/5 border border-[#fda4af]/10 flex items-center justify-center text-[#fda4af] group-hover:bg-[#fda4af] group-hover:text-white transition-all duration-500">
                                            {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#fda4af]">{item.year}</span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter italic mb-2 leading-none uppercase font-outfit">{item.title}</h3>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-6 pb-2 border-b border-white/5 inline-block">{item.org}</p>

                                    <p className="text-sm text-[#9ca3af] font-medium leading-relaxed opacity-80 mb-6">
                                        {item.desc}
                                    </p>

                                    <div className={`flex items-center gap-3 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                                        <div className="px-3 py-1 rounded-full bg-[#fda4af]/5 border border-[#fda4af]/10">
                                            <span className="text-[8px] font-black uppercase tracking-widest text-[#fda4af]">{item.status}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space for Grid Alignment */}
                                <div className="hidden md:block md:w-[45%]" />

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
