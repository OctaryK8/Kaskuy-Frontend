"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const stripes = Array.from({ length: 20 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {isVisible && (
        <motion.div
          key="splash-screen"
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black overflow-hidden transition-colors duration-500"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated Background Stripes Layer */}
          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] flex flex-col -rotate-45 gap-12 opacity-30 dark:opacity-20">
              {stripes.map((_, i) => (
                <motion.div
                  key={i}
                  className="w-full h-24 bg-gray-200 dark:bg-neutral-800"
                  initial={{ opacity: 0.8, scaleY: 1 }}
                  animate={{
                    opacity: [0.5, 0.9, 0.5],
                    scaleY: [0.95, 1.05, 0.95],
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

          {/* Logo and Text Layer */}
          <motion.div
            className="relative z-10 flex items-center gap-4 text-neutral-700 dark:text-neutral-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <img src="Logo_Octary.png" alt="Logo" className="w-16 h-16" />
            <h1 className="text-3xl font-bold tracking-wide">
              Kas<span className="text-blue-500">Kuy</span>
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
