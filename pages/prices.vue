<script setup lang="ts">
import Layout from '@/components/layout/AppLayout.vue'

import { seo, title } from '@/constants/seo'
import { social } from '@/constants/social'
import RecursiveAccordion from '~/components/ui/accordion/RecursiveAccordion.vue'
import type { RecursiveAccordionProps } from '~/components/ui/accordion/types'
import type { PriceTree } from '~/types/prices'

const route = useRoute()
const url = new URL(route.fullPath, social.web)
const ogImage = new URL('/social.jpg', social.web)

useHead({
  link: [
    {
      rel: 'canonical',
      href: url.toString(),
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(seo.schema({ canonical: url, image: ogImage }), null, 2),
    },
  ],
})

useSeoMeta({
  title: seo.title,
  description: seo.description,
  publisher: social.facebook,
  ogImage: ogImage.toString(),
  ogUrl: url.toString(),
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

const { data: categories } = useLazyAsyncData<PriceTree[]>('prices', () => {
  const { apiSecret } = useRuntimeConfig()
  return $fetch<PriceTree[]>('/api/prices', {
    headers: {
      authorization: `Bearer ${apiSecret}`,
    },
  })
})

const toSubTree = (tree: PriceTree): RecursiveAccordionProps<{ name: string; amount: number }> => ({
  value: tree.name,
  data: tree.prices,
  subItems: tree.categories.map(toSubTree),
})
</script>

<template>
  <Layout>
    <main class="relative">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-handwritten md:text-4xl lg:text-5xl text-center mb-8 md:mb-12 lg:mb-16">
          Les prix
        </h2>

        <Accordion
          type="multiple"
          class="max-w-4xl mx-auto"
          collapsible
          :default-value="categories?.[0].name">
          <RecursiveAccordion
            v-for="category in categories"
            :key="category.name"
            :item="{
              value: category.name,
              data: category.prices,
              subItems: category.categories.map(toSubTree),
            }">
            <template #trigger="item">
              <h3 class="text-xl tracking-wide">{{ item.item.value }}</h3>
            </template>

            <template #content="data">
              <div v-for="(price, i) in data.data" :key="i" class="flex justify-between text-lg">
                <p>{{ price.name }}</p>
                <p>{{ price.amount }}€</p>
              </div>
            </template>
          </RecursiveAccordion>
        </Accordion>
      </div>
    </main>
  </Layout>
</template>
