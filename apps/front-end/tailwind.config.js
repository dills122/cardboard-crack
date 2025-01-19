/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all Angular HTML and TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')]
}

