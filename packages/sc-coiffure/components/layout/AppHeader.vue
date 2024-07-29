<script setup lang="ts">
import LogoComponent from '@/components/atoms/LogoComponent.vue';
import MobileNav from '@/components/atoms/MobileNav.vue';
import { BrandIcons, Icons } from '@/components/icons';
import { social } from '@/constants/social';
import { ref } from 'vue';

const sections = ref([
  { name: 'Horaires', href: '#schedule' },
  { name: `Le salon`, href: '#us' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]);

const online = typeof window === 'undefined' || window?.navigator.onLine

const showOfflineMessage = ref(true)
</script>
<template>
  <header class="sticky top-0 z-40 h-16 bg-background/80 px-4 py-2 backdrop-blur-lg md:h-20 lg:px-6">
    <div class="mr-4 flex w-full items-center justify-between md:mr-1">
      <MobileNav />
      <LogoComponent class="hidden size-14 md:block" />
      <h1 class="font-handwritten text-2xl/relaxed tracking-wider md:hidden">
        SC Coiffure
      </h1>
      <nav class="hidden grow justify-center gap-4 self-end sm:gap-6 md:flex">
        <NuxtLink
v-for="{ name, href } in sections" :key="name" :href="href"
          class="text-sm font-bold underline-offset-4 transition-all duration-200 ease-in-out hover:-mt-2 hover:underline">
          {{ name }}
        </NuxtLink>
      </nav>
      <div class="flex space-x-4">
        <a :href="social.facebook" target="_blank" rel="noopener, noreferrer">
          <BrandIcons.facebook class="size-6" />
        </a>
        <a :href="social.instagram" target="_blank" rel="noopener, noreferrer">
          <BrandIcons.instagram class="size-6" />
        </a>
      </div>
    </div>
  </header>
  <div
v-if="!online && showOfflineMessage"
    class="sticky z-40 top-16 md:top-20 text-muted-foreground bg-destructive/80 px-4 py-1  text-center text-xs flex items-center justify-center space-x-2">
    <span>Il semble que vous soyez déconnecté, le site fonctionne en mode dégradé</span>
    <Button variant='ghost' class="hover:bg-[unset] hover:text-[unset] size-6 hover:scale-110 p-1 " size='icon' @click="() => (showOfflineMessage = false)">
      <Icons.Close />
    </Button>
  </div>
</template>
