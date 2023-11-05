/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-sky": "#13b5ea",
        "color-gray": "#656c6c",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
