/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.625rem",
      sm: "0.75rem",
      md: "0.8125rem",
      base: "0.875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "3rem",
      "8xl": "4rem",
      "9xl": "6rem",
      "10xl": "8rem",
    },

    flex: {
      0: "0 0 auto",
    },

    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },

      screens: {
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1440px",
      },

      colors: {
        "gt-main-green": {
          900: "#122C13",
          800: "#225123",
          700: "#327834",
          600: "#3B8E3D",
          500: "#44A347",
          400: "#4AB24E",
          300: "#56CA5A",
          200: "#5AE75F",
          100: "#8CDF8F",
          50: "#C2F3C3",
        },
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};