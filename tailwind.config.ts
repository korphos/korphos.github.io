import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f6f7f9',
          dark: '#12141a',
          'dark-soft': '#191c24',
        },
        ink: {
          DEFAULT: '#15181f',
          soft: '#565c6b',
          dark: '#f2f3f5',
          'dark-soft': '#a4aab8',
        },
        accent: {
          DEFAULT: '#3457d5',
          light: '#5b7cf0',
          dark: '#8ba3ff',
        },
        neon: {
          green: '#4de6a0',
          blue: '#4fd2ec',
          magenta: '#e768dc',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
}
