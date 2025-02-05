// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import path from 'path';

import db from '@astrojs/db';

import auth from 'auth-astro';

import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Map the virtual module to the actual file path
        'auth:config': path.resolve('./auth.config.ts'),
      },
    },
  },

  output: 'server',
  adapter: netlify(),
  integrations: [db(), auth(), react()],
});