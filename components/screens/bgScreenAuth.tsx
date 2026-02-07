"use client";
import React from "react";
import { motion } from "motion/react";

export default function AnimatedBackground() {
    const stripes = Array.from({ length: 20 });

    return (
        <div className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] flex flex-col -rotate-45 gap-12 opacity-100">
                {stripes.map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-full h-24 bg-gray-200 dark:bg-neutral-800"
                        initial={{ opacity: 0.8, scaleY: 1 }}
                        animate={{
                            opacity: [0.5, 0.9, 0.5],
                            scaleY: [0.95, 1.05, 0.95]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.4,
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-white/50 via-transparent to-white/50 dark:from-black/80 dark:via-transparent dark:to-black/80 pointer-events-none" />
        </div>
    );
}