/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      neutral: {
        100: "rgb(21, 22, 25)",
        200: "rgb(29, 31, 34)",
        300: "rgb(43, 45, 49)",
        400: "rgb(53, 57, 63)",
        500: "rgb(90, 96, 105)",
        600: "rgb(124, 129, 135)",
        700: "rgb(193, 196, 203)",
        800: "rgb(228, 228, 228)",
        900: "rgb(245, 245, 245)",
      },
      primary: {
        100: "rgb(228, 102, 67)",
        200: "rgb(243, 151, 101)",
      },
      white: "rgb(255, 255, 255)",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
