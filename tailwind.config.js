const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '430px',
        lg: '1440px'
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        raleway: ['Raleway', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        slate: {
          DEFAULT: '#EAFAFE'
        },
        gray: {
          DEFAULT: '#808080',
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          150: '#F6F6F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828'
        },
        orange: {
          DEFAULT: '#FF5613'
        },
        purple: {
          DEFAULT: '#4B69FD'
        }
      },
      boxShadow: {
        xs: '0px 0px 0px 0px rgba(0, 0, 0, 1)',
        lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
      },
      lineHeight: {
        12: '3rem'
      }
    }
  },
  plugins: []
}
