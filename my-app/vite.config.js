import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '', // don't prefix URLs
  build: {
    outDir: '../web-app-static', // OUTPUT to your exported static folder
    emptyOutDir: false,          // Don’t delete existing Web Studio files
    assetsDir: 'assets',         // Match the root-level `assets/` folder
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/entries/[name]-[hash].js',
        chunkFileNames: 'assets/chunks/[name]-[hash].js',
        assetFileNames: 'assets/static/[name]-[hash][extname]',
      },
    },
  },
})
