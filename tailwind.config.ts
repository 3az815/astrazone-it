import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F9FC',
          muted: '#F1F5F9',
        },
        ink: {
          DEFAULT: '#0F172A',
          light: '#475569',
          faint: '#94A3B8',
        },
        brand: {
          DEFAULT: '#006BFF',
          electric: '#008CFF',
          cyan: '#00C2FF',
          deep: '#0047B3',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        arabic: ['"Cairo"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(135deg, #006BFF 0%, #00C2FF 100%)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(0,140,255,0.12), transparent 60%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.08)',
        card: '0 1px 3px rgba(15,23,42,0.06), 0 20px 40px -20px rgba(0,107,255,0.15)',
        glow: '0 0 0 1px rgba(0,140,255,0.15), 0 8px 30px -6px rgba(0,140,255,0.35)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-node': 'pulseNode 3s ease-in-out infinite',
        'drift': 'drift 22s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseNode: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0) rotate(0deg)' },
          '100%': { transform: 'translate(-40px,-30px) rotate(360deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
