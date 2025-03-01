"use client";

import { motion } from "framer-motion";
import { SiOpenjdk, SiSpring, SiDocker, SiPostgresql } from "react-icons/si";
import { FiZap, FiCloud } from "react-icons/fi";
import type { IconType } from "react-icons";

type Float = {
  Icon: IconType;
  label: string;
  color: string;
  border: string;
  glow: string;
  top: string;
  left?: string;
  right?: string;
  size: "sm" | "md";
  duration: number;
  delay: number;
  appear: number;
};

const FLOATS: Float[] = [
  { Icon: SiOpenjdk,    label: "Java 17",     color: "text-amber-300",       border: "border-amber-500/25",       glow: "shadow-[0_0_30px_rgba(245,158,11,0.12)]",  top: "14%", left: "5%",  size: "md", duration: 9,  delay: 0,   appear: 3.4 },
  { Icon: SiSpring,     label: "Spring Boot", color: "text-primary",         border: "border-primary/25",         glow: "shadow-[0_0_30px_rgba(16,185,129,0.12)]",  top: "20%", right: "5%", size: "md", duration: 11, delay: 1.5, appear: 3.5 },
  { Icon: FiZap,        label: "Kafka",       color: "text-accent-coral",    border: "border-accent-coral/25",    glow: "shadow-[0_0_30px_rgba(251,113,133,0.12)]", top: "55%", left: "3%",  size: "sm", duration: 8,  delay: 2,   appear: 3.6 },
  { Icon: FiCloud,      label: "AWS",         color: "text-accent-amber",    border: "border-accent-amber/25",    glow: "shadow-[0_0_30px_rgba(245,158,11,0.12)]",  top: "62%", right: "4%", size: "md", duration: 10, delay: 0.8, appear: 3.7 },
  { Icon: SiDocker,     label: "Docker",      color: "text-sky-400",         border: "border-sky-500/25",         glow: "shadow-[0_0_30px_rgba(56,189,248,0.12)]",  top: "82%", left: "11%", size: "sm", duration: 12, delay: 3,   appear: 3.8 },
  { Icon: SiPostgresql, label: "PostgreSQL",  color: "text-accent-teal",     border: "border-accent-teal/25",     glow: "shadow-[0_0_30px_rgba(20,184,166,0.12)]",  top: "84%", right: "11%", size: "sm", duration: 9,  delay: 2.5, appear: 3.9 },
];

const SIZE = { sm: "px-3 py-1.5 text-xs", md: "px-4 py-2 text-sm" };
const ICON = { sm: 14, md: 16 };

export default function HeroTechFloat() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {FLOATS.map((f, i) => (
        <motion.div
          key={i}
          style={{ top: f.top, left: f.left, right: f.right }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: f.appear, duration: 0.7, type: "spring", stiffness: 180 }}
          className="absolute"
        >
          <div
            className={`hero-float-card flex items-center gap-2 rounded-2xl glass-strong border backdrop-blur-md ${SIZE[f.size]} ${f.border} ${f.glow}`}
            style={{ ["--dur" as string]: `${f.duration}s`, animationDelay: `-${f.delay}s` }}
          >
            <f.Icon size={ICON[f.size]} className={f.color} />
            <span className="text-white/90 font-semibold font-mono whitespace-nowrap">{f.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
