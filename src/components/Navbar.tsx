"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 inset-x-0 z-50 transition-all duration-700",
            scrolled ? "py-4 glass-burgundy shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "py-8 bg-transparent"
        )}>
            <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">

                {/* Logo/Identity */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative group flex items-center gap-3 no-underline"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6d0f1b] to-[#be185d] flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(190,24,93,0.3)]">
                        SK
                    </div>
                    <div className="hidden sm:block">
                        <span className="block text-xs font-black uppercase tracking-[0.3em] text-white">Saniya</span>
                        <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#be185d]">Engineering</span>
                    </div>
                </motion.a>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-12 bg-white/[0.02] border border-white/5 px-8 py-3 rounded-full backdrop-blur-md">
                    {navItems.map((item, idx) => (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <a
                                href={item.href}
                                className="group relative text-[10px] font-black uppercase tracking-[0.3em] text-[#9ca3af] hover:text-[#f8fafc] transition-all"
                            >
                                {item.name}
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#be185d] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Global CTAs */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-4 border-r border-white/10 pr-8">
                        <a href="https://github.com/Saniya1976" target="_blank" className="text-[#9ca3af] hover:text-[#be185d] transition-all transform hover:-translate-y-1">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/saniya-9287592a8" target="_blank" className="text-[#9ca3af] hover:text-[#be185d] transition-all transform hover:-translate-y-1">
                            <Linkedin size={18} />
                        </a>
                    </div>
                    <a
                        href="mailto:saniyakumari1976@gmail.com"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] border border-[#d4af37]/20 px-6 py-2.5 rounded-full hover:bg-[#d4af37] hover:text-[#0f0a0d] transition-all"
                    >
                        Inquire <ArrowUpRight size={12} />
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
                                    className="text-4xl font-black text-white italic tracking-tighter hover:text-[#be185d] transition-colors"
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
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#be185d]">SK Edition</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
