<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { BrandIcons } from '../icons'
import { ref } from 'vue'

const sections = ref([
  { name: 'Horaires', href: '#schedule' },
  { name: `Le salon`, href: '#us' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
])
</script>
<template>
  <header class="px-4 py-2 lg:px-6 h-20 flex items-center justify-between">
    <Link href="#" class="flex items-center">
      <img src="./logomark.svg" alt="SC Coiffure" class="size-14" />
      <span class="sr-only">SC Coiffure</span>
    </Link>
    <nav class="flex justify-center self-end flex-grow gap-4 sm:gap-6">
      <Link
        v-for="{ name, href } in sections"
        :href="href"
        class="text-sm font-bold hover:underline underline-offset-4"
      >
        {{ name }}
      </Link>
    </nav>
    <div class="flex space-x-2">
      <a href="#" target="_blank" rel="noopener, noreferrer"
        ><BrandIcons.facebook class="size-6"
      /></a>
      <a href="#" target="_blank" rel="noopener, noreferrer">
        <BrandIcons.instagram class="size-6"
      /></a>
    </div>
  </header>
</template>
