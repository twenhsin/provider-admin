// tailwind.config.ts
// Auto-generated from tokens-map.json

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,vue,ts}',
    './app.vue',
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Core Colors
        'black': 'var(--color-black)',
        'white': 'var(--color-white)',
        'brand': 'var(--color-brand)',
        'transparent': 'var(--color-transparent)',

        // Surface Colors
        'surface': {
          100: 'var(--color-surface-100)',
          200: 'var(--color-surface-200)',
          300: 'var(--color-surface-300)',
        },

        // Gray Scale
        'gray': {
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },

        // Red Scale
        'red': {
          100: 'var(--color-red-100)',
          200: 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
          500: 'var(--color-red-500)',
          600: 'var(--color-red-600)',
          700: 'var(--color-red-700)',
          800: 'var(--color-red-800)',
          900: 'var(--color-red-900)',
        },

        // Orange Scale
        'orange': {
          100: 'var(--color-orange-100)',
          200: 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
          500: 'var(--color-orange-500)',
          600: 'var(--color-orange-600)',
          700: 'var(--color-orange-700)',
          800: 'var(--color-orange-800)',
          900: 'var(--color-orange-900)',
        },

        // Yellow Scale
        'yellow': {
          100: 'var(--color-yellow-100)',
          200: 'var(--color-yellow-200)',
          300: 'var(--color-yellow-300)',
          400: 'var(--color-yellow-400)',
          500: 'var(--color-yellow-500)',
          600: 'var(--color-yellow-600)',
          700: 'var(--color-yellow-700)',
          800: 'var(--color-yellow-800)',
          900: 'var(--color-yellow-900)',
        },

        // Green Scale
        'green': {
          100: 'var(--color-green-100)',
          200: 'var(--color-green-200)',
          300: 'var(--color-green-300)',
          400: 'var(--color-green-400)',
          500: 'var(--color-green-500)',
          600: 'var(--color-green-600)',
          700: 'var(--color-green-700)',
          800: 'var(--color-green-800)',
          900: 'var(--color-green-900)',
        },

        // Teal Scale
        'teal': {
          100: 'var(--color-teal-100)',
          200: 'var(--color-teal-200)',
          300: 'var(--color-teal-300)',
          400: 'var(--color-teal-400)',
          500: 'var(--color-teal-500)',
          600: 'var(--color-teal-600)',
          700: 'var(--color-teal-700)',
          800: 'var(--color-teal-800)',
          900: 'var(--color-teal-900)',
        },

        // Blue Scale
        'blue': {
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
          800: 'var(--color-blue-800)',
          900: 'var(--color-blue-900)',
        },

        // Indigo Scale
        'indigo': {
          100: 'var(--color-indigo-100)',
          200: 'var(--color-indigo-200)',
          300: 'var(--color-indigo-300)',
          400: 'var(--color-indigo-400)',
          500: 'var(--color-indigo-500)',
          600: 'var(--color-indigo-600)',
          700: 'var(--color-indigo-700)',
          800: 'var(--color-indigo-800)',
          900: 'var(--color-indigo-900)',
        },

        // Purple Scale
        'purple': {
          100: 'var(--color-purple-100)',
          200: 'var(--color-purple-200)',
          300: 'var(--color-purple-300)',
          400: 'var(--color-purple-400)',
          500: 'var(--color-purple-500)',
          600: 'var(--color-purple-600)',
          700: 'var(--color-purple-700)',
          800: 'var(--color-purple-800)',
          900: 'var(--color-purple-900)',
        },

        // Pink Scale
        'pink': {
          100: 'var(--color-pink-100)',
          200: 'var(--color-pink-200)',
          300: 'var(--color-pink-300)',
          400: 'var(--color-pink-400)',
          500: 'var(--color-pink-500)',
          600: 'var(--color-pink-600)',
          700: 'var(--color-pink-700)',
          800: 'var(--color-pink-800)',
          900: 'var(--color-pink-900)',
        },

        // Semantic Colors
        'bg-page': 'var(--bg-page)',
        'bg-subtle': 'var(--bg-subtle)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-primary': 'var(--bg-primary)',
        'bg-primary-hover': 'var(--bg-primary-hover)',
        'bg-primary-active': 'var(--bg-primary-active)',

        'text-default': 'var(--text-default)',
        'text-secondary': 'var(--text-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-disabled': 'var(--text-disabled)',

        'border-default': 'var(--border-default)',
        'border-primary': 'var(--border-primary)',
        'border-primary-hover': 'var(--border-primary-hover)',

        'icon-default': 'var(--icon-default)',
        'icon-secondary': 'var(--icon-secondary)',
        'icon-primary': 'var(--icon-primary)',
      },

      spacing: {
        '100': 'var(--spacing-100)',
        '200': 'var(--spacing-200)',
        '300': 'var(--spacing-300)',
        '400': 'var(--spacing-400)',
        '500': 'var(--spacing-500)',
        '600': 'var(--spacing-600)',
        '700': 'var(--spacing-700)',
        '800': 'var(--spacing-800)',
        '900': 'var(--spacing-900)',
        '1000': 'var(--spacing-1000)',
      },

      gap: {
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
      },

      padding: {
        'sm': 'var(--padding-sm)',
        'md': 'var(--padding-md)',
        'lg': 'var(--padding-lg)',
        'xl': 'var(--padding-xl)',
        '2xl': 'var(--padding-2xl)',
        '3xl': 'var(--padding-3xl)',
      },

      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },

      fontSize: {
        'h1': 'var(--font-size-h1)',
        'h2': 'var(--font-size-h2)',
        'h3': 'var(--font-size-h3)',
        'body-l': 'var(--font-size-body-l)',
        'body-m': 'var(--font-size-body-m)',
        'body-s': 'var(--font-size-body-s)',
        'body-xs': 'var(--font-size-body-xs)',
      },

      fontWeight: {
        'regular': 'var(--font-weight-regular)',
        'medium': 'var(--font-weight-medium)',
        'bold': 'var(--font-weight-bold)',
      },

      lineHeight: {
        'flat': 'var(--line-height-flat)',
        'tight': 'var(--line-height-tight)',
        'comfortable': 'var(--line-height-comfortable)',
      },

      letterSpacing: {
        'tighter': 'var(--letter-spacing-tighter)',
        'tight': 'var(--letter-spacing-tight)',
        'normal': 'var(--letter-spacing-normal)',
        'relaxed': 'var(--letter-spacing-relaxed)',
        'loose': 'var(--letter-spacing-loose)',
        'looser': 'var(--letter-spacing-looser)',
      },

      borderWidth: {
        'none': 'var(--border-width-none)',
        'thin': 'var(--border-width-100)',
        'medium': 'var(--border-width-200)',
        'thick': 'var(--border-width-300)',
      },

      opacity: {
        '10': 'var(--opacity-10)',
        '50': 'var(--opacity-50)',
        '90': 'var(--opacity-90)',
      },

      fontFamily: {
        'sans': 'var(--font-family-sans)',
      },
    },
  },
  plugins: [],
} 
