/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        AlmostWhite: '#fafafa',
        MediumGray: '#696969',
        AlmostBlack: '#141414'
      }
    },
    fontFamily:{
      'Epilogue': ['Epilogue','sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class'
}

