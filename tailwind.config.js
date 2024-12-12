/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '64': '64px',
        '48': '48px',
        '32': '32px',
        '30': '30px',
        '28': '28px',
        '22': '22px',
      },
      colors: {
        orange: '#DE7D0D',
        red: '#C61D21',
        darkRed: '#600E10',
        gradients: {
          radial: 'radial-gradient(circle, #C61D21 0%, #AA191C 27%, #600E10 100%)',
          linear: 'linear-gradient(0deg, #C61D21 0%, #600E10 100%)',
          radialAlt: 'radial-gradient(circle, #C61D21 0%, #600E10 100%)',
        },
      },
    },
  },
  plugins: [],
}

