/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
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
            body: ['Poppins']
          }
      },
  },
  plugins: [],
}
