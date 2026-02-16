// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';


const domain =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

// https://astro.build/config
export default defineConfig({
  site: domain,
  base: "/",
  output: 'server',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});