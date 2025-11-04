/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg4: "url('/src/images/bg 4.png')",
        bg1: "url('/src/images/bg1.png')",
        bg2: "url('/src/images/bg2.png')",
        bg3: "url('/src/images/background image-Recovered.png')",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto"],
        heading: ["Poppins", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
