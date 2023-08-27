import formsPlugin from '@tailwindcss/forms'
import colors from './src/constants/colors'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        light: colors.light,
        accent: colors.accent
      },
      fontFamily: {
        martel: ['Martel'],
        'nunito-sans': ['Nunito Sans']
      }
    }
  },
  plugins: [formsPlugin]
}
