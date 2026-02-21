"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cpu, Globe, Database, Cog, ShieldCheck, Zap } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Cpu size={24} />,
        skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
        shade: "bg-[#1a0f14]",
        accent: "text-[#be185d]",
        level: "Expert"
    },
    {
        title: "Backend",
        icon: <Globe size={24} />,
        skills: ["Node.js", "Express.js", "C++", "Python", "REST APIs", "Socket.io"],
        shade: "bg-[#0f0a0d]",
        accent: "text-[#be185d]",
        level: "Proficient"
    },
    {
        title: "Database",
        icon: <Database size={24} />,
        skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "Mongoose", "AWS S3"],
        shade: "bg-[#1a0f14]",
        accent: "text-[#be185d]",
        level: "Proficient"
    },
    {
        title: "Tools & DevOps",
        icon: <Cog size={24} />,
        skills: ["Clerk Auth", "Docker", "Git/GitHub", "Vercel", "Postman", "CI/CD"],
        shade: "bg-[#0f0a0d]",
        accent: "text-[#be185d]",
        level: "Production Ready"
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#0f0a0d] relative overflow-hidden">

            {/* Visual Identity */}
            <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] bg-[#6d0f1b]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-8 relative z-10">

                {/* Section Header */}
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#fda4af] mb-4 block">Capabilities</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-outfit uppercase">Technical <span className="text-gradient-rose">Stack.</span></h2>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9ca3af] leading-loose max-w-[280px] border-l border-[#fda4af]/20 pl-8 mx-auto text-center hidden">
                    An extensive arsenal of industrial development tools, frameworks, and deployment architectures.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className={cn(
                                "group p-8 rounded-3xl border border-white/5 transition-all duration-700 relative overflow-hidden flex flex-col h-full bg-[#1a0f14]",
                                "hover:border-[#fda4af]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                            )}
                        >
                            <div className="mb-6">
                                <div className={cn("w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 text-[#fda4af]")}>
                                    {React.cloneElement(cat.icon as React.ReactElement, { size: 18 })}
                                </div>
                                <h3 className="text-xl font-black text-white tracking-tighter mb-1 uppercase font-outfit">{cat.title}</h3>
                                <div className="flex items-center gap-2">
                                    <Zap size={10} className="text-[#fda4af]" />
                                    <span className="text-[8px] font-black uppercase tracking-widest text-white/40">{cat.level}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 relative z-10 flex-grow">
                                {cat.skills.map((skill, sIdx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: (idx * 0.1) + (sIdx * 0.03) }}
                                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[9px] font-extrabold uppercase tracking-widest text-[#9ca3af] group-hover:text-white group-hover:bg-[#fda4af]/10 group-hover:border-[#fda4af]/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
