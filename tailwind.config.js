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
      'phone-pro': '420px',
      'phone': '385px',
      'smallphone': {'max': '375px'},
    },
    
    },
  },
  plugins: [],
}

