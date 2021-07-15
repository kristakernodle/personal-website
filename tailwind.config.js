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
      },
      
      MichiganBlue: {
        DEFAULT: '#041e42'
      }

    },

    extend: {
      borderRadius: {
        '4x': '2.25rem',
        '5x': '4rem'
      },

      maxWidth: {
        '2xs': '13rem',
        '3xs': '10rem',
        '4xs': '7rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
