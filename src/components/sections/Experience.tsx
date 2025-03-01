"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import TextScramble from "@/components/effects/TextScramble";
import { experiences } from "@/data/experience";
import { viewport } from "@/lib/motion";

const dotColors = [
  { dot: "bg-primary", gradient: "from-primary to-accent-teal" },
  { dot: "bg-accent-amber", gradient: "from-accent-amber to-accent-coral" },
  { dot: "bg-accent-coral", gradient: "from-accent-coral to-accent-rose" },
  { dot: "bg-accent-teal", gradient: "from-accent-teal to-primary" },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, viewport);

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-coral/30 to-transparent" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-accent-coral/4 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight">
            <TextScramble text="Career" className="text-white" />{" "}
            <TextScramble text="Path" className="gradient-text-warm" />
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline beam */}
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
              className="w-full bg-gradient-to-b from-primary via-accent-amber via-accent-coral to-accent-teal opacity-40"
            />
          </div>
          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const c = dotColors[i % dotColors.length];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 sm:left-5 top-3 z-10">
                    <div className={`w-5 h-5 rounded-full border-[3px] border-dark-100 ${c.dot} flex items-center justify-center`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="group rounded-2xl glass p-6 hover-glow overflow-hidden relative"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.gradient} opacity-20 group-hover:opacity-80 transition-opacity duration-500`} />

                    {/* Background number */}
                    <div className="absolute -top-3 -right-2 text-[90px] font-black text-white/[0.015] leading-none select-none">
                      0{i + 1}
                    </div>

                    <div className="relative">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <h3 className="text-white font-bold text-lg group-hover:gradient-text transition-all duration-500">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono px-3 py-1.5 rounded-full glass text-slate-400">
                          {exp.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <FiBriefcase size={12} className="text-primary/40" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <FiMapPin size={11} className="text-accent-coral/40" />
                          {exp.location}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, j) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6 + i * 0.2 + j * 0.04 }}
                            className="px-3 py-1 text-xs font-mono rounded-full bg-dark/40 border border-dark-border text-slate-500 group-hover:text-slate-400 group-hover:border-primary/15 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
