import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#144542',
        'secondary': '#50817E',
        'cream': '#F8F5E7',
        'tertiary': '#dee4da',
        'quaternary': '#3C5956'
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' }
        }
      },
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
}
export default config
