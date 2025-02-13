/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B6BFB",
        secondary: "#7B92B2",
        accent: "#67CBA0",
        background: "#F8FAFC",
        textPrimary: "#1E293B",
        textSecondary: "#64748B",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
