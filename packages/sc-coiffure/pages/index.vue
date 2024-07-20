<script setup lang="ts">
import Layout from '@/components/layout/AppLayout.vue';

import Contact from '../components/sections/Contact.vue';
import Hero from '../components/sections/Hero.vue';
import Ig from '../components/sections/Ig.vue';
import Infos from '../components/sections/Info.vue';
import Realisations from '../components/sections/Realisations.vue';
import Reviews from '../components/sections/Reviews.vue';
import Salon from '../components/sections/Salon.vue';
import Services from '../components/sections/Services.vue';

useHead({
  title: 'SC Coiffure',
  meta: [
    { name: 'description', content: 'SC Coiffure, votre coiffeur de confiance sur le port de La Seyne-sur-Mer. Avec ou sans rendez-vous, profitez de notre expertise pour sublimer votre style.' }
  ],
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>


<template>
  <!-- <Head title="SC Coiffure" /> -->
  <Layout>
    <main class="relative">
      <Hero />
      <Infos />
      <Realisations />
      <Salon />
      <Services />
      <!-- <Ig :feed="feed" /> -->
      <Contact />
    </main>
  </Layout>
</template>
