"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

export const CountUp = ({ to, duration = 2, delay = 0 }: { to: number | string, duration?: number, delay?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Parse the number part
    const target = typeof to === 'string' ? parseFloat(to) : to;
    const suffix = typeof to === 'string' ? to.replace(/[0-9.]/g, '') : '';

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, target, {
                duration,
                delay,
                ease: "easeOut",
                onUpdate: (value) => {
                    setCount(value);
                }
            });
            return () => controls.stop();
        }
    }, [isInView, target, duration, delay]);

    return (
        <span ref={ref}>
            {target % 1 === 0 ? Math.round(count) : count.toFixed(2)}
            {suffix}
        </span>
    );
};
