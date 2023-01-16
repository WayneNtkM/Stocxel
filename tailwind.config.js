module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      variants: {
        // animation: ["motion-safe"]
      },
      // animation: {
      //   fadeIn: "fadeIn 2s ease-in forwards"
      // },
      // keyframes: {
      //   fadeIn: {
      //     "0%": { opacity: 0 },
      //     "100%": { opacity: 1 }
      //   }
      // }
    }
  },
  plugins: [],
}