/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clay': {
          100: '#f5e6d3',
          200: '#e0d1c1',
          300: '#d7c0ae',
          400: '#c1a28e',
          500: '#8c7a6b',
          600: '#6b5a4c',
          700: '#4a3728',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}