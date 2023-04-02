/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'low-color': '#7A7171',
        'low-rose': '#F4F0FF',
        'low-dark': '#595252',
        'low-ligth': '#F7F6F5'
      }
    }
  },
  plugins: []
}
