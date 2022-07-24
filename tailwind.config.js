/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      rotate: {
      },
      animation: {
        "spin-stopping": "spin infinite 2s ease-in-out",
      },
      boxShadow: {
        'key-small': '8px 8px 15px 15px rgba(0, 0, 0, 0.15)',
        'key-hover-small': '2px 2px 3px 3px rgba(0, 0, 0, 0.25)',
        'box-inner': 'inset 8px 8px 15px 15px rgba(0, 0, 0, 0.25)',
        'box-outer': '8px 8px 15px 15px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        "icon-color": "#324261",
        "back-blue": "#437C90",
        "back-white": "#F6F7EB",
        "text-yellow": "#ECA400",
        "accent-pink": "#F25F5C",
        "accent-purple": "#8F6593",
        "accent-green": "#84732B",
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
  safelist: [
  ],
  plugins: [],
}


