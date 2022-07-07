/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      animation: {
        "spin-stopping": "spin infinite 2s ease-in-out",
      },
      boxShadow: {
        'key': '10px 10px 15px 10px rgba(0, 0, 0, 0.3)',
        'key-hover': '4px 4px 5px 5px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        "icon-color": "#324261",
      },
      flexBasis:{
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      width:{
        '7/8': '87.5%',
      }
    },
  },
  plugins: [],
}
