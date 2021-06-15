module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      sans: ["Rubik", "sans-serif"],
      colors: {
        "las-black": "#0B132A",
        "las-gray": "#4F5665",
        "las-orange": "#F53855",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
