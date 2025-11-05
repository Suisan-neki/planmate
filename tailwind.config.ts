import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

// Plugin: letter-spacing in percent like Figma (tracking-p-[0.2] => 0.002em)
const trackingPercent = plugin(({ matchUtilities }) => {
  matchUtilities(
    {
      'tracking-p': (value: string) => {
        const n = parseFloat(String(value).replace('%', ''))
        if (Number.isNaN(n)) return {}
        return { letterSpacing: `${n / 100}em` }
      },
    },
    { values: {}, supportsArbitraryValues: true },
  )
})

// Plugin: text shadow utility (text-shadow-sm|md|lg) for Figma effects
const textShadow = plugin(({ addUtilities }) => {
  addUtilities({
    '.text-shadow-sm': { textShadow: '0 1px 2px rgba(0,0,0,0.15)' },
    '.text-shadow-md': { textShadow: '0 2px 4px rgba(0,0,0,0.18)' },
    '.text-shadow-lg': { textShadow: '0 4px 10px rgba(0,0,0,0.2)' },
  })
})

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#2C4364',
        primary: '#2C4364',
        secondary: '#29BFC0',
        warning: '#F2994A',
        error: '#ED6161',
        grey: '#969FAB',
        dark: '#222B59',
        screen: '#F3F6F8',
        splashOrbRing: '#BFC0FAA6',
      },
      borderRadius: {
        frame: '32px',
      },
      boxShadow: {
        card: '0 4px 16px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans JP',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [trackingPercent, textShadow],
} satisfies Config
