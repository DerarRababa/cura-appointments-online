const colors = require("tailwindcss/colors");

module.exports = {
  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components-private/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      teal: colors.teal,
      transparent: colors.transparent,
      blue: colors.blue,
      slate: colors.slate,
      red: colors.red,
      green: colors.green,
      orange: colors.orange,
    
      $gray: "#E1E1E1",
     
    },
    extend: {
      fontFamily: {
        sans: ["Dubai", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
        "padding-x": "padding-right;padding-left;",
      },
      borderWidth: {
        3: "3px",
        0.5: "0.5px",
        0.2: "0.2px",
      },
      screens: {
        "4xs": "321px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [
    // require("postcss-import"),
    // require("tailwindcss/nesting")(require("postcss-nesting")),
    // require("tailwindcss"),
    // require("autoprefixer"),
   // require("tailwind-scrollbar"),
   // require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("initial", "html :where(&)");
    },
  ],
  variants: {
    scrollbar: ["rounded"],
  },
  //mode: 'jit',
};
