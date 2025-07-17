import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Updated to match resume
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure asset URLs are correctly processed
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
