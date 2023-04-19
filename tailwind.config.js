/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-primary)",
      secondary: "var(--font-secondary)",
      alternate: "var(--font-alternate)",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#E6E6E6",
          disabled: "#838383",
          alpha: "#1D1D1FB2",
          beta: "#86868B",
        },
        light: {
          DEFAULT: "#FFFFFF",
          alternate: "#FAFAFA",
        },
        dark: { DEFAULT: "#222222", alternate: "#29281B" },
        purple: {
          light: "#D9C8EF",
          dark: "#9F57FC",
        },
        text: {
          placeholder: "#B9B9B9",
        },
        action: "#C5C5C5",
        danger: "#FF4E6E",
        chip: {
          light: "#E8FFCB",
          dark: "#373737",
          yellow: "rgba(255, 232, 23, 0.7)",
          blue: "rgba(44, 90, 255, 0.7)",
        },
      },
      fontSize: {
        h2: ["34px", { letterSpacing: "0.02em", lineHeight: "124%" }],
        h3: ["24px", { letterSpacing: "0.02em", lineHeight: "124%" }],
        h4: ["19px", { letterSpacing: "0.02em", lineHeight: "124%" }],
        body1: ["19px", { letterSpacing: "0.03em", lineHeight: "120%" }],
        body2: ["17px", { letterSpacing: "0.02em", lineHeight: "21px" }],
        body3: ["17px", { letterSpacing: "0.02em", lineHeight: "130%" }],
        body4: ["16px", { letterSpacing: "0.02em", lineHeight: "19px" }],
      },
      boxShadow: {
        textCard: "0px 4px 45px rgba(0, 0, 0, 0.1)",
        dropDown: "0px 4px 45px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
