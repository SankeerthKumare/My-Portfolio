"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import TextScramble from "@/components/effects/TextScramble";
import TechOrbit from "@/components/effects/TechOrbit";
import Counter from "@/components/effects/Counter";
import { fadeUp, scaleIn, viewport } from "@/lib/motion";

const STATS = [
  { value: 8, suffix: "+", label: "Years", gradient: "from-primary to-accent-teal" },
  { value: 18, suffix: "M+", label: "Msgs/Day", gradient: "from-accent-amber to-accent-coral" },
  { value: 5, suffix: "", label: "Companies", gradient: "from-accent-coral to-accent-rose" },
  { value: 4, suffix: "", label: "Certs", gradient: "from-accent-teal to-primary" },
];

const CERTS = [
  "AWS Solutions Architect – Associate",
  "Oracle Java SE 11 Developer",
  "HashiCorp Terraform Associate",
  "Anthropic – Building with Claude API",
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight">
            <TextScramble text="About" className="text-white" />{" "}
            <TextScramble text="Me" className="gradient-text" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ delay: 0.15 }}
            className="flex justify-center"
          >
            <TechOrbit />
          </motion.div>

          <div className="space-y-10">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-xl leading-relaxed font-light"
            >
              Senior Software Engineer with 8 years of experience in Java/J2EE, Spring Boot, Apache Kafka, and Agentic AI.
              Building high-throughput payment systems and AI-driven backend services across financial, energy, telecom, and healthcare domains.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative rounded-2xl glass p-6 text-center overflow-hidden hover-glow cursor-default"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <p className="text-4xl sm:text-5xl font-black gradient-text mb-1">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2"
            >
              {CERTS.map((c) => (
                <motion.span
                  key={c}
                  whileHover={{ scale: 1.08 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-primary/15 text-xs font-mono text-slate-400 bg-dark/40 backdrop-blur-sm hover:border-primary/40 hover:text-primary-light transition-all duration-300 cursor-default"
                >
                  <FiAward size={11} className="text-primary/60" />
                  {c}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
