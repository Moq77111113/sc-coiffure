<script setup lang="ts">
import Layout from '@/components/layout/AppLayout.vue'

import { seo, title } from '@/constants/seo'
import { social } from '@/constants/social'
import type { PriceTree } from '~/types/prices'

const route = useRoute()
const page = new URL(route.fullPath, social.web)
const ogImage = new URL('/social.jpg', social.web)

useSeoMeta({
  title: seo.priceTitle,
  description: seo.priceDescription,
  publisher: social.facebook,
  ogImage: ogImage.toString(),
  ogUrl: page.toString(),
  ogImageWidth: 342,
  ogImageHeight: 192,
  ogImageAlt: seo.siteName,
  ogImageType: 'image/jpeg',
  articleAuthor: [social.facebook],
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: seo.description,
  twitterImage: ogImage.toString(),
})

const { data: categories, status } = useLazyAsyncData<PriceTree[]>('prices', () => {
  const { apiSecret } = useRuntimeConfig()
  return $fetch<PriceTree[]>('/api/prices', {
    headers: {
      authorization: `Bearer ${apiSecret}`,
    },
  })
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: page.toString(),
    },
  ],
  script: () => [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(
        seo.priceSchema({
          page,

          categories: categories.value ?? [],
        }),
        null,
        2,
      ),
    },
  ],
})
</script>

<template>
  <Layout>
    <main class="relative py-12 md:py-24">
      <div class="container mx-auto px-4 flex flex-col">
        <h2
          class="text-3xl font-handwritten md:text-4xl lg:text-5xl text-center mb-8 md:mb-12 lg:mb-16">
          Les tarifs
        </h2>

        <div v-if="status !== 'success'" class="flex justify-center items-center h-96">
          <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>

        <section v-if="categories?.length" class="self-center max-w-3xl space-y-6 w-full">
          <AtomsPriceList v-for="category in categories" :key="category.name" :tree="category" />
        </section>
      </div>
    </main>
  </Layout>
</template>
