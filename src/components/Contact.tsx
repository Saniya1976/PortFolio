"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Send, MessageSquare } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#0f0a0d] relative overflow-hidden">

            {/* Structural Visual System */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#6d0f1b]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-[1400px] mx-auto">

                    <div className="grid lg:grid-cols-12 gap-16 items-center">

                        {/* Branding & Interaction Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 space-y-12"
                        >
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#fda4af] mb-6 block">Inquiries</span>
                                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 font-outfit uppercase">
                                    Let&apos;s <span className="text-gradient-rose">Connect.</span>
                                </h2>
                                <p className="text-lg text-[#9ca3af] font-medium leading-relaxed opacity-70 max-w-md">
                                    I am currently open to full-time roles, internships, and project collaborations. Feel free to reach out for a technical discussion or just to say hi.
                                </p>
                            </div>

                            <div className="space-y-12">
                                {[
                                    { icon: <Mail size={24} />, label: "Email Address", val: "saniyakumari1976@gmail.com", href: "mailto:saniyakumari1976@gmail.com", color: "text-[#fda4af]" },
                                    { icon: <Linkedin size={24} />, label: "LinkedIn Profile", val: "Saniya Kumari", href: "https://www.linkedin.com/in/saniya-9287592a8", color: "text-[#fda4af]" },
                                ].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item.href}
                                        target="_blank"
                                        className="flex items-center gap-8 group no-underline"
                                    >
                                        <div className="w-16 h-16 rounded-[2rem] bg-[#1a0f14] border border-white/5 flex items-center justify-center text-white/40 group-hover:bg-[#fda4af] group-hover:text-white transition-all duration-500 shadow-xl">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-[#fda4af]/60 mb-1">{item.label}</p>
                                            <span className="text-2xl font-black text-white tracking-tighter transition-colors group-hover:text-[#fda4af]">{item.val}</span>
                                        </div>
                                    </motion.a>
                                ))}

                                <div className="flex items-center gap-6 pt-8 border-t border-white/5 w-fit">
                                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#9ca3af]">
                                        <MapPin size={14} className="text-[#fda4af]" /> New Delhi, India
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-[#fda4af] animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">GMT +5:30</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 bg-[#1a0f14] p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative group shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                        >
                            <div className="absolute top-[-30px] right-[30px] w-14 h-14 rounded-2xl bg-gradient-to-br from-[#be185d] to-[#fda4af] flex items-center justify-center text-white shadow-xl">
                                <MessageSquare size={24} />
                            </div>

                            <form className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#fda4af] ml-2">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-[#0f0a0d] border border-white/5 px-6 py-4 rounded-2xl text-white text-[11px] font-bold tracking-widest uppercase outline-none focus:border-[#fda4af]/50 focus:shadow-[0_0_20px_rgba(251,113,133,0.1)] transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#fda4af] ml-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-[#0f0a0d] border border-white/5 px-6 py-4 rounded-2xl text-white text-[11px] font-bold tracking-widest uppercase outline-none focus:border-[#fda4af]/50 focus:shadow-[0_0_20px_rgba(251,113,133,0.1)] transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#fda4af] ml-2">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="How can I help you?"
                                        className="w-full bg-[#0f0a0d] border border-white/5 px-6 py-5 rounded-[1.5rem] text-white text-[11px] font-bold tracking-widest uppercase outline-none focus:border-[#fda4af]/50 focus:shadow-[0_0_20px_rgba(251,113,133,0.1)] transition-all resize-none"
                                    />
                                </div>

                                <button className="btn-burgundy w-full py-5 text-[10px] flex items-center justify-center gap-4 group hover:-translate-y-1 bg-gradient-to-r from-[#be185d] to-[#fda4af]">
                                    Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
