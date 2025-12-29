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
        // A calming earth-tone palette
        sage: {
          50: '#f4f7f5',
          100: '#e3ebe6',
          200: '#c5d9ce',
          500: '#6b9c7f', // Primary brand color
          700: '#4a6f58',
          900: '#2d4036',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          800: '#292524', // Main text color
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        serif: ['var(--font-geist-serif)', 'serif'], // Good for headers
      },
    },
  },
  plugins:,
};
export default config;
