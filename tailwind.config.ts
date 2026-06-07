import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071A35",
          light: "#0C2447",
          dark: "#040F1F",
        },
        orange: {
          DEFAULT: "#FF6B00",
          light: "#FF8534",
          dark: "#E05E00",
        },
        cyan: {
          DEFAULT: "#00C2FF",
          light: "#33CEFF",
          dark: "#0099CC",
        },
        surface: {
          DEFAULT: "#F5F7FA",
          dark: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(255,107,0,0.08) 0%, transparent 50%), linear-gradient(180deg, #040F1F 0%, #071A35 40%, #0C2447 100%)",
        "dark-gradient": "linear-gradient(180deg, #111827 0%, #071A35 100%)",
      },
      animation: {
        pulse_route: "pulse_route 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulse_route: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
