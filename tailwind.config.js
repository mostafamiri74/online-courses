/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      lineHeight: {
        12: "3rem",
      },
      wordSpacing: {
        1: "0.1rem",
        2: "0.2rem",
        3: "0.3rem",
        4: "0.4rem",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
  // purge: {
  //   enabled: true,
  //   content: [
  //     "./src/**/*.{html,ts}",

  //     "!./src/**/primeng-*.scss",
  //   ],
  // },
};
