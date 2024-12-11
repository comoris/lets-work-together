const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: 'color-mix(in srgb, var(--color-primary-base) 70%, white)',
          100: 'color-mix(in srgb, var(--color-primary-base) 75%, white)',
          200: 'color-mix(in srgb, var(--color-primary-base) 80%, white)',
          300: 'color-mix(in srgb, var(--color-primary-base) 85%, white)',
          400: 'color-mix(in srgb, var(--color-primary-base) 90%, white)',
          500: 'color-mix(in srgb, var(--color-primary-base) 100%, white)',
          600: 'color-mix(in srgb, var(--color-primary-base) 90%, black)',
          700: 'color-mix(in srgb, var(--color-primary-base) 80%, black)',
          800: 'color-mix(in srgb, var(--color-primary-base) 70%, black)',
          900: 'color-mix(in srgb, var(--color-primary-base) 60%, black)',
        },
      },
    },
  },
  plugins: [],
};
