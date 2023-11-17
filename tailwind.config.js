/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      FontFamily: {
        'Roboto': ['"Roboto mono"', 'monospace']
      },
    },
  },
  plugins: [],
}

