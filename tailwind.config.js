/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bg: "#18122B",
      button: "#BAD7E9",
      purple: "#635985",
      light: "#ECF2FF",
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
