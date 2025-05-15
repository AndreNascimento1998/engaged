/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        originalSurfer: ["Original Surfer", "cursive"],
      },
      colors: {
        "text-default": "#ffffff",
        "bg-default": "#040C2A",
        "text-card": "#333333",
      },
    },
  },
  plugins: [],
};
