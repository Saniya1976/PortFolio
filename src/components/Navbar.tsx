"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Biography", href: "#about" },
    { name: "Stack", href: "#skills" },
    { name: "Developments", href: "#projects" },
    { name: "Network", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 inset-x-0 z-50 transition-all duration-700",
            scrolled ? "py-4 glass-burgundy shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b border-[#8e1c2a]/20" : "py-6 bg-white/[0.02] backdrop-blur-xl border-b border-white/5"
        )}>
            <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">

                {/* Logo/Identity */}
                <Magnetic strength={0.2}>
                    <motion.a
                        href="#home"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative group flex items-center gap-3 no-underline"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6d0f1b] via-[#8e1c2a] to-[#be185d] flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(142,28,42,0.5)]">
                            SK
                        </div>
                        <div className="hidden sm:block">
                            <span className="block text-xs font-black uppercase tracking-[0.3em] text-white">Saniya</span>
                            <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#fda4af]">Full Stack Developer</span>
                        </div>
                    </motion.a>
                </Magnetic>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-2 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full backdrop-blur-md relative">
                    {navItems.map((item, idx) => (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                        >
                            <a
                                href={item.href}
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className="relative z-10 px-6 py-2 block text-[10px] font-black uppercase tracking-[0.3em] text-[#9ca3af] hover:text-[#f8fafc] transition-colors"
                            >
                                {item.name}
                            </a>
                            <AnimatePresence>
                                {hoveredItem === item.name && (
                                    <motion.div
                                        layoutId="nav-hover"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute inset-0 bg-[#fda4af]/10 blur-[2px] rounded-full -z-0 border border-white/10"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.li>
                    ))}
                </ul>


                {/* Global CTAs - Added Glowing Styles */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-4 border-r border-white/10 pr-8">
                        <a href="https://github.com/Saniya1976" target="_blank" className="text-[#9ca3af] hover:text-[#8e1c2a] hover:drop-shadow-[0_0_8px_#8e1c2a] transition-all transform hover:-translate-y-1">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/saniya-9287592a8" target="_blank" className="text-[#9ca3af] hover:text-[#8e1c2a] hover:drop-shadow-[0_0_8px_#8e1c2a] transition-all transform hover:-translate-y-1">
                            <Linkedin size={18} />
                        </a>
                    </div>
                    <a
                        href="mailto:saniyakumari1976@gmail.com"
                        className="group relative flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8e1c2a] border border-[#8e1c2a]/30 px-6 py-2.5 rounded-full hover:bg-[#8e1c2a] hover:text-white transition-all overflow-hidden shadow-[0_0_15px_rgba(142,28,42,0.2)] hover:shadow-[0_0_30px_rgba(142,28,42,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">Inquire <ArrowUpRight size={12} /></span>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    </a>
                </div>

                {/* Mobile Controller */}
                <button
                    className="lg:hidden w-12 h-12 flex items-center justify-center text-white bg-white/[0.03] border border-white/10 rounded-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Luxury Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 top-[88px] bg-[#0f0a0d]/95 z-40 lg:hidden flex flex-col p-8"
                    >
                        <nav className="flex flex-col gap-8">
                            {navItems.map((item, idx) => (
                                <motion.a
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-black text-white italic tracking-tighter hover:text-[#8e1c2a] transition-colors"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </nav>

                        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex gap-6">
                                <a href="https://github.com/Saniya1976" target="_blank" className="text-white/50 hover:text-white"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/saniya-9287592a8" target="_blank" className="text-white/50 hover:text-white"><Linkedin size={24} /></a>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#8e1c2a]">SK Edition</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
