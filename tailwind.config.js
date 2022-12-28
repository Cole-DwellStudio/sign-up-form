/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "app.js"],
  theme: {
    extend: {
      fontFamily: {
        Norse: ["Norse", "sans-serif"],
      },
      colors: {
        OdinGreen: "#596D48",
        OdinGreenDark: "#475739",
        OdinBorders: "#E5E7EB",
      },
      maxWidth: {
        "8xl": "90rem",
        xxs: "18rem",
      },
    },
  },
  plugins: [],
};
