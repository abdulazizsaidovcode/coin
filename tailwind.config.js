/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        profileColor: "#271E4A"
      },
      fontFamily: {
        inika: ["Inika", "serif"],
      },
    },
  },
  plugins: [],
}