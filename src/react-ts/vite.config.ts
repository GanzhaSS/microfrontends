import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx', // Укажите ваш основной файл
      name: 'MyReactApp',
      fileName: 'my-react-app',
    },
    rollupOptions: {
      // Укажите внешние зависимости, если нужно
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
