import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://sccoiffure83.fr',
  adapter: netlify(),
  integrations: [tailwind(), svelte(), mdx()],

  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  output: 'server',
});
