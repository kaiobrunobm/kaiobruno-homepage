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
        background: "#040302",
        text: "#f4f2e6",
        primary: "#aee78d",
        secondary: "#1c1217",
        accent: "#a3aec8",
      },
    },
  },
  plugins: [],
};
