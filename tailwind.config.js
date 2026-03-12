/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ─── Brand Colors (customize here) ─── */
      colors: {
        primary: {
          DEFAULT: "#C71585",     // Medium Violet Red
          light: "#D94DA0",
          dark: "#A01070",
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#C71585",
          600: "#A01070",
          700: "#86105E",
          800: "#6D104D",
          900: "#5A103F",
        },
        secondary: {
          DEFAULT: "#F3E5F5",     // Soft Lavender
          light: "#F8F0FA",
          dark: "#E1BEE7",
        },
        accent: {
          gold: "#D4A017",
          "gold-light": "#F0D060",
          "gold-dark": "#B8860B",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
      /* ─── Typography ─── */
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      /* ─── Border Radius ─── */
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      /* ─── Box Shadow ─── */
      boxShadow: {
        soft: "0 4px 20px rgba(199, 21, 133, 0.08)",
        card: "0 8px 30px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 20px 40px rgba(199, 21, 133, 0.15)",
        glow: "0 0 40px rgba(199, 21, 133, 0.2)",
      },
      /* ─── Animations ─── */
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(5deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-15px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-10px)" },
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(40px) rotate(-360deg)" },
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "wave": {
          "0%, 100%": { transform: "translateY(0) scaleY(1)" },
          "25%": { transform: "translateY(-8px) scaleY(1.1)" },
          "75%": { transform: "translateY(4px) scaleY(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-reverse": "float-reverse 7s ease-in-out infinite",
        blob: "blob 7s infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        orbit: "orbit 12s linear infinite",
        morph: "morph 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        wave: "wave 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
