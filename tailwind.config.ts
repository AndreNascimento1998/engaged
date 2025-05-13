/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-default": "#040C2A",
      },
      colors: {
        "text-default": "#ffffff",
      },
    },
  },
  plugins: [],
};
