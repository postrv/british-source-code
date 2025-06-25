/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'british-racing-green': '#004225',
        'union-jack-red': '#CF142B',
        'union-jack-blue': '#00247D',
        'british-grey': '#6c757d',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'mono': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
} 