/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#20252C",
        textLight: "#fafafa",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
