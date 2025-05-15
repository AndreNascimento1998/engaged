/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-default": "#ffffff",
        "bg-default": "#040C2A",
      },
    },
  },
  plugins: [],
};
