


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:[{
    pattern : /text-(gold_c|blue_c|big_text)/,
    pattern : /bg-(label_bg|blue_c)/,

  }
  ],
  theme: {
    extend: {
      colors: {
        own_p: "#e64009",
        blue_c: "#000047",
        gold_c: "#8D700E",
        yellow_c: "#FBCA05",
        smoky_black :"#0C1A00",
        phthalo_green:"#0C311C",
        dark_bronze:"#3C5600",
        fafe_noir:"#4A3422",
        olive_drab:"#574F44",
        label_bg:"#F5F5F5"

      },
      fontFamily: {
        primary_font: ['var(--font-anek-kannada)'],
        secondary_font: ['var(--font-marcellus)'],
        anek_bangla_font: ['var(--font-anek-bangla)'],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      clipPath: {
        custom: "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)",
      },
    },
  },
  plugins: [],
};
