import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "General Sans", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#09090B",
        panel: "#18181B",
        line: "#27272A",
        accent: "#3B82F6",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(59,130,246,.25)",
        soft: "0 20px 70px rgba(15,23,42,.10)",
      },
    },
  },
  plugins: [],
};
export default config;
