/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm':'640px',
      'md':'768px',
      'xl':'1280px',
    }
  },
  plugins: [],
  important:true,
}

