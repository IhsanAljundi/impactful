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
      blue: "var(--blue)",
      gold: "var(--gold)",
      peach: "var(--peach)",
      pink: "var(--pink)",
      stone: "var(--stone)",
      turqoise: "var(--turqoise)",
      gray: {
        100: "var(--gray-100)",
        200: "var(--gray-200)",
        300: "var(--gray-300)",
        700: "var(--gray-700)",
        900: "var(--gray-900)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
