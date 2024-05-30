/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
