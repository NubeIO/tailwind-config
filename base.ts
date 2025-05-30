import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'rgba(var(--border))',
        input: 'rgba(var(--input))',
        ring: 'rgba(var(--ring))',
        background: 'rgba(var(--background))',
        foreground: 'rgba(var(--foreground))',
        primary: {
          DEFAULT: 'rgba(var(--primary))',
          foreground: 'rgba(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'rgba(var(--secondary))',
          foreground: 'rgba(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'rgba(var(--destructive))',
          foreground: 'rgba(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'rgba(var(--muted))',
          foreground: 'rgba(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'rgba(var(--accent))',
          foreground: 'rgba(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'rgba(var(--popover))',
          foreground: 'rgba(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'rgba(var(--card))',
          foreground: 'rgba(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'rgba(var(--sidebar-background))',
          foreground: 'rgba(var(--sidebar-foreground))',
          primary: 'rgba(var(--sidebar-primary))',
          'primary-foreground': 'rgba(var(--sidebar-primary-foreground))',
          accent: 'rgba(var(--sidebar-accent))',
          'accent-foreground': 'rgba(var(--sidebar-accent-foreground))',
          border: 'rgba(var(--sidebar-border))',
          ring: 'rgba(var(--sidebar-ring))'
        }
      },
      borderColor: {
        DEFAULT: 'rgba(var(--border))'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
          }
        }
      },
      animation: {
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      mono: ['var(--font-mono)', ...fontFamily.mono]
    },
    plugins: []
  }
} satisfies Config;
