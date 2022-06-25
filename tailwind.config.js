/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'bgsecond': '#E5FDE3',
        'white': '#fff',
        'btn': '#E8DF00',
        'btn-hover': '#eab308',
        'darkmode': '#1D1E20'
      },
      fontFamily: {
        actay: ["actay", "sans-serif"],
        actayBold: ["actayBold", "sans-serif"],
        rosie: ["Rosie", "sans-serif"],
        lemurmure: ["LeMurmure", "sans"],
        smile: ["Smile", "sans"]
      },
      screens: {
        '2xl': '1320px'
      },
      boxShadow: {
        'classic': '20px 20px rgb(232, 223, 0)',
        'classicHover': '20px 20px rgb(229, 253, 227)',
      }
    },
  },
  plugins: [],
};