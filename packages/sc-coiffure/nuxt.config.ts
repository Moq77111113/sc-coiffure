// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    databaseUrl: '',
    metaApiKey: '',
    metaClientId: '',
    igClientId: '',
    igClientSecret: '',
    igApiUrl: 'https://api.instagram.com',
    igGraphUrl: 'https://graph.instagram.com',
    igReturnUrl: '',
    igScope: 'user_profile,user_media',
  },
  app: {
    head: {
      title: 'SC Coiffure',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'SC Coiffure' },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['./assets/css/tailwind.css'],
  modules: [
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    'nuxt-cron',
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
  cron: {
    timeZone: 'Europe/Paris',
    jobsDir: 'jobs',
    runOnInit: true,
  },
})
