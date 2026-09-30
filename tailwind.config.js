/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0E16',
          panel: '#12182A',
          panel2: '#161D33',
          line: '#232B42',
        },
        ink: {
          DEFAULT: '#EDEFF5',
          muted: '#8B93A7',
          faint: '#5A6379',
        },
        signal: {
          DEFAULT: '#4FD1C5',
          soft: '#3FA89F',
        },
        violet: {
          DEFAULT: '#8B7FE8',
          soft: '#6F63C4',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(-2%,2%,0)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        rise: 'rise 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
