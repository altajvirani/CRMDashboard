/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      qanelasthin: ["Qanelas-Thin", "sans-serif"],
      qanelasultralight: ["Qanelas-Ultra-Light", "sans-serif"],
      qanelaslight: ["Qanelas-Light", "sans-serif"],
      qanelasregular: ["Qanelas-Regular", "sans-serif"],
      qanelasmedium: ["Qanelas-Medium", "sans-serif"],
      qanelassemibold: ["Qanelas-Semi-Bold", "sans-serif"],
      qanelasbold: ["Qanelas-Bold", "sans-serif"],
      qanelasextrabold: ["Qanelas-Extra-Bold", "sans-serif"],
      qanelasheavy: ["Qanelas-Heavy", "sans-serif"],
      qanelasblack: ["Qanelas-Black", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
