import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: 'https://leost25.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
  // outras configurações
})