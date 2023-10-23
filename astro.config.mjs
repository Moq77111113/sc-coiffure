import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://salonsc83.fr",
  output: "server",
  adapter: node({ mode: "middleware" }),
  integrations: [tailwind(), svelte(), mdx()],

  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
