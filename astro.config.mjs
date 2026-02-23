import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Reemplaza con tu URL de GitHub Pages
  site: 'https://victorBBQ.github.io',
  base: '/Projektbesprechung', 
  vite: {
    plugins: [tailwindcss()]
  }
});