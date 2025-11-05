import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Ensure the Tailwind Vite plugin is invoked
  plugins: [react(), tailwindcss()],
})
