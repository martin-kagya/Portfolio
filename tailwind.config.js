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
    screens: {
      'tablet': '768px',
      'phone': '480px',
      'smallphone': '320px',
    }
    },
  },
  plugins: [],
}

