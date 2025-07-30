// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace "portfolio" with your repo name
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
