"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Twitter, ExternalLink, Code2, Trophy } from "lucide-react";

export const Contact = () => {
    const socials = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            val: "saniyakumari1976@gmail.com",
            href: "mailto:saniyakumari1976@gmail.com",
            desc: "Direct Professional Inquiry"
        },
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            val: "Saniya Kumari",
            href: "https://www.linkedin.com/in/saniya-9287592a8",
            desc: "Career & Network"
        },
        {
            icon: <Twitter size={24} />,
            label: "Twitter/X",
            val: "0x_Saniyaa_",
            href: "https://x.com/0x_Saniyaa_",
            desc: "Tech Thoughts & Updates"
        },
        {
            icon: <Code2 size={24} />,
            label: "LeetCode",
            val: "Saniya0nLC",
            href: "https://leetcode.com/u/Saniya0nLC/",
            desc: "300+ Problems Solved"
        },
        {
            icon: <Trophy size={24} />,
            label: "GeeksforGeeks",
            val: "saniya1976",
            href: "https://www.geeksforgeeks.org/user/saniyakumari1976/",
            desc: "Data Structures & Algorithms"
        },
    ];

    return (
        <section id="contact" className="py-24 bg-[#0d0406] relative overflow-hidden bg-grid">

            {/* Structural Visual System */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#8e1c2a]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8e1c2a] mb-6 block"
                        >
                            Get In Touch
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 font-outfit uppercase"
                        >
                            Drop me a <span className="text-gradient-rose italic">Hello.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-lg text-[#9ca3af] font-medium leading-relaxed opacity-70 max-w-2xl mx-auto"
                        >
                            Currently open to new opportunities and technical collaborations.
                            Connect with me across these platforms for a discussion.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {socials.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target="_blank"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative block p-6 bg-[#0a0405] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:translate-y-[-5px] shadow-2xl"
                            >
                                {/* Shiny Burgundy Background Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#b91c1c] via-[#8e1c2a] to-[#450a0a] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                {/* Moving Sparkle Glint */}
                                <motion.div
                                    animate={{
                                        left: ["-100%", "200%"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: Math.random() * 3
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                                />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-xl bg-[#0d0406] border border-[#8e1c2a]/20 flex items-center justify-center text-[#8e1c2a] mb-5 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-500 shadow-lg">
                                        {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                                    </div>

                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8e1c2a] mb-1 group-hover:text-white/80 transition-colors uppercase">PROFILES</p>
                                    <h3 className="text-lg font-black text-white tracking-widest transition-colors line-clamp-1 group-hover:text-white drop-shadow-sm uppercase font-outfit italic">{item.label}</h3>

                                    <div className="pt-4 border-t border-white/5 w-full flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-widest text-white/20 group-hover:text-white group-hover:border-white/20 transition-colors">
                                        DIRECTORY <ExternalLink size={10} />
                                    </div>
                                </div>

                                {/* Background Glow Layer */}
                                <div className="absolute inset-0 bg-[#8e1c2a]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-12 opacity-50">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#9ca3af]">
                            <MapPin size={14} className="text-[#8e1c2a]" /> New Delhi, India
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#9ca3af]">
                            <span className="w-2 h-2 rounded-full bg-[#8e1c2a] animate-pulse" /> GMT +5:30
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
