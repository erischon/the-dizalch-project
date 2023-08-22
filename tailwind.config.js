/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Kalam", "cursive"],
    },
    extend: {
      keyframes: {
        slideMeRightToLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(500px)",
          },

          "50%": {
            opacity: 0,
            transform: "translateX(250px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        slideMeLeftToRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-500px)",
          },

          "50%": {
            opacity: 0,
            transform: "translateX(-250px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        slideMeTopToBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(-500px)",
          },

          "50%": {
            opacity: 0,
            transform: "translateY(-250px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideMeBottomToTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(500px)",
          },

          "50%": {
            opacity: 0,
            transform: "translateY(250px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideMeRightToLeft: "slideMeRightToLeft 1.25s ease-out",
        slideMeLeftToRight: "slideMeLeftToRight 1.25s ease-out",
        slideMeTopToBottom: "slideMeTopToBottom 1.25s ease-out",
        slideMeBottomToTop: "slideMeBottomToTop 1.25s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
