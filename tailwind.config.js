/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'darkblue': 'hsl(233, 26%, 24%)',
        'limegreen': 'hsl(136, 65%, 51%)',
        'brightcyan': 'hsl(192, 70%, 51%)',
        'grayishblue': 'hsl(233, 8%, 62%)',
        'lightgrayishblue': 'hsl(220, 16%, 96%)',
        'verylightgray': 'hsl(0, 0%, 98%)',
        'lightbox': 'rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

