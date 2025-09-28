module.exports = {
 content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        something: "black",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
