/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        tertiary: '#FFFFFF',
        light: '#FFFFFF',
        dark: '#000000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
