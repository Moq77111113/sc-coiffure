<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { BrandIcons } from '../icons'
import { ref } from 'vue'
import MobileNav from '../atoms/MobileNav.vue'
import LogoComponent from '../atoms/LogoComponent.vue'

const sections = ref([
  { name: 'Horaires', href: '#schedule' },
  { name: `Le salon`, href: '#us' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
])
</script>
<template>
  <header
    class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg h-16 md:h-20 px-4 py-2 lg:px-6"
  >
    <div class="mr-4 md:mr-1 flex justify-between items-center w-full">
      <MobileNav />
      <LogoComponent class="hidden md:block size-14" />

      <nav class="hidden md:flex justify-center self-end flex-grow gap-4 sm:gap-6">
        <Link
          v-for="{ name, href } in sections"
          :key="name"
          :href="href"
          class="text-sm font-bold hover:underline underline-offset-4"
        >
          {{ name }}
        </Link>
      </nav>
      <div class="flex space-x-4">
        <a href="#" target="_blank" rel="noopener, noreferrer"
          ><BrandIcons.facebook class="size-6"
        /></a>
        <a href="#" target="_blank" rel="noopener, noreferrer">
          <BrandIcons.instagram class="size-6"
        /></a>
      </div>
    </div>
  </header>
</template>
