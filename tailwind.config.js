/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
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
        "primary": "#ECEEFF",
        "coral-pink": "#FF908B",
        "light-coral-pink": "#FFF3F2",
        "apple-red": "#8D021F",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
};
