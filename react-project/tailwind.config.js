module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    '../websites/anima-terra.com/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',
        accent: '#f97316',
        muted: '#6b7280'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
