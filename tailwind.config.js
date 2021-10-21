// const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './styles/**/*.{scss,css}',
    ],
    options: {
      safelist: [/data-theme$/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      gridAutoRows: {
        card: 'min-content 1fr min-content',
      },
      // fontFamily: {
      //   ...fontFamily,
      //   mono: ['Roboto', 'ui-sans-serif', 'system-ui'],
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
