export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Arimo', 'sans-serif'],
    },
  },
},
  plugins: ["@tailwindcss/postcss"],
};