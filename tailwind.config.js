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
        primary: {
          DEFAULT: "#E6E6E6",
          disabled: "#838383",
        },
        dark: "#222222",
        purple: {
          light: "#D9C8EF",
          dark: "#9F57FC",
        },
        text: {
          placeholder: "#B9B9B9",
        },
        action: "#C5C5C5",
        danger: "#FF4E6E",
      },
    },
  },
  plugins: [],
};
