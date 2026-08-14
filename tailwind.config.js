/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--display-font)"],
        body: ["var(--body-font)"],
        mono: ["var(--mono-font)"],
      },
      colors: {
        ink: "var(--c-black)",
        paper: "var(--c-white)",
        accent: "var(--accent)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.25, 0.74, 0.22, 0.99)",
      },
    },
  },
  plugins: [],
};
