module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "blue",
          secondary: "red",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
