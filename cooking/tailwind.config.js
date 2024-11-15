/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero:"url('./src/assets/images/lap-Back.png')",
        hero1:"url('./assets/images/cloud-sky-sunlight-wind-tower-chimney-1383351-pxhere.com.jpg')"
      },
      colors:{
        black0e:'#0e0e0e',
          "black/20": "rgba(0, 0, 0, 0.2)",
          "white/20": "rgba(255, 255, 255, 0.2)",
      
      },
      fontFamily: {
        display: 'Orbitron, ui-serif', // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}

