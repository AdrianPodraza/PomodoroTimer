/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kumbh-sans": ['"Kumbh Sans"', "sans-serif"],
        "roboto-slab": ['"Roboto Slab"', "serif"],
        "space-mono": ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
