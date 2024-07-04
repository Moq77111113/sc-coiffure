<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Layout from '~/components/layout/AppLayout.vue'

import Hero from './sections/HeroSection.vue'
import Schedule from './sections/ScheduleSection.vue'
import SalonSection from './sections/SalonSection.vue'
import RealisationsSection from './sections/RealisationsSection.vue'
import ServiceSection from './sections/ServiceSection.vue'
import IGSection from './sections/IGSection.vue'
import ReviewsSection from './sections/ReviewsSection.vue'
defineProps<{ version: number }>()
</script>

<template>
  <Head title="SC Coiffure" />
  <Layout>
    <main class="relative">
      <Hero />
      <Schedule />
      <RealisationsSection />
      <SalonSection />
      <ServiceSection />
      <IGSection />
      <ReviewsSection />
    </main>
  </Layout>
</template>
