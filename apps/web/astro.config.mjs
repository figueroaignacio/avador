// @ts-check
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: 'tmgct2ia',
      dataset: 'avador',
      apiVersion: '2025-07-09',
      studioBasePath: '/studio',
      useCdn: false,
    }),
  ],
});
