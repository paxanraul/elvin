import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paper-black base — the dark of the room
        paper: {
          DEFAULT: "#070707",
          900: "#070707",
          800: "#0c0c0d",
          700: "#141416",
          600: "#1c1c1f",
        },
        // Off-white — projector light
        bone: {
          DEFAULT: "#EDEAE3",
          muted: "#8c877d",
          dim: "#55524b",
        },
        // Gold accent — premium, warm, used on CTAs and highlights
        signal: {
          DEFAULT: "#C9A84C",
          deep: "#9C7A28",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        ultrawide: "0.4em",
      },
      maxWidth: {
        shell: "1600px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
