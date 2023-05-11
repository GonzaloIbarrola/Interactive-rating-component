/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' : 'Overpass'
    },
    colors: {
      'Dark-blue' : '#262E38',
      'Light-grey' : '#969FAD',
      'Medium-gray' : '#7C8798',
      'Pure-white' : '#FFFFFF',
      'Orange' : '#FC7614',
      'Very-dark-blue' : '#131518'
    },
    extend: {},
  },
  plugins: [],
}

