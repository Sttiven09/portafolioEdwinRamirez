/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Press':['Press Start 2P'],
      'Press':['Roboto'],

      
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}