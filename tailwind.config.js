/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#ABC270',
          accent: '#FEC868',
          secondary: '#FDA769',
          bg: '#473C33',
        },
        light: {
          primary: '#FFE14E',
          accent: '#192853',
          secondary: '#EFF8FF',
        },
      },
    },
  },
  plugins: [],
};
