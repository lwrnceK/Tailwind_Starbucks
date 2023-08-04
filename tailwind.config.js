/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'fwhite-light':'rgb(241,248,245)',
        'fwhite-dark':'rgb(212,233,226)'
      }
    },
  },
  plugins: [],
}

