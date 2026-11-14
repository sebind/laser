/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Sans"', '"Geist"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        canvas: 'var(--surface-canvas)',
        surface: {
          primary: 'var(--surface-primary)',
          subtle: 'var(--surface-subtle)',
          secondary: 'var(--surface-secondary)',
          tertiary: 'var(--surface-tertiary)',
          nav: 'var(--surface-nav)',
          overlay: 'var(--overlay-lg)',
        },
        border: {
          primary: 'var(--border-primary)',
          strong: 'var(--border-strong)',
          accent: 'var(--border-accent)',
        },
        ink: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          accent: 'var(--text-accent)',
          inverted: 'var(--text-inverted)',
          error: 'var(--text-error)',
          success: 'var(--text-success)',
        },
        action: {
          primary: 'var(--action-primary)',
          hover: 'var(--action-primary-hover)',
          active: 'var(--action-primary-active)',
          subtle: 'var(--action-subtle)',
        },
      },
      transitionTimingFunction: {
        weighted: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
