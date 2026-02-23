import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://victorBBQ.github.io',
  base: '/Projektbesprechung', 
  vite: {
    plugins: [tailwindcss()]
  }
});