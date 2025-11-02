/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a0a0f",
        "card-bg": "#131320",
        "neon-pink": "#ff1b6b",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(45deg, #0a0a0f, #1a1a2f)",
      },
      height: {
        112: "28rem", // Adds h-112 for 28rem
      },
    },
  },
  plugins: [],
};
