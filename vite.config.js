import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Substitua "NOME_DO_REPOSITORIO" pelo nome do repositório no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/circulo-das-quintas/', // Caminho base para o GitHub Pages
});
