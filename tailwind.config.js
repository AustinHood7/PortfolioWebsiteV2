const { url } = require('inspector');
const { readBuilderProgram } = require('typescript');

function dynamicHsl(h, s, l) {
  return ({ opacityVariable, opacityValue }) => {
      if (opacityValue !== undefined) {
          return `hsla(${h}, ${s}, ${l}, ${opacityValue})`
      }
      if (opacityVariable !== undefined) {
          return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`
      }
      return `hsl(${h}, ${s}, ${l})`
  }
}

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
            body: ['Poppins'],
            body2: ['Pacifico, cursive'],
            body0: ['Red Hat Display'],
            body1: ['Roboto']
          },
          colors: {
            primary: '#04d9ff',
            miami: '#0BD3D3',
            vice: '#FF44CC',
            normal: 'hsl(23,13%,33%)',
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
            'brightPink' : '0 0 1em #FF44CC'
          },
          gridTemplateColumns: {
            'custom': '1fr 1fr 1fr 1fr 1fr 1fr'
          },
          backgroundImage: {
          }
      },
  },
  plugins: [require('tailwindcss-textshadow')],
}
