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
        background: "var(--background)",
        foreground: "var(--foreground)",
         whiteHex: '#FFFFFF',
         color:'#151875',
         bg:"#F7F7F7",
         banner:"#F1F0FF",
         para:'#ACABC3',
         back:"#F5F6F8",
      },
    },
  },
  plugins: [],
};
export default config;
