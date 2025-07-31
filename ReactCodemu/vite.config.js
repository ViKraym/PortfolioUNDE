import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Папка для сборки
    rollupOptions: {
      input: {
        main: './src/App.jsx' // Укажите правильный путь к вашему app.js
      }
    }
  },
  base: '/PortfolioUNDE/ReactCodemu/', // Добавьте базовый путь для GitHub Pages
});
