/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { body: "var(--font-prostoOne)" },
    extend: {
      colors: {
        primary: "#E6E6E6",
        primaryDisabled: "#838383",
        dark: "#222222",
      },
    },
  },
  plugins: [],
};
