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
        'cream': '#F2F0EB',
        'fenk': '#EB81A5',
        'bayolet': '#8F8BF4',
        'ngima': '#F1FF67'

      },
      backgroundImage:{
        'star':"url('../img/img/rewards/star.png')",
        'graffiti': "url('../img/graffiti.webp')"
      }
    },
  },
  plugins: [],
}

