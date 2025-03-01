"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-dark"
        >
          {/* Background blobs */}
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[50px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-accent-amber/8 rounded-full blur-[40px]" />

          <div className="relative flex flex-col items-center gap-8">
            {/* Animated logo */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Orbiting ring */}
              <div className="absolute -inset-8 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute -inset-14 rounded-full border border-accent-amber/10 animate-spin-reverse" />

              {/* Orbit dots */}
              <div className="absolute -inset-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-amber/50" />
              </div>

              <span className="text-6xl font-black gradient-text select-none">SK</span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-[2px] bg-dark-border rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
