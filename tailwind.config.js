/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        darkAqua: "#00A79D",
        lightAqua: "#30EBD6",
        darkGray: "#363636",
        darkBlue: "#242F40",
      },
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
