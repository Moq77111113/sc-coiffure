<script setup lang="ts">
import { ref } from 'vue';

const pics = ref(
  Array(12)
    .fill('')
    .map((_, index) => ({
      src: `https://picsum.photos/seed/${index}/256`,
      alt: `Image ${index}`,
    }))
);
</script>

<template>
  <section id="ig" class="w-full py-8 md:py-12 lg:py-20">
    <div class="container px-4 md:px-6">
      <article class="flex flex-col space-y-6">
        <div class="flex items-center space-x-2">
          <div
            class="relative size-16 rounded-full bg-gradient-to-r from-yellow-200 to-pink-600 p-1"
          >
            <img
              loading="lazy"
              class="size-full rounded-full"
              src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt="@sccoiffure"
            />
          </div>
          <div class="flex flex-col items-start">
            <span>SC Coiffure</span>
          </div>
        </div>

        <div
          class="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
        >
          <template v-for="pic in pics" :key="pic.src">
            <img
              loading="lazy"
              :src="pic.src"
              :alt="pic.alt"
              class="size-full object-cover"
            />
          </template>
        </div>
      </article>
    </div>
  </section>
</template>
