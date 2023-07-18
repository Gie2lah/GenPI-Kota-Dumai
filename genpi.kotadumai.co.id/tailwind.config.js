/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quick: ["var(--font-quick)", ...fontFamily.serif],
        cinzel: ["var(--font-cinzel)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#ecf8ff",
          100: "#d5eeff",
          200: "#b4e3ff",
          300: "#81d4ff",
          500: "#1b96ff",
          600: "#0375ff",
          700: "#005ef8",
          400: "#45b9ff",
          800: "#054bc8",
          900: "#0a3b8a",
          950: "#0c295f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
