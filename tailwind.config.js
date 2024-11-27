/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: { //bg-dark-navy
        'dark-navy': '#000e23',
        'deep-teal': '#213951',
        'forest-green': '#3a6667',
        'jade': '#497d67',
        'golden': '#cc9900',
        'aqua': '#00c3b5',
        'misty-blue': '#b6c1d3',
        'cream': '#f6e5af',
        'light-navy-blue': '#0077C2',
        'lightblue': '#59a5f5',
        'bright-blue': '#00BFFF',
        'dark-navy-blue': '#00619a',
        'bright-green': '#86efac',
        'dark-green': '#19725d',
        'light-green': '#c6ffe6',
        'bright-yellow': '#f5be0b',
        'light-yellow': '#fef1c7',
        'bright-orange': '#FF6600',
        'light-orange': '#ff983f',
        'gold': '#ffd700',
      },
    },
  },
  plugins: [],
};
