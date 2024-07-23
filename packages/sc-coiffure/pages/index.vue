<script setup lang="ts">
import Layout from '@/components/layout/AppLayout.vue';

import type { Feed } from '~/types/db';
import Contact from '../components/sections/Contact.vue';
import Hero from '../components/sections/Hero.vue';
import Ig from '../components/sections/Ig.vue';
import Infos from '../components/sections/Info.vue';
import Realisations from '../components/sections/Realisations.vue';
import Salon from '../components/sections/Salon.vue';
import Services from '../components/sections/Services.vue';

useHead({
  title: 'SC Coiffure',
  meta: [
    { name: 'description', content: 'SC Coiffure, votre coiffeur de confiance sur le port de La Seyne-sur-Mer. Avec ou sans rendez-vous, profitez de notre expertise pour sublimer votre style.' }
  ],
})

const {data: feed, status} = useLazyAsyncData<Feed[]>('feed', () => $fetch('/api/ig/feed'))

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
      <Contact />
    </main>
  </Layout>
</template>
