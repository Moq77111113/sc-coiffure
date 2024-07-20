<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'


import { ref } from 'vue'
import LogoComponent from './LogoComponent.vue'

const sections = ref([
  { name: 'Horaires', href: '#schedule' },
  { name: `Le salon`, href: '#us' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
])
</script>
<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="ghost"
        class="mr-2 shrink-0 px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <svg
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
        >
          <path
            d="M3 5H11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 12H16"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 19H21"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="sr-only">Toggle Menu</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent
      :side-offset="4"
      align="start"
      class="w-64 space-y-4 border-none bg-muted text-muted-foreground"
    >
      <LogoComponent />
      <div class="flex flex-col space-y-2">
        <div v-for="item in sections" :key="item.href" class="flex flex-col">
          <NuxtLink :href="item.href">
            {{ item.name }}
          </NuxtLink>
          <div class="my-2 h-[0.2pt] w-12 bg-muted-foreground/70" />
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
