/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1272px",
    },
    extend: {
      colors: {
        beige: "#DCC1AB",
        black: "#111",
        green: "#1B5B31",
        grey: "#F5F0EC",
      },
      fontFamily: {
        monserrat: [`var(--font-monserrat)`, "sans-serif"],
        inter: [`var(--font-inter)`, "sans-serif"],
      },
      dropShadow:{
        "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)"
      },
    },
  },
  variants:{
    extend:{
      display: ['group-focus']
    },
  },
  plugins: [],
};
