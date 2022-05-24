module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(180deg,rgba(103,141,37,.56) 0%,#000 100%), url('/hero.jpeg')",
      },
    },
  },
  plugins: [],
};
