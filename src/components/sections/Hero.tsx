"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiGithub, FiArrowDown } from "react-icons/fi";
import MagneticButton from "@/components/effects/MagneticButton";
import HeroTechFloat from "@/components/effects/HeroTechFloat";
import ParticleField from "@/components/effects/ParticleField";
import Typewriter from "@/components/effects/Typewriter";
import StaggeredText from "@/components/effects/StaggeredText";

const TYPEWRITER_TEXTS = [
  "Senior Software Engineer",
  "Java/J2EE & Spring Boot Expert",
  "Kafka & Event-Driven Systems",
  "Agentic AI & RAG Pipelines",
  "AWS Certified Architect",
];

const CONTEXT_CHIPS = [
  { label: "8 years", color: "text-primary-light border-primary/20" },
  { label: "FinTech & Banking", color: "text-accent-amber border-accent-amber/20" },
  { label: "Agentic AI", color: "text-accent-coral border-accent-coral/20" },
  { label: "Cloud-Native", color: "text-accent-teal border-accent-teal/20" },
];

const SOCIALS = [
  { Icon: FiLinkedin, href: "https://www.linkedin.com/in/eswaravaka-s-a84a89288", hover: "hover:text-primary hover:shadow-glow hover:border-primary/30" },
  { Icon: FiGithub, href: "https://github.com/Eswaravaka", hover: "hover:text-accent-amber hover:shadow-glow-amber hover:border-accent-amber/30" },
  { Icon: FiMail, href: "mailto:eswaravaka.1998@gmail.com", hover: "hover:text-accent-coral hover:shadow-glow-coral hover:border-accent-coral/30" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Pause all CSS animations inside the hero when it scrolls out of view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { el.dataset.out = entry.isIntersecting ? "false" : "true"; },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      <HeroTechFloat />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(3,8,6,0.7) 100%)" }} />

      {/* Horizontal light rays (CSS) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px pointer-events-none">
        <div className="hero-light-ray w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" style={{ ["--dur" as string]: "5s", ["--peak" as string]: "0.15" }} />
      </div>
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[160%] h-px pointer-events-none">
        <div className="hero-light-ray w-full h-px bg-gradient-to-r from-transparent via-accent-coral/25 to-transparent" style={{ ["--dur" as string]: "6s", ["--peak" as string]: "0.08", animationDelay: "3s" }} />
      </div>

      {/* Energy rings (CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="spin-cw w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-primary/[0.06]" style={{ ["--dur" as string]: "30s" }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="spin-ccw w-[750px] h-[750px] sm:w-[1000px] sm:h-[1000px] rounded-full border border-accent-coral/[0.03]" style={{ ["--dur" as string]: "50s" }} />
        </div>
      </div>

      {/* Center pulse (CSS) */}
      <div className="hero-center-pulse absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[50px] pointer-events-none" />

      {/* Two ambient blobs only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] bg-primary/8 animate-morph-blob blur-[60px]" />
        <div className="absolute bottom-[10%] -right-32 w-[400px] h-[400px] bg-accent-amber/8 animate-morph-blob-2 blur-[60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass glow-border mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-sm text-slate-300 font-mono">Available for work</span>
        </motion.div>

        <h1 className="font-black tracking-tighter leading-[0.85] mb-6">
          <span className="block text-6xl sm:text-8xl lg:text-[10rem]">
            <StaggeredText text="Eswaravaka" className="text-white text-glow text-glow-pulse" delay={1.3} />
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-3">
            <StaggeredText text="Senior Software Engineer" className="shimmer-text" delay={1.9} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
          className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-light mb-6 h-10"
        >
          <Typewriter texts={TYPEWRITER_TEXTS} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap"
        >
          {CONTEXT_CHIPS.map((t) => (
            <span
              key={t.label}
              className={`text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-full border bg-dark/40 ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1 }}
          className="flex items-center justify-center gap-5 mb-14"
        >
          <MagneticButton
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-10 py-4 bg-gradient-to-r from-primary to-accent-teal text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-glow-lg"
            strength={0.4}
          >
            <span className="relative z-10">Explore</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </MagneticButton>
          <MagneticButton
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 border border-primary/25 text-primary-light font-bold rounded-full hover:bg-primary/10 hover:border-primary/50 hover:shadow-glow transition-all duration-500"
            strength={0.4}
          >
            Say Hello
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3 }}
          className="flex items-center justify-center gap-5"
        >
          {SOCIALS.map(({ Icon, href, hover }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full glass text-slate-500 transition-all duration-500 ${hover}`}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator-bounce flex flex-col items-center gap-2">
          <span className="text-slate-600 text-xs font-mono tracking-widest">scroll</span>
          <FiArrowDown className="text-primary/30" size={18} />
        </div>
      </motion.div>
    </section>
  );
}
