"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Cog } from "lucide-react";

const skillCategories = [
    {
        title: "FRONTEND",
        icon: <Cpu size={18} />,
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui", "Context API"],
        color: "from-[#8e1c2a] to-[#be185d]"
    },
    {
        title: "BACKEND",
        icon: <Globe size={18} />,
        skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Streamify", "Socket.io"],
        color: "from-[#6d0f1b] to-[#8e1c2a]"
    },
    {
        title: "DATABASE",
        icon: <Database size={18} />,
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma ORM", "Mongoose"],
        color: "from-[#8e1c2a] to-[#c12a4f]"
    },
    {
        title: "CLOUD & TOOLS",
        icon: <Cog size={18} />,
        skills: ["Git", "GitHub", "Vercel", "Render", "Cloudinary", "Postman", "Clerk"],
        color: "from-[#c12a4f] to-[#e14d85]"
    },
    {
        title: "LANGUAGES",
        icon: <Globe size={18} />,
        skills: ["JavaScript", "TypeScript", "C++", "Python", "C"],
        color: "from-[#8e1c2a] to-[#fda4af]"
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#0d0406] relative overflow-hidden bg-grid">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8e1c2a]/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#4a0404]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8 relative z-10">
                {/* Header with bold gradient */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tighter font-outfit uppercase"
                    >
                        <span className="text-white">SKILL </span>
                        <span className="text-gradient-rose">STACK.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-[#8e1c2a] to-transparent mt-4"
                    />
                </div>

                {/* Vertical Oriented Glassmorphism Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group h-full"
                        >
                            {/* Glowing Background/Border Effect */}
                            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#8e1c2a]/50 via-transparent to-[#fda4af]/30 rounded-[2rem] opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

                            <div className="relative h-full p-8 rounded-[2rem] bg-[#1a080a]/40 backdrop-blur-xl border border-white/5 overflow-hidden flex flex-col">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} p-px`}>
                                        <div className="w-full h-full rounded-2xl bg-[#0d0406] flex items-center justify-center text-white">
                                            {cat.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-black text-white/90 tracking-widest font-outfit">{cat.title}</h3>
                                </div>

                                {/* Skills Grid - Consistent Button Boxes */}
                                <div className="grid grid-cols-1 gap-2 flex-grow">
                                    {cat.skills.map((skill, sIdx) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            animate={{
                                                boxShadow: [
                                                    "0 0 0px rgba(142, 28, 42, 0)",
                                                    "0 0 10px rgba(142, 28, 42, 0.1)",
                                                    "0 0 0px rgba(142, 28, 42, 0)"
                                                ]
                                            }}
                                            transition={{
                                                default: { delay: 0.1 + (sIdx * 0.03) },
                                                boxShadow: {
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 10
                                                }
                                            }}
                                            whileHover={{ scale: 1.02 }}
                                            className="px-4 py-2.5 rounded-xl bg-[#8e1c2a]/10 border border-[#8e1c2a]/20 hover:border-[#fda4af]/40 hover:bg-[#8e1c2a]/20 transition-all cursor-default group/skill relative overflow-hidden flex items-center justify-between"
                                        >
                                            <span className="text-[10px] font-bold text-white/80 group-hover/skill:text-white transition-colors tracking-widest uppercase font-outfit relative z-10">
                                                {skill}
                                            </span>
                                            <div className="w-1 h-1 rounded-full bg-[#fda4af]/40 group-hover/skill:bg-[#fda4af] transition-colors" />

                                            {/* Sparkle Glint */}
                                            <motion.div
                                                animate={{
                                                    left: ["-100%", "200%"]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: Math.random() * 5
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Floating Monospace Accent */}
                                <div className="mt-8 text-[9px] font-mono text-[#8e1c2a]/40 tracking-tighter uppercase">
                                    {`system_arch_${cat.title.toLowerCase().replace(' ', '_')}.sys`}
                                </div>

                                {/* Animated scanline effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 -translate-y-full group-hover:animate-scanline pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

