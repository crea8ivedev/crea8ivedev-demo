/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e60a54",
        lightBlue: {
          100: "#faf9f5",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".main-container-root": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%",
            margin: "auto",
          },
          "@screen md": {
            maxWidth: "740px",
            margin: "auto",
          },
          "@screen lg": {
            maxWidth: "940px",
            margin: "auto",
          },
          "@screen xl": {
            maxWidth: "1140px",
            margin: "auto",
          },
          "@screen 2xl": {
            maxWidth: "1440px",
            margin: "auto",
          },
        },

        ".container-xl": {
          maxWidth: "100%",
          "@screen 2xl": {
            maxWidth: "1440px",
            margin: "auto",
          },
          "@screen xl": {
            maxWidth: "1280px",
            margin: "auto",
          },
          "@screen lg": {
            maxWidth: "940px",
            margin: "auto",
          },
          "@screen md": {
            maxWidth: "720px",
            margin: "auto",
          },
          "@screen sm": {
            maxWidth: "600px",
            margin: "auto",
          },
        },
      });
    },
  ],
};
