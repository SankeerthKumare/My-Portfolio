import type { Variants } from "framer-motion";

// One signature easing curve used everywhere
export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

// One viewport configuration so scroll-triggers fire at the same threshold
export const viewport = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease.out } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: ease.out } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: ease.out } },
};

export const stagger = (gap = 0.08, initial = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: initial } },
});
