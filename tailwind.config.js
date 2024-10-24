/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dispaly:['Cinzel'],
        body:['Poppins']
      },
      colors : {
        back:'#000'
      }
    },
  },
  plugins: [],
}

