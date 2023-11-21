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
      'tablet': '790px',
      'phone-pro': '420px',
      'phone': {'max':'395px'},
      'smallphone': {'max': '375px'},
    },
    fontSize: {
      "2xs": ".7rem",
    }
    },
  },
  plugins: [],
}

