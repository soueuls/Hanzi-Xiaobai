module.exports = {
  purge: false,
  theme: {
    extend: {},
    gradients: (theme) => ({
      indigo: [theme("colors.indigo.600"), theme("colors.indigo.800")],
    }),
    linearGradients: (theme) => ({
      colors: theme("gradients"),
    }),
    radialGradients: (theme) => ({
      colors: theme("gradients"),
    }),
    conicGradients: (theme) => ({
      colors: theme("gradients"),
    }),
  },
  variants: [
    "responsive",
    "first",
    "last",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [require("tailwindcss-gradients")()],
};
