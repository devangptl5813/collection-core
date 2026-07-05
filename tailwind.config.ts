import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        danger: "hsl(var(--danger))",
        // Premium palette — emerald & cream
        ink: "#0c1a14",
        "ink-soft": "#10241b",
        cream: "#f5f0e6",
        champagne: {
          DEFAULT: "#7fd1ae",
          light: "#aef0d3",
          dark: "#4fa07d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(16, 24, 40, 0.08)",
        premium:
          "0 1px 1px rgba(0,0,0,0.03), 0 8px 24px -8px rgba(12,26,20,0.14), 0 30px 60px -30px rgba(12,26,20,0.18)",
        glow: "0 0 0 1px rgba(127,209,174,0.25), 0 20px 60px -20px rgba(127,209,174,0.35)",
      },
      backgroundImage: {
        "champagne-gradient":
          "linear-gradient(135deg, #aef0d3 0%, #7fd1ae 45%, #4fa07d 100%)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(127,209,174,0.16) 0%, rgba(12,26,20,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
