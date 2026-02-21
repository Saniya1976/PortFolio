"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Code2, Globe, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Rentora",
        type: "Real Estate Platform",
        desc: "A comprehensive property management system featuring automated rent tracking, tenant portals, and property listings. Built with a focus on ease of use and reliability.",
        tech: ["Next.js 14", "Tailwind CSS", "Clerk", "PostgreSQL", "Prisma"],
        image: "/projects/rentora.png",
        github: "https://github.com/Saniya1976/rentora",
        live: "#",
        num: "01",
        accent: "#be185d",
        icon: <Globe size={28} />
    },
    {
        title: "Nestlly",
        type: "Community Platform",
        desc: "A community-driven platform for finding and sharing local gems, housing, and essentials within student neighborhoods.",
        tech: ["Next.js", "Firebase", "Tailwind"],
        image: "/projects/nestly.png",
        github: "https://github.com/Saniya1976/nestly",
        live: "https://nestly-seven.vercel.app/",
        num: "02",
        accent: "#6d0f1b",
        icon: <Layers size={28} />
    },
    {
        title: "YapChat",
        type: "Real-time Messaging App",
        desc: "A high-concurrency chat application with global room support, private messaging, and rich media sharing. Optimized for low latency and smooth interactions.",
        tech: ["MERN Stack", "Socket.io", "Cloudinary", "Redux Toolkit"],
        image: "/projects/yapchat.png",
        github: "https://github.com/Saniya1976/YapChat",
        live: "https://yapchat1.vercel.app/",
        num: "03",
        accent: "#be185d",
        icon: <Code2 size={28} />
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[#0f0a0d] relative overflow-hidden">

            {/* Structural Visuals */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6d0f1b]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8">

                {/* Header Architecture */}
                <div className="mb-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#fda4af] mb-4 block">Selected Work</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-outfit uppercase">Portfolio <span className="text-gradient-rose">Showcase.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-[#1a0f14] rounded-[2rem] border border-white/5 overflow-hidden group hover:border-[#fda4af]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
                        >
                            {/* Image Area */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f14] via-transparent to-transparent z-10" />

                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0f0a0d]/40 backdrop-blur-[2px]">
                                    <div className="flex gap-6">
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#be185d] to-[#fda4af] flex items-center justify-center shadow-lg"
                                        >
                                            <ExternalLink size={20} className="text-white" />
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 rounded-full bg-[#1a0f14] border border-white/10 flex items-center justify-center shadow-lg"
                                        >
                                            <Github size={20} className="text-white" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-8 space-y-4">
                                <div className="space-y-2">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#fda4af]">{project.type}</span>
                                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase font-outfit">{project.title}</h3>
                                </div>

                                <p className="text-sm text-[#9ca3af] font-medium leading-relaxed line-clamp-2">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 py-2 px-4 bg-white/[0.03] border border-white/5 rounded-xl">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-[#fda4af] text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-all underline decoration-[#fda4af]/30 underline-offset-4"
                                    >
                                        View Details <ArrowUpRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
