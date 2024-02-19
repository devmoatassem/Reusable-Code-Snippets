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
        brand: "rgba(var(--brand))",
        primaryBg: "rgba(var(--bg-primary))",
        secondaryBg: "rgba(var(--bg-secondary))",
        primaryText: "rgba(var(--text-primary))",
        secondaryText: "rgba(var(--text-secondary))",
      },
    },
  },
  plugins: [],
};
export default config;
