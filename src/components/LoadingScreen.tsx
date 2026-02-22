"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0f0a0d]"
                >
                    <div className="relative w-64 h-1 overflow-hidden bg-white/5 rounded-full mb-8">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            className="h-full bg-gradient-to-r from-[#6d0f1b] via-[#be185d] to-[#fda4af]"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            className="text-white text-3xl font-black uppercase tracking-[0.3em] font-outfit"
                        >
                            Saniya<span className="text-[#fda4af]">.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        className="mt-4 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]"
                    >
                        Initializing Luxury Experience
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
