/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
    colors: {
      blue: "#52C3FF",
      gold: "#FFCB57",
      peach: "#FFDFD6",
      pink: "#FC77A0",
      stone: "#172239",
      turqoise: "#5AE2E2",
      gray: {
        100: "#F9F9F9",
        200: "#EAEAEA",
        300: "#D5D4D4",
        700: "#6D6D78",
        900: "#161616",
      },
    },
  },
  plugins: [],
};
