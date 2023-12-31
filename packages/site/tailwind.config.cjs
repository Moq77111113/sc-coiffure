const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        display: [
          'Plus Jakarta Sans',
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      textColor: {
        default: 'var(--color-text)',
        offset: 'var(--color-text-offset)',
      },
      backgroundColor: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)',
      },
      borderColor: {
        default: 'var(--color-border)',
        offset: 'var(--color-border-offset)',
        accent: 'var(--color-accent)',
      },
      keyframes: {
        clouding: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(0, 15px, 0)' },
        },
      },
      animation: {
        clouding: 'clouding linear 2.5s infinite alternate',
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require('tailwindcss-fluid-type')],
};
