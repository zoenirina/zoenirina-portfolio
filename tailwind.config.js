/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // ou "media" selon ton besoin
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09090b",
        background: "#09090b",
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite', // 4s = vitesse lente
      },
    },
  },
  plugins: [],
};
