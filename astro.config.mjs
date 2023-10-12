import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  output: "hybrid",
  adapter: node({ mode: "middleware" }),
  integrations: [tailwind(), svelte()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
