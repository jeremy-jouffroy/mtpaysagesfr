// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages sans domaine perso : https://jeremy-jouffroy.github.io/mtpaysagesfr/
// Avec un domaine perso (ex. mtpaysages.fr) : SITE_URL=https://www.mtpaysages.fr BASE_PATH=/
const site = process.env.SITE_URL ?? 'https://jeremy-jouffroy.github.io';
const base = process.env.BASE_PATH ?? '/mtpaysagesfr';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/merci/') })],
});
