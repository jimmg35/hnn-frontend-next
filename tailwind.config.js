/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'light': '#63ccff',
          'main': '#009be5',
          'dark': '#006db3',
        },
        'border': '#0000003b'
      }
    }
  },
  plugins: []
}
