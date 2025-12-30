import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#f8fbfd",
          100: "#eef6fb",
          200: "#d9ecf7",
          300: "#bcdcf1",
          400: "#9bc7e6",
          500: "#7fb2da", // main accent (very soft)
          600: "#689ac5",
          700: "#547fa6",
          800: "#466889",
          900: "#3c5771",
        },
        neutral: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        serif: ["var(--font-geist-serif)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

