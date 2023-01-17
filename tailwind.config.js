module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      variants: {
        animation: ["motion-safe"]
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        scale: "scale 2s"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: { translateY: '50%' } },
          "100%": { opacity: 0.8, transform: { translateY: 0 }  }
        },
        scale: {
          "0%": { opacity: 0, transform: { scale: 0.5 } },
          "100%": { opacity: 0, transform: { scale: 1 } }
        }
      },
      // media: {
      //   prefersReducedMotion: {
      //     fadeIn, scale: { animation: none }
      //   }
      // }
    }
  },
  plugins: [],
}