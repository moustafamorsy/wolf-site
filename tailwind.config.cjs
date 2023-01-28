/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens:{
      sm:'320px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      width: {
        '128': '40rem',
        '1064': '66.5rem',
      },
      height:{
        '108': '28rem',
      },
      colors:{
        darkblue: '#054970',
        lightblue: '#2C7FAF',
        borderColor:'#317ACF',
        bg:'#365C7E',
        text:'#054970',
        first: '#5B8DD9',
        second:'#61C4CA',
        gray: '#817F7F',
        line:'#03A3FF',
      }
    },
  },
  plugins: [],
}