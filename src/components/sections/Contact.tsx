"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";
import TextScramble from "@/components/effects/TextScramble";
import { viewport } from "@/lib/motion";

const SOCIALS = [
  { Icon: FiMail, href: "mailto:eswaravaka.1998@gmail.com", label: "Email", hover: "hover:text-primary hover:shadow-glow hover:border-primary/30" },
  { Icon: FiPhone, href: "tel:+18179529144", label: "Phone", hover: "hover:text-accent-amber hover:shadow-glow-amber hover:border-accent-amber/30" },
  { Icon: FiLinkedin, href: "https://www.linkedin.com/in/eswaravaka-s-a84a89288", label: "LinkedIn", hover: "hover:text-accent-teal hover:shadow-glow hover:border-accent-teal/30" },
  { Icon: FiGithub, href: "https://github.com/Eswaravaka", label: "GitHub", hover: "hover:text-white hover:border-white/10" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, viewport);

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent" />
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-accent-amber/3 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight mb-4">
            <TextScramble text="Say" className="text-white" />{" "}
            <TextScramble text="Hello" className="gradient-text-cool" />
          </h2>
          <p className="text-slate-500 text-lg font-light">Open to opportunities & collaborations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          {SOCIALS.map(({ Icon, href, label, hover }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full glass text-slate-500 transition-all duration-500 ${hover}`}
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
