import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 50, // Reduce quality to 50%
      },
      jpeg: {
        quality: 50,
      },
      png: {
        quality: 50,
      },
    }),
  ],
  server: {
    host: true,
    port: 5173
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png']
})
