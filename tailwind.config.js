const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        'maxW': {'max': '35em'},
        // => @media (max-width: 1535px) { ... }

        sm: '640px',
        // => @media (min-width: 640 px) { ... }
    
        md: '768px',
        // => @media (min-width: 768 px) { ... }
    
        lg: '1024px',
        // => @media (min-width: 1024 px) { ... }
    
        xl: '1280px',
        // => @media (min-width: 1280 px) { ... }
    
        '2xl': '1536px',
        // => @media (min-width: 640 px) { ... }
      },
      extend: {
          keyframes: {
            neon_glow: {

            }
          },
          animation: {
            neon_glow: 'wiggle 1s ease-in out infinate'
          },
          fontFamily: {
            alt: ['Poppins'],
            body: ['Pacifico, cursive'],
            rob: ['Roboto']
          },
          colors: {
            primary: '#04d9ff',
            miami: '#0BD3D3',
            vice: '#FF44CC'
          },
          boxShadow: {
            'blueGlow' : '0 0 .5em 0 #04d9ff',
            'brightGlow' : '0 0 1em .5em #04d9ff',
            'pinkGlow' : '0 0 1em 0 #FF44CC',
            'brightPinkGlow' : '0 0 1em .5em #FF44CC',
          },
          textShadow: {
            'white' : '0 0 1em hsl(0 0% 100% / 0.5)',
            'blue' : '0 0 1em #04d9ff',
            'brightBlue': '0 0 1em #04d9ff',
            'pink' : '0 0 .5em #FF44CC',
          },
          gridTemplateColumns: {
            'custom': '1fr 1fr 1fr 1fr 1fr'
          }
      },
  },
  plugins: [require('tailwindcss-textshadow')],
}
