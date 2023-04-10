import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/walky-admin/',
  server: {
    fs: {
      strict: true,
    },
    proxy: {
      '/api': {
        target: 'https://galgord.github.io/walky-admin/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    sourcemap: true,
  },
})
