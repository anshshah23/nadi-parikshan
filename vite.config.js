import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this matches your app's deployment base URL
  build: {
    rollupOptions: {
      external: ['@react-google-maps/api'], // Add this line to externalize the module
      outDir: 'dist', // Default for Vite
    },
  }
})
