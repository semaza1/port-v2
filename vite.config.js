import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // Clean imports: import Button from '@/components/ui/Button'
      "@": path.resolve(__dirname, "./src"),
    },
  },

  css: {
    // PostCSS handled by tailwind
  },

  server: {
    port: 5173,
    open: true,
  },

  build: {
    // Separate vendor chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          react:         ['react', 'react-dom'],
          router:        ['react-router-dom'],
          motion:        ['framer-motion'],
        },
      },
    },
    // Set a slightly higher warn limit for a portfolio with animations
    chunkSizeWarningLimit: 600,
  },
});