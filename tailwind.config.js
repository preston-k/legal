/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        source: ['var(--font-source)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#3b82f6',
        /* Off-black: pure #000 reads as a hole on OLED and kills the sense of depth. */
        ink: '#0c0c0e',
        surface: '#141417',
        edge: '#232327',
      },
    },
  },
  plugins: [],
}
