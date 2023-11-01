import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://sccoiffure83.fr',
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), svelte(), mdx()],
  redirects: {
    '/legal': {
      status: 302,
      destination: '/',
    },
    '/privacy': {
      status: 302,
      destination: '/',
    },
    '/gallery': {
      status: 302,
      destination: '/',
    },
    '/api/posts': {
      status: 302,
      destination: '/',
    },
    '/api/reviews': {
      status: 302,
      destination: '/',
    },
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
