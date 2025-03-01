import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10b981",
          dark: "#059669",
          light: "#34d399",
          glow: "#10b98180",
        },
        accent: {
          amber: "#f59e0b",
          gold: "#fbbf24",
          coral: "#fb7185",
          rose: "#f43f5e",
          teal: "#14b8a6",
          lime: "#84cc16",
        },
        dark: {
          DEFAULT: "#030806",
          100: "#071210",
          200: "#0a1a16",
          card: "#0c1f1a",
          border: "#163830",
          surface: "#0f2620",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, #10b98115 0px, transparent 50%), radial-gradient(at 80% 0%, #f59e0b10 0px, transparent 50%), radial-gradient(at 0% 50%, #fb718510 0px, transparent 50%), radial-gradient(at 80% 50%, #14b8a610 0px, transparent 50%), radial-gradient(at 0% 100%, #10b98110 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(16, 185, 129, 0.35)",
        "glow-lg": "0 0 50px rgba(16, 185, 129, 0.45)",
        "glow-amber": "0 0 25px rgba(245, 158, 11, 0.35)",
        "glow-coral": "0 0 25px rgba(251, 113, 133, 0.35)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-reverse": "spinReverse 15s linear infinite",
        "morph-blob": "morphBlob 8s ease-in-out infinite",
        "morph-blob-2": "morphBlob2 10s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        morphBlob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 60% / 30% 40% 70% 60%" },
          "75%": { borderRadius: "60% 30% 60% 40% / 70% 50% 40% 60%" },
        },
        morphBlob2: {
          "0%, 100%": { borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" },
          "34%": { borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%" },
          "67%": { borderRadius: "50% 50% 30% 70% / 60% 40% 60% 40%" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
