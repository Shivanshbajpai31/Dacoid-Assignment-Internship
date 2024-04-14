/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcfc",
          "200": "#787878",
          "300": "#252727",
        },
        black1: "#000",
        white: "#fff",
        black: "#2c2b2b",
        cornflowerblue: {
          "100": "#9fb2ff",
          "200": "#93a9ff",
          "300": "#829dff",
          "400": "#819cff",
          "500": "#809aff",
        },
        "gray-100": "#808080",
        crimson: "#eb1754",
        "gray-50": "#f1f1f1",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "roboto-mono": "'Roboto Mono'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      mini: "15px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
