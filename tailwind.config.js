/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#050505',
          surface: '#0d0808',
          card: '#120a0a',
          cardHover: '#190e0e',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(239, 68, 68, 0.4)',
        },
        brand: {
          red: '#ef4444',
          crimson: '#dc2626',
          fireDark: '#991b1b',
          flame: '#f97316',
          amber: '#f59e0b',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'float-reverse': 'floatReverse 6.5s ease-in-out infinite',
        'float-delayed': 'floatSlow 5.5s ease-in-out 1.5s infinite',
        'floating-sticker': 'floatingSticker 5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'spin-slow': 'spinSlow 25s linear infinite',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.06)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(9px) rotate(-2deg)' },
        },
        floatingSticker: {
          '0%, 100%': { transform: 'translateY(0px) rotate(1.5deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-1deg)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
