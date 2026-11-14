import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base:
    process.env.VITE_BASE_PATH ||
    (command === 'serve' || process.env.VERCEL ? '/' : '/laser/'),
  plugins: [react()],
  build: {
    sourcemap: false,
    target: 'es2020',
  },
}));
