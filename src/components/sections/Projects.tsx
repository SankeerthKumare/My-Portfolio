"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";
import { FiExternalLink, FiGithub, FiStar, FiX } from "react-icons/fi";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import TextScramble from "@/components/effects/TextScramble";
import { viewport } from "@/lib/motion";

const cardGradients = [
  "from-primary/20 via-accent-teal/10 to-transparent",
  "from-accent-amber/20 via-accent-coral/10 to-transparent",
  "from-accent-coral/20 via-accent-rose/10 to-transparent",
];

const tagColors = [
  "text-primary-light border-primary/20",
  "text-accent-amber border-accent-amber/20",
  "text-accent-coral border-accent-coral/20",
  "text-accent-teal border-accent-teal/20",
  "text-accent-lime border-accent-lime/20",
];

function TiltCard({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const brightness = useTransform(mouseY, [-0.5, 0.5], [1.1, 0.95]);

  const onMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, filter: useTransform(brightness, v => `brightness(${v})`) as any, transformPerspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`transform-gpu cursor-pointer ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 bg-dark/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl glass-strong glow-border overflow-hidden"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:scale-110 transition-all"
        >
          <FiX size={18} />
        </button>

        <div className="relative h-32 bg-gradient-to-br from-primary/20 via-accent-amber/10 to-accent-coral/10 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 40%, rgba(16,185,129,0.12) 0%, transparent 50%), radial-gradient(circle at 75% 60%, rgba(245,158,11,0.08) 0%, transparent 50%)",
          }} />
          <div className="absolute top-4 left-4 flex gap-2">
            {project.featured && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark/50 backdrop-blur-md border border-accent-amber/30">
                <FiStar size={10} className="text-accent-amber fill-accent-amber" />
                <span className="text-[10px] font-mono text-accent-amber">Featured</span>
              </div>
            )}
            {project.id === 1 && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-[10px] font-mono text-primary-light font-semibold">Currently Working</span>
              </div>
            )}
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white gradient-text">{project.title}</h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, j) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 text-xs font-mono rounded-full bg-dark/40 border ${tagColors[j % tagColors.length]}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary-light hover:bg-primary/10 hover:shadow-glow transition-all"
                >
                  <FiGithub size={15} /> View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-amber/30 text-accent-amber hover:bg-accent-amber/10 hover:shadow-glow-amber transition-all"
                >
                  <FiExternalLink size={15} /> View Live
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, viewport);
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight">
            <TextScramble text="My" className="text-white" />{" "}
            <TextScramble text="Work" className="gradient-text" />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-500 text-sm font-mono mb-14"
        >
          Click any card to see the full breakdown
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <TiltCard
                onClick={() => setSelected(project)}
                className="group relative rounded-3xl glass overflow-hidden hover-glow h-full"
              >
                <div className="absolute inset-0 rounded-3xl glow-border pointer-events-none" />

                <div className={`relative h-52 bg-gradient-to-br ${cardGradients[i % cardGradients.length]} overflow-hidden`}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: "radial-gradient(circle at 25% 40%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 60%, rgba(245,158,11,0.06) 0%, transparent 50%)",
                  }} />

                  <motion.div
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-2 text-[120px] font-black text-white/[0.03] leading-none select-none"
                  >
                    0{i + 1}
                  </motion.div>

                  <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 p-5">
                    {project.techStack.slice(0, 4).map((tech, j) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.15 + j * 0.06, type: "spring" }}
                        className={`px-3 py-1.5 bg-dark/60 backdrop-blur-md text-xs rounded-full font-mono border ${tagColors[j % tagColors.length]} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {project.id === 1 && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                          <span className="relative rounded-full h-1.5 w-1.5 bg-primary" />
                        </span>
                        <span className="text-[9px] font-mono text-primary-light font-semibold">Working</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-dark/40 backdrop-blur-md border border-accent-amber/20">
                      <FiStar size={10} className="text-accent-amber fill-accent-amber" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:gradient-text transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description.split(".")[0]}.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <span className="p-2.5 rounded-full glass text-slate-500 group-hover:text-primary transition-all duration-300">
                          <FiGithub size={16} />
                        </span>
                      )}
                      {project.liveUrl && (
                        <span className="p-2.5 rounded-full glass text-slate-500 group-hover:text-accent-amber transition-all duration-300">
                          <FiExternalLink size={16} />
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 group-hover:text-primary-light transition-colors">
                      View details →
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {others.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  onClick={() => setSelected(p)}
                  className="group rounded-2xl glass p-6 hover-glow cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-semibold group-hover:gradient-text transition-all">{p.title}</h4>
                    <div className="flex gap-2">
                      {p.githubUrl && <span className="text-slate-600 group-hover:text-primary transition-colors"><FiGithub size={15} /></span>}
                      {p.liveUrl && <span className="text-slate-600 group-hover:text-accent-amber transition-colors"><FiExternalLink size={15} /></span>}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.techStack.map((t, j) => (
                      <span key={t} className={`text-[10px] font-mono px-2 py-0.5 rounded-full border bg-dark/30 ${tagColors[j % tagColors.length]}`}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
