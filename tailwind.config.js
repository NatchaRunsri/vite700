/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: '#2A2F4F',
        primaryContent: '#B692C2',
        primarySubcontent: '#674188',
        primaryBase: '#F4CCE9',
        primaryAccent: '#E3A5C7',
        primaryBg: '#FFF2F2',
      }
    },
  },
  plugins: [],
}

