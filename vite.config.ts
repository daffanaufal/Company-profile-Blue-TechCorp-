import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  // Exclude lucide-react from optimization to prevent issues
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Configure live server settings
  server: {
    // Enable hot module replacement
    hmr: true,
    // Watch for file changes
    watch: {
      usePolling: true,
    },
    // Host configuration for network access
    host: true,
  },
});