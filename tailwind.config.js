/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        maxWidth: {
          'content': '72rem',   // 1152px, 원하는 값으로 지정
        },
        keyframes: {
          "slide-up": {
            "0%": { transform: "translateY(100%)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
        },
        animation: {
          "slide-up": "slide-up 0.3s ease-out",
        },
      },
    },
    plugins: [],
  }
  