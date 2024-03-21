/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: colors.black,
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      slate: colors.slate,
      gray: colors.gray,
      neutral: colors.neutral,
      stone: colors.stone,
      green: colors.green,
      indigo: colors.indigo,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      sky: colors.sky,
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.amber,
      white: colors.white,
    },
    extend: {},
    fontFamily: {
      qanelasregular: ["Qanelas-Regular", "sans-serif"],
      qanelasmedium: ["Qanelas-Medium", "sans-serif"],
      qanelassemibold: ["Qanelas-Semi-Bold", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
