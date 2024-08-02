<script setup lang="ts">
import Layout from '@/components/layout/AppLayout.vue';
import Contact from '@/components/sections/Contact.vue';
import Hero from '@/components/sections/Hero.vue';
import Ig from '@/components/sections/Ig.vue';
import Infos from '@/components/sections/Info.vue';
import Realisations from '@/components/sections/Realisations.vue';
import Salon from '@/components/sections/Salon.vue';
import Services from '@/components/sections/Services.vue';
import { seo, title } from '@/constants/seo';
import { social } from '@/constants/social';
import type { Feed } from '~/types/db';

const route = useRoute();
const url = new URL(route.fullPath, social.web);
const ogImage = new URL('/social.jpg', social.web);

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
      innerHTML: JSON.stringify(
        seo.schema({ canonical: url, image: ogImage }),
        null,
        2
      ),
    },
  ],
});

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
});


const { data: feed, status } = useLazyAsyncData<Feed[]>('feed', () => {
  const { apiSecret } = useRuntimeConfig();
  return $fetch<Feed[]>('/api/ig/feed', {
    headers: {
      authorization: `Bearer ${apiSecret}`,
    },
  })

})

const { data: contactToken, status: hasContactToken } = useLazyAsyncData<{
  value: string;
}>('contact_token', () => {
  const { apiSecret } = useRuntimeConfig();
  return $fetch<{ value: string }>('/api/token/contact_token', {
    headers: {
      authorization: `Bearer ${apiSecret}`,
    },
  })}
);
</script>

<template>
  <Layout>
    <main class="relative">
      <Hero />
      <Infos />
      <Realisations />
      <Salon />
      <Services />
      <Ig v-if="status === 'success' && feed?.length" :feed="feed" />
      <Contact
        v-if="hasContactToken === 'success' && contactToken"
        :token="contactToken.value"
      />
    </main>
  </Layout>
</template>
