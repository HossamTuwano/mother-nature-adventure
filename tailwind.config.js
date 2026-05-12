/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "earth-tone": "#B39B83",
        "muted-grey": "#D1C9C0",
        "deep-charcoal": "#2B2B2B",
        "whatsapp-green": "#25D366",
      },
    },
  },
  plugins: [],
};
