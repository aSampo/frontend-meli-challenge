/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#fff159',
        blue: '#3483fa',
        grey: '#eeeeee'
      },
      fontFamily: {
        proxima: ['Proxima Nova', 'sans'],
      },
    },
  },
  plugins: [],
}

