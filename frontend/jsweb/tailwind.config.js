/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-bg': '#F1F7F5',
        'alt-bg': '#B5D2C1',
        'main-fg': '#000000',
        'alt-fg': '#0A2718',

      },
      fontFamily: {
        lora: 'var(--font-lora)',
        quattrocento: 'var(--font-quattrocento)',
        inter: 'var(--font-inter)',
      }
    },
  },
  plugins: [],
}
