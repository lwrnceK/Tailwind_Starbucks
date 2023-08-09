/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'fwhite-light':'rgb(241,248,245)',
        'fwhite-dark':'rgb(212,233,226)',
        'berde':'#006341',
        'berde2': '#d4e9e2',
        'cream': '#F2F0EB'
      },
      backgroundImage:{
        'star':"url('../img/img/rewards/star.png')",
        'graffiti': "url('../img/graffiti.webp')"
      }
    },
  },
  plugins: [],
}

