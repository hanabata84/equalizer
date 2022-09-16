/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#FBFAF8',
        primePurple: '#191826',
        primeOrange: '#FA7353'
      },
      backgroundImage: {
        bgBlur: "url('./assets/BG_blur_circles.png')",
        bgShape: "url('./assets/BG_shapes.png')",
        bgShapeLg: "url('./assets/BG_shapes_lg.png')",
        bgShapeXl: "url('./assets/BG_shapes_xl.png')",
        bgSmCard: "url('./assets/card_phone.png')",
        bgLgCard: "url('./assets/card_phone_ipad.png')",
        bgXlCard: "url('./assets/card_phone_desktop.png')"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
