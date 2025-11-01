import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        screen: '#F3F6F8',
        primary: '#29BFC0',
        secondary: '#F2994A',
        dark: '#2C4364',
        grey: '#969FAB',
        error: '#ED6161',
        white: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Poppins', 'Noto Sans JP', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config


