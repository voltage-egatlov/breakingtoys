/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      animation:{
        'spin-stopping': 'spin infinite 2s ease-in-out'
      },
      colors:{
        'icon-color':'#324261'
      }
    },
  },
  plugins: [],
}
