/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        maxWidth: {
          'content': '72rem',   // 1152px, 원하는 값으로 지정
        },
      },
    },
    plugins: [],
  }
  