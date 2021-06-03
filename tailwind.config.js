const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          md: '2rem',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
