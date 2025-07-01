// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // adjust if needed
  theme: {
    extend: {
      fontFamily: {
        bitcount: ['"Bitcount Grid Double"', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
        satoshi: ['"Satoshi"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
