import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/", // Asegura rutas absolutas válidas en producción
  plugins: [
    react(),
    tailwindcss()
  ],
})