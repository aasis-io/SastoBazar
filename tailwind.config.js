/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "dark-acc": "#272d3e",
        "piction": "#03AEC6",
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
