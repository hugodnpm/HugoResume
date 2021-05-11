module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {
      colors: {
        bluePale: "rgba(66, 153, 225, var(--bg-opacity))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
