"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiOpenjdk, SiPython, SiTypescript, SiJavascript, SiSpring,
  SiDocker, SiKubernetes, SiPostgresql, SiMongodb, SiRedis,
  SiMysql, SiGit, SiGithub, SiTerraform, SiJenkins,
  SiSpringsecurity, SiJunit5, SiApachemaven,
} from "react-icons/si";
import { FiCode, FiCloud, FiDatabase, FiLayers, FiZap, FiCheckCircle, FiGitMerge, FiGrid, FiTrendingUp } from "react-icons/fi";
import type { IconType } from "react-icons";
import { skills } from "@/data/skills";
import TextScramble from "@/components/effects/TextScramble";
import { viewport } from "@/lib/motion";

const iconMap: Record<string, IconType> = {
  SiOpenjdk, SiPython, SiTypescript, SiJavascript, SiSpring,
  SiDocker, SiKubernetes, SiPostgresql, SiMongodb, SiRedis,
  SiMysql, SiGit, SiGithub, SiTerraform, SiJenkins,
  SiSpringsecurity, SiJunit5, SiApachemaven,
  FiCode, FiCloud, FiDatabase, FiLayers, FiZap, FiCheckCircle, FiGitMerge, FiGrid,
};

const levelGlow: Record<string, { border: string; bg: string; text: string; shadow: string }> = {
  Beginner: { border: "border-slate-600/30", bg: "bg-slate-500/5", text: "text-slate-400", shadow: "" },
  Intermediate: { border: "border-accent-amber/20", bg: "bg-accent-amber/5", text: "text-accent-amber", shadow: "hover:shadow-glow-amber" },
  Advanced: { border: "border-primary/20", bg: "bg-primary/5", text: "text-primary-light", shadow: "hover:shadow-glow" },
  Expert: { border: "border-accent-coral/20", bg: "bg-accent-coral/5", text: "text-accent-coral", shadow: "hover:shadow-glow-coral" },
};

const categoryMeta: Record<string, { color: string; icon: IconType; gradient: string }> = {
  Languages: { color: "text-primary-light", icon: FiCode, gradient: "from-primary to-accent-teal" },
  Backend: { color: "text-accent-amber", icon: FiLayers, gradient: "from-accent-amber to-accent-coral" },
  "Cloud & DevOps": { color: "text-accent-coral", icon: FiCloud, gradient: "from-accent-coral to-accent-rose" },
  Databases: { color: "text-accent-teal", icon: FiDatabase, gradient: "from-accent-teal to-primary" },
};

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  const Icon = iconMap[skill.icon] ?? FiCode;
  const glow = levelGlow[skill.level];

  return (
    <div
      className={`flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-sm transition-all duration-500 cursor-default group hover:scale-105 hover:-translate-y-1 ${glow.border} ${glow.bg} ${glow.shadow}`}
    >
      <Icon size={20} className={`${glow.text} opacity-70 group-hover:opacity-100 transition-opacity`} />
      <span className="text-white text-sm font-semibold whitespace-nowrap">{skill.name}</span>
      {skill.years && (
        <span className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 rounded bg-dark-200/60 border border-dark-border/50">
          {skill.years}y
        </span>
      )}
      <span className={`text-[10px] font-mono ${glow.text} opacity-50 group-hover:opacity-80`}>{skill.level}</span>
    </div>
  );
}

function MarqueeRow({ items, direction, speed }: { items: typeof skills; direction: "left" | "right"; speed: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 group/row">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

      <div className={`marquee-track ${speed} group-hover/row:[animation-play-state:paused]`}
        style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        {doubled.map((skill, i) => (
          <div key={`${skill.name}-${i}`} className="px-2">
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CoreStackCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const Icon = iconMap[skill.icon] ?? FiCode;
  const meta = categoryMeta[skill.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 180, damping: 18 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group relative rounded-2xl glass overflow-hidden hover-glow p-5"
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${meta.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Background glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

      <div className="relative flex items-start gap-4">
        <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${meta.gradient} bg-opacity-10 border border-dark-border/40`}>
          <Icon size={26} className="text-white/90" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="text-white font-bold text-base truncate">{skill.name}</h3>
            <div className="flex items-baseline gap-1 flex-shrink-0">
              <span className={`text-2xl font-black ${meta.color}`}>{skill.years}</span>
              <span className="text-[10px] font-mono text-slate-500 uppercase">yr{skill.years !== 1 ? "s" : ""}</span>
            </div>
          </div>
          {skill.tagline && (
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{skill.tagline}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, viewport);

  const featured = skills.filter(s => s.featured);

  const row1 = skills.filter(s => s.category === "Languages" || s.category === "Backend");
  const row2 = skills.filter(s => s.category === "Cloud & DevOps");
  const row3 = skills.filter(s => s.category === "Databases").concat(skills.filter(s => s.category === "Backend").slice(0, 4));

  const categoryCounts = (Object.keys(categoryMeta) as (keyof typeof categoryMeta)[]).map(c => ({
    name: c,
    count: skills.filter(s => s.category === c).length,
    meta: categoryMeta[c],
  }));

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-amber/30 to-transparent" />

      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-accent-amber/4 rounded-full blur-[60px] pointer-events-none" />

      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight">
            <TextScramble text="Tech" className="text-white" />{" "}
            <TextScramble text="Stack" className="gradient-text-warm" />
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base font-light max-w-xl mx-auto">
            6 years building production Java backends — from monolith refactors to event-driven payment systems.
          </p>
        </motion.div>

        {/* ── Category strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categoryCounts.map((c, i) => {
              const Icon = c.meta.icon;
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="group relative rounded-xl glass p-4 overflow-hidden cursor-default"
                >
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.meta.gradient} opacity-40 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={`${c.meta.color} opacity-70`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-300 text-xs sm:text-sm font-semibold truncate">{c.name}</p>
                      <p className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">
                        {c.count} techs
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Core Stack ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto px-4 mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <FiTrendingUp size={14} className="text-primary/70" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">Core Stack</span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-dark-border to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {featured.map((s, i) => (
              <CoreStackCard key={s.name} skill={s} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Level legend ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 sm:gap-8 mb-8 px-4"
        >
          {Object.entries(levelGlow).map(([name, g]) => (
            <div key={name} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${g.text.replace("text-", "bg-")}`} />
              <span className="text-xs text-slate-500 font-mono">{name}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Marquee rows ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="space-y-4"
        >
          <MarqueeRow items={row1} direction="left" speed="marquee-left" />
          <MarqueeRow items={row2} direction="right" speed="marquee-right" />
          <MarqueeRow items={row3} direction="left" speed="marquee-left-slow" />
        </motion.div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <span className="text-5xl font-black gradient-text">{skills.length}</span>
          <span className="text-slate-600 text-sm font-mono ml-3">technologies · across 4 domains</span>
        </motion.div>
      </div>
    </section>
  );
}
