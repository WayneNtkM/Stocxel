module.exports = {
  mode: "jit",
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        "calc": "calc(350px * 9)"
      },
      variants: {
        animation: ["motion-safe"]
      },
      animation: {
        fadeIn: "fadeInUp 1s ease-in forwards",
        scale: "scale 2s",
        carousel: "carousel 40s linear infinite",
      },
    }
  },
  plugins: [],
}