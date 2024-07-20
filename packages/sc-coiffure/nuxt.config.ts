// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  },
  devtools: { enabled: true },
  css: ['./assets/css/tailwind.css'],
  modules: [
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    configPath: 'tailwind.config.ts',
    cssPath: './assets/css/main.css',
  },
  shadcn: {
    componentDir: './components/ui',
  },
})
