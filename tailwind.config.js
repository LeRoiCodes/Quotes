/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Add this line to scan React files
  ],
  theme: {
    extend: {
      fontFamily: {  
        sans: ['Satoshi', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}



