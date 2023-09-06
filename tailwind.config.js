/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-cyan": "hsl(180, 66%, 49%)",
        'dark-gray': 'hsl(257, 7%, 63%)',
        'dark-violet' : 'hsl(257, 27%, 26%)',
      }
    },
  },
  plugins: [],
}