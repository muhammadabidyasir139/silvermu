import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        silver: {
          50:  '#F5F5F5',
          100: '#E8E8E8',
          200: '#D0CFCF',
          300: '#C0BEB5',
          400: '#A8A8A0',
          500: '#888780',
          600: '#6B6B65',
          700: '#4F4F4C',
          800: '#444441',
          900: '#2C2C2A',
        },
        cream: '#F9F5EC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #D0CFCF 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
    },
  },
  plugins: [],
};

export default config;
