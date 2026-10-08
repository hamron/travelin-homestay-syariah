// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { site } from './src/config';

// https://astro.build/config
export default defineConfig({
  // Dipakai untuk sitemap.xml, canonical URL, dan pratinjau saat link dibagikan
  site: site.url,

  // /katalog sengaja tidak ditautkan & noindex — jangan sampai bocor lewat sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/katalog') })],

  vite: {
    plugins: [tailwindcss()],
  },
});
