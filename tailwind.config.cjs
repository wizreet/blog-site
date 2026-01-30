/**
 * Tailwind CSS Configuration
 *
 * @description Tailwind setup for the portfolio site with custom theme,
 * typography plugin, and dark mode support.
 *
 * @see https://tailwindcss.com/docs/configuration
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content paths for class detection
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],

  // Dark mode via class (controlled by ThemeSwitch component)
  darkMode: 'class',

  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ["'JetBrains Mono Variable'", 'Consolas', 'monospace'],
      },

      // Custom colors using CSS variables for theme flexibility
      colors: {
        primary: 'oklch(var(--primary) / <alpha-value>)',
        secondary: 'oklch(var(--secondary) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        background: {
          DEFAULT: 'var(--page-bg)',
          card: 'var(--card-bg)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        border: 'var(--border-color)',
      },

      // Custom spacing
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },

      // Custom max-widths
      maxWidth: {
        page: 'var(--page-width)',
        content: 'var(--content-width)',
      },

      // Custom border radius
      borderRadius: {
        large: 'var(--radius-large)',
        medium: 'var(--radius-medium)',
        small: 'var(--radius-small)',
      },

      // Custom box shadows
      boxShadow: {
        card: 'var(--shadow-card)',
        hover: 'var(--shadow-hover)',
        elevated: 'var(--shadow-elevated)',
      },

      // Custom transitions
      transitionDuration: {
        DEFAULT: '200ms',
        fast: '100ms',
        slow: '300ms',
      },

      // Animation keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.95)' },
        },
      },

      // Animation classes
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        pulse: 'pulse 2s ease-in-out infinite',
      },

      // Typography plugin customization
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text-primary)',
            '--tw-prose-headings': 'var(--text-primary)',
            '--tw-prose-lead': 'var(--text-secondary)',
            '--tw-prose-links': 'oklch(var(--primary))',
            '--tw-prose-bold': 'var(--text-primary)',
            '--tw-prose-counters': 'var(--text-secondary)',
            '--tw-prose-bullets': 'var(--text-tertiary)',
            '--tw-prose-hr': 'var(--border-color)',
            '--tw-prose-quotes': 'var(--text-secondary)',
            '--tw-prose-quote-borders': 'oklch(var(--primary))',
            '--tw-prose-captions': 'var(--text-tertiary)',
            '--tw-prose-code': 'var(--text-primary)',
            '--tw-prose-pre-code': 'var(--text-primary)',
            '--tw-prose-pre-bg': 'var(--card-bg)',
            '--tw-prose-th-borders': 'var(--border-color)',
            '--tw-prose-td-borders': 'var(--border-color)',

            // Heading styles
            h1: {
              fontWeight: '700',
              fontSize: '2rem',
            },
            h2: {
              fontWeight: '600',
              fontSize: '1.5rem',
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.25rem',
            },

            // Link styles
            a: {
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },

            // Code styles
            code: {
              fontFamily: theme('fontFamily.mono'),
              fontWeight: '400',
              backgroundColor: 'var(--code-bg)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              '&::before': { content: 'none' },
              '&::after': { content: 'none' },
            },

            // Pre styles (code blocks)
            pre: {
              backgroundColor: 'var(--code-bg)',
              borderRadius: 'var(--radius-medium)',
              padding: '1rem',
            },

            // Blockquote styles
            blockquote: {
              fontStyle: 'normal',
              borderLeftWidth: '4px',
              borderLeftColor: 'oklch(var(--primary))',
              backgroundColor: 'var(--blockquote-bg)',
              padding: '0.5rem 1rem',
              borderRadius: '0 var(--radius-small) var(--radius-small) 0',
            },

            // Image styles
            img: {
              borderRadius: 'var(--radius-medium)',
            },

            // Table styles
            table: {
              width: '100%',
              borderCollapse: 'collapse',
            },
            th: {
              backgroundColor: 'var(--table-header-bg)',
              fontWeight: '600',
            },
            'th, td': {
              padding: '0.75rem',
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--border-color)',
            },
          },
        },
      }),
    },
  },

  plugins: [
    // Typography plugin for prose styling
    require('@tailwindcss/typography'),

    // Custom plugin for utility classes
    function ({ addUtilities, addComponents }) {
      // Text opacity utilities (Fuwari convention)
      addUtilities({
        '.text-90': {
          '@apply text-black/90 dark:text-white/90': {},
        },
        '.text-75': {
          '@apply text-black/75 dark:text-white/75': {},
        },
        '.text-50': {
          '@apply text-black/50 dark:text-white/50': {},
        },
        '.text-30': {
          '@apply text-black/30 dark:text-white/30': {},
        },
      });

      // Card and button base components
      addComponents({
        '.card-base': {
          '@apply bg-[var(--card-bg)] rounded-large overflow-hidden transition-all duration-200':
            {},
        },
        '.btn-base': {
          '@apply inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium':
            {},
        },
        '.btn-primary': {
          '@apply btn-base bg-[oklch(var(--primary))] text-white hover:opacity-90': {},
        },
        '.btn-secondary': {
          '@apply btn-base bg-[var(--btn-regular-bg)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-bg)]':
            {},
        },
        '.btn-plain': {
          '@apply flex items-center justify-center transition rounded-lg hover:bg-[var(--btn-hover-bg)]':
            {},
        },
        '.link': {
          '@apply hover:text-[oklch(var(--primary))] hover:underline transition-colors': {},
        },
      });
    },
  ],
};
