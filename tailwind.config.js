/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '',
        tertiary: '',
        accent: '',
        danger: 'red',
        success: 'green',
        warning: 'yellow',
        info: 'blue',
        transparent: 'transparent',
      },
      spacing: {
        4.5: '1.125rem',
        zIndex: {
          999999: '999999',
          99999: '99999',
          9999: '9999',
          999: '999',
          99: '99',
          9: '9',
          1: '1',
        },
        boxShadow: {
          default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
          card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
          'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
          switcher:
            '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
          'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
          1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
          2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
          3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
          4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
          5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
          6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
          7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
          8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
        },
        dropShadow: {
          1: '0px 1px 0px #E2E8F0',
          2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        },
        keyframes: {
          rotating: {
            '0%, 100%': { transform: 'rotate(360deg)' },
            '50%': { transform: 'rotate(0deg)' },
          },
        },
        animation: {
          'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
          rotating: 'rotating 30s linear infinite',
          'spin-1.5': 'spin 1.5s linear infinite',
          'spin-2': 'spin 2s linear infinite',
          'spin-3': 'spin 3s linear infinite',
        },
      },
    },
    fontFamily: {
      inter: ['inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      'xsm': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

