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
          foreground: 'rgba(var(--primary-foreground))',
          strong: 'rgba(var(--primary-strong))',
          light: 'rgba(var(--primary-light))',
          extralight: 'rgba(var(--primary-extralight))'
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
        },
        'wires-socket': {
          border: {
            DEFAULT: 'rgba(var(--wires-socket-border-any))',
            int: 'rgba(var(--wires-socket-border-int))',
            float: 'rgba(var(--wires-socket-border-float))',
            bool: 'rgba(var(--wires-socket-border-bool))',
            string: 'rgba(var(--wires-socket-border-string))',
            date: 'rgba(var(--wires-socket-border-date))',
            json: 'rgba(var(--wires-socket-border-json))',
            any: 'rgba(var(--wires-socket-border-any))'
          },
          bg: {
            DEFAULT: 'rgba(var(--wires-socket-bg-any))',
            int: 'rgba(var(--wires-socket-bg-int))',
            float: 'rgba(var(--wires-socket-bg-float))',
            bool: 'rgba(var(--wires-socket-bg-bool))',
            string: 'rgba(var(--wires-socket-bg-string))',
            date: 'rgba(var(--wires-socket-bg-date))',
            json: 'rgba(var(--wires-socket-bg-json))',
            any: 'rgba(var(--wires-socket-bg-any))'
          }
        }
      },
      backgroundImage: {
        'wires-modbus': 'var(--wires-modbus)',
        'wires-boolean': 'var(--wires-boolean)',
        'wires-const': 'var(--wires-const)',
        'wires-count': 'var(--wires-count)',
        'wires-filter': 'var(--wires-filter)',
        'wires-folder': 'var(--wires-folder)',
        'wires-hvac': 'var(--wires-hvac)',
        'wires-latch': 'var(--wires-latch)',
        'wires-link': 'var(--wires-link)',
        'wires-math': 'var(--wires-math)',
        'wires-numeric-transform': 'var(--wires-numeric-transform)',
        'wires-streams': 'var(--wires-streams)',
        'wires-time': 'var(--wires-time)',
        'wires-rubix': 'var(--wires-rubix)',
        'wires-alarms': 'var(--wires-alarms)',
        'wires-histories': 'var(--wires-histories)',
        'wires-rql': 'var(--wires-rql)',
        'wires-schedules': 'var(--wires-schedules)',
        'wires-mqtt': 'var(--wires-mqtt)',
        'wires-points': 'var(--wires-points)',
        'wires-action': 'var(--wires-action)',
        'wires-debug': 'var(--wires-debug)',
        'wires-flow': 'var(--wires-flow)',
        'wires-state': 'var(--wires-state)',
        'wires-query': 'var(--wires-query)',
        'wires-event': 'var(--wires-event)',
        'wires-logic': 'var(--wires-logic)',
        'wires-compare': 'var(--wires-compare)',
        'wires-statistics': 'var(--wires-statistics)',
        'wires-none': 'var(--wires-none)'
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
