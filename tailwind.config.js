/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", 
        primaryAccent: "var(--primary-accent)"
      },
      fontFamily: {
        sans: ['"InterVariable"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #C7E5FF, #EBF4FF)',
      },
      dropShadow: {
        'custom': "var(--custom-drop-shadow)", // Example custom drop shadow
      },
      screens: {
        // => @media (min-width: 1280px) { ... }
        'mobile': '320px',
        'mobile-lg': '425px',
        'tablet': '640px',
        'tablet-lg': '840px',
        'laptop': '1024px',
        'laptop-lg': '1248px',
        'laptop-xl': '1330px',
        'desktop': '1440px',
        'desktop-lg': '2000px',
      },
      fontSize: {
        para: 'var(--paragraph-size)', 
        heading: 'var(--heading-size)',
        subheading: 'var(--subheading-size)'
      },
    },
  },
  plugins: [],
};
