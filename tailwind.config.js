/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFCC00', // Define your custom color
      },
      fontFamily: {
        raleway: ['Raleway', 'serif'], // Add Raleway to your theme
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this!
  },
}

