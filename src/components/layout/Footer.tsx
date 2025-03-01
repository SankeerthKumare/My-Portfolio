"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/Sankeerthkumar", label: "GitHub", hoverColor: "hover:text-primary hover:shadow-glow hover:border-primary/30" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sankeerth-kumar-a84a89288/", label: "LinkedIn", hoverColor: "hover:text-accent-amber hover:shadow-glow-amber hover:border-accent-amber/30" },
  { icon: FiMail, href: "mailto:sankeertheswaravaka98@gmail.com", label: "Email", hoverColor: "hover:text-accent-coral hover:shadow-glow-coral hover:border-accent-coral/30" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/3 rounded-full blur-[40px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text font-mono cursor-default"
          >
            {"<SK />"}
          </motion.span>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full glass text-slate-500 transition-all duration-400 ${hoverColor}`}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-slate-500 text-sm flex items-center gap-1.5 justify-center">
              Designed & Built with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiHeart size={12} className="text-accent-coral fill-accent-coral" />
              </motion.span>{" "}
              by{" "}
              <span className="gradient-text font-semibold">Sankeerth Kumar Eswaravaka</span>
            </p>
            <p className="text-slate-600 text-xs font-mono">
              &copy; {new Date().getFullYear()} &middot; All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
