"use client";

import { motion } from "framer-motion";
import Counter from "@/components/effects/Counter";
import { fadeUp, viewport } from "@/lib/motion";

const METRICS = [
  { value: 18, suffix: "M+", label: "Msgs/Day", color: "from-primary to-accent-teal" },
  { value: 140, suffix: "M+", label: "Daily Txns", color: "from-accent-teal to-accent-amber" },
  { value: 8, suffix: "", label: "Years Backend", color: "from-accent-amber to-accent-coral" },
  { value: 40, suffix: "+", label: "Technologies", color: "from-accent-coral to-accent-rose" },
  { value: 4, suffix: "", label: "Certifications", color: "from-accent-rose to-primary" },
];

export default function MetricStrip() {
  return (
    <section className="relative py-14 overflow-hidden border-y border-dark-border/30">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent-amber/3 to-accent-coral/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-coral/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.08 }}
              className="relative text-center group cursor-default"
            >
              <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${m.color} bg-clip-text text-transparent leading-none mb-2`}>
                <Counter to={m.value} suffix={m.suffix} format="locale" />
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors">
                {m.label}
              </div>
              {i < METRICS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 w-px h-10 bg-gradient-to-b from-transparent via-dark-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
