import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#050816",
        ink: "#0B1120",
        panel: "#111827",
        cyan: "#00F5FF",
        violet: "#7C3AED",
        mint: "#00FFA3",
        sky: "#38BDF8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 32px rgba(0, 245, 255, 0.25)",
        violet: "0 0 36px rgba(124, 58, 237, 0.28)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(0,245,255,0.12) 0, transparent 28%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
