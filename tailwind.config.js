/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core backgrounds
        bg: {
          primary:   "#0A0A0A",
          secondary: "#111111",
          tertiary:  "#161616",
        },
        // Borders
        border: {
          DEFAULT: "#27272A",
          subtle:  "#1F1F23",
          strong:  "#3F3F46",
        },
        // Text
        text: {
          primary:   "#FFFFFF",
          secondary: "#A1A1AA",
          tertiary:  "#71717A",
        },
        // Accent — Blue
        accent: {
          DEFAULT: "#3B82F6",
          hover:   "#2563EB",
          muted:   "#1D4ED8",
          subtle:  "#1E3A5F",
          glow:    "rgba(59,130,246,0.15)",
        },
      },

      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        body:    ["'Inter'",         "sans-serif"],
        mono:    ["'JetBrains Mono'","'Fira Code'", "monospace"],
      },

      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },

      spacing: {
        "18":  "4.5rem",
        "22":  "5.5rem",
        "88":  "22rem",
        "112": "28rem",
        "128": "32rem",
      },

      maxWidth: {
        "8xl": "88rem",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      backgroundImage: {
        // Subtle noise/grain — used for hero section depth
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        // Gradient utilities
        "gradient-radial":         "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-at-t":    "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "gradient-radial-at-b":    "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "gradient-radial-at-tl":   "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
      },

      animation: {
        "fade-in":       "fadeIn 0.6s ease forwards",
        "fade-up":       "fadeUp 0.6s ease forwards",
        "slide-in-left": "slideInLeft 0.5s ease forwards",
        "pulse-slow":    "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":         "float 6s ease-in-out infinite",
        "shimmer":       "shimmer 2.5s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },

      boxShadow: {
        "glow-sm":  "0 0 10px rgba(59,130,246,0.15)",
        "glow-md":  "0 0 24px rgba(59,130,246,0.2)",
        "glow-lg":  "0 0 48px rgba(59,130,246,0.25)",
        "card":     "0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)",
        "card-hover":"0 2px 8px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.4)",
        "inner-top":"inset 0 1px 0 rgba(255,255,255,0.06)",
      },

      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        "400": "400ms",
      },

      screens: {
        "xs": "480px",
      },
    },
  },
  plugins: [],
};