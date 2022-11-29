
module.exports = {
  purge: {},
  content: [
    "./**/*.{html,js}",
    // "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    theme: {
      fontSize: {
        ssm: '12px',
        sm: '13px',
        base: '14px',
        md: '16px',
        lg: '18px',
        xl:'20px',
        xxl: '24px',
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blk-padi': '#131221',
        'light-blue-padi': '#E4FFF5',
        'pink': '#ff49db',
        'orange-padi': '#ff7849',
        'yellow-padi': '#FBBE34',
        'red-padi': '#FF4545',
        'green-padi': '#32B687',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'blue-shade': {
          50: '#F7F7FC',
          100: '#F5F5F9',
          200: '#EFEFF6',
          300: '#DFDEED',
          400: '#CFCEE3',
          500: '#B4B3C7',
          600: '#5E5CA3',
          700: '#393762',
          800: '#282745',
          900: '#1C1C31',
        }
      },
      fontFamily: {
        'sans': ['Source Sans Pro'],
        'serif': ['Source Sans Pro'],
        'body': ['Source Sans Pro'],
      },
    },
  },
  variants: {},
  plugins: [],
};
