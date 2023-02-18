/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cream': '#f2ebe3',
      'darkcyan': '#3c8067',
      'hoverdarkcyan': '#244032',
      'verydarkblue': '#1c232b',
      'darkgrayishblue': '#6c7289',
      'white': '#ffffff',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-sarif'],
      fraunces: ['Fraunces', 'sarif']
    },
    letterSpacing: {
      widest: '.5em'
    },
    extend: {},
  },
  plugins: [],
}
