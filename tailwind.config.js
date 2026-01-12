/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cafe-primary': '#6B4423',
        'cafe-secondary': '#D2B48C',
        'cafe-accent': '#8B4513'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}