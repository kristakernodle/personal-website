module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    colors: {

      customBlue: {
        DEFAULT: '#126cb2',
      },

      customWhite: {
        DEFAULT: '#ffffff'
      },

      customBlack: {
        DEFAULT: '#041d2f'
      },

      customGrey: {
        dark: '#707070',
        light: '#c8c8c8'
      }

    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
