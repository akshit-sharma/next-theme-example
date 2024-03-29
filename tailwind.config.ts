import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      colors: {
        // Basic theme colors
        bgWebsite: 'var(--color-bg-website)',
        bgCard: 'var(--color-bg-card)',
        bgCardHover: 'var(--color-bg-card-hover)',
        bgNav: 'var(--color-bg-nav)',
        bgAside: 'var(--color-bg-aside)',
        bgContent: 'var(--color-bg-content)',
        textSecondary: 'var(--color-text-secondary)',
        textSecondaryHover: 'var(--color-text-secondary-hover)',
        textPrimary: 'var(--color-text-primary)',
        textDefault: 'var(--color-text-default)',
        active: 'var(--color-active)',
        icon: 'var(--color-icon)',
        hoverBg: 'var(--color-hover-bg)',
        hoverText: 'var(--color-hover-text)',
      },
  },
  plugins: [],
} satisfies Config
