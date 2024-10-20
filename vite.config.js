import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src',  // Project source folder
  server: {
    open: true,  // Automatically open the app in the browser
  },
  build: {
    outDir: '../dist',  // Output folder after build
  },
});