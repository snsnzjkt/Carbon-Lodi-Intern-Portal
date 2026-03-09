import { type Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        amazing: {
          white: '#FFFFFF',
          black: '#000000',
          yellow: '#F9B233',
          magenta: '#E6007A',
          gradientFrom: '#F9B233',
          gradientTo: '#E6007A',
        },
      },
      backgroundImage: {
        'amazing-gradient': 'linear-gradient(90deg, #F9B233 0%, #E6007A 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
