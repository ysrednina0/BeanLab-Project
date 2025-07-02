/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#434c59',
          800: '#343a46',
          900: '#212529',
        },
        accent: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#ede8dd',
          300: '#e1d9cb',
          400: '#d4c7b5',
          500: '#c7b49f',
          600: '#b8a189',
          700: '#a08d73',
          800: '#87795d',
          900: '#6e6547',
        }
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
};