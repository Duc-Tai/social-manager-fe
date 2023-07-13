/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "./node_modules/flowbite/**/*.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
