/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'title-blue': 'rgb(61, 131, 164)',
        'label-blue': 'rgb(0, 89, 152)',
        'border-orange': 'rgb(218,165,32)',
      },
    },
  },
  plugins: [],
}

