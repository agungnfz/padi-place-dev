
module.exports = {
  purge: {},
  content: [
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
        'process-prev': '#FFF0CC',
        'verifikasi': '#E2FFEF',
        'revisi': '#FFD9E7',
        'draft': '#EFEFF6',
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
      divideWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms') ({
      strategy: 'base',
      strategy: 'class',
    }),
  ],
};
