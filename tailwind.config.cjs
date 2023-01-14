/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ms: "950px",
        ml: "1128px",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      colors: {
        brand: "#EAAC00"
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
