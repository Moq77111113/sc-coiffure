<script setup lang="ts">
import type { Feed } from '~/types/pages'

const { feed } = defineProps<{ feed: Feed }>()
</script>

<template>
  <section id="portfolio"  v-motion-slide-visible-once-top class="w-full py-8 md:py-12 lg:py-20">
    <div class="container px-4 md:px-6">
      <article class="flex flex-col space-y-6">
        <div class="flex items-center space-x-2">
          <div class="relative size-16 rounded-full">
            <a
              href="https://www.instagram.com/sccoiffure83"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="sr-only">Instagram</span>
              <img
                loading="lazy"
                class="size-full rounded-full"
                :src="`/logo_ig.webp`"
                alt="@sccoiffure"
              />
            </a>
          </div>
          <div class="flex flex-col items-start">
            <span>SC Coiffure</span>
          </div>
        </div>

        <div
          class="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
        >
          <template v-for="pic in feed" :key="pic.src">
            <a :href="pic.permalink" target="_blank" rel="noopener noreferrer">
              <img
                loading="lazy"
                :src="pic.media_url"
                :alt="pic.caption || ''"
                class="size-full object-cover"
              />
            </a>
          </template>
        </div>
      </article>
    </div>
  </section>
</template>import type { Feed } from '~/types/pages';

