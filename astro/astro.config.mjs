// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '..', 'src'),
      },
    },
  },
});