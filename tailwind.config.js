/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lbxd-green': '#00b341',
        'lbxd-dark': '#181818',
        'lbxd-gray': '#222326',
        'lbxd-light': '#f5f5f1',
        'lbxd-accent': '#ffb700',
        'lbxd-blue': '#1c7ed6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
