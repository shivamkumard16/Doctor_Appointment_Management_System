/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ double asterisk means recursively include all subfolders
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f6FFF',
      },
    },
  },
  plugins: [],
};
