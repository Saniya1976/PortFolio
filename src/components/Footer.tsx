"use client";

import React from "react";
import { Github, Linkedin, ArrowUp, Zap } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-10 bg-[#0f0a0d] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Copyright & Info */}
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#be185d] to-[#fda4af] flex items-center justify-center text-white font-black text-sm shadow-lg">
                                SK
                            </div>
                            <h2 className="text-sm font-black text-white tracking-tighter uppercase font-outfit">Saniya Kumari</h2>
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#9ca3af]">
                            &copy; {new Date().getFullYear()} All Rights Reserved.
                        </p>
                    </div>

                    {/* Socials & Top */}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/Saniya1976" target="_blank" className="text-[#9ca3af] hover:text-[#be185d] transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/saniya-9287592a8" target="_blank" className="text-[#9ca3af] hover:text-[#be185d] transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-[#be185d] hover:text-white transition-all"
                        >
                            Top <ArrowUp size={14} className="p-1 rounded-full border border-[#be185d]/30" />
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
};
