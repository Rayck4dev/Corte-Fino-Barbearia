/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#fcd34d",
          DEFAULT: "#f59e0b",
          dark: "#b45309",
        },
        base: {
          bg: "#09090b",
          card: "#18181b",
          border: "#27272a",
        },
      },
    },
  },
  plugins: [],
};
