import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
     brand: {
  50:  "#f4f6ff",
  100: "#e1e5ff",
  200: "#c2caff",
  300: "#9daeff",
  400: "#708eff",
  500: "#455EFC", // Màu chính bạn yêu cầu
  600: "#3549d6",
  700: "#2a3bb3",
  800: "#1f2e8f",
  900: "#151f66",
},

      },
    },
  },
} satisfies Config;

export default config;
