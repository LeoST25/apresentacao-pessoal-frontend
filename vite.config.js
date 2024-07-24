import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: 'https://leost25.github.io/apresentacao-pessoal-frontend/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
  // outras configurações
})