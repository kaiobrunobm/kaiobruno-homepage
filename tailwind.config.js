/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-light-primary": "#CFCCCC",
        "light-primary": "#737373",
        primary: "#404040",
        "dark-primary": "#141314",
        "very-dark-primary": "#000000",
      },
    },
  },
  plugins: [],
};
