/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-light': '#BFC7CF',
        'brand-mid': '#3C82C1',
        'brand-dark': '#203A5A',
      },
    },
  },
  plugins: [],
}
