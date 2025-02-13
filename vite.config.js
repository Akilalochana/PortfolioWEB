import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true,
    chunkSizeWarningLimit: 1600,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
})
