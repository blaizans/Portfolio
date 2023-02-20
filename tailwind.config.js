/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl':'0 15px 35px rgba(0, 255, 255, 0.5)',
        '2xl':'0 15px 65px rgba(0, 255, 255, 1)'
      }
    },
  },
  plugins: [],

  
}
