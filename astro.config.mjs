import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://victorBBQ.github.io',
  base: '/Projektbesprechung/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});