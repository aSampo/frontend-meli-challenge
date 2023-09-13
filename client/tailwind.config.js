/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meli-yellow': '#fff159',
        'meli-blue': '#3483fa',
        'meli-dark-blue': '#3568c8',
        'meli-grey': '#eeeeee'
      },
      fontFamily: {
        proxima: ['Proxima Nova', 'sans'],
      },
    },
  },
  plugins: [],
}

