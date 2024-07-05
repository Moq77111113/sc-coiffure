<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { BrandIcons } from '../icons';
import { ref } from 'vue';
import MobileNav from '../atoms/MobileNav.vue';
import LogoComponent from '../atoms/LogoComponent.vue';

const sections = ref([
  { name: 'Horaires', href: '#schedule' },
  { name: `Le salon`, href: '#us' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]);
</script>
<template>
  <header
    class="sticky top-0 z-40 h-16 bg-background/80 px-4 py-2 backdrop-blur-lg md:h-20 lg:px-6"
  >
    <div class="mr-4 flex w-full items-center justify-between md:mr-1">
      <MobileNav />
      <LogoComponent class="hidden size-14 md:block" />

      <nav class="hidden grow justify-center gap-4 self-end sm:gap-6 md:flex">
        <Link
          v-for="{ name, href } in sections"
          :key="name"
          :href="href"
          class="text-sm font-bold underline-offset-4 transition-all duration-200 ease-in-out hover:-mt-2 hover:underline"
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
