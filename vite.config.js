import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/apresentacao-pessoal-frontend/',
  plugins: [react()],
  // outras configurações
})