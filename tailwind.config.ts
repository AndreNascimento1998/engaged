/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px",
      "4xl": "2560px",
      "5xl": "3000px",
    },
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
