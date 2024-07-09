<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Layout from '~/components/layout/AppLayout.vue';
import Hero from './sections/Hero.vue';
import Infos from './sections/Info.vue';
import Salon from './sections/Salon.vue';
import Realisations from './sections/Realisations.vue';
import Services from './sections/Services.vue';
import Ig from './sections/Ig.vue';
import Reviews from './sections/Reviews.vue';
import type { Feed } from '~/types/pages';
const { feed } = defineProps<{ feed: Feed }>();
</script>

<template>
  <Head title="SC Coiffure" />
  <Layout>
    <main class="relative">
      <Hero />
      <Infos />
      <Realisations />
      <Salon />
      <Services />
      <Ig :feed="feed" />
      <Reviews />
    </main>
  </Layout>
</template>
