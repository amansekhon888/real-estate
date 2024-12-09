/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", // Use the CSS variable here
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
    },
  },
  plugins: [],
};
