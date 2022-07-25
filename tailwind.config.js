const rem = (num) => ({ [num]: `${num / 16}rem` });

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      phone: "320px",
      phoneLandscape: "480px",
      tablet: "768px",
      desktop: "1025px",
      large: "1260px",
      xl: "1440px",
    },
  },
  plugins: [],
};
