import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "#252734",
      },
      textColor: {
        "nav-gray": "#AFB2B9",
        "text-gray": "#D4D5D7",
      },
      colors: {
        "purple-accent": "#9390FF",
        "light-white": "#FEFEFE",
      },
      screens: {
        lg: "1080px",
        "2xl": "1450px",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
export default config;
