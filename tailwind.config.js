/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-sky": "#13b5ea",
        "color-gray": "#656c6c",
        "color-gray-1": "#efefef",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
});
