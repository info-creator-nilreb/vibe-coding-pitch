import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#1a1a1a",
        magenta: "#E20074",
        mute: "#6b7280",
        border: "#e5e7eb",
        card: "#fafafa",
        cardTint: "#f0f4f8",
        cardMuted: "#f5f5f5",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 8rem)",
        container: "min(90vw, 72rem)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "process-step": "processStep 0.5s ease-out forwards",
        "float": "float 12s ease-in-out infinite",
        "float-delayed": "float 14s ease-in-out infinite 2s",
        "curve-line": "curveLine 8s ease-in-out infinite",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
        "impact-slide-up": "impactSlideUp 0.7s ease-out forwards",
        "impact-slide-left": "impactSlideFromLeft 0.6s ease-out forwards",
        "impact-slide-right": "impactSlideFromRight 0.6s ease-out forwards",
        "word-reveal": "wordReveal 0.6s ease-out forwards",
        "float-slow": "floatSlow 18s ease-in-out infinite",
        "bg-pulse": "bgPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        processStep: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-12px) translateX(6px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "33%": { transform: "translateY(-6px) translateX(-4px) scale(1.05)" },
          "66%": { transform: "translateY(4px) translateX(4px) scale(0.98)" },
        },
        bgPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        curveLine: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateX(0)", opacity: "0.6" },
          "50%": { transform: "translateX(6px)", opacity: "1" },
        },
        impactSlideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        impactSlideFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        impactSlideFromRight: {
          "0%": { opacity: "0", transform: "translateX(80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        wordReveal: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
