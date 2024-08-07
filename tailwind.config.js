/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      },
      colors: {
        'gradient-start': '#007BFF', // Custom color 1
        'gradient-end': '#0056B3', // Custom color 2
      },
    },
  },
  plugins: [],
}