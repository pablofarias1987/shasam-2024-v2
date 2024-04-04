/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","node_modules/keep-react/**/*.{js,jsx,ts,tsx}"],
  presets: [keepPreset],
  theme: {
    extend: {
      fontSize: {
        normal: "var(--text-normal)",
      },
      colors: {
        main: "var(--text-main-color)",
        "genoa" : "#128260",
        "codgray" : "#1E1E1E",
        "red-orange" : "#FF4538",
      },
      backgroundColor: {
        footer: "var(--footer-background)",
      },
      fontFamily: {
        main: ["var(--main-font)", "sans-serif"],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
