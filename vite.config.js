// vite.config.js

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [], // Use Vue.js plugin
  server: {
    port: 3000, // Port for development server
  },
  build: {
    outDir: 'dist', // Output directory for production build
  },
})
