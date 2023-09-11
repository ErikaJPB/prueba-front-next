import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Light Theme
        light: {
          primary: "#3498db",
          secondary: "#f39c12",
        },
        // Dark Theme
        dark: {
          primary: "#2c3e50",
          secondary: "#e74c3c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
