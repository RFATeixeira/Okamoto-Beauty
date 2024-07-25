/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      emphasis: ["Italiana", "sans-serif"],
      body: ["Nobile", "sans-serif"],
      buttons: ["Outfit", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('../src/images/hero-image.png')",
      },
      colors: {
        "brand-pink": "#E9646F",
        "brand-pink-10": "#FF909A",
        "brand-pink-20": "#D3777F",
        "brand-blue": "#4285F4",
        "dark-10": "#423838",
        "dark-20": "#9A9A9A",
        "light-10": "#F8F8F8",
      },
    },
  },
  plugins: [],
};
