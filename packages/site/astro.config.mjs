import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://sccoiffure83.fr',
  output: 'hybrid',
  adapter: netlify(),
  integrations: [tailwind(), svelte(), mdx()],
  redirects: {
    '/incoming': {
      status: 302,
      destination: '/',
    },
  },

  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
