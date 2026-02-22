"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Magnetic } from "./Magnetic";

interface Project {
    title: string;
    type: string;
    desc: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
    accent: string;
    size: string;
}

const projects = [
    {
        title: "Rentora",
        type: "Real Estate Ecosystem",
        desc: "A rental platform that streamlines listing, discovery, and booking of properties with secure backend APIs, authentication, and a scalable search feature.",
        tech: ["Next.js 14", "Clerk Auth", "Redux Toolkit", "PostgreSQL"],
        image: "/projects/rentora.png",
        github: "https://github.com/Saniya1976/rentora",
        live: "#",
        accent: "#be185d",
        size: "large" // Bento size
    },
    {
        title: "YapChat",
        type: "Real-time Communication",
        desc: "A real-time language learning chat application with backend event handling and message persistence, enabling secure communication and a scalable search feature.",
        tech: ["MERN Stack", "MongoDB", "Socket.io", "Streamify", "Cloudinary"],
        image: "/projects/yapchat.png",
        github: "https://github.com/Saniya1976/YapChat",
        live: "https://yapchat-312l.onrender.com",
        accent: "#6d0f1b",
        size: "tall"
    },
    {
        title: "Nestly",
        type: "Hyperlocal Networking",
        desc: "A social media platform where you can share achievements and engage with posts through likes and comments, featuring AI-generated captions.",
        tech: ["Next.js", "Cloudinary AI", "Tailwind CSS", "App Router"],
        image: "/projects/nestly.png",
        github: "https://github.com/Saniya1976/nestly",
        live: "https://nestly-seven.vercel.app/",
        accent: "#fda4af",
        size: "wide"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="bg-transparent relative py-20 overflow-hidden">
            {/* Intensified Burgundy Background System */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8e1c2a]/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#8e1c2a]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[9px] font-black uppercase tracking-[0.5em] text-[#fda4af] mb-4 block"
                        >
                            Protocols & Deployments
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-outfit uppercase mb-6">
                            Selected <span className="text-gradient-rose">Works.</span>
                        </h2>
                        <p className="text-[#9ca3af] text-base md:text-lg font-medium leading-relaxed opacity-80 max-w-xl">
                            A collection of high-impact digital solutions ranging from real-estate ecosystems to real-time messaging engines. Each project represents a synergy between technical logic and user-centric design.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-white/20">
                        <span className="w-8 h-[1px] bg-white/10" />
                        Swipe to Navigate
                    </div>
                </div>
            </div>

            {/* Native Snap Carousel - Perfect for Two-Finger Swipe */}
            <div className="w-full">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-8 md:px-[10vw] pb-12 no-scrollbar">
                    {projects.map((project, idx) => (
                        <div key={project.title} className="snap-center">
                            <ProjectCard project={project} index={idx} />
                        </div>
                    ))}
                    {/* Spacer for end-padding */}
                    <div className="flex-shrink-0 w-8 md:w-[10vw]" />
                </div>
            </div>

            {/* Unique Industrial Ticker */}
            <div className="absolute bottom-0 w-full py-4 border-t border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 whitespace-nowrap"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#8e1c2a]">System Status: Operational</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#fda4af] animate-pulse" />
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">Build ID: 2024.0{i + 1}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="relative flex-shrink-0 w-[80vw] md:w-[50vw] aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/5 group bg-[#110a0e] shadow-2xl transition-all duration-700 hover:border-[#8e1c2a]/40"
        >
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
            />

            {/* Stronger Burgundy Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a0d] via-[#8e1c2a]/10 to-transparent z-10" />

            <div className="absolute top-6 left-6 z-20">
                <div className="flex items-center gap-3 py-1.5 px-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-[#8e1c2a]" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#9ca3af]">0{index + 1}</span>
                </div>
            </div>

            <div className="absolute inset-x-8 bottom-8 z-20 flex flex-col items-start gap-4">
                <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase font-outfit leading-tight mb-2">
                        {project.title}
                    </h3>
                    <p className="text-xs text-[#9ca3af] font-medium leading-relaxed mb-6 opacity-80 line-clamp-2">
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-[7px] font-black uppercase tracking-widest text-white/50 py-1.5 px-3 bg-white/[0.03] border border-white/5 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-white/5 w-full">
                        <Magnetic>
                            <a href={project.live} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-white hover:text-[#fda4af] transition-colors">
                                Launch <ExternalLink size={12} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href={project.github} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                                <Github size={12} /> Source
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

