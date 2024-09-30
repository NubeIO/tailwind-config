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
        }
      },
      borderColor: {
        DEFAULT: 'rgba(var(--border))'
      }
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      mono: ['var(--font-mono)', ...fontFamily.mono]
    },
    plugins: []
  }
} satisfies Config;
