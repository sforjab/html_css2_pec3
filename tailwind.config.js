/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        /* 'txt-orange': 'rgb(245, 157, 35)', */
        'border-orange': 'rgb(218,165,32)',
        'title-blue': 'rgb(61, 131, 164)',
        'label-blue': 'rgb(0, 89, 152)',
        'footer-links': 'rgb(13,110,253)',
        'footer-links-hover': 'rgb(10,88,202)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 
               '"Helvetica Neue"', 'Arial', 'sans-serif', 
               '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      },
    },
  },
  plugins: [],
}

