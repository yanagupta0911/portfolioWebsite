/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        palette: {
          cyan: '#89D2DC',
          indigo: '#6564DB',
          electric: '#232ED1',
          navy: '#101D42',
          nearblack: '#0D1317',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'gradient-cyan-indigo': 'linear-gradient(135deg, #89D2DC, #6564DB)',
        'gradient-indigo-electric': 'linear-gradient(135deg, #6564DB, #232ED1)',
        'gradient-electric-navy': 'linear-gradient(135deg, #232ED1, #101D42)',
        'grid-pattern': "linear-gradient(to right, rgba(137,210,220,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(137,210,220,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('light', '&:where(.light, .light *)');
    },
  ],
};
